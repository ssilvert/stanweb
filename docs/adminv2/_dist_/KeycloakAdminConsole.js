import React from "../web_modules/react.js";
import { AdminClient } from "./context/auth/AdminClient.js";
import { WhoAmIContextProvider } from "./context/whoami/WhoAmI.js";
import { RealmContextProvider } from "./context/realm-context/RealmContext.js";
import { App } from "./App.js";
export const KeycloakAdminConsole = ({
  adminClient
}) => {
  return /*#__PURE__*/React.createElement(RealmContextProvider, null, /*#__PURE__*/React.createElement(AdminClient.Provider, {
    value: adminClient
  }, /*#__PURE__*/React.createElement(WhoAmIContextProvider, null, /*#__PURE__*/React.createElement(App, null))));
};