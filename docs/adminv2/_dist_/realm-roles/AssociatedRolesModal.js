import React, { useEffect, useState } from "../../web_modules/react.js";
import { useParams } from "../../web_modules/react-router-dom.js";
import { Button, Dropdown, DropdownItem, DropdownToggle, Modal, ModalVariant } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { CaretDownIcon, FilterIcon } from "../../web_modules/@patternfly/react-icons.js";
import { AliasRendererComponent } from "./AliasRendererComponent.js";
import _ from "../../web_modules/lodash.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
export const AssociatedRolesModal = props => {
  const {
    t
  } = useTranslation("roles");
  const [name, setName] = useState("");
  const adminClient = useAdminClient();
  const [selectedRows, setSelectedRows] = useState([]);
  const errorHandler = useErrorHandler();
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [filterType, setFilterType] = useState("roles");
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const {
    id
  } = useParams();

  const alphabetize = rolesList => {
    return _.sortBy(rolesList, role => role.name?.toUpperCase());
  };

  const loader = async () => {
    const allRoles = await adminClient.roles.find();
    const existingAdditionalRoles = await adminClient.roles.getCompositeRoles({
      id
    });
    return alphabetize(allRoles).filter(role => {
      return existingAdditionalRoles.find(existing => existing.name === role.name) === undefined && role.name !== name;
    });
  };

  const AliasRenderer = role => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AliasRendererComponent, {
      id: id,
      name: role.name,
      adminClient: adminClient,
      filterType: filterType,
      containerId: role.containerId
    }));
  };

  const clientRolesLoader = async () => {
    const clients = await adminClient.clients.find();
    const clientIdArray = clients.map(client => client.id);
    let rolesList = [];

    for (const id of clientIdArray) {
      const clientRolesList = await adminClient.clients.listRoles({
        id: id
      });
      rolesList = [...rolesList, ...clientRolesList];
    }

    const existingAdditionalRoles = await adminClient.roles.getCompositeRoles({
      id
    });
    return alphabetize(rolesList).filter(role => {
      return existingAdditionalRoles.find(existing => existing.name === role.name) === undefined && role.name !== name;
    });
  };

  useEffect(() => {
    refresh();
  }, [filterType]);
  useEffect(() => {
    if (id) {
      return asyncStateFetch(() => adminClient.roles.findOneById({
        id
      }), fetchedRole => setName(fetchedRole.name), errorHandler);
    } else {
      setName(t("createRole"));
    }
  }, []);

  const onFilterDropdownToggle = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const onFilterDropdownSelect = filterType => {
    if (filterType === "roles") {
      setFilterType("clients");
    }

    if (filterType === "clients") {
      setFilterType("roles");
    }

    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  return /*#__PURE__*/React.createElement(Modal, {
    title: t("roles:associatedRolesModalTitle", {
      name
    }),
    isOpen: props.open,
    onClose: props.toggleDialog,
    variant: ModalVariant.large,
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "add",
      "data-testid": "add-associated-roles-button",
      variant: "primary",
      isDisabled: !selectedRows?.length,
      onClick: () => {
        props.toggleDialog();
        props.onConfirm(selectedRows);
      }
    }, t("common:add")), /*#__PURE__*/React.createElement(Button, {
      key: "cancel",
      variant: "link",
      onClick: () => {
        props.toggleDialog();
      }
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: filterType === "roles" ? loader : clientRolesLoader,
    ariaLabelKey: "roles:roleList",
    searchPlaceholderKey: "roles:searchFor",
    searchTypeComponent: /*#__PURE__*/React.createElement(Dropdown, {
      onSelect: () => onFilterDropdownSelect(filterType),
      "data-testid": "filter-type-dropdown",
      toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
        id: "toggle-id-9",
        onToggle: onFilterDropdownToggle,
        toggleIndicator: CaretDownIcon,
        icon: /*#__PURE__*/React.createElement(FilterIcon, null)
      }, "Filter by ", filterType),
      isOpen: isFilterDropdownOpen,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        "data-testid": "filter-type-dropdown-item",
        key: "filter-type"
      }, filterType === "roles" ? t("filterByClients") : t("filterByRoles"), " ")]
    }),
    canSelectAll: true,
    onSelect: rows => {
      setSelectedRows([...rows]);
    },
    columns: [{
      name: "name",
      displayKey: "roles:roleName",
      cellRenderer: AliasRenderer
    }, {
      name: "description",
      displayKey: "common:description"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t("noRolesInThisRealm"),
      instructions: t("noRolesInThisRealmInstructions"),
      primaryActionText: t("createRole")
    })
  }));
};