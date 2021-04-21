import React, { useContext } from "../../../web_modules/react.js";
import { Popover } from "../../../web_modules/@patternfly/react-core.js";
import { HelpIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { HelpContext } from "./HelpHeader.js";
export const HelpItem = ({
  helpText,
  forLabel,
  forID
}) => {
  const {
    t
  } = useTranslation();
  const {
    enabled
  } = useContext(HelpContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, enabled && /*#__PURE__*/React.createElement(Popover, {
    bodyContent: t(helpText)
  }, /*#__PURE__*/React.createElement("button", {
    id: helpText,
    "aria-label": t(`helpLabel`, {
      label: forLabel
    }),
    onClick: e => e.preventDefault(),
    "aria-describedby": forID,
    className: "pf-c-form__group-label-help"
  }, /*#__PURE__*/React.createElement(HelpIcon, {
    noVerticalAlign: true
  }))));
};