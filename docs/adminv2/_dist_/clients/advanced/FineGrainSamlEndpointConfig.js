import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { ActionGroup, Button, FormGroup, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
export const FineGrainSamlEndpointConfig = ({
  control: {
    register
  },
  save,
  reset
}) => {
  const {
    t
  } = useTranslation("clients");
  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("assertionConsumerServicePostBindingURL"),
    fieldId: "assertionConsumerServicePostBindingURL",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:assertionConsumerServicePostBindingURL",
      forLabel: t("assertionConsumerServicePostBindingURL"),
      forID: "assertionConsumerServicePostBindingURL"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "assertionConsumerServicePostBindingURL",
    name: "attributes.saml_assertion_consumer_url_post"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("assertionConsumerServiceRedirectBindingURL"),
    fieldId: "assertionConsumerServiceRedirectBindingURL",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:assertionConsumerServiceRedirectBindingURL",
      forLabel: t("assertionConsumerServiceRedirectBindingURL"),
      forID: "assertionConsumerServiceRedirectBindingURL"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "assertionConsumerServiceRedirectBindingURL",
    name: "attributes.saml_assertion_consumer_url_redirect"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("logoutServicePostBindingURL"),
    fieldId: "logoutServicePostBindingURL",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:logoutServicePostBindingURL",
      forLabel: t("logoutServicePostBindingURL"),
      forID: "logoutServicePostBindingURL"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "logoutServicePostBindingURL",
    name: "attributes.saml_single_logout_service_url_post"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("logoutServiceRedirectBindingURL"),
    fieldId: "logoutServiceRedirectBindingURL",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:logoutServiceRedirectBindingURL",
      forLabel: t("logoutServiceRedirectBindingURL"),
      forID: "logoutServiceRedirectBindingURL"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "logoutServiceRedirectBindingURL",
    name: "attributes.saml_single_logout_service_url_redirect"
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: save
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: reset
  }, t("common:revert"))));
};