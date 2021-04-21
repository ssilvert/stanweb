import React from "../../../web_modules/react.js";
import { DropdownItem, SelectOption } from "../../../web_modules/@patternfly/react-core.js";
export let ClientScope;

(function (ClientScope) {
  ClientScope["default"] = "default";
  ClientScope["optional"] = "optional";
})(ClientScope || (ClientScope = {}));

const clientScopeTypes = Object.keys(ClientScope);
export const clientScopeTypesSelectOptions = t => clientScopeTypes.map(type => /*#__PURE__*/React.createElement(SelectOption, {
  key: type,
  value: type
}, t(`clientScope.${type}`)));
export const clientScopeTypesDropdown = (t, onClick) => clientScopeTypes.map(type => /*#__PURE__*/React.createElement(DropdownItem, {
  key: type,
  onClick: () => onClick(type)
}, t(`clientScope.${type}`)));