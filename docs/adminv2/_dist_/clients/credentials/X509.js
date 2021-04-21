import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useFormContext } from "../../../web_modules/react-hook-form.js";
import { FormGroup, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
export const X509 = () => {
  const {
    t
  } = useTranslation("clients");
  const {
    register
  } = useFormContext();
  return /*#__PURE__*/React.createElement(FormGroup, {
    label: t("subject"),
    fieldId: "kc-subject",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:subject",
      forLabel: t("subject"),
      forID: "kc-subject"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "kc-subject",
    name: "attributes.x509-subjectdn"
  }));
};