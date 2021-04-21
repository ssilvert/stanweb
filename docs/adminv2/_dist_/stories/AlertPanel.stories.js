import React from "../../web_modules/react.js";
import { AlertVariant, Button } from "../../web_modules/@patternfly/react-core.js";
import { AlertPanel } from "../components/alert/AlertPanel.js";
import { AlertProvider, useAlerts } from "../components/alert/Alerts.js";
export default {
  title: "Alert Panel",
  component: AlertPanel
};
export const Api = () => /*#__PURE__*/React.createElement(AlertPanel, {
  alerts: [{
    key: 1,
    message: "Hello",
    variant: AlertVariant.default
  }],
  onCloseAlert: () => {}
});

const AlertButton = () => {
  const {
    addAlert
  } = useAlerts();
  return /*#__PURE__*/React.createElement(Button, {
    onClick: () => addAlert("Hello", AlertVariant.default)
  }, "Add");
};

export const AddAlert = () => {
  return /*#__PURE__*/React.createElement(AlertProvider, null, /*#__PURE__*/React.createElement(AlertButton, null));
};