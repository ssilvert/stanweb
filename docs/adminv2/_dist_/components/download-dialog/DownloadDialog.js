import React, { useState, useEffect, useContext } from "../../../web_modules/react.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { Alert, AlertVariant, Form, FormGroup, ModalVariant, Select, SelectOption, SelectVariant, Stack, StackItem, TextArea } from "../../../web_modules/@patternfly/react-core.js";
import FileSaver from "../../../web_modules/file-saver.js";
import { ConfirmDialogModal } from "../confirm-dialog/ConfirmDialog.js";
import { HelpItem } from "../help-enabler/HelpItem.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { HelpContext } from "../help-enabler/HelpHeader.js";
export const DownloadDialog = ({
  id,
  open,
  toggleDialog,
  protocol = "openid-connect"
}) => {
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const {
    t
  } = useTranslation("common");
  const {
    enabled
  } = useContext(HelpContext);
  const serverInfo = useServerInfo();
  const configFormats = serverInfo.clientInstallations[protocol];
  const [selected, setSelected] = useState(configFormats[configFormats.length - 1].id);
  const [snippet, setSnippet] = useState("");
  const [openType, setOpenType] = useState(false);
  useEffect(() => {
    return asyncStateFetch(async () => {
      const snippet = await adminClient.clients.getInstallationProviders({
        id,
        providerId: selected
      });

      if (typeof snippet === "string") {
        return snippet;
      } else {
        return JSON.stringify(snippet, undefined, 3);
      }
    }, snippet => setSnippet(snippet), handleError);
  }, [id, selected]);
  return /*#__PURE__*/React.createElement(ConfirmDialogModal, {
    titleKey: t("clients:downloadAdaptorTitle"),
    continueButtonLabel: t("download"),
    onConfirm: () => {
      const config = configFormats.find(config => config.id === selected);
      FileSaver.saveAs(new Blob([snippet], {
        type: config.mediaType
      }), config.filename);
    },
    open: open,
    toggleDialog: toggleDialog,
    variant: ModalVariant.medium
  }, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Stack, {
    hasGutter: true
  }, enabled && /*#__PURE__*/React.createElement(StackItem, null, /*#__PURE__*/React.createElement(Alert, {
    id: id,
    title: t("clients:description"),
    variant: AlertVariant.info,
    isInline: true
  }, configFormats.find(configFormat => configFormat.id === selected)?.helpText)), /*#__PURE__*/React.createElement(StackItem, null, /*#__PURE__*/React.createElement(FormGroup, {
    fieldId: "type",
    label: t("clients:formatOption"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: t("clients-help:downloadType"),
      forLabel: t("clients:formatOption"),
      forID: "type"
    })
  }, /*#__PURE__*/React.createElement(Select, {
    toggleId: "type",
    isOpen: openType,
    onToggle: () => {
      setOpenType(!openType);
    },
    variant: SelectVariant.single,
    value: selected,
    selections: selected,
    onSelect: (_, value) => {
      setSelected(value);
      setOpenType(false);
    },
    "aria-label": "Select Input"
  }, configFormats.map(configFormat => /*#__PURE__*/React.createElement(SelectOption, {
    key: configFormat.id,
    value: configFormat.id,
    isSelected: selected === configFormat.id
  }, configFormat.displayType))))), /*#__PURE__*/React.createElement(StackItem, {
    isFilled: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    fieldId: "details",
    label: t("clients:details"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: t("clients-help:details"),
      forLabel: t("clients:details"),
      forID: "details"
    })
  }, /*#__PURE__*/React.createElement(TextArea, {
    id: "details",
    readOnly: true,
    rows: 12,
    resizeOrientation: "vertical",
    value: snippet,
    "aria-label": "text area example"
  }))))));
};