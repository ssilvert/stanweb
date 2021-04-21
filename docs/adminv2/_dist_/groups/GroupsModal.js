import React from "../../web_modules/react.js";
import { AlertVariant, Button, Form, FormGroup, Modal, ModalVariant, TextInput, ValidatedOptions } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useForm } from "../../web_modules/react-hook-form.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
export const GroupsModal = ({
  id,
  rename,
  handleModalToggle,
  refresh
}) => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    register,
    errors,
    handleSubmit
  } = useForm({
    defaultValues: {
      name: rename
    }
  });

  const submitForm = async group => {
    try {
      if (!id) {
        await adminClient.groups.create(group);
      } else if (rename) {
        await adminClient.groups.update({
          id
        }, group);
      } else {
        await adminClient.groups.setOrCreateChild({
          id
        }, group);
      }

      refresh(rename ? group : undefined);
      handleModalToggle();
      addAlert(t(rename ? "groupUpdated" : "groupCreated"), AlertVariant.success);
    } catch (error) {
      addAlert(t("couldNotCreateGroup", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.small,
    title: t(rename ? "renameAGroup" : "createAGroup"),
    isOpen: true,
    onClose: handleModalToggle,
    actions: [/*#__PURE__*/React.createElement(Button, {
      "data-testid": `${rename ? "rename" : "create"}Group`,
      key: "confirm",
      variant: "primary",
      type: "submit",
      form: "group-form"
    }, t(rename ? "rename" : "create"))]
  }, /*#__PURE__*/React.createElement(Form, {
    id: "group-form",
    isHorizontal: true,
    onSubmit: handleSubmit(submitForm)
  }, /*#__PURE__*/React.createElement(FormGroup, {
    name: "create-modal-group",
    label: t("common:name"),
    fieldId: "group-id",
    helperTextInvalid: t("common:required"),
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default,
    isRequired: true
  }, /*#__PURE__*/React.createElement(TextInput, {
    "data-testid": "groupNameInput",
    ref: register({
      required: true
    }),
    autoFocus: true,
    type: "text",
    id: "create-group-name",
    name: "name",
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default
  }))));
};