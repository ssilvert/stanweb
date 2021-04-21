import React from "../../web_modules/react.js";
import { useFormContext } from "../../web_modules/react-hook-form.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { FormGroup, TextArea, TextInput, ValidatedOptions } from "../../web_modules/@patternfly/react-core.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
export const ClientDescription = () => {
  const {
    t
  } = useTranslation("clients");
  const {
    register,
    errors
  } = useFormContext();
  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-clients",
    unWrap: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:clientID",
      forLabel: t("clientID"),
      forID: "kc-client-id"
    }),
    label: t("clientID"),
    fieldId: "kc-client-id",
    helperTextInvalid: t("common:required"),
    validated: errors.clientId ? ValidatedOptions.error : ValidatedOptions.default,
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: true
    }),
    type: "text",
    id: "kc-client-id",
    name: "clientId",
    validated: errors.clientId ? ValidatedOptions.error : ValidatedOptions.default
  })), /*#__PURE__*/React.createElement(FormGroup, {
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:clientName",
      forLabel: t("common:name"),
      forID: "kc-name"
    }),
    label: t("common:name"),
    fieldId: "kc-name"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "kc-name",
    name: "name"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:description",
      forLabel: t("common:description"),
      forID: "kc-description"
    }),
    label: t("common:description"),
    fieldId: "kc-description",
    validated: errors.description ? ValidatedOptions.error : ValidatedOptions.default,
    helperTextInvalid: errors.description?.message
  }, /*#__PURE__*/React.createElement(TextArea, {
    ref: register({
      maxLength: {
        value: 255,
        message: t("common:maxLength", {
          length: 255
        })
      }
    }),
    type: "text",
    id: "kc-description",
    name: "description",
    validated: errors.description ? ValidatedOptions.error : ValidatedOptions.default
  })));
};