import i18n from "../web_modules/i18next.js";
import { initReactI18next } from "../web_modules/react-i18next.js"; // import backend from "i18next-http-backend";

import common from "./common-messages.json.proxy.js";
import help from "./common-help.json.proxy.js";
import dashboard from "./dashboard/messages.json.proxy.js";
import clients from "./clients/messages.json.proxy.js";
import clientsHelp from "./clients/help.json.proxy.js";
import clientScopes from "./client-scopes/messages.json.proxy.js";
import clientScopesHelp from "./client-scopes/help.json.proxy.js";
import groups from "./groups/messages.json.proxy.js";
import realm from "./realm/messages.json.proxy.js";
import roles from "./realm-roles/messages.json.proxy.js";
import users from "./user/messages.json.proxy.js";
import sessions from "./sessions/messages.json.proxy.js";
import events from "./events/messages.json.proxy.js";
import realmSettings from "./realm-settings/messages.json.proxy.js";
import realmSettingsHelp from "./realm-settings/help.json.proxy.js";
import authentication from "./authentication/messages.json.proxy.js";
import storybook from "./stories/messages.json.proxy.js";
import userFederation from "./user-federation/messages.json.proxy.js";
import userFederationHelp from "./user-federation/help.json.proxy.js";
const initOptions = {
  defaultNS: "common",
  resources: {
    en: { ...common,
      ...help,
      ...dashboard,
      ...clients,
      ...clientsHelp,
      ...clientScopes,
      ...clientScopesHelp,
      ...groups,
      ...realm,
      ...roles,
      ...groups,
      ...users,
      ...sessions,
      ...userFederation,
      ...events,
      ...realmSettings,
      ...realmSettingsHelp,
      ...authentication,
      ...storybook,
      ...userFederation,
      ...userFederationHelp
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
};
i18n.use(initReactI18next) // .use(backend)
.init(initOptions);
export default i18n;