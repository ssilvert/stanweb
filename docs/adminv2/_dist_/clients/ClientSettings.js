import React, { useState } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { FormGroup, TextInput, Form, Switch, TextArea, Select, SelectVariant, SelectOption } from "../../web_modules/@patternfly/react-core.js";
import { Controller, useFormContext } from "../../web_modules/react-hook-form.js";
import { ScrollForm } from "../components/scroll-form/ScrollForm.js";
import { ClientDescription } from "./ClientDescription.js";
import { CapabilityConfig } from "./add/CapabilityConfig.js";
import { MultiLineInput } from "../components/multi-line-input/MultiLineInput.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { useServerInfo } from "../context/server-info/ServerInfoProvider.js";
import { SaveReset } from "./advanced/SaveReset.js";
export const ClientSettings = ({
  save,
  reset
}) => {
  const {
    register,
    control,
    watch
  } = useFormContext();
  const {
    t
  } = useTranslation("clients");
  const [loginThemeOpen, setLoginThemeOpen] = useState(false);
  const loginThemes = useServerInfo().themes["login"];
  const consentRequired = watch("consentRequired");
  const displayOnConsentScreen = watch("attributes.display-on-consent-screen");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollForm, {
    className: "pf-u-p-lg",
    sections: [t("capabilityConfig"), t("generalSettings"), t("accessSettings"), t("loginSettings")]
  }, /*#__PURE__*/React.createElement(CapabilityConfig, null), /*#__PURE__*/React.createElement(Form, {
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(ClientDescription, null)), /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("rootUrl"),
    fieldId: "kc-root-url",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:rootUrl",
      forLabel: t("rootUrl"),
      forID: "kc-root-url"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-root-url",
    name: "rootUrl",
    ref: register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("validRedirectUri"),
    fieldId: "kc-redirect",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:validRedirectURIs",
      forLabel: t("validRedirectUri"),
      forID: "kc-redirect"
    })
  }, /*#__PURE__*/React.createElement(MultiLineInput, {
    name: "redirectUris",
    addButtonLabel: "clients:addRedirectUri"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("homeURL"),
    fieldId: "kc-home-url",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:homeURL",
      forLabel: t("homeURL"),
      forID: "kc-home-url"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-home-url",
    name: "baseUrl",
    ref: register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("webOrigins"),
    fieldId: "kc-web-origins",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:webOrigins",
      forLabel: t("webOrigins"),
      forID: "kc-web-origins"
    })
  }, /*#__PURE__*/React.createElement(MultiLineInput, {
    name: "webOrigins",
    addButtonLabel: "clients:addWebOrigins"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("adminURL"),
    fieldId: "kc-admin-url",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:adminURL",
      forLabel: t("adminURL"),
      forID: "kc-admin-url"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-admin-url",
    name: "adminUrl",
    ref: register
  }))), /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("loginTheme"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:loginTheme",
      forLabel: t("loginTheme"),
      forID: "loginTheme"
    }),
    fieldId: "loginTheme"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.login_theme",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "loginTheme",
      onToggle: () => setLoginThemeOpen(!loginThemeOpen),
      onSelect: (_, value) => {
        onChange(value);
        setLoginThemeOpen(false);
      },
      selections: value || t("common:choose"),
      variant: SelectVariant.single,
      "aria-label": t("loginTheme"),
      isOpen: loginThemeOpen
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: "empty",
      value: ""
    }, t("common:choose")), /*#__PURE__*/React.createElement(React.Fragment, null, loginThemes && loginThemes.map(theme => /*#__PURE__*/React.createElement(SelectOption, {
      selected: theme.name === value,
      key: theme.name,
      value: theme.name
    }))))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("consentRequired"),
    fieldId: "kc-consent",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "consentRequired",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-consent",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("displayOnClient"),
    fieldId: "kc-display-on-client",
    hasNoPaddingTop: true
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.display-on-consent-screen",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-display-on-client",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value),
      isDisabled: !consentRequired
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("consentScreenText"),
    fieldId: "kc-consent-screen-text"
  }, /*#__PURE__*/React.createElement(TextArea, {
    id: "kc-consent-screen-text",
    name: "attributes.consent-screen-text",
    ref: register,
    isDisabled: !(consentRequired && displayOnConsentScreen === "true")
  })), /*#__PURE__*/React.createElement(SaveReset, {
    name: "settings",
    save: save,
    reset: reset
  }))));
};