import React, { useState } from "../../../web_modules/react.js";
import { FormGroup, Select, SelectOption, SelectVariant, Switch, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useWatch } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import _ from "../../../web_modules/lodash.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const KerberosSettingsRequired = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  const {
    realm
  } = useRealm();
  const [isEditModeDropdownOpen, setIsEditModeDropdownOpen] = useState(false);
  const allowPassAuth = useWatch({
    control: form.control,
    name: "config.allowPasswordAuthentication"
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("requiredSettings"),
    description: helpText("kerberosRequiredSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("consoleDisplayName"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("consoleDisplayNameHelp"),
      forLabel: t("consoleDisplayName"),
      forID: "kc-console-display-name"
    }),
    fieldId: "kc-console-display-name",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    hidden: true,
    type: "text",
    id: "kc-console-providerId",
    name: "providerId",
    defaultValue: "kerberos",
    ref: form.register
  }), /*#__PURE__*/React.createElement(TextInput, {
    hidden: true,
    type: "text",
    id: "kc-console-providerType",
    name: "providerType",
    defaultValue: "org.keycloak.storage.UserStorageProvider",
    ref: form.register
  }), /*#__PURE__*/React.createElement(TextInput, {
    hidden: true,
    type: "text",
    id: "kc-console-parentId",
    name: "parentId",
    defaultValue: realm,
    ref: form.register
  }), /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-console-name",
    name: "name",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateName")}`
      }
    }),
    "data-testid": "kerberos-name"
  }), form.errors.name && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.name.message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("kerberosRealm"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("kerberosRealmHelp"),
      forLabel: t("kerberosRealm"),
      forID: "kc-kerberos-realm"
    }),
    fieldId: "kc-kerberos-realm",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-kerberos-realm",
    name: "config.kerberosRealm[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateRealm")}`
      }
    }),
    "data-testid": "kerberos-realm"
  }), form.errors.config && form.errors.config.kerberosRealm && form.errors.config.kerberosRealm[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.kerberosRealm[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("serverPrincipal"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("serverPrincipalHelp"),
      forLabel: t("serverPrincipal"),
      forID: "kc-server-principal"
    }),
    fieldId: "kc-server-principal",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-server-principal",
    name: "config.serverPrincipal[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateServerPrincipal")}`
      }
    }),
    "data-testid": "kerberos-principal"
  }), form.errors.config && form.errors.config.serverPrincipal && form.errors.config.serverPrincipal[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.serverPrincipal[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("keyTab"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("keyTabHelp"),
      forLabel: t("keyTab"),
      forID: "kc-key-tab"
    }),
    fieldId: "kc-key-tab",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-key-tab",
    name: "config.keyTab[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateKeyTab")}`
      }
    }),
    "data-testid": "kerberos-keytab"
  }), form.errors.config && form.errors.config.keyTab && form.errors.config.keyTab[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.keyTab[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("debug"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("debugHelp"),
      forLabel: t("debug"),
      forID: "kc-debug"
    }),
    fieldId: "kc-debug",
    hasNoPaddingTop: true
  }, " ", /*#__PURE__*/React.createElement(Controller, {
    name: "config.debug",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-debug",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("allowPasswordAuthentication"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("allowPasswordAuthenticationHelp"),
      forLabel: t("allowPasswordAuthentication"),
      forID: "kc-allow-password-authentication"
    }),
    fieldId: "kc-allow-password-authentication",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.allowPasswordAuthentication",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-allow-password-authentication",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), _.isEqual(allowPassAuth, ["true"]) ? /*#__PURE__*/React.createElement(FormGroup, {
    label: t("editMode"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("editModeKerberosHelp"),
      forLabel: t("editMode"),
      forID: "kc-edit-mode"
    }),
    isRequired: true,
    fieldId: "kc-edit-mode"
  }, " ", /*#__PURE__*/React.createElement(Controller, {
    name: "config.editMode[0]",
    defaultValue: "READ_ONLY",
    control: form.control,
    rules: {
      required: true
    },
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-edit-mode",
      required: true,
      onToggle: () => setIsEditModeDropdownOpen(!isEditModeDropdownOpen),
      isOpen: isEditModeDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsEditModeDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: "READ_ONLY",
      isPlaceholder: true
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "UNSYNCED"
    }))
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("updateFirstLogin"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("updateFirstLoginHelp"),
      forLabel: t("updateFirstLogin"),
      forID: "kc-update-first-login"
    }),
    fieldId: "kc-update-first-login",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.updateProfileFirstLogin",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-update-first-login",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  }))));
};