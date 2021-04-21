import React from "../../web_modules/react.js";
import { FormattedLink } from "../components/external-link/FormattedLink.js";
export default {
  title: "Formatted link",
  component: FormattedLink
};

const Template = args => /*#__PURE__*/React.createElement(FormattedLink, args);

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "With title",
  href: "http://test.nl"
};
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  href: "http://some-other-link.nl/super"
};
export const ApplicationLink = Template.bind({});
ApplicationLink.args = {
  title: "Application link",
  href: "/application/main"
};