import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { ActionGroup, Button, FormGroup, Switch } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
export const OpenIdConnectCompatibilityModes = ({
  control,
  save,
  reset
}) => {
  const {
    t
  } = useTranslation("clients");
  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("excludeSessionStateFromAuthenticationResponse"),
    fieldId: "excludeSessionStateFromAuthenticationResponse",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:excludeSessionStateFromAuthenticationResponse",
      forLabel: t("excludeSessionStateFromAuthenticationResponse"),
      forID: "excludeSessionStateFromAuthenticationResponse"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.exclude-session-state-from-auth-response",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "excludeSessionStateFromAuthenticationResponse",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: save
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: reset
  }, t("common:revert"))));
};