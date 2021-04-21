function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Children, cloneElement, isValidElement } from "../../../web_modules/react.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { ActionGroup, ClipboardCopy, Form, FormGroup, Grid, GridItem, Stack, StackItem, TextArea } from "../../../web_modules/@patternfly/react-core.js";
import { useAccess } from "../../context/access/Access.js";

/**
 * Use this in place of a patternfly Form component and add the `role` and `fineGrainedAccess` properties.
 * @param {FormAccessProps} param0 - all properties of Form + role and fineGrainedAccess
 */
export const FormAccess = ({
  children,
  role,
  fineGrainedAccess = false,
  unWrap = false,
  ...rest
}) => {
  const {
    hasAccess
  } = useAccess();

  const recursiveCloneChildren = (children, newProps) => {
    return Children.map(children, child => {
      if (! /*#__PURE__*/isValidElement(child)) {
        return child;
      }

      if (child.props) {
        const element = child;

        if (child.type === Controller) {
          return /*#__PURE__*/cloneElement(child, { ...element.props,
            render: props => {
              const renderElement = element.props.render(props);
              return /*#__PURE__*/cloneElement(renderElement, { ...renderElement.props,
                ...newProps
              });
            }
          });
        }

        const children = recursiveCloneChildren(element.props.children, newProps);

        if (child.type === TextArea) {
          return /*#__PURE__*/cloneElement(child, {
            readOnly: newProps.isDisabled,
            children
          });
        }

        return /*#__PURE__*/cloneElement(child, child.type === FormGroup || child.type === GridItem || child.type === Grid || child.type === ActionGroup || child.type === ClipboardCopy || child.type === Stack || child.type === StackItem ? {
          children
        } : { ...newProps,
          children
        });
      }

      return child;
    });
  };

  const isDisabled = !hasAccess(role) && !fineGrainedAccess;
  return /*#__PURE__*/React.createElement(React.Fragment, null, !unWrap && /*#__PURE__*/React.createElement(Form, _extends({}, rest, {
    className: "keycloak__form " + (rest.className || "")
  }), recursiveCloneChildren(children, isDisabled ? {
    isDisabled
  } : {})), unWrap && recursiveCloneChildren(children, isDisabled ? {
    isDisabled
  } : {}));
};