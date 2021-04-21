import React from "../../web_modules/react.js";
import { MockAdminClient } from "./MockAdminClient.js";
import rolesMock from "../realm-roles/__tests__/mock-roles.json.proxy.js";
import { RealmRoleTabs } from "../realm-roles/RealmRoleTabs.js";
export default {
  title: "Roles tabs",
  component: RealmRoleTabs
};
export const RolesTabsExample = () => {
  return /*#__PURE__*/React.createElement(MockAdminClient, {
    mock: {
      roles: {
        findOneById: () => rolesMock[0]
      }
    }
  }, /*#__PURE__*/React.createElement(RealmRoleTabs, null));
};