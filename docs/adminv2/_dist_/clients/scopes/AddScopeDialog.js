import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Button, ButtonVariant, Dropdown, DropdownToggle, Modal, ModalVariant, DropdownDirection } from "../../../web_modules/@patternfly/react-core.js";
import { CaretUpIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { Table, TableBody, TableHeader, TableVariant } from "../../../web_modules/@patternfly/react-table.js";
import { clientScopeTypesDropdown } from "./ClientScopeTypes.js";
export const AddScopeDialog = ({
  clientScopes,
  open,
  toggleDialog,
  onAdd
}) => {
  const {
    t
  } = useTranslation("clients");
  const [addToggle, setAddToggle] = useState(false);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(clientScopes.map(scope => {
      return {
        selected: false,
        scope,
        cells: [scope.name, scope.description]
      };
    }));
  }, [clientScopes]);

  const action = scope => {
    const scopes = rows.filter(row => row.selected).map(row => {
      return {
        scope: row.scope,
        type: scope
      };
    });
    onAdd(scopes);
    setAddToggle(false);
    toggleDialog();
  };

  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.medium,
    title: t("addClientScopesTo", {
      clientId: "test"
    }),
    isOpen: open,
    onClose: toggleDialog,
    actions: [/*#__PURE__*/React.createElement(Dropdown, {
      id: "add-dropdown",
      key: "add-dropdown",
      direction: DropdownDirection.up,
      isOpen: addToggle,
      toggle: /*#__PURE__*/React.createElement(DropdownToggle, {
        onToggle: () => setAddToggle(!addToggle),
        isPrimary: true,
        toggleIndicator: CaretUpIcon,
        id: "add-scope-toggle"
      }, t("common:add")),
      dropdownItems: clientScopeTypesDropdown(t, action)
    }), /*#__PURE__*/React.createElement(Button, {
      id: "modal-cancel",
      key: "cancel",
      variant: ButtonVariant.secondary,
      onClick: () => {
        setRows(rows.map(row => {
          row.selected = false;
          return row;
        }));
        toggleDialog();
      }
    }, t("common:cancel"))]
  }, /*#__PURE__*/React.createElement(Table, {
    variant: TableVariant.compact,
    cells: [t("common:name"), t("common:description")],
    onSelect: (_, isSelected, rowIndex) => {
      if (rowIndex === -1) {
        setRows(rows.map(row => {
          row.selected = isSelected;
          return row;
        }));
      } else {
        rows[rowIndex].selected = isSelected;
        setRows([...rows]);
      }
    },
    rows: rows,
    "aria-label": t("chooseAMapperType")
  }, /*#__PURE__*/React.createElement(TableHeader, null), /*#__PURE__*/React.createElement(TableBody, null)));
};