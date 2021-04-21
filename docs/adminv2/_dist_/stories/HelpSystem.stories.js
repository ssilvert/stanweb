import React, { useContext } from "../../web_modules/react.js";
import { Page, PageHeader, PageHeaderTools, PageHeaderToolsItem, PageSection, FormGroup, Form, TextInput } from "../../web_modules/@patternfly/react-core.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { Help, HelpContext, HelpHeader } from "../components/help-enabler/HelpHeader.js";
export default {
  title: "Help System Example",
  component: HelpHeader
};
export const HelpSystem = () => /*#__PURE__*/React.createElement(Help, null, /*#__PURE__*/React.createElement(HelpSystemTest, null));
export const HelpItems = () => /*#__PURE__*/React.createElement(HelpItem, {
  helpText: "This explains the related field",
  forLabel: "Field label",
  forID: "storybook-example-id"
});
export const FormFieldHelp = () => /*#__PURE__*/React.createElement(Form, {
  isHorizontal: true
}, /*#__PURE__*/React.createElement(FormGroup, {
  label: "Label",
  labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
    helpText: "This explains the related field",
    forLabel: "Field label",
    forID: "storybook-form-help"
  }),
  fieldId: "storybook-form-help"
}, /*#__PURE__*/React.createElement(TextInput, {
  isRequired: true,
  type: "text",
  id: "storybook-form-help"
})));

const HelpSystemTest = () => {
  const {
    enabled
  } = useContext(HelpContext);
  return /*#__PURE__*/React.createElement(Page, {
    header: /*#__PURE__*/React.createElement(PageHeader, {
      headerTools: /*#__PURE__*/React.createElement(PageHeaderTools, null, /*#__PURE__*/React.createElement(PageHeaderToolsItem, null, /*#__PURE__*/React.createElement(HelpHeader, null)), /*#__PURE__*/React.createElement(PageHeaderToolsItem, null, "dummy user..."))
    })
  }, /*#__PURE__*/React.createElement(PageSection, null, "Help system is ", enabled ? "enabled" : "not on"), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormFieldHelp, null)));
};