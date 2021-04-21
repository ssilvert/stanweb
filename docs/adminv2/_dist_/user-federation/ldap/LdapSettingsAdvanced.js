import { FormGroup, Switch } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsAdvanced = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("advancedSettings"),
    description: helpText("ldapAdvancedSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("enableLdapv3Password"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("enableLdapv3PasswordHelp"),
      forLabel: t("enableLdapv3Password"),
      forID: "kc-enable-ldapv3-password"
    }),
    fieldId: "kc-enable-ldapv3-password",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.usePasswordModifyExtendedOp",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-enable-ldapv3-password",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("validatePasswordPolicy"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("validatePasswordPolicyHelp"),
      forLabel: t("validatePasswordPolicy"),
      forID: "kc-validate-password-policy"
    }),
    fieldId: "kc-validate-password-policy",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.validatePasswordPolicy",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-validate-password-policy",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("trustEmail"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("trustEmailHelp"),
      forLabel: t("trustEmail"),
      forID: "kc-trust-email"
    }),
    fieldId: "kc-trust-email",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.trustEmail",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-trust-email",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  }))));
};