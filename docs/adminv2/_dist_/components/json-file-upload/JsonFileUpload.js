function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "../../../web_modules/react.js";
import { FormGroup, FileUpload, Modal, ModalVariant, Button } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export const JsonFileUpload = ({
  id,
  onChange,
  ...rest
}) => {
  const {
    t
  } = useTranslation();
  const defaultUpload = {
    value: "",
    filename: "",
    isLoading: false,
    modal: false
  };
  const [fileUpload, setFileUpload] = useState(defaultUpload);

  const removeDialog = () => setFileUpload({ ...fileUpload,
    modal: false
  });

  const handleChange = (value, filename, event) => {
    if (event.nativeEvent instanceof MouseEvent && !(event.nativeEvent instanceof DragEvent)) {
      setFileUpload({ ...fileUpload,
        modal: true
      });
    } else {
      setFileUpload({ ...fileUpload,
        value,
        filename
      });
      onChange(value, filename, event);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, fileUpload.modal && /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.small,
    title: t("clearFile"),
    isOpen: true,
    onClose: removeDialog,
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "confirm",
      variant: "primary",
      onClick: event => {
        setFileUpload(defaultUpload);
        onChange("", "", event);
      }
    }, t("clear")), /*#__PURE__*/React.createElement(Button, {
      key: "cancel",
      variant: "link",
      onClick: removeDialog
    }, t("cancel"))]
  }, t("clearFileExplain")), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("resourceFile"),
    fieldId: id,
    helperText: "Upload a JSON file"
  }, /*#__PURE__*/React.createElement(FileUpload, _extends({
    id: id
  }, rest, {
    type: "text",
    value: fileUpload.value,
    filename: fileUpload.filename,
    onChange: handleChange,
    onReadStarted: () => setFileUpload({ ...fileUpload,
      isLoading: true
    }),
    onReadFinished: () => setFileUpload({ ...fileUpload,
      isLoading: false
    }),
    isLoading: fileUpload.isLoading,
    dropzoneProps: {
      accept: ".json"
    }
  }))));
};