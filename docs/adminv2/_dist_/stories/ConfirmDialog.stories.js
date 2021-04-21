import React from "../../web_modules/react.js";
import { TextContent, Text, TextVariants, ButtonVariant } from "../../web_modules/@patternfly/react-core.js";
import { action } from "../../web_modules/@storybook/addon-actions.js";
import { ConfirmDialogModal, useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
export default {
  title: "Confirmation Dialog",
  component: ConfirmDialogModal
};

const Template = args => /*#__PURE__*/React.createElement(ConfirmDialogModal, args);

export const Simple = Template.bind({});
Simple.args = {
  titleKey: "Delete app02?",
  messageKey: "If you delete this client, all associated data will be removed.",
  continueButtonLabel: "Delete",
  continueButtonVariant: ButtonVariant.danger
};
export const Children = Template.bind({});
Children.args = {
  titleKey: "Children as content!",
  continueButtonVariant: ButtonVariant.primary,
  children: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextContent, null, /*#__PURE__*/React.createElement(Text, {
    component: TextVariants.h3
  }, "Hello World")), /*#__PURE__*/React.createElement("p", null, "Example of some other patternfly components."))
};

const Test = () => {
  const [toggle, Dialog] = useConfirmDialog({
    titleKey: "Delete app02?",
    messageKey: "If you delete this client, all associated data will be removed.",
    continueButtonLabel: "Delete",
    onConfirm: action("confirm"),
    onCancel: action("cancel")
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    id: "show",
    onClick: toggle
  }, "Show"), /*#__PURE__*/React.createElement(Dialog, null));
};

export const Api = () => /*#__PURE__*/React.createElement(Test, null);