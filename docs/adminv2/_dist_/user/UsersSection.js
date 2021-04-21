import React, { useContext, useEffect, useState } from "../../web_modules/react.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant, Label, PageSection, ToolbarItem, Tooltip } from "../../web_modules/@patternfly/react-core.js";
import { ExclamationCircleIcon, InfoCircleIcon, WarningTriangleIcon } from "../../web_modules/@patternfly/react-icons.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { RealmContext } from "../context/realm-context/RealmContext.js";
import { SearchUser } from "./SearchUser.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { emptyFormatter } from "../util.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import "./user-section.css.proxy.js";
import { Link, useHistory, useRouteMatch } from "../../web_modules/react-router-dom.js";
export const UsersSection = () => {
  const {
    t
  } = useTranslation("users");
  const handleError = useErrorHandler();
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    realm: realmName
  } = useContext(RealmContext);
  const history = useHistory();
  const {
    url
  } = useRouteMatch();
  const [listUsers, setListUsers] = useState(false);
  const [initialSearch, setInitialSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("");

  const refresh = () => setKey(`${new Date().getTime()}`);

  useEffect(() => {
    return asyncStateFetch(() => {
      const testParams = {
        type: "org.keycloak.storage.UserStorageProvider"
      };
      return Promise.all([adminClient.components.find(testParams), adminClient.users.count()]);
    }, response => {
      //should *only* list users when no user federation is configured and uses count > 100
      setListUsers(!(response[0] && response[0].length > 0 || response[1] > 100));
    }, handleError);
  }, []);

  const UserDetailLink = user => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    key: user.username,
    to: `${url}/${user.id}/details`
  }, user.username));

  const loader = async (first, max, search) => {
    const params = {
      first: first,
      max: max
    };
    const searchParam = search || initialSearch || "";

    if (searchParam) {
      params.search = searchParam;
      setSearch(searchParam);
    }

    if (!listUsers && !searchParam) {
      return [];
    }

    try {
      const users = await adminClient.users.find({ ...params
      });
      const realm = await adminClient.realms.findOne({
        realm: realmName
      });

      if (realm?.bruteForceProtected) {
        const brutes = await Promise.all(users.map(user => adminClient.attackDetection.findOne({
          id: user.id
        })));

        for (let index = 0; index < users.length; index++) {
          const user = users[index];
          user.brute = brutes[index];
        }
      }

      return users;
    } catch (error) {
      addAlert(t("noUsersFoundError", {
        error
      }), AlertVariant.danger);
      return [];
    }
  };

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "users:deleteConfirm",
    messageKey: t("deleteConfirmDialog", {
      count: selectedRows.length
    }),
    continueButtonLabel: "delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        for (const user of selectedRows) {
          await adminClient.users.del({
            id: user.id
          });
        }

        setSelectedRows([]);
        refresh();
        addAlert(t("userDeletedSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("userDeletedError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const StatusRow = user => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, !user.enabled && /*#__PURE__*/React.createElement(Label, {
      key: user.id,
      color: "red",
      icon: /*#__PURE__*/React.createElement(InfoCircleIcon, null)
    }, t("disabled")), user.brute?.disabled && /*#__PURE__*/React.createElement(Label, {
      key: user.id,
      color: "orange",
      icon: /*#__PURE__*/React.createElement(WarningTriangleIcon, null)
    }, t("temporaryDisabled")), user.enabled && !user.brute?.disabled && "—");
  };

  const ValidatedEmail = user => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, !user.emailVerified && /*#__PURE__*/React.createElement(Tooltip, {
      key: `email-verified-${user.id}`,
      content: /*#__PURE__*/React.createElement(React.Fragment, null, t("notVerified"))
    }, /*#__PURE__*/React.createElement(ExclamationCircleIcon, {
      className: "keycloak__user-section__email-verified"
    })), " ", emptyFormatter()(user.email));
  };

  const goToCreate = () => history.push(`${url}/add-user`);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "users:title",
    subKey: ""
  }), /*#__PURE__*/React.createElement(PageSection, {
    "data-testid": "users-page",
    variant: "light"
  }, !listUsers && !initialSearch && /*#__PURE__*/React.createElement(SearchUser, {
    onSearch: search => {
      setInitialSearch(search);
    }
  }), (listUsers || initialSearch) && /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "users:title",
    searchPlaceholderKey: "users:searchForUser",
    canSelectAll: true,
    onSelect: rows => setSelectedRows([...rows]),
    emptyState: !search ? /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("noUsersFound"),
      instructions: t("emptyInstructions"),
      primaryActionText: t("createNewUser"),
      onPrimaryAction: goToCreate
    }) : "",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      "data-testid": "add-user",
      onClick: goToCreate
    }, t("addUser"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      variant: ButtonVariant.plain,
      onClick: toggleDeleteDialog
    }, t("deleteUser")))),
    actions: [{
      title: t("common:delete"),
      onRowClick: user => {
        setSelectedRows([user]);
        toggleDeleteDialog();
      }
    }],
    columns: [{
      name: "username",
      displayKey: "users:username",
      cellRenderer: UserDetailLink
    }, {
      name: "email",
      displayKey: "users:email",
      cellRenderer: ValidatedEmail
    }, {
      name: "lastName",
      displayKey: "users:lastName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "firstName",
      displayKey: "users:firstName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "status",
      displayKey: "users:status",
      cellRenderer: StatusRow
    }]
  })));
};