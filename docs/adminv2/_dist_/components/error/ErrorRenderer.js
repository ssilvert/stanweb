import { Alert, AlertActionCloseButton, AlertActionLink, AlertVariant, PageSection } from "../../../web_modules/@patternfly/react-core.js";
import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export const ErrorRenderer = ({
  error,
  resetErrorBoundary
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(PageSection, null, /*#__PURE__*/React.createElement(Alert, {
    isInline: true,
    variant: AlertVariant.danger,
    title: error.message,
    actionClose: /*#__PURE__*/React.createElement(AlertActionCloseButton, {
      title: error.message,
      onClose: resetErrorBoundary
    }),
    actionLinks: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AlertActionLink, {
      onClick: resetErrorBoundary
    }, t("retry")))
  }));
};