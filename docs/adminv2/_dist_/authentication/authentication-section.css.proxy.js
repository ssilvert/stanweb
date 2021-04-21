
const code = ".keycloak_authentication-section__usedby {\r\n  color: var(--pf-global--success-color--100);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);