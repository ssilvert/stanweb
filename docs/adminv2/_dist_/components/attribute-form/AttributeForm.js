import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { ActionGroup, Button, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { TableComposable, Tbody, Td, Th, Thead, Tr } from "../../../web_modules/@patternfly/react-table.js";
import { MinusCircleIcon, PlusCircleIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { FormAccess } from "../form-access/FormAccess.js";
import "./attribute-form.css.proxy.js";
export const arrayToAttributes = attributeArray => {
  const initValue = {};
  return attributeArray.reduce((acc, attribute) => {
    acc[attribute.key] = [attribute.value];
    return acc;
  }, initValue);
};
export const attributesToArray = attributes => {
  if (!attributes || Object.keys(attributes).length == 0) {
    return [];
  }

  return Object.keys(attributes).map(key => ({
    key: key,
    value: attributes[key][0]
  }));
};
export const AttributesForm = ({
  form: {
    handleSubmit,
    register,
    formState,
    errors,
    watch
  },
  array: {
    fields,
    append,
    remove
  },
  reset,
  save
}) => {
  const {
    t
  } = useTranslation("roles");
  const columns = ["Key", "Value"];
  const watchLast = watch(`attributes[${fields.length - 1}].key`, "");

  if (fields.length === 0) {
    append({
      key: "",
      value: ""
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    onSubmit: handleSubmit(save)
  }, /*#__PURE__*/React.createElement(TableComposable, {
    className: "kc-attributes__table",
    "aria-label": "Role attribute keys and values",
    variant: "compact",
    borders: false
  }, /*#__PURE__*/React.createElement(Thead, null, /*#__PURE__*/React.createElement(Tr, null, /*#__PURE__*/React.createElement(Th, {
    id: "key",
    width: 40
  }, columns[0]), /*#__PURE__*/React.createElement(Th, {
    id: "value",
    width: 40
  }, columns[1]))), /*#__PURE__*/React.createElement(Tbody, null, fields.map((attribute, rowIndex) => /*#__PURE__*/React.createElement(Tr, {
    key: attribute.id
  }, /*#__PURE__*/React.createElement(Td, {
    key: `${attribute.id}-key`,
    id: `text-input-${rowIndex}-key`,
    dataLabel: columns[0]
  }, /*#__PURE__*/React.createElement(TextInput, {
    name: `attributes[${rowIndex}].key`,
    ref: register(),
    "aria-label": "key-input",
    defaultValue: attribute.key,
    validated: errors.attributes && errors.attributes[rowIndex] ? "error" : "default"
  })), /*#__PURE__*/React.createElement(Td, {
    key: `${attribute}-value`,
    id: `text-input-${rowIndex}-value`,
    dataLabel: columns[1]
  }, /*#__PURE__*/React.createElement(TextInput, {
    name: `attributes[${rowIndex}].value`,
    ref: register(),
    "aria-label": "value-input",
    defaultValue: attribute.value
  })), rowIndex !== fields.length - 1 && fields.length - 1 !== 0 && /*#__PURE__*/React.createElement(Td, {
    key: "minus-button",
    id: `kc-minus-button-${rowIndex}`,
    dataLabel: columns[2]
  }, /*#__PURE__*/React.createElement(Button, {
    id: `minus-button-${rowIndex}`,
    "aria-label": `remove ${attribute.key} with value ${attribute.value} `,
    variant: "link",
    className: "kc-attributes__minus-icon",
    onClick: () => remove(rowIndex)
  }, /*#__PURE__*/React.createElement(MinusCircleIcon, null))), rowIndex === fields.length - 1 && /*#__PURE__*/React.createElement(Td, {
    key: "add-button",
    id: "add-button",
    dataLabel: columns[2]
  }, fields.length !== 1 && /*#__PURE__*/React.createElement(Button, {
    id: `minus-button-${rowIndex}`,
    "aria-label": `remove ${attribute.key} with value ${attribute.value} `,
    variant: "link",
    className: "kc-attributes__minus-icon",
    onClick: () => remove(rowIndex)
  }, /*#__PURE__*/React.createElement(MinusCircleIcon, null))))), /*#__PURE__*/React.createElement(Button, {
    "aria-label": t("roles:addAttributeText"),
    id: "plus-icon",
    variant: "link",
    className: "kc-attributes__plus-icon",
    onClick: () => append({
      key: "",
      value: ""
    }),
    icon: /*#__PURE__*/React.createElement(PlusCircleIcon, null),
    isDisabled: !watchLast
  }, t("roles:addAttributeText")))), /*#__PURE__*/React.createElement(ActionGroup, {
    className: "kc-attributes__action-group"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    isDisabled: !formState.isDirty
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    onClick: reset,
    variant: "link",
    isDisabled: !formState.isDirty
  }, t("common:revert")))));
};