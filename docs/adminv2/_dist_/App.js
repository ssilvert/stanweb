import React, { useEffect } from "../web_modules/react.js";
import { Page } from "../web_modules/@patternfly/react-core.js";
import { HashRouter as Router, Route, Switch, useParams } from "../web_modules/react-router-dom.js";
import { ErrorBoundary, useErrorHandler } from "../web_modules/react-error-boundary.js";
import { Header } from "./PageHeader.js";
import { PageNav } from "./PageNav.js";
import { Help } from "./components/help-enabler/HelpHeader.js";
import { ServerInfoProvider } from "./context/server-info/ServerInfoProvider.js";
import { AlertProvider } from "./components/alert/Alerts.js";
import { AccessContextProvider, useAccess } from "./context/access/Access.js";
import { routes } from "./route-config.js";
import { PageBreadCrumbs } from "./components/bread-crumb/PageBreadCrumbs.js";
import { ForbiddenSection } from "./ForbiddenSection.js";
import { SubGroups } from "./groups/SubGroupsContext.js";
import { useRealm } from "./context/realm-context/RealmContext.js";
import { useAdminClient, asyncStateFetch } from "./context/auth/AdminClient.js";
import { ErrorRenderer } from "./components/error/ErrorRenderer.js";
export const mainPageContentId = "kc-main-content-page-container";

const AppContexts = ({
  children
}) => /*#__PURE__*/React.createElement(AccessContextProvider, null, /*#__PURE__*/React.createElement(Help, null, /*#__PURE__*/React.createElement(AlertProvider, null, /*#__PURE__*/React.createElement(ServerInfoProvider, null, /*#__PURE__*/React.createElement(SubGroups, null, children))))); // set the realm form the path if it's one of the know realms


const RealmPathSelector = ({
  children
}) => {
  const {
    setRealm
  } = useRealm();
  const {
    realm
  } = useParams();
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  useEffect(() => asyncStateFetch(() => adminClient.realms.find(), realms => {
    if (realms.findIndex(r => r.realm == realm) !== -1) {
      setRealm(realm);
    }
  }, handleError), []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}; // If someone tries to go directly to a route they don't
// have access to, show forbidden page.


const SecuredRoute = ({
  route
}) => {
  const {
    hasAccess
  } = useAccess();
  if (hasAccess(route.access)) return /*#__PURE__*/React.createElement(route.component, null);
  return /*#__PURE__*/React.createElement(ForbiddenSection, null);
};

export const App = () => {
  return /*#__PURE__*/React.createElement(AppContexts, null, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Page, {
    header: /*#__PURE__*/React.createElement(Header, null),
    isManagedSidebar: true,
    sidebar: /*#__PURE__*/React.createElement(PageNav, null),
    breadcrumb: /*#__PURE__*/React.createElement(PageBreadCrumbs, null),
    mainContainerId: mainPageContentId
  }, /*#__PURE__*/React.createElement(ErrorBoundary, {
    FallbackComponent: ErrorRenderer,
    onReset: () => location.href = "/"
  }, /*#__PURE__*/React.createElement(Switch, null, routes(() => {}).map((route, i) => /*#__PURE__*/React.createElement(Route, {
    exact: route.matchOptions?.exact === undefined ? true : route.matchOptions.exact,
    key: i,
    path: route.path,
    component: () => /*#__PURE__*/React.createElement(RealmPathSelector, null, /*#__PURE__*/React.createElement(SecuredRoute, {
      route: route
    }))
  })))))));
};