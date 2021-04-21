import React, { useEffect, useState } from "../../web_modules/react.js";
import { useLocation } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import _ from "../../web_modules/lodash.js";
import { AlertVariant, Button, Checkbox, Dropdown, DropdownItem, KebabToggle, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { emptyFormatter } from "../util.js";
import { getLastId } from "./groupIdUtils.js";
import { useSubGroups } from "./SubGroupsContext.js";
import { MemberModal } from "./MembersModal.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
export const Members = () => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const location = useLocation();
  const id = getLastId(location.pathname);
  const [includeSubGroup, setIncludeSubGroup] = useState(false);
  const {
    currentGroup,
    subGroups
  } = useSubGroups();
  const [addMembers, setAddMembers] = useState(false);
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  useEffect(() => {
    refresh();
  }, [id, subGroups, includeSubGroup]);

  const getMembership = async id => await adminClient.users.listGroups({
    id: id
  });

  const getSubGroups = groups => {
    let subGroups = [];

    for (const group of groups) {
      subGroups.push(group);
      const subs = getSubGroups(group.subGroups);
      subGroups = subGroups.concat(subs);
    }

    return subGroups;
  };

  const loader = async (first, max) => {
    let members = await adminClient.groups.listMembers({
      id: id,
      first,
      max
    });

    if (includeSubGroup) {
      const subGroups = getSubGroups(currentGroup().subGroups);

      for (const group of subGroups) {
        members = members.concat(await adminClient.groups.listMembers({
          id: group.id
        }));
      }

      members = _.uniqBy(members, member => member.username);
    }

    const memberOfPromises = await Promise.all(members.map(member => getMembership(member.id)));
    return members.map((member, i) => {
      return { ...member,
        membership: memberOfPromises[i]
      };
    });
  };

  const MemberOfRenderer = member => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, member.membership.map(group => /*#__PURE__*/React.createElement(React.Fragment, null, group.path, " ")));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, addMembers && /*#__PURE__*/React.createElement(MemberModal, {
    groupId: id,
    onClose: () => {
      setAddMembers(false);
      refresh();
    }
  }), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    ariaLabelKey: "groups:members",
    isPaginated: true,
    canSelectAll: true,
    onSelect: rows => setSelectedRows([...rows]),
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      "data-testid": "addMember",
      variant: "primary",
      onClick: () => setAddMembers(true)
    }, t("addMember"))), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Checkbox, {
      "data-testid": "includeSubGroupsCheck",
      label: t("includeSubGroups"),
      id: "kc-include-sub-groups",
      isChecked: includeSubGroup,
      onChange: () => setIncludeSubGroup(!includeSubGroup)
    })), /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Dropdown, {
      toggle: /*#__PURE__*/React.createElement(KebabToggle, {
        onToggle: () => setIsKebabOpen(!isKebabOpen)
      }),
      isOpen: isKebabOpen,
      isPlain: true,
      dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
        key: "action",
        component: "button",
        onClick: async () => {
          try {
            await Promise.all(selectedRows.map(user => adminClient.users.delFromGroup({
              id: user.id,
              groupId: id
            })));
            setIsKebabOpen(false);
            addAlert(t("usersLeft", {
              count: selectedRows.length
            }), AlertVariant.success);
          } catch (error) {
            addAlert(t("usersLeftError"), AlertVariant.danger);
          }

          refresh();
        }
      }, t("leave"))]
    }))),
    columns: [{
      name: "username",
      displayKey: "common:name"
    }, {
      name: "email",
      displayKey: "groups:email",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "firstName",
      displayKey: "groups:firstName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "lastName",
      displayKey: "groups:lastName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "membership",
      displayKey: "groups:membership",
      cellRenderer: MemberOfRenderer
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("users:noUsersFound"),
      instructions: t("users:emptyInstructions"),
      primaryActionText: t("addMember"),
      onPrimaryAction: () => setAddMembers(true)
    })
  }));
};