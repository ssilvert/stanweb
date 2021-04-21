import React, { useEffect } from "../../web_modules/react.js";
import { ActionGroup, AlertVariant, Button, ButtonVariant, DropdownItem, DropdownSeparator, Form, PageSection } from "../../web_modules/@patternfly/react-core.js";
import { LdapSettingsAdvanced } from "./ldap/LdapSettingsAdvanced.js";
import { LdapSettingsKerberosIntegration } from "./ldap/LdapSettingsKerberosIntegration.js";
import { SettingsCache } from "./shared/SettingsCache.js";
import { LdapSettingsSynchronization } from "./ldap/LdapSettingsSynchronization.js";
import { LdapSettingsGeneral } from "./ldap/LdapSettingsGeneral.js";
import { LdapSettingsConnection } from "./ldap/LdapSettingsConnection.js";
import { LdapSettingsSearching } from "./ldap/LdapSettingsSearching.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { convertToFormValues } from "../util.js";
import { Controller, useForm } from "../../web_modules/react-hook-form.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useHistory, useParams } from "../../web_modules/react-router-dom.js";
import { ScrollForm } from "../components/scroll-form/ScrollForm.js";

const LdapSettingsHeader = ({
  onChange,
  value,
  save,
  toggleDeleteDialog,
  toggleRemoveUsersDialog
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const {
    id
  } = useParams();
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const [toggleDisableDialog, DisableConfirm] = useConfirmDialog({
    titleKey: "user-federation:userFedDisableConfirmTitle",
    messageKey: "user-federation:userFedDisableConfirm",
    continueButtonLabel: "common:disable",
    onConfirm: () => {
      onChange("false");
      save();
    }
  });

  const syncChangedUsers = async () => {
    try {
      if (id) {
        const response = await adminClient.userStorageProvider.sync({
          id: id,
          action: "triggerChangedUsersSync"
        });

        if (response.ignored) {
          addAlert(`${response.status}.`, AlertVariant.warning);
        } else {
          addAlert(t("syncUsersSuccess") + `${response.added} users added, ${response.updated} users updated, ${response.removed} users removed, ${response.failed} users failed.`, AlertVariant.success);
        }
      }
    } catch (error) {
      addAlert(t("syncUsersError", {
        error
      }), AlertVariant.danger);
    }
  };

  const syncAllUsers = async () => {
    try {
      if (id) {
        const response = await adminClient.userStorageProvider.sync({
          id: id,
          action: "triggerFullSync"
        });

        if (response.ignored) {
          addAlert(`${response.status}.`, AlertVariant.warning);
        } else {
          addAlert(t("syncUsersSuccess") + `${response.added} users added, ${response.updated} users updated, ${response.removed} users removed, ${response.failed} users failed.`, AlertVariant.success);
        }
      }
    } catch (error) {
      addAlert(t("syncUsersError", {
        error
      }), AlertVariant.danger);
    }
  };

  const unlinkUsers = async () => {
    try {
      if (id) {
        await adminClient.userStorageProvider.unlinkUsers({
          id
        });
      }

      addAlert(t("unlinkUsersSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(t("unlinkUsersError", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisableConfirm, null), id === "new" ? /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "LDAP",
    subKey: ""
  }) : /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "LDAP",
    subKey: "",
    dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "sync",
      onClick: syncChangedUsers
    }, t("syncChangedUsers")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "syncall",
      onClick: syncAllUsers
    }, t("syncAllUsers")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "unlink",
      onClick: unlinkUsers
    }, t("unlinkUsers")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "remove",
      onClick: toggleRemoveUsersDialog
    }, t("removeImported")), /*#__PURE__*/React.createElement(DropdownSeparator, {
      key: "separator"
    }), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete",
      onClick: toggleDeleteDialog,
      "data-testid": "delete-ldap-cmd"
    }, t("deleteProvider"))],
    isEnabled: value === "true",
    onToggle: value => {
      if (!value) {
        toggleDisableDialog();
      } else {
        onChange("" + value);
        save();
      }
    }
  }));
};

export const UserFederationLdapSettings = () => {
  const {
    t
  } = useTranslation("user-federation");
  const form = useForm();
  const history = useHistory();
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const {
    id
  } = useParams();
  const {
    addAlert
  } = useAlerts();
  useEffect(() => {
    (async () => {
      if (id !== "new") {
        const fetchedComponent = await adminClient.components.findOne({
          id
        });

        if (fetchedComponent) {
          setupForm(fetchedComponent);
        }
      }
    })();
  }, []);

  const setupForm = component => {
    form.reset();
    Object.entries(component).map(entry => {
      if (entry[0] === "config") {
        convertToFormValues(entry[1], "config", form.setValue);
      } else {
        form.setValue(entry[0], entry[1]);
      }
    });
  };

  const removeImportedUsers = async () => {
    try {
      if (id) {
        await adminClient.userStorageProvider.removeImportedUsers({
          id
        });
      }

      addAlert(t("removeImportedUsersSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(t("removeImportedUsersError", {
        error
      }), AlertVariant.danger);
    }
  };

  const save = async component => {
    try {
      if (id) {
        if (id === "new") {
          await adminClient.components.create(component);
          history.push(`/${realm}/user-federation`);
        } else {
          await adminClient.components.update({
            id
          }, component);
        }
      }

      setupForm(component);
      addAlert(t(id === "new" ? "createSuccess" : "saveSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(`${t(id === "new" ? "createError" : "saveError")} '${error}'`, AlertVariant.danger);
    }
  };

  const [toggleRemoveUsersDialog, RemoveUsersConfirm] = useConfirmDialog({
    titleKey: t("removeImportedUsers"),
    messageKey: t("removeImportedUsersMessage"),
    continueButtonLabel: "common:remove",
    onConfirm: async () => {
      try {
        removeImportedUsers();
        addAlert(t("removeImportedUsersSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("removeImportedUsersError", {
          error
        }), AlertVariant.danger);
      }
    }
  });
  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "user-federation:userFedDeleteConfirmTitle",
    messageKey: "user-federation:userFedDeleteConfirm",
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.components.del({
          id
        });
        addAlert(t("userFedDeletedSuccess"), AlertVariant.success);
        history.replace(`/${realm}/user-federation`);
      } catch (error) {
        addAlert(`${t("userFedDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(RemoveUsersConfirm, null), /*#__PURE__*/React.createElement(Controller, {
    name: "config.enabled[0]",
    defaultValue: ["true"][0],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(LdapSettingsHeader, {
      value: value,
      save: () => save(form.getValues()),
      onChange: onChange,
      toggleDeleteDialog: toggleDeleteDialog,
      toggleRemoveUsersDialog: toggleRemoveUsersDialog
    })
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    isFilled: true
  }, /*#__PURE__*/React.createElement(ScrollForm, {
    sections: [t("generalOptions"), t("connectionAndAuthenticationSettings"), t("ldapSearchingAndUpdatingSettings"), t("synchronizationSettings"), t("kerberosIntegration"), t("cacheSettings"), t("advancedSettings")]
  }, /*#__PURE__*/React.createElement(LdapSettingsGeneral, {
    form: form
  }), /*#__PURE__*/React.createElement(LdapSettingsConnection, {
    form: form
  }), /*#__PURE__*/React.createElement(LdapSettingsSearching, {
    form: form
  }), /*#__PURE__*/React.createElement(LdapSettingsSynchronization, {
    form: form
  }), /*#__PURE__*/React.createElement(LdapSettingsKerberosIntegration, {
    form: form
  }), /*#__PURE__*/React.createElement(SettingsCache, {
    form: form
  }), /*#__PURE__*/React.createElement(LdapSettingsAdvanced, {
    form: form
  })), /*#__PURE__*/React.createElement(Form, {
    onSubmit: form.handleSubmit(save)
  }, /*#__PURE__*/React.createElement(ActionGroup, {
    className: "keycloak__form_actions"
  }, /*#__PURE__*/React.createElement(Button, {
    isDisabled: !form.formState.isDirty,
    variant: "primary",
    type: "submit",
    "data-testid": "ldap-save"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.push(`/${realm}/user-federation`),
    "data-testid": "ldap-cancel"
  }, t("common:cancel"))))));
};