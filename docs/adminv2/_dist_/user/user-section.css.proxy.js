
const code = ".keycloak__user-section__email-verified {\r\n  color: var(--pf-global--danger-color--100);\r\n}\r\n\r\nbutton.pf-c-button.pf-m-primary.kc-join-group-button {\r\n  margin-left: var(--pf-global--spacer--md);\r\n  margin-right: var(--pf-global--spacer--xl);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);