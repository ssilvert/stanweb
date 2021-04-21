import React from "../../web_modules/react.js";
import { DataLoader } from "../components/data-loader/DataLoader.js";
export default {
  title: "Data Loader",
  component: DataLoader
};
export const loadPosts = () => {
  const PostLoader = props => {
    const loader = async () => {
      const wait = (ms, value) => new Promise(resolve => setTimeout(resolve, ms, value));

      return await fetch(props.url).then(res => res.json()).then(value => wait(3000, value));
    };

    return /*#__PURE__*/React.createElement(DataLoader, {
      loader: loader
    }, props.children);
  };

  return /*#__PURE__*/React.createElement(PostLoader, {
    url: "https://jsonplaceholder.typicode.com/posts"
  }, posts => /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Description"))), /*#__PURE__*/React.createElement("tbody", null, posts.map((post, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, post.title), /*#__PURE__*/React.createElement("td", null, post.body))))));
};