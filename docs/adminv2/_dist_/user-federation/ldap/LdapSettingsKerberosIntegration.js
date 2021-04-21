import { FormGroup, Switch, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller, useWatch } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsKerberosIntegration = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  const allowKerberosAuth = useWatch({
    control: form.control,
    name: "config.allowKerberosAuthentication",
    defaultValue: ["true"]
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("kerberosIntegration"),
    description: helpText("ldapKerberosSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("allowKerberosAuthentication"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("allowKerberosAuthenticationHelp"),
      forLabel: t("allowKerberosAuthentication"),
      forID: "kc-allow-kerberos-authentication"
    }),
    fieldId: "kc-allow-kerberos-authentication",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.allowKerberosAuthentication",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-allow-kerberos-authentication",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), allowKerberosAuth[0] === "true" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
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
  }, form.errors.config.keyTab[0].message))), /*#__PURE__*/React.createElement(FormGroup, {
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
    label: t("useKerberosForPasswordAuthentication"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("useKerberosForPasswordAuthenticationHelp"),
      forLabel: t("useKerberosForPasswordAuthentication"),
      forID: "kc-use-kerberos-password-authentication"
    }),
    fieldId: "kc-use-kerberos-password-authentication",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.useKerberosForPasswordAuthentication",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-use-kerberos-password-authentication",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  }))));
};