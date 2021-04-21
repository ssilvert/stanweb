function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "../../../web_modules/react.js";
import { Button, ButtonVariant, Modal, ModalVariant } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export const useConfirmDialog = props => {
  const [show, setShow] = useState(false);

  function toggleDialog() {
    setShow(show => !show);
  }

  const Dialog = () => /*#__PURE__*/React.createElement(ConfirmDialogModal, _extends({
    key: "confirmDialog"
  }, props, {
    open: show,
    toggleDialog: toggleDialog
  }));

  return [toggleDialog, Dialog];
};
export const ConfirmDialogModal = ({
  titleKey,
  messageKey,
  cancelButtonLabel,
  continueButtonLabel,
  continueButtonVariant,
  onConfirm,
  onCancel,
  children,
  open = true,
  variant = ModalVariant.small,
  toggleDialog
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, {
    title: t(titleKey),
    isOpen: open,
    onClose: toggleDialog,
    variant: variant,
    actions: [/*#__PURE__*/React.createElement(Button, {
      id: "modal-confirm",
      key: "confirm",
      variant: continueButtonVariant || ButtonVariant.primary,
      onClick: () => {
        onConfirm();
        toggleDialog();
      }
    }, t(continueButtonLabel || "common:continue")), /*#__PURE__*/React.createElement(Button, {
      id: "modal-cancel",
      key: "cancel",
      variant: ButtonVariant.link,
      onClick: () => {
        if (onCancel) onCancel();
        toggleDialog();
      }
    }, t(cancelButtonLabel || "common:cancel"))]
  }, !messageKey && children, messageKey && t(messageKey));
};