import React, { useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useFormContext } from "../../../web_modules/react-hook-form.js";
import { FormGroup, Select, SelectOption, SelectVariant } from "../../../web_modules/@patternfly/react-core.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { sortProviders } from "../../util.js";
export const SignedJWT = () => {
  const {
    control
  } = useFormContext();
  const providers = sortProviders(useServerInfo().providers.clientSignature.providers);
  const {
    t
  } = useTranslation("clients");
  const [open, isOpen] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("signatureAlgorithm"),
    fieldId: "kc-signature-algorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:signature-algorithm",
      forLabel: t("signatureAlgorithm"),
      forID: "kc-signature-algorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.token-endpoint-auth-signing-alg",
    defaultValue: providers[0],
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      maxHeight: 200,
      toggleId: "kc-signature-algorithm",
      onToggle: () => isOpen(!open),
      onSelect: (_, value) => {
        onChange(value);
        isOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("signatureAlgorithm"),
      isOpen: open
    }, providers.map(option => /*#__PURE__*/React.createElement(SelectOption, {
      selected: option === value,
      key: option,
      value: option
    })))
  })));
};