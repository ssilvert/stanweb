import React, { useState, createContext, useContext } from "../../../web_modules/react.js";
import { AlertPanel } from "./AlertPanel.js";
import { AlertVariant } from "../../../web_modules/@patternfly/react-core.js";
export const AlertContext = /*#__PURE__*/createContext({
  addAlert: () => {}
});
export const useAlerts = () => useContext(AlertContext);
export const AlertProvider = ({
  children
}) => {
  const [alerts, setAlerts] = useState([]);

  const createId = () => new Date().getTime();

  const hideAlert = key => {
    setAlerts(alerts => [...alerts.filter(el => el.key !== key)]);
  };

  const addAlert = (message, variant = AlertVariant.default, description) => {
    setAlerts([...alerts, {
      key: createId(),
      message,
      variant,
      description
    }]);
  };

  return /*#__PURE__*/React.createElement(AlertContext.Provider, {
    value: {
      addAlert
    }
  }, /*#__PURE__*/React.createElement(AlertPanel, {
    alerts: alerts,
    onCloseAlert: hideAlert
  }), children);
};