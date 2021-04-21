import React from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Link, useHistory, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { AlertVariant, Button, PageSection } from "../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
export const ClientScopesSection = () => {
  const {
    t
  } = useTranslation("client-scopes");
  const history = useHistory();
  const {
    url
  } = useRouteMatch();
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();

  const loader = async () => await adminClient.clientScopes.find();

  const ClientScopeDetailLink = clientScope => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    key: clientScope.id,
    to: `${url}/${clientScope.id}/settings`
  }, clientScope.name));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "clientScopes",
    subKey: "client-scopes:clientScopeExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    loader: loader,
    ariaLabelKey: "client-scopes:clientScopeList",
    searchPlaceholderKey: "client-scopes:searchFor",
    toolbarItem: /*#__PURE__*/React.createElement(Button, {
      onClick: () => history.push(`${url}/new`)
    }, t("createClientScope")),
    actions: [{
      title: t("common:export"),
      onRowClick: () => {}
    }, {
      title: t("common:delete"),
      onRowClick: async clientScope => {
        try {
          await adminClient.clientScopes.del({
            id: clientScope.id
          });
          addAlert(t("deletedSuccess"), AlertVariant.success);
          return true;
        } catch (error) {
          addAlert(t("deleteError", {
            error: error.response?.data?.errorMessage || error
          }), AlertVariant.danger);
          return false;
        }
      }
    }],
    columns: [{
      name: "name",
      cellRenderer: ClientScopeDetailLink
    }, {
      name: "description"
    }, {
      name: "protocol",
      displayKey: "client-scopes:protocol"
    }]
  })));
};