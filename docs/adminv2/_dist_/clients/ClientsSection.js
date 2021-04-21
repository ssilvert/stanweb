import React, { useEffect, useState } from "../../web_modules/react.js";
import { Link, useHistory } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Badge, Button, ButtonVariant, PageSection, ToolbarItem, Tab, TabTitleText } from "../../web_modules/@patternfly/react-core.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { emptyFormatter, exportClient, getBaseUrl } from "../util.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { formattedLinkTableCell } from "../components/external-link/FormattedLink.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
import { InitialAccessTokenList } from "./initial-access/InitialAccessTokenList.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
export const ClientsSection = () => {
  const {
    t
  } = useTranslation("clients");
  const {
    addAlert
  } = useAlerts();
  const history = useHistory();
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const baseUrl = getBaseUrl(adminClient);
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const [selectedClient, setSelectedClient] = useState();

  const loader = async (first, max, search) => {
    const params = {
      first: first,
      max: max
    };

    if (search) {
      params.clientId = search;
      params.search = "true";
    }

    return await adminClient.clients.find({ ...params
    });
  };

  useEffect(refresh, [selectedClient]);
  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: t("clientDelete", {
      clientId: selectedClient?.clientId
    }),
    messageKey: "clients:clientDeleteConfirm",
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.clients.del({
          id: selectedClient.id
        });
        addAlert(t("clientDeletedSuccess"), AlertVariant.success);
        setSelectedClient(undefined);
      } catch (error) {
        addAlert(t("clientDeleteError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const ClientDetailLink = client => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    key: client.id,
    to: `/${realm}/clients/${client.id}/settings`
  }, client.clientId, !client.enabled && /*#__PURE__*/React.createElement(Badge, {
    key: `${client.id}-disabled`,
    isRead: true,
    className: "pf-u-ml-sm"
  }, "Disabled")));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "clients:clientList",
    subKey: "clients:clientsExplain",
    divider: false
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    className: "pf-u-p-0"
  }, /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true,
    inset: {
      default: "insetNone",
      md: "insetSm",
      xl: "inset2xl",
      "2xl": "insetLg"
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    "data-testid": "list",
    eventKey: "list",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("clientsList"))
  }, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "clients:clientList",
    searchPlaceholderKey: "clients:searchForClient",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => history.push(`/${realm}/clients/add-client`)
    }, t("createClient"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => history.push(`/${realm}/clients/import-client`),
      variant: "link"
    }, t("importClient")))),
    actions: [{
      title: t("common:export"),
      onRowClick: client => {
        exportClient(client);
      }
    }, {
      title: t("common:delete"),
      onRowClick: client => {
        setSelectedClient(client);
        toggleDeleteDialog();
      }
    }],
    columns: [{
      name: "clientId",
      displayKey: "clients:clientID",
      cellRenderer: ClientDetailLink
    }, {
      name: "protocol",
      displayKey: "common:type"
    }, {
      name: "description",
      displayKey: "common:description",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "baseUrl",
      displayKey: "clients:homeURL",
      cellFormatters: [formattedLinkTableCell(), emptyFormatter()],
      cellRenderer: client => {
        if (client.rootUrl) {
          if (!client.rootUrl.startsWith("http") || client.rootUrl.indexOf("$") !== -1) {
            client.rootUrl = client.rootUrl.replace("${authBaseUrl}", baseUrl).replace("${authAdminUrl}", baseUrl) + (client.baseUrl ? client.baseUrl.substr(1) : "");
          }
        }

        return client.rootUrl;
      }
    }]
  })), /*#__PURE__*/React.createElement(Tab, {
    "data-testid": "initialAccessToken",
    eventKey: "initialAccessToken",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("initialAccessToken"))
  }, /*#__PURE__*/React.createElement(InitialAccessTokenList, null)))));
};