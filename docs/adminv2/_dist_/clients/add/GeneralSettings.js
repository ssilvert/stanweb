import React, { useState } from "../../../web_modules/react.js";
import { FormGroup, Select, SelectVariant, SelectOption } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useFormContext } from "../../../web_modules/react-hook-form.js";
import { useLoginProviders } from "../../context/server-info/ServerInfoProvider.js";
import { ClientDescription } from "../ClientDescription.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
export const GeneralSettings = () => {
  const {
    t
  } = useTranslation();
  const {
    errors,
    control
  } = useFormContext();
  const providers = useLoginProviders();
  const [open, isOpen] = useState(false);
  return /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: "Client Type",
    fieldId: "kc-type",
    isRequired: true,
    helperTextInvalid: t("common:required"),
    validated: errors.protocol ? "error" : "default"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "protocol",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    },
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      id: "kc-type",
      required: true,
      onToggle: () => isOpen(!open),
      onSelect: (_, value, isPlaceholder) => {
        onChange(isPlaceholder ? "" : value);
        isOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("selectEncryptionType"),
      placeholderText: t("common:selectOne"),
      isOpen: open
    }, providers.map(option => /*#__PURE__*/React.createElement(SelectOption, {
      selected: option === value,
      key: option,
      value: option
    })))
  })), /*#__PURE__*/React.createElement(ClientDescription, null));
};