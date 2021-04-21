import React, { useEffect, useState } from "../../web_modules/react.js";
import { useHistory, useParams, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { AlertVariant, ButtonVariant, DropdownItem, PageSection, Tab, TabTitleText } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useFieldArray, useForm } from "../../web_modules/react-hook-form.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { AttributesForm, attributesToArray, arrayToAttributes } from "../components/attribute-form/AttributeForm.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { RealmRoleForm } from "./RealmRoleForm.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { AssociatedRolesModal } from "./AssociatedRolesModal.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
import { AssociatedRolesTab } from "./AssociatedRolesTab.js";
import { UsersInRoleTab } from "./UsersInRoleTab.js";
export const RealmRoleTabs = () => {
  const {
    t
  } = useTranslation("roles");
  const form = useForm({
    mode: "onChange"
  });
  const history = useHistory();
  const adminClient = useAdminClient();
  const [role, setRole] = useState();
  const {
    id,
    clientId
  } = useParams();
  const {
    url
  } = useRouteMatch();
  const {
    realm
  } = useRealm();
  const [key, setKey] = useState("");

  const refresh = () => {
    setKey(`${new Date().getTime()}`);
  };

  const [additionalRoles, setAdditionalRoles] = useState([]);
  const {
    addAlert
  } = useAlerts();
  const [open, setOpen] = useState(false);

  const convert = role => {
    const {
      attributes,
      ...rest
    } = role;
    return {
      attributes: attributesToArray(attributes),
      ...rest
    };
  };

  useEffect(() => {
    const update = async () => {
      if (id) {
        const fetchedRole = await adminClient.roles.findOneById({
          id
        });
        const allAdditionalRoles = await adminClient.roles.getCompositeRoles({
          id
        });
        setAdditionalRoles(allAdditionalRoles);
        const convertedRole = convert(fetchedRole);
        Object.entries(convertedRole).map(entry => {
          form.setValue(entry[0], entry[1]);
        });
        setRole(convertedRole);
      }
    };

    setTimeout(update, 100);
  }, [key]);
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control: form.control,
    name: "attributes"
  }); //useEffect(() => append({ key: "", value: "" }), [append, role]);

  const save = async () => {
    try {
      const role = form.getValues();

      if (role.attributes && role.attributes[role.attributes.length - 1].key === "") {
        form.setValue("attributes", role.attributes.slice(0, role.attributes.length - 1));
      }

      if (!(await form.trigger())) {
        return;
      }

      const {
        attributes,
        ...rest
      } = role;
      const roleRepresentation = rest;

      if (id) {
        if (attributes) {
          roleRepresentation.attributes = arrayToAttributes(attributes);
        }

        if (!clientId) {
          await adminClient.roles.updateById({
            id
          }, roleRepresentation);
        } else {
          await adminClient.clients.updateRole({
            id: clientId,
            roleName: role.name
          }, roleRepresentation);
        }

        await adminClient.roles.createComposite({
          roleId: id,
          realm
        }, additionalRoles);
        setRole(role);
        form.reset(role);
      } else {
        let createdRole;

        if (!clientId) {
          await adminClient.roles.create(roleRepresentation);
          createdRole = await adminClient.roles.findOneByName({
            name: role.name
          });
        } else {
          await adminClient.clients.createRole({
            id: clientId,
            name: role.name
          });

          if (role.description) {
            await adminClient.clients.updateRole({
              id: clientId,
              roleName: role.name
            }, roleRepresentation);
          }

          createdRole = await adminClient.clients.findRole({
            id: clientId,
            roleName: role.name
          });
        }

        setRole(convert(createdRole));
        history.push(url.substr(0, url.lastIndexOf("/") + 1) + createdRole.id + "/details");
      }

      addAlert(t(id ? "roleSaveSuccess" : "roleCreated"), AlertVariant.success);
    } catch (error) {
      addAlert(t((id ? "roleSave" : "roleCreate") + "Error", {
        error: error.response?.data?.errorMessage || error
      }), AlertVariant.danger);
    }
  };

  const addComposites = async composites => {
    const compositeArray = composites;
    setAdditionalRoles([...additionalRoles, ...compositeArray]);

    try {
      await adminClient.roles.createComposite({
        roleId: id,
        realm: realm
      }, compositeArray);
      history.push(url.substr(0, url.lastIndexOf("/") + 1) + "AssociatedRoles");
      refresh();
      addAlert(t("addAssociatedRolesSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(t("addAssociatedRolesError", {
        error
      }), AlertVariant.danger);
    }
  };

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "roles:roleDeleteConfirm",
    messageKey: t("roles:roleDeleteConfirmDialog", {
      name: role?.name || t("createRole")
    }),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        if (!clientId) {
          await adminClient.roles.delById({
            id
          });
        } else {
          await adminClient.clients.delRole({
            id: clientId,
            roleName: role.name
          });
        }

        addAlert(t("roleDeletedSuccess"), AlertVariant.success);
        const loc = url.replace(/\/attributes/g, "");
        history.replace(`${loc.substr(0, loc.lastIndexOf("/"))}`);
      } catch (error) {
        addAlert(`${t("roleDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });
  const [toggleDeleteAllAssociatedRolesDialog, DeleteAllAssociatedRolesConfirm] = useConfirmDialog({
    titleKey: t("roles:removeAllAssociatedRoles") + "?",
    messageKey: t("roles:removeAllAssociatedRolesConfirmDialog", {
      name: role?.name || t("createRole")
    }),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.roles.delCompositeRoles({
          id
        }, additionalRoles);
        addAlert(t("compositeRoleOff"), AlertVariant.success, t("compositesRemovedAlertDescription"));
        const loc = url.replace(/\/AssociatedRoles/g, "/details");
        history.push(loc);
        refresh();
      } catch (error) {
        addAlert(`${t("roleDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });

  const toggleModal = () => setOpen(!open);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(DeleteAllAssociatedRolesConfirm, null), /*#__PURE__*/React.createElement(AssociatedRolesModal, {
    onConfirm: addComposites,
    existingCompositeRoles: additionalRoles,
    open: open,
    toggleDialog: () => setOpen(!open)
  }), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: role?.name || t("createRole"),
    badge: additionalRoles.length > 0 ? t("composite") : "",
    badgeIsRead: true,
    subKey: id ? "" : "roles:roleCreateExplain",
    actionsDropdownId: "roles-actions-dropdown",
    dropdownItems: url.includes("AssociatedRoles") ? [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete-all-associated",
      component: "button",
      onClick: () => toggleDeleteAllAssociatedRolesDialog()
    }, t("roles:removeAllAssociatedRoles")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete-role",
      component: "button",
      onClick: () => toggleDeleteDialog()
    }, t("deleteRole"))] : id ? [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "toggle-modal",
      "data-testid": "add-roles",
      component: "button",
      onClick: () => toggleModal()
    }, t("addAssociatedRolesText")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete-role",
      component: "button",
      onClick: () => toggleDeleteDialog()
    }, t("deleteRole"))] : undefined
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, id && /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "details",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("details"))
  }, /*#__PURE__*/React.createElement(RealmRoleForm, {
    reset: () => form.reset(role),
    form: form,
    save: save,
    editMode: true
  })), additionalRoles.length > 0 ? /*#__PURE__*/React.createElement(Tab, {
    eventKey: "AssociatedRoles",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("associatedRolesText"))
  }, /*#__PURE__*/React.createElement(AssociatedRolesTab, {
    additionalRoles: additionalRoles,
    addComposites: addComposites,
    parentRole: role,
    onRemove: () => refresh() // client={client!}

  })) : null, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "attributes",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("attributes"))
  }, /*#__PURE__*/React.createElement(AttributesForm, {
    form: form,
    save: save,
    array: {
      fields,
      append,
      remove
    },
    reset: () => form.reset(role)
  })), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "users-in-role",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("usersInRole"))
  }, /*#__PURE__*/React.createElement(UsersInRoleTab, {
    "data-cy": "users-in-role-tab"
  }))), !id && /*#__PURE__*/React.createElement(RealmRoleForm, {
    reset: () => form.reset(),
    form: form,
    save: save,
    editMode: false
  })));
};