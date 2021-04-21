import React, { useState, useContext, createContext } from "../../../web_modules/react.js";
import { Divider, Dropdown, DropdownItem, DropdownToggle, Split, SplitItem, Switch, TextContent } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { HelpIcon, ExternalLinkAltIcon } from "../../../web_modules/@patternfly/react-icons.js";
import "./help-header.css.proxy.js";
export const HelpContext = /*#__PURE__*/createContext({
  enabled: true,
  toggleHelp: () => {}
});
export const Help = ({
  children
}) => {
  const [enabled, setHelp] = useState(true);

  function toggleHelp() {
    setHelp(help => !help);
  }

  return /*#__PURE__*/React.createElement(HelpContext.Provider, {
    value: {
      enabled,
      toggleHelp
    }
  }, children);
};
export const HelpHeader = () => {
  const [open, setOpen] = useState(false);
  const help = useContext(HelpContext);
  const {
    t
  } = useTranslation();
  const dropdownItems = [/*#__PURE__*/React.createElement(DropdownItem, {
    key: "link",
    id: "link"
  }, /*#__PURE__*/React.createElement(Split, null, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, t("documentation")), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(ExternalLinkAltIcon, null)))), /*#__PURE__*/React.createElement(Divider, {
    key: "divide"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    key: "enable",
    id: "enable"
  }, /*#__PURE__*/React.createElement(Split, null, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, t("enableHelpMode")), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Switch, {
    id: "enableHelp",
    "aria-label": "Help is enabled",
    isChecked: help.enabled,
    label: "",
    className: "keycloak_help-header-switch",
    onChange: () => help.toggleHelp()
  }))), /*#__PURE__*/React.createElement(TextContent, {
    className: "keycloak_help-header-description"
  }, t("common-help:helpToggleInfo")))];
  return /*#__PURE__*/React.createElement(Dropdown, {
    position: "right",
    isPlain: true,
    isOpen: open,
    toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
      toggleIndicator: null,
      onToggle: () => setOpen(!open),
      "aria-label": "Help",
      id: "help"
    }, /*#__PURE__*/React.createElement(HelpIcon, null)),
    dropdownItems: dropdownItems
  });
};