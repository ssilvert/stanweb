import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { Table, TableBody, TableHeader, TableVariant } from "../../../web_modules/@patternfly/react-table.js";
import { Spinner } from "../../../web_modules/@patternfly/react-core.js";
import _ from "../../../web_modules/lodash.js";
import { PaginatingTableToolbar } from "./PaginatingTableToolbar.js";
import { asyncStateFetch } from "../../context/auth/AdminClient.js";
import { ListEmptyState } from "../list-empty-state/ListEmptyState.js";

function DataTable({
  columns,
  rows,
  actions,
  actionResolver,
  ariaLabelKey,
  onSelect,
  canSelectAll
}) {
  const {
    t
  } = useTranslation();
  return /*#__PURE__*/React.createElement(Table, {
    variant: TableVariant.compact,
    onSelect: onSelect ? (_, isSelected, rowIndex) => onSelect(isSelected, rowIndex) : undefined,
    canSelectAll: canSelectAll,
    cells: columns.map(column => {
      return { ...column,
        title: t(column.displayKey || column.name),
        transforms: column.transforms
      };
    }),
    rows: rows,
    actions: actions,
    actionResolver: actionResolver,
    "aria-label": t(ariaLabelKey)
  }, /*#__PURE__*/React.createElement(TableHeader, null), /*#__PURE__*/React.createElement(TableBody, null));
}

/**
 * A generic component that can be used to show the initial list most sections have. Takes care of the loading of the date and filtering.
 * All you have to define is how the columns are displayed.
 * @example
 *   <KeycloakDataTable columns={[
 *     {
 *        name: "clientId", //name of the field from the array of object the loader returns to display in this column
 *        displayKey: "clients:clientID", //i18n key to use to lookup the name of the column header
 *        cellRenderer: ClientDetailLink, //optionally you can use a component to render the column when you don't want just the content of the field, the whole row / entire object is passed in.
 *     }
 *   ]}
 * @param {DataListProps} props - The properties.
 * @param {string} props.ariaLabelKey - The aria label key i18n key to lookup the label
 * @param {string} props.searchPlaceholderKey - The i18n key to lookup the placeholder for the search box
 * @param {boolean} props.isPaginated - if true the the loader will be called with first, max and search and a pager will be added in the header
 * @param {(first?: number, max?: number, search?: string) => Promise<T[]>} props.loader - loader function that will fetch the data to display first, max and search are only applicable when isPaginated = true
 * @param {Field<T>} props.columns - definition of the columns
 * @param {Action[]} props.actions - the actions that appear on the row
 * @param {IActionsResolver} props.actionResolver Resolver for the given action
 * @param {ReactNode} props.toolbarItem - Toolbar items that appear on the top of the table {@link ToolbarItem}
 * @param {ReactNode} props.emptyState - ReactNode show when the list is empty could be any component but best to use {@link ListEmptyState}
 */
export function KeycloakDataTable({
  ariaLabelKey,
  searchPlaceholderKey,
  isPaginated = false,
  onSelect,
  canSelectAll = false,
  loader,
  columns,
  actions,
  actionResolver,
  searchTypeComponent,
  toolbarItem,
  emptyState
}) {
  const {
    t
  } = useTranslation();
  const [selected, setSelected] = useState([]);
  const [rows, setRows] = useState();
  const [unPaginatedData, setUnPaginatedData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [loading, setLoading] = useState(false);
  const [max, setMax] = useState(10);
  const [first, setFirst] = useState(0);
  const [search, setSearch] = useState("");
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const handleError = useErrorHandler();
  useEffect(() => {
    return asyncStateFetch(async () => {
      setLoading(true);
      let data = unPaginatedData || (await loader(first, max, search));

      if (!isPaginated) {
        setUnPaginatedData(data);
        data = data.slice(first, first + max);
      }

      return convertToColumns(data);
    }, result => {
      setRows(result);
      setFilteredData(result);
      setLoading(false);
    }, handleError);
  }, [key, first, max, search]);

  const getNodeText = node => {
    if (["string", "number"].includes(typeof node)) {
      return node.toString();
    }

    if (node instanceof Array) {
      return node.map(getNodeText).join("");
    }

    if (typeof node === "object" && node) {
      return getNodeText(node.props.children);
    }

    return "";
  };

  const convertToColumns = data => {
    return data.map(value => {
      return {
        data: value,
        selected: !!selected.find(v => v.id === value.id),
        cells: columns.map(col => {
          if (col.cellRenderer) {
            return col.cellRenderer(value);
          }

          return _.get(value, col.name);
        })
      };
    });
  };

  const filter = search => {
    setFilteredData(convertToColumns(unPaginatedData).filter(row => row.cells.some(cell => cell && getNodeText(cell).toLowerCase().includes(search.toLowerCase()))));
    setSearch;
  };

  const convertAction = () => actions && _.cloneDeep(actions).map((action, index) => {
    delete action.onRowClick;

    action.onClick = async (_, rowIndex) => {
      const result = await actions[index].onRowClick((filteredData || rows)[rowIndex].data);

      if (result) {
        refresh();
      }
    };

    return action;
  });

  const Loading = () => /*#__PURE__*/React.createElement("div", {
    className: "pf-u-text-align-center"
  }, /*#__PURE__*/React.createElement(Spinner, null));

  const _onSelect = (isSelected, rowIndex) => {
    if (rowIndex === -1) {
      setRows(rows.map(row => {
        row.selected = isSelected;
        return row;
      }));
    } else {
      rows[rowIndex].selected = isSelected;
      setRows([...rows]);
    }

    const difference = _.differenceBy(selected, rows.map(row => row.data), "id");

    const selectedRows = [...difference, ...rows.filter(row => row.selected).map(row => row.data)];
    setSelected(selectedRows);
    onSelect(selectedRows);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, rows && /*#__PURE__*/React.createElement(PaginatingTableToolbar, {
    count: rows.length,
    first: first,
    max: max,
    onNextClick: setFirst,
    onPreviousClick: setFirst,
    onPerPageSelect: (first, max) => {
      setFirst(first);
      setMax(max);
    },
    inputGroupName: searchPlaceholderKey ? `${ariaLabelKey}input` : undefined,
    inputGroupOnEnter: isPaginated ? setSearch : search => filter(search),
    inputGroupPlaceholder: t(searchPlaceholderKey || ""),
    searchTypeComponent: searchTypeComponent,
    toolbarItem: toolbarItem
  }, !loading && (filteredData || rows).length > 0 && /*#__PURE__*/React.createElement(DataTable, {
    canSelectAll: canSelectAll,
    onSelect: onSelect ? _onSelect : undefined,
    actions: convertAction(),
    actionResolver: actionResolver,
    rows: filteredData || rows,
    columns: columns,
    ariaLabelKey: ariaLabelKey
  }), !loading && rows.length === 0 && search !== "" && /*#__PURE__*/React.createElement(ListEmptyState, {
    hasIcon: true,
    isSearchVariant: true,
    message: t("noSearchResults"),
    instructions: t("noSearchResultsInstructions")
  }), loading && /*#__PURE__*/React.createElement(Loading, null)), /*#__PURE__*/React.createElement(React.Fragment, null, !loading && rows?.length === 0 && search === "" && emptyState));
}