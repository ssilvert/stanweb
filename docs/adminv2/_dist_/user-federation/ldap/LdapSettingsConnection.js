import { Button, FormGroup, InputGroup, Select, SelectOption, SelectVariant, Switch, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React, { useState } from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { EyeIcon, EyeSlashIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const LdapSettingsConnection = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  const [isTruststoreSpiDropdownOpen, setIsTruststoreSpiDropdownOpen] = useState(false);
  const [isBindTypeDropdownOpen, setIsBindTypeDropdownOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("connectionAndAuthenticationSettings"),
    description: helpText("ldapConnectionAndAuthorizationSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("connectionURL"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("consoleDisplayConnectionUrlHelp"),
      forLabel: t("connectionURL"),
      forID: "kc-console-connection-url"
    }),
    fieldId: "kc-console-connection-url",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-console-connection-url",
    "data-testid": "ldap-connection-url",
    name: "config.connectionUrl[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateConnectionUrl")}`
      }
    })
  }), form.errors.config && form.errors.config.connectionUrl && form.errors.config.connectionUrl[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.connectionUrl[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("enableStartTls"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("enableStartTlsHelp"),
      forLabel: t("enableStartTls"),
      forID: "kc-enable-start-tls"
    }),
    fieldId: "kc-enable-start-tls",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.startTls",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-enable-start-tls",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("useTruststoreSpi"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("useTruststoreSpiHelp"),
      forLabel: t("useTruststoreSpi"),
      forID: "kc-use-truststore-spi"
    }),
    fieldId: "kc-use-truststore-spi"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.useTruststoreSpi[0]",
    defaultValue: "",
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-use-truststore-spi",
      onToggle: () => setIsTruststoreSpiDropdownOpen(!isTruststoreSpiDropdownOpen),
      isOpen: isTruststoreSpiDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsTruststoreSpiDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: "always"
    }, t("always")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "ldapsOnly"
    }, t("onlyLdaps")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 2,
      value: "never"
    }, t("never")))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("connectionPooling"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("connectionPoolingHelp"),
      forLabel: t("connectionPooling"),
      forID: "kc-connection-pooling"
    }),
    fieldId: "kc-connection-pooling",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.connectionPooling",
    defaultValue: ["false"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-connection-pooling",
      isDisabled: false,
      onChange: value => onChange([`${value}`]),
      isChecked: value[0] === "true",
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("connectionTimeout"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("connectionTimeoutHelp"),
      forLabel: t("connectionTimeout"),
      forID: "kc-console-connection-timeout"
    }),
    fieldId: "kc-console-connection-timeout"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "number",
    min: 0,
    id: "kc-console-connection-timeout",
    name: "config.connectionTimeout[0]",
    ref: form.register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("bindType"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("bindTypeHelp"),
      forLabel: t("bindType"),
      forID: "kc-bind-type"
    }),
    fieldId: "kc-bind-type",
    isRequired: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.authType[0]",
    defaultValue: "",
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-bind-type",
      required: true,
      onToggle: () => setIsBindTypeDropdownOpen(!isBindTypeDropdownOpen),
      isOpen: isBindTypeDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsBindTypeDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "data-testid": "ldap-bind-type"
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 3,
      value: "simple"
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 4,
      value: "none"
    }))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("bindDn"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("bindDnHelp"),
      forLabel: t("bindDn"),
      forID: "kc-console-bind-dn"
    }),
    fieldId: "kc-console-bind-dn",
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-console-bind-dn",
    "data-testid": "ldap-bind-dn",
    name: "config.bindDn[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateBindDn")}`
      }
    })
  }), form.errors.config && form.errors.config.bindDn && form.errors.config.bindDn[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.bindDn[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("bindCredentials"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("bindCredentialsHelp"),
      forLabel: t("bindCredentials"),
      forID: "kc-console-bind-credentials"
    }),
    fieldId: "kc-console-bind-credentials",
    isRequired: true
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: isPasswordVisible ? "text" : "password",
    id: "kc-console-bind-credentials",
    "data-testid": "ldap-bind-credentials",
    name: "config.bindCredential[0]",
    ref: form.register({
      required: {
        value: true,
        message: `${t("validateBindCredentials")}`
      }
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "control",
    "aria-label": "show password button for bind credentials",
    onClick: () => setIsPasswordVisible(!isPasswordVisible)
  }, !isPasswordVisible ? /*#__PURE__*/React.createElement(EyeIcon, null) : /*#__PURE__*/React.createElement(EyeSlashIcon, null))), form.errors.config && form.errors.config.bindCredential && form.errors.config.bindCredential[0] && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, form.errors.config.bindCredential[0].message)), /*#__PURE__*/React.createElement(FormGroup, {
    fieldId: "kc-test-button"
  }, " ", /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    id: "kc-test-button"
  }, t("common:test")))));
};