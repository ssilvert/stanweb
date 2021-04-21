
const code = ".kc-wizard-section-header__title {\r\n  margin-bottom: var(--pf-global--spacer--lg);\r\n}\r\n.kc-wizard-section-header__title--has-description {\r\n  margin-bottom: var(--pf-global--spacer--sm);\r\n}\r\n.kc-wizard-section-header__description {\r\n  margin-bottom: var(--pf-global--spacer--lg);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);