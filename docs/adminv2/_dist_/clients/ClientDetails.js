import React, { useEffect, useState } from "../../web_modules/react.js";
import { Alert, AlertVariant, ButtonVariant, Divider, DropdownItem, PageSection, Spinner, Tab, Tabs, TabTitleText } from "../../web_modules/@patternfly/react-core.js";
import { useParams } from "../../web_modules/react-router-dom.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Controller, FormProvider, useForm } from "../../web_modules/react-hook-form.js";
import _ from "../../web_modules/lodash.js";
import { ClientSettings } from "./ClientSettings.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { ConfirmDialogModal, useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { DownloadDialog } from "../components/download-dialog/DownloadDialog.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useAdminClient, asyncStateFetch } from "../context/auth/AdminClient.js";
import { Credentials } from "./credentials/Credentials.js";
import { convertFormValuesToObject, convertToFormValues, exportClient } from "../util.js";
import { convertToMultiline, toValue } from "../components/multi-line-input/MultiLineInput.js";
import { ClientScopes } from "./scopes/ClientScopes.js";
import { EvaluateScopes } from "./scopes/EvaluateScopes.js";
import { RolesList } from "../realm-roles/RolesList.js";
import { ServiceAccount } from "./service-account/ServiceAccount.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
import { AdvancedTab } from "./AdvancedTab.js";

const ClientDetailHeader = ({
  onChange,
  value,
  save,
  client,
  toggleDownloadDialog,
  toggleDeleteDialog
}) => {
  const {
    t
  } = useTranslation("clients");
  const [toggleDisableDialog, DisableConfirm] = useConfirmDialog({
    titleKey: "clients:disableConfirmTitle",
    messageKey: "clients:disableConfirm",
    continueButtonLabel: "common:disable",
    onConfirm: () => {
      onChange(!value);
      save();
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisableConfirm, null), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: client ? client.clientId : "",
    subKey: "clients:clientsExplain",
    badge: client.protocol,
    divider: false,
    dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "download",
      onClick: () => toggleDownloadDialog()
    }, t("downloadAdapterConfig")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "export",
      onClick: () => exportClient(client)
    }, t("common:export")), /*#__PURE__*/React.createElement(Divider, {
      key: "divider"
    }), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete",
      onClick: () => toggleDeleteDialog()
    }, t("common:delete"))],
    isEnabled: value,
    onToggle: value => {
      if (!value) {
        toggleDisableDialog();
      } else {
        onChange(value);
        save();
      }
    }
  }));
};

export const ClientDetails = () => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const {
    addAlert
  } = useAlerts();
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);

  const toggleDownloadDialog = () => setDownloadDialogOpen(!downloadDialogOpen);

  const [changeAuthenticatorOpen, setChangeAuthenticatorOpen] = useState(false);

  const toggleChangeAuthenticator = () => setChangeAuthenticatorOpen(!changeAuthenticatorOpen);

  const [activeTab2, setActiveTab2] = useState(30);
  const form = useForm();
  const {
    clientId
  } = useParams();
  const [client, setClient] = useState();

  const loader = async () => {
    const roles = await adminClient.clients.listRoles({
      id: clientId
    });
    return _.sortBy(roles, role => role.name?.toUpperCase());
  };

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "clients:clientDeleteConfirmTitle",
    messageKey: "clients:clientDeleteConfirm",
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.clients.del({
          id: clientId
        });
        addAlert(t("clientDeletedSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(`${t("clientDeleteError")} ${error}`, AlertVariant.danger);
      }
    }
  });

  const setupForm = client => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      redirectUris,
      webOrigins,
      ...formValues
    } = client;
    form.reset(formValues);
    Object.entries(client).map(entry => {
      if (entry[0] === "redirectUris" || entry[0] === "webOrigins") {
        form.setValue(entry[0], convertToMultiline(entry[1]));
      } else if (entry[0] === "attributes") {
        convertToFormValues(entry[1], "attributes", form.setValue);
      } else {
        form.setValue(entry[0], entry[1]);
      }
    });
  };

  useEffect(() => {
    return asyncStateFetch(() => adminClient.clients.findOne({
      id: clientId
    }), fetchedClient => {
      setClient(fetchedClient);
      setupForm(fetchedClient);
    }, handleError);
  }, [clientId]);

  const save = async ({
    confirmed = false,
    messageKey = "clientSaveSuccess"
  } = {
    confirmed: false,
    messageKey: "clientSaveSuccess"
  }) => {
    if (await form.trigger()) {
      if (client?.publicClient && client?.clientAuthenticatorType !== form.getValues("clientAuthenticatorType") && !confirmed) {
        toggleChangeAuthenticator();
        return;
      }

      const redirectUris = toValue(form.getValues()["redirectUris"]);
      const webOrigins = toValue(form.getValues()["webOrigins"]);
      const attributes = convertFormValuesToObject(form.getValues()["attributes"]);

      try {
        const newClient = { ...client,
          ...form.getValues(),
          redirectUris,
          webOrigins,
          attributes
        };
        await adminClient.clients.update({
          id: clientId
        }, newClient);
        setupForm(newClient);
        setClient(newClient);
        addAlert(t(messageKey), AlertVariant.success);
      } catch (error) {
        addAlert(`${t("clientSaveError")} '${error}'`, AlertVariant.danger);
      }
    }
  };

  if (!client) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pf-u-text-align-center"
    }, /*#__PURE__*/React.createElement(Spinner, null));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfirmDialogModal, {
    continueButtonLabel: "common:yes",
    titleKey: t("changeAuthenticatorConfirmTitle", {
      clientAuthenticatorType: form.getValues("clientAuthenticatorType")
    }),
    open: changeAuthenticatorOpen,
    toggleDialog: toggleChangeAuthenticator,
    onConfirm: () => save({
      confirmed: true
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, t("changeAuthenticatorConfirm", {
    clientAuthenticatorType: form.getValues("clientAuthenticatorType")
  }), form.getValues("clientAuthenticatorType") === "client-jwt" && /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    isInline: true,
    title: t("signedJWTConfirm")
  }))), /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(DownloadDialog, {
    id: client.id,
    protocol: client.protocol,
    open: downloadDialogOpen,
    toggleDialog: toggleDownloadDialog
  }), /*#__PURE__*/React.createElement(Controller, {
    name: "enabled",
    control: form.control,
    defaultValue: true,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(ClientDetailHeader, {
      value: value,
      onChange: onChange,
      client: client,
      save: save,
      toggleDeleteDialog: toggleDeleteDialog,
      toggleDownloadDialog: toggleDownloadDialog
    })
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    className: "pf-u-p-0"
  }, /*#__PURE__*/React.createElement(FormProvider, form, /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true,
    inset: {
      default: "insetNone",
      md: "insetSm",
      xl: "inset2xl",
      "2xl": "insetLg"
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    id: "settings",
    eventKey: "settings",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("common:settings"))
  }, /*#__PURE__*/React.createElement(ClientSettings, {
    save: () => save(),
    reset: () => setupForm(client)
  })), client.publicClient && /*#__PURE__*/React.createElement(Tab, {
    id: "credentials",
    eventKey: "credentials",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("credentials"))
  }, /*#__PURE__*/React.createElement(Credentials, {
    clientId: clientId,
    save: () => save()
  })), /*#__PURE__*/React.createElement(Tab, {
    id: "roles",
    eventKey: "roles",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("roles"))
  }, /*#__PURE__*/React.createElement(RolesList, {
    loader: loader,
    paginated: false,
    messageBundle: "clients"
  })), /*#__PURE__*/React.createElement(Tab, {
    id: "clientScopes",
    eventKey: "clientScopes",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("clientScopes"))
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeKey: activeTab2,
    isSecondary: true,
    onSelect: (_, key) => setActiveTab2(key)
  }, /*#__PURE__*/React.createElement(Tab, {
    id: "setup",
    eventKey: 30,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("setup"))
  }, /*#__PURE__*/React.createElement(ClientScopes, {
    clientId: clientId,
    protocol: client.protocol
  })), /*#__PURE__*/React.createElement(Tab, {
    id: "evaluate",
    eventKey: 31,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("evaluate"))
  }, /*#__PURE__*/React.createElement(EvaluateScopes, {
    clientId: clientId,
    protocol: client.protocol
  })))), client.serviceAccountsEnabled && /*#__PURE__*/React.createElement(Tab, {
    id: "serviceAccount",
    eventKey: "serviceAccount",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("serviceAccount"))
  }, /*#__PURE__*/React.createElement(ServiceAccount, {
    clientId: clientId
  })), /*#__PURE__*/React.createElement(Tab, {
    id: "advanced",
    eventKey: "advanced",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("advanced"))
  }, /*#__PURE__*/React.createElement(AdvancedTab, {
    save: save,
    client: client
  }))))));
};