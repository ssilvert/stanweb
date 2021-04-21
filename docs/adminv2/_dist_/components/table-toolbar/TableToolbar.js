import React, { Fragment } from "../../../web_modules/react.js";
import { Toolbar, ToolbarContent, ToolbarItem, InputGroup, TextInput, Button, ButtonVariant, Divider } from "../../../web_modules/@patternfly/react-core.js";
import { SearchIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export const TableToolbar = ({
  toolbarItem,
  toolbarItemFooter,
  children,
  searchTypeComponent,
  inputGroupName,
  inputGroupPlaceholder,
  inputGroupOnChange,
  inputGroupOnEnter
}) => {
  const {
    t
  } = useTranslation();
  const [searchValue, setSearchValue] = React.useState("");

  const onSearch = () => {
    if (searchValue !== "") {
      setSearchValue(searchValue);
      inputGroupOnEnter && inputGroupOnEnter(searchValue);
    } else {
      setSearchValue("");
      inputGroupOnEnter && inputGroupOnEnter("");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const handleInputChange = (value, event) => {
    inputGroupOnChange && inputGroupOnChange(value, event);
    setSearchValue(value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(ToolbarContent, null, /*#__PURE__*/React.createElement(Fragment, null, inputGroupName && /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(InputGroup, null, searchTypeComponent, inputGroupPlaceholder && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, {
    name: inputGroupName,
    id: inputGroupName,
    type: "search",
    "aria-label": t("search"),
    placeholder: inputGroupPlaceholder,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/React.createElement(Button, {
    variant: ButtonVariant.control,
    "aria-label": t("search"),
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(SearchIcon, null)))))), toolbarItem)), /*#__PURE__*/React.createElement(Divider, null), children, /*#__PURE__*/React.createElement(Toolbar, null, toolbarItemFooter));
};