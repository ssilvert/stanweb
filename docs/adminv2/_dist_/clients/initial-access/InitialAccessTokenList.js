import React, { useState } from "../../../web_modules/react.js";
import { useHistory, useRouteMatch } from "../../../web_modules/react-router-dom.js";
import moment from "../../../web_modules/moment.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant } from "../../../web_modules/@patternfly/react-core.js";
import { wrappable } from "../../../web_modules/@patternfly/react-table.js";
import { KeycloakDataTable } from "../../components/table-toolbar/KeycloakDataTable.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { ListEmptyState } from "../../components/list-empty-state/ListEmptyState.js";
import { useConfirmDialog } from "../../components/confirm-dialog/ConfirmDialog.js";
import { useAlerts } from "../../components/alert/Alerts.js";
export const InitialAccessTokenList = () => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    realm
  } = useRealm();
  const history = useHistory();
  const {
    url
  } = useRouteMatch();
  const [token, setToken] = useState();

  const loader = async () => await adminClient.realms.getClientsInitialAccess({
    realm
  });

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "clients:tokenDeleteConfirmTitle",
    messageKey: t("tokenDeleteConfirm", token),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.realms.delClientsInitialAccess({
          realm,
          id: token.id
        });
        addAlert(t("tokenDeleteSuccess"), AlertVariant.success);
        setToken(undefined);
      } catch (error) {
        addAlert(t("tokenDeleteError", {
          error
        }), AlertVariant.danger);
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: token?.id,
    ariaLabelKey: "clients:initialAccessToken",
    searchPlaceholderKey: "clients:searchInitialAccessToken",
    loader: loader,
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => history.push(`${url}/create`)
    }, t("common:create"))),
    actions: [{
      title: t("common:delete"),
      onRowClick: token => {
        setToken(token);
        toggleDeleteDialog();
      }
    }],
    columns: [{
      name: "id",
      displayKey: "clients:id"
    }, {
      name: "timestamp",
      displayKey: "clients:timestamp",
      cellRenderer: row => moment(row.timestamp * 1000).format("LLL")
    }, {
      name: "expiration",
      displayKey: "clients:expires",
      cellRenderer: row => moment(row.timestamp * 1000 + row.expiration * 1000).format("LLL")
    }, {
      name: "count",
      displayKey: "clients:count"
    }, {
      name: "remainingCount",
      displayKey: "clients:remainingCount",
      transforms: [wrappable]
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("noTokens"),
      instructions: t("noTokensInstructions"),
      primaryActionText: t("common:create"),
      onPrimaryAction: () => history.push(`${url}/create`)
    })
  }));
};