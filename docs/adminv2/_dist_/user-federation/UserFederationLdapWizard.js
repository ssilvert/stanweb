import { Button, Wizard, WizardContextConsumer, WizardFooter } from "../../web_modules/@patternfly/react-core.js";
import React from "../../web_modules/react.js";
import { LdapSettingsGeneral } from "./ldap/LdapSettingsGeneral.js";
import { LdapSettingsConnection } from "./ldap/LdapSettingsConnection.js";
import { LdapSettingsSearching } from "./ldap/LdapSettingsSearching.js";
import { LdapSettingsSynchronization } from "./ldap/LdapSettingsSynchronization.js";
import { LdapSettingsKerberosIntegration } from "./ldap/LdapSettingsKerberosIntegration.js";
import { SettingsCache } from "./shared/SettingsCache.js";
import { LdapSettingsAdvanced } from "./ldap/LdapSettingsAdvanced.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useForm } from "../../web_modules/react-hook-form.js";
export const UserFederationLdapWizard = () => {
  const form = useForm();
  const {
    t
  } = useTranslation("user-federation");
  const steps = [{
    name: t("requiredSettings"),
    id: "ldapRequiredSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsGeneral, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("connectionAndAuthenticationSettings"),
    id: "ldapConnectionSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsConnection, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("ldapSearchingAndUpdatingSettings"),
    id: "ldapSearchingSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsSearching, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("synchronizationSettings"),
    id: "ldapSynchronizationSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsSynchronization, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("kerberosIntegration"),
    id: "ldapKerberosIntegrationSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsKerberosIntegration, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("cacheSettings"),
    id: "ldapCacheSettingsStep",
    component: /*#__PURE__*/React.createElement(SettingsCache, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }, {
    name: t("advancedSettings"),
    id: "ldapAdvancedSettingsStep",
    component: /*#__PURE__*/React.createElement(LdapSettingsAdvanced, {
      form: form,
      showSectionHeading: true,
      showSectionDescription: true
    })
  }];
  const footer = /*#__PURE__*/React.createElement(WizardFooter, null, /*#__PURE__*/React.createElement(WizardContextConsumer, null, ({
    activeStep,
    onNext,
    onBack,
    onClose
  }) => {
    // First step buttons
    if (activeStep.id === "ldapRequiredSettingsStep") {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        type: "submit",
        onClick: onNext
      }, t("common:next")), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onBack,
        className: "pf-m-disabled"
      }, t("common:back")), /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        onClick: onClose
      }, t("common:cancel")));
    } // Other required step buttons
    else if (activeStep.id === "ldapConnectionSettingsStep" || activeStep.id === "ldapSearchingSettingsStep") {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          type: "submit",
          onClick: onNext
        }, t("common:next")), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: onBack
        }, t("common:back")), /*#__PURE__*/React.createElement(Button, {
          variant: "link",
          onClick: onClose
        }, t("common:cancel")));
      } // Last step buttons
      else if (activeStep.id === "ldapAdvancedSettingsStep") {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            onClick: () => {} //TODO: close the wizard and finish

          }, t("common:finish")), /*#__PURE__*/React.createElement(Button, {
            variant: "secondary",
            onClick: onBack
          }, t("common:back")), /*#__PURE__*/React.createElement(Button, {
            variant: "link",
            onClick: onClose
          }, t("common:cancel")));
        } // All the other steps buttons


    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: onNext
    }, "Next"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onBack
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => {} //TODO: validate last step and finish

    }, t("common:skipCustomizationAndFinish")), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: onClose
    }, t("common:cancel")));
  }));
  return /*#__PURE__*/React.createElement(Wizard // Because this is an inline wizard, this title and description should be put into the page. Specifying them here causes the wizard component to make a header that would be used on a modal.
  // title={t("addLdapWizardTitle")}
  // description={helpText("addLdapWizardDescription")}
  , {
    height: "100%",
    steps: steps,
    footer: footer
  });
};