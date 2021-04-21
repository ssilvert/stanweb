import React, { useEffect, useState } from "../../web_modules/react.js";
import { useHistory, useParams, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant, Checkbox, PageSection, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { formattedLinkTableCell } from "../components/external-link/FormattedLink.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { emptyFormatter } from "../util.js";
import { AssociatedRolesModal } from "./AssociatedRolesModal.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { AliasRendererComponent } from "./AliasRendererComponent.js";
import _ from "../../web_modules/lodash.js";
import { cellWidth } from "../../web_modules/@patternfly/react-table.js";
export const AssociatedRolesTab = ({
  additionalRoles,
  addComposites,
  parentRole,
  onRemove
}) => {
  const {
    t
  } = useTranslation("roles");
  const history = useHistory();
  const {
    addAlert
  } = useAlerts();
  const {
    url
  } = useRouteMatch();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const [selectedRows, setSelectedRows] = useState([]);
  const [isInheritedHidden, setIsInheritedHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const adminClient = useAdminClient();
  const {
    id
  } = useParams();
  const inheritanceMap = React.useRef({});

  const getSubRoles = async (role, allRoles) => {
    // Fetch all composite roles
    const allCompositeRoles = await adminClient.roles.getCompositeRoles({
      id: role.id
    }); // Need to ensure we don't get into an infinite loop, do not add any role that is already there or the starting role

    const newRoles = allCompositeRoles.reduce(async (acc, newRole) => {
      const resolvedRoles = await acc;

      if (!allRoles.find(ar => ar.id === newRole.id)) {
        inheritanceMap.current[newRole.id] = role.name;
        resolvedRoles.push(newRole);
        const subRoles = await getSubRoles(newRole, [...allRoles, ...resolvedRoles]);
        resolvedRoles.push(...subRoles);
      }

      return acc;
    }, Promise.resolve([]));
    return newRoles;
  };

  const alphabetize = rolesList => {
    return _.sortBy(rolesList, role => role.name?.toUpperCase());
  };

  const loader = async (first, max, search) => {
    if (isInheritedHidden) {
      const filteredRoles = additionalRoles.filter(role => !search || role.name?.toLowerCase().includes(search) || role.description?.toLowerCase().includes(search));
      const roles = alphabetize(filteredRoles);
      return roles;
    }

    const fetchedRoles = additionalRoles.reduce(async (acc, role) => {
      const resolvedRoles = await acc;
      resolvedRoles.push(role);
      const subRoles = await getSubRoles(role, resolvedRoles);
      resolvedRoles.push(...subRoles);
      return acc;
    }, Promise.resolve([]));
    return fetchedRoles.then(results => {
      const filteredRoles = results.filter(role => !search || role.name?.toLowerCase().includes(search) || role.description?.toLowerCase().includes(search));
      const roles = alphabetize(filteredRoles);
      return roles;
    });
  };

  useEffect(() => {
    refresh();
  }, [additionalRoles, isInheritedHidden]);

  const InheritedRoleName = role => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, inheritanceMap.current[role.id]);
  };

  const AliasRenderer = role => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AliasRendererComponent, {
      id: id,
      name: role.name,
      adminClient: adminClient,
      containerId: role.containerId
    }));
  };

  const toggleModal = () => setOpen(!open);

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "roles:roleRemoveAssociatedRoleConfirm",
    messageKey: t("roles:roleRemoveAssociatedText"),
    continueButtonLabel: t("common:remove"),
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.roles.delCompositeRoles({
          id
        }, selectedRows);
        setSelectedRows([]);
        addAlert(t("associatedRolesRemoved"), AlertVariant.success);
      } catch (error) {
        addAlert(t("roleDeleteError", {
          error
        }), AlertVariant.danger);
      }
    }
  });
  const [toggleDeleteAssociatedRolesDialog, DeleteAssociatedRolesConfirm] = useConfirmDialog({
    titleKey: t("roles:removeAssociatedRoles") + "?",
    messageKey: t("roles:removeAllAssociatedRolesConfirmDialog", {
      name: parentRole?.name || t("createRole")
    }),
    continueButtonLabel: "common:remove",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        if (selectedRows.length === additionalRoles.length) {
          onRemove(selectedRows);
          const loc = url.replace(/\/AssociatedRoles/g, "/details");
          history.push(loc);
        }

        onRemove(selectedRows);
        await adminClient.roles.delCompositeRoles({
          id
        }, selectedRows);
        addAlert(t("associatedRolesRemoved"), AlertVariant.success);
      } catch (error) {
        addAlert(`${t("roleDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });

  const goToCreate = () => history.push(`${url}/add-role`);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    padding: {
      default: "noPadding"
    }
  }, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(DeleteAssociatedRolesConfirm, null), /*#__PURE__*/React.createElement(AssociatedRolesModal, {
    onConfirm: addComposites,
    existingCompositeRoles: additionalRoles,
    open: open,
    toggleDialog: () => setOpen(!open)
  }), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "roles:roleList",
    searchPlaceholderKey: "roles:searchFor",
    canSelectAll: true,
    onSelect: rows => {
      setSelectedRows([...rows]);
    },
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Hide inherited roles",
      key: "associated-roles-check",
      id: "kc-hide-inherited-roles-checkbox",
      onChange: () => setIsInheritedHidden(!isInheritedHidden),
      isChecked: isInheritedHidden
    })), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      key: "add-role-button",
      onClick: () => toggleModal(),
      "data-testid": "add-role-button"
    }, t("addRole"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      isDisabled: selectedRows.length === 0,
      key: "remove-role-button",
      onClick: () => {
        toggleDeleteAssociatedRolesDialog();
      }
    }, t("removeRoles")))),
    actions: [{
      title: t("common:remove"),
      onRowClick: role => {
        setSelectedRows([role]);
        toggleDeleteDialog();
      }
    }],
    columns: [{
      name: "name",
      displayKey: "roles:roleName",
      cellRenderer: AliasRenderer,
      cellFormatters: [formattedLinkTableCell(), emptyFormatter()],
      transforms: [cellWidth(40)]
    }, {
      name: "containerId",
      displayKey: "roles:inheritedFrom",
      cellRenderer: InheritedRoleName,
      cellFormatters: [emptyFormatter()],
      transforms: [cellWidth(30)]
    }, {
      name: "description",
      displayKey: "common:description",
      cellFormatters: [emptyFormatter()],
      transforms: [cellWidth(30)]
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t("noRolesInThisRealm"),
      instructions: t("noRolesInThisRealmInstructions"),
      primaryActionText: t("createRole"),
      onPrimaryAction: goToCreate
    })
  })));
};