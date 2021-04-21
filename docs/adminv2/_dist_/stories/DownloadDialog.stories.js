import React, { useState } from "../../web_modules/react.js";
import { DownloadDialog } from "../components/download-dialog/DownloadDialog.js";
import { MockAdminClient } from "./MockAdminClient.js";
export default {
  title: "Download Dialog",
  component: DownloadDialog
};

const Test = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return /*#__PURE__*/React.createElement(MockAdminClient, {
    mock: {
      clients: {
        getInstallationProviders: () => '{some: "json"}'
      }
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: "show",
    onClick: toggle
  }, "Show"), /*#__PURE__*/React.createElement(DownloadDialog, {
    id: "58577281-7af7-410c-a085-61ff3040be6d",
    open: open,
    toggleDialog: toggle
  }));
};

export const Show = () => /*#__PURE__*/React.createElement(Test, null);