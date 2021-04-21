import React from "../../web_modules/react.js";
import { Page } from "../../web_modules/@patternfly/react-core.js";
import { UserFederationLdapWizard } from "../user-federation/UserFederationLdapWizard.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "User Federation LDAP Wizard",
  component: UserFederationLdapWizard
};
export const view = () => {
  return /*#__PURE__*/React.createElement(Page, {
    style: {
      height: "80vh"
    }
  }, /*#__PURE__*/React.createElement(MockAdminClient, null, /*#__PURE__*/React.createElement(UserFederationLdapWizard, null)), " ");
};