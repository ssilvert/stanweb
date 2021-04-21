
const code = "\r\n.keycloak__dashboard_icon {\r\n  max-width: 114px;\r\n}\r\n\r\n.keycloak__dashboard_card {\r\n  height: 100%;\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);