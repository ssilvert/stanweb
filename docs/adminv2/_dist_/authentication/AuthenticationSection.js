import React, { useState } from "../../web_modules/react.js";
import { Link, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { Trans, useTranslation } from "../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant, Label, PageSection, Popover, Tab, TabTitleText } from "../../web_modules/@patternfly/react-core.js";
import { CheckCircleIcon } from "../../web_modules/@patternfly/react-icons.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { toUpperCase } from "../util.js";
import { DuplicateFlowModal } from "./DuplicateFlowModal.js";
import "./authentication-section.css.proxy.js";
const realmFlows = ["browserFlow", "registrationFlow", "directGrantFlow", "resetCredentialsFlow", "clientAuthenticationFlow", "dockerAuthenticationFlow"];
export const AuthenticationSection = () => {
  const {
    t
  } = useTranslation("authentication");
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const {
    addAlert
  } = useAlerts();
  const {
    url
  } = useRouteMatch();
  const [selectedFlow, setSelectedFlow] = useState();
  const [open, setOpen] = useState(false);

  const loader = async () => {
    const clients = await adminClient.clients.find();
    const idps = await adminClient.identityProviders.find();
    const realmRep = await adminClient.realms.findOne({
      realm
    });
    const defaultFlows = Object.entries(realmRep).filter(entry => realmFlows.includes(entry[0])).map(entry => entry[1]);
    const flows = await adminClient.authenticationManagement.getFlows();

    for (const flow of flows) {
      flow.usedBy = {
        values: []
      };
      const client = clients.find(client => client.authenticationFlowBindingOverrides && (client.authenticationFlowBindingOverrides["direct_grant"] === flow.id || client.authenticationFlowBindingOverrides["browser"] === flow.id));

      if (client) {
        flow.usedBy.type = "client";
        flow.usedBy.values.push(client.clientId);
      }

      const idp = idps.find(idp => idp.firstBrokerLoginFlowAlias === flow.alias || idp.postBrokerLoginFlowAlias === flow.alias);

      if (idp) {
        flow.usedBy.type = "idp";
        flow.usedBy.values.push(idp.alias);
      }

      const isDefault = defaultFlows.includes(flow.alias);

      if (isDefault) {
        flow.usedBy.type = "default";
      }
    }

    return flows;
  };

  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "authentication:deleteConfirmFlow",
    children: /*#__PURE__*/React.createElement(Trans, {
      i18nKey: "authentication:deleteConfirmFlowMessage"
    }, " ", /*#__PURE__*/React.createElement("strong", null, {
      flow: selectedFlow ? selectedFlow.alias : ""
    }), "."),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.authenticationManagement.deleteFlow({
          flowId: selectedFlow.id
        });
        refresh();
        addAlert(t("deleteFlowSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("deleteFlowError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const UsedBy = ({
    id,
    usedBy: {
      type,
      values
    }
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, (type === "idp" || type === "client") && /*#__PURE__*/React.createElement(Popover, {
    key: id,
    "aria-label": "Basic popover",
    bodyContent: /*#__PURE__*/React.createElement("div", {
      key: `usedBy-${id}-${values}`
    }, t("appliedBy" + (type === "client" ? "Clients" : "Providers")), " ", values.map((used, index) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, used), index < values.length - 1 ? ", " : "")))
  }, /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.link,
    key: `button-${id}`
  }, /*#__PURE__*/React.createElement(CheckCircleIcon, {
    className: "keycloak_authentication-section__usedby",
    key: `icon-${id}`
  }), " ", t("specific" + (type === "client" ? "Clients" : "Providers")))), type === "default" && /*#__PURE__*/React.createElement(Button, {
    key: id,
    variant: ButtonVariant.link,
    isDisabled: true
  }, /*#__PURE__*/React.createElement(CheckCircleIcon, {
    className: "keycloak_authentication-section__usedby",
    key: `icon-${id}`
  }), " ", t("default")), !type && /*#__PURE__*/React.createElement(Button, {
    key: id,
    variant: ButtonVariant.link,
    isDisabled: true
  }, t("notInUse")));

  const AliasRenderer = ({
    id,
    alias,
    builtIn
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    to: `${url}/${id}`,
    key: `link-{id}`
  }, toUpperCase(alias)), " ", builtIn && /*#__PURE__*/React.createElement(Label, {
    key: `label-${id}`
  }, t("buildIn")));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), open && /*#__PURE__*/React.createElement(DuplicateFlowModal, {
    name: selectedFlow ? selectedFlow.alias : "",
    description: selectedFlow?.description,
    toggleDialog: () => setOpen(!open),
    onComplete: () => {
      refresh();
      setOpen(false);
    }
  }), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "authentication:title",
    subKey: ""
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "flows",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("flows"))
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    ariaLabelKey: "authentication:title",
    searchPlaceholderKey: "authentication:searchForEvent",
    actionResolver: ({
      data
    }) => {
      const defaultActions = [{
        title: t("duplicate"),
        onClick: () => {
          setOpen(true);
          setSelectedFlow(data);
        }
      }]; // remove delete when it's in use or default flow

      if (data.builtIn || data.usedBy.values.length > 0) {
        return defaultActions;
      } else {
        return [{
          title: t("common:delete"),
          onClick: () => {
            setSelectedFlow(data);
            toggleDeleteDialog();
          }
        }, ...defaultActions];
      }
    },
    columns: [{
      name: "alias",
      displayKey: "authentication:flowName",
      cellRenderer: AliasRenderer
    }, {
      name: "usedBy",
      displayKey: "authentication:usedBy",
      cellRenderer: UsedBy
    }, {
      name: "description",
      displayKey: "common:description"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("emptyEvents"),
      instructions: t("emptyEventsInstructions")
    })
  })))));
};