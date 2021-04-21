import React, { useContext, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Badge, Button, Checkbox, ToolbarItem } from "../../../web_modules/@patternfly/react-core.js";
import { useAdminClient } from "../../context/auth/AdminClient.js";
import { RealmContext } from "../../context/realm-context/RealmContext.js";
import { KeycloakDataTable } from "../../components/table-toolbar/KeycloakDataTable.js";
import { emptyFormatter } from "../../util.js";
import "./service-account.css.proxy.js";
export const ServiceAccount = ({
  clientId
}) => {
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const {
    realm
  } = useContext(RealmContext);
  const [hide, setHide] = useState(false);

  const loader = async () => {
    const serviceAccount = await adminClient.clients.getServiceAccountUser({
      id: clientId
    });
    const effectiveRoles = await adminClient.users.listCompositeRealmRoleMappings({
      id: serviceAccount.id
    });
    const assignedRoles = await adminClient.users.listRealmRoleMappings({
      id: serviceAccount.id
    });
    const clients = await adminClient.clients.find();
    const clientRoles = (await Promise.all(clients.map(async client => {
      return {
        client,
        roles: await adminClient.users.listClientRoleMappings({
          id: serviceAccount.id,
          clientUniqueId: client.id
        })
      };
    }))).filter(rows => rows.roles.length > 0);

    const findClient = role => {
      const row = clientRoles.filter(row => row.roles.find(r => r.id === role.id))[0];
      return row ? row.client : undefined;
    };

    const clientRolesFlat = clientRoles.map(row => row.roles).flat();
    console.log(clientRolesFlat);
    const addInherentData = await (async () => Promise.all(effectiveRoles.map(async role => {
      const compositeRoles = await adminClient.roles.getCompositeRolesForRealm({
        realm,
        id: role.id
      });
      return compositeRoles.length > 0 ? compositeRoles.map(r => {
        return { ...r,
          parent: role
        };
      }) : { ...role,
        parent: undefined
      };
    })))();
    const uniqueRolesWithParent = addInherentData.flat().filter((role, index, array) => array.findIndex(r => r.id === role.id) === index);
    return [...(hide ? assignedRoles : uniqueRolesWithParent), ...clientRolesFlat].sort((r1, r2) => r1.name.localeCompare(r2.name)).map(role => {
      return {
        client: findClient(role),
        role
      };
    });
  };

  const RoleLink = ({
    role,
    client
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, client && /*#__PURE__*/React.createElement(Badge, {
    key: client.id,
    isRead: true,
    className: "keycloak-admin--service-account__client-name"
  }, client.clientId), role.name);

  return /*#__PURE__*/React.createElement(KeycloakDataTable, {
    loader: loader,
    onSelect: () => {},
    searchPlaceholderKey: "clients:searchByName",
    ariaLabelKey: "clients:clientScopeList",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: t("hideInheritedRoles"),
      id: "hideInheritedRoles",
      isChecked: hide,
      onChange: setHide
    })), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, null, t("assignRole")))),
    columns: [{
      name: "role.name",
      displayKey: t("name"),
      cellRenderer: RoleLink
    }, {
      name: "role.parent.name",
      displayKey: t("inherentFrom"),
      cellFormatters: [emptyFormatter()]
    }, {
      name: "role.description",
      displayKey: t("description"),
      cellFormatters: [emptyFormatter()]
    }]
  });
};