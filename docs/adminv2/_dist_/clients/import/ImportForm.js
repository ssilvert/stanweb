import React from "../../../web_modules/react.js";
import { useHistory } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { PageSection, FormGroup, TextInput, ActionGroup, Button, AlertVariant } from "../../../web_modules/@patternfly/react-core.js";
import { FormProvider, useForm } from "../../../web_modules/react-hook-form.js";
import { ClientDescription } from "../ClientDescription.js";
import { JsonFileUpload } from "../../components/json-file-upload/JsonFileUpload.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { convertFormValuesToObject, convertToFormValues } from "../../util.js";
import { CapabilityConfig } from "../add/CapabilityConfig.js";
export const ImportForm = () => {
  const {
    t
  } = useTranslation("clients");
  const history = useHistory();
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const form = useForm();
  const {
    register,
    handleSubmit,
    setValue
  } = form;
  const {
    addAlert
  } = useAlerts();

  const handleFileChange = value => {
    const defaultClient = {
      protocol: "",
      clientId: "",
      name: "",
      description: ""
    };
    const obj = value ? JSON.parse(value) : defaultClient;
    Object.keys(obj).forEach(k => {
      if (k === "attributes") {
        convertToFormValues(obj[k], "attributes", form.setValue);
      } else {
        setValue(k, obj[k]);
      }
    });
  };

  const save = async client => {
    try {
      const newClient = await adminClient.clients.create({ ...client,
        attributes: convertFormValuesToObject(client.attributes || {})
      });
      addAlert(t("clientImportSuccess"), AlertVariant.success);
      history.push(`/${realm}/clients/${newClient.id}`);
    } catch (error) {
      addAlert(t("clientImportError", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "clients:importClient",
    subKey: "clients:clientsExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(FormProvider, form, /*#__PURE__*/React.createElement(JsonFileUpload, {
    id: "realm-file",
    onChange: handleFileChange
  }), /*#__PURE__*/React.createElement(ClientDescription, null), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:type"),
    fieldId: "kc-type"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-type",
    name: "protocol",
    isReadOnly: true,
    ref: register()
  })), /*#__PURE__*/React.createElement(CapabilityConfig, {
    unWrap: true
  }), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.push(`/${realm}/clients`)
  }, t("common:cancel")))))));
};