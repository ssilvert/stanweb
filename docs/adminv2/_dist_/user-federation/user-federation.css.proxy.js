
const code = ".keycloak__user-federation__dropdown {\r\n  margin-top: var(--pf-global--spacer--lg);\r\n}\r\n\r\n.keycloak-admin--user-federation__gallery-item {\r\n  display: contents;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);