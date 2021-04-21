import React, { useEffect, useState } from "../../web_modules/react.js";
import { useHistory, useLocation } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { DropdownItem, PageSection, PageSectionVariants, AlertVariant, Tab, TabTitleText, Tabs } from "../../web_modules/@patternfly/react-core.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { useSubGroups } from "./SubGroupsContext.js";
import { GroupTable } from "./GroupTable.js";
import { getId, getLastId } from "./groupIdUtils.js";
import { Members } from "./Members.js";
import { GroupAttributes } from "./GroupAttributes.js";
import { GroupsModal } from "./GroupsModal.js";
import "./GroupsSection.css.proxy.js";
export const GroupsSection = () => {
  const {
    t
  } = useTranslation("groups");
  const [activeTab, setActiveTab] = useState(0);
  const adminClient = useAdminClient();
  const {
    subGroups,
    setSubGroups,
    currentGroup
  } = useSubGroups();
  const {
    addAlert
  } = useAlerts();
  const {
    realm
  } = useRealm();
  const errorHandler = useErrorHandler();
  const [rename, setRename] = useState();
  const history = useHistory();
  const location = useLocation();
  const id = getLastId(location.pathname);

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

  useEffect(() => asyncStateFetch(async () => {
    const ids = getId(location.pathname);
    const isNavigationStateInValid = ids && ids.length !== subGroups.length + 1;

    if (isNavigationStateInValid) {
      const groups = [];

      for (const i of ids) {
        const group = await adminClient.groups.findOne({
          id: i
        });
        if (group) groups.push(group);
      }

      return groups;
    } else {
      if (id) {
        const group = await adminClient.groups.findOne({
          id: id
        });

        if (group) {
          return [...subGroups, group];
        } else {
          return subGroups;
        }
      } else {
        return subGroups;
      }
    }
  }, groups => setSubGroups(groups), errorHandler), [id]);
  const SearchDropdown = /*#__PURE__*/React.createElement(DropdownItem, {
    "data-testid": "searchGroup",
    key: "searchGroup",
    onClick: () => history.push(`/${realm}/groups/search`)
  }, t("searchGroup"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, rename && /*#__PURE__*/React.createElement(GroupsModal, {
    id: id,
    rename: rename,
    refresh: group => setSubGroups([...subGroups.slice(0, subGroups.length - 1), group]),
    handleModalToggle: () => setRename(undefined)
  }), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "groups:groups",
    subKey: "groups:groupsDescription",
    dropdownItems: id ? [SearchDropdown, /*#__PURE__*/React.createElement(DropdownItem, {
      "data-testid": "renameGroupAction",
      key: "renameGroup",
      onClick: () => setRename(currentGroup().name)
    }, t("renameGroup")), /*#__PURE__*/React.createElement(DropdownItem, {
      "data-testid": "deleteGroup",
      key: "deleteGroup",
      onClick: () => {
        deleteGroup({
          id
        });
        history.push(location.pathname.substr(0, location.pathname.lastIndexOf("/")));
      }
    }, t("deleteGroup"))] : [SearchDropdown]
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: PageSectionVariants.light
  }, subGroups.length > 0 && /*#__PURE__*/React.createElement(Tabs, {
    activeKey: activeTab,
    isSecondary: true,
    onSelect: (_, key) => setActiveTab(key),
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    "data-testid": "groups",
    eventKey: 0,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("childGroups"))
  }, /*#__PURE__*/React.createElement(GroupTable, null)), /*#__PURE__*/React.createElement(Tab, {
    "data-testid": "members",
    eventKey: 1,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("members"))
  }, /*#__PURE__*/React.createElement(Members, null)), /*#__PURE__*/React.createElement(Tab, {
    "data-testid": "attributes",
    eventKey: 2,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("attributes"))
  }, /*#__PURE__*/React.createElement(GroupAttributes, null))), subGroups.length === 0 && /*#__PURE__*/React.createElement(GroupTable, null)));
};