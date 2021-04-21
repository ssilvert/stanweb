import React, { useState } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useHistory } from "../../web_modules/react-router-dom.js";
import { AlertVariant, Button, Modal, ModalVariant } from "../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { emptyFormatter } from "../util.js";
import _ from "../../web_modules/lodash.js";
export const MemberModal = ({
  groupId,
  onClose
}) => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const [selectedRows, setSelectedRows] = useState([]);
  const history = useHistory();
  const {
    realm
  } = useRealm();

  const goToCreate = () => history.push(`/${realm}/users/add-user`);

  const loader = async (first, max, search) => {
    const members = await adminClient.groups.listMembers({
      id: groupId
    });
    const params = {
      first: first,
      max: max + members.length,
      search: search || ""
    };

    try {
      const users = await adminClient.users.find({ ...params
      });
      return _.xorBy(users, members, "id").slice(0, max);
    } catch (error) {
      addAlert(t("noUsersFoundError", {
        error
      }), AlertVariant.danger);
      return [];
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.large,
    title: t("addMember"),
    isOpen: true,
    onClose: onClose,
    actions: [/*#__PURE__*/React.createElement(Button, {
      "data-testid": "add",
      key: "confirm",
      variant: "primary",
      onClick: async () => {
        try {
          await Promise.all(selectedRows.map(user => adminClient.users.addToGroup({
            id: user.id,
            groupId
          })));
          onClose();
          addAlert(t("usersAdded", {
            count: selectedRows.length
          }), AlertVariant.success);
        } catch (error) {
          addAlert(t("usersAddedError"), AlertVariant.danger);
        }
      }
    }, t("common:add")), /*#__PURE__*/React.createElement(Button, {
      "data-testid": "cancel",
      key: "cancel",
      variant: "secondary",
      onClick: onClose
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "users:title",
    searchPlaceholderKey: "users:searchForUser",
    canSelectAll: true,
    onSelect: rows => setSelectedRows([...rows]),
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("users:noUsersFound"),
      instructions: t("users:emptyInstructions"),
      primaryActionText: t("users:createNewUser"),
      onPrimaryAction: goToCreate
    }),
    columns: [{
      name: "username",
      displayKey: "users:username"
    }, {
      name: "email",
      displayKey: "users:email"
    }, {
      name: "lastName",
      displayKey: "users:lastName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "firstName",
      displayKey: "users:firstName",
      cellFormatters: [emptyFormatter()]
    }]
  }));
};