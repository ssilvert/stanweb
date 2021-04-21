
const code = ".keycloak-admin--groups__member-count {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.keycloak-admin--groups__member-count svg {\r\n  color: var(--pf-global--Color--200);\r\n  font-size: var(--pf-global--FontSize--md);\r\n  margin-right: var(--pf-global--spacer--sm);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);