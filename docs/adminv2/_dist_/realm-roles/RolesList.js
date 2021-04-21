import React, { useState } from "../../web_modules/react.js";
import { Link, useHistory, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant } from "../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { formattedLinkTableCell } from "../components/external-link/FormattedLink.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { emptyFormatter, boolFormatter } from "../util.js";

const RoleLink = ({
  role
}) => {
  const {
    url
  } = useRouteMatch();
  return /*#__PURE__*/React.createElement(Link, {
    key: role.id,
    to: `${url}/${role.id}/details`
  }, role.name);
};

export const RolesList = ({
  loader,
  paginated = true,
  parentRoleId,
  messageBundle = "roles"
}) => {
  const {
    t
  } = useTranslation(messageBundle);
  const history = useHistory();
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    url
  } = useRouteMatch();
  const [selectedRole, setSelectedRole] = useState();

  const RoleDetailLink = role => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RoleLink, {
    role: role
  }));

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "roles:roleDeleteConfirm",
    messageKey: t("roles:roleDeleteConfirmDialog", {
      selectedRoleName: selectedRole ? selectedRole.name : ""
    }),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        if (!parentRoleId) {
          await adminClient.roles.delById({
            id: selectedRole.id
          });
        } else {
          await adminClient.roles.delCompositeRoles({
            id: parentRoleId
          }, [selectedRole]);
        }

        setSelectedRole(undefined);
        addAlert(t("roleDeletedSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(`${t("roleDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });

  const goToCreate = () => history.push(`${url}/add-role`);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: selectedRole ? selectedRole.id : "roleList",
    loader: loader,
    ariaLabelKey: "roles:roleList",
    searchPlaceholderKey: "roles:searchFor",
    isPaginated: paginated,
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: goToCreate
    }, t("createRole"))),
    actions: [{
      title: t("common:delete"),
      onRowClick: role => {
        setSelectedRole(role);
        toggleDeleteDialog();
      }
    }],
    columns: [{
      name: "name",
      displayKey: "roles:roleName",
      cellRenderer: RoleDetailLink,
      cellFormatters: [formattedLinkTableCell(), emptyFormatter()]
    }, {
      name: "composite",
      displayKey: "roles:composite",
      cellFormatters: [boolFormatter(), emptyFormatter()]
    }, {
      name: "description",
      displayKey: "common:description",
      cellFormatters: [emptyFormatter()]
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t("noRoles"),
      instructions: t("noRolesInstructions"),
      primaryActionText: t("createRole"),
      onPrimaryAction: goToCreate
    })
  }));
};