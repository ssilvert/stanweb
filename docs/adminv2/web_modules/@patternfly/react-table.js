import { c as createIcon, _ as __rest, C as CheckIcon } from '../common/check-icon-f0a4273c.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-2c0027bd.js';
import { r as react } from '../common/index-9e3d5f03.js';
import '../common/index-ceff71b8.js';
import { u as useOUIAProps, c as css, T as Tooltip, B as Button, J as Popover, S as StarIcon, k as checkStyles, L as Dropdown, M as KebabToggle, g as DropdownSeparator, C as DropdownItem, N as DropdownPosition, G as DropdownDirection, A as AngleDownIcon, i as debounce, d as TimesIcon, n as getDefaultOUIAId } from '../common/Popover-14a1b2c4.js';
import { H as HelpIcon } from '../common/help-icon-7cfb9ac1.js';
import { e as eq_1, _ as _baseAssignValue, a as _root, b as _Uint8Array, i as isObject_1, c as _isPrototype, d as _getPrototype, f as isObjectLike_1, g as isArrayLike_1, h as _assignValue, j as _arrayLikeKeys, k as isBuffer_1, l as isTypedArray_1, m as isArray_1, n as isPlainObject_1, o as isArguments_1, p as isFunction_1, q as _baseFor, r as _Stack, s as _setToString, t as _overRest, u as identity_1, v as _isIndex, w as _baseIsEqual } from '../common/_baseIsEqual-3d405921.js';

const ArrowsAltVIconConfig = {
  name: 'ArrowsAltVIcon',
  height: 512,
  width: 256,
  svgPath: 'M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z',
  yOffset: 0,
  xOffset: 0,
};

const ArrowsAltVIcon = createIcon(ArrowsAltVIconConfig);

const LongArrowAltDownIconConfig = {
  name: 'LongArrowAltDownIcon',
  height: 512,
  width: 256,
  svgPath: 'M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z',
  yOffset: 0,
  xOffset: 0,
};

const LongArrowAltDownIcon = createIcon(LongArrowAltDownIconConfig);

const LongArrowAltUpIconConfig = {
  name: 'LongArrowAltUpIcon',
  height: 512,
  width: 256,
  svgPath: 'M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z',
  yOffset: 0,
  xOffset: 0,
};

const LongArrowAltUpIcon = createIcon(LongArrowAltUpIconConfig);

const PencilAltIconConfig = {
  name: 'PencilAltIcon',
  height: 512,
  width: 512,
  svgPath: 'M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z',
  yOffset: 0,
  xOffset: 0,
};

const PencilAltIcon = createIcon(PencilAltIconConfig);

var inlineEdit = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "inlineEdit": "pf-c-inline-edit",
  "inlineEditAction": "pf-c-inline-edit__action",
  "inlineEditGroup": "pf-c-inline-edit__group",
  "inlineEditInput": "pf-c-inline-edit__input",
  "inlineEditLabel": "pf-c-inline-edit__label",
  "inlineEditValue": "pf-c-inline-edit__value",
  "modifiers": {
    "iconGroup": "pf-m-icon-group",
    "footer": "pf-m-footer",
    "column": "pf-m-column",
    "valid": "pf-m-valid",
    "plain": "pf-m-plain",
    "actionGroup": "pf-m-action-group",
    "enableEditable": "pf-m-enable-editable",
    "inlineEditable": "pf-m-inline-editable",
    "enable": "pf-m-enable",
    "bold": "pf-m-bold"
  }
};
});

var inlineStyles = /*@__PURE__*/getDefaultExportFromCjs(inlineEdit);

var table = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "modifiers": {
    "hidden": "pf-m-hidden",
    "hiddenOnSm": "pf-m-hidden-on-sm",
    "visibleOnSm": "pf-m-visible-on-sm",
    "hiddenOnMd": "pf-m-hidden-on-md",
    "visibleOnMd": "pf-m-visible-on-md",
    "hiddenOnLg": "pf-m-hidden-on-lg",
    "visibleOnLg": "pf-m-visible-on-lg",
    "hiddenOnXl": "pf-m-hidden-on-xl",
    "visibleOnXl": "pf-m-visible-on-xl",
    "hiddenOn_2xl": "pf-m-hidden-on-2xl",
    "visibleOn_2xl": "pf-m-visible-on-2xl",
    "fixed": "pf-m-fixed",
    "stickyHeader": "pf-m-sticky-header",
    "center": "pf-m-center",
    "help": "pf-m-help",
    "favorite": "pf-m-favorite",
    "truncate": "pf-m-truncate",
    "wrap": "pf-m-wrap",
    "nowrap": "pf-m-nowrap",
    "fitContent": "pf-m-fit-content",
    "breakWord": "pf-m-break-word",
    "noBorderRows": "pf-m-no-border-rows",
    "expanded": "pf-m-expanded",
    "hoverable": "pf-m-hoverable",
    "selected": "pf-m-selected",
    "favorited": "pf-m-favorited",
    "noPadding": "pf-m-no-padding",
    "compact": "pf-m-compact",
    "width_10": "pf-m-width-10",
    "width_15": "pf-m-width-15",
    "width_20": "pf-m-width-20",
    "width_25": "pf-m-width-25",
    "width_30": "pf-m-width-30",
    "width_35": "pf-m-width-35",
    "width_40": "pf-m-width-40",
    "width_45": "pf-m-width-45",
    "width_50": "pf-m-width-50",
    "width_60": "pf-m-width-60",
    "width_70": "pf-m-width-70",
    "width_80": "pf-m-width-80",
    "width_90": "pf-m-width-90",
    "width_100": "pf-m-width-100"
  },
  "table": "pf-c-table",
  "tableAction": "pf-c-table__action",
  "tableButton": "pf-c-table__button",
  "tableButtonContent": "pf-c-table__button-content",
  "tableCheck": "pf-c-table__check",
  "tableColumnHelp": "pf-c-table__column-help",
  "tableColumnHelpAction": "pf-c-table__column-help-action",
  "tableCompoundExpansionToggle": "pf-c-table__compound-expansion-toggle",
  "tableControlRow": "pf-c-table__control-row",
  "tableExpandableRow": "pf-c-table__expandable-row",
  "tableExpandableRowContent": "pf-c-table__expandable-row-content",
  "tableFavorite": "pf-c-table__favorite",
  "tableIcon": "pf-c-table__icon",
  "tableIconInline": "pf-c-table__icon-inline",
  "tableInlineEditAction": "pf-c-table__inline-edit-action",
  "tableSort": "pf-c-table__sort",
  "tableSortIndicator": "pf-c-table__sort-indicator",
  "tableText": "pf-c-table__text",
  "tableToggle": "pf-c-table__toggle",
  "tableToggleIcon": "pf-c-table__toggle-icon"
};
});

var styles = /*@__PURE__*/getDefaultExportFromCjs(table);

var tableGrid = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "modifiers": {
    "grid": "pf-m-grid",
    "compact": "pf-m-compact",
    "expanded": "pf-m-expanded",
    "selected": "pf-m-selected",
    "noPadding": "pf-m-no-padding",
    "hoverable": "pf-m-hoverable",
    "nowrap": "pf-m-nowrap",
    "fitContent": "pf-m-fit-content",
    "truncate": "pf-m-truncate",
    "gridMd": "pf-m-grid-md",
    "gridLg": "pf-m-grid-lg",
    "gridXl": "pf-m-grid-xl",
    "grid_2xl": "pf-m-grid-2xl"
  },
  "table": "pf-c-table",
  "tableAction": "pf-c-table__action",
  "tableButton": "pf-c-table__button",
  "tableCheck": "pf-c-table__check",
  "tableCompoundExpansionToggle": "pf-c-table__compound-expansion-toggle",
  "tableExpandableRow": "pf-c-table__expandable-row",
  "tableExpandableRowContent": "pf-c-table__expandable-row-content",
  "tableFavorite": "pf-c-table__favorite",
  "tableIcon": "pf-c-table__icon",
  "tableInlineEditAction": "pf-c-table__inline-edit-action",
  "tableText": "pf-c-table__text",
  "tableToggle": "pf-c-table__toggle",
  "tableToggleIcon": "pf-c-table__toggle-icon"
};
});

var stylesGrid = /*@__PURE__*/getDefaultExportFromCjs(tableGrid);

const hasCompoundParentsExpanded = (parentId, compoundParent, rows) => {
    // max rows.length parents
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const i of rows) {
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].cells[compoundParent].props.isOpen;
        }
    }
    return false;
};
const hasParentsExpanded = (parentId, rows) => {
    // max rows.length parents
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const i of rows) {
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].isOpen;
        }
    }
    return false;
};
const isRowExpanded = (row, rows) => {
    if (row.parent !== undefined) {
        if (row.hasOwnProperty('compoundParent')) {
            return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
        }
        return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
    }
    return undefined;
};
const camelize = (s) => s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
const toCamel = (s) => s.replace(/([-_][a-z])/gi, camelize);
/**
 * @param {string} input - String to capitalize
 */
function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
}

var TableGridBreakpoint;
(function (TableGridBreakpoint) {
    TableGridBreakpoint["none"] = "";
    TableGridBreakpoint["grid"] = "grid";
    TableGridBreakpoint["gridMd"] = "grid-md";
    TableGridBreakpoint["gridLg"] = "grid-lg";
    TableGridBreakpoint["gridXl"] = "grid-xl";
    TableGridBreakpoint["grid2xl"] = "grid-2xl";
})(TableGridBreakpoint || (TableGridBreakpoint = {}));
var TableVariant;
(function (TableVariant) {
    TableVariant["compact"] = "compact";
})(TableVariant || (TableVariant = {}));

const TableComposableBase = (_a) => {
    var _b;
    var { children, className, variant, borders = true, isStickyHeader = false, gridBreakPoint = TableGridBreakpoint.gridMd, 'aria-label': ariaLabel, role = 'grid', innerRef, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", "variant", "borders", "isStickyHeader", "gridBreakPoint", 'aria-label', "role", "innerRef", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps('Table', ouiaId, ouiaSafe);
    return (react.createElement("table", Object.assign({ "aria-label": ariaLabel, role: role, className: css(className, styles.table, (_b = stylesGrid.modifiers) === null || _b === void 0 ? void 0 : _b[toCamel(gridBreakPoint || '').replace(/-?2xl/, '_2xl')], styles.modifiers[variant], !borders && styles.modifiers.noBorderRows, isStickyHeader && styles.modifiers.stickyHeader), ref: innerRef }, ouiaProps, props), children));
};
const TableComposable = react.forwardRef((props, ref) => (react.createElement(TableComposableBase, Object.assign({}, props, { innerRef: ref }))));
TableComposable.displayName = 'TableComposable';

const TheadBase = (_a) => {
    var { children, className, noWrap = false, innerRef } = _a, props = __rest(_a, ["children", "className", "noWrap", "innerRef"]);
    return (react.createElement("thead", Object.assign({ className: css(className, noWrap && styles.modifiers.nowrap), ref: innerRef }, props), children));
};
const Thead = react.forwardRef((props, ref) => (react.createElement(TheadBase, Object.assign({}, props, { innerRef: ref }))));
Thead.displayName = 'Thead';

const TbodyBase = (_a) => {
    var { children, className, isExpanded, innerRef } = _a, props = __rest(_a, ["children", "className", "isExpanded", "innerRef"]);
    return (react.createElement("tbody", Object.assign({ role: "rowgroup", className: css(className, isExpanded && styles.modifiers.expanded), ref: innerRef }, props), children));
};
const Tbody = react.forwardRef((props, ref) => (react.createElement(TbodyBase, Object.assign({}, props, { innerRef: ref }))));
Tbody.displayName = 'Tbody';

const TrBase = (_a) => {
    var { children, className, isExpanded, isEditable, innerRef, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", "isExpanded", "isEditable", "innerRef", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
    return (react.createElement("tr", Object.assign({ className: css(className, isExpanded !== undefined && styles.tableExpandableRow, isExpanded && styles.modifiers.expanded, isEditable && inlineStyles.modifiers.inlineEditable), hidden: isExpanded !== undefined && !isExpanded, ref: innerRef }, ouiaProps, props), children));
};
const Tr = react.forwardRef((props, ref) => (react.createElement(TrBase, Object.assign({}, props, { innerRef: ref }))));
Tr.displayName = 'Tr';

var TableTextVariant;
(function (TableTextVariant) {
    TableTextVariant["div"] = "div";
    TableTextVariant["nav"] = "nav";
})(TableTextVariant || (TableTextVariant = {}));
var WrapModifier;
(function (WrapModifier) {
    WrapModifier["wrap"] = "wrap";
    WrapModifier["nowrap"] = "nowrap";
    WrapModifier["truncate"] = "truncate";
    WrapModifier["breakWord"] = "breakWord";
    WrapModifier["fitContent"] = "fitContent";
})(WrapModifier || (WrapModifier = {}));
const TableText = (_a) => {
    var { children = null, className = '', variant = 'span', wrapModifier = null, tooltip: tooltipProp = '', onMouseEnter: onMouseEnterProp = () => { } } = _a, props = __rest(_a, ["children", "className", "variant", "wrapModifier", "tooltip", "onMouseEnter"]);
    const Component = variant;
    const [tooltip, setTooltip] = react.useState('');
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            setTooltip(tooltipProp || event.target.innerHTML);
        }
        else {
            setTooltip('');
        }
        onMouseEnterProp(event);
    };
    const text = (react.createElement(Component, Object.assign({ onMouseEnter: onMouseEnter, className: css(className, wrapModifier && styles.modifiers[wrapModifier], styles.tableText) }, props), children));
    return tooltip !== '' ? (react.createElement(Tooltip, { content: tooltip, isVisible: true }, text)) : (text);
};
TableText.displayName = 'TableText';

const HeaderCellInfoWrapper = ({ children, info, className, variant = 'tooltip', popoverProps, tooltipProps, ariaLabel }) => (react.createElement("div", { className: css(styles.tableColumnHelp, className) },
    typeof children === 'string' ? react.createElement(TableText, null, children) : children,
    react.createElement("span", { className: css(styles.tableColumnHelpAction) }, variant === 'tooltip' ? (react.createElement(Tooltip, Object.assign({ content: info }, tooltipProps),
        react.createElement(Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            react.createElement(HelpIcon, { noVerticalAlign: true })))) : (react.createElement(Popover, Object.assign({ bodyContent: info }, popoverProps),
        react.createElement(Button, { variant: "plain", "aria-label": ariaLabel || (typeof info === 'string' && info) || 'More info' },
            react.createElement(HelpIcon, { noVerticalAlign: true })))))));
HeaderCellInfoWrapper.displayName = 'HeaderCellInfoWrapper';

const info = ({ tooltip, tooltipProps, popover, popoverProps, className, ariaLabel }) => {
    const infoObj = (value) => ({
        className: styles.modifiers.help,
        children: tooltip ? (react.createElement(HeaderCellInfoWrapper, { variant: "tooltip", info: tooltip, tooltipProps: tooltipProps, ariaLabel: ariaLabel, className: className }, value)) : (react.createElement(HeaderCellInfoWrapper, { variant: "popover", info: popover, popoverProps: popoverProps, ariaLabel: ariaLabel, className: className }, value))
    });
    return infoObj;
};

var SortByDirection;
(function (SortByDirection) {
    SortByDirection["asc"] = "asc";
    SortByDirection["desc"] = "desc";
})(SortByDirection || (SortByDirection = {}));
const SortColumn = (_a) => {
    var { children = null, className = '', isSortedBy = false, onSort = null, sortDirection = '', type = 'button' } = _a, props = __rest(_a, ["children", "className", "isSortedBy", "onSort", "sortDirection", "type"]);
    let SortedByIcon;
    if (isSortedBy) {
        SortedByIcon = sortDirection === SortByDirection.asc ? LongArrowAltUpIcon : LongArrowAltDownIcon;
    }
    else {
        SortedByIcon = ArrowsAltVIcon;
    }
    return (react.createElement("button", Object.assign({}, props, { type: type, className: css(className, styles.tableButton), onClick: event => onSort && onSort(event) }),
        react.createElement("div", { className: css(className, styles.tableButtonContent) },
            react.createElement(TableText, null, children),
            react.createElement("span", { className: css(styles.tableSortIndicator) },
                react.createElement(SortedByIcon, null)))));
};
SortColumn.displayName = 'SortColumn';

const sortableFavorites = (sort) => () => sortable(react.createElement(StarIcon, { "aria-hidden": true }), {
    columnIndex: sort.columnIndex,
    className: styles.modifiers.favorite,
    ariaLabel: 'Sort favorites',
    column: {
        extraParams: {
            sortBy: sort.sortBy,
            onSort: sort === null || sort === void 0 ? void 0 : sort.onSort
        }
    }
});
const sortable = (label, { columnIndex, column, property, className, ariaLabel }) => {
    const { extraParams: { sortBy, onSort } } = column;
    const extraData = {
        columnIndex,
        column,
        property
    };
    const isSortedBy = sortBy && columnIndex === sortBy.index;
    /**
     * @param {React.MouseEvent} event - React mouse event
     */
    function sortClicked(event) {
        let reversedDirection;
        if (!isSortedBy) {
            reversedDirection = SortByDirection.asc;
        }
        else {
            reversedDirection = sortBy.direction === SortByDirection.asc ? SortByDirection.desc : SortByDirection.asc;
        }
        // tslint:disable-next-line:no-unused-expression
        onSort && onSort(event, columnIndex, reversedDirection, extraData);
    }
    return {
        className: css(styles.tableSort, isSortedBy && styles.modifiers.selected, className),
        'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
        children: (react.createElement(SortColumn, { isSortedBy: isSortedBy, sortDirection: isSortedBy ? sortBy.direction : '', onSort: sortClicked, "aria-label": ariaLabel }, label))
    };
};

var RowSelectVariant;
(function (RowSelectVariant) {
    RowSelectVariant["radio"] = "radio";
    RowSelectVariant["checkbox"] = "checkbox";
})(RowSelectVariant || (RowSelectVariant = {}));
const SelectColumn = (_a) => {
    var { children = null, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className, onSelect = null, selectVariant } = _a, props = __rest(_a, ["children", "className", "onSelect", "selectVariant"]);
    return (react.createElement(react.Fragment, null,
        react.createElement("input", Object.assign({}, props, { type: selectVariant, onChange: onSelect })),
        children));
};
SelectColumn.displayName = 'SelectColumn';

const selectable = (label, { rowIndex, columnIndex, rowData, column, property }) => {
    const { extraParams: { onSelect, selectVariant, allRowsSelected } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect && !rowData.fullWidth) {
        return {
            component: 'td',
            isVisible: true
        };
    }
    const rowId = rowIndex !== undefined ? rowIndex : -1;
    /**
     * @param {React.FormEvent} event - React form event
     */
    function selectClick(event) {
        const selected = rowIndex === undefined ? event.currentTarget.checked : rowData && !rowData.selected;
        // tslint:disable-next-line:no-unused-expression
        onSelect && onSelect(event, selected, rowId, rowData, extraData);
    }
    const customProps = Object.assign(Object.assign({}, (rowId !== -1
        ? {
            checked: rowData && !!rowData.selected,
            'aria-label': `Select row ${rowIndex}`
        }
        : {
            checked: allRowsSelected,
            'aria-label': 'Select all rows'
        })), (rowData &&
        (rowData.disableCheckbox || rowData.disableSelection) && {
        disabled: true,
        className: checkStyles.checkInput
    }));
    let selectName = 'check-all';
    if (rowId !== -1 && selectVariant === RowSelectVariant.checkbox) {
        selectName = `checkrow${rowIndex}`;
    }
    else if (rowId !== -1) {
        selectName = 'radioGroup';
    }
    return {
        className: css(styles.tableCheck),
        component: 'td',
        isVisible: !rowData || !rowData.fullWidth,
        children: (react.createElement(SelectColumn, Object.assign({}, customProps, { selectVariant: selectVariant, onSelect: selectClick, name: selectName }), label))
    };
};

const cellWidth = (width) => () => ({
    className: css(styles.modifiers[typeof width === 'number' ? `width_${width}` : `width${capitalize(width)}`])
});

const visibilityModifiers = [
    'hidden',
    'hiddenOnSm',
    'hiddenOnMd',
    'hiddenOnLg',
    'hiddenOnXl',
    'hiddenOn_2xl',
    'visibleOnSm',
    'visibleOnMd',
    'visibleOnLg',
    'visibleOnXl',
    'visibleOn_2xl'
];
const Visibility = visibilityModifiers
    .filter(key => styles.modifiers[key])
    .reduce((acc, curr) => {
    const key2 = curr.replace('_2xl', '2Xl');
    acc[key2] = styles.modifiers[curr];
    return acc;
}, {});
const classNames = (...classes) => () => ({
    className: css(...classes)
});

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
  _baseMerge(object, source, srcIndex, customizer);
});

var mergeWith_1 = mergeWith;

/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
/**
 * @param {any} props - Props
 */
function mergeProps(...props) {
    const firstProps = props[0];
    const restProps = props.slice(1);
    if (!restProps.length) {
        return mergeWith_1({}, firstProps);
    }
    // Avoid mutating the first prop collection
    return mergeWith_1(mergeWith_1({}, firstProps), ...restProps, (a, b, key) => {
        if (key === 'children') {
            if (a && b) {
                // compose the two
                return react.cloneElement(a, {
                    children: b
                });
            }
            // Children have to be merged in reverse order for Reactabular
            // logic to work.
            return Object.assign(Object.assign({}, b), a);
        }
        if (key === 'className') {
            // Process class names through classNames to merge properly
            // as a string.
            return css(a, b);
        }
        return undefined;
    });
}

const ThBase = (_a) => {
    var { children, className, component = 'th', dataLabel, scope = 'col', textCenter = false, sort = null, modifier, select = null, tooltip = '', onMouseEnter: onMouseEnterProp = () => { }, width, visibility, innerRef, info: infoProps } = _a, props = __rest(_a, ["children", "className", "component", "dataLabel", "scope", "textCenter", "sort", "modifier", "select", "tooltip", "onMouseEnter", "width", "visibility", "innerRef", "info"]);
    const [showTooltip, setShowTooltip] = react.useState(false);
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            !showTooltip && setShowTooltip(true);
        }
        else {
            showTooltip && setShowTooltip(false);
        }
        onMouseEnterProp(event);
    };
    let sortParams = null;
    if (sort) {
        if (sort.isFavorites) {
            sortParams = sortableFavorites({
                onSort: sort === null || sort === void 0 ? void 0 : sort.onSort,
                columnIndex: sort.columnIndex,
                sortBy: sort.sortBy
            })();
        }
        else {
            sortParams = sortable(children, {
                columnIndex: sort.columnIndex,
                column: {
                    extraParams: {
                        sortBy: sort.sortBy,
                        onSort: sort === null || sort === void 0 ? void 0 : sort.onSort
                    }
                }
            });
        }
    }
    const selectParams = select
        ? selectable(children, {
            column: {
                extraParams: {
                    onSelect: select === null || select === void 0 ? void 0 : select.onSelect,
                    selectVariant: 'checkbox',
                    allRowsSelected: select.isSelected
                }
            }
        })
        : null;
    const widthParams = width ? cellWidth(width)() : null;
    const visibilityParams = visibility
        ? classNames(...visibility.map((vis) => Visibility[vis]))()
        : null;
    let transformedChildren = (sortParams === null || sortParams === void 0 ? void 0 : sortParams.children) || (selectParams === null || selectParams === void 0 ? void 0 : selectParams.children) || children;
    // info can wrap other transformedChildren
    let infoParams = null;
    if (infoProps) {
        infoParams = info(infoProps)(transformedChildren);
        transformedChildren = infoParams.children;
    }
    const merged = mergeProps(sortParams, selectParams, widthParams, visibilityParams, infoParams);
    const { 
    // ignore the merged children since we transform them ourselves so we can wrap it with info
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: mergedChildren = null, 
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null, className: mergedClassName = '', component: MergedComponent = component } = merged, mergedProps = __rest(merged, ["children", "isVisible", "className", "component"]);
    const cell = (react.createElement(MergedComponent, Object.assign({ "data-label": dataLabel, onMouseEnter: tooltip !== null ? onMouseEnter : onMouseEnterProp, scope: component === 'th' && children ? scope : null, ref: innerRef, className: css(className, textCenter && styles.modifiers.center, modifier && styles.modifiers[modifier], mergedClassName) }, mergedProps, props), transformedChildren));
    const canDefault = tooltip === '' ? typeof children === 'string' : true;
    return tooltip !== null && canDefault && showTooltip ? (react.createElement(Tooltip, { content: tooltip || (tooltip === '' && children), isVisible: true }, cell)) : (cell);
};
const Th = react.forwardRef((props, ref) => (react.createElement(ThBase, Object.assign({}, props, { innerRef: ref }))));
Th.displayName = 'Th';

class ActionsColumn extends react.Component {
    constructor(props) {
        super(props);
        this.onToggle = (isOpen) => {
            this.setState({
                isOpen
            });
        };
        this.onSelect = (event, onClick) => {
            const { rowData, extraData } = this.props;
            // Only prevent default if onClick is provided.  This allows href support.
            if (onClick) {
                event.preventDefault();
                // tslint:disable-next-line:no-unused-expression
                onClick(event, extraData && extraData.rowIndex, rowData, extraData);
            }
            this.setState(prevState => ({
                isOpen: !prevState.isOpen
            }));
        };
        this.state = {
            isOpen: false
        };
    }
    render() {
        const { isOpen } = this.state;
        const { items, children, dropdownPosition, dropdownDirection, isDisabled, rowData } = this.props;
        return (react.createElement(react.Fragment, null,
            react.createElement(Dropdown, Object.assign({ toggle: react.createElement(KebabToggle, { isDisabled: isDisabled, onToggle: this.onToggle }), position: dropdownPosition, direction: dropdownDirection, isOpen: isOpen, dropdownItems: items.map((_a, key) => {
                    var { title, itemKey, onClick, isSeparator } = _a, props = __rest(_a, ["title", "itemKey", "onClick", "isSeparator"]);
                    return isSeparator ? (react.createElement(DropdownSeparator, Object.assign({}, props, { key: itemKey || key, "data-key": itemKey || key }))) : (react.createElement(DropdownItem, Object.assign({ component: "button", onClick: event => this.onSelect(event, onClick) }, props, { key: itemKey || key, "data-key": itemKey || key }), title));
                }), isPlain: true }, (rowData && rowData.actionProps))),
            children));
    }
}
ActionsColumn.displayName = 'ActionsColumn';
ActionsColumn.defaultProps = {
    children: null,
    items: [],
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    rowData: {},
    extraData: {}
};

const resolveOrDefault = (resolver, defaultValue, rowData, extraData) => (typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue);
const cellActions = (actions, actionResolver, areActionsDisabled) => (label, { rowData, column, rowIndex, columnIndex, column: { extraParams: { dropdownPosition, dropdownDirection } }, property }) => {
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    const resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
    const renderProps = resolvedActions && resolvedActions.length > 0
        ? {
            children: (react.createElement(ActionsColumn, { items: resolvedActions, dropdownPosition: dropdownPosition, dropdownDirection: dropdownDirection, isDisabled: resolvedIsDisabled, rowData: rowData, extraData: extraData }, label))
        }
        : {};
    return Object.assign({ className: css(styles.tableAction), isVisible: true }, renderProps);
};

const CollapseColumn = (_a) => {
    var { className = '', children = null, isOpen, onToggle } = _a, props = __rest(_a, ["className", "children", "isOpen", "onToggle"]);
    return (react.createElement(react.Fragment, null,
        isOpen !== undefined && (react.createElement(Button, Object.assign({ className: css(className, isOpen && styles.modifiers.expanded) }, props, { variant: "plain", "aria-label": "Details", onClick: onToggle, "aria-expanded": isOpen }),
            react.createElement("div", { className: css(styles.tableToggleIcon) },
                react.createElement(AngleDownIcon, null)))),
        children));
};
CollapseColumn.displayName = 'CollapseColumn';

const collapsible = (value, { rowIndex, columnIndex, rowData, column, property }) => {
    const { extraParams: { onCollapse, rowLabeledBy = 'simple-node', expandId = 'expand-toggle' } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    /**
     * @param {React.MouseEvent} event - Mouse event
     */
    function onToggle(event) {
        // tslint:disable-next-line:no-unused-expression
        onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
    }
    return {
        className: rowData.isOpen !== undefined && css(styles.tableToggle),
        isVisible: !rowData.fullWidth,
        children: (react.createElement(CollapseColumn, { "aria-labelledby": `${rowLabeledBy}${rowIndex} ${expandId}${rowIndex}`, onToggle: onToggle, id: expandId + rowIndex, isOpen: rowData && rowData.isOpen }, value))
    };
};
const expandedRow = (colSpan) => {
    const expandedRowFormatter = (value, { columnIndex, rowIndex, rowData, column: { extraParams: { contentId = 'expanded-content' } } }) => value &&
        rowData.hasOwnProperty('parent') && {
        // todo: rewrite this logic, it is not type safe
        colSpan: !rowData.cells || rowData.cells.length === 1 ? colSpan + !!rowData.fullWidth : 1,
        id: contentId + rowIndex + (columnIndex ? '-' + columnIndex : ''),
        className: rowData.noPadding && css(styles.modifiers.noPadding)
    };
    return expandedRowFormatter;
};

const compoundExpand = (value, { rowIndex, columnIndex, rowData, column, property }) => {
    if (!value) {
        return null;
    }
    const { title, props } = value;
    const { extraParams: { onExpand } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    /**
     * @param {React.MouseEvent} event - Mouse event
     */
    function onToggle(event) {
        // tslint:disable-next-line:no-unused-expression
        onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
    }
    return {
        className: css(styles.tableCompoundExpansionToggle, props.isOpen && styles.modifiers.expanded),
        children: props.isOpen !== undefined && (react.createElement("button", { type: "button", className: css(styles.tableButton), onClick: onToggle, "aria-expanded": props.isOpen, "aria-controls": props.ariaControls },
            react.createElement(TableText, null, title)))
    };
};

const FavoritesCell = (_a) => {
    var { className = '', onFavorite, isFavorited, rowIndex } = _a, props = __rest(_a, ["className", "onFavorite", "isFavorited", "rowIndex"]);
    const ariaProps = rowIndex === undefined
        ? {}
        : {
            id: `favorites-button-${rowIndex}`,
            'aria-labelledby': `favorites-button-${rowIndex}`
        };
    return (react.createElement(Button, Object.assign({ variant: "plain", className: className, type: "button", "aria-label": isFavorited ? 'Starred' : 'Not starred', onClick: onFavorite }, ariaProps, props),
        react.createElement(StarIcon, { "aria-hidden": true })));
};
FavoritesCell.displayName = 'FavoritesCell';

const favoritable = (value, { rowIndex, columnIndex, rowData, column, property }) => {
    const { extraParams: { onFavorite } } = column;
    const extraData = {
        rowIndex,
        columnIndex,
        column,
        property
    };
    // this is a child row which should not display the favorites icon
    if (rowData && rowData.hasOwnProperty('parent') && !rowData.fullWidth) {
        return {
            component: 'td',
            isVisible: true
        };
    }
    /**
     * @param {React.MouseEvent} event - Mouse event
     */
    function favoritesClick(event) {
        // tslint:disable-next-line:no-unused-expression
        onFavorite && onFavorite(event, rowData && !rowData.favorited, rowIndex, rowData, extraData);
    }
    const additionalProps = rowData.favoritesProps || {};
    return {
        className: css(styles.tableFavorite, rowData && rowData.favorited && styles.modifiers.favorited),
        isVisible: !rowData || !rowData.fullWidth,
        children: (react.createElement(FavoritesCell, Object.assign({ rowIndex: rowIndex, onFavorite: favoritesClick, isFavorited: rowData && rowData.favorited }, additionalProps)))
    };
};

const TdBase = (_a) => {
    var { children, className, component = 'td', dataLabel, textCenter = false, modifier, select = null, actions = null, expand = null, compoundExpand: compoundExpandProp = null, noPadding, width, visibility, innerRef, favorites = null } = _a, props = __rest(_a, ["children", "className", "component", "dataLabel", "textCenter", "modifier", "select", "actions", "expand", "compoundExpand", "noPadding", "width", "visibility", "innerRef", "favorites"]);
    const selectParams = select
        ? selectable(children, {
            rowIndex: select.rowIndex,
            rowData: {
                selected: select.isSelected,
                disableSelection: select === null || select === void 0 ? void 0 : select.disable
            },
            column: {
                extraParams: {
                    onSelect: select === null || select === void 0 ? void 0 : select.onSelect,
                    selectVariant: select.variant || 'checkbox'
                }
            }
        })
        : null;
    const favoriteParams = favorites
        ? favoritable(null, {
            rowIndex: favorites === null || favorites === void 0 ? void 0 : favorites.rowIndex,
            rowData: {
                favorited: favorites.isFavorited,
                favoritesProps: favorites === null || favorites === void 0 ? void 0 : favorites.props
            },
            column: {
                extraParams: {
                    onFavorite: favorites === null || favorites === void 0 ? void 0 : favorites.onFavorite
                }
            }
        })
        : null;
    const actionParamsFunc = actions ? cellActions(actions.items, null, null) : null;
    const actionParams = actionParamsFunc
        ? actionParamsFunc(null, {
            rowData: {
                disableActions: actions === null || actions === void 0 ? void 0 : actions.disable
            },
            column: {
                extraParams: {
                    dropdownPosition: actions === null || actions === void 0 ? void 0 : actions.dropdownPosition,
                    dropdownDirection: actions === null || actions === void 0 ? void 0 : actions.dropdownDirection
                }
            }
        })
        : null;
    const expandableParams = expand !== null
        ? collapsible(null, {
            rowIndex: expand.rowIndex,
            columnIndex: expand === null || expand === void 0 ? void 0 : expand.columnIndex,
            rowData: {
                isOpen: expand.isExpanded
            },
            column: {
                extraParams: {
                    onCollapse: expand === null || expand === void 0 ? void 0 : expand.onToggle
                }
            }
        })
        : null;
    const compoundParams = compoundExpandProp !== null
        ? compoundExpand({
            title: children,
            props: {
                isOpen: compoundExpandProp.isExpanded
            }
        }, {
            column: {
                extraParams: {
                    onExpand: compoundExpandProp === null || compoundExpandProp === void 0 ? void 0 : compoundExpandProp.onToggle
                }
            }
        })
        : null;
    const widthParams = width ? cellWidth(width)() : null;
    const visibilityParams = visibility
        ? classNames(...visibility.map((vis) => Visibility[vis]))()
        : null;
    const merged = mergeProps(selectParams, actionParams, expandableParams, compoundParams, widthParams, visibilityParams, favoriteParams);
    const { 
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null, children: mergedChildren = null, className: mergedClassName = '', component: MergedComponent = component } = merged, mergedProps = __rest(merged, ["isVisible", "children", "className", "component"]);
    return (react.createElement(MergedComponent, Object.assign({ "data-label": dataLabel, className: css(className, textCenter && styles.modifiers.center, noPadding && styles.modifiers.noPadding, styles.modifiers[modifier], mergedClassName), ref: innerRef }, mergedProps, props), mergedChildren || children));
};
const Td = react.forwardRef((props, ref) => (react.createElement(TdBase, Object.assign({}, props, { innerRef: ref }))));
Td.displayName = 'Td';

/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
// Table Defaults
const TableDefaults = {
    renderers: {
        table: TableComposable,
        header: {
            wrapper: Thead,
            row: Tr,
            cell: Th
        },
        body: {
            wrapper: Tbody,
            row: Tr,
            cell: Td
        }
    }
};

const ProviderContext = react.createContext({
    columns: null,
    renderers: null
});
class Provider extends react.Component {
    render() {
        const _a = this.props, { columns, renderers, components, children } = _a, props = __rest(_a, ["columns", "renderers", "components", "children"]);
        let finalRenderers = renderers;
        if (components) {
            // eslint-disable-next-line no-console
            console.warn('`components` have been deprecated in favor of `renderers` and will be removed in the next major version, please rename!');
            finalRenderers = components;
        }
        const provider = react.createElement(renderers.table || TableDefaults.renderers.table, props, children);
        return (react.createElement(ProviderContext.Provider, { value: {
                columns,
                renderers: {
                    table: finalRenderers.table || TableDefaults.renderers.table,
                    header: Object.assign(Object.assign({}, TableDefaults.renderers.header), finalRenderers.header),
                    body: Object.assign(Object.assign({}, TableDefaults.renderers.body), finalRenderers.body)
                }
            } }, provider));
    }
}
Provider.displayName = 'Provider';
Provider.defaultProps = {
    renderers: TableDefaults.renderers
};

/**
 * @param {formattersType} formatters - formatters type
 */
function evaluateFormatters(formatters) {
    return (value, extra) => formatters.reduce((parameters, formatter) => ({
        value: formatter(parameters.value, parameters.extra),
        extra
    }), { value, extra }).value;
}

/**
 * evaluate-transforms.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
/**
 * @param {transformsType} transforms - transforms type
 * @param {string | object} value - value
 * @param {ExtraParamsType} extraParameters - extra params type
 */
function evaluateTransforms(transforms = [], value, extraParameters = {}) {
    if (transforms.length === 0) {
        return {};
    }
    return mergeProps(...transforms.map(transform => transform(value, extraParameters)));
}

/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
const HeaderRow = ({ rowData, rowIndex, renderers, onRow = () => Object }) => react.createElement(renderers.row, onRow(rowData, { rowIndex }), rowData.map((column, columnIndex) => {
    const { property, header = {}, props = {} } = column;
    const evaluatedProperty = property || (header && header.property);
    const { label, transforms = [], formatters = [], info = {} } = header;
    const extraParameters = {
        columnIndex,
        property: evaluatedProperty,
        column
    };
    const transformedProps = evaluateTransforms(transforms, label, extraParameters);
    if (!transformedProps) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
    }
    let cellNode;
    const { tooltip, tooltipProps, popover, popoverProps, ariaLabel, className } = info;
    // consumer can specify header cell tooltip/popover in two ways, but the transforms approach is preferred,
    // especially for sorting tables that use `transforms: [sortable]`
    // {
    //   title: 'Repositories',
    //   header: {
    //     info: {
    //       tooltip: 'More information about repositories',
    //       className: 'repositories-info-tip',
    //       tooltipProps: {
    //         isContentLeftAligned: true
    //       }
    //     }
    //   }
    // }
    //
    // {
    //   title: 'Repositories',
    //   transforms: [
    //     info({
    //       tooltip: 'More information about repositories',
    //       className: 'repositories-info-tip',
    //       tooltipProps: {
    //         isContentLeftAligned: true
    //       }
    //     }),
    //     sortable
    //   ]
    // },
    if (tooltip) {
        cellNode = (react.createElement(HeaderCellInfoWrapper, { variant: "tooltip", info: tooltip, tooltipProps: tooltipProps, ariaLabel: ariaLabel, className: className }, transformedProps.children || evaluateFormatters(formatters)(label, extraParameters)));
    }
    else if (popover) {
        cellNode = (react.createElement(HeaderCellInfoWrapper, { variant: "popover", info: popover, popoverProps: popoverProps, ariaLabel: ariaLabel, className: className }, transformedProps.children || evaluateFormatters(formatters)(label, extraParameters)));
    }
    else {
        cellNode = transformedProps.children || evaluateFormatters(formatters)(label, extraParameters);
    }
    return react.createElement(renderers.cell, Object.assign({ key: `${columnIndex}-header` }, mergeProps(props, header && header.props, transformedProps)), cellNode);
}));
HeaderRow.displayName = 'HeaderRow';

class BaseHeader extends react.Component {
    render() {
        const _a = this.props, { children, headerRows, onRow, renderers, columns } = _a, props = __rest(_a, ["children", "headerRows", "onRow", "renderers", "columns"]);
        // If headerRows aren't passed, default to bodyColumns as header rows
        return react.createElement(renderers.header.wrapper, props, [
            (headerRows || [columns]).map((rowData, rowIndex) => react.createElement(HeaderRow, {
                key: `${rowIndex}-header-row`,
                renderers: renderers.header,
                onRow,
                rowData,
                rowIndex
            }))
        ].concat(children));
    }
}
const Header = (props) => (react.createElement(ProviderContext.Consumer, null, ({ columns, renderers }) => react.createElement(BaseHeader, Object.assign({ columns: columns, renderers: renderers }, props))));

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * resolve-row-key.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
/**
 * @param {{rowData: RowType, rowIndex: number, rowKey: RowKeyType}} rowData - row data
 */
function resolveRowKey({ rowData, rowIndex, rowKey }) {
    if (typeof rowKey === 'function') {
        return `${rowKey({ rowData, rowIndex })}-row`;
    }
    if (rowData[rowKey] === 0) {
        return `${rowData[rowKey]}-row`;
    }
    return `${rowData[rowKey] || rowIndex}-row`;
}

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? _baseIsEqual(value, other, undefined, customizer) : !!result;
}

var isEqualWith_1 = isEqualWith;

/**
 * columns-are-equal.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
/**
 * @param {ColumnsType} oldColumns - previous columns
 * @param {ColumnsType} newColumns - new columns
 */
function columnsAreEqual(oldColumns, newColumns) {
    return isEqualWith_1(oldColumns, newColumns, (a, b) => {
        if (typeof a === 'function' && typeof b === 'function') {
            return a === b;
        }
        return undefined;
    });
}

/**
 * body-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
class BodyRow extends react.Component {
    shouldComponentUpdate(nextProps) {
        const { columns, rowData } = this.props;
        // Check for row based override.
        const { renderers } = nextProps;
        if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
            if (typeof renderers.row.shouldComponentUpdate === 'function') {
                return renderers.row.shouldComponentUpdate.call(this, nextProps, {}, {});
            }
            return true;
        }
        return !(columnsAreEqual(columns, nextProps.columns) && isEqual_1(rowData, nextProps.rowData));
    }
    render() {
        const { columns, renderers, onRow, rowKey, rowIndex, rowData } = this.props;
        return react.createElement(renderers.row, onRow(rowData, { rowIndex, rowKey }), columns.map((column, columnIndex) => {
            const { property, cell, props } = column;
            const evaluatedProperty = (property || (cell && cell.property));
            const { transforms = [], formatters = [] } = cell || {};
            const extraParameters = {
                columnIndex,
                property: evaluatedProperty,
                column,
                rowData,
                rowIndex,
                rowKey
            };
            const transformed = evaluateTransforms(transforms, rowData[evaluatedProperty], extraParameters);
            if (!transformed) {
                // eslint-disable-next-line no-console
                console.warn('Table.Body - Failed to receive a transformed result');
            }
            let additionalFormaters = [];
            if (rowData[evaluatedProperty]) {
                additionalFormaters = rowData[evaluatedProperty].formatters;
            }
            return react.createElement(renderers.cell, Object.assign({ key: `col-${columnIndex}-row-${rowIndex}` }, mergeProps(props, cell && cell.props, transformed)), (!rowData.fullWidth && transformed.children) ||
                evaluateFormatters([...formatters, ...additionalFormaters])(rowData[`_${evaluatedProperty}`] || rowData[evaluatedProperty], extraParameters));
        }));
    }
}
BodyRow.displayName = 'BodyRow';
BodyRow.defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRow: (...args) => Object
};

class BaseBody extends react.Component {
    constructor() {
        super(...arguments);
        this.omitOnRow = (props) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const ret = __rest(props, ["onRow"]);
            return ret;
        };
    }
    shouldComponentUpdate(nextProps) {
        // Skip checking props against `onRow` since that can be bound at render().
        // That's not particularly good practice but you never know how the users
        // prefer to define the handler.
        // Check for wrapper based override.
        const { renderers } = nextProps;
        if (renderers &&
            renderers.body &&
            renderers.body.wrapper &&
            renderers.body.wrapper.shouldComponentUpdate) {
            if (typeof renderers.body.wrapper.shouldComponentUpdate === 'function') {
                return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, {}, {});
            }
            return true;
        }
        return !isEqual_1(this.omitOnRow(this.props), this.omitOnRow(nextProps));
    }
    render() {
        const _a = this.props, { onRow, rows, rowKey, columns, renderers } = _a, props = __rest(_a, ["onRow", "rows", "rowKey", "columns", "renderers"]);
        const children = rows.map((rowData, index) => {
            const key = resolveRowKey({ rowData, rowIndex: index, rowKey });
            return react.createElement(BodyRow, {
                key,
                renderers: renderers.body,
                onRow,
                rowKey: key,
                rowIndex: index,
                rowData,
                columns
            });
        });
        return react.createElement(renderers.body.wrapper, props, children);
    }
}
BaseBody.defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRow: (...args) => Object
};
const Body = (props) => (react.createElement(ProviderContext.Consumer, null, ({ columns, renderers }) => react.createElement(BaseBody, Object.assign({ columns: columns, renderers: renderers }, props))));

const BodyCell = (_a) => {
    var { 'data-label': dataLabel = '', className = '', colSpan, component = 'td', isVisible, parentId, textCenter = false, tooltip: tooltipProp = '', onMouseEnter: onMouseEnterProp = () => { }, children, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    errorText, isValid, isOpen, ariaControls, editableValue, editableSelectProps, options, isSelectOpen, value, name } = _a, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    props = __rest(_a, ['data-label', "className", "colSpan", "component", "isVisible", "parentId", "textCenter", "tooltip", "onMouseEnter", "children", "errorText", "isValid", "isOpen", "ariaControls", "editableValue", "editableSelectProps", "options", "isSelectOpen", "value", "name"]);
    const [tooltip, setTooltip] = react.useState('');
    const onMouseEnter = (event) => {
        if (event.target.offsetWidth < event.target.scrollWidth) {
            if (tooltipProp) {
                setTooltip(tooltipProp);
            }
            else if (typeof children === 'string') {
                setTooltip(children);
            }
        }
        else {
            setTooltip('');
        }
        onMouseEnterProp(event);
    };
    const cell = (react.createElement(Td, Object.assign({ className: className, component: component, dataLabel: dataLabel && !parentId ? dataLabel : null, onMouseEnter: onMouseEnter, textCenter: textCenter, colSpan: colSpan }, props), children));
    const bodyCell = tooltip !== '' ? (react.createElement(Tooltip, { content: tooltip, isVisible: true }, cell)) : (cell);
    return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : bodyCell;
};
BodyCell.displayName = 'BodyCell';

const HeaderCell = (_a) => {
    var { className = '', component = 'th', scope = '', textCenter = false, tooltip = '', onMouseEnter = () => { }, children, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    isVisible, dataLabel = '' } = _a, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    props = __rest(_a, ["className", "component", "scope", "textCenter", "tooltip", "onMouseEnter", "children", "isVisible", "dataLabel"]);
    return (react.createElement(Th, Object.assign({}, props, { scope: scope, tooltip: tooltip, onMouseEnter: onMouseEnter, textCenter: textCenter, component: component, className: className }), children));
};
HeaderCell.displayName = 'HeaderCell';

class RowWrapper extends react.Component {
    constructor(props) {
        super(props);
        this.handleScroll = (event) => {
            if (!this._unmounted) {
                this.props.onScroll(event);
            }
        };
        this.handleResize = (event) => {
            if (!this._unmounted) {
                this.props.onResize(event);
            }
        };
        if (props.onScroll) {
            this.handleScroll = debounce(this.handleScroll, 100);
        }
        if (props.onResize) {
            this.handleResize = debounce(this.handleResize, 100);
        }
    }
    componentDidMount() {
        this._unmounted = false;
        if (this.props.onScroll) {
            window.addEventListener('scroll', this.handleScroll);
        }
        if (this.props.onResize) {
            window.addEventListener('resize', this.handleResize);
        }
    }
    componentWillUnmount() {
        this._unmounted = true;
        if (this.props.onScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
        if (this.props.onResize) {
            window.removeEventListener('resize', this.handleResize);
        }
    }
    render() {
        const _a = this.props, { 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onScroll, onResize, row: { isExpanded, isEditable }, rowProps, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        trRef, className, ouiaId } = _a, props = __rest(_a, ["onScroll", "onResize", "row", "rowProps", "trRef", "className", "ouiaId"]);
        return (react.createElement(Tr, Object.assign({}, props, { ref: trRef, isExpanded: isExpanded, isEditable: isEditable, className: className, ouiaId: ouiaId })));
    }
}
RowWrapper.displayName = 'RowWrapper';
RowWrapper.defaultProps = {
    className: '',
    row: {
        isOpen: undefined,
        isExpanded: undefined,
        isHeightAuto: undefined,
        isEditable: undefined
    },
    rowProps: null
};

const emptyTD = () => ({
    component: 'td'
});
const scopeColTransformer = () => ({
    scope: 'col'
});
const emptyCol = (label) => (Object.assign({}, (label ? {} : { scope: '' })));
const parentId = (_value, { rowData }) => ({
    parentId: rowData.parent
});
const mapProps = (_label, { property, rowData }) => (Object.assign({}, (rowData[property] && rowData[property].props)));

const EditColumn = (_a) => {
    var { onClick = null, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    className = '', editing, valid, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    saveAriaLabel, cancelAriaLabel, editAriaLabel } = _a, props = __rest(_a, ["onClick", "className", "editing", "valid", "saveAriaLabel", "cancelAriaLabel", "editAriaLabel"]);
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: css(inlineStyles.inlineEditGroup, inlineStyles.modifiers.iconGroup, 'pf-m-action-group') },
            react.createElement("div", { className: css(inlineStyles.inlineEditAction) },
                react.createElement(Button, Object.assign({ "aria-label": saveAriaLabel }, props, { onClick: e => onClick(e, 'save'), variant: "plain" }),
                    react.createElement(CheckIcon, null))),
            react.createElement("div", { className: css(inlineStyles.inlineEditAction) },
                react.createElement(Button, Object.assign({ "aria-label": cancelAriaLabel }, props, { onClick: e => onClick(e, 'cancel'), variant: "plain" }),
                    react.createElement(TimesIcon, null)))),
        react.createElement("div", { className: css(inlineStyles.inlineEditAction, inlineStyles.modifiers.enableEditable) },
            react.createElement(Button, Object.assign({ "aria-label": editAriaLabel }, props, { onClick: e => onClick(e, 'edit'), variant: "plain" }),
                react.createElement(PencilAltIcon, null)))));
};
EditColumn.displayName = 'EditColumn';

const editable = (label, { rowIndex, rowData, column }) => {
    const { extraParams: { onRowEdit } } = column;
    const toggleEditMode = (event, type) => {
        let validationErrors = {};
        if (type === 'save') {
            validationErrors =
                rowData.rowEditValidationRules &&
                    rowData.rowEditValidationRules.reduce((acc, rule) => {
                        const invalidCells = rowData.cells.filter(cellData => {
                            const testValue = cellData.props.editableValue === '' ? '' : cellData.props.editableValue || cellData.props.value;
                            let failedValidation = false;
                            if (Array.isArray(testValue) && testValue.length) {
                                // multiple values, like multiselect
                                failedValidation = testValue.reduce((hasInvalidSelection, el) => {
                                    // if one value fails validation, the entire cell is invalid
                                    if (hasInvalidSelection === true) {
                                        return true;
                                    }
                                    return !rule.validator(el);
                                }, failedValidation);
                            }
                            else if (Array.isArray(testValue) && !testValue.length) {
                                // case where all values were dismissed in multiselect
                                failedValidation = !rule.validator('');
                            }
                            else {
                                // simple text fields
                                failedValidation = !rule.validator(testValue);
                            }
                            if (failedValidation) {
                                cellData.props.isValid = false;
                            }
                            return failedValidation;
                        });
                        if (invalidCells.length) {
                            acc[rule.name] = invalidCells.map(cell => cell.props.name);
                        }
                        return acc;
                    }, {});
        }
        // tslint:disable-next-line:no-unused-expression
        onRowEdit(event, type, rowData && rowData.isEditable, rowIndex, validationErrors);
    };
    /**
     * @param {number} identifier identifier used for the row
     * @param {RowEditType} actionType the type of row edit action
     */
    function getAriaLabelTxt(identifier, actionType) {
        let result;
        switch (actionType) {
            case 'cancel':
                result = `Cancel row edits for row ${identifier}`;
                break;
            case 'save':
                result = `Save row edits for row ${identifier}`;
                break;
            default:
                result = `Place row ${identifier} in edit mode`;
        }
        return result;
    }
    return {
        className: styles.tableInlineEditAction,
        component: 'td',
        isVisible: true,
        children: (react.createElement(EditColumn, { saveAriaLabel: (rowData && rowData.rowSaveBtnAriaLabel && rowData.rowSaveBtnAriaLabel(rowIndex)) ||
                getAriaLabelTxt(rowIndex, 'save'), cancelAriaLabel: (rowData && rowData.rowCancelBtnAriaLabel && rowData.rowCancelBtnAriaLabel(rowIndex)) ||
                getAriaLabelTxt(rowIndex, 'cancel'), editAriaLabel: (rowData && rowData.rowEditBtnAriaLabel && rowData.rowEditBtnAriaLabel(rowIndex)) ||
                getAriaLabelTxt(rowIndex, 'edit'), valid: rowData && rowData.isValid, editing: rowData && rowData.isEditable, onClick: toggleEditMode }))
    };
};

const wrappable = () => ({
    className: styles.modifiers.wrap
});

const defaultTitle = (data) => data && data.hasOwnProperty('title') ? data.title : data;

/**
 * Generate header with transforms and formatters from custom header object.
 *
 * @param {*} header with transforms, formatters, columnTransforms, and rest of header object.
 * @param {*} title to be used as label in header config.
 * @returns {*} header, label, transforms: Array, formatters: Array.
 */
const generateHeader = ({ transforms: origTransforms, formatters: origFormatters, columnTransforms, header }, title) => (Object.assign(Object.assign({}, header), { label: title, transforms: [
        scopeColTransformer,
        emptyCol,
        ...(origTransforms || []),
        ...(columnTransforms || []),
        ...(header && header.hasOwnProperty('transforms') ? header.transforms : [])
    ], formatters: [...(origFormatters || []), ...(header && header.hasOwnProperty('formatters') ? header.formatters : [])] }));
/**
 * Function to generate cell for header config to change look of each cell.
 *
 * @param {*} customCell config with cellFormatters, cellTransforms, columnTransforms and rest of cell config.
 * @param {*} extra - extra
 * @returns {*} cell, transforms: Array, formatters: Array.
 */
const generateCell = ({ cellFormatters, cellTransforms, columnTransforms, cell }, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
extra) => (Object.assign(Object.assign({}, cell), { transforms: [
        ...(cellTransforms || []),
        ...(columnTransforms || []),
        ...(cell && cell.hasOwnProperty('transforms') ? cell.transforms : []),
        mapProps // This transform should be applied last so that props that are manually defined at the cell level will override all other transforms.
    ], formatters: [
        defaultTitle,
        ...(cellFormatters || []),
        ...(cell && cell.hasOwnProperty('formatters') ? cell.formatters : [])
    ] }));
/**
 * Function to map custom simple object properties to expected format with property, header, cell, extra params
 * and props.
 *
 * @param {*} column to be shown in header - either string or object with title, transformers and formatters (for cells as well).
 * @param {*} extra additional object with callbacks for specific formatters.
 * @param {*} key cell key to be shown in data-key.
 * @param {*} props additional props for each cell.
 * @returns {*} object with property, extraParams, header, cell and props.
 */
const mapHeader = (column, extra, key, ...props) => {
    const title = (column.hasOwnProperty('title') ? column.title : column);
    let dataLabel = `column-${key}`;
    if (column.hasOwnProperty('dataLabel')) {
        dataLabel = column.dataLabel;
    }
    else if (typeof title === 'string') {
        dataLabel = title;
    }
    return {
        property: (typeof title === 'string' &&
            title
                .toLowerCase()
                .trim()
                .replace(/\s/g, '-')) ||
            `column-${key}`,
        extraParams: extra,
        data: column.data,
        header: generateHeader(column, title),
        cell: generateCell(column),
        props: Object.assign(Object.assign({ 'data-label': dataLabel, 'data-key': key }, (column.hasOwnProperty('props') ? column.props : {})), props)
    };
};
/**
 * Function to define select cell in first column.
 *
 * @param {*} extraObject with onSelect callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const selectableTransforms = ({ onSelect, canSelectAll }) => [
    ...(onSelect
        ? [
            {
                title: '',
                transforms: (canSelectAll && [selectable]) || null,
                cellTransforms: [selectable]
            }
        ]
        : [])
];
/**
 * Function to define favorites cell in first column (or second column if rows are also selectable).
 *
 * @param {*} extraObject with onFavorite callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const favoritesTransforms = ({ onFavorite, onSort, sortBy, canSortFavorites, firstUserColumnIndex }) => [
    ...(onFavorite
        ? [
            {
                title: '',
                transforms: onSort && canSortFavorites
                    ? [
                        sortableFavorites({
                            onSort,
                            // favorites should be just before the first user-defined column
                            columnIndex: firstUserColumnIndex - 1,
                            sortBy
                        })
                    ]
                    : [emptyTD],
                cellTransforms: [favoritable]
            }
        ]
        : [])
];
/**
 * Function to define actions in last column.
 *
 * @param {*} extraObject with actions array.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const actionsTransforms = ({ actions, actionResolver, areActionsDisabled }) => [
    ...(actionResolver || actions
        ? [
            {
                title: '',
                transforms: [emptyTD],
                cellTransforms: [cellActions(actions, actionResolver, areActionsDisabled)]
            }
        ]
        : [])
];
/**
 * Function to define collapsible in first column.
 *
 * @param {*} header info with cellTransforms.
 * @param {*}  extraObject with onCollapse callback.
 * @returns {*} object with empty title, tranforms - Array, cellTransforms - Array.
 */
const collapsibleTransforms = (header, { onCollapse }) => [
    ...(onCollapse
        ? [
            {
                title: '',
                transforms: [emptyTD],
                cellTransforms: [collapsible, expandedRow(header.length)]
            }
        ]
        : [])
];
/**
 * Function to add additional cell transforms to object.
 *
 * @param {*} cell to be expanded.
 * @param {*} additional thing to be added to cellTransforms.
 * @returns {*} object with title from cell and cellTransforms with additional in.
 */
const addAdditionalCellTranforms = (cell, additional) => (Object.assign(Object.assign({}, (cell.hasOwnProperty('title') ? cell : { title: cell })), { cellTransforms: [...(cell.hasOwnProperty('cellTransforms') ? cell.cellTransforms : []), additional] }));
/**
 * Function to change expanded row with additional transforms.
 *
 * @param {*} header info with cellTransforms.
 * @param {*} extra object with onCollapse/onExpand function.
 */
const expandContent = (header, extra) => {
    if (!extra.onCollapse && !extra.onExpand) {
        return header;
    }
    return header.map((cell) => {
        const parentIdCell = addAdditionalCellTranforms(cell, parentId);
        return addAdditionalCellTranforms(parentIdCell, expandedRow(header.length));
    });
};
/**
 * Function to join parent and their children so they can be rendered in tbody.
 *
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
const mapOpenedRows = (rows, children) => rows.reduce((acc, curr, key) => {
    if (curr.hasOwnProperty('parent')) {
        const parent = acc.length > 0 && acc[acc.length - 1];
        if (parent) {
            acc[acc.length - 1].rows = [...acc[acc.length - 1].rows, children[key]];
            if (curr.hasOwnProperty('compoundParent')) {
                // if this is compound expand, check for any open child cell
                acc[acc.length - 1].isOpen = acc[acc.length - 1].rows.some((oneRow) => oneRow.props.rowData.cells.some((oneCell) => oneCell.props && oneCell.props.isOpen));
            }
        }
    }
    else {
        acc = [...acc, Object.assign(Object.assign({}, curr), { rows: [children[key]] })];
    }
    return acc;
}, []);
const rowEditTransforms = ({ onRowEdit }) => [
    ...(onRowEdit
        ? [
            {
                title: '',
                cellTransforms: [editable]
            }
        ]
        : [])
];
/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 *
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @returns {*} expected object for react tabular table.
 */
const calculateColumns = (headerRows, extra) => headerRows &&
    [
        ...collapsibleTransforms(headerRows, extra),
        ...selectableTransforms(extra),
        ...favoritesTransforms(extra),
        ...expandContent(headerRows, extra),
        ...rowEditTransforms(extra),
        ...actionsTransforms(extra)
    ].map((oneCol, key) => (Object.assign({}, mapHeader(oneCol, extra, key))));

const BodyWrapper = (_a) => {
    var { mappedRows, tbodyRef, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    rows = [], onCollapse, headerRows } = _a, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    props = __rest(_a, ["mappedRows", "tbodyRef", "rows", "onCollapse", "headerRows"]);
    if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
        return (react.createElement(react.Fragment, null, mapOpenedRows(mappedRows, props.children).map((oneRow, key) => (react.createElement(Tbody, Object.assign({}, props, { isExpanded: oneRow.isOpen, key: `tbody-${key}`, ref: tbodyRef }), oneRow.rows)))));
    }
    return react.createElement(Tbody, Object.assign({}, props, { ref: tbodyRef }));
};
BodyWrapper.displayName = 'BodyWrapper';

const TableContext = react.createContext({
    headerData: null,
    headerRows: null,
    rows: []
});

class Table extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            ouiaStateId: getDefaultOUIAId(Table.displayName)
        };
        this.isSelected = (row) => row.selected === true;
        this.areAllRowsSelected = (rows) => {
            if (rows === undefined || rows.length === 0) {
                return false;
            }
            return rows.every(row => this.isSelected(row) || (row.hasOwnProperty('parent') && !row.showSelect));
        };
    }
    componentDidMount() {
        if (this.props.onRowEdit && "production" !== 'production' && !Table.hasWarnBeta) {
            // eslint-disable-next-line no-console
            console.warn('You are using a beta component feature (onRowEdit). These api parts are subject to change in the future.');
            Table.hasWarnBeta = true;
        }
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, caption, header, className, onSort, onSelect, canSelectAll, selectVariant, sortBy, children, actions, actionResolver, areActionsDisabled, onCollapse, onExpand, onRowEdit, rowLabeledBy, dropdownPosition, dropdownDirection, contentId, expandId, variant, rows, cells, bodyWrapper, rowWrapper, role, borders, onFavorite, canSortFavorites } = _a, props = __rest(_a, ['aria-label', "caption", "header", "className", "onSort", "onSelect", "canSelectAll", "selectVariant", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "onRowEdit", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "role", "borders", "onFavorite", "canSortFavorites"]);
        if (!ariaLabel && !caption && !header && role !== 'presentation') {
            // eslint-disable-next-line no-console
            console.error('Table: Specify at least one of: header, caption, aria-label');
        }
        const headerData = calculateColumns(cells, {
            sortBy,
            onSort,
            onSelect,
            canSelectAll: selectVariant === RowSelectVariant.radio ? false : canSelectAll,
            selectVariant,
            allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
            actions,
            actionResolver,
            areActionsDisabled,
            onCollapse,
            onRowEdit,
            onExpand,
            rowLabeledBy,
            expandId,
            contentId,
            dropdownPosition,
            dropdownDirection,
            onFavorite,
            canSortFavorites,
            // order of columns: Collapsible | Selectable | Favoritable
            firstUserColumnIndex: [onCollapse, onSelect, onFavorite].filter(callback => callback).length
        });
        const table = (react.createElement(TableContext.Provider, { value: {
                headerData,
                headerRows: null,
                rows
            } },
            header,
            react.createElement(Provider, Object.assign({}, props, { "aria-label": ariaLabel, renderers: {
                    body: {
                        wrapper: bodyWrapper || BodyWrapper,
                        row: rowWrapper || RowWrapper,
                        cell: BodyCell
                    },
                    header: {
                        cell: HeaderCell
                    }
                }, columns: headerData, role: role, variant: variant, borders: borders, className: className }),
                caption && react.createElement("caption", null, caption),
                children)));
        if (onRowEdit) {
            return react.createElement("form", { className: css(inlineStyles.inlineEdit) }, table);
        }
        return table;
    }
}
Table.displayName = 'Table';
Table.hasWarnBeta = false;
Table.defaultProps = {
    children: null,
    className: '',
    variant: null,
    borders: true,
    rowLabeledBy: 'simple-node',
    expandId: 'expandable-toggle',
    contentId: 'expanded-content',
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    header: undefined,
    caption: undefined,
    'aria-label': undefined,
    gridBreakPoint: TableGridBreakpoint.gridMd,
    role: 'grid',
    canSelectAll: true,
    selectVariant: 'checkbox',
    ouiaSafe: true,
    isStickyHeader: false,
    canSortFavorites: true
};

const flagVisibility = (rows) => {
    const visibleRows = rows.filter((oneRow) => !oneRow.parent || oneRow.isExpanded);
    if (visibleRows.length > 0) {
        visibleRows[0].isFirstVisible = true;
        visibleRows[visibleRows.length - 1].isLastVisible = true;
    }
};
class ContextBody extends react.Component {
    constructor() {
        super(...arguments);
        this.onRow = (row, rowProps) => {
            const { onRowClick, onRow } = this.props;
            const extendedRowProps = Object.assign(Object.assign({}, rowProps), (onRow ? onRow(row, rowProps) : {}));
            return {
                row,
                rowProps: extendedRowProps,
                onMouseDown: (event) => {
                    const computedData = {
                        isInput: event.target.tagName !== 'INPUT',
                        isButton: event.target.tagName !== 'BUTTON'
                    };
                    onRowClick(event, row, rowProps, computedData);
                }
            };
        };
        this.mapCells = (headerData, row, rowKey) => {
            // column indexes start after generated optional columns like collapsible or select column(s)
            const { firstUserColumnIndex } = headerData[0].extraParams;
            const isFullWidth = row && row.fullWidth;
            // typically you'd want to map each cell to its column header, but in the case of fullWidth
            // the first column could be the Select and/or Expandable column
            let additionalColsIndexShift = isFullWidth ? 0 : firstUserColumnIndex;
            return Object.assign({}, (row &&
                (row.cells || row).reduce((acc, cell, cellIndex) => {
                    const isCellObject = cell === Object(cell);
                    const isCellFunction = cell && typeof cell.title === 'function';
                    let formatters = [];
                    if (isCellObject && cell.formatters) {
                        // give priority to formatters specified on the cell object
                        // expandable example:
                        // rows: [{ parent: 0, fullWidth: true, cells: [{ title: 'fullWidth, child - a', formatters: [expandable]}] }]
                        formatters = cell.formatters;
                    }
                    else if (isFullWidth && cellIndex < firstUserColumnIndex) {
                        // for backwards compatibility, map the cells that are not under user columns (like Select/Expandable)
                        // to the first user column's header formatters
                        formatters = headerData[firstUserColumnIndex].cell.formatters;
                    }
                    let mappedCellTitle = cell;
                    if (isCellObject && isCellFunction) {
                        mappedCellTitle = cell.title(cell.props.value, rowKey, cellIndex, cell.props);
                    }
                    else if (isCellObject) {
                        mappedCellTitle = cell.title;
                    }
                    const mappedCell = {
                        [headerData[cellIndex + additionalColsIndexShift].property]: {
                            title: mappedCellTitle,
                            formatters,
                            props: Object.assign({ isVisible: true }, (isCellObject ? cell.props : null))
                        }
                    };
                    // increment the shift index when a cell spans multiple columns
                    if (isCellObject && cell.props && cell.props.colSpan) {
                        additionalColsIndexShift += cell.props.colSpan - 1;
                    }
                    return Object.assign(Object.assign({}, acc), mappedCell);
                }, { secretTableRowKeyId: row.id !== undefined ? row.id : rowKey })));
        };
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { className, headerData, rows, rowKey, children, onRowClick } = _a, props = __rest(_a, ["className", "headerData", "rows", "rowKey", "children", "onRowClick"]);
        let mappedRows;
        if (headerData.length > 0) {
            mappedRows = rows.map((oneRow, oneRowKey) => (Object.assign(Object.assign(Object.assign({}, oneRow), this.mapCells(headerData, oneRow, oneRowKey)), { isExpanded: isRowExpanded(oneRow, rows), isHeightAuto: oneRow.heightAuto || false, isFirst: oneRowKey === 0, isLast: oneRowKey === rows.length - 1, isFirstVisible: false, isLastVisible: false })));
            flagVisibility(mappedRows);
        }
        return (react.createElement(react.Fragment, null, mappedRows && (react.createElement(Body, Object.assign({}, props, { mappedRows: mappedRows, rows: mappedRows, onRow: this.onRow, rowKey: rowKey, className: className })))));
    }
}
const TableBody = (_a) => {
    var { className = '', children = null, rowKey = 'secretTableRowKeyId', 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    onRow = (...args) => Object, onRowClick = (event, row, rowProps, computedData) => 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    undefined } = _a, props = __rest(_a, ["className", "children", "rowKey", "onRow", "onRowClick"]);
    return (react.createElement(TableContext.Consumer, null, (_a) => {
        var { headerData = [], rows = [] } = _a, rest = __rest(_a, ["headerData", "rows"]);
        return (react.createElement(ContextBody, Object.assign({ headerData: headerData, rows: rows, onRow: onRow, className: className, rowKey: rowKey, onRowClick: onRowClick }, props, rest), children));
    }));
};

const ContextHeader = (_a) => {
    var { className = '', headerRows = undefined } = _a, props = __rest(_a, ["className", "headerRows"]);
    return react.createElement(Header, Object.assign({}, props, { headerRows: headerRows, className: className }));
};
const TableHeader = (_a) => {
    var props = __rest(_a, []);
    return (react.createElement(TableContext.Consumer, null, ({ headerRows }) => react.createElement(ContextHeader, Object.assign({}, props, { headerRows: headerRows }))));
};
TableHeader.displayName = 'TableHeader';

export { Table, TableBody, TableComposable, TableHeader, TableVariant, Tbody, Td, Th, Thead, Tr, cellWidth, wrappable };
