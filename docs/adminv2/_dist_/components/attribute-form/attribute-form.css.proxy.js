
const code = ".kc-attributes__table {\r\n  /* even though the table is borderless, make the border under the th transparent */\r\n  --pf-c-table--border-width--base: 0;\r\n  --pf-c-table--m-compact--cell--first-last-child--PaddingLeft: 0;\r\n}\r\n\r\n.kc-attributes__plus-icon {\r\n  /* shift the button left to adjust for table cell padding */\r\n  margin-left: calc(var(--pf-global--spacer--md) * -1);\r\n}\r\n\r\n.pf-c-button.kc-attributes__minus-icon {\r\n  /* shift the button left to adjust for table cell padding */\r\n  margin-left: calc(var(--pf-global--spacer--md) * -1);\r\n  color: var(--pf-c-button--m-plain--Color);\r\n}\r\n\r\n.kc-attributes__action-group {\r\n  /* subtract the padding at the bottom of the table from the action group margin */\r\n  --pf-c-form__group--m-action--MarginTop: calc(\r\n    var(--pf-global--spacer--2xl) - var(--pf-global--spacer--sm)\r\n  );\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);