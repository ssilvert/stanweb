
const code = ".kc-scroll-form--sticky {\r\n  position: sticky;\r\n  top: 0;\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);