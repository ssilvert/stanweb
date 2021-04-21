import React from "../../web_modules/react.js";
import { Page } from "../../web_modules/@patternfly/react-core.js";
import serverInfo from "../context/server-info/__tests__/mock.json.proxy.js";
import roles from "../realm-roles/__tests__/mock-roles.json.proxy.js";
import clients from "../clients/__tests__/mock-clients.json.proxy.js";
import { ServerInfoContext } from "../context/server-info/ServerInfoProvider.js";
import { RoleMappingForm } from "../client-scopes/add/RoleMappingForm.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "Role Mapping Form",
  component: RoleMappingForm
};
export const RoleMappingFormExample = () => /*#__PURE__*/React.createElement(ServerInfoContext.Provider, {
  value: serverInfo
}, /*#__PURE__*/React.createElement(MockAdminClient, {
  mock: {
    roles: {
      find: () => roles
    },
    clients: {
      find: () => clients,
      listRoles: () => roles
    }
  }
}, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(RoleMappingForm, null))));