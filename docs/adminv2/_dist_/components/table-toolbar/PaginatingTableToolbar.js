import React from "../../../web_modules/react.js";
import { Pagination, ToolbarItem } from "../../../web_modules/@patternfly/react-core.js";
import { TableToolbar } from "./TableToolbar.js";
export const PaginatingTableToolbar = ({
  count,
  first,
  max,
  onNextClick,
  onPreviousClick,
  onPerPageSelect,
  searchTypeComponent,
  toolbarItem,
  children,
  inputGroupName,
  inputGroupPlaceholder,
  inputGroupOnChange,
  inputGroupOnEnter
}) => {
  const page = Math.round(first / max);

  const pagination = (variant = "top") => /*#__PURE__*/React.createElement(Pagination, {
    isCompact: true,
    toggleTemplate: ({
      firstIndex,
      lastIndex
    }) => /*#__PURE__*/React.createElement("b", null, firstIndex, " - ", lastIndex - (count < max ? 1 : 0)),
    itemCount: count + page * max + (count <= max ? 1 : 0),
    page: page + 1,
    perPage: max,
    onNextClick: (_, p) => onNextClick((p - 1) * max),
    onPreviousClick: (_, p) => onPreviousClick((p - 1) * max),
    onPerPageSelect: (_, m, f) => onPerPageSelect(f - 1, m),
    variant: variant
  });

  if (count === 0) {
    /*#__PURE__*/
    React.createElement(React.Fragment, null, children);
  }

  return /*#__PURE__*/React.createElement(TableToolbar, {
    searchTypeComponent: searchTypeComponent,
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, toolbarItem, /*#__PURE__*/React.createElement(ToolbarItem, {
      variant: "pagination"
    }, pagination())),
    toolbarItemFooter: /*#__PURE__*/React.createElement(ToolbarItem, null, pagination("bottom")),
    inputGroupName: inputGroupName,
    inputGroupPlaceholder: inputGroupPlaceholder,
    inputGroupOnChange: inputGroupOnChange,
    inputGroupOnEnter: inputGroupOnEnter
  }, children);
};