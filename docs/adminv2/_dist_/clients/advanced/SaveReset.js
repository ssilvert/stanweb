import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { ActionGroup, Button } from "../../../web_modules/@patternfly/react-core.js";
export const SaveReset = ({
  name,
  save,
  reset
}) => {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": name + "Save",
    variant: "tertiary",
    onClick: save
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    "data-testid": name + "Revert",
    variant: "link",
    onClick: reset
  }, t("common:revert")));
};