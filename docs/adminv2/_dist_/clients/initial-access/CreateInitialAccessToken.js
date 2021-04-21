import React, { useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useForm } from "../../../web_modules/react-hook-form.js";
import { ActionGroup, AlertVariant, Button, FormGroup, NumberInput, PageSection } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { TimeSelector } from "../../components/time-selector/TimeSelector.js";
import { useHistory } from "../../../web_modules/react-router-dom.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { AccessTokenDialog } from "./AccessTokenDialog.js";
export const CreateInitialAccessToken = () => {
  const {
    t
  } = useTranslation("clients");
  const {
    handleSubmit,
    control
  } = useForm();
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const {
    addAlert
  } = useAlerts();
  const history = useHistory();
  const [token, setToken] = useState("");

  const save = async clientToken => {
    try {
      const access = await adminClient.realms.createClientsInitialAccess({
        realm
      }, clientToken);
      setToken(access.token);
    } catch (error) {
      addAlert(t("tokenSaveError", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, token && /*#__PURE__*/React.createElement(AccessTokenDialog, {
    token: token,
    toggleDialog: () => {
      setToken("");
      addAlert(t("tokenSaveSuccess"), AlertVariant.success);
      history.push(`/${realm}/clients/initialAccessToken`);
    }
  }), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "clients:createToken",
    subKey: "clients-help:createToken"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "create-client",
    onSubmit: handleSubmit(save)
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("expiration"),
    fieldId: "expiration",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:expiration",
      forLabel: t("expiration"),
      forID: "expiration"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "expiration",
    defaultValue: 86400,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(TimeSelector, {
      "data-testid": "expiration",
      value: value,
      onChange: onChange,
      units: ["days", "hours", "minutes", "seconds"]
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("count"),
    fieldId: "count",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:count",
      forLabel: t("count"),
      forID: "count"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "count",
    defaultValue: 1,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(NumberInput, {
      "data-testid": "count",
      inputName: "count",
      inputAriaLabel: t("count"),
      min: 1,
      value: value,
      onPlus: () => onChange(value + 1),
      onMinus: () => onChange(value - 1),
      onChange: event => onChange(Number(event.target.value))
    })
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    "data-testid": "save"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "cancel",
    variant: "link",
    onClick: () => history.push(`/${realm}/clients/initialAccessToken`)
  }, t("common:cancel"))))));
};