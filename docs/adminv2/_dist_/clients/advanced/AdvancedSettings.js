import React, { useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { ActionGroup, Button, FormGroup, Select, SelectOption, SelectVariant, Switch } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { TimeSelector } from "../../components/time-selector/TimeSelector.js";
export const AdvancedSettings = ({
  control,
  save,
  reset,
  protocol
}) => {
  const {
    t
  } = useTranslation("clients");
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, protocol !== "openid-connect" && /*#__PURE__*/React.createElement(FormGroup, {
    label: t("assertionLifespan"),
    fieldId: "assertionLifespan",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:assertionLifespan",
      forLabel: t("assertionLifespan"),
      forID: "assertionLifespan"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.saml-assertion-lifespan",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(TimeSelector, {
      units: ["minutes", "days", "hours"],
      value: value,
      onChange: onChange
    })
  })), protocol === "openid-connect" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("accessTokenLifespan"),
    fieldId: "accessTokenLifespan",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:accessTokenLifespan",
      forLabel: t("accessTokenLifespan"),
      forID: "accessTokenLifespan"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.access-token-lifespan",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(TimeSelector, {
      units: ["minutes", "days", "hours"],
      value: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("oAuthMutual"),
    fieldId: "oAuthMutual",
    hasNoPaddingTop: true,
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:oAuthMutual",
      forLabel: t("oAuthMutual"),
      forID: "oAuthMutual"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.tls-client-certificate-bound-access-tokens",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "oAuthMutual",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("keyForCodeExchange"),
    fieldId: "keyForCodeExchange",
    hasNoPaddingTop: true,
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:keyForCodeExchange",
      forLabel: t("keyForCodeExchange"),
      forID: "keyForCodeExchange"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.pkce-code-challenge-method",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "keyForCodeExchange",
      variant: SelectVariant.single,
      onToggle: () => setOpen(!open),
      isOpen: open,
      onSelect: (_, value) => {
        onChange(value);
        setOpen(false);
      },
      selections: [value || t("common:choose")]
    }, ["", "S256", "plain"].map(v => /*#__PURE__*/React.createElement(SelectOption, {
      key: v,
      value: v
    }, v || t("common:choose"))))
  }))), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: save
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: reset
  }, t("common:revert"))));
};