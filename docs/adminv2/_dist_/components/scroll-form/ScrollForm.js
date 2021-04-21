function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Children } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Grid, GridItem, JumpLinks, JumpLinksItem, PageSection } from "../../../web_modules/@patternfly/react-core.js";
import { mainPageContentId } from "../../App.js";
import { FormPanel } from "./FormPanel.js";
import "./scroll-form.css.proxy.js";

const spacesToHyphens = string => {
  return string.replace(/\s+/g, "-");
};

export const ScrollForm = ({
  sections,
  children,
  ...rest
}) => {
  const {
    t
  } = useTranslation("common");
  const nodes = Children.toArray(children);
  return /*#__PURE__*/React.createElement(Grid, _extends({
    hasGutter: true
  }, rest), /*#__PURE__*/React.createElement(GridItem, {
    span: 8
  }, sections.map((cat, index) => /*#__PURE__*/React.createElement(FormPanel, {
    scrollId: spacesToHyphens(cat),
    key: cat,
    title: cat
  }, nodes[index]))), /*#__PURE__*/React.createElement(GridItem, {
    span: 4
  }, /*#__PURE__*/React.createElement(PageSection, {
    className: "kc-scroll-form--sticky"
  }, /*#__PURE__*/React.createElement(JumpLinks, {
    isVertical: true // scrollableSelector has to point to the id of the element whose scrollTop changes
    // to scroll the entire main section, it has to be the pf-c-page__main
    ,
    scrollableSelector: `#${mainPageContentId}`,
    label: t("jumpToSection"),
    offset: 100
  }, sections.map(cat =>
  /*#__PURE__*/
  // note that JumpLinks currently does not work with spaces in the href
  React.createElement(JumpLinksItem, {
    key: cat,
    href: `#${spacesToHyphens(cat)}`
  }, cat))))));
};