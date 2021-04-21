import React from "../web_modules/react.js";
import ReactDom from "../web_modules/react-dom.js";
import i18n from "./i18n.js";
import init from "./context/auth/keycloak.js";
import { KeycloakAdminConsole } from "./KeycloakAdminConsole.js";
console.info("supported languages", ...i18n.languages);
init().then(adminClient => {
  ReactDom.render( /*#__PURE__*/React.createElement(KeycloakAdminConsole, {
    adminClient: adminClient
  }), document.getElementById("app"));
});