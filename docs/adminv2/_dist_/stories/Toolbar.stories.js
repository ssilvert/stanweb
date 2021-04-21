import React from "../../web_modules/react.js";
import { Nav, NavItem, NavList, PageSidebar, Page } from "../../web_modules/@patternfly/react-core.js";
import { RealmSelector } from "../components/realm-selector/RealmSelector.js";
import { RealmContextProvider } from "../context/realm-context/RealmContext.js";
import { HashRouter } from "../../web_modules/react-router-dom.js";
export default {
  title: "Header",
  component: RealmSelector
};
export const Header = () => {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(RealmContextProvider, null, /*#__PURE__*/React.createElement(Page, {
    sidebar: /*#__PURE__*/React.createElement(PageSidebar, {
      nav: /*#__PURE__*/React.createElement(Nav, null, /*#__PURE__*/React.createElement(NavList, null, /*#__PURE__*/React.createElement(RealmSelector, {
        realmList: [{
          id: "master",
          realm: "Master"
        }, {
          id: "photoz",
          realm: "Photoz"
        }]
      }), /*#__PURE__*/React.createElement(NavItem, {
        id: "default-link1",
        to: "#default-link1",
        itemId: 0
      }, "Link 1"), /*#__PURE__*/React.createElement(NavItem, {
        id: "default-link2",
        to: "#default-link2",
        itemId: 1,
        isActive: true
      }, "Current link"), /*#__PURE__*/React.createElement(NavItem, {
        id: "default-link3",
        to: "#default-link3",
        itemId: 2
      }, "Link 3"), /*#__PURE__*/React.createElement(NavItem, {
        id: "default-link4",
        to: "#default-link4",
        itemId: 3
      }, "Link 4")))
    })
  })));
};