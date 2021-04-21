import { FormGroup, Select, SelectOption, SelectVariant, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React, { useState } from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsGeneral = ({
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
  const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("generalOptions"),
    description: helpText("ldapGeneralOptionsSettingsDescription"),
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
    id: "kc-console-provider-id",
    name: "providerId",
    defaultValue: "ldap",
    ref: form.register
  }), /*#__PURE__*/React.createElement(TextInput, {
    hidden: true,
    type: "text",
    id: "kc-console-provider-type",
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
    id: "kc-console-display-name",
    name: "name",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateName")}`
      }
    }),
    "data-testid": "ldap-name"
  }), form.errors.name && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.name.message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("vendor"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("vendorHelp"),
      forLabel: t("vendor"),
      forID: "kc-vendor"
    }),
    fieldId: "kc-vendor",
    isRequired: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.vendor[0]",
    defaultValue: "",
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-vendor",
      required: true,
      onToggle: () => setIsVendorDropdownOpen(!isVendorDropdownOpen),
      isOpen: isVendorDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsVendorDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single // data-testid="ldap-vendor"

    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: "ad",
      isPlaceholder: true
    }, "Active Directory"), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "rhds"
    }, "Red Hat Directory Server"), /*#__PURE__*/React.createElement(SelectOption, {
      key: 2,
      value: "tivoli"
    }, "Tivoli"), /*#__PURE__*/React.createElement(SelectOption, {
      key: 3,
      value: "edirectory"
    }, "Novell eDirectory"), /*#__PURE__*/React.createElement(SelectOption, {
      key: 4,
      value: "other"
    }, "Other"))
  }))));
};