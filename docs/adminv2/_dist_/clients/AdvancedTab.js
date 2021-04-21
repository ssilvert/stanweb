import React, { useEffect, useState } from "../../web_modules/react.js";
import { Link } from "../../web_modules/react-router-dom.js";
import { Trans, useTranslation } from "../../web_modules/react-i18next.js";
import { Controller, useFormContext } from "../../web_modules/react-hook-form.js";
import moment from "../../web_modules/moment.js";
import { ActionGroup, AlertVariant, Button, ButtonVariant, ExpandableSection, FormGroup, Split, SplitItem, Text, TextInput, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import { convertToFormValues, toUpperCase } from "../util.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
import { ScrollForm } from "../components/scroll-form/ScrollForm.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { FineGrainOpenIdConnect } from "./advanced/FineGrainOpenIdConnect.js";
import { OpenIdConnectCompatibilityModes } from "./advanced/OpenIdConnectCompatibilityModes.js";
import { AdvancedSettings } from "./advanced/AdvancedSettings.js";
import { TimeSelector } from "../components/time-selector/TimeSelector.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { AddHostDialog } from "./advanced/AddHostDialog.js";
import { FineGrainSamlEndpointConfig } from "./advanced/FineGrainSamlEndpointConfig.js";
import { AuthenticationOverrides } from "./advanced/AuthenticationOverrides.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
export const AdvancedTab = ({
  save,
  client: {
    id,
    registeredNodes,
    attributes,
    protocol,
    authenticationFlowBindingOverrides
  }
}) => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const {
    addAlert
  } = useAlerts();
  const revocationFieldName = "notBefore";
  const openIdConnect = "openid-connect";
  const {
    getValues,
    setValue,
    register,
    control,
    reset
  } = useFormContext();
  const [expanded, setExpanded] = useState(false);
  const [selectedNode, setSelectedNode] = useState("");
  const [addNodeOpen, setAddNodeOpen] = useState(false);
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const [nodes, setNodes] = useState(registeredNodes || {});

  const setNotBefore = (time, messageKey) => {
    setValue(revocationFieldName, time);
    save({
      messageKey
    });
  };

  const parseResult = (result, prefixKey) => {
    const successCount = result.successRequests?.length || 0;
    const failedCount = result.failedRequests?.length || 0;

    if (successCount === 0 && failedCount === 0) {
      addAlert(t("noAdminUrlSet"), AlertVariant.warning);
    } else if (failedCount > 0) {
      addAlert(t(prefixKey + "Success", {
        successNodes: result.successRequests
      }), AlertVariant.success);
      addAlert(t(prefixKey + "Fail", {
        failedNodes: result.failedRequests
      }), AlertVariant.danger);
    } else {
      addAlert(t(prefixKey + "Success", {
        successNodes: result.successRequests
      }), AlertVariant.success);
    }
  };

  const resetFields = names => {
    const values = {};

    for (const name of names) {
      values[`attributes.${name}`] = attributes ? attributes[name.replace(/-/g, ".")] || "" : "";
    }

    reset(values);
  };

  const push = async () => {
    const result = await adminClient.clients.pushRevocation({
      id: id
    });
    parseResult(result, "notBeforePush");
  };

  const testCluster = async () => {
    const result = await adminClient.clients.testNodesAvailable({
      id: id
    });
    parseResult(result, "testCluster");
  };

  const [toggleDeleteNodeConfirm, DeleteNodeConfirm] = useConfirmDialog({
    titleKey: "clients:deleteNode",
    messageKey: t("deleteNodeBody", {
      node: selectedNode
    }),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.clients.deleteClusterNode({
          id: id,
          node: selectedNode
        });
        setNodes({ ...Object.keys(nodes).reduce((object, key) => {
            if (key !== selectedNode) {
              object[key] = nodes[key];
            }

            return object;
          }, {})
        });
        refresh();
        addAlert(t("deleteNodeSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("deleteNodeFail", {
          error: error.response?.data?.error || error
        }), AlertVariant.danger);
      }
    }
  });
  useEffect(() => {
    register(revocationFieldName);
  }, [register]);

  const formatDate = () => {
    const date = getValues(revocationFieldName);

    if (date > 0) {
      return moment(date * 1000).format("LLL");
    } else {
      return t("none");
    }
  };

  const sections = [t("revocation"), t("clustering"), protocol === openIdConnect ? t("fineGrainOpenIdConnectConfiguration") : t("fineGrainSamlEndpointConfig"), t("advancedSettings"), t("authenticationOverrides")];

  if (protocol === openIdConnect) {
    sections.splice(3, 0, t("openIdConnectCompatibilityModes"));
  }

  return /*#__PURE__*/React.createElement(ScrollForm, {
    sections: sections
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, /*#__PURE__*/React.createElement(Trans, {
    i18nKey: "clients-help:notBeforeIntro"
  }, "In order to successfully push setup url on", /*#__PURE__*/React.createElement(Link, {
    to: `/${realm}/clients/${id}/settings`
  }, t("settings")), "tab")), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-clients",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("notBefore"),
    fieldId: "kc-not-before",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:notBefore",
      forLabel: t("notBefore"),
      forID: "kc-not-before"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-not-before",
    name: "notBefore",
    isReadOnly: true,
    value: formatDate()
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    id: "setToNow",
    variant: "tertiary",
    onClick: () => {
      setNotBefore(moment.now() / 1000, "notBeforeSetToNow");
    }
  }, t("setToNow")), /*#__PURE__*/React.createElement(Button, {
    id: "clear",
    variant: "tertiary",
    onClick: () => {
      setNotBefore(0, "notBeforeNowClear");
    }
  }, t("clear")), /*#__PURE__*/React.createElement(Button, {
    id: "push",
    variant: "secondary",
    onClick: push
  }, t("push"))))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-clients",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("nodeReRegistrationTimeout"),
    fieldId: "kc-node-reregistration-timeout",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:nodeReRegistrationTimeout",
      forLabel: t("nodeReRegistrationTimeout"),
      forID: "nodeReRegistrationTimeout"
    })
  }, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Controller, {
    name: "nodeReRegistrationTimeout",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(TimeSelector, {
      value: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.secondary,
    onClick: () => save()
  }, t("common:save")))))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteNodeConfirm, null), /*#__PURE__*/React.createElement(AddHostDialog, {
    clientId: id,
    isOpen: addNodeOpen,
    onAdded: node => {
      nodes[node] = moment.now() / 1000;
      refresh();
    },
    onClose: () => setAddNodeOpen(false)
  }), /*#__PURE__*/React.createElement(ExpandableSection, {
    toggleText: t("registeredClusterNodes"),
    onToggle: () => setExpanded(!expanded),
    isExpanded: expanded
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    ariaLabelKey: "registeredClusterNodes",
    loader: () => Promise.resolve(Object.entries(nodes || {}).map(entry => {
      return {
        host: entry[0],
        registration: entry[1]
      };
    })),
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      id: "testClusterAvailability",
      onClick: testCluster,
      variant: ButtonVariant.secondary,
      isDisabled: Object.keys(nodes).length === 0
    }, t("testClusterAvailability"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      id: "registerNodeManually",
      onClick: () => setAddNodeOpen(true),
      variant: ButtonVariant.tertiary
    }, t("registerNodeManually")))),
    actions: [{
      title: t("common:delete"),
      onRowClick: node => {
        setSelectedNode(node.host);
        toggleDeleteNodeConfirm();
      }
    }],
    columns: [{
      name: "host",
      displayKey: "clients:nodeHost"
    }, {
      name: "registration",
      displayKey: "clients:lastRegistration",
      cellFormatters: [value => value ? moment(parseInt(value.toString()) * 1000).format("LLL") : ""]
    }]
  })))), /*#__PURE__*/React.createElement(React.Fragment, null, protocol === openIdConnect && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, t("clients-help:fineGrainOpenIdConnectConfiguration")), /*#__PURE__*/React.createElement(FineGrainOpenIdConnect, {
    control: control,
    save: () => save(),
    reset: () => convertToFormValues(attributes, "attributes", setValue)
  })), protocol !== openIdConnect && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, t("clients-help:fineGrainSamlEndpointConfig")), /*#__PURE__*/React.createElement(FineGrainSamlEndpointConfig, {
    control: control,
    save: () => save(),
    reset: () => convertToFormValues(attributes, "attributes", setValue)
  }))), protocol === openIdConnect && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, t("clients-help:openIdConnectCompatibilityModes")), /*#__PURE__*/React.createElement(OpenIdConnectCompatibilityModes, {
    control: control,
    save: () => save(),
    reset: () => resetFields(["exclude-session-state-from-auth-response"])
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, t("clients-help:advancedSettings" + toUpperCase(protocol))), /*#__PURE__*/React.createElement(AdvancedSettings, {
    protocol: protocol,
    control: control,
    save: () => save(),
    reset: () => {
      resetFields(["saml-assertion-lifespan", "access-token-lifespan", "tls-client-certificate-bound-access-tokens", "pkce-code-challenge-method"]);
    }
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-py-lg"
  }, t("clients-help:authenticationOverrides")), /*#__PURE__*/React.createElement(AuthenticationOverrides, {
    protocol: protocol,
    control: control,
    save: () => save(),
    reset: () => {
      setValue("authenticationFlowBindingOverrides.browser", authenticationFlowBindingOverrides?.browser);
      setValue("authenticationFlowBindingOverrides.direct_grant", authenticationFlowBindingOverrides?.direct_grant);
    }
  })));
};