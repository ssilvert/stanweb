
const code = "\r\n\r\n.kc-who-will-appear-button {\r\n  padding-left: 0px;\r\n}\r\n\r\n.pf-c-button.pf-m-link.kc-groups-link {\r\n  font-size: var(--pf-global--FontSize--sm);\r\n  padding-left: 0px;\r\n  padding-right: var(--pf-global--spacer--xs);\r\n  padding-top: 0px;\r\n}\r\n\r\n.pf-c-button.pf-m-link.kc-users-link {\r\n  font-size: var(--pf-global--FontSize--sm);\r\n  padding-left: var(--pf-global--spacer--xs);\r\n  padding-right: var(--pf-global--spacer--xs);\r\n  padding-top: 0px;\r\n}\r\n\r\n.pf-c-button.pf-m-link.kc-groups-link-empty-state {\r\n  padding-left: var(--pf-global--spacer--xs);\r\n  padding-right: var(--pf-global--spacer--xs);\r\n}\r\n\r\n.pf-c-button.pf-m-link.kc-users-link-empty-state {\r\n  padding-left: var(--pf-global--spacer--xs);\r\n  padding-right: var(--pf-global--spacer--xs);\r\n}\r\n\r\n.pf-c-chip-group.kc-filter-chip-group__table {\r\n  margin-left: var(--pf-global--spacer--md);\r\n  margin-bottom: var(--pf-global--spacer--md);\r\n}\r\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);