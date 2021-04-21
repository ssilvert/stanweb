function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "../../web_modules/react.js";
import { Button } from "../../web_modules/@patternfly/react-core.js";
import serverInfo from "../context/server-info/__tests__/mock.json.proxy.js";
import { ServerInfoContext } from "../context/server-info/ServerInfoProvider.js";
import { AddMapperDialog } from "../client-scopes/add/MapperDialog.js";
export default {
  title: "Add mapper dialog",
  component: AddMapperDialog
};

const Template = args => {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(ServerInfoContext.Provider, {
    value: serverInfo
  }, /*#__PURE__*/React.createElement(AddMapperDialog, _extends({}, args, {
    open: open,
    toggleDialog: () => setOpen(!open)
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setOpen(true)
  }, "Show"));
};

export const BuildInDialog = Template.bind({});
BuildInDialog.args = {
  protocol: "openid-connect",
  filter: []
};
export const ProtocolMapperDialog = Template.bind({});
ProtocolMapperDialog.args = {
  protocol: "openid-connect"
};