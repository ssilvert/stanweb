
const code = "\r\n\r\n.keycloak_help-header-description {\r\n  padding-top: var(--pf-global--spacer--lg);\r\n  overflow-wrap: break-word;\r\n  white-space: normal;\r\n  color: var(--pf-c-dropdown__menu-item--Color);\r\n}\r\n\r\n.keycloak_help-header-switch {\r\n  margin-left: var(--pf-global--spacer--xl);\r\n}\r\n\r\n.keycloak_help-header-switch .pf-c-switch__toggle::before {\r\n  background-color: var(--pf-c-switch__toggle-icon--Color);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);