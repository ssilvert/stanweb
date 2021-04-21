function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useState } from "../../../web_modules/react.js";
import { Text, PageSection, TextContent, Divider, Level, LevelItem, Switch, Toolbar, ToolbarContent, ToolbarItem, Badge, Dropdown, DropdownToggle, DropdownPosition } from "../../../web_modules/@patternfly/react-core.js";
import { HelpContext } from "../help-enabler/HelpHeader.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { FormattedLink } from "../external-link/FormattedLink.js";
export const ViewHeader = ({
  actionsDropdownId,
  titleKey,
  badge,
  badgeIsRead,
  subKey,
  subKeyLinkProps,
  dropdownItems,
  lowerDropdownMenuTitle,
  lowerDropdownItems,
  isEnabled = true,
  onToggle,
  divider = true
}) => {
  const {
    t
  } = useTranslation();
  const {
    enabled
  } = useContext(HelpContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLowerDropdownOpen, setIsLowerDropdownOpen] = useState(false);

  const onDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onLowerDropdownToggle = () => {
    setIsLowerDropdownOpen(!isLowerDropdownOpen);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(Level, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(LevelItem, null, /*#__PURE__*/React.createElement(Level, null, /*#__PURE__*/React.createElement(LevelItem, null, /*#__PURE__*/React.createElement(TextContent, {
    className: "pf-u-mr-sm"
  }, /*#__PURE__*/React.createElement(Text, {
    component: "h1"
  }, t(titleKey)))), badge && /*#__PURE__*/React.createElement(LevelItem, null, /*#__PURE__*/React.createElement(Badge, {
    "data-testid": "composite-role-badge",
    isRead: badgeIsRead
  }, badge)))), /*#__PURE__*/React.createElement(LevelItem, null), /*#__PURE__*/React.createElement(LevelItem, null, /*#__PURE__*/React.createElement(Toolbar, {
    className: "pf-u-p-0"
  }, /*#__PURE__*/React.createElement(ToolbarContent, null, onToggle && /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Switch, {
    id: `${titleKey}-switch`,
    label: t("common:enabled"),
    labelOff: t("common:disabled"),
    className: "pf-u-mr-lg",
    isChecked: isEnabled,
    onChange: value => {
      if (onToggle) {
        onToggle(value);
      }
    }
  })), dropdownItems && /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Dropdown, {
    position: DropdownPosition.right,
    toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
      id: actionsDropdownId,
      onToggle: onDropdownToggle
    }, t("common:action")),
    isOpen: isDropdownOpen,
    dropdownItems: dropdownItems,
    "data-testid": "action-dropdown"
  })))))), enabled && /*#__PURE__*/React.createElement(TextContent, {
    id: "view-header-subkey"
  }, /*#__PURE__*/React.createElement(Text, null, t(subKey), subKeyLinkProps && /*#__PURE__*/React.createElement(FormattedLink, _extends({}, subKeyLinkProps, {
    isInline: true,
    className: "pf-u-ml-md"
  })))), lowerDropdownItems && /*#__PURE__*/React.createElement(Dropdown, {
    className: "keycloak__user-federation__dropdown",
    toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
      onToggle: () => onLowerDropdownToggle(),
      isPrimary: true,
      id: "ufToggleId"
    }, t(lowerDropdownMenuTitle)),
    isOpen: isLowerDropdownOpen,
    dropdownItems: lowerDropdownItems
  })), divider && /*#__PURE__*/React.createElement(Divider, {
    component: "div"
  }));
};