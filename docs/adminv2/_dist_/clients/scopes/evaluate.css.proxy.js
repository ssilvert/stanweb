
const code = ".keycloak__scopes_evaluate__intro {\r\n  padding: var(--pf-global--spacer--md) 0 var(--pf-global--spacer--lg);\r\n  color: var(--pf-global--primary-color--100);\r\n}\r\n.keycloak__scopes_evaluate__clipboard-copy input {\r\n  display: none;\r\n}\r\n.keycloak__scopes_evaluate__tabs {\r\n  padding-top: var(--pf-global--spacer--2xl);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);