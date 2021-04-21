import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Link, useHistory, useRouteMatch } from "../../../web_modules/react-router-dom.js";
import { AlertVariant, ButtonVariant, Dropdown, DropdownItem, DropdownToggle } from "../../../web_modules/@patternfly/react-core.js";
import { CaretDownIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { ListEmptyState } from "../../components/list-empty-state/ListEmptyState.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { AddMapperDialog } from "../add/MapperDialog.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { KeycloakDataTable } from "../../components/table-toolbar/KeycloakDataTable.js";
export const MapperList = ({
  clientScope,
  refresh
}) => {
  const {
    t
  } = useTranslation("client-scopes");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const history = useHistory();
  const {
    url
  } = useRouteMatch();
  const [mapperAction, setMapperAction] = useState(false);
  const mapperList = clientScope.protocolMappers;
  const mapperTypes = useServerInfo().protocolMapperTypes[clientScope.protocol];
  const [key, setKey] = useState(0);
  useEffect(() => setKey(new Date().getTime()), [mapperList]);
  const [addMapperDialogOpen, setAddMapperDialogOpen] = useState(false);
  const [filter, setFilter] = useState(clientScope.protocolMappers);

  const toggleAddMapperDialog = buildIn => {
    if (buildIn) {
      setFilter(mapperList || []);
    } else {
      setFilter(undefined);
    }

    setAddMapperDialogOpen(!addMapperDialogOpen);
  };

  const addMappers = async mappers => {
    if (filter === undefined) {
      const mapper = mappers;
      history.push(`${url}/${mapper.id}`);
    } else {
      try {
        await adminClient.clientScopes.addMultipleProtocolMappers({
          id: clientScope.id
        }, mappers);
        refresh();
        addAlert(t("mappingCreatedSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("mappingCreatedError", {
          error
        }), AlertVariant.danger);
      }
    }
  };

  const loader = async () => Promise.resolve((mapperList || []).map(mapper => {
    const mapperType = mapperTypes.filter(type => type.id === mapper.protocolMapper)[0];
    return { ...mapper,
      category: mapperType.category,
      type: mapperType.name,
      priority: mapperType.priority
    };
  }).sort((a, b) => a.priority - b.priority));

  const MapperLink = mapper => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    to: `${url}/${mapper.id}`
  }, mapper.name));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AddMapperDialog, {
    protocol: clientScope.protocol,
    filter: filter,
    onConfirm: addMappers,
    open: addMapperDialogOpen,
    toggleDialog: () => setAddMapperDialogOpen(!addMapperDialogOpen)
  }), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    ariaLabelKey: "client-scopes:clientScopeList",
    searchPlaceholderKey: "client-scopes:mappersSearchFor",
    toolbarItem: /*#__PURE__*/React.createElement(Dropdown, {
      onSelect: () => setMapperAction(false),
      toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
        isPrimary: true,
        id: "mapperAction",
        onToggle: () => setMapperAction(!mapperAction),
        toggleIndicator: CaretDownIcon
      }, t("addMapper")),
      isOpen: mapperAction,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        key: "predefined",
        onClick: () => toggleAddMapperDialog(true)
      }, t("fromPredefinedMapper")), /*#__PURE__*/React.createElement(DropdownItem, {
        key: "byConfiguration",
        onClick: () => toggleAddMapperDialog(false)
      }, t("byConfiguration"))]
    }),
    actions: [{
      title: t("common:delete"),
      onRowClick: async mapper => {
        try {
          await adminClient.clientScopes.delProtocolMapper({
            id: clientScope.id,
            mapperId: mapper.id
          });
          addAlert(t("mappingDeletedSuccess"), AlertVariant.success);
          refresh();
        } catch (error) {
          addAlert(t("mappingDeletedError", {
            error
          }), AlertVariant.danger);
        }

        return true;
      }
    }],
    columns: [{
      name: "name",
      cellRenderer: MapperLink
    }, {
      name: "category"
    }, {
      name: "type"
    }, {
      name: "priority"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("emptyMappers"),
      instructions: t("emptyMappersInstructions"),
      primaryActionText: t("emptyPrimaryAction"),
      onPrimaryAction: () => toggleAddMapperDialog(true),
      secondaryActions: [{
        text: t("emptySecondaryAction"),
        onClick: () => toggleAddMapperDialog(false),
        type: ButtonVariant.secondary
      }]
    })
  }));
};