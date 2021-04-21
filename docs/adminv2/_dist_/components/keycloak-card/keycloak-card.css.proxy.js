
const code = ".keycloak-admin--keycloak-card__footer-text {\r\n  --pf-l-flex--spacer: var(--pf-l-flex--spacer--lg);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);