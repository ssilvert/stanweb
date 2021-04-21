import React from "../../web_modules/react.js";
import { JsonFileUpload } from "../components/json-file-upload/JsonFileUpload.js";
export default {
  title: "Json file upload dailog",
  component: JsonFileUpload,
  parameters: {
    actions: {
      argTypesRegex: "^on.*"
    }
  }
};

const Template = args => /*#__PURE__*/React.createElement(JsonFileUpload, args);

export const Dialog = Template.bind({});
Dialog.args = {
  id: "jsonFile"
};