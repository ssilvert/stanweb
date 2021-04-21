import { Wizard } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import React from "../../web_modules/react.js";
import { KerberosSettingsRequired } from "./kerberos/KerberosSettingsRequired.js";
import { SettingsCache } from "./shared/SettingsCache.js";
import { useForm } from "../../web_modules/react-hook-form.js";
export const UserFederationKerberosWizard = () => {
  const {
    t
  } = useTranslation("user-federation");
  const form = useForm({
    mode: "onChange"
  });
  const steps = [{
    name: t("requiredSettings"),
    component: /*#__PURE__*/React.createElement(KerberosSettingsRequired, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("cacheSettings"),
    component: /*#__PURE__*/React.createElement(SettingsCache, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    }),
    nextButtonText: t("common:finish") // TODO: needs to disable until cache policy is valid

  }];
  return /*#__PURE__*/React.createElement(Wizard // Because this is an inline wizard, this title and description should be put into the page. Specifying them here causes the wizard component to make a header that would be used on a modal.
  // title={t("addKerberosWizardTitle")}
  // description={helpText("addKerberosWizardDescription")}
  , {
    steps: steps
  });
};