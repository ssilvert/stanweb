import React, { useContext, useState } from "../web_modules/react.js";
import { useTranslation } from "../web_modules/react-i18next.js";
import { Avatar, Brand, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle, KebabToggle, PageHeader, PageHeaderTools, PageHeaderToolsItem, PageHeaderToolsGroup } from "../web_modules/@patternfly/react-core.js";
import { HelpIcon } from "../web_modules/@patternfly/react-icons.js";
import { WhoAmIContext } from "./context/whoami/WhoAmI.js";
import { HelpContext, HelpHeader } from "./components/help-enabler/HelpHeader.js";
import { Link, useHistory } from "../web_modules/react-router-dom.js";
import { useAdminClient } from "./context/auth/AdminClient.js";
import { useRealm } from "./context/realm-context/RealmContext.js";
export const Header = () => {
  const adminClient = useAdminClient();
  const {
    t
  } = useTranslation();

  const ManageAccountDropdownItem = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, adminClient.keycloak && /*#__PURE__*/React.createElement(DropdownItem, {
      key: "manage account",
      id: "manage-account",
      onClick: () => adminClient.keycloak.accountManagement()
    }, t("manageAccount")));
  };

  const SignOutDropdownItem = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, adminClient.keycloak && /*#__PURE__*/React.createElement(DropdownItem, {
      id: "sign-out",
      key: "sign out",
      onClick: () => adminClient.keycloak.logout({
        redirectUri: ""
      })
    }, t("signOut")));
  };

  const ServerInfoDropdownItem = () => {
    const {
      t
    } = useTranslation();
    const history = useHistory();
    const {
      setRealm
    } = useRealm();
    return /*#__PURE__*/React.createElement(DropdownItem, {
      key: "server info",
      onClick: () => {
        history.push("/master/");
        setRealm("master");
      }
    }, t("realmInfo"));
  };

  const HelpDropdownItem = () => {
    const {
      t
    } = useTranslation();
    const {
      enabled,
      toggleHelp
    } = useContext(HelpContext);
    return /*#__PURE__*/React.createElement(DropdownItem, {
      icon: /*#__PURE__*/React.createElement(HelpIcon, null),
      onClick: toggleHelp
    }, enabled ? t("helpEnabled") : t("helpDisabled"));
  };

  const kebabDropdownItems = [/*#__PURE__*/React.createElement(ManageAccountDropdownItem, {
    key: "kebab Manage Account"
  }), /*#__PURE__*/React.createElement(ServerInfoDropdownItem, {
    key: "kebab Server Info"
  }), /*#__PURE__*/React.createElement(HelpDropdownItem, {
    key: "kebab Help"
  }), /*#__PURE__*/React.createElement(DropdownSeparator, {
    key: "kebab sign out separator"
  }), /*#__PURE__*/React.createElement(SignOutDropdownItem, {
    key: "kebab Sign out"
  })];
  const userDropdownItems = [/*#__PURE__*/React.createElement(ManageAccountDropdownItem, {
    key: "Manage Account"
  }), /*#__PURE__*/React.createElement(ServerInfoDropdownItem, {
    key: "Server info"
  }), /*#__PURE__*/React.createElement(DropdownSeparator, {
    key: "sign out separator"
  }), /*#__PURE__*/React.createElement(SignOutDropdownItem, {
    key: "Sign out"
  })];

  const headerTools = () => {
    return /*#__PURE__*/React.createElement(PageHeaderTools, null, /*#__PURE__*/React.createElement(PageHeaderToolsGroup, {
      visibility: {
        default: "hidden",
        md: "visible"
      }
      /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */

    }, /*#__PURE__*/React.createElement(PageHeaderToolsItem, null, /*#__PURE__*/React.createElement(HelpHeader, null))), /*#__PURE__*/React.createElement(PageHeaderToolsGroup, null, /*#__PURE__*/React.createElement(PageHeaderToolsItem, {
      visibility: {
        md: "hidden"
      }
      /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */

    }, /*#__PURE__*/React.createElement(KebabDropdown, null)), /*#__PURE__*/React.createElement(PageHeaderToolsItem, {
      visibility: {
        default: "hidden",
        md: "visible"
      }
      /** this user dropdown is hidden on mobile sizes */

    }, /*#__PURE__*/React.createElement(UserDropdown, null))), /*#__PURE__*/React.createElement(Avatar, {
      src: "./img_avatar.svg",
      alt: "Avatar image"
    }));
  };

  const KebabDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const onDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return /*#__PURE__*/React.createElement(Dropdown, {
      id: "user-dropdown-kebab",
      isPlain: true,
      position: "right",
      toggle: /*#__PURE__*/React.createElement(KebabToggle, {
        onToggle: onDropdownToggle
      }),
      isOpen: isDropdownOpen,
      dropdownItems: kebabDropdownItems
    });
  };

  const UserDropdown = () => {
    const {
      whoAmI
    } = useContext(WhoAmIContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const onDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return /*#__PURE__*/React.createElement(Dropdown, {
      isPlain: true,
      position: "right",
      id: "user-dropdown",
      isOpen: isDropdownOpen,
      toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
        onToggle: onDropdownToggle
      }, whoAmI.getDisplayName()),
      dropdownItems: userDropdownItems
    });
  };

  return /*#__PURE__*/React.createElement(PageHeader, {
    showNavToggle: true,
    logo: /*#__PURE__*/React.createElement(Link, {
      to: "/"
    }, /*#__PURE__*/React.createElement(Brand, {
      src: "./logo.svg",
      id: "masthead-logo",
      alt: "Logo",
      className: "keycloak__pageheader_brand"
    })),
    logoComponent: "div",
    headerTools: headerTools()
  });
};