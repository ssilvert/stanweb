import React from "../../web_modules/react.js";
import serverInfo from "../context/server-info/__tests__/mock.json.proxy.js";
import clientScopeMock from "../client-scopes/__tests__/mock-client-scope.json.proxy.js";
import { ServerInfoContext } from "../context/server-info/ServerInfoProvider.js";
import { MapperList } from "../client-scopes/details/MapperList.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "Mapper List",
  component: MapperList
};
export const MapperListExample = () => /*#__PURE__*/React.createElement(ServerInfoContext.Provider, {
  value: serverInfo
}, /*#__PURE__*/React.createElement(MockAdminClient, null, /*#__PURE__*/React.createElement(MapperList, {
  clientScope: clientScopeMock,
  refresh: () => {}
})));