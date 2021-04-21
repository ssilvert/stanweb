import React, { useEffect, useState } from "../../../web_modules/react.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import _ from "../../../web_modules/lodash.js";
import { FormGroup, Select, SelectOption, SelectVariant } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { asyncStateFetch, useAdminClient } from "../../context/auth/AdminClient.js";
import { SaveReset } from "./SaveReset.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
export const AuthenticationOverrides = ({
  protocol,
  control,
  save,
  reset
}) => {
  const adminClient = useAdminClient();
  const {
    t
  } = useTranslation("clients");
  const [flows, setFlows] = useState([]);
  const handleError = useErrorHandler();
  const [browserFlowOpen, setBrowserFlowOpen] = useState(false);
  const [directGrantOpen, setDirectGrantOpen] = useState(false);
  useEffect(() => asyncStateFetch(() => adminClient.authenticationManagement.getFlows(), flows => {
    let filteredFlows = [...flows.filter(flow => flow.providerId !== "client-flow")];
    filteredFlows = _.sortBy(filteredFlows, [f => f.alias]);
    setFlows([/*#__PURE__*/React.createElement(SelectOption, {
      key: "empty",
      value: ""
    }, t("common:choose")), ...filteredFlows.map(flow => /*#__PURE__*/React.createElement(SelectOption, {
      key: flow.id,
      value: flow.id
    }, flow.alias))]);
  }, handleError), []);
  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-clients",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("browserFlow"),
    fieldId: "browserFlow",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:browserFlow",
      forLabel: t("browserFlow"),
      forID: "browserFlow"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "authenticationFlowBindingOverrides.browser",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "browserFlow",
      variant: SelectVariant.single,
      onToggle: () => setBrowserFlowOpen(!browserFlowOpen),
      isOpen: browserFlowOpen,
      onSelect: (_, value) => {
        onChange(value);
        setBrowserFlowOpen(false);
      },
      selections: [value]
    }, flows)
  })), protocol === "openid-connect" && /*#__PURE__*/React.createElement(FormGroup, {
    label: t("directGrant"),
    fieldId: "directGrant",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:directGrant",
      forLabel: t("directGrant"),
      forID: "directGrant"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "authenticationFlowBindingOverrides.direct_grant",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "directGrant",
      variant: SelectVariant.single,
      onToggle: () => setDirectGrantOpen(!directGrantOpen),
      isOpen: directGrantOpen,
      onSelect: (_, value) => {
        onChange(value);
        setDirectGrantOpen(false);
      },
      selections: [value]
    }, flows)
  })), /*#__PURE__*/React.createElement(SaveReset, {
    name: "authenticationOverrides",
    save: save,
    reset: reset
  }));
};