import React from "../../web_modules/react.js";
import { Page, PageSection } from "../../web_modules/@patternfly/react-core.js";
import { UserFederationKerberosWizard } from "../user-federation/UserFederationKerberosWizard.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "User Federation Kerberos Wizard",
  component: UserFederationKerberosWizard
};
export const view = () => {
  return /*#__PURE__*/React.createElement(Page, {
    style: {
      height: "80vh"
    }
  }, /*#__PURE__*/React.createElement(PageSection, {
    isFilled: true
  }, /*#__PURE__*/React.createElement(MockAdminClient, null, /*#__PURE__*/React.createElement(UserFederationKerberosWizard, null))));
};