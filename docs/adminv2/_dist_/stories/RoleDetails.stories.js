import React from "../../web_modules/react.js";
import { Page } from "../../web_modules/@patternfly/react-core.js";
import { MockAdminClient } from "./MockAdminClient.js";
import { RealmRoleTabs } from "../realm-roles/RealmRoleTabs.js";
export default {
  title: "New role form",
  component: RealmRoleTabs
};
export const View = () => {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(MockAdminClient, null, /*#__PURE__*/React.createElement(RealmRoleTabs, null)));
};