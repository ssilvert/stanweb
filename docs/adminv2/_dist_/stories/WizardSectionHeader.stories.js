import React from "../../web_modules/react.js";
import { WizardSectionHeader } from "../components/wizard-section-header/WizardSectionHeader.js";
export default {
  title: "Wizard Section Header",
  component: WizardSectionHeader
};

const Template = args => /*#__PURE__*/React.createElement(WizardSectionHeader, args);

export const TitleAndDescription = Template.bind({});
TitleAndDescription.args = {
  title: "Section title",
  description: "This is a description of the section",
  showDescription: true
};