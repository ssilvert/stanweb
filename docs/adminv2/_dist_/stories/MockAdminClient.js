import React from "../../web_modules/react.js";
import { HashRouter } from "../../web_modules/react-router-dom.js";
import { AccessContextProvider } from "../context/access/Access.js";
import { WhoAmIContextProvider } from "../context/whoami/WhoAmI.js";
import { RealmContext } from "../context/realm-context/RealmContext.js";
import { AdminClient } from "../context/auth/AdminClient.js";
import { ServerInfoContext } from "../context/server-info/ServerInfoProvider.js";
import whoamiMock from "../context/whoami/__tests__/mock-whoami.json.proxy.js";
import serverInfo from "../context/server-info/__tests__/mock.json.proxy.js";
/**
 * This component provides some mocked default react context so that other components can work in a storybook.
 * In it's simplest form wrap your component like so:
 * @example
 *  <MockAdminClient>
 *    <SomeComponent />
 *  </MockAdminClient>
 * @example <caption>With an endpoint, roles => findOneById</caption>
 *   <MockAdminClient mock={{ roles: { findOneById: () => mockJson } }}>
 *     <<SomeComponent />
 *   </MockAdminClient>
 * @param props mock endpoints to be mocked
 */

export const MockAdminClient = props => {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(ServerInfoContext.Provider, {
    value: serverInfo
  }, /*#__PURE__*/React.createElement(AdminClient.Provider, {
    value: { ...props.mock,
      keycloak: {},
      whoAmI: {
        find: () => Promise.resolve(whoamiMock)
      },
      setConfig: () => {}
    }
  }, /*#__PURE__*/React.createElement(WhoAmIContextProvider, null, /*#__PURE__*/React.createElement(RealmContext.Provider, {
    value: {
      realm: "master",
      setRealm: () => {}
    }
  }, /*#__PURE__*/React.createElement(AccessContextProvider, null, props.children))))));
};