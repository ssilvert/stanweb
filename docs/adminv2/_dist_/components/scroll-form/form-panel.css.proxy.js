
const code = ".kc-form-panel__panel {\r\n  margin-top: var(--pf-global--spacer--lg);\r\n  padding-bottom: var(--pf-global--spacer--2xl);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);