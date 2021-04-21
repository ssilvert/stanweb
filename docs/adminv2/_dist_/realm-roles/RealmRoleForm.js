import React from "../../web_modules/react.js";
import { ActionGroup, Button, FormGroup, TextArea, TextInput, ValidatedOptions } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
export const RealmRoleForm = ({
  form: {
    handleSubmit,
    errors,
    register
  },
  save,
  editMode,
  reset
}) => {
  const {
    t
  } = useTranslation("roles");
  return /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-realm",
    className: "pf-u-mt-lg"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("roleName"),
    fieldId: "kc-name",
    isRequired: true,
    validated: errors.name ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: !editMode
    }),
    type: "text",
    id: "kc-name",
    name: "name",
    isReadOnly: editMode
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:description"),
    fieldId: "kc-description",
    validated: errors.description ? ValidatedOptions.error : ValidatedOptions.default,
    helperTextInvalid: errors.description?.message
  }, /*#__PURE__*/React.createElement(TextArea, {
    name: "description",
    ref: register({
      maxLength: {
        value: 255,
        message: t("common:maxLength", {
          length: 255
        })
      }
    }),
    type: "text",
    validated: errors.description ? ValidatedOptions.error : ValidatedOptions.default,
    id: "kc-role-description"
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: save,
    "data-testid": "realm-roles-save-button"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    onClick: () => reset(),
    variant: "link"
  }, editMode ? t("common:revert") : t("common:cancel"))));
};