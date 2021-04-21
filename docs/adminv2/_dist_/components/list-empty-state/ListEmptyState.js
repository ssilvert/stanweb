import React from "../../../web_modules/react.js";
import { EmptyState, EmptyStateIcon, EmptyStateBody, Title, Button, ButtonVariant, EmptyStateSecondaryActions } from "../../../web_modules/@patternfly/react-core.js";
import { PlusCircleIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { SearchIcon } from "../../../web_modules/@patternfly/react-icons.js";
export const ListEmptyState = ({
  message,
  instructions,
  onPrimaryAction,
  hasIcon = true,
  isSearchVariant,
  primaryActionText,
  secondaryActions
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EmptyState, {
    "data-testid": "empty-state",
    variant: "large"
  }, hasIcon && isSearchVariant ? /*#__PURE__*/React.createElement(EmptyStateIcon, {
    icon: SearchIcon
  }) : hasIcon && /*#__PURE__*/React.createElement(EmptyStateIcon, {
    icon: PlusCircleIcon
  }), /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h4",
    size: "lg"
  }, message), /*#__PURE__*/React.createElement(EmptyStateBody, null, instructions), primaryActionText && /*#__PURE__*/React.createElement(Button, {
    "data-testid": "empty-primary-action",
    variant: "primary",
    onClick: onPrimaryAction
  }, primaryActionText), secondaryActions && /*#__PURE__*/React.createElement(EmptyStateSecondaryActions, null, secondaryActions.map(action => /*#__PURE__*/React.createElement(Button, {
    key: action.text,
    variant: action.type || ButtonVariant.secondary,
    onClick: action.onClick
  }, action.text)))));
};