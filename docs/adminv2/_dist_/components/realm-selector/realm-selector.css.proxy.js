
const code = ".keycloak__realm_selector_dropdown__toggle {\r\n  --pf-c-dropdown__toggle--Color: var(--pf-c-nav__link--m-current--Color);\r\n  --pf-c-dropdown__toggle--BackgroundColor: var(\r\n    --pf-global--BackgroundColor--dark-100\r\n  );\r\n  --pf-c-dropdown__toggle--before--BorderTopColor: var(\r\n    --pf-global--BorderColor--200\r\n  );\r\n  --pf-c-dropdown__toggle--before--BorderRightColor: var(\r\n    --pf-global--BorderColor--200\r\n  );\r\n  --pf-c-dropdown__toggle--before--BorderBottomColor: var(\r\n    --pf-global--BorderColor--100\r\n  );\r\n  --pf-c-dropdown__toggle--before--BorderLeftColor: var(\r\n    --pf-global--BorderColor--200\r\n  );\r\n  width: 100%;\r\n}\r\n\r\n.keycloak__realm_selector__context_selector {\r\n  --pf-c-context-selector__toggle--Color: var(--pf-c-nav__link--m-current--Color);\r\n}\r\n\r\n.keycloak__realm_selector__dropdown {\r\n  width: 100%;\r\n}\r\n\r\n.keycloak__realm_selector__list-item-split {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n/* the last child is the realm selector button, and this is the only way to style the li around it */\r\n\r\n.keycloak__realm_selector__context_selector li:last-child {\r\n  position: sticky;\r\n  bottom: 0;\r\n  background-color: var(--pf-c-context-selector__menu--BackgroundColor);\r\n}\r\n\r\n.keycloak__page_nav__nav_item__realm-selector {\r\n  margin-top: var(--pf-c-nav__link--PaddingTop);\r\n  padding-right: var(--pf-c-nav__link--PaddingRight);\r\n  margin-bottom: var(--pf-c-nav__link--PaddingBottom);\r\n  padding-left: var(--pf-c-nav__link--PaddingLeft);\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);