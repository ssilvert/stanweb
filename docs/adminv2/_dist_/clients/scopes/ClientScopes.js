import React, { useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { AlertVariant, Button, Dropdown, DropdownItem, DropdownToggle, KebabToggle, Select, ToolbarItem } from "../../../web_modules/@patternfly/react-core.js";
import { FilterIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { toUpperCase } from "../../util.js";
import { ListEmptyState } from "../../components/list-empty-state/ListEmptyState.js";
import { AddScopeDialog } from "./AddScopeDialog.js";
import { clientScopeTypesSelectOptions, ClientScope } from "./ClientScopeTypes.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { KeycloakDataTable } from "../../components/table-toolbar/KeycloakDataTable.js";

const castAdminClient = adminClient => adminClient.clients;

const changeScope = async (adminClient, clientId, clientScope, type, changeTo) => {
  await removeScope(adminClient, clientId, clientScope, type);
  await addScope(adminClient, clientId, clientScope, changeTo);
};

const removeScope = async (adminClient, clientId, clientScope, type) => {
  const typeToName = toUpperCase(type);
  await castAdminClient(adminClient)[`del${typeToName}ClientScope`]({
    id: clientId,
    clientScopeId: clientScope.id
  });
};

const addScope = async (adminClient, clientId, clientScope, type) => {
  const typeToName = toUpperCase(type);
  await castAdminClient(adminClient)[`add${typeToName}ClientScope`]({
    id: clientId,
    clientScopeId: clientScope.id
  });
};

const CellDropdown = ({
  clientScope,
  type,
  onSelect
}) => {
  const {
    t
  } = useTranslation("clients");
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(Select, {
    key: clientScope.id,
    onToggle: () => setOpen(!open),
    isOpen: open,
    selections: [type],
    onSelect: (_, value) => {
      onSelect(value);
      setOpen(false);
    }
  }, clientScopeTypesSelectOptions(t));
};

export const ClientScopes = ({
  clientId,
  protocol
}) => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchType, setSearchType] = useState("client");
  const [addToggle, setAddToggle] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [kebabOpen, setKebabOpen] = useState(false);
  const [rest, setRest] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const loader = async () => {
    const defaultClientScopes = await adminClient.clients.listDefaultClientScopes({
      id: clientId
    });
    const optionalClientScopes = await adminClient.clients.listOptionalClientScopes({
      id: clientId
    });
    const clientScopes = await adminClient.clientScopes.find();

    const find = id => clientScopes.find(clientScope => id === clientScope.id);

    const optional = optionalClientScopes.map(c => {
      const scope = find(c.id);
      return { ...c,
        type: ClientScope.optional,
        description: scope.description
      };
    });
    const defaultScopes = defaultClientScopes.map(c => {
      const scope = find(c.id);
      return { ...c,
        type: ClientScope.default,
        description: scope.description
      };
    });
    const rows = [...optional, ...defaultScopes];
    const names = rows.map(row => row.name);
    setRest(clientScopes.filter(scope => !names.includes(scope.name)).filter(scope => scope.protocol === protocol));
    return rows;
  };

  const TypeSelector = scope => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CellDropdown, {
    clientScope: scope,
    type: scope.type,
    onSelect: async value => {
      try {
        await changeScope(adminClient, clientId, scope, scope.type, value);
        addAlert(t("clientScopeSuccess"), AlertVariant.success);
        refresh();
      } catch (error) {
        addAlert(t("clientScopeError", {
          error
        }), AlertVariant.danger);
      }
    }
  }));

  return /*#__PURE__*/React.createElement(React.Fragment, null, rest && /*#__PURE__*/React.createElement(AddScopeDialog, {
    clientScopes: rest,
    open: addDialogOpen,
    toggleDialog: () => setAddDialogOpen(!addDialogOpen),
    onAdd: async scopes => {
      try {
        await Promise.all(scopes.map(async scope => await addScope(adminClient, clientId, scope.scope, scope.type)));
        addAlert(t("clientScopeSuccess"), AlertVariant.success);
        refresh();
      } catch (error) {
        addAlert(t("clientScopeError", {
          error
        }), AlertVariant.danger);
      }
    }
  }), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    ariaLabelKey: "clients:clientScopeList",
    searchPlaceholderKey: "clients:searchByName",
    onSelect: rows => setSelectedRows([...rows]),
    searchTypeComponent: /*#__PURE__*/React.createElement(Dropdown, {
      toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
        id: "toggle-id",
        onToggle: () => setSearchToggle(!searchToggle)
      }, /*#__PURE__*/React.createElement(FilterIcon, null), " ", t(`clientScopeSearch.${searchType}`)),
      "aria-label": "Select Input",
      isOpen: searchToggle,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        key: "client",
        onClick: () => {
          setSearchType("client");
          setSearchToggle(false);
        }
      }, t("clientScopeSearch.client")), /*#__PURE__*/React.createElement(DropdownItem, {
        key: "assigned",
        onClick: () => {
          setSearchType("assigned");
          setSearchToggle(false);
        }
      }, t("clientScopeSearch.assigned"))]
    }),
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setAddDialogOpen(true)
    }, t("addClientScope"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Select, {
      id: "add-dropdown",
      key: "add-dropdown",
      isOpen: addToggle,
      selections: [],
      placeholderText: t("changeTypeTo"),
      onToggle: () => setAddToggle(!addToggle),
      onSelect: async (_, value) => {
        try {
          await Promise.all(selectedRows.map(row => {
            return changeScope(adminClient, clientId, { ...row
            }, row.type, value);
          }));
          setAddToggle(false);
          refresh();
          addAlert(t("clientScopeSuccess"), AlertVariant.success);
        } catch (error) {
          addAlert(t("clientScopeError", {
            error
          }), AlertVariant.danger);
        }
      }
    }, clientScopeTypesSelectOptions(t))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Dropdown, {
      onSelect: () => {},
      toggle: /*#__PURE__*/React.createElement(KebabToggle, {
        onToggle: () => setKebabOpen(!kebabOpen)
      }),
      isOpen: kebabOpen,
      isPlain: true,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        key: "deleteAll",
        isDisabled: selectedRows.length === 0,
        onClick: async () => {
          try {
            await Promise.all(selectedRows.map(async row => {
              await removeScope(adminClient, clientId, { ...row
              }, row.type);
            }));
            setKebabOpen(false);
            addAlert(t("clientScopeRemoveSuccess"), AlertVariant.success);
            refresh();
          } catch (error) {
            addAlert(t("clientScopeRemoveError", {
              error
            }), AlertVariant.danger);
          }
        }
      }, t("common:remove"))]
    }))),
    columns: [{
      name: "name"
    }, {
      name: "type",
      displayKey: "clients:assignedType",
      cellRenderer: TypeSelector
    }, {
      name: "description"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("clients:emptyClientScopes"),
      instructions: t("clients:emptyClientScopesInstructions"),
      primaryActionText: t("clients:emptyClientScopesPrimaryAction"),
      onPrimaryAction: () => setAddDialogOpen(true)
    })
  }));
};