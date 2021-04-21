import React, { useEffect } from "../../web_modules/react.js";
import { ActionGroup, AlertVariant, Button, ButtonVariant, DropdownItem, Form, PageSection } from "../../web_modules/@patternfly/react-core.js";
import { KerberosSettingsRequired } from "./kerberos/KerberosSettingsRequired.js";
import { SettingsCache } from "./shared/SettingsCache.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { convertToFormValues } from "../util.js";
import { Controller, useForm } from "../../web_modules/react-hook-form.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useHistory, useParams } from "../../web_modules/react-router-dom.js";

const KerberosSettingsHeader = ({
  onChange,
  value,
  save,
  toggleDeleteDialog
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const {
    id
  } = useParams();
  const [toggleDisableDialog, DisableConfirm] = useConfirmDialog({
    titleKey: "user-federation:userFedDisableConfirmTitle",
    messageKey: "user-federation:userFedDisableConfirm",
    continueButtonLabel: "common:disable",
    onConfirm: () => {
      onChange("false");
      save();
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisableConfirm, null), id === "new" ? /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "Kerberos",
    subKey: ""
  }) : /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "Kerberos",
    subKey: "",
    dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete",
      onClick: () => toggleDeleteDialog(),
      "data-testid": "delete-kerberos-cmd"
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

export const UserFederationKerberosSettings = () => {
  const {
    t
  } = useTranslation("user-federation");
  const form = useForm({
    mode: "onChange"
  });
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
      form.setValue("config.allowPasswordAuthentication", component.config?.allowPasswordAuthentication);

      if (entry[0] === "config") {
        convertToFormValues(entry[1], "config", form.setValue);
      }

      form.setValue(entry[0], entry[1]);
    });
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(Controller, {
    name: "config.enabled[0]",
    defaultValue: ["true"][0],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(KerberosSettingsHeader, {
      value: value,
      onChange: onChange,
      save: () => save(form.getValues()),
      toggleDeleteDialog: toggleDeleteDialog
    })
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KerberosSettingsRequired, {
    form: form,
    showSectionHeading: true
  })), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    isFilled: true
  }, /*#__PURE__*/React.createElement(SettingsCache, {
    form: form,
    showSectionHeading: true
  }), /*#__PURE__*/React.createElement(Form, {
    onSubmit: form.handleSubmit(save)
  }, /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    isDisabled: !form.formState.isDirty,
    variant: "primary",
    type: "submit",
    "data-testid": "kerberos-save"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.push(`/${realm}/user-federation`),
    "data-testid": "kerberos-cancel"
  }, t("common:cancel"))))));
};