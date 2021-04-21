import React, { useEffect, useState } from "../../web_modules/react.js";
import { useParams } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant, Checkbox, PageSection } from "../../web_modules/@patternfly/react-core.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { emptyFormatter } from "../util.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { cellWidth } from "../../web_modules/@patternfly/react-table.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
export const UserGroups = () => {
  const {
    t
  } = useTranslation("roles");
  const {
    addAlert
  } = useAlerts();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const handleError = useErrorHandler();
  const [selectedGroup, setSelectedGroup] = useState();
  const [listGroups, setListGroups] = useState(true);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [isDirectMembership, setDirectMembership] = useState(false);
  const [open, setOpen] = useState(false);
  const adminClient = useAdminClient();
  const {
    id
  } = useParams();

  const loader = async (first, max, search) => {
    const params = {
      first: first,
      max: max
    };
    const user = await adminClient.users.findOne({
      id
    });
    setUsername(user.username);
    const searchParam = search || "";

    if (searchParam) {
      params.search = searchParam;
      setSearch(searchParam);
    }

    if (!searchParam && !listGroups) {
      return [];
    }

    return await adminClient.users.listGroups({ ...params,
      id
    });
  };

  useEffect(() => {
    return asyncStateFetch(() => {
      return Promise.resolve(adminClient.users.listGroups({
        id
      }));
    }, response => {
      setListGroups(!!(response && response.length > 0));
    }, handleError);
  });
  useEffect(() => {
    refresh();
  }, [isDirectMembership]);

  const AliasRenderer = group => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, group.name);
  };

  const LeaveButtonRenderer = group => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => leave(group),
      variant: "link"
    }, t("users:Leave")));
  };

  const toggleModal = () => setOpen(!open);

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: t("users:leaveGroup", {
      name: selectedGroup?.name
    }),
    messageKey: t("users:leaveGroupConfirmDialog", {
      groupname: selectedGroup?.name,
      username: username
    }),
    continueButtonLabel: "users:leave",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.users.delFromGroup({
          id,
          groupId: selectedGroup.id
        });
        refresh();
        addAlert(t("users:removedGroupMembership"), AlertVariant.success);
      } catch (error) {
        addAlert(t("users:removedGroupMembershipError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const leave = group => {
    setSelectedGroup(group);
    toggleDeleteDialog();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "roles:roleList",
    searchPlaceholderKey: "groups:searchGroup",
    canSelectAll: true,
    onSelect: () => {},
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      className: "kc-join-group-button",
      key: "join-group-button",
      onClick: () => toggleModal(),
      "data-testid": "add-group-button"
    }, t("users:joinGroup")), /*#__PURE__*/React.createElement(Checkbox, {
      label: t("users:directMembership"),
      key: "direct-membership-check",
      id: "kc-direct-membership-checkbox",
      onChange: () => setDirectMembership(!isDirectMembership),
      isChecked: isDirectMembership
    })),
    columns: [{
      name: "groupMembership",
      displayKey: "users:groupMembership",
      cellRenderer: AliasRenderer,
      cellFormatters: [emptyFormatter()],
      transforms: [cellWidth(40)]
    }, {
      name: "path",
      displayKey: "users:Path",
      cellFormatters: [emptyFormatter()],
      transforms: [cellWidth(45)]
    }, {
      name: "",
      cellRenderer: LeaveButtonRenderer,
      cellFormatters: [emptyFormatter()],
      transforms: [cellWidth(20)]
    }],
    emptyState: !search ? /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t("users:noGroups"),
      instructions: t("users:noGroupsText"),
      primaryActionText: t("users:joinGroup"),
      onPrimaryAction: () => {}
    }) : ""
  })));
};