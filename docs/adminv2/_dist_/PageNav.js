import React from "../web_modules/react.js";
import { useHistory, useLocation } from "../web_modules/react-router-dom.js";
import { useTranslation } from "../web_modules/react-i18next.js";
import { Nav, NavItem, NavGroup, NavList, PageSidebar } from "../web_modules/@patternfly/react-core.js";
import { RealmSelector } from "./components/realm-selector/RealmSelector.js";
import { useRealm } from "./context/realm-context/RealmContext.js";
import { DataLoader } from "./components/data-loader/DataLoader.js";
import { useAdminClient } from "./context/auth/AdminClient.js";
import { useAccess } from "./context/access/Access.js";
import { routes } from "./route-config.js";
export const PageNav = () => {
  const {
    t
  } = useTranslation("common");
  const {
    hasAccess,
    hasSomeAccess
  } = useAccess();
  const {
    realm
  } = useRealm();
  const adminClient = useAdminClient();

  const realmLoader = async () => {
    return await adminClient.realms.find();
  };

  const history = useHistory();

  const onSelect = item => {
    history.push(item.to);
    item.event.preventDefault();
  };

  const LeftNav = ({
    title,
    path
  }) => {
    const route = routes(() => {}).find(route => route.path.replace(/\/:.+?(\?|(?:(?!\/).)*|$)/g, "") === path);
    if (!route || !hasAccess(route.access)) return /*#__PURE__*/React.createElement(React.Fragment, null); //remove "/realm-name" from the start of the path

    const activeItem = history.location.pathname.substr(realm.length + 1);
    return /*#__PURE__*/React.createElement(NavItem, {
      id: "nav-item" + path.replace("/", "-"),
      to: `/${realm}${path}`,
      isActive: path === activeItem || path !== "/" && activeItem.startsWith(path)
    }, t(title));
  };

  const showManage = hasSomeAccess("view-realm", "query-groups", "query-users", "query-clients", "view-events");
  const showConfigure = hasSomeAccess("view-realm", "query-clients", "view-identity-providers");
  const {
    pathname
  } = useLocation();

  const isOnAddRealm = () => pathname.indexOf("add-realm") === -1;

  return /*#__PURE__*/React.createElement(PageSidebar, {
    nav: /*#__PURE__*/React.createElement(Nav, {
      onSelect: onSelect
    }, /*#__PURE__*/React.createElement(NavList, null, /*#__PURE__*/React.createElement(DataLoader, {
      loader: realmLoader,
      deps: [realm]
    }, realmList => /*#__PURE__*/React.createElement(NavItem, {
      className: "keycloak__page_nav__nav_item__realm-selector"
    }, /*#__PURE__*/React.createElement(RealmSelector, {
      realmList: realmList || []
    })))), isOnAddRealm() && /*#__PURE__*/React.createElement(NavGroup, {
      title: ""
    }, /*#__PURE__*/React.createElement(LeftNav, {
      title: "home",
      path: "/"
    })), showManage && isOnAddRealm() && /*#__PURE__*/React.createElement(NavGroup, {
      title: t("manage")
    }, /*#__PURE__*/React.createElement(LeftNav, {
      title: "clients",
      path: "/clients"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "clientScopes",
      path: "/client-scopes"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "realmRoles",
      path: "/roles"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "users",
      path: "/users"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "groups",
      path: "/groups"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "sessions",
      path: "/sessions"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "events",
      path: "/events"
    })), showConfigure && isOnAddRealm() && /*#__PURE__*/React.createElement(NavGroup, {
      title: t("configure")
    }, /*#__PURE__*/React.createElement(LeftNav, {
      title: "realmSettings",
      path: "/realm-settings"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "authentication",
      path: "/authentication"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "identityProviders",
      path: "/identity-providers"
    }), /*#__PURE__*/React.createElement(LeftNav, {
      title: "userFederation",
      path: "/user-federation"
    })))
  });
};