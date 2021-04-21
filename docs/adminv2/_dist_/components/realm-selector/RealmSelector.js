import React, { useState, useContext, useEffect } from "../../../web_modules/react.js";
import { useHistory } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Dropdown, DropdownToggle, DropdownItem, Button, Divider, SplitItem, Split, ContextSelector, ContextSelectorItem } from "../../../web_modules/@patternfly/react-core.js";
import { CheckIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { toUpperCase } from "../../util.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { WhoAmIContext } from "../../context/whoami/WhoAmI.js";
import "./realm-selector.css.proxy.js";
export const RealmSelector = ({
  realmList
}) => {
  const {
    realm,
    setRealm
  } = useRealm();
  const {
    whoAmI
  } = useContext(WhoAmIContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(realmList);
  const history = useHistory();
  const {
    t
  } = useTranslation("common");

  const RealmText = ({
    value
  }) => /*#__PURE__*/React.createElement(Split, {
    className: "keycloak__realm_selector__list-item-split"
  }, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, toUpperCase(value)), /*#__PURE__*/React.createElement(SplitItem, null, value === realm && /*#__PURE__*/React.createElement(CheckIcon, null)));

  const AddRealm = ({
    className
  }) => /*#__PURE__*/React.createElement(Button, {
    component: "div",
    isBlock: true,
    onClick: () => {
      history.push(`/${realm}/add-realm`);
      setOpen(!open);
    },
    className: className
  }, t("createRealm"));

  const onFilter = () => {
    const filtered = search === "" ? realmList : realmList.filter(r => r.realm.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    setFilteredItems(filtered || []);
  };

  useEffect(() => {
    onFilter();
  }, [search]);
  const dropdownItems = realmList.map(r => /*#__PURE__*/React.createElement(DropdownItem, {
    key: `realm-dropdown-item-${r.realm}`,
    onClick: () => {
      setRealm(r.realm);
      history.push(`/${r.realm}/`);
      setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement(RealmText, {
    value: r.realm
  })));
  const addRealmComponent = /*#__PURE__*/React.createElement(React.Fragment, {
    key: "Add Realm"
  }, whoAmI.canCreateRealm() && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    key: "divider"
  }), /*#__PURE__*/React.createElement(DropdownItem, {
    key: "add"
  }, /*#__PURE__*/React.createElement(AddRealm, null))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, realmList.length > 5 && /*#__PURE__*/React.createElement(ContextSelector, {
    toggleText: toUpperCase(realm),
    isOpen: open,
    screenReaderLabel: toUpperCase(realm),
    onToggle: () => setOpen(!open),
    onSelect: (_, r) => {
      const value = r.props.value;
      setRealm(value || "master");
      setOpen(!open);
    },
    searchInputValue: search,
    onSearchInputChange: value => setSearch(value),
    onSearchButtonClick: () => onFilter(),
    className: "keycloak__realm_selector__context_selector"
  }, filteredItems.map(item => /*#__PURE__*/React.createElement(ContextSelectorItem, {
    key: item.id
  }, /*#__PURE__*/React.createElement(RealmText, {
    value: item.realm
  }))), /*#__PURE__*/React.createElement(ContextSelectorItem, {
    key: "add"
  }, /*#__PURE__*/React.createElement(AddRealm, null))), realmList.length <= 5 && /*#__PURE__*/React.createElement(Dropdown, {
    id: "realm-select",
    className: "keycloak__realm_selector__dropdown",
    isOpen: open,
    toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
      id: "realm-select-toggle",
      onToggle: () => setOpen(!open),
      className: "keycloak__realm_selector_dropdown__toggle"
    }, toUpperCase(realm)),
    dropdownItems: [...dropdownItems, addRealmComponent]
  }));
};