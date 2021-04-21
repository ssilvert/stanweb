import { FormGroup, Select, SelectOption, SelectVariant, Switch, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React, { useState } from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsSearching = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  const [isSearchScopeDropdownOpen, setIsSearchScopeDropdownOpen] = useState(false);
  const [isEditModeDropdownOpen, setIsEditModeDropdownOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("ldapSearchingAndUpdatingSettings"),
    description: helpText("ldapSearchingAndUpdatingSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("editMode"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("editModeLdapHelp"),
      forLabel: t("editMode"),
      forID: "kc-edit-mode"
    }),
    fieldId: "kc-edit-mode"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.editMode[0]",
    defaultValue: "",
    control: form.control,
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
      value: "",
      isPlaceholder: true
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "READ_ONLY"
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 2,
      value: "WRITABLE"
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 3,
      value: "UNSYNCED"
    }))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("usersDN"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("usersDNHelp"),
      forLabel: t("usersDN"),
      forID: "kc-console-users-dn"
    }),
    fieldId: "kc-console-users-dn",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-console-users-dn",
    "data-testid": "ldap-users-dn",
    name: "config.usersDn[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateUsersDn")}`
      }
    })
  }), form.errors.config && form.errors.config.usersDn && form.errors.config.usersDn[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.usersDn[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("usernameLdapAttribute"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("usernameLdapAttributeHelp"),
      forLabel: t("usernameLdapAttribute"),
      forID: "kc-username-ldap-attribute"
    }),
    fieldId: "kc-username-ldap-attribute",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-username-ldap-attribute",
    "data-testid": "ldap-username-attribute",
    name: "config.usernameLDAPAttribute[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateUsernameLDAPAttribute")}`
      }
    })
  }), form.errors.config && form.errors.config.usernameLDAPAttribute && form.errors.config.usernameLDAPAttribute[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.usernameLDAPAttribute[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("rdnLdapAttribute"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("rdnLdapAttributeHelp"),
      forLabel: t("rdnLdapAttribute"),
      forID: "kc-rdn-ldap-attribute"
    }),
    fieldId: "kc-rdn-ldap-attribute",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-rdn-ldap-attribute",
    "data-testid": "ldap-rdn-attribute",
    name: "config.rdnLDAPAttribute[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateRdnLdapAttribute")}`
      }
    })
  }), form.errors.config && form.errors.config.rdnLDAPAttribute && form.errors.config.rdnLDAPAttribute[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.rdnLDAPAttribute[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("uuidLdapAttribute"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("uuidLdapAttributeHelp"),
      forLabel: t("uuidLdapAttribute"),
      forID: "kc-uuid-ldap-attribute"
    }),
    fieldId: "kc-uuid-ldap-attribute",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-uuid-ldap-attribute",
    "data-testid": "ldap-uuid-attribute",
    name: "config.uuidLDAPAttribute[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateUuidLDAPAttribute")}`
      }
    })
  }), form.errors.config && form.errors.config.uuidLDAPAttribute && form.errors.config.uuidLDAPAttribute[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.uuidLDAPAttribute[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("userObjectClasses"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("userObjectClassesHelp"),
      forLabel: t("userObjectClasses"),
      forID: "kc-user-object-classes"
    }),
    fieldId: "kc-user-object-classes",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-user-object-classes",
    "data-testid": "ldap-user-object-classes",
    name: "config.userObjectClasses[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateUserObjectClasses")}`
      }
    })
  }), form.errors.config && form.errors.config.userObjectClasses && form.errors.config.userObjectClasses[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.userObjectClasses[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("userLdapFilter"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("userLdapFilterHelp"),
      forLabel: t("userLdapFilter"),
      forID: "kc-user-ldap-filter"
    }),
    fieldId: "kc-user-ldap-filter"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-user-ldap-filter",
    name: "config.customUserSearchFilter[0]",
    ref: form.register({
      pattern: {
        value: /(\(.*\))$/,
        message: `${t("validateCustomUserSearchFilter")}`
      }
    })
  }), form.errors.config && form.errors.config.customUserSearchFilter && form.errors.config.customUserSearchFilter[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.customUserSearchFilter[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("searchScope"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("searchScopeHelp"),
      forLabel: t("searchScope"),
      forID: "kc-search-scope"
    }),
    fieldId: "kc-search-scope"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.searchScope[0]",
    defaultValue: "",
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-search-scope",
      required: true,
      onToggle: () => setIsSearchScopeDropdownOpen(!isSearchScopeDropdownOpen),
      isOpen: isSearchScopeDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsSearchScopeDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: "1",
      isPlaceholder: true
    }, t("oneLevel")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "2"
    }, t("subtree")))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("readTimeout"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("readTimeoutHelp"),
      forLabel: t("readTimeout"),
      forID: "kc-read-timeout"
    }),
    fieldId: "kc-read-timeout"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    min: 0,
    id: "kc-read-timeout",
    name: "config.readTimeout[0]",
    ref: form.register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("pagination"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("paginationHelp"),
      forLabel: t("pagination"),
      forID: "kc-console-pagination"
    }),
    fieldId: "kc-console-pagination",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.pagination",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-console-pagination",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  }))));
};