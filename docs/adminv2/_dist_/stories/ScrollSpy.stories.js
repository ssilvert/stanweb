import React from "../../web_modules/react.js";
import { ScrollForm } from "../components/scroll-form/ScrollForm.js";
export default {
  title: "Scroll spy scroll form",
  component: ScrollForm
};
export const View = () => {
  return /*#__PURE__*/React.createElement(ScrollForm, {
    sections: ["Revocation", "Clustering", "Fine grain stuff"]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "2400px"
    }
  }, "One"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "2400px"
    }
  }, "Two"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "2400px"
    }
  }, "fine grain"));
};