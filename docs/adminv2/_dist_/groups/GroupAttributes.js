import React, { useEffect } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useFieldArray, useForm } from "../../web_modules/react-hook-form.js";
import { AlertVariant } from "../../web_modules/@patternfly/react-core.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { arrayToAttributes, AttributesForm, attributesToArray } from "../components/attribute-form/AttributeForm.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { getLastId } from "./groupIdUtils.js";
import { useSubGroups } from "./SubGroupsContext.js";
import { useLocation } from "../../web_modules/react-router-dom.js";
export const GroupAttributes = () => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const form = useForm({
    mode: "onChange"
  });
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control: form.control,
    name: "attributes"
  });
  const location = useLocation();
  const id = getLastId(location.pathname);
  const {
    currentGroup,
    subGroups,
    setSubGroups
  } = useSubGroups();

  const convertAttributes = attr => {
    const attributes = attributesToArray(attr || currentGroup().attributes);
    attributes.push({
      key: "",
      value: ""
    });
    return attributes;
  };

  useEffect(() => {
    form.setValue("attributes", convertAttributes());
  }, [subGroups]);

  const save = async attributeForm => {
    try {
      const group = currentGroup();
      const attributes = arrayToAttributes(attributeForm.attributes);
      await adminClient.groups.update({
        id: id
      }, { ...group,
        attributes
      });
      setSubGroups([...subGroups.slice(0, subGroups.length - 1), { ...group,
        attributes
      }]);
      form.setValue("attributes", convertAttributes(attributes));
      addAlert(t("groupUpdated"), AlertVariant.success);
    } catch (error) {
      addAlert(t("groupUpdateError", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(AttributesForm, {
    form: form,
    save: save,
    array: {
      fields,
      append,
      remove
    },
    reset: () => form.reset({
      attributes: convertAttributes()
    })
  });
};