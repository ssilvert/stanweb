import React, { useEffect, useState } from "../../../web_modules/react.js";
import { Controller, useFormContext, useWatch } from "../../../web_modules/react-hook-form.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { ActionGroup, AlertVariant, Button, Card, CardBody, ClipboardCopy, Divider, FormGroup, Select, SelectOption, SelectVariant, Split, SplitItem } from "../../../web_modules/@patternfly/react-core.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { useConfirmDialog } from "../../components/confirm-dialog/ConfirmDialog.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { ClientSecret } from "./ClientSecret.js";
import { SignedJWT } from "./SignedJWT.js";
import { X509 } from "./X509.js";
export const Credentials = ({
  clientId,
  save
}) => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const {
    addAlert
  } = useAlerts();
  const {
    control,
    formState: {
      isDirty
    }
  } = useFormContext();
  const clientAuthenticatorType = useWatch({
    control: control,
    name: "clientAuthenticatorType"
  });
  const [providers, setProviders] = useState([]);
  const [secret, setSecret] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [open, isOpen] = useState(false);
  useEffect(() => {
    return asyncStateFetch(async () => {
      const providers = await adminClient.authenticationManagement.getClientAuthenticatorProviders({
        id: clientId
      });
      const secret = await adminClient.clients.getClientSecret({
        id: clientId
      });
      return {
        providers,
        secret: secret.value
      };
    }, ({
      providers,
      secret
    }) => {
      setProviders(providers);
      setSecret(secret);
    }, handleError);
  }, []);

  async function regenerate(call, message) {
    try {
      const data = await call(clientId);
      addAlert(t(`${message}Success`), AlertVariant.success);
      return data;
    } catch (error) {
      addAlert(t(`${message}Error`, {
        error
      }), AlertVariant.danger);
    }
  }

  const regenerateClientSecret = async () => {
    const secret = await regenerate(clientId => adminClient.clients.generateNewClientSecret({
      id: clientId
    }), "clientSecret");
    setSecret(secret?.value || "");
  };

  const [toggleClientSecretConfirm, ClientSecretConfirm] = useConfirmDialog({
    titleKey: "clients:confirmClientSecretTitle",
    messageKey: "clients:confirmClientSecretBody",
    continueButtonLabel: "common:yes",
    cancelButtonLabel: "common:no",
    onConfirm: regenerateClientSecret
  });

  const regenerateAccessToken = async () => {
    const accessToken = await regenerate(clientId => adminClient.clients.generateRegistrationAccessToken({
      id: clientId
    }), "accessToken");
    setAccessToken(accessToken?.registrationAccessToken || "");
  };

  const [toggleAccessTokenConfirm, AccessTokenConfirm] = useConfirmDialog({
    titleKey: "clients:confirmAccessTokenTitle",
    messageKey: "clients:confirmAccessTokenBody",
    continueButtonLabel: "common:yes",
    cancelButtonLabel: "common:no",
    onConfirm: regenerateAccessToken
  });
  return /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    className: "pf-u-mt-md",
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(ClientSecretConfirm, null), /*#__PURE__*/React.createElement(AccessTokenConfirm, null), /*#__PURE__*/React.createElement(Card, {
    isFlat: true
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("clientAuthenticator"),
    fieldId: "kc-client-authenticator-type",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:client-authenticator-type",
      forLabel: t("clientAuthenticator"),
      forID: "kc-client-authenticator-type"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "clientAuthenticatorType",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-client-authenticator-type",
      required: true,
      onToggle: () => isOpen(!open),
      onSelect: (_, value) => {
        onChange(value);
        isOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("clientAuthenticator"),
      isOpen: open
    }, providers.map(option => /*#__PURE__*/React.createElement(SelectOption, {
      selected: option.id === value,
      key: option.id,
      value: option.id
    }, option.displayName)))
  })), clientAuthenticatorType === "client-jwt" && /*#__PURE__*/React.createElement(SignedJWT, null), clientAuthenticatorType === "client-x509" && /*#__PURE__*/React.createElement(X509, null), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => save(),
    isDisabled: !isDirty
  }, t("common:save")))), /*#__PURE__*/React.createElement(CardBody, null, (clientAuthenticatorType === "client-secret" || clientAuthenticatorType === "client-secret-jwt") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    className: "pf-u-mb-md"
  }), /*#__PURE__*/React.createElement(ClientSecret, {
    secret: secret,
    toggle: toggleClientSecretConfirm
  })))), /*#__PURE__*/React.createElement(Card, {
    isFlat: true
  }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("registrationAccessToken"),
    fieldId: "kc-access-token",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:registration-access-token",
      forLabel: t("registrationAccessToken"),
      forID: "kc-access-token"
    })
  }, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, /*#__PURE__*/React.createElement(ClipboardCopy, {
    id: "kc-access-token",
    isReadOnly: true
  }, accessToken)), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: toggleAccessTokenConfirm,
    isDisabled: isDirty
  }, t("regenerate"))))))));
};