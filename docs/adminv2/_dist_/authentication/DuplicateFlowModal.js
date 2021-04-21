import React, { useEffect } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useForm } from "../../web_modules/react-hook-form.js";
import { AlertVariant, Button, ButtonVariant, Form, FormGroup, Modal, ModalVariant, TextInput, ValidatedOptions } from "../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
export const DuplicateFlowModal = ({
  name,
  description,
  toggleDialog,
  onComplete
}) => {
  const {
    t
  } = useTranslation("authentication");
  const {
    register,
    errors,
    setValue,
    trigger,
    getValues
  } = useForm({
    shouldUnregister: false
  });
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  useEffect(() => {
    setValue("description", description);
    setValue("name", t("copyOf", {
      name
    }));
  }, [name, description, setValue]);

  const save = async () => {
    await trigger();
    const form = getValues();

    try {
      await adminClient.authenticationManagement.copyFlow({
        flow: name,
        newName: form.name
      });

      if (form.description !== description) {
        const newFlow = (await adminClient.authenticationManagement.getFlows()).find(flow => flow.alias === form.name);
        newFlow.description = form.description;
        await adminClient.authenticationManagement.updateFlow({
          flowId: newFlow.id
        }, newFlow);
      }

      addAlert(t("copyFlowSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(t("copyFlowError", {
        error
      }), AlertVariant.danger);
    }

    onComplete();
  };

  return /*#__PURE__*/React.createElement(Modal, {
    title: t("duplicateFlow"),
    isOpen: true,
    onClose: toggleDialog,
    variant: ModalVariant.small,
    actions: [/*#__PURE__*/React.createElement(Button, {
      id: "modal-confirm",
      key: "confirm",
      onClick: save
    }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
      id: "modal-cancel",
      key: "cancel",
      variant: ButtonVariant.secondary,
      onClick: () => {
        toggleDialog();
      }
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(Form, {
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:name"),
    fieldId: "kc-name",
    helperTextInvalid: t("common:required"),
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default,
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-name",
    name: "name",
    ref: register({
      required: true
    }),
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:description"),
    fieldId: "kc-description"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-description",
    name: "description",
    ref: register()
  }))));
};