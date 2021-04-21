
const code = "\r\n.container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\r\n}\r\n\r\n/* Then style the iframe to fit in the container div with full height and width */\r\n\r\n.responsive-iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);