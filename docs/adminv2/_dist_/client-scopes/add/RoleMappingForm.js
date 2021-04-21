import React, { useContext, useEffect, useState } from "../../../web_modules/react.js";
import { useHistory, useParams } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useForm } from "../../../web_modules/react-hook-form.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { FormGroup, PageSection, Select, SelectVariant, TextInput, SelectOption, ActionGroup, Button, SelectGroup, Split, SplitItem, Divider, ValidatedOptions } from "../../../web_modules/@patternfly/react-core.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { RealmContext } from "../../context/realm-context/RealmContext.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
export const RoleMappingForm = () => {
  const {
    realm
  } = useContext(RealmContext);
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const history = useHistory();
  const {
    addAlert
  } = useAlerts();
  const {
    t
  } = useTranslation("client-scopes");
  const {
    register,
    handleSubmit,
    control,
    errors
  } = useForm();
  const {
    id
  } = useParams();
  const [roleOpen, setRoleOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState();
  const [clientRoles, setClientRoles] = useState([]);
  useEffect(() => {
    return asyncStateFetch(async () => {
      const clients = await adminClient.clients.find();

      const asyncFilter = async predicate => {
        const results = await Promise.all(clients.map(predicate));
        return clients.filter((_, index) => results[index]);
      };

      const filteredClients = await asyncFilter(async client => (await adminClient.clients.listRoles({
        id: client.id
      })).length > 0);
      filteredClients.map(client => client.toString = function () {
        return this.clientId;
      });
      return filteredClients;
    }, filteredClients => setClients(filteredClients), handleError);
  }, []);
  useEffect(() => {
    return asyncStateFetch(async () => {
      const client = selectedClient;

      if (client && client.name !== "realmRoles") {
        const clientRoles = await adminClient.clients.listRoles({
          id: client.id
        });
        return clientRoles;
      } else {
        return await adminClient.roles.find();
      }
    }, clientRoles => setClientRoles(clientRoles), handleError);
  }, [selectedClient]);

  const save = async mapping => {
    try {
      await adminClient.clientScopes.addProtocolMapper({
        id
      }, mapping);
      addAlert(t("mapperCreateSuccess"));
    } catch (error) {
      addAlert(t("mapperCreateError", error));
    }
  };

  const createSelectGroup = clients => {
    return [/*#__PURE__*/React.createElement(SelectGroup, {
      key: "role",
      label: t("roleGroup")
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: "realmRoles",
      value: {
        name: "realmRoles",
        toString: () => t("realmRoles")
      }
    }, realm)), /*#__PURE__*/React.createElement(Divider, {
      key: "divider"
    }), /*#__PURE__*/React.createElement(SelectGroup, {
      key: "group",
      label: t("clientGroup")
    }, clients.map(client => /*#__PURE__*/React.createElement(SelectOption, {
      key: client.id,
      value: client
    }, client.clientId)))];
  };

  const roleSelectOptions = () => {
    const createItem = role => /*#__PURE__*/React.createElement(SelectOption, {
      key: role.id,
      value: role
    }, role.name);

    return clientRoles.map(role => createItem(role));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "client-scopes:addMapper",
    subKey: "client-scopes:addMapperExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("protocolMapper"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:protocolMapper",
      forLabel: t("protocolMapper"),
      forID: "protocolMapper"
    }),
    fieldId: "protocolMapper"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "protocolMapper",
    name: "protocolMapper",
    isReadOnly: true
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:name"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:mapperName",
      forLabel: t("common:name"),
      forID: "name"
    }),
    fieldId: "name",
    isRequired: true,
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default,
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: true
    }),
    type: "text",
    id: "name",
    name: "name",
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:role"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:role",
      forLabel: t("common:role"),
      forID: "role"
    }),
    validated: errors["config.role"] ? "error" : "default",
    helperTextInvalid: t("common:required"),
    fieldId: "role"
  }, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Select, {
    toggleId: "role",
    onToggle: () => setClientsOpen(!clientsOpen),
    isOpen: clientsOpen,
    variant: SelectVariant.typeahead,
    typeAheadAriaLabel: t("selectASourceOfRoles"),
    placeholderText: t("selectASourceOfRoles"),
    isGrouped: true,
    onFilter: evt => {
      const textInput = evt?.target.value || "";

      if (textInput === "") {
        return createSelectGroup(clients);
      } else {
        return createSelectGroup(clients.filter(client => client.name.toLowerCase().includes(textInput.toLowerCase())));
      }
    },
    selections: selectedClient,
    onClear: () => setSelectedClient(undefined),
    onSelect: (_, value) => {
      if (value) {
        setSelectedClient(value);
        setClientsOpen(false);
      }
    }
  }, createSelectGroup(clients))), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Controller, {
    name: "config.role",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    },
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      onToggle: () => setRoleOpen(!roleOpen),
      isOpen: roleOpen,
      variant: SelectVariant.typeahead,
      placeholderText: selectedClient && selectedClient.name !== "realmRoles" ? t("clientRoles") : t("selectARole"),
      isDisabled: !selectedClient,
      typeAheadAriaLabel: t("selectARole"),
      selections: value.name,
      onSelect: (_, value) => {
        onChange(value);
        setRoleOpen(false);
      },
      onClear: () => onChange("")
    }, roleSelectOptions())
  })))), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("newRoleName"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:newRoleName",
      forLabel: t("newRoleName"),
      forID: "newRoleName"
    }),
    fieldId: "newRoleName"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "newRoleName",
    name: "config.new-role-name"
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.push("..")
  }, t("common:cancel"))))));
};