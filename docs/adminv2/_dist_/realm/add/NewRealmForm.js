import React, { useContext } from "../../../web_modules/react.js";
import { useHistory } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { PageSection, FormGroup, TextInput, Switch, ActionGroup, Button, AlertVariant } from "../../../web_modules/@patternfly/react-core.js";
import { JsonFileUpload } from "../../components/json-file-upload/JsonFileUpload.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { useForm, Controller } from "../../../web_modules/react-hook-form.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { WhoAmIContext } from "../../context/whoami/WhoAmI.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
export const NewRealmForm = () => {
  const {
    t
  } = useTranslation("realm");
  const history = useHistory();
  const {
    refresh
  } = useContext(WhoAmIContext);
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState,
    errors
  } = useForm({
    mode: "onChange"
  });

  const handleFileChange = value => {
    const defaultRealm = {
      id: "",
      realm: "",
      enabled: true
    };
    let obj = defaultRealm;

    if (value) {
      try {
        obj = JSON.parse(value);
      } catch (error) {
        console.warn("Invalid json, ignoring value using default");
      }
    }

    Object.keys(obj).forEach(k => {
      setValue(k, obj[k]);
    });
  };

  const save = async realm => {
    try {
      await adminClient.realms.create(realm);
      addAlert(t("saveRealmSuccess"), AlertVariant.success);
      refresh(); //force token update

      await adminClient.keycloak?.updateToken(Number.MAX_VALUE);
      history.push(`/${realm.realm}/`);
    } catch (error) {
      addAlert(t("saveRealmError", {
        error: error.response?.data?.errorMessage || error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "realm:createRealm",
    subKey: "realm:realmExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-realm"
  }, /*#__PURE__*/React.createElement(JsonFileUpload, {
    id: "kc-realm-filename",
    onChange: handleFileChange
  }), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("realmName"),
    isRequired: true,
    fieldId: "kc-realm-name",
    validated: errors.realm ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    isRequired: true,
    type: "text",
    id: "kc-realm-name",
    name: "realm",
    validated: errors.realm ? "error" : "default",
    ref: register({
      required: true
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("enabled"),
    fieldId: "kc-realm-enabled-switch"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "enabled",
    defaultValue: true,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-realm-enabled-switch",
      name: "enabled",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    isDisabled: !formState.isValid
  }, t("common:create")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.goBack()
  }, t("common:cancel"))))));
};