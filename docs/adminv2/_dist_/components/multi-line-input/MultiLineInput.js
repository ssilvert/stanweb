function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useEffect } from "../../../web_modules/react.js";
import { useFieldArray, useFormContext, useWatch } from "../../../web_modules/react-hook-form.js";
import { TextInput, Button, ButtonVariant, InputGroup } from "../../../web_modules/@patternfly/react-core.js";
import { MinusCircleIcon, PlusCircleIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export function convertToMultiline(fields) {
  return (fields && fields.length > 0 ? fields : [""]).map(field => {
    return {
      value: field
    };
  });
}
export function toValue(formValue) {
  return formValue.map(field => field.value);
}
export const MultiLineInput = ({
  name,
  addButtonLabel,
  ...rest
}) => {
  const {
    t
  } = useTranslation();
  const {
    register,
    control,
    reset
  } = useFormContext();
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    name,
    control
  });
  const currentValues = useWatch({
    control,
    name
  });
  useEffect(() => {
    reset({
      [name]: [{
        value: ""
      }]
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(({
    id,
    value
  }, index) => /*#__PURE__*/React.createElement(Fragment, {
    key: id
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(TextInput, _extends({
    id: id,
    ref: register(),
    name: `${name}[${index}].value`,
    defaultValue: value
  }, rest)), /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.link,
    onClick: () => remove(index),
    tabIndex: -1,
    isDisabled: index === fields.length - 1
  }, /*#__PURE__*/React.createElement(MinusCircleIcon, null))), index === fields.length - 1 && /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.link,
    onClick: () => append({}),
    tabIndex: -1,
    isDisabled: rest.isDisabled || !(currentValues && currentValues[index]?.value)
  }, /*#__PURE__*/React.createElement(PlusCircleIcon, null), " ", t(addButtonLabel || "common:add")))));
};