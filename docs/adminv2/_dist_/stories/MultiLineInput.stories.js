import React from "../../web_modules/react.js";
import { action } from "../../web_modules/@storybook/addon-actions.js";
import { FormProvider, useForm } from "../../web_modules/react-hook-form.js";
import { Button } from "../../web_modules/@patternfly/react-core.js";
import { MultiLineInput, toValue } from "../components/multi-line-input/MultiLineInput.js";
export default {
  title: "MultiLineInput component",
  component: MultiLineInput
};

const Template = args => {
  const form = useForm({
    mode: "onChange"
  });
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: form.handleSubmit(data => {
      action("submit")(toValue(data.items));
    })
  }, /*#__PURE__*/React.createElement(FormProvider, form, /*#__PURE__*/React.createElement(MultiLineInput, args)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Submit"));
};

export const View = Template.bind({});
View.args = {
  name: "items"
};