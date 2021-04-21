import React, { useEffect, useState } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { Breadcrumb, BreadcrumbItem, Button, ButtonVariant, DataList, DataListAction, DataListCell, DataListItem, DataListItemCells, DataListItemRow, InputGroup, Modal, ModalVariant, TextInput, Toolbar, ToolbarContent, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import { AngleRightIcon, SearchIcon } from "../../web_modules/@patternfly/react-icons.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
export const MoveGroupDialog = ({
  group,
  onClose,
  onMove
}) => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const errorHandler = useErrorHandler();
  const [navigation, setNavigation] = useState([]);
  const [groups, setGroups] = useState([]);
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState("");
  const [id, setId] = useState();

  const currentGroup = () => navigation[navigation.length - 1];

  useEffect(() => asyncStateFetch(async () => {
    if (id) {
      const group = await adminClient.groups.findOne({
        id
      });
      return {
        group,
        groups: group.subGroups
      };
    } else {
      return {
        groups: await adminClient.groups.find()
      };
    }
  }, ({
    group: selectedGroup,
    groups
  }) => {
    if (selectedGroup) setNavigation([...navigation, selectedGroup]);
    setGroups(groups.filter(g => g.id !== group.id));
  }, errorHandler), [id]);
  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.large,
    title: currentGroup() ? t("moveToGroup", {
      group1: group.name,
      group2: currentGroup().name
    }) : t("moveTo"),
    isOpen: true,
    onClose: onClose,
    actions: [/*#__PURE__*/React.createElement(Button, {
      "data-testid": "moveGroup",
      key: "confirm",
      variant: "primary",
      form: "group-form",
      onClick: () => onMove(currentGroup().id)
    }, t("moveHere")), /*#__PURE__*/React.createElement(Button, {
      "data-testid": "moveCancel",
      key: "cancel",
      variant: "secondary",
      onClick: onClose
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: "home"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => {
      setId(undefined);
      setNavigation([]);
    }
  }, t("groups"))), navigation.map((group, i) => /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: i
  }, navigation.length - 1 !== i && /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => {
      setId(group.id);
      setNavigation([...navigation].slice(0, i));
    }
  }, group.name), navigation.length - 1 === i && /*#__PURE__*/React.createElement(React.Fragment, null, group.name)))), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(ToolbarContent, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "search",
    "aria-label": t("common:search"),
    placeholder: t("searchForGroups"),
    onChange: value => {
      if (value === "") {
        setFiltered(undefined);
      }

      setFilter(value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.control,
    "aria-label": t("common:search"),
    onClick: () => setFiltered(groups.filter(group => group.name?.toLowerCase().includes(filter.toLowerCase())))
  }, /*#__PURE__*/React.createElement(SearchIcon, null)))))), /*#__PURE__*/React.createElement(DataList, {
    onSelectDataListItem: value => setId(value),
    "aria-label": t("groups"),
    isCompact: true
  }, (filtered || groups).map(group => /*#__PURE__*/React.createElement(DataListItem, {
    "aria-labelledby": group.name,
    key: group.id,
    id: group.id
  }, /*#__PURE__*/React.createElement(DataListItemRow, {
    "data-testid": group.name
  }, /*#__PURE__*/React.createElement(DataListItemCells, {
    dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
      key: `name-${group.id}`
    }, /*#__PURE__*/React.createElement(React.Fragment, null, group.name))]
  }), /*#__PURE__*/React.createElement(DataListAction, {
    "aria-labelledby": `select-${group.name}`,
    id: `select-${group.name}`,
    "aria-label": t("groupName"),
    isPlainButtonAction: true
  }, /*#__PURE__*/React.createElement(Button, {
    isDisabled: true,
    variant: "link"
  }, /*#__PURE__*/React.createElement(AngleRightIcon, null)))))), (filtered || groups).length === 0 && /*#__PURE__*/React.createElement(ListEmptyState, {
    hasIcon: false,
    message: t("moveGroupEmpty"),
    instructions: t("moveGroupEmptyInstructions")
  })));
};