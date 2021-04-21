import React from "../../web_modules/react.js";
import { Page } from "../../web_modules/@patternfly/react-core.js";
import { NewRealmForm } from "../realm/add/NewRealmForm.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "New realm form",
  component: NewRealmForm
};
export const view = () => {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(MockAdminClient, null, /*#__PURE__*/React.createElement(NewRealmForm, null)));
};