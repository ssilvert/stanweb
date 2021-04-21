import React, { useState } from "../../../web_modules/react.js";
import { Button, ButtonVariant, DataList, DataListCell, DataListItem, DataListItemCells, DataListItemRow, Modal, ModalVariant, Text, TextContent } from "../../../web_modules/@patternfly/react-core.js";
import { Table, TableBody, TableHeader, TableVariant } from "../../../web_modules/@patternfly/react-table.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { ListEmptyState } from "../../components/list-empty-state/ListEmptyState.js";
export const AddMapperDialog = props => {
  const {
    t
  } = useTranslation("client-scopes");
  const serverInfo = useServerInfo();
  const protocol = props.protocol;
  const protocolMappers = serverInfo.protocolMapperTypes[protocol];
  const builtInMappers = serverInfo.builtinProtocolMappers[protocol];
  const [filter, setFilter] = useState([]);
  const allRows = builtInMappers.map(mapper => {
    const mapperType = protocolMappers.filter(type => type.id === mapper.protocolMapper)[0];
    return {
      item: mapper,
      selected: false,
      cells: [mapper.name, mapperType.helpText]
    };
  });
  const [rows, setRows] = useState(allRows);

  if (props.filter && props.filter.length !== filter.length) {
    setFilter(props.filter);
    const nameFilter = props.filter.map(f => f.name);
    setRows([...allRows.filter(row => !nameFilter.includes(row.item.name))]);
  }

  const selectedRows = rows.filter(row => row.selected).map(row => row.item);
  const isBuiltIn = !!props.filter;
  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.medium,
    title: t("chooseAMapperType"),
    isOpen: props.open,
    onClose: props.toggleDialog,
    actions: isBuiltIn ? [/*#__PURE__*/React.createElement(Button, {
      id: "modal-confirm",
      key: "confirm",
      isDisabled: rows.length === 0 || selectedRows.length === 0,
      onClick: () => {
        props.onConfirm(selectedRows);
        props.toggleDialog();
      }
    }, t("common:add")), /*#__PURE__*/React.createElement(Button, {
      id: "modal-cancel",
      key: "cancel",
      variant: ButtonVariant.secondary,
      onClick: () => {
        props.toggleDialog();
      }
    }, t("common:cancel"))] : []
  }, /*#__PURE__*/React.createElement(TextContent, null, /*#__PURE__*/React.createElement(Text, null, t("predefinedMappingDescription"))), !isBuiltIn && /*#__PURE__*/React.createElement(DataList, {
    onSelectDataListItem: id => {
      const mapper = protocolMappers.find(mapper => mapper.id === id);
      props.onConfirm(mapper);
      props.toggleDialog();
    },
    "aria-label": t("chooseAMapperType"),
    isCompact: true
  }, protocolMappers.map(mapper => /*#__PURE__*/React.createElement(DataListItem, {
    "aria-labelledby": mapper.name,
    key: mapper.id,
    id: mapper.id
  }, /*#__PURE__*/React.createElement(DataListItemRow, null, /*#__PURE__*/React.createElement(DataListItemCells, {
    dataListCells: [/*#__PURE__*/React.createElement(DataListCell, {
      key: `name-${mapper.id}`
    }, /*#__PURE__*/React.createElement(React.Fragment, null, mapper.name)), /*#__PURE__*/React.createElement(DataListCell, {
      key: `helpText-${mapper.id}`
    }, /*#__PURE__*/React.createElement(React.Fragment, null, mapper.helpText))]
  }))))), isBuiltIn && rows.length > 0 && /*#__PURE__*/React.createElement(Table, {
    variant: TableVariant.compact,
    cells: [t("common:name"), t("common:description")],
    onSelect: (_, isSelected, rowIndex) => {
      rows[rowIndex].selected = isSelected;
      setRows([...rows]);
    },
    canSelectAll: false,
    rows: rows,
    "aria-label": t("chooseAMapperType")
  }, /*#__PURE__*/React.createElement(TableHeader, null), /*#__PURE__*/React.createElement(TableBody, null)), isBuiltIn && rows.length === 0 && /*#__PURE__*/React.createElement(ListEmptyState, {
    message: t("emptyMappers"),
    instructions: t("emptyBuiltInMappersInstructions")
  }));
};