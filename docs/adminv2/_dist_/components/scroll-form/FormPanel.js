import React from "../../../web_modules/react.js";
import { Card, CardBody, CardHeader, CardTitle, Title } from "../../../web_modules/@patternfly/react-core.js";
import "./form-panel.css.proxy.js";
export const FormPanel = ({
  title,
  children,
  scrollId
}) => {
  return /*#__PURE__*/React.createElement(Card, {
    isFlat: true,
    className: "kc-form-panel__panel"
  }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, {
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h4",
    size: "xl",
    className: "kc-form-panel__title",
    id: scrollId,
    tabIndex: 0 // so that jumpLink sends focus to the section for a11y

  }, title))), /*#__PURE__*/React.createElement(CardBody, null, children));
};