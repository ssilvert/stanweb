
const code = "\r\n\r\n.keycloak-admin--service-account__client-name {\r\n  margin-right: var(--pf-global--spacer--sm);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);