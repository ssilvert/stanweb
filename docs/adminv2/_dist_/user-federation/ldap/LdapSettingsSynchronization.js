import { FormGroup, Switch, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsSynchronization = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("synchronizationSettings"),
    description: helpText("ldapSynchronizationSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("importUsers"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("importUsersHelp"),
      forLabel: t("importUsers"),
      forID: "kc-import-users"
    }),
    fieldId: "kc-import-users"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.importEnabled",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-import-users",
      name: "importEnabled",
      label: t("common:on"),
      labelOff: t("common:off"),
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      isDisabled: false
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("batchSize"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("batchSizeHelp"),
      forLabel: t("batchSize"),
      forID: "kc-batch-size"
    }),
    fieldId: "kc-batch-size"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    min: 0,
    id: "kc-batch-size",
    name: "config.batchSizeForSync[0]",
    ref: form.register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("fullSyncPeriod"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("fullSyncPeriodHelp"),
      forLabel: t("fullSyncPeriod"),
      forID: "kc-full-sync-period"
    }),
    fieldId: "kc-full-sync-period"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    min: -1,
    id: "kc-full-sync-period",
    name: "config.fullSyncPeriod[0]",
    ref: form.register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("changedUsersSyncPeriod"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("changedUsersSyncHelp"),
      forLabel: t("changedUsersSyncPeriod"),
      forID: "kc-changed-users-sync-period"
    }),
    fieldId: "kc-changed-users-sync-period",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    min: -1,
    id: "kc-changed-users-sync-period",
    name: "config.changedSyncPeriod[0]",
    ref: form.register
  }))));
};