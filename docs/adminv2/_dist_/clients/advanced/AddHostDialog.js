import React from "../../../web_modules/react.js";
import { useForm } from "../../../web_modules/react-hook-form.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { AlertVariant, Button, ButtonVariant, Form, FormGroup, Modal, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { useAlerts } from "../../components/alert/Alerts.js";
export const AddHostDialog = ({
  clientId: id,
  isOpen,
  onAdded,
  onClose
}) => {
  const {
    t
  } = useTranslation("clients");
  const {
    register,
    getValues
  } = useForm();
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  return /*#__PURE__*/React.createElement(Modal, {
    title: t("addNode"),
    isOpen: isOpen,
    onClose: onClose,
    variant: "small",
    actions: [/*#__PURE__*/React.createElement(Button, {
      id: "add-node-confirm",
      key: "confirm",
      onClick: async () => {
        try {
          const node = getValues("node");
          await adminClient.clients.addClusterNode({
            id,
            node
          });
          onAdded(node);
          addAlert(t("addedNodeSuccess"), AlertVariant.success);
        } catch (error) {
          addAlert(t("addedNodeFail", {
            error: error.response?.data?.error || error
          }), AlertVariant.danger);
        }

        onClose();
      }
    }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
      id: "add-node-cancel",
      key: "cancel",
      variant: ButtonVariant.secondary,
      onClick: () => onClose()
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(Form, {
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("nodeHost"),
    fieldId: "nodeHost"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "nodeHost",
    ref: register,
    name: "node"
  }))));
};