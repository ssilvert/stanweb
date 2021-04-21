import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Button, ClipboardCopy, FormGroup, Split, SplitItem } from "../../../web_modules/@patternfly/react-core.js";
import { useFormContext } from "../../../web_modules/react-hook-form.js";
export const ClientSecret = ({
  secret,
  toggle
}) => {
  const {
    t
  } = useTranslation("clients");
  const {
    formState
  } = useFormContext();
  return /*#__PURE__*/React.createElement(FormGroup, {
    label: t("clientSecret"),
    fieldId: "kc-client-secret"
  }, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, /*#__PURE__*/React.createElement(ClipboardCopy, {
    id: "kc-client-secret",
    isReadOnly: true
  }, secret)), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: toggle,
    isDisabled: formState.isDirty
  }, t("regenerate")))));
};