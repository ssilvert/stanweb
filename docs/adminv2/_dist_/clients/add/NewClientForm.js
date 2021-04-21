import React, { useState } from "../../../web_modules/react.js";
import { useHistory } from "../../../web_modules/react-router-dom.js";
import { PageSection, Wizard, AlertVariant, WizardFooter, WizardContextConsumer, Button } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { FormProvider, useForm } from "../../../web_modules/react-hook-form.js";
import { GeneralSettings } from "./GeneralSettings.js";
import { CapabilityConfig } from "./CapabilityConfig.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
export const NewClientForm = () => {
  const {
    t
  } = useTranslation("clients");
  const {
    realm
  } = useRealm();
  const adminClient = useAdminClient();
  const history = useHistory();
  const [client, setClient] = useState({
    protocol: "",
    clientId: "",
    name: "",
    description: "",
    publicClient: false,
    authorizationServicesEnabled: false,
    serviceAccountsEnabled: false,
    implicitFlowEnabled: false,
    directAccessGrantsEnabled: true,
    standardFlowEnabled: true
  });
  const {
    addAlert
  } = useAlerts();
  const methods = useForm({
    defaultValues: client
  });

  const save = async () => {
    try {
      const newClient = await adminClient.clients.create({ ...client
      });
      addAlert(t("createSuccess"), AlertVariant.success);
      history.push(`/${realm}/clients/${newClient.id}/settings`);
    } catch (error) {
      addAlert(t("createError", {
        error
      }), AlertVariant.danger);
    }
  };

  const Footer = () => /*#__PURE__*/React.createElement(WizardFooter, null, /*#__PURE__*/React.createElement(WizardContextConsumer, null, ({
    activeStep,
    onNext,
    onBack,
    onClose
  }) => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      type: "submit",
      onClick: async () => {
        if (await methods.trigger()) {
          setClient({ ...client,
            ...methods.getValues()
          });
          onNext();
        }
      }
    }, activeStep.name === t("capabilityConfig") ? t("common:save") : t("common:next")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setClient({ ...client,
          ...methods.getValues()
        });
        methods.reset({ ...client,
          ...methods.getValues()
        });
        onBack();
      },
      isDisabled: activeStep.name === t("generalSettings")
    }, t("common:back")), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: onClose
    }, t("common:cancel")));
  }));

  const title = t("createClient");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "clients:createClient",
    subKey: "clients:clientsExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormProvider, methods, /*#__PURE__*/React.createElement(Wizard, {
    onClose: () => history.push(`/${realm}/clients`),
    navAriaLabel: `${title} steps`,
    mainAriaLabel: `${title} content`,
    steps: [{
      name: t("generalSettings"),
      component: /*#__PURE__*/React.createElement(GeneralSettings, null)
    }, {
      name: t("capabilityConfig"),
      component: /*#__PURE__*/React.createElement(CapabilityConfig, {
        protocol: client.protocol
      })
    }],
    footer: /*#__PURE__*/React.createElement(Footer, null),
    onSave: save
  }))));
};