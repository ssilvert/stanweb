import React, { useEffect, useState } from "../../web_modules/react.js";
import { Link, useHistory, useLocation } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import _ from "../../web_modules/lodash.js";
import { AlertVariant, Button, Dropdown, DropdownItem, KebabToggle, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import { UsersIcon } from "../../web_modules/@patternfly/react-icons.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useSubGroups } from "./SubGroupsContext.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { GroupsModal } from "./GroupsModal.js";
import { getLastId } from "./groupIdUtils.js";
import { MoveGroupDialog } from "./MoveGroupDialog.js";
export const GroupTable = () => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const {
    realm
  } = useRealm();
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [move, setMove] = useState();
  const {
    subGroups
  } = useSubGroups();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const history = useHistory();
  const location = useLocation();
  const id = getLastId(location.pathname);
  useEffect(() => {
    refresh();
  }, [subGroups]);

  const getMembers = async id => {
    const response = await adminClient.groups.listMembers({
      id
    });
    return response ? response.length : 0;
  };

  const loader = async () => {
    const groupsData = id ? (await adminClient.groups.findOne({
      id
    })).subGroups : await adminClient.groups.find();

    if (groupsData) {
      const memberPromises = groupsData.map(group => getMembers(group.id));
      const memberData = await Promise.all(memberPromises);
      return _.cloneDeep(groupsData).map((group, i) => {
        group.membersLength = memberData[i];
        return group;
      });
    } else {
      history.push(`/${realm}/groups`);
    }

    return [];
  };

  const deleteGroup = async group => {
    try {
      await adminClient.groups.del({
        id: group.id
      });
      addAlert(t("groupDelete"), AlertVariant.success);
    } catch (error) {
      addAlert(t("groupDeleteError", {
        error
      }), AlertVariant.danger);
    }

    return true;
  };

  const multiDelete = async () => {
    if (selectedRows.length !== 0) {
      const chainedPromises = selectedRows.map(group => deleteGroup(group));
      await Promise.all(chainedPromises);
      addAlert(t("groupsDeleted"), AlertVariant.success);
      setSelectedRows([]);
      refresh();
    }
  };

  const GroupNameCell = group => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    key: group.id,
    to: `${location.pathname}/${group.id}`
  }, group.name));

  const GroupMemberCell = group => /*#__PURE__*/React.createElement("div", {
    className: "keycloak-admin--groups__member-count"
  }, /*#__PURE__*/React.createElement(UsersIcon, {
    key: `user-icon-${group.id}`
  }), group.membersLength);

  const handleModalToggle = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    onSelect: rows => setSelectedRows([...rows]),
    canSelectAll: false,
    loader: loader,
    ariaLabelKey: "groups:groups",
    searchPlaceholderKey: "groups:searchForGroups",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      "data-testid": "openCreateGroupModal",
      variant: "primary",
      onClick: handleModalToggle
    }, t("createGroup"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Dropdown, {
      toggle: /*#__PURE__*/React.createElement(KebabToggle, {
        onToggle: () => setIsKebabOpen(!isKebabOpen)
      }),
      isOpen: isKebabOpen,
      isPlain: true,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        key: "action",
        component: "button",
        onClick: () => {
          multiDelete();
          setIsKebabOpen(false);
        }
      }, t("common:delete"))]
    }))),
    actions: [{
      title: t("moveTo"),
      onRowClick: async group => {
        setMove(group);
        return false;
      }
    }, {
      title: t("common:delete"),
      onRowClick: async group => {
        return deleteGroup(group);
      }
    }],
    columns: [{
      name: "name",
      displayKey: "groups:groupName",
      cellRenderer: GroupNameCell
    }, {
      name: "members",
      displayKey: "groups:members",
      cellRenderer: GroupMemberCell
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t(`noGroupsInThis${id ? "SubGroup" : "Realm"}`),
      instructions: t(`noGroupsInThis${id ? "SubGroup" : "Realm"}Instructions`),
      primaryActionText: t("createGroup"),
      onPrimaryAction: handleModalToggle
    })
  }), isCreateModalOpen && /*#__PURE__*/React.createElement(GroupsModal, {
    id: id,
    handleModalToggle: handleModalToggle,
    refresh: refresh
  }), move && /*#__PURE__*/React.createElement(MoveGroupDialog, {
    group: move,
    onClose: () => setMove(undefined),
    onMove: async id => {
      delete move.membersLength;

      try {
        try {
          await adminClient.groups.setOrCreateChild({
            id
          }, move);
        } catch (error) {
          if (error.response) {
            throw error;
          }
        }

        setMove(undefined);
        refresh();
        addAlert(t("moveGroupSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("moveGroupError", {
          error: error.response?.data?.errorMessage || error
        }), AlertVariant.danger);
      }
    }
  }));
};