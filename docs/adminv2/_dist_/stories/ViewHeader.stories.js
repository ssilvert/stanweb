import React from "../../web_modules/react.js";
import { DropdownItem, Page } from "../../web_modules/@patternfly/react-core.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
export default {
  title: "View Header",
  component: ViewHeader
};

const Template = args => /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(ViewHeader, args));

export const Extended = Template.bind({});
Extended.args = {
  titleKey: "This is the title",
  badge: "badge",
  subKey: "This is the description.",
  subKeyLinkProps: {
    title: "More information",
    href: "http://google.com"
  },
  dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
    key: "first",
    value: "first-item",
    onClick: () => {}
  }, "First item"), /*#__PURE__*/React.createElement(DropdownItem, {
    key: "second",
    value: "second-item",
    onClick: () => {}
  }, "Second item")]
};
export const Simple = Template.bind({});
Simple.args = {
  titleKey: "Title simple",
  subKey: "Some lengthy description about what this is about."
};