function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Children, isValidElement } from "../../../web_modules/react.js";
import { useHistory, useRouteMatch } from "../../../web_modules/react-router-dom.js";
import { Tabs } from "../../../web_modules/@patternfly/react-core.js";

const createUrl = (path, params) => {
  let url = path;

  for (const key in params) {
    const value = params[key];

    if (url.indexOf(key) !== -1) {
      url = url.replace(new RegExp(`:${key}\\??`), value || "");
    }
  }

  return url;
};

export const KeycloakTabs = ({
  paramName = "tab",
  children,
  ...rest
}) => {
  const match = useRouteMatch();
  const params = match.params;
  const history = useHistory();
  const firstTab = Children.toArray(children)[0];
  const tab = params[paramName] || /*#__PURE__*/isValidElement(firstTab) && firstTab.props.eventKey || "";
  const pathIndex = match.path.indexOf(paramName) + paramName.length;
  const path = match.path.substr(0, pathIndex);
  return /*#__PURE__*/React.createElement(Tabs, _extends({
    activeKey: tab,
    onSelect: (_, key) => history.push(createUrl(path, { ...params,
      [paramName]: key
    }))
  }, rest), children);
};