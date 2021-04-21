function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "../../../web_modules/react.js";
import { ExternalLinkAltIcon } from "../../../web_modules/@patternfly/react-icons.js";
export const FormattedLink = ({
  title,
  href,
  isInline,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noreferrer noopener",
    className: isInline ? "pf-m-link pf-m-inline" : ""
  }, rest), title ? title : href, " ", href?.startsWith("http") && /*#__PURE__*/React.createElement(ExternalLinkAltIcon, null));
};
export const formattedLinkTableCell = () => data => {
  return data ? /*#__PURE__*/React.createElement(FormattedLink, {
    href: data.toString()
  }) : undefined;
};