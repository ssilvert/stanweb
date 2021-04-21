import React from "../../../web_modules/react.js";
import { AlertGroup, Alert, AlertActionCloseButton, AlertVariant } from "../../../web_modules/@patternfly/react-core.js";
export function AlertPanel({
  alerts,
  onCloseAlert
}) {
  return /*#__PURE__*/React.createElement(AlertGroup, {
    isToast: true
  }, alerts.map(({
    key,
    variant,
    message,
    description
  }) => /*#__PURE__*/React.createElement(Alert, {
    timeout: true,
    key: key,
    isLiveRegion: true,
    variant: AlertVariant[variant],
    variantLabel: "",
    title: message,
    actionClose: /*#__PURE__*/React.createElement(AlertActionCloseButton, {
      title: message,
      onClose: () => onCloseAlert(key)
    })
  }, description && /*#__PURE__*/React.createElement("p", null, description))));
}