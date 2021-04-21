import React from "../../web_modules/react.js";
import { Page } from "../../web_modules/@patternfly/react-core.js";
import { UserFederationLdapSettings } from "../user-federation/UserFederationLdapSettings.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "User Federation LDAP Settings Tab",
  component: UserFederationLdapSettings
};
export const view = () => {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(MockAdminClient, {
    mock: {
      components: {
        findOne: () => Promise.resolve({})
      }
    }
  }, /*#__PURE__*/React.createElement(UserFederationLdapSettings, null)));
};