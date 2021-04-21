import { _ as __rest, c as createIcon, C as CheckIcon, a as __awaiter, b as __generator, d as __spread } from '../common/check-icon-f0a4273c.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-2c0027bd.js';
import { r as react } from '../common/index-9e3d5f03.js';
import { r as reactDom } from '../common/index-ceff71b8.js';
import { c as css, a as capitalize, u as useOUIAProps, T as Tooltip, B as Button, b as ButtonVariant, d as TimesIcon, e as canUseDOM, D as DropdownContext, f as Toggle, s as styles$E, g as DropdownSeparator, h as Divider, t as trimLeft, i as debounce, V as ValidatedOptions, j as getUniqueId, S as StarIcon, k as checkStyles, l as buttonStyles, m as getOUIAProps, n as getDefaultOUIAId, o as fillTemplate, p as keyHandler, q as getNextIndex, P as Popper, A as AngleDownIcon, r as TooltipPosition, K as KEY_CODES, F as FocusTrap, v as formatBreakpointMods, w as Spinner, x as spinnerSize, y as isElementInView, z as pluralize, C as DropdownItem, E as DropdownWithContext, G as DropdownDirection, H as toCamel, I as Title } from '../common/Popover-14a1b2c4.js';
export { B as Button, b as ButtonVariant, h as Divider, L as Dropdown, G as DropdownDirection, C as DropdownItem, N as DropdownPosition, g as DropdownSeparator, M as KebabToggle, J as Popover, w as Spinner, I as Title, T as Tooltip, V as ValidatedOptions } from '../common/Popover-14a1b2c4.js';
import { C as CheckCircleIcon, E as ExclamationCircleIcon, I as InfoCircleIcon, a as CaretDownIcon, A as AngleRightIcon, S as SearchIcon } from '../common/search-icon-fe091b7b.js';
import { p as propTypes } from '../common/index-0288a116.js';

var backdrop = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "backdrop": "pf-c-backdrop",
  "backdropOpen": "pf-c-backdrop__open"
};
});

var styles = /*@__PURE__*/getDefaultExportFromCjs(backdrop);

/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({id}: {id: string}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 */
let currentId = 0;
class GenerateId extends react.Component {
    constructor() {
        super(...arguments);
        this.id = `${this.props.prefix}${currentId++}`;
    }
    render() {
        return this.props.children(this.id);
    }
}
GenerateId.displayName = 'GenerateId';
GenerateId.defaultProps = {
    prefix: 'pf-random-id-'
};

const ASTERISK = '*';

var bullseye = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "bullseye": "pf-l-bullseye"
};
});

var styles$1 = /*@__PURE__*/getDefaultExportFromCjs(bullseye);

var content = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "content": "pf-c-content",
  "modifiers": {
    "overpassFont": "pf-m-overpass-font"
  }
};
});

var styles$2 = /*@__PURE__*/getDefaultExportFromCjs(content);

const Backdrop = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles.backdrop, className) }), children));
};
Backdrop.displayName = 'Backdrop';

var alert = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "alert": "pf-c-alert",
  "alertAction": "pf-c-alert__action",
  "alertActionGroup": "pf-c-alert__action-group",
  "alertDescription": "pf-c-alert__description",
  "alertIcon": "pf-c-alert__icon",
  "alertTitle": "pf-c-alert__title",
  "button": "pf-c-button",
  "modifiers": {
    "success": "pf-m-success",
    "danger": "pf-m-danger",
    "warning": "pf-m-warning",
    "info": "pf-m-info",
    "inline": "pf-m-inline",
    "truncate": "pf-m-truncate",
    "overpassFont": "pf-m-overpass-font"
  }
};
});

var styles$3 = /*@__PURE__*/getDefaultExportFromCjs(alert);

var accessibility = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "hidden": "pf-u-hidden",
  "hiddenOnLg": "pf-u-hidden-on-lg",
  "hiddenOnMd": "pf-u-hidden-on-md",
  "hiddenOnSm": "pf-u-hidden-on-sm",
  "hiddenOnXl": "pf-u-hidden-on-xl",
  "hiddenOn_2xl": "pf-u-hidden-on-2xl",
  "screenReader": "pf-u-screen-reader",
  "screenReaderOnLg": "pf-u-screen-reader-on-lg",
  "screenReaderOnMd": "pf-u-screen-reader-on-md",
  "screenReaderOnSm": "pf-u-screen-reader-on-sm",
  "screenReaderOnXl": "pf-u-screen-reader-on-xl",
  "screenReaderOn_2xl": "pf-u-screen-reader-on-2xl",
  "visible": "pf-u-visible",
  "visibleOnLg": "pf-u-visible-on-lg",
  "visibleOnMd": "pf-u-visible-on-md",
  "visibleOnSm": "pf-u-visible-on-sm",
  "visibleOnXl": "pf-u-visible-on-xl",
  "visibleOn_2xl": "pf-u-visible-on-2xl"
};
});

var a11yStyles = /*@__PURE__*/getDefaultExportFromCjs(accessibility);

const ExclamationTriangleIconConfig = {
  name: 'ExclamationTriangleIcon',
  height: 512,
  width: 576,
  svgPath: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  yOffset: 0,
  xOffset: 0,
};

const ExclamationTriangleIcon = createIcon(ExclamationTriangleIconConfig);

const BellIconConfig = {
  name: 'BellIcon',
  height: 1024,
  width: 896,
  svgPath: 'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z',
  yOffset: 0,
  xOffset: 0,
};

const BellIcon = createIcon(BellIconConfig);

const variantIcons = {
    success: CheckCircleIcon,
    danger: ExclamationCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InfoCircleIcon,
    default: BellIcon
};
const AlertIcon = (_a) => {
    var { variant, customIcon, className = '' } = _a, props = __rest(_a, ["variant", "customIcon", "className"]);
    const Icon = variantIcons[variant];
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$3.alertIcon, className) }), customIcon || react.createElement(Icon, null)));
};

const AlertContext = react.createContext(null);

const c_alert__title_max_lines = {
  "name": "--pf-c-alert__title--max-lines",
  "value": "1",
  "var": "var(--pf-c-alert__title--max-lines)"
};

var AlertVariant;
(function (AlertVariant) {
    AlertVariant["success"] = "success";
    AlertVariant["danger"] = "danger";
    AlertVariant["warning"] = "warning";
    AlertVariant["info"] = "info";
    AlertVariant["default"] = "default";
})(AlertVariant || (AlertVariant = {}));
const Alert = (_a) => {
    var { variant = AlertVariant.default, isInline = false, isLiveRegion = false, variantLabel = `${capitalize(variant)} alert:`, 'aria-label': ariaLabel = `${capitalize(variant)} Alert`, actionClose, actionLinks, title, children = '', className = '', ouiaId, ouiaSafe = true, timeout = false, onTimeout, truncateTitle = 0, tooltipPosition, customIcon } = _a, props = __rest(_a, ["variant", "isInline", "isLiveRegion", "variantLabel", 'aria-label', "actionClose", "actionLinks", "title", "children", "className", "ouiaId", "ouiaSafe", "timeout", "onTimeout", "truncateTitle", "tooltipPosition", "customIcon"]);
    const ouiaProps = useOUIAProps(Alert.displayName, ouiaId, ouiaSafe, variant);
    const getHeadingContent = (react.createElement(react.Fragment, null,
        react.createElement("span", { className: css(a11yStyles.screenReader) }, variantLabel),
        title));
    const [disableAlert, setDisableAlert] = react.useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = react.useState(false);
    const titleRef = react.useRef(null);
    react.useEffect(() => {
        if (!titleRef.current || !truncateTitle) {
            return;
        }
        titleRef.current.style.setProperty(c_alert__title_max_lines.name, truncateTitle.toString());
        const showTooltip = titleRef.current && titleRef.current.offsetHeight < titleRef.current.scrollHeight;
        if (isTooltipVisible !== showTooltip) {
            setIsTooltipVisible(showTooltip);
        }
    }, [titleRef, truncateTitle, isTooltipVisible]);
    const customClassName = css(styles$3.alert, isInline && styles$3.modifiers.inline, variant !== AlertVariant.default && styles$3.modifiers[variant], className);
    const Title = (react.createElement("h4", Object.assign({}, (isTooltipVisible && { tabIndex: 0 }), { ref: titleRef, className: css(styles$3.alertTitle, truncateTitle && styles$3.modifiers.truncate) }), getHeadingContent));
    if (disableAlert === false && timeout && timeout !== 0) {
        setTimeout(() => {
            setDisableAlert(true);
            if (onTimeout) {
                onTimeout();
            }
        }, timeout === true ? 8000 : timeout);
    }
    if (disableAlert === false) {
        return (react.createElement("div", Object.assign({}, props, { className: customClassName, "aria-label": ariaLabel }, ouiaProps, (isLiveRegion && {
            'aria-live': 'polite',
            'aria-atomic': 'false'
        })),
            react.createElement(AlertIcon, { variant: variant, customIcon: customIcon }),
            isTooltipVisible ? (react.createElement(Tooltip, { content: getHeadingContent, position: tooltipPosition }, Title)) : (Title),
            actionClose && (react.createElement(AlertContext.Provider, { value: { title, variantLabel } },
                react.createElement("div", { className: css(styles$3.alertAction) }, actionClose))),
            children && react.createElement("div", { className: css(styles$3.alertDescription) }, children),
            actionLinks && react.createElement("div", { className: css(styles$3.alertActionGroup) }, actionLinks)));
    }
    else {
        return null;
    }
};
Alert.displayName = 'Alert';

const AlertActionCloseButton = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', onClose = () => undefined, 'aria-label': ariaLabel = '', variantLabel } = _a, props = __rest(_a, ["className", "onClose", 'aria-label', "variantLabel"]);
    return (react.createElement(AlertContext.Consumer, null, ({ title, variantLabel: alertVariantLabel }) => (react.createElement(Button, Object.assign({ variant: ButtonVariant.plain, onClick: onClose, "aria-label": ariaLabel === '' ? `Close ${variantLabel || alertVariantLabel} alert: ${title}` : ariaLabel }, props),
        react.createElement(TimesIcon, null)))));
};
AlertActionCloseButton.displayName = 'AlertActionCloseButton';

const AlertActionLink = (_a) => {
    var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
    return (react.createElement(Button, Object.assign({ variant: ButtonVariant.link, isInline: true, className: className }, props), children));
};
AlertActionLink.displayName = 'AlertActionLink';

var alertGroup = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "alertGroup": "pf-c-alert-group",
  "modifiers": {
    "toast": "pf-m-toast"
  }
};
});

var styles$4 = /*@__PURE__*/getDefaultExportFromCjs(alertGroup);

const AlertGroupInline = (_a) => {
    var { className, children, isToast } = _a, rest = __rest(_a, ["className", "children", "isToast"]);
    return (react.createElement("ul", Object.assign({ className: css(styles$4.alertGroup, className, isToast ? styles$4.modifiers.toast : '') }, rest), react.Children.toArray(children).map((Alert, index) => (react.createElement("li", { key: index }, Alert)))));
};
AlertGroupInline.displayName = 'AlertGroupInline';

class AlertGroup extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            container: undefined
        };
    }
    componentDidMount() {
        const container = document.createElement('div');
        const target = this.getTargetElement();
        this.setState({ container });
        target.appendChild(container);
    }
    componentWillUnmount() {
        const target = this.getTargetElement();
        if (this.state.container) {
            target.removeChild(this.state.container);
        }
    }
    getTargetElement() {
        const appendTo = this.props.appendTo;
        if (typeof appendTo === 'function') {
            return appendTo();
        }
        return appendTo || document.body;
    }
    render() {
        const { className, children, isToast } = this.props;
        const alertGroup = (react.createElement(AlertGroupInline, { className: className, isToast: isToast }, children));
        if (!this.props.isToast) {
            return alertGroup;
        }
        const container = this.state.container;
        if (!canUseDOM || !container) {
            return null;
        }
        return reactDom.createPortal(alertGroup, container);
    }
}
AlertGroup.displayName = 'AlertGroup';

var formControl = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "formControl": "pf-c-form-control",
  "modifiers": {
    "success": "pf-m-success",
    "expanded": "pf-m-expanded",
    "icon": "pf-m-icon",
    "warning": "pf-m-warning",
    "search": "pf-m-search",
    "calendar": "pf-m-calendar",
    "clock": "pf-m-clock",
    "placeholder": "pf-m-placeholder",
    "resizeVertical": "pf-m-resize-vertical",
    "resizeHorizontal": "pf-m-resize-horizontal"
  }
};
});

var formStyles = /*@__PURE__*/getDefaultExportFromCjs(formControl);

const DropdownToggle = (_a) => {
    var { id = '', children = null, className = '', isOpen = false, parentRef = null, getMenuRef = null, isDisabled = false, isPlain = false, isPrimary = false, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isActive = false, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle = (_isOpen) => undefined, icon = null, toggleIndicator: ToggleIndicator = CaretDownIcon, splitButtonItems, splitButtonVariant = 'checkbox', 'aria-haspopup': ariaHasPopup, ouiaId, ouiaSafe, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref } = _a, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["id", "children", "className", "isOpen", "parentRef", "getMenuRef", "isDisabled", "isPlain", "isPrimary", "isActive", "onToggle", "icon", "toggleIndicator", "splitButtonItems", "splitButtonVariant", 'aria-haspopup', "ouiaId", "ouiaSafe", "ref"]);
    const ouiaProps = useOUIAProps(DropdownToggle.displayName, ouiaId, ouiaSafe);
    const toggle = (react.createElement(DropdownContext.Consumer, null, ({ toggleTextClass, toggleIndicatorClass, toggleIconClass }) => (react.createElement(Toggle, Object.assign({}, props, { id: id, className: className, isOpen: isOpen, parentRef: parentRef, getMenuRef: getMenuRef, isActive: isActive, isDisabled: isDisabled, isPlain: isPlain, isPrimary: isPrimary, onToggle: onToggle, "aria-haspopup": ariaHasPopup }, ouiaProps, (splitButtonItems && { isSplitButton: true, 'aria-label': props['aria-label'] || 'Select' })),
        icon && react.createElement("span", { className: css(toggleIconClass) }, icon),
        children && react.createElement("span", { className: ToggleIndicator && css(toggleTextClass) }, children),
        ToggleIndicator && (react.createElement("span", { className: css(!splitButtonItems && toggleIndicatorClass) },
            react.createElement(ToggleIndicator, null)))))));
    if (splitButtonItems) {
        return (react.createElement("div", { className: css(styles$E.dropdownToggle, styles$E.modifiers.splitButton, splitButtonVariant === 'action' && styles$E.modifiers.action, isDisabled && styles$E.modifiers.disabled) },
            splitButtonItems,
            toggle));
    }
    return toggle;
};
DropdownToggle.displayName = 'DropdownToggle';

const ApplicationLauncherSeparator = (_a) => {
    var props = __rest(_a, ["children"]);
    return react.createElement(DropdownSeparator, Object.assign({}, props));
};
ApplicationLauncherSeparator.displayName = 'ApplicationLauncherSeparator';

/**
 * This function is a helper for creating an array of renderable favorite items for the Application launcher or Select
 *
 * @param {object} items The items rendered in Select or Application aLauncher
 * @param {boolean} isGrouped Flag indicating if items are grouped
 * @param {any[]} favorites Array of ids of favorited items
 * @param {boolean} isEnterTriggersArrowDown Flag indicating if we should add isEnterTriggersArrowDown to favorited item
 */
const createRenderableFavorites = (items, isGrouped, favorites, isEnterTriggersArrowDown) => {
    if (isGrouped) {
        const favoriteItems = [];
        items.forEach(group => {
            if (favorites.length > 0) {
                return (group.props.children &&
                    group.props.children
                        .filter(item => favorites.includes(item.props.id))
                        .map(item => {
                        if (isEnterTriggersArrowDown) {
                            return favoriteItems.push(react.cloneElement(item, {
                                isFavorite: true,
                                enterTriggersArrowDown: isEnterTriggersArrowDown,
                                id: `favorite-${item.props.id}`
                            }));
                        }
                        else {
                            return favoriteItems.push(react.cloneElement(item, { isFavorite: true, id: `favorite-${item.props.id}` }));
                        }
                    }));
            }
        });
        return favoriteItems;
    }
    return items
        .filter(item => favorites.includes(item.props.id))
        .map(item => react.cloneElement(item, { isFavorite: true, enterTriggersArrowDown: isEnterTriggersArrowDown }));
};
/**
 * This function is a helper for extending the array of renderable favorite with the select/application launcher items to  render in the Application launcher or Select
 *
 * @param {object} items The items rendered in Select or Application aLauncher
 * @param {boolean} isGrouped Flag indicating if items are grouped
 * @param {any[]} favorites Array of ids of favorited items
 */
const extendItemsWithFavorite = (items, isGrouped, favorites) => {
    if (isGrouped) {
        return items.map(group => react.cloneElement(group, {
            children: react.Children.map(group.props.children, item => {
                if (item.type === ApplicationLauncherSeparator || item.type === Divider) {
                    return item;
                }
                return react.cloneElement(item, {
                    isFavorite: favorites.some(favoriteId => favoriteId === item.props.id || `favorite-${favoriteId}` === item.props.id)
                });
            })
        }));
    }
    return items.map(item => react.cloneElement(item, {
        isFavorite: favorites.some(favoriteId => favoriteId === item.props.id)
    }));
};

var avatar = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "avatar": "pf-c-avatar"
};
});

var styles$5 = /*@__PURE__*/getDefaultExportFromCjs(avatar);

const Avatar = (_a) => {
    var { className = '', src = '', alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
    return react.createElement("img", Object.assign({}, props, { src: src, alt: alt, className: css(styles$5.avatar, className) }));
};
Avatar.displayName = 'Avatar';

var badge = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "badge": "pf-c-badge",
  "modifiers": {
    "read": "pf-m-read",
    "unread": "pf-m-unread"
  }
};
});

var badgeStyles = /*@__PURE__*/getDefaultExportFromCjs(badge);

const Badge = (_a) => {
    var { isRead = false, className = '', children = '' } = _a, props = __rest(_a, ["isRead", "className", "children"]);
    return (react.createElement("span", Object.assign({}, props, { className: css(badgeStyles.badge, (isRead ? badgeStyles.modifiers.read : badgeStyles.modifiers.unread), className) }), children));
};
Badge.displayName = 'Badge';

const Brand = (_a) => {
    var { className = '', src = '', alt } = _a, props = __rest(_a, ["className", "src", "alt"]);
    return (
    /** the brand component currently contains no styling the 'pf-c-brand' string will be used for the className */
    react.createElement("img", Object.assign({}, props, { className: css('pf-c-brand', className), src: src, alt: alt })));
};
Brand.displayName = 'Brand';

var breadcrumb = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "breadcrumb": "pf-c-breadcrumb",
  "breadcrumbDropdown": "pf-c-breadcrumb__dropdown",
  "breadcrumbHeading": "pf-c-breadcrumb__heading",
  "breadcrumbItem": "pf-c-breadcrumb__item",
  "breadcrumbItemDivider": "pf-c-breadcrumb__item-divider",
  "breadcrumbLink": "pf-c-breadcrumb__link",
  "breadcrumbList": "pf-c-breadcrumb__list",
  "dropdownToggle": "pf-c-dropdown__toggle",
  "modifiers": {
    "current": "pf-m-current",
    "overpassFont": "pf-m-overpass-font"
  }
};
});

var styles$6 = /*@__PURE__*/getDefaultExportFromCjs(breadcrumb);

const Breadcrumb = (_a) => {
    var { children = null, className = '', 'aria-label': ariaLabel = 'Breadcrumb', ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", 'aria-label', "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps(Breadcrumb.displayName, ouiaId, ouiaSafe);
    return (react.createElement("nav", Object.assign({}, props, { "aria-label": ariaLabel, className: css(styles$6.breadcrumb, className) }, ouiaProps),
        react.createElement("ol", { className: styles$6.breadcrumbList }, react.Children.map(children, (child, index) => {
            const showDivider = index > 0;
            if (react.isValidElement(child)) {
                return react.cloneElement(child, { showDivider });
            }
            return child;
        }))));
};
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbItem = (_a) => {
    var { children = null, className: classNameProp = '', to = null, isActive = false, showDivider, target = null, component = 'a', render = null } = _a, props = __rest(_a, ["children", "className", "to", "isActive", "showDivider", "target", "component", "render"]);
    const Component = component;
    const ariaCurrent = isActive ? 'page' : undefined;
    const className = css(styles$6.breadcrumbLink, isActive && styles$6.modifiers.current);
    return (react.createElement("li", Object.assign({}, props, { className: css(styles$6.breadcrumbItem, classNameProp) }),
        showDivider && (react.createElement("span", { className: styles$6.breadcrumbItemDivider },
            react.createElement(AngleRightIcon, null))),
        component === 'button' && (react.createElement("button", { className: className, "aria-current": ariaCurrent, type: "button" }, children)),
        render && render({ className, ariaCurrent }),
        to && !render && (react.createElement(Component, { href: to, target: target, className: className, "aria-current": ariaCurrent }, children)),
        !to && component !== 'button' && children));
};
BreadcrumbItem.displayName = 'BreadcrumbItem';

var TextInputTypes;
(function (TextInputTypes) {
    TextInputTypes["text"] = "text";
    TextInputTypes["date"] = "date";
    TextInputTypes["datetimeLocal"] = "datetime-local";
    TextInputTypes["email"] = "email";
    TextInputTypes["month"] = "month";
    TextInputTypes["number"] = "number";
    TextInputTypes["password"] = "password";
    TextInputTypes["search"] = "search";
    TextInputTypes["tel"] = "tel";
    TextInputTypes["time"] = "time";
    TextInputTypes["url"] = "url";
})(TextInputTypes || (TextInputTypes = {}));
class TextInputBase extends react.Component {
    constructor(props) {
        super(props);
        this.inputRef = react.createRef();
        this.handleChange = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event.currentTarget.value, event);
            }
        };
        this.handleResize = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            if (inputRef && inputRef.current) {
                trimLeft(inputRef.current, String(this.props.value));
            }
        };
        this.restoreText = () => {
            const inputRef = this.props.innerRef || this.inputRef;
            // restore the value
            inputRef.current.value = String(this.props.value);
            // make sure we still see the rightmost value to preserve cursor click position
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        };
        this.onFocus = (event) => {
            const { isLeftTruncated, onFocus } = this.props;
            if (isLeftTruncated) {
                this.restoreText();
            }
            onFocus && onFocus(event);
        };
        this.onBlur = (event) => {
            const { isLeftTruncated, onBlur } = this.props;
            if (isLeftTruncated) {
                this.handleResize();
            }
            onBlur && onBlur(event);
        };
        if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
            // eslint-disable-next-line no-console
            console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
        }
    }
    componentDidMount() {
        if (this.props.isLeftTruncated) {
            this.handleResize();
            window.addEventListener('resize', debounce(this.handleResize, 250));
        }
    }
    componentWillUnmount() {
        if (this.props.isLeftTruncated) {
            window.removeEventListener('resize', debounce(this.handleResize, 250));
        }
    }
    render() {
        const _a = this.props, { innerRef, className, type, value, validated, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onChange, onFocus, onBlur, isLeftTruncated, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        isReadOnly, isRequired, isDisabled, iconVariant, customIconUrl, customIconDimensions } = _a, props = __rest(_a, ["innerRef", "className", "type", "value", "validated", "onChange", "onFocus", "onBlur", "isLeftTruncated", "isReadOnly", "isRequired", "isDisabled", "iconVariant", "customIconUrl", "customIconDimensions"]);
        const customIconStyle = {};
        if (customIconUrl) {
            customIconStyle.backgroundImage = `url('${customIconUrl}')`;
        }
        if (customIconDimensions) {
            customIconStyle.backgroundSize = customIconDimensions;
        }
        return (react.createElement("input", Object.assign({}, props, { onFocus: this.onFocus, onBlur: this.onBlur, className: css(formStyles.formControl, validated === ValidatedOptions.success && formStyles.modifiers.success, validated === ValidatedOptions.warning && formStyles.modifiers.warning, ((iconVariant && iconVariant !== 'search') || customIconUrl) && formStyles.modifiers.icon, iconVariant && formStyles.modifiers[iconVariant], className), onChange: this.handleChange, type: type, value: value, "aria-invalid": validated === ValidatedOptions.error, required: isRequired, disabled: isDisabled, readOnly: isReadOnly, ref: innerRef || this.inputRef }, ((customIconUrl || customIconDimensions) && { style: customIconStyle }))));
    }
}
TextInputBase.displayName = 'TextInputBase';
TextInputBase.defaultProps = {
    'aria-label': null,
    className: '',
    isRequired: false,
    validated: 'default',
    isDisabled: false,
    isReadOnly: false,
    type: TextInputTypes.text,
    isLeftTruncated: false,
    onChange: () => undefined
};
const TextInput = react.forwardRef((props, ref) => (react.createElement(TextInputBase, Object.assign({}, props, { innerRef: ref }))));
TextInput.displayName = 'TextInput';

var select = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "check": "pf-c-check",
  "checkLabel": "pf-c-check__label",
  "chipGroup": "pf-c-chip-group",
  "divider": "pf-c-divider",
  "formControl": "pf-c-form-control",
  "modifiers": {
    "disabled": "pf-m-disabled",
    "active": "pf-m-active",
    "expanded": "pf-m-expanded",
    "plain": "pf-m-plain",
    "typeahead": "pf-m-typeahead",
    "top": "pf-m-top",
    "alignRight": "pf-m-align-right",
    "favorite": "pf-m-favorite",
    "favoriteAction": "pf-m-favorite-action",
    "focus": "pf-m-focus",
    "link": "pf-m-link",
    "action": "pf-m-action",
    "selected": "pf-m-selected",
    "description": "pf-m-description"
  },
  "select": "pf-c-select",
  "selectMenu": "pf-c-select__menu",
  "selectMenuFieldset": "pf-c-select__menu-fieldset",
  "selectMenuGroup": "pf-c-select__menu-group",
  "selectMenuGroupTitle": "pf-c-select__menu-group-title",
  "selectMenuItem": "pf-c-select__menu-item",
  "selectMenuItemActionIcon": "pf-c-select__menu-item-action-icon",
  "selectMenuItemDescription": "pf-c-select__menu-item-description",
  "selectMenuItemIcon": "pf-c-select__menu-item-icon",
  "selectMenuItemMain": "pf-c-select__menu-item-main",
  "selectMenuItemMatch": "pf-c-select__menu-item--match",
  "selectMenuSearch": "pf-c-select__menu-search",
  "selectMenuWrapper": "pf-c-select__menu-wrapper",
  "selectToggle": "pf-c-select__toggle",
  "selectToggleArrow": "pf-c-select__toggle-arrow",
  "selectToggleBadge": "pf-c-select__toggle-badge",
  "selectToggleButton": "pf-c-select__toggle-button",
  "selectToggleClear": "pf-c-select__toggle-clear",
  "selectToggleIcon": "pf-c-select__toggle-icon",
  "selectToggleText": "pf-c-select__toggle-text",
  "selectToggleTypeahead": "pf-c-select__toggle-typeahead",
  "selectToggleWrapper": "pf-c-select__toggle-wrapper"
};
});

var styles$7 = /*@__PURE__*/getDefaultExportFromCjs(select);

const TimesCircleIconConfig = {
  name: 'TimesCircleIcon',
  height: 512,
  width: 512,
  svgPath: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
  yOffset: 0,
  xOffset: 0,
};

const TimesCircleIcon = createIcon(TimesCircleIconConfig);

var form = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "form": "pf-c-form",
  "formActions": "pf-c-form__actions",
  "formFieldGroup": "pf-c-form__field-group",
  "formFieldGroupBody": "pf-c-form__field-group-body",
  "formFieldGroupHeader": "pf-c-form__field-group-header",
  "formFieldGroupHeaderActions": "pf-c-form__field-group-header-actions",
  "formFieldGroupHeaderDescription": "pf-c-form__field-group-header-description",
  "formFieldGroupHeaderMain": "pf-c-form__field-group-header-main",
  "formFieldGroupHeaderTitle": "pf-c-form__field-group-header-title",
  "formFieldGroupHeaderTitleText": "pf-c-form__field-group-header-title-text",
  "formFieldGroupToggle": "pf-c-form__field-group-toggle",
  "formFieldGroupToggleButton": "pf-c-form__field-group-toggle-button",
  "formFieldGroupToggleIcon": "pf-c-form__field-group-toggle-icon",
  "formFieldset": "pf-c-form__fieldset",
  "formGroup": "pf-c-form__group",
  "formGroupControl": "pf-c-form__group-control",
  "formGroupLabel": "pf-c-form__group-label",
  "formGroupLabelHelp": "pf-c-form__group-label-help",
  "formHelperText": "pf-c-form__helper-text",
  "formHelperTextIcon": "pf-c-form__helper-text-icon",
  "formLabel": "pf-c-form__label",
  "formLabelRequired": "pf-c-form__label-required",
  "formLabelText": "pf-c-form__label-text",
  "formSection": "pf-c-form__section",
  "formSectionTitle": "pf-c-form__section-title",
  "modifiers": {
    "horizontal": "pf-m-horizontal",
    "alignRight": "pf-m-align-right",
    "noPaddingTop": "pf-m-no-padding-top",
    "limitWidth": "pf-m-limit-width",
    "action": "pf-m-action",
    "disabled": "pf-m-disabled",
    "inline": "pf-m-inline",
    "stack": "pf-m-stack",
    "error": "pf-m-error",
    "success": "pf-m-success",
    "warning": "pf-m-warning",
    "inactive": "pf-m-inactive",
    "hidden": "pf-m-hidden",
    "expanded": "pf-m-expanded"
  }
};
});

var formStyles$1 = /*@__PURE__*/getDefaultExportFromCjs(form);

const SelectContext = react.createContext(null);
const SelectProvider = SelectContext.Provider;
const SelectConsumer = SelectContext.Consumer;
var SelectVariant;
(function (SelectVariant) {
    SelectVariant["single"] = "single";
    SelectVariant["checkbox"] = "checkbox";
    SelectVariant["typeahead"] = "typeahead";
    SelectVariant["typeaheadMulti"] = "typeaheadmulti";
    SelectVariant["panel"] = "panel";
})(SelectVariant || (SelectVariant = {}));
var SelectDirection;
(function (SelectDirection) {
    SelectDirection["up"] = "up";
    SelectDirection["down"] = "down";
})(SelectDirection || (SelectDirection = {}));
const KeyTypes = {
    Tab: 'Tab',
    Space: ' ',
    Escape: 'Escape',
    Enter: 'Enter',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight'
};

class SelectOption extends react.Component {
    constructor() {
        super(...arguments);
        this.ref = react.createRef();
        this.liRef = react.createRef();
        this.favoriteRef = react.createRef();
        this.onKeyDown = (event, innerIndex, onEnter, isCheckbox) => {
            const { index, keyHandler } = this.props;
            if (event.key === KeyTypes.Tab) {
                // More modal-like experience for checkboxes
                if (isCheckbox) {
                    if (event.shiftKey) {
                        keyHandler(index, innerIndex, 'up');
                    }
                    else {
                        keyHandler(index, innerIndex, 'down');
                    }
                    event.stopPropagation();
                }
                else {
                    keyHandler(index, innerIndex, 'tab');
                }
            }
            event.preventDefault();
            if (event.key === KeyTypes.ArrowUp) {
                keyHandler(index, innerIndex, 'up');
            }
            else if (event.key === KeyTypes.ArrowDown) {
                keyHandler(index, innerIndex, 'down');
            }
            else if (event.key === KeyTypes.ArrowLeft) {
                keyHandler(index, innerIndex, 'left');
            }
            else if (event.key === KeyTypes.ArrowRight) {
                keyHandler(index, innerIndex, 'right');
            }
            else if (event.key === KeyTypes.Enter) {
                if (onEnter !== undefined) {
                    onEnter();
                }
                else {
                    this.ref.current.click();
                }
            }
        };
    }
    componentDidMount() {
        this.props.sendRef(this.props.isDisabled ? null : this.ref.current, this.props.isDisabled ? null : this.favoriteRef.current, this.props.isDisabled ? null : this.liRef.current, this.props.index);
    }
    componentDidUpdate() {
        this.props.sendRef(this.props.isDisabled ? null : this.ref.current, this.props.isDisabled ? null : this.favoriteRef.current, this.props.isDisabled ? null : this.liRef.current, this.props.index);
    }
    render() {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        const _a = this.props, { children, className, id, description, value, onClick, isDisabled, isPlaceholder, isNoResultsOption, isSelected, isChecked, isFocused, sendRef, keyHandler, index, component, inputId, isFavorite, ariaIsFavoriteLabel = 'starred', ariaIsNotFavoriteLabel = 'not starred' } = _a, props = __rest(_a, ["children", "className", "id", "description", "value", "onClick", "isDisabled", "isPlaceholder", "isNoResultsOption", "isSelected", "isChecked", "isFocused", "sendRef", "keyHandler", "index", "component", "inputId", "isFavorite", "ariaIsFavoriteLabel", "ariaIsNotFavoriteLabel"]);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        const Component = component;
        if (!id && isFavorite !== null) {
            // eslint-disable-next-line no-console
            console.error('Please provide an id to use the favorites feature.');
        }
        const generatedId = id || getUniqueId('select-option');
        const favoriteButton = (onFavorite) => (react.createElement("button", { className: css(styles$7.selectMenuItem, styles$7.modifiers.action, styles$7.modifiers.favoriteAction), "aria-label": isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel, onClick: () => {
                onFavorite(generatedId.replace('favorite-', ''), isFavorite);
            }, onKeyDown: event => {
                this.onKeyDown(event, 1, () => onFavorite(generatedId.replace('favorite-', '')));
            }, ref: this.favoriteRef },
            react.createElement("span", { className: css(styles$7.selectMenuItemActionIcon) },
                react.createElement(StarIcon, null))));
        return (react.createElement(SelectConsumer, null, ({ onSelect, onClose, variant, inputIdPrefix, onFavorite }) => (react.createElement(react.Fragment, null,
            variant !== SelectVariant.checkbox && (react.createElement("li", { id: generatedId, role: "presentation", className: css(styles$7.selectMenuWrapper, isFavorite && styles$7.modifiers.favorite, isFocused && styles$7.modifiers.focus), ref: this.liRef },
                react.createElement(Component, Object.assign({}, props, { className: css(styles$7.selectMenuItem, isSelected && styles$7.modifiers.selected, isDisabled && styles$7.modifiers.disabled, description && styles$7.modifiers.description, isFavorite !== null && styles$7.modifiers.link, className), onClick: (event) => {
                        if (!isDisabled) {
                            onClick(event);
                            onSelect(event, value, isPlaceholder);
                            onClose();
                        }
                    }, role: "option", "aria-selected": isSelected || null, ref: this.ref, onKeyDown: (event) => {
                        this.onKeyDown(event, 0);
                    }, type: "button" }),
                    description && (react.createElement(react.Fragment, null,
                        react.createElement("span", { className: css(styles$7.selectMenuItemMain) },
                            children || value.toString(),
                            isSelected && (react.createElement("span", { className: css(styles$7.selectMenuItemIcon) },
                                react.createElement(CheckIcon, { "aria-hidden": true })))),
                        react.createElement("span", { className: css(styles$7.selectMenuItemDescription) }, description))),
                    !description && (react.createElement(react.Fragment, null,
                        children || value.toString(),
                        isSelected && (react.createElement("span", { className: css(styles$7.selectMenuItemIcon) },
                            react.createElement(CheckIcon, { "aria-hidden": true })))))),
                isFavorite !== null && id && favoriteButton(onFavorite))),
            variant === SelectVariant.checkbox && !isNoResultsOption && (react.createElement("label", Object.assign({}, props, { className: css(checkStyles.check, styles$7.selectMenuItem, isDisabled && styles$7.modifiers.disabled, description && styles$7.modifiers.description, className), onKeyDown: (event) => {
                    this.onKeyDown(event, 0, undefined, true);
                } }),
                react.createElement("input", { id: inputId || `${inputIdPrefix}-${value.toString()}`, className: css(checkStyles.checkInput), type: "checkbox", onChange: event => {
                        if (!isDisabled) {
                            onClick(event);
                            onSelect(event, value);
                        }
                    }, ref: this.ref, checked: isChecked || false, disabled: isDisabled }),
                react.createElement("span", { className: css(checkStyles.checkLabel, isDisabled && styles$7.modifiers.disabled) }, children || value.toString()),
                description && react.createElement("div", { className: css(checkStyles.checkDescription) }, description))),
            variant === SelectVariant.checkbox && isNoResultsOption && (react.createElement("div", null,
                react.createElement(Component, Object.assign({}, props, { className: css(styles$7.selectMenuItem, isSelected && styles$7.modifiers.selected, isDisabled && styles$7.modifiers.disabled, className), role: "option", "aria-selected": isSelected || null, ref: this.ref, onKeyDown: (event) => {
                        this.onKeyDown(event, 0, undefined, true);
                    }, type: "button" }), children || value.toString())))))));
    }
}
SelectOption.displayName = 'SelectOption';
SelectOption.defaultProps = {
    className: '',
    value: '',
    index: 0,
    isDisabled: false,
    isPlaceholder: false,
    isSelected: false,
    isChecked: false,
    isNoResultsOption: false,
    component: 'button',
    onClick: () => { },
    sendRef: () => { },
    keyHandler: () => { },
    inputId: '',
    isFavorite: null
};

const SelectGroup = (_a) => {
    var { children = [], className = '', label = '', titleId = '' } = _a, props = __rest(_a, ["children", "className", "label", "titleId"]);
    return (react.createElement(SelectConsumer, null, ({ variant }) => (react.createElement("div", Object.assign({}, props, { className: css(styles$7.selectMenuGroup, className) }),
        react.createElement("div", { className: css(styles$7.selectMenuGroupTitle), id: titleId, "aria-hidden": true }, label),
        variant === SelectVariant.checkbox ? children : react.createElement("ul", { role: "listbox" }, children)))));
};
SelectGroup.displayName = 'SelectGroup';

class SelectMenuWithRef extends react.Component {
    extendChildren(randomId) {
        const { children, isGrouped } = this.props;
        const childrenArray = children;
        if (isGrouped) {
            let index = 0;
            return react.Children.map(childrenArray, (group) => {
                if (group.type === SelectGroup) {
                    return react.cloneElement(group, {
                        titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                        children: react.Children.map(group.props.children, (option) => this.cloneOption(option, index++, randomId))
                    });
                }
                else {
                    return this.cloneOption(group, index++, randomId);
                }
            });
        }
        return react.Children.map(childrenArray, (child, index) => this.cloneOption(child, index, randomId));
    }
    cloneOption(child, index, randomId) {
        const { selected, sendRef, keyHandler } = this.props;
        const isSelected = this.checkForValue(child.props.value, selected);
        if (child.type === Divider) {
            return child;
        }
        return react.cloneElement(child, {
            inputId: `${randomId}-${index}`,
            isSelected,
            sendRef,
            keyHandler,
            index
        });
    }
    checkForValue(valueToCheck, options) {
        if (!options || !valueToCheck) {
            return false;
        }
        const isSelectOptionObject = typeof valueToCheck !== 'string' &&
            valueToCheck.toString &&
            valueToCheck.compareTo;
        if (Array.isArray(options)) {
            if (isSelectOptionObject) {
                return options.some(option => option.compareTo(valueToCheck));
            }
            else {
                return options.includes(valueToCheck);
            }
        }
        else {
            if (isSelectOptionObject) {
                return options.compareTo(valueToCheck);
            }
            else {
                return options === valueToCheck;
            }
        }
    }
    extendCheckboxChildren(children) {
        const { isGrouped, checked, sendRef, keyHandler, hasInlineFilter } = this.props;
        let index = hasInlineFilter ? 1 : 0;
        if (isGrouped) {
            return react.Children.map(children, (group) => {
                if (group.type === SelectOption || group.type === Divider) {
                    return group;
                }
                return react.cloneElement(group, {
                    titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                    children: (react.createElement("fieldset", { "aria-labelledby": group.props.label && group.props.label.replace(/\W/g, '-'), className: css(styles$7.selectMenuFieldset) }, react.Children.map(group.props.children, (option) => option.type === Divider
                        ? option
                        : react.cloneElement(option, {
                            isChecked: this.checkForValue(option.props.value, checked),
                            sendRef,
                            keyHandler,
                            index: index++
                        }))))
                });
            });
        }
        return react.Children.map(children, (child) => child.type === Divider
            ? child
            : react.cloneElement(child, {
                isChecked: this.checkForValue(child.props.value, checked),
                sendRef,
                keyHandler,
                index: index++
            }));
    }
    render() {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        const _a = this.props, { children, isCustomContent, className, isExpanded, openedOnEnter, selected, checked, isGrouped, sendRef, keyHandler, maxHeight, noResultsFoundText, createText, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, hasInlineFilter, innerRef } = _a, props = __rest(_a, ["children", "isCustomContent", "className", "isExpanded", "openedOnEnter", "selected", "checked", "isGrouped", "sendRef", "keyHandler", "maxHeight", "noResultsFoundText", "createText", 'aria-label', 'aria-labelledby', "hasInlineFilter", "innerRef"]);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        return (react.createElement(SelectConsumer, null, ({ variant, inputIdPrefix }) => (react.createElement(react.Fragment, null,
            isCustomContent && (react.createElement("div", Object.assign({ ref: innerRef, className: css(styles$7.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), children)),
            variant !== SelectVariant.checkbox &&
                !isCustomContent &&
                (!isGrouped ? (react.createElement("ul", Object.assign({ ref: innerRef, className: css(styles$7.selectMenu, className), role: "listbox", "aria-label": ariaLabel, "aria-labelledby": (!ariaLabel && ariaLabelledBy) || null }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), this.extendChildren(inputIdPrefix))) : (react.createElement("div", Object.assign({ ref: innerRef, className: css(styles$7.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } }), props), this.extendChildren(inputIdPrefix)))),
            variant === SelectVariant.checkbox && !isCustomContent && react.Children.count(children) > 0 && (react.createElement("div", Object.assign({ ref: innerRef, className: css(styles$7.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } })),
                react.createElement("fieldset", Object.assign({}, props, { "aria-label": ariaLabel, "aria-labelledby": (!ariaLabel && ariaLabelledBy) || null, className: css(formStyles$1.formFieldset) }),
                    hasInlineFilter && [
                        children.shift(),
                        ...this.extendCheckboxChildren(children)
                    ],
                    !hasInlineFilter && this.extendCheckboxChildren(children)))),
            variant === SelectVariant.checkbox && !isCustomContent && react.Children.count(children) === 0 && (react.createElement("div", Object.assign({ ref: innerRef, className: css(styles$7.selectMenu, className) }, (maxHeight && { style: { maxHeight, overflow: 'auto' } })),
                react.createElement("fieldset", { className: css(styles$7.selectMenuFieldset) })))))));
    }
}
SelectMenuWithRef.displayName = 'SelectMenu';
SelectMenuWithRef.defaultProps = {
    className: '',
    isExpanded: false,
    isGrouped: false,
    openedOnEnter: false,
    selected: '',
    maxHeight: '',
    sendRef: () => { },
    keyHandler: () => { },
    isCustomContent: false,
    hasInlineFilter: false
};
const SelectMenu = react.forwardRef((props, ref) => (react.createElement(SelectMenuWithRef, Object.assign({ innerRef: ref }, props), props.children)));

class SelectToggle extends react.Component {
    constructor(props) {
        super(props);
        this.onDocClick = (event) => {
            const { parentRef, menuRef, isOpen, onToggle, onClose } = this.props;
            const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const clickedWithinMenu = menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target);
            if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                onToggle(false);
                onClose();
                this.toggle.current.focus();
            }
        };
        this.handleGlobalKeys = (event) => {
            const { parentRef, menuRef, isOpen, variant, onToggle, onClose } = this.props;
            const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const escFromWithinMenu = menuRef && menuRef.current && menuRef.current.contains && menuRef.current.contains(event.target);
            if (isOpen &&
                event.key === KeyTypes.Tab &&
                (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti)) {
                this.props.handleTypeaheadKeys('tab');
                event.preventDefault();
                return;
            }
            if (isOpen &&
                (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab) &&
                (escFromToggle || escFromWithinMenu)) {
                onToggle(false);
                onClose();
                this.toggle.current.focus();
            }
        };
        this.onKeyDown = (event) => {
            const { isOpen, onToggle, variant, onClose, onEnter, handleTypeaheadKeys } = this.props;
            if (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) {
                if (event.key === KeyTypes.ArrowDown || event.key === KeyTypes.ArrowUp) {
                    handleTypeaheadKeys((event.key === KeyTypes.ArrowDown && 'down') || (event.key === KeyTypes.ArrowUp && 'up'));
                    event.preventDefault();
                }
                else if (event.key === KeyTypes.Enter) {
                    if (isOpen) {
                        handleTypeaheadKeys('enter');
                    }
                    else {
                        onToggle(!isOpen);
                    }
                }
            }
            if (variant === SelectVariant.typeahead ||
                variant === SelectVariant.typeaheadMulti ||
                (event.key === KeyTypes.Tab && !isOpen) ||
                (event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space)) {
                return;
            }
            event.preventDefault();
            if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && isOpen) {
                onToggle(!isOpen);
                onClose();
                this.toggle.current.focus();
            }
            else if ((event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && !isOpen) {
                onToggle(!isOpen);
                onEnter();
            }
        };
        const { variant } = props;
        const isTypeahead = variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti;
        this.toggle = isTypeahead ? react.createRef() : react.createRef();
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.onDocClick);
        document.addEventListener('touchstart', this.onDocClick);
        document.addEventListener('keydown', this.handleGlobalKeys);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onDocClick);
        document.removeEventListener('touchstart', this.onDocClick);
        document.removeEventListener('keydown', this.handleGlobalKeys);
    }
    render() {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        const _a = this.props, { className, children, isOpen, isActive, isPlain, isDisabled, variant, onToggle, onEnter, onClose, onClickTypeaheadToggleButton, handleTypeaheadKeys, parentRef, menuRef, id, type, hasClearButton, 'aria-labelledby': ariaLabelledBy, 'aria-label': ariaLabel } = _a, props = __rest(_a, ["className", "children", "isOpen", "isActive", "isPlain", "isDisabled", "variant", "onToggle", "onEnter", "onClose", "onClickTypeaheadToggleButton", "handleTypeaheadKeys", "parentRef", "menuRef", "id", "type", "hasClearButton", 'aria-labelledby', 'aria-label']);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        const isTypeahead = variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti || hasClearButton;
        const toggleProps = {
            id,
            'aria-labelledby': ariaLabelledBy,
            'aria-expanded': isOpen,
            'aria-haspopup': (variant !== SelectVariant.checkbox && 'listbox') || null
        };
        return (react.createElement(react.Fragment, null,
            !isTypeahead && (react.createElement("button", Object.assign({}, props, toggleProps, { ref: this.toggle, type: type, className: css(styles$7.selectToggle, isDisabled && styles$7.modifiers.disabled, isPlain && styles$7.modifiers.plain, isActive && styles$7.modifiers.active, className), 
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClick: _event => {
                    onToggle(!isOpen);
                    if (isOpen) {
                        onClose();
                    }
                }, onKeyDown: this.onKeyDown, disabled: isDisabled }),
                children,
                react.createElement("span", { className: css(styles$7.selectToggleArrow) },
                    react.createElement(CaretDownIcon, null)))),
            isTypeahead && (react.createElement("div", Object.assign({}, props, { ref: this.toggle, className: css(styles$7.selectToggle, isDisabled && styles$7.modifiers.disabled, isPlain && styles$7.modifiers.plain, isTypeahead && styles$7.modifiers.typeahead, className), 
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClick: _event => {
                    if (!isDisabled) {
                        onToggle(true);
                    }
                }, onKeyDown: this.onKeyDown }),
                children,
                react.createElement("button", Object.assign({}, toggleProps, { type: type, className: css(buttonStyles.button, styles$7.selectToggleButton, styles$7.modifiers.plain), "aria-label": ariaLabel, onClick: _event => {
                        _event.stopPropagation();
                        onToggle(!isOpen);
                        if (isOpen) {
                            onClose();
                        }
                        onClickTypeaheadToggleButton();
                    } }, ((variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti) && {
                    tabIndex: -1
                }), { disabled: isDisabled }),
                    react.createElement(CaretDownIcon, { className: css(styles$7.selectToggleArrow) }))))));
    }
}
SelectToggle.displayName = 'SelectToggle';
SelectToggle.defaultProps = {
    className: '',
    isOpen: false,
    isActive: false,
    isPlain: false,
    isDisabled: false,
    hasClearButton: false,
    variant: 'single',
    'aria-labelledby': '',
    'aria-label': '',
    type: 'button',
    onToggle: () => { },
    onEnter: () => { },
    onClose: () => { },
    onClickTypeaheadToggleButton: () => { }
};

var chipGroup = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "chipGroup": "pf-c-chip-group",
  "chipGroupClose": "pf-c-chip-group__close",
  "chipGroupLabel": "pf-c-chip-group__label",
  "chipGroupList": "pf-c-chip-group__list",
  "chipGroupListItem": "pf-c-chip-group__list-item",
  "chipGroupMain": "pf-c-chip-group__main",
  "modifiers": {
    "category": "pf-m-category"
  }
};
});

var styles$8 = /*@__PURE__*/getDefaultExportFromCjs(chipGroup);

var chip = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "badge": "pf-c-badge",
  "button": "pf-c-button",
  "chip": "pf-c-chip",
  "chipIcon": "pf-c-chip__icon",
  "chipText": "pf-c-chip__text",
  "modifiers": {
    "overflow": "pf-m-overflow",
    "draggable": "pf-m-draggable"
  }
};
});

var styles$9 = /*@__PURE__*/getDefaultExportFromCjs(chip);

class Chip extends react.Component {
    constructor(props) {
        super(props);
        this.span = react.createRef();
        this.renderOverflowChip = () => {
            const { children, className, onClick, ouiaId } = this.props;
            const Component = this.props.component;
            return (react.createElement(Component, Object.assign({ onClick: onClick, className: css(styles$9.chip, styles$9.modifiers.overflow, className) }, (this.props.component === 'button' ? { type: 'button' } : {}), getOUIAProps('OverflowChip', ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)),
                react.createElement("span", { className: css(styles$9.chipText) }, children)));
        };
        this.renderChip = (randomId) => {
            const { children, tooltipPosition } = this.props;
            if (this.state.isTooltipVisible) {
                return (react.createElement(Tooltip, { position: tooltipPosition, content: children }, this.renderInnerChip(randomId)));
            }
            return this.renderInnerChip(randomId);
        };
        this.state = {
            isTooltipVisible: false,
            ouiaStateId: getDefaultOUIAId(Chip.displayName)
        };
    }
    componentDidMount() {
        this.setState({
            isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
        });
    }
    renderInnerChip(id) {
        const { children, className, onClick, closeBtnAriaLabel, isReadOnly, component, ouiaId } = this.props;
        const Component = component;
        return (react.createElement(Component, Object.assign({ className: css(styles$9.chip, className) }, (this.state.isTooltipVisible && { tabIndex: 0 }), getOUIAProps(Chip.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId)),
            react.createElement("span", { ref: this.span, className: css(styles$9.chipText), id: id }, children),
            !isReadOnly && (react.createElement(Button, { onClick: onClick, variant: "plain", "aria-label": closeBtnAriaLabel, id: `remove_${id}`, "aria-labelledby": `remove_${id} ${id}`, ouiaId: ouiaId || closeBtnAriaLabel },
                react.createElement(TimesIcon, { "aria-hidden": "true" })))));
    }
    render() {
        const { isOverflowChip } = this.props;
        return (react.createElement(GenerateId, null, randomId => (isOverflowChip ? this.renderOverflowChip() : this.renderChip(this.props.id || randomId))));
    }
}
Chip.displayName = 'Chip';
Chip.defaultProps = {
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (_e) => undefined,
    component: 'div'
};

class ChipGroup extends react.Component {
    constructor(props) {
        super(props);
        this.headingRef = react.createRef();
        this.toggleCollapse = () => {
            this.setState(prevState => ({
                isOpen: !prevState.isOpen,
                isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
            }));
        };
        this.state = {
            isOpen: this.props.defaultIsOpen,
            isTooltipVisible: false
        };
    }
    componentDidMount() {
        this.setState({
            isTooltipVisible: Boolean(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth)
        });
    }
    renderLabel(id) {
        const { categoryName, tooltipPosition } = this.props;
        const { isTooltipVisible } = this.state;
        return isTooltipVisible ? (react.createElement(Tooltip, { position: tooltipPosition, content: categoryName },
            react.createElement("span", { tabIndex: 0, ref: this.headingRef, className: css(styles$8.chipGroupLabel), id: id, "aria-label": categoryName },
                react.createElement("span", { "aria-hidden": "true" }, categoryName)))) : (react.createElement("span", { ref: this.headingRef, className: css(styles$8.chipGroupLabel), "aria-hidden": "true", id: id }, categoryName));
    }
    render() {
        const _a = this.props, { categoryName, children, className, isClosable, closeBtnAriaLabel, 'aria-label': ariaLabel, onClick, onOverflowChipClick, numChips, expandedText, collapsedText, ouiaId, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        defaultIsOpen, tooltipPosition } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        rest = __rest(_a, ["categoryName", "children", "className", "isClosable", "closeBtnAriaLabel", 'aria-label', "onClick", "onOverflowChipClick", "numChips", "expandedText", "collapsedText", "ouiaId", "defaultIsOpen", "tooltipPosition"]);
        const { isOpen } = this.state;
        const numChildren = react.Children.count(children);
        const collapsedTextResult = fillTemplate(collapsedText, {
            remaining: react.Children.count(children) - numChips
        });
        const renderChipGroup = (id) => {
            const chipArray = !isOpen
                ? react.Children.toArray(children).slice(0, numChips)
                : react.Children.toArray(children);
            return (react.createElement("div", Object.assign({ className: css(styles$8.chipGroup, className, categoryName && styles$8.modifiers.category) }, getOUIAProps(ChipGroup.displayName, ouiaId)),
                react.createElement("div", { className: css(styles$8.chipGroupMain) },
                    categoryName && this.renderLabel(id),
                    react.createElement("ul", Object.assign({ className: css(styles$8.chipGroupList) }, (categoryName && { 'aria-labelledby': id }), (!categoryName && { 'aria-label': ariaLabel }), { role: "list" }, rest),
                        chipArray.map((child, i) => (react.createElement("li", { className: css(styles$8.chipGroupListItem), key: i }, child))),
                        numChildren > numChips && (react.createElement("li", { className: css(styles$8.chipGroupListItem) },
                            react.createElement(Chip, { isOverflowChip: true, onClick: event => {
                                    this.toggleCollapse();
                                    onOverflowChipClick(event);
                                }, component: "button" }, isOpen ? expandedText : collapsedTextResult))))),
                isClosable && (react.createElement("div", { className: css(styles$8.chipGroupClose) },
                    react.createElement(Button, { variant: "plain", "aria-label": closeBtnAriaLabel, onClick: onClick, id: `remove_group_${id}`, "aria-labelledby": `remove_group_${id} ${id}`, ouiaId: ouiaId || closeBtnAriaLabel },
                        react.createElement(TimesCircleIcon, { "aria-hidden": "true" }))))));
        };
        return numChildren === 0 ? null : react.createElement(GenerateId, null, randomId => renderChipGroup(this.props.id || randomId));
    }
}
ChipGroup.displayName = 'ChipGroup';
ChipGroup.defaultProps = {
    expandedText: 'Show Less',
    collapsedText: '${remaining} more',
    categoryName: '',
    defaultIsOpen: false,
    numChips: 3,
    isClosable: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (_e) => undefined,
    onOverflowChipClick: (_e) => undefined,
    closeBtnAriaLabel: 'Close chip group',
    tooltipPosition: 'top',
    'aria-label': 'Chip group category'
};

// seed for the aria-labelledby ID
let currentId$1 = 0;
class Select extends react.Component {
    constructor() {
        super(...arguments);
        this.parentRef = react.createRef();
        this.menuComponentRef = react.createRef();
        this.filterRef = react.createRef();
        this.clearRef = react.createRef();
        this.inputRef = react.createRef();
        this.refCollection = [[]];
        this.optionContainerRefCollection = [];
        this.state = {
            openedOnEnter: false,
            typeaheadInputValue: null,
            typeaheadFilteredChildren: react.Children.toArray(this.props.children),
            favoritesGroup: [],
            typeaheadCurrIndex: -1,
            typeaheadStoredIndex: -1,
            creatableValue: '',
            tabbedIntoFavoritesMenu: false,
            ouiaStateId: getDefaultOUIAId(Select.displayName, this.props.variant)
        };
        this.getTypeaheadActiveChild = (typeaheadCurrIndex) => this.refCollection[typeaheadCurrIndex] ? this.refCollection[typeaheadCurrIndex][0] : null;
        this.componentDidUpdate = (prevProps, prevState) => {
            if (this.props.hasInlineFilter) {
                this.refCollection[0][0] = this.filterRef.current;
            }
            if (!prevState.openedOnEnter && this.state.openedOnEnter && !this.props.customContent) {
                const firstRef = this.refCollection.find(ref => ref !== null);
                if (firstRef && firstRef[0]) {
                    firstRef[0].focus();
                }
            }
            if (prevProps.children !== this.props.children) {
                this.updateTypeAheadFilteredChildren(prevState.typeaheadInputValue || '', null);
            }
            if (this.props.onFavorite &&
                (this.props.favorites.length !== prevProps.favorites.length ||
                    this.state.typeaheadFilteredChildren !== prevState.typeaheadFilteredChildren)) {
                const tempRenderableChildren = this.props.variant === 'typeahead' || this.props.variant === 'typeaheadmulti'
                    ? this.state.typeaheadFilteredChildren
                    : this.props.children;
                const renderableFavorites = createRenderableFavorites(tempRenderableChildren, this.props.isGrouped, this.props.favorites);
                const favoritesGroup = renderableFavorites.length
                    ? [
                        react.createElement(SelectGroup, { key: "favorites", label: this.props.favoritesLabel }, renderableFavorites),
                        react.createElement(Divider, { key: "favorites-group-divider" })
                    ]
                    : [];
                this.setState({ favoritesGroup });
            }
        };
        this.onEnter = () => {
            this.setState({ openedOnEnter: true });
        };
        this.onClose = () => {
            this.setState({
                openedOnEnter: false,
                typeaheadInputValue: null,
                typeaheadFilteredChildren: react.Children.toArray(this.props.children),
                typeaheadCurrIndex: -1,
                tabbedIntoFavoritesMenu: false
            });
        };
        this.onChange = (e) => {
            if (e.target.value.toString() !== '' && !this.props.isOpen) {
                this.props.onToggle(true);
            }
            if (this.props.onTypeaheadInputChanged) {
                this.props.onTypeaheadInputChanged(e.target.value.toString());
            }
            this.setState({
                typeaheadCurrIndex: -1,
                typeaheadInputValue: e.target.value,
                creatableValue: e.target.value
            });
            this.updateTypeAheadFilteredChildren(e.target.value.toString(), e);
            this.refCollection = [[]];
        };
        this.updateTypeAheadFilteredChildren = (typeaheadInputValue, e) => {
            let typeaheadFilteredChildren;
            const { onFilter, isCreatable, onCreateOption, createText, noResultsFoundText, children, isGrouped } = this.props;
            if (onFilter) {
                typeaheadFilteredChildren = onFilter(e) || children;
            }
            else {
                let input;
                try {
                    input = new RegExp(typeaheadInputValue.toString(), 'i');
                }
                catch (err) {
                    input = new RegExp(typeaheadInputValue.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                }
                const childrenArray = react.Children.toArray(children);
                if (isGrouped) {
                    const childFilter = (child) => child.props.value && this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
                    typeaheadFilteredChildren =
                        typeaheadInputValue.toString() !== ''
                            ? react.Children.map(children, group => {
                                if (group.type === SelectGroup) {
                                    const filteredGroupChildren = react.Children.toArray(group.props.children).filter(childFilter);
                                    if (filteredGroupChildren.length > 0) {
                                        return react.cloneElement(group, {
                                            titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                                            children: filteredGroupChildren
                                        });
                                    }
                                }
                                else {
                                    return react.Children.toArray(group).filter(childFilter);
                                }
                            })
                            : childrenArray;
                }
                else {
                    typeaheadFilteredChildren =
                        typeaheadInputValue.toString() !== ''
                            ? childrenArray.filter(child => {
                                const valueToCheck = child.props.value;
                                // Dividers don't have value and should not be filtered
                                if (!valueToCheck) {
                                    return true;
                                }
                                const isSelectOptionObject = typeof valueToCheck !== 'string' &&
                                    valueToCheck.toString &&
                                    valueToCheck.compareTo;
                                if (isSelectOptionObject) {
                                    return valueToCheck.compareTo(typeaheadInputValue);
                                }
                                else {
                                    return this.getDisplay(child.props.value.toString(), 'text').search(input) === 0;
                                }
                            })
                            : childrenArray;
                }
            }
            if (!typeaheadFilteredChildren) {
                typeaheadFilteredChildren = [];
            }
            if (typeaheadFilteredChildren.length === 0) {
                !isCreatable &&
                    typeaheadFilteredChildren.push(react.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
            }
            if (isCreatable && typeaheadInputValue !== '') {
                const newValue = typeaheadInputValue;
                typeaheadFilteredChildren.push(react.createElement(SelectOption, { key: 0, value: newValue, onClick: () => onCreateOption && onCreateOption(newValue) },
                    createText,
                    " \"",
                    newValue,
                    "\""));
            }
            this.setState({
                typeaheadFilteredChildren
            });
        };
        this.onClick = (e) => {
            if (!this.props.isOpen) {
                this.props.onToggle(true);
            }
            e.stopPropagation();
        };
        this.clearSelection = (e) => {
            e.stopPropagation();
            this.setState({
                typeaheadInputValue: null,
                typeaheadFilteredChildren: react.Children.toArray(this.props.children),
                typeaheadCurrIndex: -1
            });
        };
        this.sendRef = (optionRef, favoriteRef, optionContainerRef, index) => {
            this.refCollection[index] = [optionRef, favoriteRef];
            this.optionContainerRefCollection[index] = optionContainerRef;
        };
        this.handleMenuKeys = (index, innerIndex, position) => {
            keyHandler(index, innerIndex, position, this.refCollection, this.refCollection);
            if (this.props.variant === SelectVariant.typeahead || this.props.variant === SelectVariant.typeaheadMulti) {
                if (position !== 'tab') {
                    this.handleTypeaheadKeys(position);
                }
            }
        };
        this.moveFocus = (nextIndex, updateCurrentIndex = true) => {
            const { isCreatable, createText } = this.props;
            const hasDescriptionElm = Boolean(this.refCollection[nextIndex][0] && this.refCollection[nextIndex][0].classList.contains('pf-m-description'));
            const optionTextElm = hasDescriptionElm
                ? this.refCollection[nextIndex][0].firstElementChild
                : this.refCollection[nextIndex][0];
            let typeaheadInputValue = '';
            if (isCreatable && optionTextElm.innerText.includes(createText)) {
                typeaheadInputValue = this.state.creatableValue;
            }
            else if (optionTextElm) {
                typeaheadInputValue = optionTextElm.innerText;
            }
            this.setState(prevState => ({
                typeaheadCurrIndex: updateCurrentIndex ? nextIndex : prevState.typeaheadCurrIndex,
                typeaheadStoredIndex: nextIndex,
                typeaheadInputValue
            }));
        };
        this.handleTypeaheadKeys = (position) => {
            const { isOpen, onFavorite } = this.props;
            const { typeaheadCurrIndex, tabbedIntoFavoritesMenu, typeaheadStoredIndex } = this.state;
            const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
            if (isOpen) {
                if (position === 'enter') {
                    if (typeaheadActiveChild || (this.refCollection[0] && this.refCollection[0][0])) {
                        this.setState({
                            typeaheadInputValue: (typeaheadActiveChild && typeaheadActiveChild.innerText) || this.refCollection[0][0].innerText
                        });
                        if (typeaheadActiveChild) {
                            typeaheadActiveChild.click();
                        }
                        else {
                            this.refCollection[0][0].click();
                        }
                    }
                }
                else if (position === 'tab') {
                    if (onFavorite) {
                        if (this.inputRef.current === document.activeElement) {
                            let indexForFocus = 0;
                            if (typeaheadCurrIndex !== -1) {
                                indexForFocus = typeaheadCurrIndex;
                            }
                            else if (typeaheadStoredIndex !== -1) {
                                indexForFocus = typeaheadStoredIndex;
                            }
                            if (this.refCollection[indexForFocus] !== null && this.refCollection[indexForFocus][0] !== null) {
                                this.refCollection[indexForFocus][0].focus();
                            }
                            else {
                                this.clearRef.current.focus();
                            }
                            this.setState({
                                tabbedIntoFavoritesMenu: true,
                                typeaheadCurrIndex: -1
                            });
                        }
                        else {
                            this.inputRef.current.focus();
                            this.setState({ tabbedIntoFavoritesMenu: false });
                        }
                    }
                    else {
                        this.props.onToggle(false);
                    }
                }
                else if (!tabbedIntoFavoritesMenu) {
                    let nextIndex;
                    if (typeaheadCurrIndex === -1 && position === 'down') {
                        nextIndex = 0;
                    }
                    else if (typeaheadCurrIndex === -1 && position === 'up') {
                        nextIndex = this.refCollection.length - 1;
                    }
                    else if (position !== 'left' && position !== 'right') {
                        nextIndex = getNextIndex(typeaheadCurrIndex, position, this.refCollection);
                    }
                    else {
                        nextIndex = typeaheadCurrIndex;
                    }
                    if (this.refCollection[nextIndex] === null) {
                        return;
                    }
                    this.moveFocus(nextIndex);
                }
                else {
                    const nextIndex = this.refCollection.findIndex(ref => ref !== undefined && (ref[0] === document.activeElement || ref[1] === document.activeElement));
                    this.moveFocus(nextIndex);
                }
            }
        };
        this.onClickTypeaheadToggleButton = () => {
            if (this.inputRef && this.inputRef.current) {
                this.inputRef.current.focus();
            }
        };
        this.getDisplay = (value, type = 'node') => {
            if (!value) {
                return;
            }
            const item = this.props.isGrouped
                ? react.Children.toArray(this.props.children)
                    .reduce((acc, curr) => [...acc, ...react.Children.toArray(curr.props.children)], [])
                    .find(child => child.props.value.toString() === value.toString())
                : react.Children.toArray(this.props.children).find(child => child.props.value &&
                    child.props.value.toString() === value.toString());
            if (item) {
                if (item && item.props.children) {
                    if (type === 'node') {
                        return item.props.children;
                    }
                    return this.findText(item);
                }
                return item.props.value.toString();
            }
            return value.toString();
        };
        this.findText = (item) => {
            if (typeof item === 'string') {
                return item;
            }
            else if (!react.isValidElement(item)) {
                return '';
            }
            else {
                const multi = [];
                react.Children.toArray(item.props.children).forEach(child => multi.push(this.findText(child)));
                return multi.join('');
            }
        };
        this.generateSelectedBadge = () => {
            const { customBadgeText, selections } = this.props;
            if (customBadgeText !== null) {
                return customBadgeText;
            }
            if (Array.isArray(selections) && selections.length > 0) {
                return selections.length;
            }
            return null;
        };
    }
    extendTypeaheadChildren(typeaheadCurrIndex, favoritesGroup) {
        const { isGrouped, onFavorite } = this.props;
        const typeaheadChildren = favoritesGroup
            ? favoritesGroup.concat(this.state.typeaheadFilteredChildren)
            : this.state.typeaheadFilteredChildren;
        const activeElement = this.optionContainerRefCollection[typeaheadCurrIndex];
        let typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
        if (typeaheadActiveChild && typeaheadActiveChild.classList.contains('pf-m-description')) {
            typeaheadActiveChild = typeaheadActiveChild.firstElementChild;
        }
        this.refCollection = [[]];
        this.optionContainerRefCollection = [];
        if (isGrouped) {
            return react.Children.map(typeaheadChildren, (group) => {
                if (group.type === Divider) {
                    return group;
                }
                else if (group.type === SelectGroup && onFavorite) {
                    return react.cloneElement(group, {
                        titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                        children: react.Children.map(group.props.children, (child) => child.type === Divider
                            ? child
                            : react.cloneElement(child, {
                                isFocused: activeElement &&
                                    (activeElement.id === child.props.id ||
                                        (this.props.isCreatable &&
                                            typeaheadActiveChild.innerText ===
                                                `{createText} "${group.props.value}"`))
                            }))
                    });
                }
                else if (group.type === SelectGroup) {
                    return react.cloneElement(group, {
                        titleId: group.props.label && group.props.label.replace(/\W/g, '-'),
                        children: react.Children.map(group.props.children, (child) => child.type === Divider
                            ? child
                            : react.cloneElement(child, {
                                isFocused: typeaheadActiveChild &&
                                    (typeaheadActiveChild.innerText === child.props.value.toString() ||
                                        (this.props.isCreatable &&
                                            typeaheadActiveChild.innerText ===
                                                `{createText} "${child.props.value}"`))
                            }))
                    });
                }
                else {
                    // group has been filtered down to SelectOption
                    return react.cloneElement(group, {
                        isFocused: typeaheadActiveChild &&
                            (typeaheadActiveChild.innerText === group.props.value.toString() ||
                                (this.props.isCreatable && typeaheadActiveChild.innerText === `{createText} "${group.props.value}"`))
                    });
                }
            });
        }
        return typeaheadChildren.map((child) => {
            const childElement = child;
            return childElement.type.displayName === 'Divider'
                ? child
                : react.cloneElement(child, {
                    isFocused: typeaheadActiveChild &&
                        (typeaheadActiveChild.innerText === child.props.value.toString() ||
                            (this.props.isCreatable &&
                                typeaheadActiveChild.innerText === `{createText} "${child.props.value}"`))
                });
        });
    }
    render() {
        const _a = this.props, { children, chipGroupProps, chipGroupComponent, className, customContent, variant, direction, onToggle, onSelect, onClear, toggleId, isOpen, isGrouped, isPlain, isDisabled, selections: selectionsProp, typeAheadAriaLabel, clearSelectionsAriaLabel, toggleAriaLabel, removeSelectionAriaLabel, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, placeholderText, width, maxHeight, toggleIcon, ouiaId, ouiaSafe, hasInlineFilter, isCheckboxSelectionBadgeHidden, inlineFilterPlaceholderText, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onFilter, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onTypeaheadInputChanged, onCreateOption, isCreatable, createText, noResultsFoundText, customBadgeText, inputIdPrefix, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        menuAppendTo, favorites, onFavorite, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        favoritesLabel } = _a, props = __rest(_a, ["children", "chipGroupProps", "chipGroupComponent", "className", "customContent", "variant", "direction", "onToggle", "onSelect", "onClear", "toggleId", "isOpen", "isGrouped", "isPlain", "isDisabled", "selections", "typeAheadAriaLabel", "clearSelectionsAriaLabel", "toggleAriaLabel", "removeSelectionAriaLabel", 'aria-label', 'aria-labelledby', "placeholderText", "width", "maxHeight", "toggleIcon", "ouiaId", "ouiaSafe", "hasInlineFilter", "isCheckboxSelectionBadgeHidden", "inlineFilterPlaceholderText", "onFilter", "onTypeaheadInputChanged", "onCreateOption", "isCreatable", "createText", "noResultsFoundText", "customBadgeText", "inputIdPrefix", "menuAppendTo", "favorites", "onFavorite", "favoritesLabel"]);
        const { openedOnEnter, typeaheadCurrIndex, typeaheadInputValue, typeaheadFilteredChildren, favoritesGroup } = this.state;
        const selectToggleId = toggleId || `pf-select-toggle-id-${currentId$1++}`;
        const selections = Array.isArray(selectionsProp) ? selectionsProp : [selectionsProp];
        const hasAnySelections = Boolean(selections[0] && selections[0] !== '');
        const typeaheadActiveChild = this.getTypeaheadActiveChild(typeaheadCurrIndex);
        let childPlaceholderText = null;
        // If onFavorites is set,  add isFavorite prop to children and add a Favorites group to the SelectMenu
        let renderableItems = [];
        if (onFavorite) {
            // if variant is type-ahead call the extendTypeaheadChildren before adding favorites
            let tempExtendedChildren = children;
            if (variant === 'typeahead' || variant === 'typeaheadmulti') {
                tempExtendedChildren = this.extendTypeaheadChildren(typeaheadCurrIndex, favoritesGroup);
            }
            else if (onFavorite) {
                tempExtendedChildren = favoritesGroup.concat(children);
            }
            // mark items that are favorited with isFavorite
            renderableItems = extendItemsWithFavorite(tempExtendedChildren, isGrouped, favorites);
        }
        else {
            renderableItems = children;
        }
        if (!customContent) {
            if (!hasAnySelections && !placeholderText) {
                const childPlaceholder = react.Children.toArray(children).filter((child) => child.props.isPlaceholder === true);
                childPlaceholderText =
                    (childPlaceholder[0] && this.getDisplay(childPlaceholder[0].props.value, 'node')) ||
                        (children[0] && this.getDisplay(children[0].props.value, 'node'));
            }
        }
        const hasOnClear = onClear !== Select.defaultProps.onClear;
        const clearBtn = (react.createElement("button", { className: css(buttonStyles.button, buttonStyles.modifiers.plain, styles$7.selectToggleClear), onClick: e => {
                this.clearSelection(e);
                onClear(e);
            }, "aria-label": clearSelectionsAriaLabel, type: "button", disabled: isDisabled, ref: this.clearRef, onKeyDown: event => {
                if (event.key === KeyTypes.Enter) {
                    this.clearRef.current.click();
                }
            } },
            react.createElement(TimesCircleIcon, { "aria-hidden": true })));
        let selectedChips = null;
        if (variant === SelectVariant.typeaheadMulti) {
            selectedChips = chipGroupComponent ? (chipGroupComponent) : (react.createElement(ChipGroup, Object.assign({}, chipGroupProps), selections &&
                selections.map(item => (react.createElement(Chip, { key: item, onClick: (e) => onSelect(e, item), closeBtnAriaLabel: removeSelectionAriaLabel }, this.getDisplay(item, 'node'))))));
        }
        let filterWithChildren = children;
        if (hasInlineFilter) {
            const filterBox = (react.createElement(react.Fragment, null,
                react.createElement("div", { key: "inline-filter", className: css(styles$7.selectMenuSearch) },
                    react.createElement("input", { key: "inline-filter-input", type: "search", className: css(formStyles.formControl, formStyles.modifiers.search), onChange: this.onChange, placeholder: inlineFilterPlaceholderText, onKeyDown: event => {
                            if (event.key === KeyTypes.ArrowUp) {
                                this.handleMenuKeys(0, 0, 'up');
                            }
                            else if (event.key === KeyTypes.ArrowDown) {
                                this.handleMenuKeys(0, 0, 'down');
                            }
                            else if (event.key === KeyTypes.ArrowLeft) {
                                this.handleMenuKeys(0, 0, 'left');
                            }
                            else if (event.key === KeyTypes.ArrowRight) {
                                this.handleMenuKeys(0, 0, 'right');
                            }
                            else if (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox) {
                                // More modal-like experience for checkboxes
                                // Let SelectOption handle this
                                if (event.shiftKey) {
                                    this.handleMenuKeys(0, 0, 'up');
                                }
                                else {
                                    this.handleMenuKeys(0, 0, 'down');
                                }
                                event.stopPropagation();
                                event.preventDefault();
                            }
                        }, ref: this.filterRef, autoComplete: "off" })),
                react.createElement(Divider, { key: "inline-filter-divider" })));
            this.refCollection[0][0] = this.filterRef.current;
            filterWithChildren = [filterBox, ...typeaheadFilteredChildren].map((option, index) => react.cloneElement(option, { key: index }));
        }
        let variantProps;
        let variantChildren;
        if (customContent) {
            variantProps = {
                selected: selections,
                openedOnEnter,
                isCustomContent: true
            };
            variantChildren = customContent;
        }
        else {
            switch (variant) {
                case 'single':
                    variantProps = {
                        selected: selections[0],
                        openedOnEnter
                    };
                    variantChildren = renderableItems;
                    break;
                case 'checkbox':
                    variantProps = {
                        checked: selections,
                        isGrouped,
                        hasInlineFilter,
                        openedOnEnter
                    };
                    variantChildren = filterWithChildren;
                    break;
                case 'typeahead':
                    variantProps = {
                        selected: selections[0],
                        openedOnEnter
                    };
                    variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
                    if (variantChildren.length === 0) {
                        variantChildren.push(react.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
                    }
                    break;
                case 'typeaheadmulti':
                    variantProps = {
                        selected: selections,
                        openedOnEnter
                    };
                    variantChildren = onFavorite ? renderableItems : this.extendTypeaheadChildren(typeaheadCurrIndex);
                    if (variantChildren.length === 0) {
                        variantChildren.push(react.createElement(SelectOption, { isDisabled: true, key: 0, value: noResultsFoundText, isNoResultsOption: true }));
                    }
                    break;
            }
        }
        const menuContainer = (react.createElement(SelectMenu, Object.assign({}, props, { isGrouped: isGrouped, selected: selections }, variantProps, { openedOnEnter: openedOnEnter, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, sendRef: this.sendRef, keyHandler: this.handleMenuKeys, maxHeight: maxHeight, ref: this.menuComponentRef }), variantChildren));
        const popperContainer = (react.createElement("div", Object.assign({ className: css(styles$7.select, isOpen && styles$7.modifiers.expanded, direction === SelectDirection.up && styles$7.modifiers.top, className) }, (width && { style: { width } })), isOpen && menuContainer));
        const mainContainer = (react.createElement("div", Object.assign({ className: css(styles$7.select, isOpen && styles$7.modifiers.expanded, direction === SelectDirection.up && styles$7.modifiers.top, className), ref: this.parentRef }, getOUIAProps(Select.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), (width && { style: { width } })),
            react.createElement(SelectToggle, { id: selectToggleId, parentRef: this.parentRef, menuRef: this.menuComponentRef, isOpen: isOpen, isPlain: isPlain, onToggle: onToggle, onEnter: this.onEnter, onClose: this.onClose, variant: variant, "aria-labelledby": `${ariaLabelledBy || ''} ${selectToggleId}`, "aria-label": toggleAriaLabel, handleTypeaheadKeys: this.handleTypeaheadKeys, isDisabled: isDisabled, hasClearButton: hasOnClear, onClickTypeaheadToggleButton: this.onClickTypeaheadToggleButton },
                customContent && (react.createElement("div", { className: css(styles$7.selectToggleWrapper) },
                    toggleIcon && react.createElement("span", { className: css(styles$7.selectToggleIcon) }, toggleIcon),
                    react.createElement("span", { className: css(styles$7.selectToggleText) }, placeholderText))),
                variant === SelectVariant.single && !customContent && (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: css(styles$7.selectToggleWrapper) },
                        toggleIcon && react.createElement("span", { className: css(styles$7.selectToggleIcon) }, toggleIcon),
                        react.createElement("span", { className: css(styles$7.selectToggleText) }, this.getDisplay(selections[0], 'node') || placeholderText || childPlaceholderText)),
                    hasOnClear && hasAnySelections && clearBtn)),
                variant === SelectVariant.checkbox && !customContent && (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: css(styles$7.selectToggleWrapper) },
                        toggleIcon && react.createElement("span", { className: css(styles$7.selectToggleIcon) }, toggleIcon),
                        react.createElement("span", { className: css(styles$7.selectToggleText) }, placeholderText),
                        !isCheckboxSelectionBadgeHidden && hasAnySelections && (react.createElement("div", { className: css(styles$7.selectToggleBadge) },
                            react.createElement("span", { className: css(badgeStyles.badge, badgeStyles.modifiers.read) }, this.generateSelectedBadge())))),
                    hasOnClear && hasAnySelections && clearBtn)),
                variant === SelectVariant.typeahead && !customContent && (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: css(styles$7.selectToggleWrapper) },
                        toggleIcon && react.createElement("span", { className: css(styles$7.selectToggleIcon) }, toggleIcon),
                        react.createElement("input", { className: css(formStyles.formControl, styles$7.selectToggleTypeahead), "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id, id: `${selectToggleId}-select-typeahead`, "aria-label": typeAheadAriaLabel, placeholder: placeholderText, value: typeaheadInputValue !== null
                                ? typeaheadInputValue
                                : this.getDisplay(selections[0], 'text') || '', type: "text", onClick: this.onClick, onChange: this.onChange, autoComplete: "off", disabled: isDisabled, ref: this.inputRef })),
                    hasOnClear && (selections[0] || typeaheadInputValue) && clearBtn)),
                variant === SelectVariant.typeaheadMulti && !customContent && (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: css(styles$7.selectToggleWrapper) },
                        toggleIcon && react.createElement("span", { className: css(styles$7.selectToggleIcon) }, toggleIcon),
                        selections && Array.isArray(selections) && selections.length > 0 && selectedChips,
                        react.createElement("input", { className: css(formStyles.formControl, styles$7.selectToggleTypeahead), "aria-activedescendant": typeaheadActiveChild && typeaheadActiveChild.id, id: `${selectToggleId}-select-multi-typeahead-typeahead`, "aria-label": typeAheadAriaLabel, placeholder: placeholderText, value: typeaheadInputValue !== null ? typeaheadInputValue : '', type: "text", onChange: this.onChange, onClick: this.onClick, autoComplete: "off", disabled: isDisabled, ref: this.inputRef })),
                    hasOnClear && ((selections && selections.length > 0) || typeaheadInputValue) && clearBtn))),
            isOpen && menuAppendTo === 'inline' && menuContainer));
        const getParentElement = () => {
            if (this.parentRef && this.parentRef.current) {
                return this.parentRef.current.parentElement;
            }
            return null;
        };
        return (react.createElement(GenerateId, null, randomId => (react.createElement(SelectContext.Provider, { value: { onSelect, onFavorite, onClose: this.onClose, variant, inputIdPrefix: inputIdPrefix || randomId } }, menuAppendTo === 'inline' ? (mainContainer) : (react.createElement(Popper, { trigger: mainContainer, popper: popperContainer, direction: direction, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }))))));
    }
}
Select.displayName = 'Select';
Select.defaultProps = {
    children: [],
    className: '',
    direction: SelectDirection.down,
    toggleId: null,
    isOpen: false,
    isGrouped: false,
    isPlain: false,
    isDisabled: false,
    isCreatable: false,
    'aria-label': '',
    'aria-labelledby': '',
    typeAheadAriaLabel: '',
    clearSelectionsAriaLabel: 'Clear all',
    toggleAriaLabel: 'Options menu',
    removeSelectionAriaLabel: 'Remove',
    selections: [],
    createText: 'Create',
    placeholderText: '',
    noResultsFoundText: 'No results found',
    variant: SelectVariant.single,
    width: '',
    onClear: () => undefined,
    onCreateOption: () => undefined,
    toggleIcon: null,
    onFilter: null,
    onTypeaheadInputChanged: null,
    customContent: null,
    hasInlineFilter: false,
    inlineFilterPlaceholderText: null,
    customBadgeText: null,
    inputIdPrefix: '',
    menuAppendTo: 'inline',
    favorites: [],
    favoritesLabel: 'Favorites',
    ouiaSafe: true,
    chipGroupComponent: null
};

var card = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "card": "pf-c-card",
  "cardActions": "pf-c-card__actions",
  "cardBody": "pf-c-card__body",
  "cardExpandableContent": "pf-c-card__expandable-content",
  "cardFooter": "pf-c-card__footer",
  "cardHeader": "pf-c-card__header",
  "cardHeaderToggle": "pf-c-card__header-toggle",
  "cardHeaderToggleIcon": "pf-c-card__header-toggle-icon",
  "cardTitle": "pf-c-card__title",
  "divider": "pf-c-divider",
  "modifiers": {
    "hoverable": "pf-m-hoverable",
    "selectable": "pf-m-selectable",
    "selected": "pf-m-selected",
    "compact": "pf-m-compact",
    "displayLg": "pf-m-display-lg",
    "flat": "pf-m-flat",
    "rounded": "pf-m-rounded",
    "expanded": "pf-m-expanded",
    "noFill": "pf-m-no-fill",
    "overpassFont": "pf-m-overpass-font"
  }
};
});

var styles$a = /*@__PURE__*/getDefaultExportFromCjs(card);

const CardContext = react.createContext({
    cardId: '',
    isExpanded: false
});
const Card = (_a) => {
    var { children = null, id = '', className = '', component = 'article', isHoverable = false, isCompact = false, isSelectable = false, isSelected = false, isFlat = false, isExpanded = false, isRounded = false, isLarge = false, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "id", "className", "component", "isHoverable", "isCompact", "isSelectable", "isSelected", "isFlat", "isExpanded", "isRounded", "isLarge", "ouiaId", "ouiaSafe"]);
    const Component = component;
    const ouiaProps = useOUIAProps(Card.displayName, ouiaId, ouiaSafe);
    if (isCompact && isLarge) {
        // eslint-disable-next-line no-console
        console.warn('Card: Cannot use isCompact with isLarge. Defaulting to isCompact');
        isLarge = false;
    }
    return (react.createElement(CardContext.Provider, { value: {
            cardId: id,
            isExpanded
        } },
        react.createElement(Component, Object.assign({ id: id, className: css(styles$a.card, isHoverable && styles$a.modifiers.hoverable, isCompact && styles$a.modifiers.compact, isSelectable && styles$a.modifiers.selectable, isSelected && isSelectable && styles$a.modifiers.selected, isExpanded && styles$a.modifiers.expanded, isFlat && styles$a.modifiers.flat, isRounded && styles$a.modifiers.rounded, isLarge && styles$a.modifiers.displayLg, className), tabIndex: isSelectable ? '0' : undefined }, props, ouiaProps), children)));
};
Card.displayName = 'Card';

const CardActions = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({ className: css(styles$a.cardActions, className) }, props), children));
};
CardActions.displayName = 'CardActions';

const CardBody = (_a) => {
    var { children = null, className = '', component = 'div', isFilled = true } = _a, props = __rest(_a, ["children", "className", "component", "isFilled"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({ className: css(styles$a.cardBody, !isFilled && styles$a.modifiers.noFill, className) }, props), children));
};
CardBody.displayName = 'CardBody';

const CardFooter = (_a) => {
    var { children = null, className = '', component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({ className: css(styles$a.cardFooter, className) }, props), children));
};
CardFooter.displayName = 'CardFooter';

const CardTitle = (_a) => {
    var { children = null, className = '', component = 'div' } = _a, props = __rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({ className: css(styles$a.cardTitle, className) }, props), children));
};
CardTitle.displayName = 'CardTitle';

const CardHeader = (_a) => {
    var { children = null, className = '', id, onExpand, toggleButtonProps } = _a, props = __rest(_a, ["children", "className", "id", "onExpand", "toggleButtonProps"]);
    return (react.createElement(CardContext.Consumer, null, ({ cardId }) => (react.createElement("div", Object.assign({ className: css(styles$a.cardHeader, className), id: id }, props),
        onExpand && (react.createElement("div", { className: css(styles$a.cardHeaderToggle) },
            react.createElement(Button, Object.assign({ variant: "plain", type: "button", onClick: evt => {
                    onExpand(evt, cardId);
                } }, toggleButtonProps),
                react.createElement("span", { className: css(styles$a.cardHeaderToggleIcon) },
                    react.createElement(AngleRightIcon, { "aria-hidden": "true" }))))),
        children))));
};
CardHeader.displayName = 'CardHeader';

// tslint:disable-next-line:no-empty
const defaultOnChange = () => { };
class Checkbox extends react.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event.currentTarget.checked, event);
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, className, onChange, isValid, isDisabled, isChecked, label, checked, defaultChecked, description } = _a, props = __rest(_a, ['aria-label', "className", "onChange", "isValid", "isDisabled", "isChecked", "label", "checked", "defaultChecked", "description"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Checkbox:', 'id is required to make input accessible');
        }
        const checkedProps = {};
        if ([true, false].includes(checked) || isChecked === true) {
            checkedProps.checked = checked || isChecked;
        }
        if (onChange !== defaultOnChange) {
            checkedProps.checked = isChecked;
        }
        if ([false, true].includes(defaultChecked)) {
            checkedProps.defaultChecked = defaultChecked;
        }
        checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
        return (react.createElement("div", { className: css(checkStyles.check, !label && checkStyles.modifiers.standalone, className) },
            react.createElement("input", Object.assign({}, props, { className: css(checkStyles.checkInput), type: "checkbox", onChange: this.handleChange, "aria-invalid": !isValid, "aria-label": ariaLabel, disabled: isDisabled, ref: elem => elem && (elem.indeterminate = isChecked === null) }, checkedProps)),
            label && (react.createElement("label", { className: css(checkStyles.checkLabel, isDisabled && checkStyles.modifiers.disabled), htmlFor: props.id }, label)),
            description && react.createElement("div", { className: css(checkStyles.checkDescription) }, description)));
    }
}
Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    isChecked: false,
    onChange: defaultOnChange
};

var clipboardCopy = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "clipboardCopy": "pf-c-clipboard-copy",
  "clipboardCopyExpandableContent": "pf-c-clipboard-copy__expandable-content",
  "clipboardCopyGroup": "pf-c-clipboard-copy__group",
  "clipboardCopyToggleIcon": "pf-c-clipboard-copy__toggle-icon",
  "modifiers": {
    "expanded": "pf-m-expanded"
  }
};
});

var styles$b = /*@__PURE__*/getDefaultExportFromCjs(clipboardCopy);

const CopyIconConfig = {
  name: 'CopyIcon',
  height: 512,
  width: 448,
  svgPath: 'M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z',
  yOffset: 0,
  xOffset: 0,
};

const CopyIcon = createIcon(CopyIconConfig);

const ClipboardCopyButton = (_a) => {
    var { onClick, exitDelay = 100, entryDelay = 100, maxWidth = '100px', position = 'top', 'aria-label': ariaLabel = 'Copyable input', id, textId, children } = _a, props = __rest(_a, ["onClick", "exitDelay", "entryDelay", "maxWidth", "position", 'aria-label', "id", "textId", "children"]);
    return (react.createElement(Tooltip, { trigger: "mouseenter focus click", exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, content: react.createElement("div", null, children) },
        react.createElement(Button, Object.assign({ type: "button", variant: "control", onClick: onClick, "aria-label": ariaLabel, id: id, "aria-labelledby": `${id} ${textId}` }, props),
            react.createElement(CopyIcon, null))));
};
ClipboardCopyButton.displayName = 'ClipboardCopyButton';

const ClipboardCopyToggle = (_a) => {
    var { onClick, id, textId, contentId, isExpanded = false } = _a, props = __rest(_a, ["onClick", "id", "textId", "contentId", "isExpanded"]);
    return (react.createElement(Button, Object.assign({ type: "button", variant: "control", onClick: onClick, id: id, "aria-labelledby": `${id} ${textId}`, "aria-controls": `${id} ${contentId}`, "aria-expanded": isExpanded }, props), isExpanded ? react.createElement(AngleDownIcon, { "aria-hidden": "true" }) : react.createElement(AngleRightIcon, { "aria-hidden": "true" })));
};
ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';

class ClipboardCopyExpanded extends react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { className, children, onChange, isReadOnly, isCode } = _a, props = __rest(_a, ["className", "children", "onChange", "isReadOnly", "isCode"]);
        return (react.createElement("div", Object.assign({ suppressContentEditableWarning: true, className: css(styles$b.clipboardCopyExpandableContent, className), onInput: (e) => onChange(e.target.innerText, e), contentEditable: !isReadOnly }, props), isCode ? react.createElement("pre", null, children) : children));
    }
}
ClipboardCopyExpanded.displayName = 'ClipboardCopyExpanded';
ClipboardCopyExpanded.defaultProps = {
    onChange: () => undefined,
    className: '',
    isReadOnly: false,
    isCode: false
};

const clipboardCopyFunc = (event, text) => {
    const clipboard = event.currentTarget.parentElement;
    const el = document.createElement('textarea');
    el.value = text.toString();
    clipboard.appendChild(el);
    el.select();
    document.execCommand('copy');
    clipboard.removeChild(el);
};
var ClipboardCopyVariant;
(function (ClipboardCopyVariant) {
    ClipboardCopyVariant["inline"] = "inline";
    ClipboardCopyVariant["expansion"] = "expansion";
})(ClipboardCopyVariant || (ClipboardCopyVariant = {}));
class ClipboardCopy extends react.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.componentDidUpdate = (prevProps, prevState) => {
            if (prevProps.children !== this.props.children) {
                this.updateText(this.props.children);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.expandContent = (_event) => {
            this.setState(prevState => ({
                expanded: !prevState.expanded
            }));
        };
        this.updateText = (text) => {
            this.setState({ text });
            this.props.onChange(text);
        };
        this.render = () => {
            const _a = this.props, { 
            /* eslint-disable @typescript-eslint/no-unused-vars */
            isExpanded, onChange, // Don't pass to <div>
            /* eslint-enable @typescript-eslint/no-unused-vars */
            isReadOnly, isCode, exitDelay, maxWidth, entryDelay, switchDelay, onCopy, hoverTip, clickTip, textAriaLabel, toggleAriaLabel, variant, position, className } = _a, divProps = __rest(_a, ["isExpanded", "onChange", "isReadOnly", "isCode", "exitDelay", "maxWidth", "entryDelay", "switchDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className"]);
            const textIdPrefix = 'text-input-';
            const toggleIdPrefix = 'toggle-';
            const contentIdPrefix = 'content-';
            return (react.createElement("div", Object.assign({ className: css(styles$b.clipboardCopy, this.state.expanded && styles$b.modifiers.expanded, className) }, divProps),
                react.createElement(GenerateId, { prefix: "" }, id => (react.createElement(react.Fragment, null,
                    react.createElement("div", { className: css(styles$b.clipboardCopyGroup) },
                        variant === 'expansion' && (react.createElement(ClipboardCopyToggle, { isExpanded: this.state.expanded, onClick: this.expandContent, id: `${toggleIdPrefix}-${id}`, textId: `${textIdPrefix}-${id}`, contentId: `${contentIdPrefix}-${id}`, "aria-label": toggleAriaLabel })),
                        react.createElement(TextInput, { isReadOnly: isReadOnly || this.state.expanded, onChange: this.updateText, value: this.state.text, id: `text-input-${id}`, "aria-label": textAriaLabel }),
                        react.createElement(ClipboardCopyButton, { exitDelay: exitDelay, entryDelay: entryDelay, maxWidth: maxWidth, position: position, id: `copy-button-${id}`, textId: `text-input-${id}`, "aria-label": hoverTip, onClick: (event) => {
                                if (this.timer) {
                                    window.clearTimeout(this.timer);
                                    this.setState({ copied: false });
                                }
                                onCopy(event, this.state.text);
                                this.setState({ copied: true }, () => {
                                    this.timer = window.setTimeout(() => {
                                        this.setState({ copied: false });
                                        this.timer = null;
                                    }, switchDelay);
                                });
                            } }, this.state.copied ? clickTip : hoverTip)),
                    this.state.expanded && (react.createElement(ClipboardCopyExpanded, { isReadOnly: isReadOnly, isCode: isCode, id: `content-${id}`, onChange: this.updateText }, this.state.text)))))));
        };
        this.state = {
            text: this.props.children,
            expanded: this.props.isExpanded,
            copied: false
        };
    }
}
ClipboardCopy.displayName = 'ClipboardCopy';
ClipboardCopy.defaultProps = {
    hoverTip: 'Copy to clipboard',
    clickTip: 'Successfully copied to clipboard!',
    isReadOnly: false,
    isExpanded: false,
    isCode: false,
    variant: 'inline',
    position: TooltipPosition.top,
    maxWidth: '150px',
    exitDelay: 1600,
    entryDelay: 100,
    switchDelay: 2000,
    onCopy: clipboardCopyFunc,
    onChange: () => undefined,
    textAriaLabel: 'Copyable input',
    toggleAriaLabel: 'Show content'
};

var contextSelector = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "contextSelector": "pf-c-context-selector",
  "contextSelectorMenu": "pf-c-context-selector__menu",
  "contextSelectorMenuFooter": "pf-c-context-selector__menu-footer",
  "contextSelectorMenuList": "pf-c-context-selector__menu-list",
  "contextSelectorMenuListItem": "pf-c-context-selector__menu-list-item",
  "contextSelectorMenuSearch": "pf-c-context-selector__menu-search",
  "contextSelectorToggle": "pf-c-context-selector__toggle",
  "contextSelectorToggleIcon": "pf-c-context-selector__toggle-icon",
  "contextSelectorToggleText": "pf-c-context-selector__toggle-text",
  "modifiers": {
    "active": "pf-m-active",
    "expanded": "pf-m-expanded",
    "disabled": "pf-m-disabled"
  }
};
});

var styles$c = /*@__PURE__*/getDefaultExportFromCjs(contextSelector);

class ContextSelectorToggle extends react.Component {
    constructor() {
        super(...arguments);
        this.toggle = react.createRef();
        this.componentDidMount = () => {
            document.addEventListener('mousedown', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.onEscPress);
        };
        this.componentWillUnmount = () => {
            document.removeEventListener('mousedown', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.onEscPress);
        };
        this.onDocClick = (event) => {
            const { isOpen, parentRef, onToggle } = this.props;
            if (isOpen && parentRef && !parentRef.contains(event.target)) {
                onToggle(null, false);
                this.toggle.current.focus();
            }
        };
        this.onEscPress = (event) => {
            const { isOpen, parentRef, onToggle } = this.props;
            const keyCode = event.keyCode || event.which;
            if (isOpen && keyCode === KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
                onToggle(null, false);
                this.toggle.current.focus();
            }
        };
        this.onKeyDown = (event) => {
            const { isOpen, onToggle, onEnter } = this.props;
            if ((event.keyCode === KEY_CODES.TAB && !isOpen) || event.key !== KEY_CODES.ENTER) {
                return;
            }
            event.preventDefault();
            if ((event.keyCode === KEY_CODES.TAB || event.keyCode === KEY_CODES.ENTER || event.key !== KEY_CODES.SPACE) &&
                isOpen) {
                onToggle(null, !isOpen);
            }
            else if ((event.keyCode === KEY_CODES.ENTER || event.key === ' ') && !isOpen) {
                onToggle(null, !isOpen);
                onEnter();
            }
        };
    }
    render() {
        const _a = this.props, { className, toggleText, isOpen, onToggle, id, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        isActive, onEnter, parentRef } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ["className", "toggleText", "isOpen", "onToggle", "id", "isActive", "onEnter", "parentRef"]);
        return (react.createElement("button", Object.assign({}, props, { id: id, ref: this.toggle, className: css(styles$c.contextSelectorToggle, isActive && styles$c.modifiers.active, className), type: "button", onClick: event => onToggle(event, !isOpen), "aria-expanded": isOpen, onKeyDown: this.onKeyDown }),
            react.createElement("span", { className: css(styles$c.contextSelectorToggleText) }, toggleText),
            react.createElement("span", { className: css(styles$c.contextSelectorToggleIcon) },
                react.createElement(CaretDownIcon, { "aria-hidden": true }))));
    }
}
ContextSelectorToggle.displayName = 'ContextSelectorToggle';
ContextSelectorToggle.defaultProps = {
    className: '',
    toggleText: '',
    isOpen: false,
    onEnter: () => undefined,
    parentRef: null,
    isActive: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (event, value) => undefined
};

class ContextSelectorMenuList extends react.Component {
    constructor() {
        super(...arguments);
        this.refsCollection = [];
        this.sendRef = (index, ref) => {
            this.refsCollection[index] = ref;
        };
        this.render = () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = this.props, { className, isOpen, children } = _a, props = __rest(_a, ["className", "isOpen", "children"]);
            return (react.createElement("ul", Object.assign({ className: css(styles$c.contextSelectorMenuList, className), hidden: !isOpen, role: "menu" }, props), this.extendChildren()));
        };
    }
    extendChildren() {
        return react.Children.map(this.props.children, (child, index) => react.cloneElement(child, {
            sendRef: this.sendRef,
            index
        }));
    }
}
ContextSelectorMenuList.displayName = 'ContextSelectorMenuList';
ContextSelectorMenuList.defaultProps = {
    children: null,
    className: '',
    isOpen: true
};

const ContextSelectorContext = react.createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelect: (event, value) => undefined
});

var inputGroup = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "formControl": "pf-c-form-control",
  "inputGroup": "pf-c-input-group",
  "inputGroupText": "pf-c-input-group__text",
  "modifiers": {
    "plain": "pf-m-plain"
  }
};
});

var styles$d = /*@__PURE__*/getDefaultExportFromCjs(inputGroup);

class FormSelect extends react.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event.currentTarget.value, event);
        };
        if (!props.id && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('FormSelect requires either an id or aria-label to be specified');
        }
        this.state = {
            ouiaStateId: getDefaultOUIAId(FormSelect.displayName, props.validated)
        };
    }
    render() {
        const _a = this.props, { children, className, value, validated, isDisabled, isRequired, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "value", "validated", "isDisabled", "isRequired", "ouiaId", "ouiaSafe"]);
        /* find selected option and get placeholder flag */
        const selectedOption = react.Children.toArray(children).find((option) => option.props.value === value);
        const isSelectedPlaceholder = selectedOption && selectedOption.props.isPlaceholder;
        return (react.createElement("select", Object.assign({}, props, { className: css(formStyles.formControl, className, validated === ValidatedOptions.success && formStyles.modifiers.success, validated === ValidatedOptions.warning && formStyles.modifiers.warning, isSelectedPlaceholder && formStyles.modifiers.placeholder), "aria-invalid": validated === ValidatedOptions.error }, getOUIAProps(FormSelect.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { onChange: this.handleChange, disabled: isDisabled, required: isRequired, value: value }), children));
    }
}
FormSelect.displayName = 'FormSelect';
FormSelect.defaultProps = {
    className: '',
    value: '',
    validated: 'default',
    isDisabled: false,
    isRequired: false,
    onBlur: () => undefined,
    onFocus: () => undefined,
    onChange: () => undefined,
    ouiaSafe: true
};

var TextAreResizeOrientation;
(function (TextAreResizeOrientation) {
    TextAreResizeOrientation["horizontal"] = "horizontal";
    TextAreResizeOrientation["vertical"] = "vertical";
    TextAreResizeOrientation["both"] = "both";
})(TextAreResizeOrientation || (TextAreResizeOrientation = {}));
class TextAreaBase extends react.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            if (this.props.onChange) {
                this.props.onChange(event.currentTarget.value, event);
            }
        };
        if (!props.id && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('TextArea: TextArea requires either an id or aria-label to be specified');
        }
    }
    render() {
        const _a = this.props, { className, value, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange, validated, isRequired, isDisabled, isReadOnly, resizeOrientation, innerRef, readOnly, disabled } = _a, props = __rest(_a, ["className", "value", "onChange", "validated", "isRequired", "isDisabled", "isReadOnly", "resizeOrientation", "innerRef", "readOnly", "disabled"]);
        const orientation = `resize${capitalize(resizeOrientation)}`;
        return (react.createElement("textarea", Object.assign({ className: css(formStyles.formControl, className, resizeOrientation !== TextAreResizeOrientation.both && formStyles.modifiers[orientation], validated === ValidatedOptions.success && formStyles.modifiers.success, validated === ValidatedOptions.warning && formStyles.modifiers.warning), onChange: this.handleChange }, (typeof this.props.defaultValue !== 'string' && { value }), { "aria-invalid": validated === ValidatedOptions.error, required: isRequired, disabled: isDisabled || disabled, readOnly: isReadOnly || readOnly, ref: innerRef }, props)));
    }
}
TextAreaBase.displayName = 'TextArea';
TextAreaBase.defaultProps = {
    innerRef: react.createRef(),
    className: '',
    isRequired: false,
    isDisabled: false,
    validated: 'default',
    resizeOrientation: 'both',
    'aria-label': null
};
const TextArea = react.forwardRef((props, ref) => (react.createElement(TextAreaBase, Object.assign({}, props, { innerRef: ref }))));
TextArea.displayName = 'TextArea';

const InputGroup = (_a) => {
    var { className = '', children } = _a, props = __rest(_a, ["className", "children"]);
    const formCtrls = [FormSelect, TextArea, TextInput].map(comp => comp.displayName);
    const idItem = react.Children.toArray(children).find((child) => !formCtrls.includes(child.type.displayName) && child.props.id);
    return (react.createElement("div", Object.assign({ className: css(styles$d.inputGroup, className) }, props), idItem
        ? react.Children.map(children, (child) => formCtrls.includes(child.type.displayName)
            ? react.cloneElement(child, { 'aria-describedby': idItem.props.id })
            : child)
        : children));
};
InputGroup.displayName = 'InputGroup';

// seed for the aria-labelledby ID
let currentId$2 = 0;
const newId = currentId$2++;
class ContextSelector extends react.Component {
    constructor(props) {
        super(props);
        this.parentRef = react.createRef();
        this.onEnterPressed = (event) => {
            if (event.charCode === KEY_CODES.ENTER) {
                this.props.onSearchButtonClick();
            }
        };
        this.state = {
            ouiaStateId: getDefaultOUIAId(ContextSelector.displayName)
        };
    }
    render() {
        const toggleId = `pf-context-selector-toggle-id-${newId}`;
        const screenReaderLabelId = `pf-context-selector-label-id-${newId}`;
        const searchButtonId = `pf-context-selector-search-button-id-${newId}`;
        const _a = this.props, { children, className, isOpen, onToggle, onSelect, screenReaderLabel, toggleText, searchButtonAriaLabel, searchInputValue, onSearchInputChange, searchInputPlaceholder, onSearchButtonClick, menuAppendTo, ouiaId, ouiaSafe, footer } = _a, props = __rest(_a, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick", "menuAppendTo", "ouiaId", "ouiaSafe", "footer"]);
        const menuContainer = (react.createElement("div", { className: css(styles$c.contextSelectorMenu) }, isOpen && (react.createElement(FocusTrap, { focusTrapOptions: { clickOutsideDeactivates: true } },
            react.createElement("div", { className: css(styles$c.contextSelectorMenuSearch) },
                react.createElement(InputGroup, null,
                    react.createElement(TextInput, { value: searchInputValue, type: "search", placeholder: searchInputPlaceholder, onChange: onSearchInputChange, onKeyPress: this.onEnterPressed, "aria-labelledby": searchButtonId }),
                    react.createElement(Button, { variant: ButtonVariant.control, "aria-label": searchButtonAriaLabel, id: searchButtonId, onClick: onSearchButtonClick },
                        react.createElement(SearchIcon, { "aria-hidden": "true" })))),
            react.createElement(ContextSelectorContext.Provider, { value: { onSelect } },
                react.createElement(ContextSelectorMenuList, { isOpen: isOpen }, children)),
            footer))));
        const popperContainer = (react.createElement("div", Object.assign({ className: css(styles$c.contextSelector, isOpen && styles$c.modifiers.expanded, className), ref: this.parentRef }, props), isOpen && menuContainer));
        const mainContainer = (react.createElement("div", Object.assign({ className: css(styles$c.contextSelector, isOpen && styles$c.modifiers.expanded, className), ref: this.parentRef }, getOUIAProps(ContextSelector.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props),
            screenReaderLabel && (react.createElement("span", { id: screenReaderLabelId, hidden: true }, screenReaderLabel)),
            react.createElement(ContextSelectorToggle, { onToggle: onToggle, isOpen: isOpen, toggleText: toggleText, id: toggleId, parentRef: this.parentRef.current, "aria-labelledby": `${screenReaderLabelId} ${toggleId}` }),
            isOpen && menuAppendTo === 'inline' && menuContainer));
        const getParentElement = () => {
            if (this.parentRef && this.parentRef.current) {
                return this.parentRef.current.parentElement;
            }
            return null;
        };
        return menuAppendTo === 'inline' ? (mainContainer) : (react.createElement(Popper, { trigger: mainContainer, popper: popperContainer, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }));
    }
}
ContextSelector.displayName = 'ContextSelector';
ContextSelector.defaultProps = {
    children: null,
    className: '',
    isOpen: false,
    onToggle: () => undefined,
    onSelect: () => undefined,
    screenReaderLabel: '',
    toggleText: '',
    searchButtonAriaLabel: 'Search menu items',
    searchInputValue: '',
    onSearchInputChange: () => undefined,
    searchInputPlaceholder: 'Search',
    onSearchButtonClick: () => undefined,
    menuAppendTo: 'inline',
    ouiaSafe: true,
    footer: null
};

class ContextSelectorItem extends react.Component {
    constructor() {
        super(...arguments);
        this.ref = react.createRef();
    }
    componentDidMount() {
        /* eslint-disable-next-line */
        this.props.sendRef(this.props.index, this.ref.current);
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { className, children, onClick, isDisabled, index, sendRef } = _a, props = __rest(_a, ["className", "children", "onClick", "isDisabled", "index", "sendRef"]);
        return (react.createElement(ContextSelectorContext.Consumer, null, ({ onSelect }) => (react.createElement("li", { role: "none" },
            react.createElement("button", Object.assign({ className: css(styles$c.contextSelectorMenuListItem, className), ref: this.ref, onClick: event => {
                    if (!isDisabled) {
                        onClick(event);
                        onSelect(event, children);
                    }
                }, disabled: isDisabled }, props), children)))));
    }
}
ContextSelectorItem.displayName = 'ContextSelectorItem';
ContextSelectorItem.defaultProps = {
    children: null,
    className: '',
    isDisabled: false,
    onClick: () => undefined,
    index: undefined,
    sendRef: () => { }
};

var dataList = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "dataList": "pf-c-data-list",
  "dataListAction": "pf-c-data-list__action",
  "dataListCell": "pf-c-data-list__cell",
  "dataListCheck": "pf-c-data-list__check",
  "dataListExpandableContent": "pf-c-data-list__expandable-content",
  "dataListExpandableContentBody": "pf-c-data-list__expandable-content-body",
  "dataListItem": "pf-c-data-list__item",
  "dataListItemAction": "pf-c-data-list__item-action",
  "dataListItemContent": "pf-c-data-list__item-content",
  "dataListItemControl": "pf-c-data-list__item-control",
  "dataListItemDraggableButton": "pf-c-data-list__item-draggable-button",
  "dataListItemDraggableIcon": "pf-c-data-list__item-draggable-icon",
  "dataListItemRow": "pf-c-data-list__item-row",
  "dataListText": "pf-c-data-list__text",
  "dataListToggle": "pf-c-data-list__toggle",
  "dataListToggleIcon": "pf-c-data-list__toggle-icon",
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
    "icon": "pf-m-icon",
    "alignRight": "pf-m-align-right",
    "noFill": "pf-m-no-fill",
    "flex_2": "pf-m-flex-2",
    "flex_3": "pf-m-flex-3",
    "flex_4": "pf-m-flex-4",
    "flex_5": "pf-m-flex-5",
    "gridNone": "pf-m-grid-none",
    "gridSm": "pf-m-grid-sm",
    "gridMd": "pf-m-grid-md",
    "gridLg": "pf-m-grid-lg",
    "gridXl": "pf-m-grid-xl",
    "grid_2xl": "pf-m-grid-2xl",
    "compact": "pf-m-compact",
    "dragOver": "pf-m-drag-over",
    "truncate": "pf-m-truncate",
    "breakWord": "pf-m-break-word",
    "nowrap": "pf-m-nowrap",
    "selectable": "pf-m-selectable",
    "selected": "pf-m-selected",
    "ghostRow": "pf-m-ghost-row",
    "expanded": "pf-m-expanded",
    "disabled": "pf-m-disabled",
    "noPadding": "pf-m-no-padding"
  }
};
});

var styles$e = /*@__PURE__*/getDefaultExportFromCjs(dataList);

var dataListGrid = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "dataList": "pf-c-data-list",
  "dataListCell": "pf-c-data-list__cell",
  "dataListExpandableContent": "pf-c-data-list__expandable-content",
  "dataListItemContent": "pf-c-data-list__item-content",
  "modifiers": {
    "icon": "pf-m-icon",
    "alignRight": "pf-m-align-right",
    "noFill": "pf-m-no-fill",
    "flex_2": "pf-m-flex-2",
    "flex_3": "pf-m-flex-3",
    "flex_4": "pf-m-flex-4",
    "flex_5": "pf-m-flex-5",
    "gridNone": "pf-m-grid-none",
    "gridSm": "pf-m-grid-sm",
    "gridMd": "pf-m-grid-md",
    "gridLg": "pf-m-grid-lg",
    "gridXl": "pf-m-grid-xl",
    "grid_2xl": "pf-m-grid-2xl"
  }
};
});

var stylesGrid = /*@__PURE__*/getDefaultExportFromCjs(dataListGrid);

const gridBreakpointClasses = {
    none: stylesGrid.modifiers.gridNone,
    always: 'pf-m-grid',
    sm: stylesGrid.modifiers.gridSm,
    md: stylesGrid.modifiers.gridMd,
    lg: stylesGrid.modifiers.gridLg,
    xl: stylesGrid.modifiers.gridXl,
    '2xl': stylesGrid.modifiers.grid_2xl
};
var DataListWrapModifier;
(function (DataListWrapModifier) {
    DataListWrapModifier["nowrap"] = "nowrap";
    DataListWrapModifier["truncate"] = "truncate";
    DataListWrapModifier["breakWord"] = "breakWord";
})(DataListWrapModifier || (DataListWrapModifier = {}));
const DataListContext = react.createContext({
    isSelectable: false
});
const moveItem = (arr, i1, toIndex) => {
    const fromIndex = arr.indexOf(i1);
    if (fromIndex === toIndex) {
        return arr;
    }
    const temp = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, temp[0]);
    return arr;
};
class DataList extends react.Component {
    constructor() {
        super(...arguments);
        this.dragFinished = false;
        this.arrayCopy = react.Children.toArray(this.props.children);
        this.ref = react.createRef();
        this.state = {
            tempItemOrder: [],
            draggedItemId: null,
            draggingToItemIndex: null,
            dragging: false
        };
        this.getIndex = (id) => Array.from(this.ref.current.children).findIndex(item => item.id === id);
        this.move = (itemOrder) => {
            const ulNode = this.ref.current;
            const nodes = Array.from(ulNode.children);
            if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {
                return;
            }
            while (ulNode.firstChild) {
                ulNode.removeChild(ulNode.lastChild);
            }
            itemOrder.forEach(id => {
                ulNode.appendChild(nodes.find(n => n.id === id));
            });
        };
        this.dragStart0 = (el) => {
            const { onDragStart } = this.props;
            const draggedItemId = el.id;
            el.classList.add(styles$e.modifiers.ghostRow);
            el.setAttribute('aria-pressed', 'true');
            this.setState({
                draggedItemId,
                dragging: true
            });
            onDragStart && onDragStart(draggedItemId);
        };
        this.dragStart = (evt) => {
            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
            this.dragStart0(evt.currentTarget);
        };
        this.onDragCancel = () => {
            this.move(this.props.itemOrder);
            Array.from(this.ref.current.children).forEach(el => {
                el.classList.remove(styles$e.modifiers.ghostRow);
                el.classList.remove(styles$e.modifiers.dragOver);
                el.setAttribute('aria-pressed', 'false');
            });
            this.setState({
                draggedItemId: null,
                draggingToItemIndex: null,
                dragging: false
            });
            if (this.props.onDragCancel) {
                this.props.onDragCancel();
            }
        };
        this.dragLeave = (evt) => {
            // This event false fires when we call `this.move()`, so double check we're out of zone
            if (!this.isValidDrop(evt)) {
                this.move(this.props.itemOrder);
                this.setState({
                    draggingToItemIndex: null
                });
            }
        };
        this.dragEnd0 = (el) => {
            el.classList.remove(styles$e.modifiers.ghostRow);
            el.classList.remove(styles$e.modifiers.dragOver);
            el.setAttribute('aria-pressed', 'false');
            this.setState({
                draggedItemId: null,
                draggingToItemIndex: null,
                dragging: false
            });
        };
        this.dragEnd = (evt) => {
            this.dragEnd0(evt.target);
        };
        this.isValidDrop = (evt) => {
            const ulRect = this.ref.current.getBoundingClientRect();
            return (evt.clientX > ulRect.x &&
                evt.clientX < ulRect.x + ulRect.width &&
                evt.clientY > ulRect.y &&
                evt.clientY < ulRect.y + ulRect.height);
        };
        this.drop = (evt) => {
            if (this.isValidDrop(evt)) {
                this.props.onDragFinish(this.state.tempItemOrder);
            }
            else {
                this.onDragCancel();
            }
        };
        this.dragOver0 = (id) => {
            const draggingToItemIndex = Array.from(this.ref.current.children).findIndex(item => item.id === id);
            if (draggingToItemIndex !== this.state.draggingToItemIndex) {
                const tempItemOrder = moveItem([...this.props.itemOrder], this.state.draggedItemId, draggingToItemIndex);
                this.move(tempItemOrder);
                this.setState({
                    draggingToItemIndex,
                    tempItemOrder
                });
            }
        };
        this.dragOver = (evt) => {
            evt.preventDefault();
            const curListItem = evt.target.closest('li');
            if (!curListItem || !this.ref.current.contains(curListItem) || curListItem.id === this.state.draggedItemId) {
                // We're going nowhere, don't bother calling `dragOver0`
                return null;
            }
            else {
                this.dragOver0(curListItem.id);
            }
        };
        this.handleDragButtonKeys = (evt) => {
            const { dragging } = this.state;
            if (evt.key !== ' ' &&
                evt.key !== 'Escape' &&
                evt.key !== 'Enter' &&
                evt.key !== 'ArrowUp' &&
                evt.key !== 'ArrowDown') {
                if (dragging) {
                    evt.preventDefault();
                }
                return;
            }
            evt.preventDefault();
            const dragItem = evt.target.closest('li');
            if (evt.key === ' ' || (evt.key === 'Enter' && !dragging)) {
                this.dragStart0(dragItem);
            }
            else if (dragging) {
                if (evt.key === 'Escape' || evt.key === 'Enter') {
                    this.setState({
                        dragging: false
                    });
                    this.dragFinished = true;
                    if (evt.key === 'Enter') {
                        this.dragEnd0(dragItem);
                        this.props.onDragFinish(this.state.tempItemOrder);
                    }
                    else {
                        this.onDragCancel();
                    }
                }
                else if (evt.key === 'ArrowUp') {
                    const nextSelection = dragItem.previousSibling;
                    if (nextSelection) {
                        this.dragOver0(nextSelection.id);
                        dragItem.querySelector(`.${styles$e.dataListItemDraggableButton}`).focus();
                    }
                }
                else if (evt.key === 'ArrowDown') {
                    const nextSelection = dragItem.nextSibling;
                    if (nextSelection) {
                        this.dragOver0(nextSelection.id);
                        dragItem.querySelector(`.${styles$e.dataListItemDraggableButton}`).focus();
                    }
                }
            }
        };
    }
    componentDidUpdate(oldProps) {
        if (this.dragFinished) {
            this.dragFinished = false;
            this.setState({
                tempItemOrder: [...this.props.itemOrder],
                draggedItemId: null,
                dragging: false
            });
        }
        if (oldProps.itemOrder !== this.props.itemOrder) {
            this.move(this.props.itemOrder);
        }
    }
    render() {
        const _a = this.props, { className, children, onSelectDataListItem, selectedDataListItemId, isCompact, wrapModifier, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        onDragStart, onDragMove, onDragCancel, onDragFinish, gridBreakpoint, itemOrder } = _a, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        props = __rest(_a, ["className", "children", "onSelectDataListItem", "selectedDataListItemId", "isCompact", "wrapModifier", "onDragStart", "onDragMove", "onDragCancel", "onDragFinish", "gridBreakpoint", "itemOrder"]);
        const { dragging } = this.state;
        const isSelectable = onSelectDataListItem !== undefined;
        const isDraggable = onDragFinish !== undefined;
        const updateSelectedDataListItem = (id) => {
            onSelectDataListItem(id);
        };
        const dragProps = isDraggable && {
            onDragOver: this.dragOver,
            onDrop: this.dragOver,
            onDragLeave: this.dragLeave
        };
        return (react.createElement(DataListContext.Provider, { value: {
                isSelectable,
                selectedDataListItemId,
                updateSelectedDataListItem,
                isDraggable,
                dragStart: this.dragStart,
                dragEnd: this.dragEnd,
                drop: this.drop,
                dragKeyHandler: this.handleDragButtonKeys
            } },
            react.createElement("ul", Object.assign({ className: css(styles$e.dataList, isCompact && styles$e.modifiers.compact, gridBreakpointClasses[gridBreakpoint], wrapModifier && styles$e.modifiers[wrapModifier], dragging && styles$e.modifiers.dragOver, className), style: props.style }, props, dragProps, { ref: this.ref }), children)));
    }
}
DataList.displayName = 'DataList';
DataList.defaultProps = {
    children: null,
    className: '',
    selectedDataListItemId: '',
    isCompact: false,
    gridBreakpoint: 'md',
    wrapModifier: null
};

const DataListAction = (_a) => {
    var { children, className, visibility, 
    /* eslint-disable @typescript-eslint/no-unused-vars */
    id, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isPlainButtonAction } = _a, 
    /* eslint-enable @typescript-eslint/no-unused-vars */
    props = __rest(_a, ["children", "className", "visibility", "id", 'aria-label', 'aria-labelledby', "isPlainButtonAction"]);
    return (react.createElement("div", Object.assign({ className: css(styles$e.dataListItemAction, formatBreakpointMods(visibility, styles$e), className) }, props), isPlainButtonAction ? react.createElement("div", { className: css(styles$e.dataListAction) }, children) : children));
};
DataListAction.displayName = 'DataListAction';

const DataListCell = (_a) => {
    var { children = null, className = '', width = 1, isFilled = true, alignRight = false, isIcon = false, wrapModifier = null } = _a, props = __rest(_a, ["children", "className", "width", "isFilled", "alignRight", "isIcon", "wrapModifier"]);
    return (react.createElement("div", Object.assign({ className: css(styles$e.dataListCell, width > 1 && styles$e.modifiers[`flex_${width}`], !isFilled && styles$e.modifiers.noFill, alignRight && styles$e.modifiers.alignRight, isIcon && styles$e.modifiers.icon, className, wrapModifier && styles$e.modifiers[wrapModifier]) }, props), children));
};
DataListCell.displayName = 'DataListCell';

const GripVerticalIconConfig = {
  name: 'GripVerticalIcon',
  height: 512,
  width: 320,
  svgPath: 'M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z',
  yOffset: 0,
  xOffset: 0,
};

const GripVerticalIcon = createIcon(GripVerticalIconConfig);

const DataListDragButton = (_a) => {
    var { className = '', isDisabled = false } = _a, props = __rest(_a, ["className", "isDisabled"]);
    return (react.createElement(DataListContext.Consumer, null, ({ dragKeyHandler }) => (react.createElement("button", Object.assign({ className: css(styles$e.dataListItemDraggableButton, isDisabled && styles$e.modifiers.disabled, className), onKeyDown: dragKeyHandler, type: "button", disabled: isDisabled }, props),
        react.createElement("span", { className: css(styles$e.dataListItemDraggableIcon) },
            react.createElement(GripVerticalIcon, null))))));
};
DataListDragButton.displayName = 'DataListDragButton';

function findDataListDragButton(node) {
    if (!react.isValidElement(node)) {
        return null;
    }
    if (node.type === DataListDragButton) {
        return node;
    }
    if (node.props.children) {
        for (const child of react.Children.toArray(node.props.children)) {
            const button = findDataListDragButton(child);
            if (button) {
                return button;
            }
        }
    }
    return null;
}
class DataListItem extends react.Component {
    render() {
        const _a = this.props, { children, isExpanded, className, id, 'aria-labelledby': ariaLabelledBy } = _a, props = __rest(_a, ["children", "isExpanded", "className", "id", 'aria-labelledby']);
        return (react.createElement(DataListContext.Consumer, null, ({ isSelectable, selectedDataListItemId, updateSelectedDataListItem, isDraggable, dragStart, dragEnd, drop }) => {
            const selectDataListItem = (event) => {
                let target = event.target;
                while (event.currentTarget !== target) {
                    if (('onclick' in target && target.onclick) ||
                        target.parentNode.classList.contains(styles$e.dataListItemAction) ||
                        target.parentNode.classList.contains(styles$e.dataListItemControl)) {
                        // check other event handlers are not present.
                        return;
                    }
                    else {
                        target = target.parentNode;
                    }
                }
                updateSelectedDataListItem(id);
            };
            const onKeyDown = (event) => {
                if (event.key === KeyTypes.Enter) {
                    updateSelectedDataListItem(id);
                }
            };
            // We made the DataListDragButton determine if the entire item is draggable instead of
            // DataListItem like we should have.
            // Recursively search children for the DataListDragButton and see if it's disabled...
            const dragButton = findDataListDragButton(children);
            const dragProps = isDraggable && {
                draggable: dragButton ? !dragButton.props.isDisabled : true,
                onDrop: drop,
                onDragEnd: dragEnd,
                onDragStart: dragStart
            };
            return (react.createElement("li", Object.assign({ id: id, className: css(styles$e.dataListItem, isExpanded && styles$e.modifiers.expanded, isSelectable && styles$e.modifiers.selectable, selectedDataListItemId && selectedDataListItemId === id && styles$e.modifiers.selected, className), "aria-labelledby": ariaLabelledBy }, (isSelectable && { tabIndex: 0, onClick: selectDataListItem, onKeyDown }), (isSelectable && selectedDataListItemId === id && { 'aria-selected': true }), props, dragProps), react.Children.map(children, child => react.isValidElement(child) &&
                react.cloneElement(child, {
                    rowid: ariaLabelledBy
                }))));
        }));
    }
}
DataListItem.displayName = 'DataListItem';
DataListItem.defaultProps = {
    isExpanded: false,
    className: '',
    id: '',
    children: null,
    'aria-labelledby': ''
};

const DataListItemCells = (_a) => {
    var { className = '', dataListCells, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowid = '' } = _a, props = __rest(_a, ["className", "dataListCells", "rowid"]);
    return (react.createElement("div", Object.assign({ className: css(styles$e.dataListItemContent, className) }, props), dataListCells));
};
DataListItemCells.displayName = 'DataListItemCells';

const DataListItemRow = (_a) => {
    var { children, className = '', rowid = '', wrapModifier = null } = _a, props = __rest(_a, ["children", "className", "rowid", "wrapModifier"]);
    return (react.createElement("div", Object.assign({ className: css(styles$e.dataListItemRow, className, wrapModifier && styles$e.modifiers[wrapModifier]) }, props), react.Children.map(children, child => react.isValidElement(child) &&
        react.cloneElement(child, {
            rowid
        }))));
};
DataListItemRow.displayName = 'DataListItemRow';

var descriptionList = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "descriptionList": "pf-c-description-list",
  "descriptionListDescription": "pf-c-description-list__description",
  "descriptionListGroup": "pf-c-description-list__group",
  "descriptionListTerm": "pf-c-description-list__term",
  "descriptionListText": "pf-c-description-list__text",
  "modifiers": {
    "inlineGrid": "pf-m-inline-grid",
    "autoColumnWidths": "pf-m-auto-column-widths",
    "autoFit": "pf-m-auto-fit",
    "helpText": "pf-m-help-text",
    "1Col": "pf-m-1-col",
    "2Col": "pf-m-2-col",
    "3Col": "pf-m-3-col",
    "horizontal": "pf-m-horizontal",
    "vertical": "pf-m-vertical",
    "1ColOnSm": "pf-m-1-col-on-sm",
    "2ColOnSm": "pf-m-2-col-on-sm",
    "3ColOnSm": "pf-m-3-col-on-sm",
    "horizontalOnSm": "pf-m-horizontal-on-sm",
    "verticalOnSm": "pf-m-vertical-on-sm",
    "1ColOnMd": "pf-m-1-col-on-md",
    "2ColOnMd": "pf-m-2-col-on-md",
    "3ColOnMd": "pf-m-3-col-on-md",
    "horizontalOnMd": "pf-m-horizontal-on-md",
    "verticalOnMd": "pf-m-vertical-on-md",
    "1ColOnLg": "pf-m-1-col-on-lg",
    "2ColOnLg": "pf-m-2-col-on-lg",
    "3ColOnLg": "pf-m-3-col-on-lg",
    "horizontalOnLg": "pf-m-horizontal-on-lg",
    "verticalOnLg": "pf-m-vertical-on-lg",
    "1ColOnXl": "pf-m-1-col-on-xl",
    "2ColOnXl": "pf-m-2-col-on-xl",
    "3ColOnXl": "pf-m-3-col-on-xl",
    "horizontalOnXl": "pf-m-horizontal-on-xl",
    "verticalOnXl": "pf-m-vertical-on-xl",
    "1ColOn_2xl": "pf-m-1-col-on-2xl",
    "2ColOn_2xl": "pf-m-2-col-on-2xl",
    "3ColOn_2xl": "pf-m-3-col-on-2xl",
    "horizontalOn_2xl": "pf-m-horizontal-on-2xl",
    "verticalOn_2xl": "pf-m-vertical-on-2xl"
  }
};
});

var styles$f = /*@__PURE__*/getDefaultExportFromCjs(descriptionList);

const setAutoFitMinModifiers = (autoFitMinModifier) => {
    const prefix = '--pf-c-description-list--GridTemplateColumns--min';
    const mods = autoFitMinModifier;
    return Object.keys(mods || {}).reduce((acc, curr) => curr === 'default' ? Object.assign(Object.assign({}, acc), { [prefix]: mods[curr] }) : Object.assign(Object.assign({}, acc), { [`${prefix}-on-${curr}`]: mods[curr] }), {});
};
const DescriptionList = (_a) => {
    var { className = '', children = null, isHorizontal = false, isAutoColumnWidths, isAutoFit, isInlineGrid, columnModifier, autoFitMinModifier, style } = _a, props = __rest(_a, ["className", "children", "isHorizontal", "isAutoColumnWidths", "isAutoFit", "isInlineGrid", "columnModifier", "autoFitMinModifier", "style"]);
    return (react.createElement("dl", Object.assign({ className: css(styles$f.descriptionList, isHorizontal && styles$f.modifiers.horizontal, isAutoColumnWidths && styles$f.modifiers.autoColumnWidths, isAutoFit && styles$f.modifiers.autoFit, formatBreakpointMods(columnModifier, styles$f), isInlineGrid && styles$f.modifiers.inlineGrid, className), style: autoFitMinModifier || style
            ? Object.assign(Object.assign({}, (isAutoFit ? setAutoFitMinModifiers(autoFitMinModifier) : {})), style) : undefined }, props), children));
};
DescriptionList.displayName = 'DescriptionList';

const DescriptionListGroup = ({ className, children }) => react.createElement("div", { className: css(styles$f.descriptionListGroup, className) }, children);
DescriptionListGroup.displayName = 'DescriptionListGroup';

const DescriptionListTerm = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("dt", Object.assign({ className: css(styles$f.descriptionListTerm, className) }, props),
        react.createElement("span", { className: 'pf-c-description-list__text' }, children)));
};
DescriptionListTerm.displayName = 'DescriptionListTerm';

const DescriptionListDescription = (_a) => {
    var { children = null, className } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("dd", Object.assign({ className: css(styles$f.descriptionListDescription, className) }, props),
        react.createElement("div", { className: 'pf-c-description-list__text' }, children)));
};
DescriptionListDescription.displayName = 'DescriptionListDescription';

var drawer = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "drawer": "pf-c-drawer",
  "drawerActions": "pf-c-drawer__actions",
  "drawerBody": "pf-c-drawer__body",
  "drawerClose": "pf-c-drawer__close",
  "drawerContent": "pf-c-drawer__content",
  "drawerHead": "pf-c-drawer__head",
  "drawerMain": "pf-c-drawer__main",
  "drawerPanel": "pf-c-drawer__panel",
  "drawerPanelMain": "pf-c-drawer__panel-main",
  "drawerSection": "pf-c-drawer__section",
  "drawerSplitter": "pf-c-drawer__splitter",
  "drawerSplitterHandle": "pf-c-drawer__splitter-handle",
  "modifiers": {
    "panelBottom": "pf-m-panel-bottom",
    "inline": "pf-m-inline",
    "static": "pf-m-static",
    "panelLeft": "pf-m-panel-left",
    "expanded": "pf-m-expanded",
    "resizing": "pf-m-resizing",
    "noBackground": "pf-m-no-background",
    "light_200": "pf-m-light-200",
    "noPadding": "pf-m-no-padding",
    "padding": "pf-m-padding",
    "vertical": "pf-m-vertical",
    "resizable": "pf-m-resizable",
    "noBorder": "pf-m-no-border",
    "width_25": "pf-m-width-25",
    "width_33": "pf-m-width-33",
    "width_50": "pf-m-width-50",
    "width_66": "pf-m-width-66",
    "width_75": "pf-m-width-75",
    "width_100": "pf-m-width-100",
    "width_25OnLg": "pf-m-width-25-on-lg",
    "width_33OnLg": "pf-m-width-33-on-lg",
    "width_50OnLg": "pf-m-width-50-on-lg",
    "width_66OnLg": "pf-m-width-66-on-lg",
    "width_75OnLg": "pf-m-width-75-on-lg",
    "width_100OnLg": "pf-m-width-100-on-lg",
    "width_25OnXl": "pf-m-width-25-on-xl",
    "width_33OnXl": "pf-m-width-33-on-xl",
    "width_50OnXl": "pf-m-width-50-on-xl",
    "width_66OnXl": "pf-m-width-66-on-xl",
    "width_75OnXl": "pf-m-width-75-on-xl",
    "width_100OnXl": "pf-m-width-100-on-xl",
    "width_25On_2xl": "pf-m-width-25-on-2xl",
    "width_33On_2xl": "pf-m-width-33-on-2xl",
    "width_50On_2xl": "pf-m-width-50-on-2xl",
    "width_66On_2xl": "pf-m-width-66-on-2xl",
    "width_75On_2xl": "pf-m-width-75-on-2xl",
    "width_100On_2xl": "pf-m-width-100-on-2xl",
    "inlineOnLg": "pf-m-inline-on-lg",
    "staticOnLg": "pf-m-static-on-lg",
    "inlineOnXl": "pf-m-inline-on-xl",
    "staticOnXl": "pf-m-static-on-xl",
    "inlineOn_2xl": "pf-m-inline-on-2xl",
    "staticOn_2xl": "pf-m-static-on-2xl"
  },
  "pageMain": "pf-c-page__main"
};
});

var styles$g = /*@__PURE__*/getDefaultExportFromCjs(drawer);

var DrawerColorVariant;
(function (DrawerColorVariant) {
    DrawerColorVariant["default"] = "default";
    DrawerColorVariant["light200"] = "light-200";
})(DrawerColorVariant || (DrawerColorVariant = {}));
const DrawerContext = react.createContext({
    isExpanded: false,
    isStatic: false,
    onExpand: () => { },
    position: 'right',
    drawerRef: null
});
const Drawer = (_a) => {
    var { className = '', children, isExpanded = false, isInline = false, isStatic = false, position = 'right', onExpand = () => { } } = _a, props = __rest(_a, ["className", "children", "isExpanded", "isInline", "isStatic", "position", "onExpand"]);
    const drawerRef = react.useRef();
    return (react.createElement(DrawerContext.Provider, { value: { isExpanded, isStatic, onExpand, position, drawerRef } },
        react.createElement("div", Object.assign({ className: css(styles$g.drawer, isExpanded && styles$g.modifiers.expanded, isInline && styles$g.modifiers.inline, isStatic && styles$g.modifiers.static, position === 'left' && styles$g.modifiers.panelLeft, position === 'bottom' && styles$g.modifiers.panelBottom, className), ref: drawerRef }, props), children)));
};
Drawer.displayName = 'Drawer';

const DrawerMain = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', children } = _a, props = __rest(_a, ["className", "children"]);
    return (react.createElement("div", Object.assign({ className: css(styles$g.drawerMain, className) }, props), children));
};
DrawerMain.displayName = 'DrawerMain';

const DrawerContent = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', children, panelContent, colorVariant = DrawerColorVariant.default } = _a, props = __rest(_a, ["className", "children", "panelContent", "colorVariant"]);
    return (react.createElement(DrawerMain, null,
        react.createElement("div", Object.assign({ className: css(styles$g.drawerContent, colorVariant === DrawerColorVariant.light200 && styles$g.modifiers.light_200, className) }, props), children),
        panelContent));
};
DrawerContent.displayName = 'DrawerContent';

const DrawerContentBody = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', children, hasPadding = false } = _a, props = __rest(_a, ["className", "children", "hasPadding"]);
    return (react.createElement("div", Object.assign({ className: css(styles$g.drawerBody, hasPadding && styles$g.modifiers.padding, className) }, props), children));
};
DrawerContentBody.displayName = 'DrawerContentBody';

let isResizing = null;
let newSize = 0;
const DrawerPanelContent = (_a) => {
    var { className = '', id, children, hasNoBorder = false, isResizable = false, onResize, minSize, defaultSize, maxSize, increment = 5, resizeAriaLabel = 'Resize', resizeAriaDescribedBy = 'Press space to begin resizing, and use the arrow keys to grow or shrink the panel. Press enter or escape to finish resizing.', widths, colorVariant = DrawerColorVariant.default } = _a, props = __rest(_a, ["className", "id", "children", "hasNoBorder", "isResizable", "onResize", "minSize", "defaultSize", "maxSize", "increment", "resizeAriaLabel", "resizeAriaDescribedBy", "widths", "colorVariant"]);
    const panel = react.useRef();
    const [panelIsClosed, setPanelIsClosed] = react.useState(false);
    const { position, isExpanded, isStatic, onExpand, drawerRef } = react.useContext(DrawerContext);
    let currWidth = 0;
    let panelRect;
    let right;
    let left;
    let bottom;
    let setInitialVals = true;
    react.useEffect(() => {
        if (!isStatic && isExpanded) {
            setPanelIsClosed(!isExpanded);
        }
    }, [isStatic, isExpanded]);
    const handleTouchStart = (e) => {
        e.stopPropagation();
        document.addEventListener('touchmove', callbackTouchMove, { passive: false });
        document.addEventListener('touchend', callbackTouchEnd);
        isResizing = true;
    };
    const handleMousedown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        document.addEventListener('mousemove', callbackMouseMove);
        document.addEventListener('mouseup', callbackMouseUp);
        drawerRef.current.classList.add(css(styles$g.modifiers.resizing));
        isResizing = true;
        setInitialVals = true;
    };
    const handleMouseMove = (e) => {
        const mousePos = position === 'bottom' ? e.clientY : e.clientX;
        handleControlMove(e, mousePos);
    };
    const handleTouchMove = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const touchPos = position === 'bottom' ? e.touches[0].clientY : e.touches[0].clientX;
        handleControlMove(e, touchPos);
    };
    const handleControlMove = (e, controlPosition) => {
        e.stopPropagation();
        if (!isResizing) {
            return;
        }
        if (setInitialVals) {
            panelRect = panel.current.getBoundingClientRect();
            right = panelRect.right;
            left = panelRect.left;
            bottom = panelRect.bottom;
            setInitialVals = false;
        }
        const mousePos = controlPosition;
        let newSize = 0;
        if (position === 'right') {
            newSize = right - mousePos;
        }
        else if (position === 'left') {
            newSize = mousePos - left;
        }
        else {
            newSize = bottom - mousePos;
        }
        if (position === 'bottom') {
            panel.current.style.overflowAnchor = 'none';
        }
        panel.current.style.setProperty('--pf-c-drawer__panel--md--FlexBasis', newSize + 'px');
        currWidth = newSize;
    };
    const handleMouseup = () => {
        if (!isResizing) {
            return;
        }
        drawerRef.current.classList.remove(css(styles$g.modifiers.resizing));
        isResizing = false;
        onResize && onResize(currWidth, id);
        setInitialVals = true;
        document.removeEventListener('mousemove', callbackMouseMove);
        document.removeEventListener('mouseup', callbackMouseUp);
    };
    const handleTouchEnd = (e) => {
        e.stopPropagation();
        if (!isResizing) {
            return;
        }
        isResizing = false;
        onResize && onResize(currWidth, id);
        document.removeEventListener('touchmove', callbackTouchMove);
        document.removeEventListener('touchend', callbackTouchEnd);
    };
    const callbackMouseMove = react.useCallback(handleMouseMove, []);
    const callbackTouchEnd = react.useCallback(handleTouchEnd, []);
    const callbackTouchMove = react.useCallback(handleTouchMove, []);
    const callbackMouseUp = react.useCallback(handleMouseup, []);
    const handleKeys = (e) => {
        const key = e.key;
        if (key !== ' ' &&
            key !== 'Escape' &&
            key !== 'Enter' &&
            key !== 'ArrowUp' &&
            key !== 'ArrowDown' &&
            key !== 'ArrowLeft' &&
            key !== 'ArrowRight') {
            if (isResizing) {
                e.preventDefault();
            }
            return;
        }
        e.preventDefault();
        if (key === ' ' || key === 'Escape' || key === 'Enter') {
            if (key === ' ') {
                isResizing = true;
            }
            else {
                isResizing = false;
                onResize && onResize(currWidth, id);
            }
            const panelRect = panel.current.getBoundingClientRect();
            newSize = position === 'bottom' ? panelRect.height : panelRect.width;
        }
        if (isResizing) {
            let delta = 0;
            if (key === 'ArrowRight') {
                delta = position === 'left' ? increment : -increment;
            }
            else if (key === 'ArrowLeft') {
                delta = position === 'left' ? -increment : increment;
            }
            else if (key === 'ArrowUp') {
                delta = increment;
            }
            else if (key === 'ArrowDown') {
                delta = -increment;
            }
            newSize = newSize + delta;
            if (position === 'bottom') {
                panel.current.style.overflowAnchor = 'none';
            }
            panel.current.style.setProperty('--pf-c-drawer__panel--md--FlexBasis', newSize + 'px');
            currWidth = newSize;
        }
    };
    const hidden = isStatic ? false : !isExpanded;
    const boundaryCssVars = {};
    if (defaultSize) {
        boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis'] = defaultSize;
    }
    if (minSize) {
        boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis--min'] = minSize;
    }
    if (maxSize) {
        boundaryCssVars['--pf-c-drawer__panel--md--FlexBasis--max'] = maxSize;
    }
    return (react.createElement("div", Object.assign({ id: id, className: css(styles$g.drawerPanel, isResizable && styles$g.modifiers.resizable, hasNoBorder && styles$g.modifiers.noBorder, formatBreakpointMods(widths, styles$g), colorVariant === DrawerColorVariant.light200 && styles$g.modifiers.light_200, className), ref: panel, onTransitionEnd: ev => {
            if (!hidden && ev.nativeEvent.propertyName === 'transform') {
                onExpand();
            }
            setPanelIsClosed(hidden);
        }, hidden: hidden }, ((defaultSize || minSize || maxSize) && {
        style: boundaryCssVars
    }), props), !panelIsClosed && (react.createElement(react.Fragment, null,
        isResizable && (react.createElement(react.Fragment, null,
            react.createElement("div", { className: css(styles$g.drawerSplitter, position !== 'bottom' && styles$g.modifiers.vertical), role: "separator", tabIndex: 0, "aria-orientation": position === 'bottom' ? 'horizontal' : 'vertical', "aria-label": resizeAriaLabel, "aria-describedby": resizeAriaDescribedBy, onMouseDown: handleMousedown, onKeyDown: handleKeys, onTouchStart: handleTouchStart },
                react.createElement("div", { className: css(styles$g.drawerSplitterHandle), "aria-hidden": true })),
            react.createElement("div", { className: css(styles$g.drawerPanelMain) }, children))),
        !isResizable && children))));
};
DrawerPanelContent.displayName = 'DrawerPanelContent';

const AngleDoubleLeftIconConfig = {
  name: 'AngleDoubleLeftIcon',
  height: 512,
  width: 448,
  svgPath: 'M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z',
  yOffset: 0,
  xOffset: 0,
};

const AngleDoubleLeftIcon = createIcon(AngleDoubleLeftIconConfig);

const AngleLeftIconConfig = {
  name: 'AngleLeftIcon',
  height: 512,
  width: 256,
  svgPath: 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z',
  yOffset: 0,
  xOffset: 0,
};

const AngleLeftIcon = createIcon(AngleLeftIconConfig);

const AngleDoubleRightIconConfig = {
  name: 'AngleDoubleRightIcon',
  height: 512,
  width: 448,
  svgPath: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z',
  yOffset: 0,
  xOffset: 0,
};

const AngleDoubleRightIcon = createIcon(AngleDoubleRightIconConfig);

var emptyState = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "emptyState": "pf-c-empty-state",
  "emptyStateBody": "pf-c-empty-state__body",
  "emptyStateContent": "pf-c-empty-state__content",
  "emptyStateIcon": "pf-c-empty-state__icon",
  "emptyStatePrimary": "pf-c-empty-state__primary",
  "emptyStateSecondary": "pf-c-empty-state__secondary",
  "modifiers": {
    "xs": "pf-m-xs",
    "sm": "pf-m-sm",
    "lg": "pf-m-lg",
    "xl": "pf-m-xl",
    "fullHeight": "pf-m-full-height",
    "primary": "pf-m-primary",
    "overpassFont": "pf-m-overpass-font"
  },
  "title": "pf-c-title"
};
});

var styles$h = /*@__PURE__*/getDefaultExportFromCjs(emptyState);

var EmptyStateVariant;
(function (EmptyStateVariant) {
    EmptyStateVariant["xs"] = "xs";
    EmptyStateVariant["small"] = "small";
    EmptyStateVariant["large"] = "large";
    EmptyStateVariant["xl"] = "xl";
    EmptyStateVariant["full"] = "full";
})(EmptyStateVariant || (EmptyStateVariant = {}));
const EmptyState = (_a) => {
    var { children, className = '', variant = EmptyStateVariant.full, isFullHeight } = _a, props = __rest(_a, ["children", "className", "variant", "isFullHeight"]);
    return (react.createElement("div", Object.assign({ className: css(styles$h.emptyState, variant === 'xs' && styles$h.modifiers.xs, variant === 'small' && styles$h.modifiers.sm, variant === 'large' && styles$h.modifiers.lg, variant === 'xl' && styles$h.modifiers.xl, isFullHeight && styles$h.modifiers.fullHeight, className) }, props),
        react.createElement("div", { className: css(styles$h.emptyStateContent) }, children)));
};
EmptyState.displayName = 'EmptyState';

const EmptyStateBody = (_a) => {
    var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({ className: css(styles$h.emptyStateBody, className) }, props), children));
};
EmptyStateBody.displayName = 'EmptyStateBody';

const EmptyStateIcon = (_a) => {
    var { className = '', icon: IconComponent, component: AnyComponent, variant = 'icon' } = _a, props = __rest(_a, ["className", "icon", "component", "variant"]);
    const classNames = css(styles$h.emptyStateIcon, className);
    return variant === 'icon' ? (react.createElement(IconComponent, Object.assign({ className: classNames }, props, { "aria-hidden": "true" }))) : (react.createElement("div", { className: classNames },
        react.createElement(AnyComponent, null)));
};
EmptyStateIcon.displayName = 'EmptyStateIcon';

const EmptyStateSecondaryActions = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({ className: css(styles$h.emptyStateSecondary, className) }, props), children));
};
EmptyStateSecondaryActions.displayName = 'EmptyStateSecondaryActions';

var expandableSection = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "expandableSection": "pf-c-expandable-section",
  "expandableSectionContent": "pf-c-expandable-section__content",
  "expandableSectionToggle": "pf-c-expandable-section__toggle",
  "expandableSectionToggleIcon": "pf-c-expandable-section__toggle-icon",
  "expandableSectionToggleText": "pf-c-expandable-section__toggle-text",
  "modifiers": {
    "expanded": "pf-m-expanded",
    "active": "pf-m-active",
    "overpassFont": "pf-m-overpass-font"
  }
};
});

var styles$i = /*@__PURE__*/getDefaultExportFromCjs(expandableSection);

class ExpandableSection extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: props.isExpanded
        };
    }
    calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded) {
        if (propOrStateIsExpanded && toggleTextExpanded !== '') {
            return toggleTextExpanded;
        }
        if (!propOrStateIsExpanded && toggleTextCollapsed !== '') {
            return toggleTextCollapsed;
        }
        return toggleText;
    }
    render() {
        const _a = this.props, { onToggle: onToggleProp, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isActive, className, toggleText, toggleTextExpanded, toggleTextCollapsed, children, isExpanded } = _a, props = __rest(_a, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "children", "isExpanded"]);
        let onToggle = onToggleProp;
        let propOrStateIsExpanded = isExpanded;
        // uncontrolled
        if (isExpanded === undefined) {
            propOrStateIsExpanded = this.state.isExpanded;
            onToggle = isOpen => {
                this.setState({ isExpanded: isOpen }, () => onToggleProp(this.state.isExpanded));
            };
        }
        const computedToggleText = this.calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded);
        return (react.createElement("div", Object.assign({}, props, { className: css(styles$i.expandableSection, propOrStateIsExpanded && styles$i.modifiers.expanded, isActive && styles$i.modifiers.active, className) }),
            react.createElement("button", { className: css(styles$i.expandableSectionToggle), type: "button", "aria-expanded": propOrStateIsExpanded, onClick: () => onToggle(!propOrStateIsExpanded) },
                react.createElement("span", { className: css(styles$i.expandableSectionToggleIcon) },
                    react.createElement(AngleRightIcon, { "aria-hidden": true })),
                react.createElement("span", { className: css(styles$i.expandableSectionToggleText) }, computedToggleText)),
            react.createElement("div", { className: css(styles$i.expandableSectionContent), hidden: !propOrStateIsExpanded }, children)));
    }
}
ExpandableSection.displayName = 'ExpandableSection';
ExpandableSection.defaultProps = {
    className: '',
    toggleText: '',
    toggleTextExpanded: '',
    toggleTextCollapsed: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (isExpanded) => undefined,
    isActive: false
};

var fileUpload = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "fileUpload": "pf-c-file-upload",
  "fileUploadFileDetails": "pf-c-file-upload__file-details",
  "fileUploadFileDetailsSpinner": "pf-c-file-upload__file-details-spinner",
  "fileUploadFileSelect": "pf-c-file-upload__file-select",
  "formControl": "pf-c-form-control",
  "modifiers": {
    "dragHover": "pf-m-drag-hover",
    "loading": "pf-m-loading",
    "control": "pf-m-control"
  }
};
});

var styles$j = /*@__PURE__*/getDefaultExportFromCjs(fileUpload);

var fileReaderType;
(function (fileReaderType) {
    fileReaderType["text"] = "text";
    fileReaderType["dataURL"] = "dataURL";
})(fileReaderType || (fileReaderType = {}));
/**
 * Read a file using the FileReader API, either as a plain text string or as a DataURL string.
 * Returns a promise which will resolve with the file contents as a string or reject with a DOMException.
 *
 * @param {File} fileHandle - File object to read
 * @param {fileReaderType} type - How to read it
 */
function readFile(fileHandle, type) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        if (type === fileReaderType.text) {
            reader.readAsText(fileHandle);
        }
        else if (type === fileReaderType.dataURL) {
            reader.readAsDataURL(fileHandle);
        }
        else {
            reject('unknown type');
        }
    });
}

const FileUploadField = (_a) => {
    var { id, type, value = '', filename = '', onChange = () => { }, onBrowseButtonClick = () => { }, onClearButtonClick = () => { }, className = '', isDisabled = false, isReadOnly = false, isLoading = false, spinnerAriaValueText, isRequired = false, isDragActive = false, validated = 'default', 'aria-label': ariaLabel = 'File upload', filenamePlaceholder = 'Drag a file here or browse to upload', filenameAriaLabel = filename ? 'Read only filename' : filenamePlaceholder, browseButtonText = 'Browse...', clearButtonText = 'Clear', isClearButtonDisabled = !filename && !value, containerRef = null, allowEditingUploadedText = false, hideDefaultPreview = false, children = null } = _a, props = __rest(_a, ["id", "type", "value", "filename", "onChange", "onBrowseButtonClick", "onClearButtonClick", "className", "isDisabled", "isReadOnly", "isLoading", "spinnerAriaValueText", "isRequired", "isDragActive", "validated", 'aria-label', "filenamePlaceholder", "filenameAriaLabel", "browseButtonText", "clearButtonText", "isClearButtonDisabled", "containerRef", "allowEditingUploadedText", "hideDefaultPreview", "children"]);
    const onTextAreaChange = (newValue, event) => {
        onChange(newValue, filename, event);
    };
    return (react.createElement("div", Object.assign({ className: css(styles$j.fileUpload, isDragActive && styles$j.modifiers.dragHover, isLoading && styles$j.modifiers.loading, className), ref: containerRef }, props),
        react.createElement("div", { className: styles$j.fileUploadFileSelect },
            react.createElement(InputGroup, null,
                react.createElement(TextInput, { isReadOnly // Always read-only regardless of isReadOnly prop (which is just for the TextArea)
                    : true, isDisabled: isDisabled, id: `${id}-filename`, name: `${id}-filename`, "aria-label": filenameAriaLabel, placeholder: filenamePlaceholder, "aria-describedby": `${id}-browse-button`, value: filename }),
                react.createElement(Button, { id: `${id}-browse-button`, variant: ButtonVariant.control, onClick: onBrowseButtonClick, isDisabled: isDisabled }, browseButtonText),
                react.createElement(Button, { variant: ButtonVariant.control, isDisabled: isDisabled || isClearButtonDisabled, onClick: onClearButtonClick }, clearButtonText))),
        react.createElement("div", { className: styles$j.fileUploadFileDetails },
            !hideDefaultPreview && type === fileReaderType.text && (react.createElement(TextArea, { readOnly: isReadOnly || (!!filename && !allowEditingUploadedText), disabled: isDisabled, isRequired: isRequired, resizeOrientation: TextAreResizeOrientation.vertical, validated: validated, id: id, name: id, "aria-label": ariaLabel, value: value, onChange: onTextAreaChange })),
            isLoading && (react.createElement("div", { className: styles$j.fileUploadFileDetailsSpinner },
                react.createElement(Spinner, { size: spinnerSize.lg, "aria-valuetext": spinnerAriaValueText })))),
        children));
};
FileUploadField.displayName = 'FileUploadField';

var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}

var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}

var dist = createCommonjsModule(function (module) {
module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e});},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=13)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r);},function(t,n){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,n){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r);},function(t,n,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,n){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)};},function(t,n,r){var e=r(32)("wks"),o=r(9),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e;},function(t,n,r){var e=r(0),o=r(2),i=r(8),u=r(22),c=r(10),f=function(t,n,r){var a,s,p,l,v=t&f.F,y=t&f.G,h=t&f.S,d=t&f.P,x=t&f.B,g=y?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=y?o:o[n]||(o[n]={}),b=m.prototype||(m.prototype={});y&&(r=n);for(a in r)s=!v&&g&&void 0!==g[a],p=(s?g:r)[a],l=x&&s?c(p,e):d&&"function"==typeof p?c(Function.call,p):p,g&&u(g,a,p,t&f.U),m[a]!=p&&i(m,a,l),d&&b[a]!=p&&(b[a]=p);};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f;},function(t,n,r){var e=r(16),o=r(21);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t};},function(t,n){var r=0,e=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))};},function(t,n,r){var e=r(24);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}};},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,n,r){var e=r(28),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0};},function(t,n,r){n.__esModule=!0,n.default=function(t,n){if(t&&n){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return r.some(function(t){var n=t.trim();return "."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n})}return !0},r(14),r(34);},function(t,n,r){r(15),t.exports=r(2).Array.some;},function(t,n,r){var e=r(7),o=r(25)(3);e(e.P+e.F*!r(33)([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}});},function(t,n,r){var e=r(17),o=r(18),i=r(20),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return "value"in r&&(t[n]=r.value),t};},function(t,n,r){var e=r(1);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t};},function(t,n,r){t.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a});},function(t,n,r){var e=r(1),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}};},function(t,n,r){var e=r(1);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},function(t,n){t.exports=function(t,n){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}};},function(t,n,r){var e=r(0),o=r(8),i=r(23),u=r(9)("src"),c=Function.toString,f=(""+c).split("toString");r(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[u]||c.call(this)});},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)};},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,n,r){var e=r(10),o=r(26),i=r(27),u=r(12),c=r(29);t.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p,v=n||c;return function(n,c,y){for(var h,d,x=i(n),g=o(x),m=e(c,y,3),b=u(g.length),_=0,w=r?v(n,b):f?v(n,0):void 0;b>_;_++)if((l||_ in g)&&(h=g[_],d=m(h,_,x),t))if(r)w[_]=d;else if(d)switch(t){case 3:return !0;case 5:return h;case 6:return _;case 2:w.push(h);}else if(s)return !1;return p?-1:a||s?s:w}};},function(t,n,r){var e=r(5);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==e(t)?t.split(""):Object(t)};},function(t,n,r){var e=r(11);t.exports=function(t){return Object(e(t))};},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)};},function(t,n,r){var e=r(30);t.exports=function(t,n){return new(e(t))(n)};},function(t,n,r){var e=r(1),o=r(31),i=r(6)("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n};},function(t,n,r){var e=r(5);t.exports=Array.isArray||function(t){return "Array"==e(t)};},function(t,n,r){var e=r(0),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})};},function(t,n,r){var e=r(4);t.exports=function(t,n){return !!t&&e(function(){n?t.call(null,function(){},1):t.call(null);})};},function(t,n,r){r(35),t.exports=r(2).String.endsWith;},function(t,n,r){var e=r(7),o=r(12),i=r(36),u="".endsWith;e(e.P+e.F*r(38)("endsWith"),"String",{endsWith:function(t){var n=i(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=o(n.length),c=void 0===r?e:Math.min(o(r),e),f=String(t);return u?u.call(n,f,c):n.slice(c-f.length,c)===f}});},function(t,n,r){var e=r(37),o=r(11);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))};},function(t,n,r){var e=r(1),o=r(5),i=r(6)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))};},function(t,n,r){var e=r(6)("match");t.exports=function(t){var n=/./;try{"/./"[t](n);}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return !0};}]);
});

var accepts = /*@__PURE__*/getDefaultExportFromCjs(dist);

var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || accepts(file, accept);
}

function fileMatchSize(file, maxSize, minSize) {
  return file.size <= maxSize && file.size >= minSize;
}

function allFilesAccepted(files, accept) {
  return files.every(function (file) {
    return fileAccepted(file, accept);
  });
}

// React's synthetic events has evt.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check evt.cancelBubble
function isPropagationStopped(evt) {
  if (typeof evt.isPropagationStopped === 'function') {
    return evt.isPropagationStopped();
  } else if (typeof evt.cancelBubble !== 'undefined') {
    return evt.cancelBubble;
  }
  return false;
}

// React's synthetic events has evt.isDefaultPrevented,
// but to remain compatibility with other libs (Preact) first
// check evt.defaultPrevented
function isDefaultPrevented(evt) {
  if (typeof evt.defaultPrevented !== 'undefined') {
    return evt.defaultPrevented;
  } else if (typeof evt.isDefaultPrevented === 'function') {
    return evt.isDefaultPrevented();
  }
  return false;
}

function isDragDataWithFiles(evt) {
  if (!evt.dataTransfer) {
    return true;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
  return Array.prototype.some.call(evt.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}

// allow the entire document to be a drag target
function onDocumentDragOver(evt) {
  evt.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;

  return isIe(userAgent) || isEdge(userAgent);
}

/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.preventDefault()`.
 * Not sure this is the best way to do this, but it seems legit.
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
function composeEventHandlers() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      fn && fn.apply(undefined, [event].concat(args));
      return event.defaultPrevented;
    });
  };
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropzone = function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropzone);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      draggedFiles: [],
      acceptedFiles: [],
      rejectedFiles: []
    }, _this.isFileDialogActive = false, _this.onDocumentDrop = function (evt) {
      if (_this.node && _this.node.contains(evt.target)) {
        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }
      evt.preventDefault();
      _this.dragTargets = [];
    }, _this.onDragStart = function (evt) {
      evt.persist();
      if (_this.props.onDragStart && isDragDataWithFiles(evt)) {
        _this.props.onDragStart.call(_this, evt);
      }
    }, _this.onDragEnter = function (evt) {
      evt.preventDefault();

      // Count the dropzone and any children that are entered.
      if (_this.dragTargets.indexOf(evt.target) === -1) {
        _this.dragTargets.push(evt.target);
      }

      evt.persist();

      if (isDragDataWithFiles(evt)) {
        Promise.resolve(_this.props.getDataTransferItems(evt)).then(function (draggedFiles) {
          if (isPropagationStopped(evt)) {
            return;
          }

          _this.setState({
            draggedFiles: draggedFiles,
            // Do not rely on files for the drag state. It doesn't work in Safari.
            isDragActive: true
          });
        });

        if (_this.props.onDragEnter) {
          _this.props.onDragEnter.call(_this, evt);
        }
      }
    }, _this.onDragOver = function (evt) {
      // eslint-disable-line class-methods-use-this
      evt.preventDefault();
      evt.persist();

      if (evt.dataTransfer) {
        evt.dataTransfer.dropEffect = 'copy';
      }

      if (_this.props.onDragOver && isDragDataWithFiles(evt)) {
        _this.props.onDragOver.call(_this, evt);
      }

      return false;
    }, _this.onDragLeave = function (evt) {
      evt.preventDefault();
      evt.persist();

      // Only deactivate once the dropzone and all children have been left.
      _this.dragTargets = _this.dragTargets.filter(function (el) {
        return el !== evt.target && _this.node.contains(el);
      });
      if (_this.dragTargets.length > 0) {
        return;
      }

      // Clear dragging files state
      _this.setState({
        isDragActive: false,
        draggedFiles: []
      });

      if (_this.props.onDragLeave && isDragDataWithFiles(evt)) {
        _this.props.onDragLeave.call(_this, evt);
      }
    }, _this.onDrop = function (evt) {
      var _this$props = _this.props,
          onDrop = _this$props.onDrop,
          onDropAccepted = _this$props.onDropAccepted,
          onDropRejected = _this$props.onDropRejected,
          multiple = _this$props.multiple,
          accept = _this$props.accept,
          getDataTransferItems = _this$props.getDataTransferItems;

      // Stop default browser behavior

      evt.preventDefault();

      // Persist event for later usage
      evt.persist();

      // Reset the counter along with the drag on a drop.
      _this.dragTargets = [];
      _this.isFileDialogActive = false;

      // Clear files value
      _this.draggedFiles = null;

      // Reset drag state
      _this.setState({
        isDragActive: false,
        draggedFiles: []
      });

      if (isDragDataWithFiles(evt)) {
        Promise.resolve(getDataTransferItems(evt)).then(function (fileList) {
          var acceptedFiles = [];
          var rejectedFiles = [];

          if (isPropagationStopped(evt)) {
            return;
          }

          fileList.forEach(function (file) {
            if (fileAccepted(file, accept) && fileMatchSize(file, _this.props.maxSize, _this.props.minSize)) {
              acceptedFiles.push(file);
            } else {
              rejectedFiles.push(file);
            }
          });

          if (!multiple && acceptedFiles.length > 1) {
            // if not in multi mode add any extra accepted files to rejected.
            // This will allow end users to easily ignore a multi file drop in "single" mode.
            rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0)));
          }

          // Update `acceptedFiles` and `rejectedFiles` state
          // This will make children render functions receive the appropriate
          // values
          _this.setState({ acceptedFiles: acceptedFiles, rejectedFiles: rejectedFiles }, function () {
            if (onDrop) {
              onDrop.call(_this, acceptedFiles, rejectedFiles, evt);
            }

            if (rejectedFiles.length > 0 && onDropRejected) {
              onDropRejected.call(_this, rejectedFiles, evt);
            }

            if (acceptedFiles.length > 0 && onDropAccepted) {
              onDropAccepted.call(_this, acceptedFiles, evt);
            }
          });
        });
      }
    }, _this.onClick = function (evt) {
      var onClick = _this.props.onClick;

      // if onClick prop is given, run it first

      if (onClick) {
        onClick.call(_this, evt);
      }

      // If the event hasn't been default prevented from within
      // the onClick listener, open the file dialog
      if (!isDefaultPrevented(evt)) {
        evt.stopPropagation();

        // in IE11/Edge the file-browser dialog is blocking, ensure this is behind setTimeout
        // this is so react can handle state changes in the onClick prop above above
        // see: https://github.com/react-dropzone/react-dropzone/issues/450
        if (isIeOrEdge()) {
          setTimeout(_this.open, 0);
        } else {
          _this.open();
        }
      }
    }, _this.onInputElementClick = function (evt) {
      evt.stopPropagation();
    }, _this.onFileDialogCancel = function () {
      // timeout will not recognize context of this method
      var onFileDialogCancel = _this.props.onFileDialogCancel;
      // execute the timeout only if the FileDialog is opened in the browser

      if (_this.isFileDialogActive) {
        setTimeout(function () {
          if (_this.input != null) {
            // Returns an object as FileList
            var files = _this.input.files;


            if (!files.length) {
              _this.isFileDialogActive = false;

              if (typeof onFileDialogCancel === 'function') {
                onFileDialogCancel();
              }
            }
          }
        }, 300);
      }
    }, _this.onFocus = function (evt) {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus.call(_this, evt);
      }
      if (!isDefaultPrevented(evt)) {
        _this.setState({ isFocused: true });
      }
    }, _this.onBlur = function (evt) {
      var onBlur = _this.props.onBlur;

      if (onBlur) {
        onBlur.call(_this, evt);
      }
      if (!isDefaultPrevented(evt)) {
        _this.setState({ isFocused: false });
      }
    }, _this.onKeyDown = function (evt) {
      var onKeyDown = _this.props.onKeyDown;

      if (!_this.node.isEqualNode(evt.target)) {
        return;
      }

      if (onKeyDown) {
        onKeyDown.call(_this, evt);
      }

      if (!isDefaultPrevented(evt) && (evt.keyCode === 32 || evt.keyCode === 13)) {
        evt.preventDefault();
        _this.open();
      }
    }, _this.composeHandler = function (handler) {
      if (_this.props.disabled) {
        return null;
      }
      return handler;
    }, _this.getRootProps = function () {
      var _extends2;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
          onKeyDown = _ref2.onKeyDown,
          onFocus = _ref2.onFocus,
          onBlur = _ref2.onBlur,
          onClick = _ref2.onClick,
          onDragStart = _ref2.onDragStart,
          onDragEnter = _ref2.onDragEnter,
          onDragOver = _ref2.onDragOver,
          onDragLeave = _ref2.onDragLeave,
          onDrop = _ref2.onDrop,
          rest = _objectWithoutProperties(_ref2, ['refKey', 'onKeyDown', 'onFocus', 'onBlur', 'onClick', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop']);

      return _extends((_extends2 = {
        onKeyDown: _this.composeHandler(onKeyDown ? composeEventHandlers(onKeyDown, _this.onKeyDown) : _this.onKeyDown),
        onFocus: _this.composeHandler(onFocus ? composeEventHandlers(onFocus, _this.onFocus) : _this.onFocus),
        onBlur: _this.composeHandler(onBlur ? composeEventHandlers(onBlur, _this.onBlur) : _this.onBlur),
        onClick: _this.composeHandler(onClick ? composeEventHandlers(onClick, _this.onClick) : _this.onClick),
        onDragStart: _this.composeHandler(onDragStart ? composeEventHandlers(onDragStart, _this.onDragStart) : _this.onDragStart),
        onDragEnter: _this.composeHandler(onDragEnter ? composeEventHandlers(onDragEnter, _this.onDragEnter) : _this.onDragEnter),
        onDragOver: _this.composeHandler(onDragOver ? composeEventHandlers(onDragOver, _this.onDragOver) : _this.onDragOver),
        onDragLeave: _this.composeHandler(onDragLeave ? composeEventHandlers(onDragLeave, _this.onDragLeave) : _this.onDragLeave),
        onDrop: _this.composeHandler(onDrop ? composeEventHandlers(onDrop, _this.onDrop) : _this.onDrop)
      }, _defineProperty(_extends2, refKey, _this.setNodeRef), _defineProperty(_extends2, 'tabIndex', _this.props.disabled ? -1 : 0), _extends2), rest);
    }, _this.getInputProps = function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === undefined ? 'ref' : _ref3$refKey,
          onChange = _ref3.onChange,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, ['refKey', 'onChange', 'onClick']);

      var _this$props2 = _this.props,
          accept = _this$props2.accept,
          multiple = _this$props2.multiple,
          name = _this$props2.name;

      var inputProps = _defineProperty({
        accept: accept,
        type: 'file',
        style: { display: 'none' },
        multiple: supportMultiple && multiple,
        onChange: composeEventHandlers(onChange, _this.onDrop),
        onClick: composeEventHandlers(onClick, _this.onInputElementClick),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, _this.setInputRef);
      if (name && name.length) {
        inputProps.name = name;
      }
      return _extends({}, inputProps, rest);
    }, _this.setNodeRef = function (node) {
      _this.node = node;
    }, _this.setInputRef = function (input) {
      _this.input = input;
    }, _this.open = function () {
      _this.isFileDialogActive = true;
      if (_this.input) {
        _this.input.value = null;
        _this.input.click();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropzone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      this.dragTargets = [];

      if (preventDropOnDocument) {
        document.addEventListener('dragover', onDocumentDragOver, false);
        document.addEventListener('drop', this.onDocumentDrop, false);
      }

      window.addEventListener('focus', this.onFileDialogCancel, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', this.onDocumentDrop);
      }

      window.removeEventListener('focus', this.onFileDialogCancel, false);
    }

    /**
     * Open system file upload dialog.
     *
     * @public
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          multiple = _props.multiple,
          disabled = _props.disabled;
      var _state = this.state,
          isDragActive = _state.isDragActive,
          isFocused = _state.isFocused,
          draggedFiles = _state.draggedFiles,
          acceptedFiles = _state.acceptedFiles,
          rejectedFiles = _state.rejectedFiles;


      var filesCount = draggedFiles.length;
      var isMultipleAllowed = multiple || filesCount <= 1;
      var isDragAccept = filesCount > 0 && allFilesAccepted(draggedFiles, this.props.accept);
      var isDragReject = filesCount > 0 && (!isDragAccept || !isMultipleAllowed);

      return children({
        isDragActive: isDragActive,
        isDragAccept: isDragAccept,
        isDragReject: isDragReject,
        draggedFiles: draggedFiles,
        acceptedFiles: acceptedFiles,
        rejectedFiles: rejectedFiles,
        isFocused: isFocused && !disabled,
        getRootProps: this.getRootProps,
        getInputProps: this.getInputProps,
        open: this.open
      });
    }
  }]);

  return Dropzone;
}(react.Component);

Dropzone.propTypes = {
  /**
   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),

  /**
   * Render function that renders the actual component
   *
   * @param {Object} props
   * @param {Function} props.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} props.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} props.open Open the native file selection dialog
   * @param {Boolean} props.isFocused Dropzone area is in focus
   * @param {Boolean} props.isDragActive Active drag is in progress
   * @param {Boolean} props.isDragAccept Dragged files are accepted
   * @param {Boolean} props.isDragReject Some dragged files are rejected
   * @param {Array} props.draggedFiles Files in active drag
   * @param {Array} props.acceptedFiles Accepted files
   * @param {Array} props.rejectedFiles Rejected files
   */
  children: propTypes.func,

  /**
   * Enable/disable the dropzone entirely
   */
  disabled: propTypes.bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: propTypes.bool,

  /**
   * Allow dropping multiple files
   */
  multiple: propTypes.bool,

  /**
   * `name` attribute for the input tag
   */
  name: propTypes.string,

  /**
   * Maximum file size (in bytes)
   */
  maxSize: propTypes.number,

  /**
   * Minimum file size (in bytes)
   */
  minSize: propTypes.number,

  /**
   * getDataTransferItems handler
   * @param {Event} event
   * @returns {Array} array of File objects
   */
  getDataTransferItems: propTypes.func,

  /**
   * onClick callback
   * @param {Event} event
   */
  onClick: propTypes.func,

  /**
   * onFocus callback
   */
  onFocus: propTypes.func,

  /**
   * onBlur callback
   */
  onBlur: propTypes.func,

  /**
   * onKeyDown callback
   */
  onKeyDown: propTypes.func,

  /**
   * The `onDrop` method that accepts two arguments.
   * The first argument represents the accepted files and the second argument the rejected files.
   *
   * ```javascript
   * function onDrop(acceptedFiles, rejectedFiles) {
   *   // do stuff with files...
   * }
   * ```
   *
   * Files are accepted or rejected based on the `accept` prop.
   * This must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   *
   * Note that the `onDrop` callback will always be called regardless if the dropped files were accepted or rejected.
   * You can use the `onDropAccepted`/`onDropRejected` props if you'd like to react to a specific event instead of the `onDrop` prop.
   *
   * The `onDrop` callback will provide you with an array of [Files](https://developer.mozilla.org/en-US/docs/Web/API/File) which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```javascript
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   */
  onDrop: propTypes.func,

  /**
   * onDropAccepted callback
   */
  onDropAccepted: propTypes.func,

  /**
   * onDropRejected callback
   */
  onDropRejected: propTypes.func,

  /**
   * onDragStart callback
   */
  onDragStart: propTypes.func,

  /**
   * onDragEnter callback
   */
  onDragEnter: propTypes.func,

  /**
   * onDragOver callback
   */
  onDragOver: propTypes.func,

  /**
   * onDragLeave callback
   */
  onDragLeave: propTypes.func,

  /**
   * Provide a callback on clicking the cancel button of the file dialog
   */
  onFileDialogCancel: propTypes.func
};

Dropzone.defaultProps = {
  preventDropOnDocument: true,
  disabled: false,
  multiple: true,
  maxSize: Infinity,
  minSize: 0,
  getDataTransferItems: fromEvent
};

const FileUpload = (_a) => {
    var { id, type, value = type === fileReaderType.text || type === fileReaderType.dataURL ? '' : null, filename = '', children = null, onChange = () => { }, onReadStarted = () => { }, onReadFinished = () => { }, onReadFailed = () => { }, dropzoneProps = {} } = _a, props = __rest(_a, ["id", "type", "value", "filename", "children", "onChange", "onReadStarted", "onReadFinished", "onReadFailed", "dropzoneProps"]);
    const onDropAccepted = (acceptedFiles, event) => {
        if (acceptedFiles.length > 0) {
            const fileHandle = acceptedFiles[0];
            if (type === fileReaderType.text || type === fileReaderType.dataURL) {
                onChange('', fileHandle.name, event); // Show the filename while reading
                onReadStarted(fileHandle);
                readFile(fileHandle, type)
                    .then(data => {
                    onReadFinished(fileHandle);
                    onChange(data, fileHandle.name, event);
                })
                    .catch((error) => {
                    onReadFailed(error, fileHandle);
                    onReadFinished(fileHandle);
                    onChange('', '', event); // Clear the filename field on a failure
                });
            }
            else {
                onChange(fileHandle, fileHandle.name, event);
            }
        }
        dropzoneProps.onDropAccepted && dropzoneProps.onDropAccepted(acceptedFiles, event);
    };
    const onDropRejected = (rejectedFiles, event) => {
        if (rejectedFiles.length > 0) {
            onChange('', rejectedFiles[0].name, event);
        }
        dropzoneProps.onDropRejected && dropzoneProps.onDropRejected(rejectedFiles, event);
    };
    const onClearButtonClick = (event) => {
        onChange('', '', event);
    };
    return (react.createElement(Dropzone, Object.assign({ multiple: false }, dropzoneProps, { onDropAccepted: onDropAccepted, onDropRejected: onDropRejected }), ({ getRootProps, getInputProps, isDragActive, open }) => (react.createElement(FileUploadField, Object.assign({}, getRootProps(Object.assign(Object.assign({}, props), { refKey: 'containerRef', onClick: event => event.preventDefault() // Prevents clicking TextArea from opening file dialog
     })), { tabIndex: null, id: id, type: type, filename: filename, value: value, onChange: onChange, isDragActive: isDragActive, onBrowseButtonClick: open, onClearButtonClick: onClearButtonClick }),
        react.createElement("input", Object.assign({}, getInputProps())),
        children))));
};
FileUpload.displayName = 'FileUpload';

const ActionGroup = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    const customClassName = css(formStyles$1.formGroup, formStyles$1.modifiers.action, className);
    const formActionsComponent = react.createElement("div", { className: css(formStyles$1.formActions) }, children);
    return (react.createElement("div", Object.assign({}, props, { className: customClassName }),
        react.createElement("div", { className: css(formStyles$1.formGroupControl) }, formActionsComponent)));
};
ActionGroup.displayName = 'ActionGroup';

const Form = (_a) => {
    var { children = null, className = '', isHorizontal = false, isWidthLimited = false } = _a, props = __rest(_a, ["children", "className", "isHorizontal", "isWidthLimited"]);
    return (react.createElement("form", Object.assign({ noValidate: true }, props, { className: css(formStyles$1.form, isHorizontal && formStyles$1.modifiers.horizontal, isWidthLimited && formStyles$1.modifiers.limitWidth, className) }), children));
};
Form.displayName = 'Form';

const FormGroup = (_a) => {
    var { children = null, className = '', label, labelIcon, isRequired = false, validated = 'default', isInline = false, hasNoPaddingTop = false, helperText, isHelperTextBeforeField = false, helperTextInvalid, helperTextIcon, helperTextInvalidIcon, fieldId } = _a, props = __rest(_a, ["children", "className", "label", "labelIcon", "isRequired", "validated", "isInline", "hasNoPaddingTop", "helperText", "isHelperTextBeforeField", "helperTextInvalid", "helperTextIcon", "helperTextInvalidIcon", "fieldId"]);
    const validHelperText = typeof helperText !== 'string' ? (helperText) : (react.createElement("div", { className: css(formStyles$1.formHelperText, validated === ValidatedOptions.success && formStyles$1.modifiers.success, validated === ValidatedOptions.warning && formStyles$1.modifiers.warning), id: `${fieldId}-helper`, "aria-live": "polite" },
        helperTextIcon && react.createElement("span", { className: css(formStyles$1.formHelperTextIcon) }, helperTextIcon),
        helperText));
    const inValidHelperText = typeof helperTextInvalid !== 'string' ? (helperTextInvalid) : (react.createElement("div", { className: css(formStyles$1.formHelperText, formStyles$1.modifiers.error), id: `${fieldId}-helper`, "aria-live": "polite" },
        helperTextInvalidIcon && react.createElement("span", { className: css(formStyles$1.formHelperTextIcon) }, helperTextInvalidIcon),
        helperTextInvalid));
    const showValidHelperTxt = (validationType) => validationType !== ValidatedOptions.error && helperText ? validHelperText : '';
    const helperTextToDisplay = validated === ValidatedOptions.error && helperTextInvalid ? inValidHelperText : showValidHelperTxt(validated);
    return (react.createElement("div", Object.assign({}, props, { className: css(formStyles$1.formGroup, className) }),
        label && (react.createElement("div", { className: css(formStyles$1.formGroupLabel, hasNoPaddingTop && formStyles$1.modifiers.noPaddingTop) },
            react.createElement("label", { className: css(formStyles$1.formLabel), htmlFor: fieldId },
                react.createElement("span", { className: css(formStyles$1.formLabelText) }, label),
                isRequired && (react.createElement("span", { className: css(formStyles$1.formLabelRequired), "aria-hidden": "true" },
                    ' ',
                    ASTERISK))),
            ' ',
            react.isValidElement(labelIcon) && labelIcon)),
        react.createElement("div", { className: css(formStyles$1.formGroupControl, isInline && formStyles$1.modifiers.inline) },
            isHelperTextBeforeField && helperTextToDisplay,
            children,
            !isHelperTextBeforeField && helperTextToDisplay)));
};
FormGroup.displayName = 'FormGroup';

var jumpLinks = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "jumpLinks": "pf-c-jump-links",
  "jumpLinksHeader": "pf-c-jump-links__header",
  "jumpLinksItem": "pf-c-jump-links__item",
  "jumpLinksLabel": "pf-c-jump-links__label",
  "jumpLinksLink": "pf-c-jump-links__link",
  "jumpLinksLinkText": "pf-c-jump-links__link-text",
  "jumpLinksList": "pf-c-jump-links__list",
  "jumpLinksMain": "pf-c-jump-links__main",
  "jumpLinksToggle": "pf-c-jump-links__toggle",
  "jumpLinksToggleIcon": "pf-c-jump-links__toggle-icon",
  "modifiers": {
    "center": "pf-m-center",
    "vertical": "pf-m-vertical",
    "expandable": "pf-m-expandable",
    "nonExpandable": "pf-m-non-expandable",
    "expandableOnSm": "pf-m-expandable-on-sm",
    "nonExpandableOnSm": "pf-m-non-expandable-on-sm",
    "expandableOnMd": "pf-m-expandable-on-md",
    "nonExpandableOnMd": "pf-m-non-expandable-on-md",
    "expandableOnLg": "pf-m-expandable-on-lg",
    "nonExpandableOnLg": "pf-m-non-expandable-on-lg",
    "expandableOnXl": "pf-m-expandable-on-xl",
    "nonExpandableOnXl": "pf-m-non-expandable-on-xl",
    "expandableOn_2xl": "pf-m-expandable-on-2xl",
    "nonExpandableOn_2xl": "pf-m-non-expandable-on-2xl",
    "expanded": "pf-m-expanded",
    "current": "pf-m-current",
    "toggle": "pf-m-toggle"
  }
};
});

var styles$k = /*@__PURE__*/getDefaultExportFromCjs(jumpLinks);

var sidebar = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "gutter": "pf-m-gutter",
    "panelRight": "pf-m-panel-right",
    "stack": "pf-m-stack",
    "split": "pf-m-split",
    "sticky": "pf-m-sticky",
    "static": "pf-m-static",
    "noBackground": "pf-m-no-background",
    "widthDefault": "pf-m-width-default",
    "width_25": "pf-m-width-25",
    "width_33": "pf-m-width-33",
    "width_50": "pf-m-width-50",
    "width_66": "pf-m-width-66",
    "width_75": "pf-m-width-75",
    "width_100": "pf-m-width-100",
    "widthDefaultOnSm": "pf-m-width-default-on-sm",
    "width_25OnSm": "pf-m-width-25-on-sm",
    "width_33OnSm": "pf-m-width-33-on-sm",
    "width_50OnSm": "pf-m-width-50-on-sm",
    "width_66OnSm": "pf-m-width-66-on-sm",
    "width_75OnSm": "pf-m-width-75-on-sm",
    "width_100OnSm": "pf-m-width-100-on-sm",
    "widthDefaultOnMd": "pf-m-width-default-on-md",
    "width_25OnMd": "pf-m-width-25-on-md",
    "width_33OnMd": "pf-m-width-33-on-md",
    "width_50OnMd": "pf-m-width-50-on-md",
    "width_66OnMd": "pf-m-width-66-on-md",
    "width_75OnMd": "pf-m-width-75-on-md",
    "width_100OnMd": "pf-m-width-100-on-md",
    "widthDefaultOnLg": "pf-m-width-default-on-lg",
    "width_25OnLg": "pf-m-width-25-on-lg",
    "width_33OnLg": "pf-m-width-33-on-lg",
    "width_50OnLg": "pf-m-width-50-on-lg",
    "width_66OnLg": "pf-m-width-66-on-lg",
    "width_75OnLg": "pf-m-width-75-on-lg",
    "width_100OnLg": "pf-m-width-100-on-lg",
    "widthDefaultOnXl": "pf-m-width-default-on-xl",
    "width_25OnXl": "pf-m-width-25-on-xl",
    "width_33OnXl": "pf-m-width-33-on-xl",
    "width_50OnXl": "pf-m-width-50-on-xl",
    "width_66OnXl": "pf-m-width-66-on-xl",
    "width_75OnXl": "pf-m-width-75-on-xl",
    "width_100OnXl": "pf-m-width-100-on-xl",
    "widthDefaultOn_2xl": "pf-m-width-default-on-2xl",
    "width_25On_2xl": "pf-m-width-25-on-2xl",
    "width_33On_2xl": "pf-m-width-33-on-2xl",
    "width_50On_2xl": "pf-m-width-50-on-2xl",
    "width_66On_2xl": "pf-m-width-66-on-2xl",
    "width_75On_2xl": "pf-m-width-75-on-2xl",
    "width_100On_2xl": "pf-m-width-100-on-2xl"
  },
  "sidebar": "pf-c-sidebar",
  "sidebarContent": "pf-c-sidebar__content",
  "sidebarMain": "pf-c-sidebar__main",
  "sidebarPanel": "pf-c-sidebar__panel"
};
});

var styles$l = /*@__PURE__*/getDefaultExportFromCjs(sidebar);

const JumpLinksList = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("ul", Object.assign({ className: css(styles$k.jumpLinksList, className) }, props), children));
};
JumpLinksList.displayName = 'JumpLinksList';

const JumpLinksItem = (_a) => {
    var { isActive, href, 
    // eslint-disable-next-line
    node, children, onClick } = _a, props = __rest(_a, ["isActive", "href", "node", "children", "onClick"]);
    const childrenArr = react.Children.toArray(children);
    const sublists = childrenArr.filter(child => child.type === JumpLinksList);
    children = childrenArr.filter(child => child.type !== JumpLinksList);
    return (react.createElement("li", Object.assign({ className: css(styles$k.jumpLinksItem, isActive && styles$k.modifiers.current) }, props),
        react.createElement("a", { className: styles$k.jumpLinksLink, href: href, onClick: onClick },
            react.createElement("span", { className: styles$k.jumpLinksLinkText }, children)),
        sublists));
};
JumpLinksItem.displayName = 'JumpLinksItem';

const c_jump_links__toggle_Display = {
  "name": "--pf-c-jump-links__toggle--Display",
  "value": "none",
  "var": "var(--pf-c-jump-links__toggle--Display)"
};

// Recursively find JumpLinkItems and return an array of all their scrollNodes
const getScrollItems = (children, res) => {
    react.Children.forEach(children, (child) => {
        if (typeof document !== 'undefined' && child.type === JumpLinksItem) {
            const scrollNode = child.props.node || child.props.href;
            if (typeof scrollNode === 'string') {
                if (scrollNode.startsWith('#')) {
                    // Allow spaces and other special characters as `id`s to be nicer to consumers
                    // https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
                    res.push(document.getElementById(scrollNode.substr(1)));
                }
                else {
                    res.push(document.querySelector(scrollNode));
                }
            }
            else if (scrollNode instanceof HTMLElement) {
                res.push(scrollNode);
            }
        }
        if ([react.Fragment, JumpLinksList, JumpLinksItem].includes(child.type)) {
            getScrollItems(child.props.children, res);
        }
    });
    return res;
};
function isResponsive(jumpLinks) {
    // https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/JumpLinks/jump-links.scss#L103
    return (jumpLinks &&
        getComputedStyle(jumpLinks)
            .getPropertyValue(c_jump_links__toggle_Display.name)
            .includes('block'));
}
const JumpLinks = (_a) => {
    var { isCentered, isVertical, children, label, 'aria-label': ariaLabel = typeof label === 'string' ? label : null, scrollableSelector, activeIndex: activeIndexProp = 0, offset = 0, expandable, isExpanded: isExpandedProp = false, alwaysShowLabel = true, toggleAriaLabel = 'Toggle jump links' } = _a, props = __rest(_a, ["isCentered", "isVertical", "children", "label", 'aria-label', "scrollableSelector", "activeIndex", "offset", "expandable", "isExpanded", "alwaysShowLabel", "toggleAriaLabel"]);
    const hasScrollSpy = Boolean(scrollableSelector);
    const [scrollItems, setScrollItems] = react.useState(hasScrollSpy ? getScrollItems(children, []) : []);
    const [activeIndex, setActiveIndex] = react.useState(activeIndexProp);
    const [isExpanded, setIsExpanded] = react.useState(isExpandedProp);
    // Allow expanding to be controlled for a niche use case
    react.useEffect(() => setIsExpanded(isExpandedProp), [isExpandedProp]);
    const navRef = react.useRef();
    if (hasScrollSpy) {
        react.useEffect(() => {
            if (typeof window === 'undefined') {
                return;
            }
            const scrollableElement = document.querySelector(scrollableSelector);
            if (!(scrollableElement instanceof HTMLElement)) {
                return;
            }
            function scrollSpy() {
                const scrollPosition = Math.ceil(scrollableElement.scrollTop + offset);
                window.requestAnimationFrame(() => {
                    let newScrollItems = scrollItems;
                    // Items might have rendered after this component. Do a quick refresh.
                    if (!newScrollItems[0]) {
                        newScrollItems = getScrollItems(children, []);
                        setScrollItems(newScrollItems);
                    }
                    const scrollElements = newScrollItems
                        .map((e, index) => ({
                        y: e ? e.offsetTop : null,
                        index
                    }))
                        .filter(({ y }) => y !== null)
                        .sort((e1, e2) => e2.y - e1.y);
                    for (const { y, index } of scrollElements) {
                        if (scrollPosition >= y) {
                            return setActiveIndex(index);
                        }
                    }
                });
            }
            if (scrollableElement) {
                scrollSpy();
                scrollableElement.addEventListener('scroll', scrollSpy);
            }
            return () => scrollableElement.removeEventListener('scroll', scrollSpy);
        }, [scrollItems, hasScrollSpy]);
    }
    let jumpLinkIndex = 0;
    const cloneChildren = (children) => !hasScrollSpy
        ? children
        : react.Children.map(children, (child) => {
            if (child.type === JumpLinksItem) {
                const { onClick: onClickProp, isActive: isActiveProp } = child.props;
                const itemIndex = jumpLinkIndex++;
                const scrollItem = scrollItems[itemIndex];
                return react.cloneElement(child, {
                    onClick(ev) {
                        // Items might have rendered after this component. Do a quick refresh.
                        let newScrollItems;
                        if (!scrollItem) {
                            newScrollItems = getScrollItems(children, []);
                            setScrollItems(newScrollItems);
                        }
                        const newScrollItem = scrollItem || newScrollItems[itemIndex];
                        if (newScrollItem) {
                            // we have to support scrolling to an offset due to sticky sidebar
                            const scrollableElement = document.querySelector(scrollableSelector);
                            if (scrollableElement instanceof HTMLElement) {
                                if (isResponsive(navRef.current)) {
                                    // Remove class immediately so we can get collapsed height
                                    if (navRef.current) {
                                        navRef.current.classList.remove(styles$k.modifiers.expanded);
                                    }
                                    let stickyParent = navRef.current && navRef.current.parentElement;
                                    while (stickyParent && !stickyParent.classList.contains(styles$l.modifiers.sticky)) {
                                        stickyParent = stickyParent.parentElement;
                                    }
                                    setIsExpanded(false);
                                    if (stickyParent) {
                                        offset += stickyParent.scrollHeight;
                                    }
                                }
                                scrollableElement.scrollTo(0, newScrollItem.offsetTop - offset);
                            }
                            newScrollItem.focus();
                            ev.preventDefault();
                        }
                        if (onClickProp) {
                            onClickProp(ev);
                        }
                    },
                    isActive: isActiveProp || activeIndex === itemIndex,
                    children: cloneChildren(child.props.children)
                });
            }
            else if (child.type === react.Fragment) {
                return cloneChildren(child.props.children);
            }
            else if (child.type === JumpLinksList) {
                return react.cloneElement(child, { children: cloneChildren(child.props.children) });
            }
            return child;
        });
    return (react.createElement("nav", Object.assign({ className: css(styles$k.jumpLinks, isCentered && styles$k.modifiers.center, isVertical && styles$k.modifiers.vertical, formatBreakpointMods(expandable, styles$k), isExpanded && styles$k.modifiers.expanded), "aria-label": ariaLabel, ref: navRef }, props),
        react.createElement("div", { className: styles$k.jumpLinksMain },
            react.createElement("div", { className: styles$k.jumpLinksHeader },
                expandable && (react.createElement("div", { className: styles$k.jumpLinksToggle },
                    react.createElement(Button, { variant: "plain", onClick: () => setIsExpanded(!isExpanded), "aria-label": toggleAriaLabel, "aria-expanded": isExpanded },
                        react.createElement("span", { className: styles$k.jumpLinksToggleIcon },
                            react.createElement(AngleRightIcon, null))))),
                label && (react.createElement("div", { className: css(styles$k.jumpLinksLabel, expandable && !alwaysShowLabel && styles$k.modifiers.toggle) }, label))),
            react.createElement("ul", { className: styles$k.jumpLinksList }, cloneChildren(children)))));
};
JumpLinks.displayName = 'JumpLinks';

var label = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "label": "pf-c-label",
  "labelContent": "pf-c-label__content",
  "labelIcon": "pf-c-label__icon",
  "labelText": "pf-c-label__text",
  "modifiers": {
    "blue": "pf-m-blue",
    "green": "pf-m-green",
    "orange": "pf-m-orange",
    "red": "pf-m-red",
    "purple": "pf-m-purple",
    "cyan": "pf-m-cyan",
    "outline": "pf-m-outline",
    "overflow": "pf-m-overflow"
  }
};
});

var styles$m = /*@__PURE__*/getDefaultExportFromCjs(label);

const colorStyles = {
    blue: styles$m.modifiers.blue,
    cyan: styles$m.modifiers.cyan,
    green: styles$m.modifiers.green,
    orange: styles$m.modifiers.orange,
    purple: styles$m.modifiers.purple,
    red: styles$m.modifiers.red,
    grey: ''
};
const Label = (_a) => {
    var { children, className = '', color = 'grey', variant = 'filled', isTruncated = false, tooltipPosition, icon, onClose, closeBtn, closeBtnProps, href, isOverflowLabel, render } = _a, props = __rest(_a, ["children", "className", "color", "variant", "isTruncated", "tooltipPosition", "icon", "onClose", "closeBtn", "closeBtnProps", "href", "isOverflowLabel", "render"]);
    const LabelComponent = (isOverflowLabel ? 'button' : 'span');
    const Component = href ? 'a' : 'span';
    const button = closeBtn ? (closeBtn) : (react.createElement(Button, Object.assign({ type: "button", variant: "plain", onClick: onClose }, Object.assign({ 'aria-label': 'label-close-button' }, closeBtnProps)),
        react.createElement(TimesIcon, null)));
    const textRef = react.createRef();
    // ref to apply tooltip when rendered is used
    const componentRef = react.useRef();
    const [isTooltipVisible, setIsTooltipVisible] = react.useState(false);
    react.useLayoutEffect(() => {
        setIsTooltipVisible(textRef.current && textRef.current.offsetWidth < textRef.current.scrollWidth);
    }, []);
    const content = (react.createElement(react.Fragment, null,
        icon && react.createElement("span", { className: css(styles$m.labelIcon) }, icon),
        isTruncated && (react.createElement("span", { ref: textRef, className: css(styles$m.labelText) }, children)),
        !isTruncated && children));
    let labelComponentChild = (react.createElement(Component, Object.assign({ className: css(styles$m.labelContent) }, (href && { href })), content));
    if (render) {
        labelComponentChild = (react.createElement(react.Fragment, null,
            isTooltipVisible && react.createElement(Tooltip, { reference: componentRef, content: children, position: tooltipPosition }),
            render({
                className: styles$m.labelContent,
                content,
                componentRef
            })));
    }
    else if (isTooltipVisible) {
        labelComponentChild = (react.createElement(Tooltip, { content: children, position: tooltipPosition },
            react.createElement(Component, Object.assign({ className: css(styles$m.labelContent) }, (href && { href })), content)));
    }
    return (react.createElement(LabelComponent, Object.assign({}, props, { className: css(styles$m.label, colorStyles[color], variant === 'outline' && styles$m.modifiers.outline, isOverflowLabel && styles$m.modifiers.overflow, className) }),
        labelComponentChild,
        onClose && button));
};
Label.displayName = 'Label';

var list = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "list": "pf-c-list",
  "listItem": "pf-c-list__item",
  "listItemIcon": "pf-c-list__item-icon",
  "modifiers": {
    "iconLg": "pf-m-icon-lg",
    "plain": "pf-m-plain",
    "inline": "pf-m-inline",
    "bordered": "pf-m-bordered"
  }
};
});

var styles$n = /*@__PURE__*/getDefaultExportFromCjs(list);

var OrderType;
(function (OrderType) {
    OrderType["number"] = "1";
    OrderType["lowercaseLetter"] = "a";
    OrderType["uppercaseLetter"] = "A";
    OrderType["lowercaseRomanNumber"] = "i";
    OrderType["uppercaseRomanNumber"] = "I";
})(OrderType || (OrderType = {}));
var ListVariant;
(function (ListVariant) {
    ListVariant["inline"] = "inline";
})(ListVariant || (ListVariant = {}));
var ListComponent;
(function (ListComponent) {
    ListComponent["ol"] = "ol";
    ListComponent["ul"] = "ul";
})(ListComponent || (ListComponent = {}));
const List = (_a) => {
    var { className = '', children = null, variant = null, type = OrderType.number, ref = null, component = ListComponent.ul } = _a, props = __rest(_a, ["className", "children", "variant", "type", "ref", "component"]);
    return component === ListComponent.ol ? (react.createElement("ol", Object.assign({ ref: ref, type: type }, props, { className: css(styles$n.list, variant && styles$n.modifiers[variant], className) }), children)) : (react.createElement("ul", Object.assign({ ref: ref }, props, { className: css(styles$n.list, variant && styles$n.modifiers[variant], className) }), children));
};
List.displayName = 'List';

const ListItem = (_a) => {
    var { children = null } = _a, props = __rest(_a, ["children"]);
    return (react.createElement("li", Object.assign({}, props), children));
};
ListItem.displayName = 'ListItem';

var modalBox = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "modalBox": "pf-c-modal-box",
  "modalBoxBody": "pf-c-modal-box__body",
  "modalBoxDescription": "pf-c-modal-box__description",
  "modalBoxFooter": "pf-c-modal-box__footer",
  "modalBoxHeader": "pf-c-modal-box__header",
  "modalBoxHeaderMain": "pf-c-modal-box__header-main",
  "modalBoxTitle": "pf-c-modal-box__title",
  "modalBoxTitleIcon": "pf-c-modal-box__title-icon",
  "modalBoxTitleText": "pf-c-modal-box__title-text",
  "modifiers": {
    "sm": "pf-m-sm",
    "md": "pf-m-md",
    "lg": "pf-m-lg",
    "alignTop": "pf-m-align-top",
    "danger": "pf-m-danger",
    "warning": "pf-m-warning",
    "success": "pf-m-success",
    "default": "pf-m-default",
    "info": "pf-m-info",
    "help": "pf-m-help",
    "icon": "pf-m-icon"
  }
};
});

var modalStyles = /*@__PURE__*/getDefaultExportFromCjs(modalBox);

const ModalBoxBody = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(modalStyles.modalBoxBody, className) }), children));
};
ModalBoxBody.displayName = 'ModalBoxBody';

const ModalBoxCloseButton = (_a) => {
    var { className = '', onClose = () => undefined } = _a, props = __rest(_a, ["className", "onClose"]);
    return (react.createElement(Button, Object.assign({ className: className, variant: "plain", onClick: onClose, "aria-label": "Close" }, props),
        react.createElement(TimesIcon, null)));
};
ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';

const c_modal_box_m_align_top_spacer = {
  "name": "--pf-c-modal-box--m-align-top--spacer",
  "value": "0.5rem",
  "var": "var(--pf-c-modal-box--m-align-top--spacer)"
};

const ModalBox = (_a) => {
    var { children, className = '', variant = 'default', position, positionOffset, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, style } = _a, props = __rest(_a, ["children", "className", "variant", "position", "positionOffset", 'aria-labelledby', 'aria-label', 'aria-describedby', "style"]);
    if (positionOffset) {
        style = style || {};
        style[c_modal_box_m_align_top_spacer.name] = positionOffset;
    }
    return (react.createElement("div", Object.assign({}, props, { role: "dialog", "aria-label": ariaLabel || null, "aria-labelledby": ariaLabelledby || null, "aria-describedby": ariaDescribedby, "aria-modal": "true", className: css(modalStyles.modalBox, className, position === 'top' && modalStyles.modifiers.alignTop, variant === 'large' && modalStyles.modifiers.lg, variant === 'small' && modalStyles.modifiers.sm, variant === 'medium' && modalStyles.modifiers.md), style: style }), children));
};
ModalBox.displayName = 'ModalBox';

const ModalBoxFooter = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("footer", Object.assign({}, props, { className: css(modalStyles.modalBoxFooter, className) }), children));
};
ModalBoxFooter.displayName = 'ModalBoxFooter';

const ModalBoxDescription = (_a) => {
    var { children = null, className = '', id = '' } = _a, props = __rest(_a, ["children", "className", "id"]);
    return (react.createElement("div", Object.assign({}, props, { id: id, className: css(modalStyles.modalBoxDescription, className) }), children));
};
ModalBoxDescription.displayName = 'ModalBoxDescription';

const ModalBoxHeader = (_a) => {
    var { children = null, className = '', help = null } = _a, props = __rest(_a, ["children", "className", "help"]);
    return (react.createElement("header", Object.assign({ className: css(modalStyles.modalBoxHeader, help && modalStyles.modifiers.help, className) }, props),
        help && (react.createElement(react.Fragment, null,
            react.createElement("div", { className: css(modalStyles.modalBoxHeaderMain) }, children),
            react.createElement("div", { className: "pf-c-modal-box__header-help" }, help))),
        !help && children));
};
ModalBoxHeader.displayName = 'ModalBoxHeader';

const isVariantIcon = (icon) => ['success', 'danger', 'warning', 'info', 'defaut'].includes(icon);
const ModalBoxTitle = (_a) => {
    var { className = '', id, title, titleIconVariant, titleLabel = '' } = _a, props = __rest(_a, ["className", "id", "title", "titleIconVariant", "titleLabel"]);
    const [isTooltipVisible, setIsTooltipVisible] = react.useState(false);
    const h1 = react.useRef();
    const label = titleLabel || (isVariantIcon(titleIconVariant) ? `${capitalize(titleIconVariant)} alert:` : titleLabel);
    const variantIcons = {
        success: react.createElement(CheckCircleIcon, null),
        danger: react.createElement(ExclamationCircleIcon, null),
        warning: react.createElement(ExclamationTriangleIcon, null),
        info: react.createElement(InfoCircleIcon, null),
        default: react.createElement(BellIcon, null)
    };
    const CustomIcon = !isVariantIcon(titleIconVariant) && titleIconVariant;
    react.useLayoutEffect(() => {
        setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
    }, []);
    const content = (react.createElement("h1", Object.assign({ id: id, ref: h1, className: css(modalStyles.modalBoxTitle, titleIconVariant && modalStyles.modifiers.icon, className) }, props),
        titleIconVariant && (react.createElement("span", { className: css(modalStyles.modalBoxTitleIcon) }, isVariantIcon(titleIconVariant) ? variantIcons[titleIconVariant] : react.createElement(CustomIcon, null))),
        label && react.createElement("span", { className: css(a11yStyles.screenReader) }, label),
        react.createElement("span", { className: css(modalStyles.modalBoxTitleText) }, title)));
    return isTooltipVisible ? (react.createElement(Tooltip, { content: title, isVisible: true }, content)) : (content);
};
ModalBoxTitle.displayName = 'ModalBoxTitle';

const ModalContent = (_a) => {
    var { children, className = '', isOpen = false, header = null, help = null, description = null, title = '', titleIconVariant = null, titleLabel = '', 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, showClose = true, footer = null, actions = [], onClose = () => undefined, variant = 'default', position, positionOffset, width = -1, boxId, labelId, descriptorId, disableFocusTrap = false, hasNoBodyWrapper = false, ouiaId, ouiaSafe = true } = _a, props = __rest(_a, ["children", "className", "isOpen", "header", "help", "description", "title", "titleIconVariant", "titleLabel", 'aria-label', 'aria-describedby', 'aria-labelledby', "showClose", "footer", "actions", "onClose", "variant", "position", "positionOffset", "width", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe"]);
    if (!isOpen) {
        return null;
    }
    const modalBoxHeader = header ? (react.createElement(ModalBoxHeader, { help: help }, header)) : (title && (react.createElement(ModalBoxHeader, { help: help },
        react.createElement(ModalBoxTitle, { title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, id: labelId }),
        description && react.createElement(ModalBoxDescription, { id: descriptorId }, description))));
    const modalBoxFooter = footer ? (react.createElement(ModalBoxFooter, null, footer)) : (actions.length > 0 && react.createElement(ModalBoxFooter, null, actions));
    const modalBody = hasNoBodyWrapper ? (children) : (react.createElement(ModalBoxBody, Object.assign({}, props, (!description && !ariaDescribedby && { id: descriptorId })), children));
    const boxStyle = width === -1 ? {} : { width };
    const ariaLabelledbyFormatted = () => {
        if (ariaLabelledby === null) {
            return null;
        }
        const idRefList = [];
        if ((ariaLabel && boxId) !== '') {
            idRefList.push(ariaLabel && boxId);
        }
        if (ariaLabelledby) {
            idRefList.push(ariaLabelledby);
        }
        if (title) {
            idRefList.push(labelId);
        }
        return idRefList.join(' ');
    };
    const modalBox = (react.createElement(ModalBox, Object.assign({ id: boxId, style: boxStyle, className: css(className, isVariantIcon(titleIconVariant) &&
            modalStyles.modifiers[titleIconVariant]), variant: variant, position: position, positionOffset: positionOffset, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId) }, getOUIAProps(ModalContent.displayName, ouiaId, ouiaSafe)),
        showClose && react.createElement(ModalBoxCloseButton, { onClose: onClose }),
        modalBoxHeader,
        modalBody,
        modalBoxFooter));
    return (react.createElement(Backdrop, null,
        react.createElement(FocusTrap, { active: !disableFocusTrap, focusTrapOptions: { clickOutsideDeactivates: true }, className: css(styles$1.bullseye) }, modalBox)));
};
ModalContent.displayName = 'ModalContent';

var ModalVariant;
(function (ModalVariant) {
    ModalVariant["small"] = "small";
    ModalVariant["medium"] = "medium";
    ModalVariant["large"] = "large";
    ModalVariant["default"] = "default";
})(ModalVariant || (ModalVariant = {}));
class Modal extends react.Component {
    constructor(props) {
        super(props);
        this.boxId = '';
        this.labelId = '';
        this.descriptorId = '';
        this.handleEscKeyClick = (event) => {
            const { onEscapePress } = this.props;
            if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
                onEscapePress ? onEscapePress(event) : this.props.onClose();
            }
        };
        this.getElement = (appendTo) => {
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo || document.body;
        };
        this.toggleSiblingsFromScreenReaders = (hide) => {
            const { appendTo } = this.props;
            const target = this.getElement(appendTo);
            const bodyChildren = target.children;
            for (const child of Array.from(bodyChildren)) {
                if (child !== this.state.container) {
                    hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                }
            }
        };
        this.isEmpty = (value) => value === null || value === undefined || value === '';
        const boxIdNum = Modal.currentId++;
        const labelIdNum = boxIdNum + 1;
        const descriptorIdNum = boxIdNum + 2;
        this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
        this.labelId = `pf-modal-part-${labelIdNum}`;
        this.descriptorId = `pf-modal-part-${descriptorIdNum}`;
        this.state = {
            container: undefined,
            ouiaStateId: getDefaultOUIAId(Modal.displayName, props.variant)
        };
    }
    componentDidMount() {
        const { appendTo, title, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, hasNoBodyWrapper, header } = this.props;
        const target = this.getElement(appendTo);
        const container = document.createElement('div');
        this.setState({ container });
        target.appendChild(container);
        target.addEventListener('keydown', this.handleEscKeyClick, false);
        if (this.props.isOpen) {
            target.classList.add(css(styles.backdropOpen));
        }
        else {
            target.classList.remove(css(styles.backdropOpen));
        }
        if (this.isEmpty(title) && this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby)) {
            // eslint-disable-next-line no-console
            console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.');
        }
        if (this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby) && (hasNoBodyWrapper || header)) {
            // eslint-disable-next-line no-console
            console.error('Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.');
        }
    }
    componentDidUpdate() {
        const { appendTo } = this.props;
        const target = this.getElement(appendTo);
        if (this.props.isOpen) {
            target.classList.add(css(styles.backdropOpen));
            this.toggleSiblingsFromScreenReaders(true);
        }
        else {
            target.classList.remove(css(styles.backdropOpen));
            this.toggleSiblingsFromScreenReaders(false);
        }
    }
    componentWillUnmount() {
        const { appendTo } = this.props;
        const target = this.getElement(appendTo);
        if (this.state.container) {
            target.removeChild(this.state.container);
        }
        target.removeEventListener('keydown', this.handleEscKeyClick, false);
        target.classList.remove(css(styles.backdropOpen));
    }
    render() {
        const _a = this.props, { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        appendTo, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onEscapePress, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, title, titleIconVariant, titleLabel, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["appendTo", "onEscapePress", 'aria-labelledby', 'aria-label', 'aria-describedby', "title", "titleIconVariant", "titleLabel", "ouiaId", "ouiaSafe"]);
        const { container } = this.state;
        if (!canUseDOM || !container) {
            return null;
        }
        return reactDom.createPortal(react.createElement(ModalContent, Object.assign({}, props, { boxId: this.boxId, labelId: this.labelId, descriptorId: this.descriptorId, title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, ouiaId: ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe: ouiaSafe })), container);
    }
}
Modal.displayName = 'Modal';
Modal.currentId = 0;
Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    titleIconVariant: null,
    titleLabel: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    id: undefined,
    actions: [],
    onClose: () => undefined,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: () => document.body,
    ouiaSafe: true
};

var nav = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "divider": "pf-c-divider",
  "modifiers": {
    "horizontal": "pf-m-horizontal",
    "tertiary": "pf-m-tertiary",
    "light": "pf-m-light",
    "scrollable": "pf-m-scrollable",
    "expandable": "pf-m-expandable",
    "current": "pf-m-current",
    "expanded": "pf-m-expanded"
  },
  "nav": "pf-c-nav",
  "navItem": "pf-c-nav__item",
  "navLink": "pf-c-nav__link",
  "navList": "pf-c-nav__list",
  "navScrollButton": "pf-c-nav__scroll-button",
  "navSection": "pf-c-nav__section",
  "navSectionTitle": "pf-c-nav__section-title",
  "navSubnav": "pf-c-nav__subnav",
  "navToggle": "pf-c-nav__toggle",
  "navToggleIcon": "pf-c-nav__toggle-icon"
};
});

var styles$o = /*@__PURE__*/getDefaultExportFromCjs(nav);

const NavContext = react.createContext({});
class Nav extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isScrollable: false,
            ouiaStateId: getDefaultOUIAId(Nav.displayName, this.props.variant)
        };
    }
    // Callback from NavItem
    onSelect(event, groupId, itemId, to, preventDefault, onClick) {
        if (preventDefault) {
            event.preventDefault();
        }
        this.props.onSelect({ groupId, itemId, event, to });
        if (onClick) {
            onClick(event, itemId, groupId, to);
        }
    }
    // Callback from NavExpandable
    onToggle(event, groupId, toggleValue) {
        this.props.onToggle({
            event,
            groupId,
            isExpanded: toggleValue
        });
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, children, className, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelect, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onToggle, theme, ouiaId, ouiaSafe, variant } = _a, props = __rest(_a, ['aria-label', "children", "className", "onSelect", "onToggle", "theme", "ouiaId", "ouiaSafe", "variant"]);
        const isHorizontal = ['horizontal', 'tertiary'].includes(variant);
        return (react.createElement(NavContext.Provider, { value: {
                onSelect: (event, groupId, itemId, to, preventDefault, onClick) => this.onSelect(event, groupId, itemId, to, preventDefault, onClick),
                onToggle: (event, groupId, expanded) => this.onToggle(event, groupId, expanded),
                updateIsScrollable: (isScrollable) => this.setState({ isScrollable }),
                isHorizontal
            } },
            react.createElement("nav", Object.assign({ className: css(styles$o.nav, theme === 'light' && styles$o.modifiers.light, isHorizontal && styles$o.modifiers.horizontal, variant === 'tertiary' && styles$o.modifiers.tertiary, this.state.isScrollable && styles$o.modifiers.scrollable, className), "aria-label": ariaLabel || (variant === 'tertiary' ? 'Local' : 'Global') }, getOUIAProps(Nav.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props), children)));
    }
}
Nav.displayName = 'Nav';
Nav.defaultProps = {
    onSelect: () => undefined,
    onToggle: () => undefined,
    theme: 'dark',
    ouiaSafe: true
};

var page = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "avatar": "pf-c-avatar",
  "brand": "pf-c-brand",
  "button": "pf-c-button",
  "card": "pf-c-card",
  "drawer": "pf-c-drawer",
  "masthead": "pf-c-masthead",
  "modifiers": {
    "light": "pf-m-light",
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
    "read": "pf-m-read",
    "selected": "pf-m-selected",
    "unread": "pf-m-unread",
    "attention": "pf-m-attention",
    "expanded": "pf-m-expanded",
    "collapsed": "pf-m-collapsed",
    "limitWidth": "pf-m-limit-width",
    "stickyTop": "pf-m-sticky-top",
    "stickyBottom": "pf-m-sticky-bottom",
    "overflowScroll": "pf-m-overflow-scroll",
    "shadowBottom": "pf-m-shadow-bottom",
    "shadowTop": "pf-m-shadow-top",
    "fill": "pf-m-fill",
    "noFill": "pf-m-no-fill",
    "dark_100": "pf-m-dark-100",
    "dark_200": "pf-m-dark-200",
    "padding": "pf-m-padding",
    "noPadding": "pf-m-no-padding",
    "paddingOnSm": "pf-m-padding-on-sm",
    "noPaddingOnSm": "pf-m-no-padding-on-sm",
    "paddingOnMd": "pf-m-padding-on-md",
    "noPaddingOnMd": "pf-m-no-padding-on-md",
    "paddingOnLg": "pf-m-padding-on-lg",
    "noPaddingOnLg": "pf-m-no-padding-on-lg",
    "paddingOnXl": "pf-m-padding-on-xl",
    "noPaddingOnXl": "pf-m-no-padding-on-xl",
    "paddingOn_2xl": "pf-m-padding-on-2xl",
    "noPaddingOn_2xl": "pf-m-no-padding-on-2xl"
  },
  "nav": "pf-c-nav",
  "notificationBadge": "pf-c-notification-badge",
  "page": "pf-c-page",
  "pageDrawer": "pf-c-page__drawer",
  "pageHeader": "pf-c-page__header",
  "pageHeaderBrand": "pf-c-page__header-brand",
  "pageHeaderBrandLink": "pf-c-page__header-brand-link",
  "pageHeaderBrandToggle": "pf-c-page__header-brand-toggle",
  "pageHeaderNav": "pf-c-page__header-nav",
  "pageHeaderTools": "pf-c-page__header-tools",
  "pageHeaderToolsGroup": "pf-c-page__header-tools-group",
  "pageHeaderToolsItem": "pf-c-page__header-tools-item",
  "pageMain": "pf-c-page__main",
  "pageMainBody": "pf-c-page__main-body",
  "pageMainBreadcrumb": "pf-c-page__main-breadcrumb",
  "pageMainDrawer": "pf-c-page__main-drawer",
  "pageMainGroup": "pf-c-page__main-group",
  "pageMainNav": "pf-c-page__main-nav",
  "pageMainSection": "pf-c-page__main-section",
  "pageMainWizard": "pf-c-page__main-wizard",
  "pageSidebar": "pf-c-page__sidebar",
  "pageSidebarBody": "pf-c-page__sidebar-body"
};
});

var styles$p = /*@__PURE__*/getDefaultExportFromCjs(page);

const global_breakpoint_xl = {
  "name": "--pf-global--breakpoint--xl",
  "value": "1200px",
  "var": "var(--pf-global--breakpoint--xl)"
};

const PageGroup = (_a) => {
    var { className = '', children, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$p.pageMainGroup, sticky === 'top' && styles$p.modifiers.stickyTop, sticky === 'bottom' && styles$p.modifiers.stickyBottom, hasShadowTop && styles$p.modifiers.shadowTop, hasShadowBottom && styles$p.modifiers.shadowBottom, hasOverflowScroll && styles$p.modifiers.overflowScroll, className) }), children));
};
PageGroup.displayName = 'PageGroup';

var PageLayouts;
(function (PageLayouts) {
    PageLayouts["vertical"] = "vertical";
    PageLayouts["horizontal"] = "horizontal";
})(PageLayouts || (PageLayouts = {}));
const PageContext = react.createContext({
    isManagedSidebar: false,
    isNavOpen: false,
    onNavToggle: () => null
});
const PageContextProvider = PageContext.Provider;
const PageContextConsumer = PageContext.Consumer;
class Page extends react.Component {
    constructor(props) {
        super(props);
        this.mainRef = react.createRef();
        this.isMobile = () => 
        // eslint-disable-next-line radix
        window.innerWidth < Number.parseInt(global_breakpoint_xl.value, 10);
        this.resize = () => {
            const { onPageResize } = this.props;
            const mobileView = this.isMobile();
            if (onPageResize) {
                onPageResize({ mobileView, windowSize: window.innerWidth });
            }
            if (mobileView !== this.state.mobileView) {
                this.setState({ mobileView });
            }
        };
        this.handleResize = debounce(this.resize, 250);
        this.handleMainClick = () => {
            if (this.isMobile() && this.state.mobileIsNavOpen && this.mainRef.current) {
                this.setState({ mobileIsNavOpen: false });
            }
        };
        this.onNavToggleMobile = () => {
            this.setState(prevState => ({
                mobileIsNavOpen: !prevState.mobileIsNavOpen
            }));
        };
        this.onNavToggleDesktop = () => {
            this.setState(prevState => ({
                desktopIsNavOpen: !prevState.desktopIsNavOpen
            }));
        };
        const { isManagedSidebar, defaultManagedSidebarIsOpen } = props;
        const managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
        this.state = {
            desktopIsNavOpen: managedSidebarOpen,
            mobileIsNavOpen: false,
            mobileView: false
        };
    }
    componentDidMount() {
        const { isManagedSidebar, onPageResize } = this.props;
        if (isManagedSidebar || onPageResize) {
            window.addEventListener('resize', this.handleResize);
            const currentRef = this.mainRef.current;
            if (currentRef) {
                currentRef.addEventListener('mousedown', this.handleMainClick);
                currentRef.addEventListener('touchstart', this.handleMainClick);
            }
            // Initial check if should be shown
            this.resize();
        }
    }
    componentWillUnmount() {
        const { isManagedSidebar, onPageResize } = this.props;
        if (isManagedSidebar || onPageResize) {
            window.removeEventListener('resize', this.handleResize);
            const currentRef = this.mainRef.current;
            if (currentRef) {
                currentRef.removeEventListener('mousedown', this.handleMainClick);
                currentRef.removeEventListener('touchstart', this.handleMainClick);
            }
        }
    }
    render() {
        const _a = this.props, { breadcrumb, isBreadcrumbWidthLimited, className, children, header, sidebar, notificationDrawer, isNotificationDrawerExpanded, onNotificationDrawerExpand, isTertiaryNavWidthLimited, skipToContent, role, mainContainerId, isManagedSidebar, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        defaultManagedSidebarIsOpen, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onPageResize, mainAriaLabel, mainTabIndex, tertiaryNav, isTertiaryNavGrouped, isBreadcrumbGrouped, additionalGroupedContent, groupProps } = _a, rest = __rest(_a, ["breadcrumb", "isBreadcrumbWidthLimited", "className", "children", "header", "sidebar", "notificationDrawer", "isNotificationDrawerExpanded", "onNotificationDrawerExpand", "isTertiaryNavWidthLimited", "skipToContent", "role", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize", "mainAriaLabel", "mainTabIndex", "tertiaryNav", "isTertiaryNavGrouped", "isBreadcrumbGrouped", "additionalGroupedContent", "groupProps"]);
        const { mobileView, mobileIsNavOpen, desktopIsNavOpen } = this.state;
        const context = {
            isManagedSidebar,
            onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
            isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
        };
        let nav = null;
        if (tertiaryNav && isTertiaryNavWidthLimited) {
            nav = (react.createElement("div", { className: css(styles$p.pageMainNav, styles$p.modifiers.limitWidth) },
                react.createElement("div", { className: css(styles$p.pageMainBody) }, tertiaryNav)));
        }
        else if (tertiaryNav) {
            nav = react.createElement("div", { className: css(styles$p.pageMainNav) }, tertiaryNav);
        }
        let crumb = null;
        if (breadcrumb && isBreadcrumbWidthLimited) {
            crumb = (react.createElement("section", { className: css(styles$p.pageMainBreadcrumb, styles$p.modifiers.limitWidth) },
                react.createElement("div", { className: css(styles$p.pageMainBody) }, breadcrumb)));
        }
        else if (breadcrumb) {
            crumb = react.createElement("section", { className: css(styles$p.pageMainBreadcrumb) }, breadcrumb);
        }
        const isGrouped = isTertiaryNavGrouped || isBreadcrumbGrouped || additionalGroupedContent;
        const group = isGrouped ? (react.createElement(PageGroup, Object.assign({}, groupProps),
            isTertiaryNavGrouped && nav,
            isBreadcrumbGrouped && crumb,
            additionalGroupedContent)) : null;
        const main = (react.createElement("main", { ref: this.mainRef, role: role, id: mainContainerId, className: css(styles$p.pageMain), tabIndex: mainTabIndex, "aria-label": mainAriaLabel },
            group,
            !isTertiaryNavGrouped && nav,
            !isBreadcrumbGrouped && crumb,
            children));
        const panelContent = react.createElement(DrawerPanelContent, null, notificationDrawer);
        return (react.createElement(PageContextProvider, { value: context },
            react.createElement("div", Object.assign({}, rest, { className: css(styles$p.page, className) }),
                skipToContent,
                header,
                sidebar,
                notificationDrawer && (react.createElement("div", { className: css(styles$p.pageDrawer) },
                    react.createElement(Drawer, { isExpanded: isNotificationDrawerExpanded, onExpand: onNotificationDrawerExpand },
                        react.createElement(DrawerContent, { panelContent: panelContent },
                            react.createElement(DrawerContentBody, null, main))))),
                !notificationDrawer && main)));
    }
}
Page.displayName = 'Page';
Page.defaultProps = {
    isManagedSidebar: false,
    isBreadcrumbWidthLimited: false,
    defaultManagedSidebarIsOpen: true,
    onPageResize: () => null,
    mainTabIndex: -1,
    isNotificationDrawerExpanded: false,
    onNotificationDrawerExpand: () => null
};

const PageSidebarContext = react.createContext({
    isNavOpen: true
});
const PageSidebar = (_a) => {
    var { className = '', nav, isNavOpen = true, theme = 'dark' } = _a, props = __rest(_a, ["className", "nav", "isNavOpen", "theme"]);
    return (react.createElement(PageContextConsumer, null, ({ isManagedSidebar, isNavOpen: managedIsNavOpen }) => {
        const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (react.createElement("div", Object.assign({ id: "page-sidebar", className: css(styles$p.pageSidebar, theme === 'light' && styles$p.modifiers.light, navOpen && styles$p.modifiers.expanded, !navOpen && styles$p.modifiers.collapsed, className), "aria-hidden": !navOpen }, props),
            react.createElement("div", { className: css(styles$p.pageSidebarBody) },
                react.createElement(PageSidebarContext.Provider, { value: { isNavOpen: navOpen } }, nav))));
    }));
};
PageSidebar.displayName = 'PageSidebar';

class NavList extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            scrollViewAtStart: false,
            scrollViewAtEnd: false
        };
        this.navList = react.createRef();
        this.handleScrollButtons = () => {
            const container = this.navList.current;
            if (container) {
                // check if it elements are in view
                const scrollViewAtStart = isElementInView(container, container.firstChild, false);
                const scrollViewAtEnd = isElementInView(container, container.lastChild, false);
                this.setState({
                    scrollViewAtStart,
                    scrollViewAtEnd
                });
                this.context.updateIsScrollable(!scrollViewAtStart || !scrollViewAtEnd);
            }
        };
        this.scrollLeft = () => {
            // find first Element that is fully in view on the left, then scroll to the element before it
            const container = this.navList.current;
            if (container) {
                const childrenArr = Array.from(container.children);
                let firstElementInView;
                let lastElementOutOfView;
                for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if (isElementInView(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    container.scrollLeft -= lastElementOutOfView.scrollWidth;
                }
                this.handleScrollButtons();
            }
        };
        this.scrollRight = () => {
            // find last Element that is fully in view on the right, then scroll to the element after it
            const container = this.navList.current;
            if (container) {
                const childrenArr = Array.from(container.children);
                let lastElementInView;
                let firstElementOutOfView;
                for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if (isElementInView(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    container.scrollLeft += firstElementOutOfView.scrollWidth;
                }
                this.handleScrollButtons();
            }
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleScrollButtons, false);
        this.handleScrollButtons();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScrollButtons, false);
    }
    render() {
        const _a = this.props, { children, className, ariaLeftScroll, ariaRightScroll } = _a, props = __rest(_a, ["children", "className", "ariaLeftScroll", "ariaRightScroll"]);
        const { scrollViewAtStart, scrollViewAtEnd } = this.state;
        return (react.createElement(NavContext.Consumer, null, ({ isHorizontal }) => (react.createElement(PageSidebarContext.Consumer, null, ({ isNavOpen }) => (react.createElement(react.Fragment, null,
            isHorizontal && (react.createElement("button", { className: css(styles$o.navScrollButton), "aria-label": ariaLeftScroll, onClick: this.scrollLeft, disabled: scrollViewAtStart, tabIndex: isNavOpen ? null : -1 },
                react.createElement(AngleLeftIcon, null))),
            react.createElement("ul", Object.assign({ ref: this.navList, className: css(styles$o.navList, className), onScroll: this.handleScrollButtons }, props), children),
            isHorizontal && (react.createElement("button", { className: css(styles$o.navScrollButton), "aria-label": ariaRightScroll, onClick: this.scrollRight, disabled: scrollViewAtEnd, tabIndex: isNavOpen ? null : -1 },
                react.createElement(AngleRightIcon, null)))))))));
    }
}
NavList.displayName = 'NavList';
NavList.contextType = NavContext;
NavList.defaultProps = {
    ariaLeftScroll: 'Scroll left',
    ariaRightScroll: 'Scroll right'
};

const NavGroup = (_a) => {
    var { title, children = null, className = '', id = getUniqueId() } = _a, props = __rest(_a, ["title", "children", "className", "id"]);
    return (react.createElement("section", Object.assign({ className: css(styles$o.navSection, className), "aria-labelledby": id }, props),
        react.createElement("h2", { className: css(styles$o.navSectionTitle), id: id }, title),
        react.createElement("ul", null, children)));
};
NavGroup.displayName = 'NavGroup';

const NavItem = (_a) => {
    var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "ouiaId", "ouiaSafe"]);
    const Component = component;
    const { isNavOpen } = react.useContext(PageSidebarContext);
    const renderDefaultLink = (context) => {
        const preventLinkDefault = preventDefault || !to;
        return (react.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: css(styles$o.navLink, isActive && styles$o.modifiers.current, className), "aria-current": isActive ? 'page' : null, tabIndex: isNavOpen ? null : '-1' }, props), children));
    };
    const renderClonedChild = (context, child) => react.cloneElement(child, Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
        className: css(styles$o.navLink, isActive && styles$o.modifiers.current, child.props && child.props.className)
    })));
    const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);
    return (react.createElement("li", Object.assign({ className: css(styles$o.navItem, className) }, ouiaProps),
        react.createElement(NavContext.Consumer, null, context => react.isValidElement(children)
            ? renderClonedChild(context, children)
            : renderDefaultLink(context))));
};
NavItem.displayName = 'NavItem';

const TextContent = (_a) => {
    var { children = null, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$2.content, className) }), children));
};
TextContent.displayName = 'TextContent';

var TextVariants;
(function (TextVariants) {
    TextVariants["h1"] = "h1";
    TextVariants["h2"] = "h2";
    TextVariants["h3"] = "h3";
    TextVariants["h4"] = "h4";
    TextVariants["h5"] = "h5";
    TextVariants["h6"] = "h6";
    TextVariants["p"] = "p";
    TextVariants["a"] = "a";
    TextVariants["small"] = "small";
    TextVariants["blockquote"] = "blockquote";
    TextVariants["pre"] = "pre";
})(TextVariants || (TextVariants = {}));
const Text = (_a) => {
    var { children = null, className = '', component = TextVariants.p } = _a, props = __rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: css(className) }), children));
};
Text.displayName = 'Text';

var optionsMenu = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "divider": "pf-c-divider",
  "modifiers": {
    "plain": "pf-m-plain",
    "text": "pf-m-text",
    "active": "pf-m-active",
    "expanded": "pf-m-expanded",
    "disabled": "pf-m-disabled",
    "top": "pf-m-top",
    "alignRight": "pf-m-align-right"
  },
  "optionsMenu": "pf-c-options-menu",
  "optionsMenuGroup": "pf-c-options-menu__group",
  "optionsMenuGroupTitle": "pf-c-options-menu__group-title",
  "optionsMenuMenu": "pf-c-options-menu__menu",
  "optionsMenuMenuItem": "pf-c-options-menu__menu-item",
  "optionsMenuMenuItemIcon": "pf-c-options-menu__menu-item-icon",
  "optionsMenuToggle": "pf-c-options-menu__toggle",
  "optionsMenuToggleButton": "pf-c-options-menu__toggle-button",
  "optionsMenuToggleButtonIcon": "pf-c-options-menu__toggle-button-icon",
  "optionsMenuToggleIcon": "pf-c-options-menu__toggle-icon",
  "optionsMenuToggleText": "pf-c-options-menu__toggle-text"
};
});

var styles$q = /*@__PURE__*/getDefaultExportFromCjs(optionsMenu);

const global_breakpoint_md = {
  "name": "--pf-global--breakpoint--md",
  "value": "768px",
  "var": "var(--pf-global--breakpoint--md)"
};

const global_breakpoint_lg = {
  "name": "--pf-global--breakpoint--lg",
  "value": "992px",
  "var": "var(--pf-global--breakpoint--lg)"
};

const global_breakpoint_2xl = {
  "name": "--pf-global--breakpoint--2xl",
  "value": "1450px",
  "var": "var(--pf-global--breakpoint--2xl)"
};

const BarsIconConfig = {
  name: 'BarsIcon',
  height: 512,
  width: 448,
  svgPath: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
  yOffset: 0,
  xOffset: 0,
};

const BarsIcon = createIcon(BarsIconConfig);

const PageHeader = (_a) => {
    var { className = '', logo = null, logoProps = null, logoComponent = 'a', headerTools = null, topNav = null, isNavOpen = true, isManagedSidebar: deprecatedIsManagedSidebar = undefined, role = undefined, showNavToggle = false, onNavToggle = () => undefined, 'aria-label': ariaLabel = 'Global navigation', 'aria-controls': ariaControls = null } = _a, props = __rest(_a, ["className", "logo", "logoProps", "logoComponent", "headerTools", "topNav", "isNavOpen", "isManagedSidebar", "role", "showNavToggle", "onNavToggle", 'aria-label', 'aria-controls']);
    const LogoComponent = logoComponent;
    if ([false, true].includes(deprecatedIsManagedSidebar)) {
        console.warn('isManagedSidebar is deprecated in the PageHeader component. To make the sidebar toggle uncontrolled, pass this prop in the Page component');
    }
    return (react.createElement(PageContextConsumer, null, ({ isManagedSidebar, onNavToggle: managedOnNavToggle, isNavOpen: managedIsNavOpen }) => {
        const navToggle = isManagedSidebar ? managedOnNavToggle : onNavToggle;
        const navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (react.createElement("header", Object.assign({ role: role, className: css(styles$p.pageHeader, className) }, props),
            (showNavToggle || logo) && (react.createElement("div", { className: css(styles$p.pageHeaderBrand) },
                showNavToggle && (react.createElement("div", { className: css(styles$p.pageHeaderBrandToggle) },
                    react.createElement(Button, { id: "nav-toggle", onClick: navToggle, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": navOpen ? 'true' : 'false', variant: ButtonVariant.plain },
                        react.createElement(BarsIcon, null)))),
                logo && (react.createElement(LogoComponent, Object.assign({ className: css(styles$p.pageHeaderBrandLink) }, logoProps), logo)))),
            topNav && react.createElement("div", { className: css(styles$p.pageHeaderNav) }, topNav),
            headerTools));
    }));
};
PageHeader.displayName = 'PageHeader';

var PageSectionVariants;
(function (PageSectionVariants) {
    PageSectionVariants["default"] = "default";
    PageSectionVariants["light"] = "light";
    PageSectionVariants["dark"] = "dark";
    PageSectionVariants["darker"] = "darker";
})(PageSectionVariants || (PageSectionVariants = {}));
var PageSectionTypes;
(function (PageSectionTypes) {
    PageSectionTypes["default"] = "default";
    PageSectionTypes["nav"] = "nav";
    PageSectionTypes["wizard"] = "wizard";
})(PageSectionTypes || (PageSectionTypes = {}));
const variantType = {
    [PageSectionTypes.default]: styles$p.pageMainSection,
    [PageSectionTypes.nav]: styles$p.pageMainNav,
    [PageSectionTypes.wizard]: styles$p.pageMainWizard
};
const variantStyle = {
    [PageSectionVariants.default]: '',
    [PageSectionVariants.light]: styles$p.modifiers.light,
    [PageSectionVariants.dark]: styles$p.modifiers.dark_200,
    [PageSectionVariants.darker]: styles$p.modifiers.dark_100
};
const PageSection = (_a) => {
    var { className = '', children, variant = 'default', type = 'default', padding, isFilled, isWidthLimited = false, sticky, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "variant", "type", "padding", "isFilled", "isWidthLimited", "sticky", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
    return (react.createElement("section", Object.assign({}, props, { className: css(variantType[type], formatBreakpointMods(padding, styles$p), variantStyle[variant], isFilled === false && styles$p.modifiers.noFill, isFilled === true && styles$p.modifiers.fill, isWidthLimited && styles$p.modifiers.limitWidth, sticky === 'top' && styles$p.modifiers.stickyTop, sticky === 'bottom' && styles$p.modifiers.stickyBottom, hasShadowTop && styles$p.modifiers.shadowTop, hasShadowBottom && styles$p.modifiers.shadowBottom, hasOverflowScroll && styles$p.modifiers.overflowScroll, className) }),
        isWidthLimited && react.createElement("div", { className: css(styles$p.pageMainBody) }, children),
        !isWidthLimited && children));
};
PageSection.displayName = 'PageSection';

const PageHeaderTools = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("div", Object.assign({ className: css(styles$p.pageHeaderTools, className) }, props), children));
};
PageHeaderTools.displayName = 'PageHeaderTools';

const PageHeaderToolsGroup = (_a) => {
    var { children, className, visibility } = _a, props = __rest(_a, ["children", "className", "visibility"]);
    return (react.createElement("div", Object.assign({ className: css(styles$p.pageHeaderToolsGroup, formatBreakpointMods(visibility, styles$p), className) }, props), children));
};
PageHeaderToolsGroup.displayName = 'PageHeaderToolsGroup';

const PageHeaderToolsItem = ({ children, id, className, visibility, isSelected }) => (react.createElement("div", { className: css(styles$p.pageHeaderToolsItem, isSelected && styles$p.modifiers.selected, formatBreakpointMods(visibility, styles$p), className), id: id }, children));
PageHeaderToolsItem.displayName = 'PageHeaderToolsItem';

const ToggleTemplate = ({ firstIndex = 0, lastIndex = 0, itemCount = 0, itemsTitle = 'items' }) => (react.createElement(react.Fragment, null,
    react.createElement("b", null,
        firstIndex,
        " - ",
        lastIndex),
    ' ',
    "of ",
    react.createElement("b", null, itemCount),
    " ",
    itemsTitle));
ToggleTemplate.displayName = 'ToggleTemplate';

var pagination = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "formControl": "pf-c-form-control",
  "modifiers": {
    "bottom": "pf-m-bottom",
    "static": "pf-m-static",
    "first": "pf-m-first",
    "last": "pf-m-last",
    "sticky": "pf-m-sticky",
    "compact": "pf-m-compact",
    "displaySummary": "pf-m-display-summary",
    "displayFull": "pf-m-display-full",
    "displaySummaryOnSm": "pf-m-display-summary-on-sm",
    "displayFullOnSm": "pf-m-display-full-on-sm",
    "displaySummaryOnMd": "pf-m-display-summary-on-md",
    "displayFullOnMd": "pf-m-display-full-on-md",
    "displaySummaryOnLg": "pf-m-display-summary-on-lg",
    "displayFullOnLg": "pf-m-display-full-on-lg",
    "displaySummaryOnXl": "pf-m-display-summary-on-xl",
    "displayFullOnXl": "pf-m-display-full-on-xl",
    "displaySummaryOn_2xl": "pf-m-display-summary-on-2xl",
    "displayFullOn_2xl": "pf-m-display-full-on-2xl"
  },
  "optionsMenu": "pf-c-options-menu",
  "optionsMenuToggle": "pf-c-options-menu__toggle",
  "pagination": "pf-c-pagination",
  "paginationNav": "pf-c-pagination__nav",
  "paginationNavControl": "pf-c-pagination__nav-control",
  "paginationNavPageSelect": "pf-c-pagination__nav-page-select",
  "paginationTotalItems": "pf-c-pagination__total-items"
};
});

var styles$r = /*@__PURE__*/getDefaultExportFromCjs(pagination);

class Navigation extends react.Component {
    constructor(props) {
        super(props);
        this.handleNewPage = (_evt, newPage) => {
            const { perPage, onSetPage } = this.props;
            const startIdx = (newPage - 1) * perPage;
            const endIdx = newPage * perPage;
            return onSetPage(_evt, newPage, perPage, startIdx, endIdx);
        };
        this.state = { userInputPage: this.props.page };
    }
    static parseInteger(input, lastPage) {
        // eslint-disable-next-line radix
        let inputPage = Number.parseInt(input, 10);
        if (!Number.isNaN(inputPage)) {
            inputPage = inputPage > lastPage ? lastPage : inputPage;
            inputPage = inputPage < 1 ? 1 : inputPage;
        }
        return inputPage;
    }
    onChange(event, lastPage) {
        const inputPage = Navigation.parseInteger(event.target.value, lastPage);
        this.setState({ userInputPage: Number.isNaN(inputPage) ? event.target.value : inputPage });
    }
    onKeyDown(event, page, lastPage, onPageInput) {
        if (event.keyCode === KEY_CODES.ENTER) {
            const inputPage = Navigation.parseInteger(this.state.userInputPage, lastPage);
            onPageInput(event, Number.isNaN(inputPage) ? page : inputPage);
            this.handleNewPage(event, Number.isNaN(inputPage) ? page : inputPage);
        }
    }
    componentDidUpdate(lastState) {
        if (this.props.page !== lastState.page &&
            this.props.page <= this.props.lastPage &&
            this.state.userInputPage !== this.props.page) {
            this.setState({ userInputPage: this.props.page });
        }
    }
    render() {
        const _a = this.props, { page, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        perPage, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSetPage, isDisabled, lastPage, firstPage, pagesTitle, toLastPage, toNextPage, toFirstPage, toPreviousPage, currPage, paginationTitle, onNextClick, onPreviousClick, onFirstClick, onLastClick, onPageInput, className, isCompact } = _a, props = __rest(_a, ["page", "perPage", "onSetPage", "isDisabled", "lastPage", "firstPage", "pagesTitle", "toLastPage", "toNextPage", "toFirstPage", "toPreviousPage", "currPage", "paginationTitle", "onNextClick", "onPreviousClick", "onFirstClick", "onLastClick", "onPageInput", "className", "isCompact"]);
        const { userInputPage } = this.state;
        return (react.createElement("nav", Object.assign({ className: css(styles$r.paginationNav, className), "aria-label": paginationTitle }, props),
            !isCompact && (react.createElement("div", { className: css(styles$r.paginationNavControl, styles$r.modifiers.first) },
                react.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "aria-label": toFirstPage, "data-action": "first", onClick: event => {
                        onFirstClick(event, 1);
                        this.handleNewPage(event, 1);
                        this.setState({ userInputPage: 1 });
                    } },
                    react.createElement(AngleDoubleLeftIcon, null)))),
            react.createElement("div", { className: styles$r.paginationNavControl },
                react.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === firstPage || page === 0, "data-action": "previous", onClick: event => {
                        const newPage = page - 1 >= 1 ? page - 1 : 1;
                        onPreviousClick(event, newPage);
                        this.handleNewPage(event, newPage);
                        this.setState({ userInputPage: newPage });
                    }, "aria-label": toPreviousPage },
                    react.createElement(AngleLeftIcon, null))),
            !isCompact && (react.createElement("div", { className: styles$r.paginationNavPageSelect },
                react.createElement("input", { className: css(styles$r.formControl), "aria-label": currPage, type: "number", disabled: isDisabled || (page === firstPage && page === lastPage) || page === 0, min: lastPage <= 0 && firstPage <= 0 ? 0 : 1, max: lastPage, value: userInputPage, onKeyDown: event => this.onKeyDown(event, page, lastPage, onPageInput), onChange: event => this.onChange(event, lastPage) }),
                react.createElement("span", { "aria-hidden": "true" },
                    "of ",
                    pagesTitle ? pluralize(lastPage, pagesTitle) : lastPage))),
            react.createElement("div", { className: styles$r.paginationNavControl },
                react.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toNextPage, "data-action": "next", onClick: event => {
                        const newPage = page + 1 <= lastPage ? page + 1 : lastPage;
                        onNextClick(event, newPage);
                        this.handleNewPage(event, newPage);
                        this.setState({ userInputPage: newPage });
                    } },
                    react.createElement(AngleRightIcon, null))),
            !isCompact && (react.createElement("div", { className: css(styles$r.paginationNavControl, styles$r.modifiers.last) },
                react.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled || page === lastPage, "aria-label": toLastPage, "data-action": "last", onClick: event => {
                        onLastClick(event, lastPage);
                        this.handleNewPage(event, lastPage);
                        this.setState({ userInputPage: lastPage });
                    } },
                    react.createElement(AngleDoubleRightIcon, null))))));
    }
}
Navigation.displayName = 'Navigation';
Navigation.defaultProps = {
    className: '',
    isDisabled: false,
    isCompact: false,
    lastPage: 0,
    firstPage: 0,
    pagesTitle: '',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    currPage: 'Current page',
    paginationTitle: 'Pagination',
    onNextClick: () => undefined,
    onPreviousClick: () => undefined,
    onFirstClick: () => undefined,
    onLastClick: () => undefined,
    onPageInput: () => undefined
};

let toggleId = 0;
const OptionsToggle = ({ itemsTitle = 'items', optionsToggle = 'Select', 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
itemsPerPageTitle = 'Items per page', firstIndex = 0, lastIndex = 0, itemCount = 0, widgetId = '', showToggle = true, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
onToggle = (_isOpen) => undefined, isOpen = false, isDisabled = false, parentRef = null, toggleTemplate: ToggleTemplate = '', onEnter = null }) => (react.createElement("div", { className: css(styles$q.optionsMenuToggle, isDisabled && styles$q.modifiers.disabled, styles$q.modifiers.plain, styles$q.modifiers.text) }, showToggle && (react.createElement(react.Fragment, null,
    react.createElement("span", { className: css(styles$q.optionsMenuToggleText) }, typeof ToggleTemplate === 'string' ? (fillTemplate(ToggleTemplate, { firstIndex, lastIndex, itemCount, itemsTitle })) : (react.createElement(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: itemsTitle }))),
    react.createElement(DropdownToggle, { onEnter: onEnter, "aria-label": optionsToggle, onToggle: onToggle, isDisabled: isDisabled || itemCount <= 0, isOpen: isOpen, id: `${widgetId}-toggle-${toggleId++}`, className: styles$q.optionsMenuToggleButton, parentRef: parentRef })))));
OptionsToggle.displayName = 'OptionsToggle';

class PaginationOptionsMenu extends react.Component {
    constructor(props) {
        super(props);
        this.parentRef = react.createRef();
        this.onToggle = (isOpen) => {
            this.setState({ isOpen });
        };
        this.onSelect = () => {
            this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
        };
        this.handleNewPerPage = (_evt, newPerPage) => {
            const { page, onPerPageSelect, itemCount, defaultToFullPage } = this.props;
            let newPage = page;
            while (Math.ceil(itemCount / newPerPage) < newPage) {
                newPage--;
            }
            if (defaultToFullPage) {
                if (itemCount / newPerPage !== newPage) {
                    while (newPage > 1 && itemCount - newPerPage * newPage < 0) {
                        newPage--;
                    }
                }
            }
            const startIdx = (newPage - 1) * newPerPage;
            const endIdx = newPage * newPerPage;
            return onPerPageSelect(_evt, newPerPage, newPage, startIdx, endIdx);
        };
        this.renderItems = () => {
            const { perPageOptions, perPage, perPageSuffix } = this.props;
            return perPageOptions.map(({ value, title }) => (react.createElement(DropdownItem, { key: value, component: "button", "data-action": `per-page-${value}`, className: css(perPage === value && 'pf-m-selected'), onClick: event => this.handleNewPerPage(event, value) },
                title,
                ` ${perPageSuffix}`,
                perPage === value && (react.createElement("div", { className: css(styles$q.optionsMenuMenuItemIcon) },
                    react.createElement(CheckIcon, null))))));
        };
        this.state = {
            isOpen: false
        };
    }
    render() {
        const { widgetId, isDisabled, itemsPerPageTitle, dropDirection, optionsToggle, perPageOptions, toggleTemplate, firstIndex, lastIndex, itemCount, itemsTitle } = this.props;
        const { isOpen } = this.state;
        return (react.createElement(DropdownContext.Provider, { value: {
                id: widgetId,
                onSelect: this.onSelect,
                toggleIndicatorClass: styles$q.optionsMenuToggleButtonIcon,
                toggleTextClass: styles$q.optionsMenuToggleText,
                menuClass: styles$q.optionsMenuMenu,
                itemClass: styles$q.optionsMenuMenuItem,
                toggleClass: ' ',
                baseClass: styles$q.optionsMenu,
                disabledClass: styles$q.modifiers.disabled,
                menuComponent: 'ul',
                baseComponent: 'div',
                ouiaComponentType: PaginationOptionsMenu.displayName
            } },
            react.createElement(DropdownWithContext, { direction: dropDirection, isOpen: isOpen, toggle: react.createElement(OptionsToggle, { optionsToggle: optionsToggle, itemsPerPageTitle: itemsPerPageTitle, showToggle: perPageOptions && perPageOptions.length > 0, onToggle: this.onToggle, isOpen: isOpen, widgetId: widgetId, firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: itemsTitle, toggleTemplate: toggleTemplate, parentRef: this.parentRef.current, isDisabled: isDisabled }), dropdownItems: this.renderItems(), isPlain: true })));
    }
}
PaginationOptionsMenu.displayName = 'PaginationOptionsMenu';
PaginationOptionsMenu.defaultProps = {
    className: '',
    widgetId: '',
    isDisabled: false,
    dropDirection: DropdownDirection.down,
    perPageOptions: [],
    itemsPerPageTitle: 'Items per page',
    perPageSuffix: 'per page',
    optionsToggle: 'Select',
    perPage: 0,
    firstIndex: 0,
    lastIndex: 0,
    defaultToFullPage: false,
    itemCount: 0,
    itemsTitle: 'items',
    toggleTemplate: ({ firstIndex, lastIndex, itemCount, itemsTitle }) => (react.createElement(react.Fragment, null,
        react.createElement("b", null,
            firstIndex,
            " - ",
            lastIndex),
        ' ',
        "of",
        react.createElement("b", null, itemCount),
        " ",
        itemsTitle)),
    onPerPageSelect: () => null
};

const c_pagination__nav_page_select_c_form_control_width_chars = {
  "name": "--pf-c-pagination__nav-page-select--c-form-control--width-chars",
  "value": "2",
  "var": "var(--pf-c-pagination__nav-page-select--c-form-control--width-chars)"
};

var PaginationVariant;
(function (PaginationVariant) {
    PaginationVariant["top"] = "top";
    PaginationVariant["bottom"] = "bottom";
})(PaginationVariant || (PaginationVariant = {}));
const defaultPerPageOptions = [
    {
        title: '10',
        value: 10
    },
    {
        title: '20',
        value: 20
    },
    {
        title: '50',
        value: 50
    },
    {
        title: '100',
        value: 100
    }
];
const handleInputWidth = (lastPage, node) => {
    if (!node) {
        return;
    }
    const len = String(lastPage).length;
    if (len >= 3) {
        node.style.setProperty(c_pagination__nav_page_select_c_form_control_width_chars.name, `${len}`);
    }
    else {
        node.style.setProperty(c_pagination__nav_page_select_c_form_control_width_chars.name, '2');
    }
};
let paginationId = 0;
class Pagination extends react.Component {
    constructor() {
        super(...arguments);
        this.paginationRef = react.createRef();
        this.state = {
            ouiaStateId: getDefaultOUIAId(Pagination.displayName, this.props.variant)
        };
    }
    getLastPage() {
        const { itemCount, perPage } = this.props;
        return Math.ceil(itemCount / perPage) || 0;
    }
    componentDidMount() {
        const node = this.paginationRef.current;
        handleInputWidth(this.getLastPage(), node);
    }
    componentDidUpdate(prevProps) {
        const node = this.paginationRef.current;
        if (prevProps.perPage !== this.props.perPage || prevProps.itemCount !== this.props.itemCount) {
            handleInputWidth(this.getLastPage(), node);
        }
    }
    render() {
        const _a = this.props, { children, className, variant, isDisabled, isCompact, isStatic, isSticky, perPage, titles, firstPage, page: propPage, offset, defaultToFullPage, itemCount, itemsStart, itemsEnd, perPageOptions, dropDirection: dropDirectionProp, widgetId, toggleTemplate, onSetPage, onPerPageSelect, onFirstClick, onPreviousClick, onNextClick, onPageInput, onLastClick, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "variant", "isDisabled", "isCompact", "isStatic", "isSticky", "perPage", "titles", "firstPage", "page", "offset", "defaultToFullPage", "itemCount", "itemsStart", "itemsEnd", "perPageOptions", "dropDirection", "widgetId", "toggleTemplate", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaId", "ouiaSafe"]);
        const dropDirection = dropDirectionProp || (variant === 'bottom' && !isStatic ? 'up' : 'down');
        let page = propPage;
        if (!page && offset) {
            page = Math.ceil(offset / perPage);
        }
        const lastPage = this.getLastPage();
        if (page < firstPage && itemCount > 0) {
            page = firstPage;
        }
        else if (page > lastPage) {
            page = lastPage;
        }
        const firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
        let lastIndex;
        if (itemCount <= 0) {
            lastIndex = 0;
        }
        else {
            lastIndex = page === lastPage ? itemCount : page * perPage;
        }
        return (react.createElement("div", Object.assign({ ref: this.paginationRef, className: css(styles$r.pagination, variant === PaginationVariant.bottom && styles$r.modifiers.bottom, isCompact && styles$r.modifiers.compact, isStatic && styles$r.modifiers.static, isSticky && styles$r.modifiers.sticky, className), id: `${widgetId}-${paginationId++}` }, getOUIAProps(Pagination.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props),
            variant === PaginationVariant.top && (react.createElement("div", { className: css(styles$r.paginationTotalItems) },
                react.createElement(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: titles.items }))),
            react.createElement(PaginationOptionsMenu, { itemsPerPageTitle: titles.itemsPerPage, perPageSuffix: titles.perPageSuffix, itemsTitle: isCompact ? '' : titles.items, optionsToggle: titles.optionsToggle, perPageOptions: perPageOptions, firstIndex: itemsStart !== null ? itemsStart : firstIndex, lastIndex: itemsEnd !== null ? itemsEnd : lastIndex, defaultToFullPage: defaultToFullPage, itemCount: itemCount, page: page, perPage: perPage, lastPage: lastPage, onPerPageSelect: onPerPageSelect, dropDirection: dropDirection, widgetId: widgetId, toggleTemplate: toggleTemplate, isDisabled: isDisabled }),
            react.createElement(Navigation, { pagesTitle: titles.page, toLastPage: titles.toLastPage, toPreviousPage: titles.toPreviousPage, toNextPage: titles.toNextPage, toFirstPage: titles.toFirstPage, currPage: titles.currPage, paginationTitle: titles.paginationTitle, page: itemCount <= 0 ? 0 : page, perPage: perPage, firstPage: itemsStart !== null ? itemsStart : 1, lastPage: lastPage, onSetPage: onSetPage, onFirstClick: onFirstClick, onPreviousClick: onPreviousClick, onNextClick: onNextClick, onLastClick: onLastClick, onPageInput: onPageInput, isDisabled: isDisabled, isCompact: isCompact }),
            children));
    }
}
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
    children: null,
    className: '',
    variant: PaginationVariant.top,
    isDisabled: false,
    isCompact: false,
    isSticky: false,
    perPage: defaultPerPageOptions[0].value,
    titles: {
        items: '',
        page: '',
        itemsPerPage: 'Items per page',
        perPageSuffix: 'per page',
        toFirstPage: 'Go to first page',
        toPreviousPage: 'Go to previous page',
        toLastPage: 'Go to last page',
        toNextPage: 'Go to next page',
        optionsToggle: 'Items per page',
        currPage: 'Current page',
        paginationTitle: 'Pagination'
    },
    firstPage: 1,
    page: 0,
    offset: 0,
    defaultToFullPage: false,
    itemsStart: null,
    itemsEnd: null,
    perPageOptions: defaultPerPageOptions,
    widgetId: 'pagination-options-menu',
    toggleTemplate: ToggleTemplate,
    onSetPage: () => undefined,
    onPerPageSelect: () => undefined,
    onFirstClick: () => undefined,
    onPreviousClick: () => undefined,
    onNextClick: () => undefined,
    onPageInput: () => undefined,
    onLastClick: () => undefined,
    ouiaSafe: true
};

var _switch = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "off": "pf-m-off",
    "on": "pf-m-on"
  },
  "switch": "pf-c-switch",
  "switchInput": "pf-c-switch__input",
  "switchLabel": "pf-c-switch__label",
  "switchToggle": "pf-c-switch__toggle",
  "switchToggleIcon": "pf-c-switch__toggle-icon"
};
});

var styles$s = /*@__PURE__*/getDefaultExportFromCjs(_switch);

class Switch extends react.Component {
    constructor(props) {
        super(props);
        if (!props.id && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('Switch: Switch requires either an id or aria-label to be specified');
        }
        this.id = props.id || getUniqueId();
        this.state = {
            ouiaStateId: getDefaultOUIAId(Switch.displayName)
        };
    }
    render() {
        const _a = this.props, { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id, className, label, labelOff, isChecked, isDisabled, onChange, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["id", "className", "label", "labelOff", "isChecked", "isDisabled", "onChange", "ouiaId", "ouiaSafe"]);
        const isAriaLabelledBy = props['aria-label'] === '';
        return (react.createElement("label", Object.assign({ className: css(styles$s.switch, className), htmlFor: this.id }, getOUIAProps(Switch.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)),
            react.createElement("input", Object.assign({ id: this.id, className: css(styles$s.switchInput), type: "checkbox", onChange: event => onChange(event.target.checked, event), checked: isChecked, disabled: isDisabled, "aria-labelledby": isAriaLabelledBy ? `${this.id}-on` : null }, props)),
            label !== undefined ? (react.createElement(react.Fragment, null,
                react.createElement("span", { className: css(styles$s.switchToggle) }),
                react.createElement("span", { className: css(styles$s.switchLabel, styles$s.modifiers.on), id: isAriaLabelledBy ? `${this.id}-on` : null, "aria-hidden": "true" }, label),
                react.createElement("span", { className: css(styles$s.switchLabel, styles$s.modifiers.off), id: isAriaLabelledBy ? `${this.id}-off` : null, "aria-hidden": "true" }, labelOff !== undefined ? labelOff : label))) : (react.createElement("span", { className: css(styles$s.switchToggle) },
                react.createElement("div", { className: css(styles$s.switchToggleIcon), "aria-hidden": "true" },
                    react.createElement(CheckIcon, { noVerticalAlign: true }))))));
    }
}
Switch.displayName = 'Switch';
Switch.defaultProps = {
    isChecked: true,
    isDisabled: false,
    'aria-label': '',
    onChange: () => undefined
};

/** The parent <Tabs> component accecesses this component's propeties directly in order to present each Tab */
const Tab = (_props) => null;
Tab.displayName = 'Tab';

var tabs = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "fill": "pf-m-fill",
    "scrollable": "pf-m-scrollable",
    "secondary": "pf-m-secondary",
    "noBorderBottom": "pf-m-no-border-bottom",
    "box": "pf-m-box",
    "vertical": "pf-m-vertical",
    "current": "pf-m-current",
    "colorSchemeLight_300": "pf-m-color-scheme--light-300",
    "expandable": "pf-m-expandable",
    "nonExpandable": "pf-m-non-expandable",
    "expandableOnSm": "pf-m-expandable-on-sm",
    "nonExpandableOnSm": "pf-m-non-expandable-on-sm",
    "expandableOnMd": "pf-m-expandable-on-md",
    "nonExpandableOnMd": "pf-m-non-expandable-on-md",
    "expandableOnLg": "pf-m-expandable-on-lg",
    "nonExpandableOnLg": "pf-m-non-expandable-on-lg",
    "expandableOnXl": "pf-m-expandable-on-xl",
    "nonExpandableOnXl": "pf-m-non-expandable-on-xl",
    "expandableOn_2xl": "pf-m-expandable-on-2xl",
    "nonExpandableOn_2xl": "pf-m-non-expandable-on-2xl",
    "expanded": "pf-m-expanded",
    "insetNone": "pf-m-inset-none",
    "insetSm": "pf-m-inset-sm",
    "insetMd": "pf-m-inset-md",
    "insetLg": "pf-m-inset-lg",
    "insetXl": "pf-m-inset-xl",
    "inset_2xl": "pf-m-inset-2xl",
    "insetNoneOnSm": "pf-m-inset-none-on-sm",
    "insetSmOnSm": "pf-m-inset-sm-on-sm",
    "insetMdOnSm": "pf-m-inset-md-on-sm",
    "insetLgOnSm": "pf-m-inset-lg-on-sm",
    "insetXlOnSm": "pf-m-inset-xl-on-sm",
    "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
    "insetNoneOnMd": "pf-m-inset-none-on-md",
    "insetSmOnMd": "pf-m-inset-sm-on-md",
    "insetMdOnMd": "pf-m-inset-md-on-md",
    "insetLgOnMd": "pf-m-inset-lg-on-md",
    "insetXlOnMd": "pf-m-inset-xl-on-md",
    "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
    "insetNoneOnLg": "pf-m-inset-none-on-lg",
    "insetSmOnLg": "pf-m-inset-sm-on-lg",
    "insetMdOnLg": "pf-m-inset-md-on-lg",
    "insetLgOnLg": "pf-m-inset-lg-on-lg",
    "insetXlOnLg": "pf-m-inset-xl-on-lg",
    "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
    "insetNoneOnXl": "pf-m-inset-none-on-xl",
    "insetSmOnXl": "pf-m-inset-sm-on-xl",
    "insetMdOnXl": "pf-m-inset-md-on-xl",
    "insetLgOnXl": "pf-m-inset-lg-on-xl",
    "insetXlOnXl": "pf-m-inset-xl-on-xl",
    "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
    "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
    "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
    "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
    "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
    "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
    "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl"
  },
  "tabs": "pf-c-tabs",
  "tabsItem": "pf-c-tabs__item",
  "tabsItemIcon": "pf-c-tabs__item-icon",
  "tabsItemText": "pf-c-tabs__item-text",
  "tabsLink": "pf-c-tabs__link",
  "tabsList": "pf-c-tabs__list",
  "tabsScrollButton": "pf-c-tabs__scroll-button",
  "tabsToggle": "pf-c-tabs__toggle",
  "tabsToggleButton": "pf-c-tabs__toggle-button",
  "tabsToggleIcon": "pf-c-tabs__toggle-icon"
};
});

var styles$t = /*@__PURE__*/getDefaultExportFromCjs(tabs);

const TabButton = (_a) => {
    var { children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabContentRef, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "tabContentRef", "ouiaId", "ouiaSafe"]);
    const Component = (props.href ? 'a' : 'button');
    return (react.createElement(Component, Object.assign({}, getOUIAProps(TabButton.displayName, ouiaId, ouiaSafe), props), children));
};
TabButton.displayName = 'TabButton';

var tabContent = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "light_300": "pf-m-light-300"
  },
  "tabContent": "pf-c-tab-content"
};
});

var styles$u = /*@__PURE__*/getDefaultExportFromCjs(tabContent);

const TabsContext = react.createContext({
    variant: 'default'
});
const TabsContextProvider = TabsContext.Provider;
const TabsContextConsumer = TabsContext.Consumer;

const variantStyle$1 = {
    default: '',
    light300: styles$u.modifiers.light_300
};
const TabContentBase = (_a) => {
    var { id, activeKey, 'aria-label': ariaLabel, child, children, className, eventKey, innerRef, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["id", "activeKey", 'aria-label', "child", "children", "className", "eventKey", "innerRef", "ouiaId", "ouiaSafe"]);
    if (children || child) {
        let labelledBy;
        if (ariaLabel) {
            labelledBy = null;
        }
        else {
            labelledBy = children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}`;
        }
        return (react.createElement(TabsContextConsumer, null, ({ variant }) => (react.createElement("section", Object.assign({ ref: innerRef, hidden: children ? null : child.props.eventKey !== activeKey, className: children
                ? css('pf-c-tab-content', className, variantStyle$1[variant])
                : css('pf-c-tab-content', child.props.className, variantStyle$1[variant]), id: children ? id : `pf-tab-section-${child.props.eventKey}-${id}`, "aria-label": ariaLabel, "aria-labelledby": labelledBy, role: "tabpanel", tabIndex: 0 }, getOUIAProps('TabContent', ouiaId, ouiaSafe), props), children || child.props.children))));
    }
    return null;
};
const TabContent = react.forwardRef((props, ref) => (react.createElement(TabContentBase, Object.assign({}, props, { innerRef: ref }))));

var TabsComponent;
(function (TabsComponent) {
    TabsComponent["div"] = "div";
    TabsComponent["nav"] = "nav";
})(TabsComponent || (TabsComponent = {}));
const variantStyle$2 = {
    default: '',
    light300: styles$t.modifiers.colorSchemeLight_300
};
class Tabs extends react.Component {
    constructor(props) {
        super(props);
        this.tabList = react.createRef();
        this.handleScrollButtons = () => {
            if (this.tabList.current && !this.props.isVertical) {
                const container = this.tabList.current;
                // get first element and check if it is in view
                const overflowOnLeft = !isElementInView(container, container.firstChild, false);
                // get last element and check if it is in view
                const overflowOnRight = !isElementInView(container, container.lastChild, false);
                const showScrollButtons = overflowOnLeft || overflowOnRight;
                const disableLeftScrollButton = !overflowOnLeft;
                const disableRightScrollButton = !overflowOnRight;
                this.setState({
                    showScrollButtons,
                    disableLeftScrollButton,
                    disableRightScrollButton
                });
            }
        };
        this.scrollLeft = () => {
            // find first Element that is fully in view on the left, then scroll to the element before it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let firstElementInView;
                let lastElementOutOfView;
                let i;
                for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if (isElementInView(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    container.scrollLeft -= lastElementOutOfView.scrollWidth;
                }
            }
        };
        this.scrollRight = () => {
            // find last Element that is fully in view on the right, then scroll to the element after it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let lastElementInView;
                let firstElementOutOfView;
                for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if (isElementInView(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    container.scrollLeft += firstElementOutOfView.scrollWidth;
                }
            }
        };
        this.state = {
            showScrollButtons: false,
            disableLeftScrollButton: false,
            disableRightScrollButton: false,
            shownKeys: [this.props.activeKey],
            ouiaStateId: getDefaultOUIAId(Tabs.displayName)
        };
    }
    handleTabClick(event, eventKey, tabContentRef, mountOnEnter) {
        const { shownKeys } = this.state;
        this.props.onSelect(event, eventKey);
        // process any tab content sections outside of the component
        if (tabContentRef) {
            react.Children.toArray(this.props.children)
                .map(child => child)
                .filter(child => child.props && child.props.tabContentRef && child.props.tabContentRef.current)
                .forEach(child => (child.props.tabContentRef.current.hidden = true));
            // most recently selected tabContent
            if (tabContentRef.current) {
                tabContentRef.current.hidden = false;
            }
        }
        if (mountOnEnter) {
            this.setState({
                shownKeys: shownKeys.concat(eventKey)
            });
        }
    }
    componentDidMount() {
        if (!this.props.isVertical) {
            window.addEventListener('resize', this.handleScrollButtons, false);
            // call the handle resize function to check if scroll buttons should be shown
            this.handleScrollButtons();
        }
    }
    componentWillUnmount() {
        if (!this.props.isVertical) {
            window.removeEventListener('resize', this.handleScrollButtons, false);
        }
    }
    componentDidUpdate(prevProps) {
        const { activeKey, mountOnEnter } = this.props;
        const { shownKeys } = this.state;
        if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
            this.setState({
                shownKeys: shownKeys.concat(activeKey)
            });
        }
    }
    render() {
        const _a = this.props, { className, children, activeKey, id, isFilled, isSecondary, isVertical, isBox, leftScrollAriaLabel, rightScrollAriaLabel, 'aria-label': ariaLabel, component, ouiaId, ouiaSafe, mountOnEnter, unmountOnExit, inset, variant } = _a, props = __rest(_a, ["className", "children", "activeKey", "id", "isFilled", "isSecondary", "isVertical", "isBox", "leftScrollAriaLabel", "rightScrollAriaLabel", 'aria-label', "component", "ouiaId", "ouiaSafe", "mountOnEnter", "unmountOnExit", "inset", "variant"]);
        const { showScrollButtons, disableLeftScrollButton, disableRightScrollButton, shownKeys } = this.state;
        const filteredChildren = react.Children.toArray(children)
            .filter(Boolean)
            .filter(child => !child.props.isHidden);
        const uniqueId = id || getUniqueId();
        const Component = component === TabsComponent.nav ? 'nav' : 'div';
        return (react.createElement(TabsContextProvider, { value: { variant } },
            react.createElement(Component, Object.assign({ "aria-label": ariaLabel, className: css(styles$t.tabs, isFilled && styles$t.modifiers.fill, isSecondary && styles$t.modifiers.secondary, isVertical && styles$t.modifiers.vertical, isBox && styles$t.modifiers.box, showScrollButtons && !isVertical && styles$t.modifiers.scrollable, formatBreakpointMods(inset, styles$t), variantStyle$2[variant], className) }, getOUIAProps(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { id: id && id }, props),
                react.createElement("button", { className: css(styles$t.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary), "aria-label": leftScrollAriaLabel, onClick: this.scrollLeft, disabled: disableLeftScrollButton, "aria-hidden": disableLeftScrollButton },
                    react.createElement(AngleLeftIcon, null)),
                react.createElement("ul", { className: css(styles$t.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons }, filteredChildren.map((child, index) => {
                    const _a = child.props, { title, eventKey, tabContentRef, id: childId, tabContentId, className: childClassName = '', ouiaId: childOuiaId, 
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    isHidden } = _a, rest = __rest(_a, ["title", "eventKey", "tabContentRef", "id", "tabContentId", "className", "ouiaId", "isHidden"]);
                    let ariaControls = tabContentId ? `${tabContentId}` : `pf-tab-section-${eventKey}-${childId || uniqueId}`;
                    if ((mountOnEnter || unmountOnExit) && eventKey !== activeKey) {
                        ariaControls = undefined;
                    }
                    return (react.createElement("li", { key: index, className: css(styles$t.tabsItem, eventKey === activeKey && styles$t.modifiers.current, childClassName) },
                        react.createElement(TabButton, Object.assign({ className: css(styles$t.tabsLink), onClick: (event) => this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter), id: `pf-tab-${eventKey}-${childId || uniqueId}`, "aria-controls": ariaControls, tabContentRef: tabContentRef, ouiaId: childOuiaId }, rest), title)));
                })),
                react.createElement("button", { className: css(styles$t.tabsScrollButton, isSecondary && buttonStyles.modifiers.secondary), "aria-label": rightScrollAriaLabel, onClick: this.scrollRight, disabled: disableRightScrollButton, "aria-hidden": disableRightScrollButton },
                    react.createElement(AngleRightIcon, null))),
            filteredChildren
                .filter(child => child.props.children &&
                !(unmountOnExit && child.props.eventKey !== activeKey) &&
                !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1))
                .map((child, index) => (react.createElement(TabContent, { key: index, activeKey: activeKey, child: child, id: child.props.id || uniqueId, ouiaId: child.props.ouiaId })))));
    }
}
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    activeKey: 0,
    onSelect: () => undefined,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    leftScrollAriaLabel: 'Scroll left',
    rightScrollAriaLabel: 'Scroll right',
    component: TabsComponent.div,
    mountOnEnter: false,
    unmountOnExit: false,
    ouiaSafe: true,
    variant: 'default'
};

const TabTitleText = (_a) => {
    var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("span", Object.assign({ className: css(styles$t.tabsItemText, className) }, props), children));
};
TabTitleText.displayName = 'TabTitleText';

var toolbar = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "chipGroup": "pf-c-chip-group",
  "divider": "pf-c-divider",
  "modifiers": {
    "pageInsets": "pf-m-page-insets",
    "vertical": "pf-m-vertical",
    "buttonGroup": "pf-m-button-group",
    "iconButtonGroup": "pf-m-icon-button-group",
    "filterGroup": "pf-m-filter-group",
    "toggleGroup": "pf-m-toggle-group",
    "overflowMenu": "pf-m-overflow-menu",
    "bulkSelect": "pf-m-bulk-select",
    "expandAll": "pf-m-expand-all",
    "expanded": "pf-m-expanded",
    "searchFilter": "pf-m-search-filter",
    "chipGroup": "pf-m-chip-group",
    "label": "pf-m-label",
    "pagination": "pf-m-pagination",
    "chipContainer": "pf-m-chip-container",
    "plain": "pf-m-plain",
    "show": "pf-m-show",
    "showOnSm": "pf-m-show-on-sm",
    "showOnMd": "pf-m-show-on-md",
    "showOnLg": "pf-m-show-on-lg",
    "showOnXl": "pf-m-show-on-xl",
    "showOn_2xl": "pf-m-show-on-2xl",
    "alignRight": "pf-m-align-right",
    "alignLeft": "pf-m-align-left",
    "hidden": "pf-m-hidden",
    "visible": "pf-m-visible",
    "nowrap": "pf-m-nowrap",
    "wrap": "pf-m-wrap",
    "alignRightOnSm": "pf-m-align-right-on-sm",
    "alignLeftOnSm": "pf-m-align-left-on-sm",
    "hiddenOnSm": "pf-m-hidden-on-sm",
    "visibleOnSm": "pf-m-visible-on-sm",
    "nowrapOnSm": "pf-m-nowrap-on-sm",
    "wrapOnSm": "pf-m-wrap-on-sm",
    "alignRightOnMd": "pf-m-align-right-on-md",
    "alignLeftOnMd": "pf-m-align-left-on-md",
    "hiddenOnMd": "pf-m-hidden-on-md",
    "visibleOnMd": "pf-m-visible-on-md",
    "nowrapOnMd": "pf-m-nowrap-on-md",
    "wrapOnMd": "pf-m-wrap-on-md",
    "alignRightOnLg": "pf-m-align-right-on-lg",
    "alignLeftOnLg": "pf-m-align-left-on-lg",
    "hiddenOnLg": "pf-m-hidden-on-lg",
    "visibleOnLg": "pf-m-visible-on-lg",
    "nowrapOnLg": "pf-m-nowrap-on-lg",
    "wrapOnLg": "pf-m-wrap-on-lg",
    "alignRightOnXl": "pf-m-align-right-on-xl",
    "alignLeftOnXl": "pf-m-align-left-on-xl",
    "hiddenOnXl": "pf-m-hidden-on-xl",
    "visibleOnXl": "pf-m-visible-on-xl",
    "nowrapOnXl": "pf-m-nowrap-on-xl",
    "wrapOnXl": "pf-m-wrap-on-xl",
    "alignRightOn_2xl": "pf-m-align-right-on-2xl",
    "alignLeftOn_2xl": "pf-m-align-left-on-2xl",
    "hiddenOn_2xl": "pf-m-hidden-on-2xl",
    "visibleOn_2xl": "pf-m-visible-on-2xl",
    "nowrapOn_2xl": "pf-m-nowrap-on-2xl",
    "wrapOn_2xl": "pf-m-wrap-on-2xl",
    "spaceItemsNone": "pf-m-space-items-none",
    "spaceItemsSm": "pf-m-space-items-sm",
    "spaceItemsMd": "pf-m-space-items-md",
    "spaceItemsLg": "pf-m-space-items-lg",
    "spaceItemsNoneOnSm": "pf-m-space-items-none-on-sm",
    "spaceItemsSmOnSm": "pf-m-space-items-sm-on-sm",
    "spaceItemsMdOnSm": "pf-m-space-items-md-on-sm",
    "spaceItemsLgOnSm": "pf-m-space-items-lg-on-sm",
    "spaceItemsNoneOnMd": "pf-m-space-items-none-on-md",
    "spaceItemsSmOnMd": "pf-m-space-items-sm-on-md",
    "spaceItemsMdOnMd": "pf-m-space-items-md-on-md",
    "spaceItemsLgOnMd": "pf-m-space-items-lg-on-md",
    "spaceItemsNoneOnLg": "pf-m-space-items-none-on-lg",
    "spaceItemsSmOnLg": "pf-m-space-items-sm-on-lg",
    "spaceItemsMdOnLg": "pf-m-space-items-md-on-lg",
    "spaceItemsLgOnLg": "pf-m-space-items-lg-on-lg",
    "spaceItemsNoneOnXl": "pf-m-space-items-none-on-xl",
    "spaceItemsSmOnXl": "pf-m-space-items-sm-on-xl",
    "spaceItemsMdOnXl": "pf-m-space-items-md-on-xl",
    "spaceItemsLgOnXl": "pf-m-space-items-lg-on-xl",
    "spaceItemsNoneOn_2xl": "pf-m-space-items-none-on-2xl",
    "spaceItemsSmOn_2xl": "pf-m-space-items-sm-on-2xl",
    "spaceItemsMdOn_2xl": "pf-m-space-items-md-on-2xl",
    "spaceItemsLgOn_2xl": "pf-m-space-items-lg-on-2xl",
    "spacerNone": "pf-m-spacer-none",
    "spacerSm": "pf-m-spacer-sm",
    "spacerMd": "pf-m-spacer-md",
    "spacerLg": "pf-m-spacer-lg",
    "spacerNoneOnSm": "pf-m-spacer-none-on-sm",
    "spacerSmOnSm": "pf-m-spacer-sm-on-sm",
    "spacerMdOnSm": "pf-m-spacer-md-on-sm",
    "spacerLgOnSm": "pf-m-spacer-lg-on-sm",
    "spacerNoneOnMd": "pf-m-spacer-none-on-md",
    "spacerSmOnMd": "pf-m-spacer-sm-on-md",
    "spacerMdOnMd": "pf-m-spacer-md-on-md",
    "spacerLgOnMd": "pf-m-spacer-lg-on-md",
    "spacerNoneOnLg": "pf-m-spacer-none-on-lg",
    "spacerSmOnLg": "pf-m-spacer-sm-on-lg",
    "spacerMdOnLg": "pf-m-spacer-md-on-lg",
    "spacerLgOnLg": "pf-m-spacer-lg-on-lg",
    "spacerNoneOnXl": "pf-m-spacer-none-on-xl",
    "spacerSmOnXl": "pf-m-spacer-sm-on-xl",
    "spacerMdOnXl": "pf-m-spacer-md-on-xl",
    "spacerLgOnXl": "pf-m-spacer-lg-on-xl",
    "spacerNoneOn_2xl": "pf-m-spacer-none-on-2xl",
    "spacerSmOn_2xl": "pf-m-spacer-sm-on-2xl",
    "spacerMdOn_2xl": "pf-m-spacer-md-on-2xl",
    "spacerLgOn_2xl": "pf-m-spacer-lg-on-2xl",
    "insetNone": "pf-m-inset-none",
    "insetSm": "pf-m-inset-sm",
    "insetMd": "pf-m-inset-md",
    "insetLg": "pf-m-inset-lg",
    "insetXl": "pf-m-inset-xl",
    "inset_2xl": "pf-m-inset-2xl",
    "insetNoneOnSm": "pf-m-inset-none-on-sm",
    "insetSmOnSm": "pf-m-inset-sm-on-sm",
    "insetMdOnSm": "pf-m-inset-md-on-sm",
    "insetLgOnSm": "pf-m-inset-lg-on-sm",
    "insetXlOnSm": "pf-m-inset-xl-on-sm",
    "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
    "insetNoneOnMd": "pf-m-inset-none-on-md",
    "insetSmOnMd": "pf-m-inset-sm-on-md",
    "insetMdOnMd": "pf-m-inset-md-on-md",
    "insetLgOnMd": "pf-m-inset-lg-on-md",
    "insetXlOnMd": "pf-m-inset-xl-on-md",
    "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
    "insetNoneOnLg": "pf-m-inset-none-on-lg",
    "insetSmOnLg": "pf-m-inset-sm-on-lg",
    "insetMdOnLg": "pf-m-inset-md-on-lg",
    "insetLgOnLg": "pf-m-inset-lg-on-lg",
    "insetXlOnLg": "pf-m-inset-xl-on-lg",
    "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
    "insetNoneOnXl": "pf-m-inset-none-on-xl",
    "insetSmOnXl": "pf-m-inset-sm-on-xl",
    "insetMdOnXl": "pf-m-inset-md-on-xl",
    "insetLgOnXl": "pf-m-inset-lg-on-xl",
    "insetXlOnXl": "pf-m-inset-xl-on-xl",
    "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
    "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
    "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
    "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
    "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
    "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
    "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl"
  },
  "pagination": "pf-c-pagination",
  "toolbar": "pf-c-toolbar",
  "toolbarContent": "pf-c-toolbar__content",
  "toolbarContentSection": "pf-c-toolbar__content-section",
  "toolbarExpandAllIcon": "pf-c-toolbar__expand-all-icon",
  "toolbarExpandableContent": "pf-c-toolbar__expandable-content",
  "toolbarGroup": "pf-c-toolbar__group",
  "toolbarItem": "pf-c-toolbar__item",
  "toolbarToggle": "pf-c-toolbar__toggle"
};
});

var styles$v = /*@__PURE__*/getDefaultExportFromCjs(toolbar);

const ToolbarContext = react.createContext({
    isExpanded: false,
    toggleIsExpanded: () => { },
    chipGroupContentRef: null,
    updateNumberFilters: () => { },
    numberOfFilters: 0,
    clearAllFilters: () => { }
});
const ToolbarContentContext = react.createContext({
    expandableContentRef: null,
    expandableContentId: '',
    chipContainerRef: null
});
const globalBreakpoints = {
    md: parseInt(global_breakpoint_md.value),
    lg: parseInt(global_breakpoint_lg.value),
    xl: parseInt(global_breakpoint_xl.value),
    '2xl': parseInt(global_breakpoint_2xl.value)
};

var ToolbarItemVariant;
(function (ToolbarItemVariant) {
    ToolbarItemVariant["separator"] = "separator";
    ToolbarItemVariant["bulk-select"] = "bulk-select";
    ToolbarItemVariant["overflow-menu"] = "overflow-menu";
    ToolbarItemVariant["pagination"] = "pagination";
    ToolbarItemVariant["search-filter"] = "search-filter";
    ToolbarItemVariant["label"] = "label";
    ToolbarItemVariant["chip-group"] = "chip-group";
    ToolbarItemVariant["expand-all"] = "expand-all";
})(ToolbarItemVariant || (ToolbarItemVariant = {}));
const ToolbarItem = (_a) => {
    var { className, variant, visibility, visiblity, alignment, spacer, id, children, isAllExpanded } = _a, props = __rest(_a, ["className", "variant", "visibility", "visiblity", "alignment", "spacer", "id", "children", "isAllExpanded"]);
    if (variant === ToolbarItemVariant.separator) {
        return react.createElement(Divider, Object.assign({ className: css(styles$v.modifiers.vertical, className) }, props));
    }
    if (visiblity !== undefined) {
        // eslint-disable-next-line no-console
        console.warn('The ToolbarItem visiblity prop has been deprecated. ' +
            'Please use the correctly spelled visibility prop instead.');
    }
    return (react.createElement("div", Object.assign({ className: css(styles$v.toolbarItem, variant &&
            styles$v.modifiers[toCamel(variant)], isAllExpanded && styles$v.modifiers.expanded, formatBreakpointMods(visibility || visiblity, styles$v), formatBreakpointMods(alignment, styles$v), formatBreakpointMods(spacer, styles$v), className) }, (variant === 'label' && { 'aria-hidden': true }), { id: id }, props), children));
};
ToolbarItem.displayName = 'ToolbarItem';

var ToolbarGroupVariant;
(function (ToolbarGroupVariant) {
    ToolbarGroupVariant["filter-group"] = "filter-group";
    ToolbarGroupVariant["icon-button-group"] = "icon-button-group";
    ToolbarGroupVariant["button-group"] = "button-group";
})(ToolbarGroupVariant || (ToolbarGroupVariant = {}));
class ToolbarGroupWithRef extends react.Component {
    render() {
        const _a = this.props, { visibility, visiblity, alignment, spacer, spaceItems, className, variant, children, innerRef } = _a, props = __rest(_a, ["visibility", "visiblity", "alignment", "spacer", "spaceItems", "className", "variant", "children", "innerRef"]);
        if (visiblity !== undefined) {
            // eslint-disable-next-line no-console
            console.warn('The ToolbarGroup visiblity prop has been deprecated. ' +
                'Please use the correctly spelled visibility prop instead.');
        }
        return (react.createElement("div", Object.assign({ className: css(styles$v.toolbarGroup, variant && styles$v.modifiers[toCamel(variant)], formatBreakpointMods(visibility || visiblity, styles$v), formatBreakpointMods(alignment, styles$v), formatBreakpointMods(spacer, styles$v), formatBreakpointMods(spaceItems, styles$v), className) }, props, { ref: innerRef }), children));
    }
}
const ToolbarGroup = react.forwardRef((props, ref) => (react.createElement(ToolbarGroupWithRef, Object.assign({}, props, { innerRef: ref }))));

class ToolbarChipGroupContent extends react.Component {
    render() {
        const _a = this.props, { className, isExpanded, chipGroupContentRef, clearAllFilters, showClearFiltersButton, clearFiltersButtonText, collapseListedFiltersBreakpoint, numberOfFilters } = _a, props = __rest(_a, ["className", "isExpanded", "chipGroupContentRef", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "numberOfFilters"]);
        const clearChipGroups = () => {
            clearAllFilters();
        };
        let collapseListedFilters = false;
        if (collapseListedFiltersBreakpoint === 'all') {
            collapseListedFilters = true;
        }
        else if (typeof window !== 'undefined') {
            collapseListedFilters = window.innerWidth < globalBreakpoints[collapseListedFiltersBreakpoint];
        }
        return (react.createElement("div", Object.assign({ className: css(styles$v.toolbarContent, (numberOfFilters === 0 || isExpanded) && styles$v.modifiers.hidden, className) }, ((numberOfFilters === 0 || isExpanded) && { hidden: true }), { ref: chipGroupContentRef }, props),
            react.createElement(ToolbarGroup, Object.assign({ className: css(collapseListedFilters && styles$v.modifiers.hidden) }, (collapseListedFilters && { hidden: true }), (collapseListedFilters && { 'aria-hidden': true }))),
            collapseListedFilters && numberOfFilters > 0 && !isExpanded && (react.createElement(ToolbarGroup, null,
                react.createElement(ToolbarItem, null,
                    numberOfFilters,
                    " filters applied"))),
            showClearFiltersButton && !isExpanded && (react.createElement(ToolbarItem, null,
                react.createElement(Button, { variant: "link", onClick: clearChipGroups, isInline: true }, clearFiltersButtonText)))));
    }
}
ToolbarChipGroupContent.displayName = 'ToolbarChipGroupContent';
ToolbarChipGroupContent.defaultProps = {
    clearFiltersButtonText: 'Clear all filters',
    collapseListedFiltersBreakpoint: 'lg'
};

class Toolbar extends react.Component {
    constructor() {
        super(...arguments);
        this.chipGroupContentRef = react.createRef();
        this.staticFilterInfo = {};
        this.state = {
            isManagedToggleExpanded: false,
            filterInfo: {}
        };
        this.isToggleManaged = () => !(this.props.isExpanded || !!this.props.toggleIsExpanded);
        this.toggleIsExpanded = () => {
            this.setState(prevState => ({
                isManagedToggleExpanded: !prevState.isManagedToggleExpanded
            }));
        };
        this.closeExpandableContent = () => {
            this.setState(() => ({
                isManagedToggleExpanded: false
            }));
        };
        this.updateNumberFilters = (categoryName, numberOfFilters) => {
            const filterInfoToUpdate = Object.assign({}, this.staticFilterInfo);
            if (!filterInfoToUpdate.hasOwnProperty(categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
                filterInfoToUpdate[categoryName] = numberOfFilters;
                this.staticFilterInfo = filterInfoToUpdate;
                this.setState({ filterInfo: filterInfoToUpdate });
            }
        };
        this.getNumberOfFilters = () => Object.values(this.state.filterInfo).reduce((acc, cur) => acc + cur, 0);
        this.renderToolbar = (randomId) => {
            const _a = this.props, { clearAllFilters, clearFiltersButtonText, collapseListedFiltersBreakpoint, isExpanded: isExpandedProp, toggleIsExpanded, className, children, inset, usePageInsets } = _a, props = __rest(_a, ["clearAllFilters", "clearFiltersButtonText", "collapseListedFiltersBreakpoint", "isExpanded", "toggleIsExpanded", "className", "children", "inset", "usePageInsets"]);
            const { isManagedToggleExpanded } = this.state;
            const isToggleManaged = this.isToggleManaged();
            const isExpanded = isToggleManaged ? isManagedToggleExpanded : isExpandedProp;
            const numberOfFilters = this.getNumberOfFilters();
            const showClearFiltersButton = numberOfFilters > 0;
            return (react.createElement("div", Object.assign({ className: css(styles$v.toolbar, usePageInsets && styles$v.modifiers.pageInsets, formatBreakpointMods(inset, styles$v), className), id: randomId }, props),
                react.createElement(ToolbarContext.Provider, { value: {
                        isExpanded,
                        toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
                        chipGroupContentRef: this.chipGroupContentRef,
                        updateNumberFilters: this.updateNumberFilters,
                        numberOfFilters,
                        clearAllFilters,
                        clearFiltersButtonText,
                        showClearFiltersButton,
                        toolbarId: randomId
                    } },
                    children,
                    react.createElement(ToolbarChipGroupContent, { isExpanded: isExpanded, chipGroupContentRef: this.chipGroupContentRef, clearAllFilters: clearAllFilters, showClearFiltersButton: showClearFiltersButton, clearFiltersButtonText: clearFiltersButtonText, numberOfFilters: numberOfFilters, collapseListedFiltersBreakpoint: collapseListedFiltersBreakpoint }))));
        };
    }
    componentDidMount() {
        if (this.isToggleManaged()) {
            window.addEventListener('resize', this.closeExpandableContent);
        }
    }
    componentWillUnmount() {
        if (this.isToggleManaged()) {
            window.removeEventListener('resize', this.closeExpandableContent);
        }
    }
    render() {
        return this.props.id ? (this.renderToolbar(this.props.id)) : (react.createElement(GenerateId, null, randomId => this.renderToolbar(randomId)));
    }
}
Toolbar.displayName = 'Toolbar';

class ToolbarExpandableContent extends react.Component {
    render() {
        const _a = this.props, { className, expandableContentRef, chipContainerRef, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isExpanded, clearAllFilters, clearFiltersButtonText, showClearFiltersButton } = _a, props = __rest(_a, ["className", "expandableContentRef", "chipContainerRef", "isExpanded", "clearAllFilters", "clearFiltersButtonText", "showClearFiltersButton"]);
        const { numberOfFilters } = this.context;
        const clearChipGroups = () => {
            clearAllFilters();
        };
        return (react.createElement("div", Object.assign({ className: css(styles$v.toolbarExpandableContent, className), ref: expandableContentRef }, props),
            react.createElement(ToolbarGroup, null),
            numberOfFilters > 0 && (react.createElement(ToolbarGroup, { className: styles$v.modifiers.chipContainer },
                react.createElement(ToolbarGroup, { ref: chipContainerRef }),
                showClearFiltersButton && (react.createElement(ToolbarItem, null,
                    react.createElement(Button, { variant: "link", onClick: clearChipGroups, isInline: true }, clearFiltersButtonText)))))));
    }
}
ToolbarExpandableContent.displayName = 'ToolbarExpandableContent';
ToolbarExpandableContent.contextType = ToolbarContext;
ToolbarExpandableContent.defaultProps = {
    isExpanded: false,
    clearFiltersButtonText: 'Clear all filters'
};

class ToolbarContent extends react.Component {
    constructor() {
        super(...arguments);
        this.expandableContentRef = react.createRef();
        this.chipContainerRef = react.createRef();
    }
    render() {
        const _a = this.props, { className, children, isExpanded, toolbarId, visibility, visiblity, alignment, clearAllFilters, showClearFiltersButton, clearFiltersButtonText } = _a, props = __rest(_a, ["className", "children", "isExpanded", "toolbarId", "visibility", "visiblity", "alignment", "clearAllFilters", "showClearFiltersButton", "clearFiltersButtonText"]);
        if (visiblity !== undefined) {
            // eslint-disable-next-line no-console
            console.warn('The ToolbarContent visiblity prop has been deprecated. ' +
                'Please use the correctly spelled visibility prop instead.');
        }
        return (react.createElement("div", Object.assign({ className: css(styles$v.toolbarContent, formatBreakpointMods(visibility || visiblity, styles$v), formatBreakpointMods(alignment, styles$v), className) }, props),
            react.createElement(ToolbarContext.Consumer, null, ({ clearAllFilters: clearAllFiltersContext, clearFiltersButtonText: clearFiltersButtonContext, showClearFiltersButton: showClearFiltersButtonContext, toolbarId: toolbarIdContext }) => {
                const expandableContentId = `${toolbarId ||
                    toolbarIdContext}-expandable-content-${ToolbarContent.currentId++}`;
                return (react.createElement(ToolbarContentContext.Provider, { value: {
                        expandableContentRef: this.expandableContentRef,
                        expandableContentId,
                        chipContainerRef: this.chipContainerRef
                    } },
                    react.createElement("div", { className: css(styles$v.toolbarContentSection) }, children),
                    react.createElement(ToolbarExpandableContent, { id: expandableContentId, isExpanded: isExpanded, expandableContentRef: this.expandableContentRef, chipContainerRef: this.chipContainerRef, clearAllFilters: clearAllFilters || clearAllFiltersContext, showClearFiltersButton: showClearFiltersButton || showClearFiltersButtonContext, clearFiltersButtonText: clearFiltersButtonText || clearFiltersButtonContext })));
            })));
    }
}
ToolbarContent.displayName = 'ToolbarContent';
ToolbarContent.currentId = 0;
ToolbarContent.defaultProps = {
    isExpanded: false,
    showClearFiltersButton: false
};

var numberInput = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "formControl": "pf-c-form-control",
  "inputGroup": "pf-c-input-group",
  "numberInput": "pf-c-number-input",
  "numberInputIcon": "pf-c-number-input__icon",
  "numberInputUnit": "pf-c-number-input__unit"
};
});

var styles$w = /*@__PURE__*/getDefaultExportFromCjs(numberInput);

const MinusIconConfig = {
  name: 'MinusIcon',
  height: 512,
  width: 448,
  svgPath: 'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
  yOffset: 0,
  xOffset: 0,
};

const MinusIcon = createIcon(MinusIconConfig);

const PlusIconConfig = {
  name: 'PlusIcon',
  height: 512,
  width: 448,
  svgPath: 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
  yOffset: 0,
  xOffset: 0,
};

const PlusIcon = createIcon(PlusIconConfig);

const NumberInput = (_a) => {
    var { value = 0, className, widthChars, isDisabled = false, onMinus, onChange, onPlus, unit, unitPosition = 'after', min, max, inputName, inputAriaLabel = 'Input', minusBtnAriaLabel = 'Minus', plusBtnAriaLabel = 'Plus', inputProps, minusBtnProps, plusBtnProps } = _a, props = __rest(_a, ["value", "className", "widthChars", "isDisabled", "onMinus", "onChange", "onPlus", "unit", "unitPosition", "min", "max", "inputName", "inputAriaLabel", "minusBtnAriaLabel", "plusBtnAriaLabel", "inputProps", "minusBtnProps", "plusBtnProps"]);
    const numberInputUnit = react.createElement("div", { className: css(styles$w.numberInputUnit) }, unit);
    return (react.createElement("div", Object.assign({ className: css(styles$w.numberInput, className) }, (widthChars && {
        style: Object.assign({ '--pf-c-number-input--c-form-control--width-chars': widthChars }, props.style)
    }), props),
        unit && unitPosition === 'before' && numberInputUnit,
        react.createElement("div", { className: css(styles$w.inputGroup) },
            react.createElement(Button, Object.assign({ variant: "control", "aria-label": minusBtnAriaLabel, isDisabled: isDisabled || value === min, onClick: evt => onMinus(evt, inputName) }, minusBtnProps),
                react.createElement("span", { className: css(styles$w.numberInputIcon) },
                    react.createElement(MinusIcon, { "aria-hidden": "true" }))),
            react.createElement("input", Object.assign({ className: css(styles$w.formControl), type: "number", value: value, name: inputName, "aria-label": inputAriaLabel }, (isDisabled && { disabled: isDisabled }), (onChange && { onChange }), (!onChange && { readOnly: true }), inputProps)),
            react.createElement(Button, Object.assign({ variant: "control", "aria-label": plusBtnAriaLabel, isDisabled: isDisabled || value === max, onClick: evt => onPlus(evt, inputName) }, plusBtnProps),
                react.createElement("span", { className: css(styles$w.numberInputIcon) },
                    react.createElement(PlusIcon, { "aria-hidden": "true" })))),
        unit && unitPosition === 'after' && numberInputUnit));
};
NumberInput.displayName = 'NumberInput';

var wizard = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "card": "pf-c-card",
  "modalBox": "pf-c-modal-box",
  "modifiers": {
    "finished": "pf-m-finished",
    "expanded": "pf-m-expanded",
    "current": "pf-m-current",
    "disabled": "pf-m-disabled",
    "noPadding": "pf-m-no-padding"
  },
  "pageMainWizard": "pf-c-page__main-wizard",
  "wizard": "pf-c-wizard",
  "wizardClose": "pf-c-wizard__close",
  "wizardDescription": "pf-c-wizard__description",
  "wizardFooter": "pf-c-wizard__footer",
  "wizardFooterCancel": "pf-c-wizard__footer-cancel",
  "wizardHeader": "pf-c-wizard__header",
  "wizardInnerWrap": "pf-c-wizard__inner-wrap",
  "wizardMain": "pf-c-wizard__main",
  "wizardMainBody": "pf-c-wizard__main-body",
  "wizardNav": "pf-c-wizard__nav",
  "wizardNavItem": "pf-c-wizard__nav-item",
  "wizardNavLink": "pf-c-wizard__nav-link",
  "wizardNavList": "pf-c-wizard__nav-list",
  "wizardOuterWrap": "pf-c-wizard__outer-wrap",
  "wizardTitle": "pf-c-wizard__title",
  "wizardToggle": "pf-c-wizard__toggle",
  "wizardToggleIcon": "pf-c-wizard__toggle-icon",
  "wizardToggleList": "pf-c-wizard__toggle-list",
  "wizardToggleListItem": "pf-c-wizard__toggle-list-item",
  "wizardToggleNum": "pf-c-wizard__toggle-num",
  "wizardToggleSeparator": "pf-c-wizard__toggle-separator"
};
});

var styles$x = /*@__PURE__*/getDefaultExportFromCjs(wizard);

const WizardFooterInternal = ({ onNext, onBack, onClose, isValid, firstStep, activeStep, nextButtonText, backButtonText, cancelButtonText }) => (react.createElement("footer", { className: css(styles$x.wizardFooter) },
    react.createElement(Button, { variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: !isValid }, nextButtonText),
    !activeStep.hideBackButton && (react.createElement(Button, { variant: ButtonVariant.secondary, onClick: onBack, className: css(firstStep && 'pf-m-disabled') }, backButtonText)),
    !activeStep.hideCancelButton && (react.createElement("div", { className: styles$x.wizardFooterCancel },
        react.createElement(Button, { variant: ButtonVariant.link, onClick: onClose }, cancelButtonText)))));
WizardFooterInternal.displayName = 'WizardFooterInternal';

const WizardBody = ({ children, hasNoBodyPadding = false, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, mainComponent = 'div' }) => {
    const MainComponent = mainComponent;
    return (react.createElement(MainComponent, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: css(styles$x.wizardMain) },
        react.createElement("div", { className: css(styles$x.wizardMainBody, hasNoBodyPadding && styles$x.modifiers.noPadding) }, children)));
};
WizardBody.displayName = 'WizardBody';

const WizardToggle = ({ isNavOpen, onNavToggle, nav, steps, activeStep, children, hasNoBodyPadding = false, 'aria-label': ariaLabel = 'Wizard Toggle', mainAriaLabelledBy = null, mainAriaLabel = null, isInPage = true }) => {
    let activeStepIndex;
    let activeStepName;
    let activeStepSubName;
    for (let i = 0; i < steps.length; i++) {
        if ((activeStep.id && steps[i].id === activeStep.id) || steps[i].name === activeStep.name) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            break;
        }
        else if (steps[i].steps) {
            for (const step of steps[i].steps) {
                if ((activeStep.id && step.id === activeStep.id) || step.name === activeStep.name) {
                    activeStepIndex = i + 1;
                    activeStepName = steps[i].name;
                    activeStepSubName = step.name;
                    break;
                }
            }
        }
    }
    return (react.createElement(react.Fragment, null,
        react.createElement("button", { onClick: () => onNavToggle(!isNavOpen), className: css(styles$x.wizardToggle, isNavOpen && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavOpen },
            react.createElement("ol", { className: css(styles$x.wizardToggleList) },
                react.createElement("li", { className: css(styles$x.wizardToggleListItem) },
                    react.createElement("span", { className: css(styles$x.wizardToggleNum) }, activeStepIndex),
                    " ",
                    activeStepName,
                    activeStepSubName && react.createElement(AngleRightIcon, { className: css(styles$x.wizardToggleSeparator), "aria-hidden": "true" })),
                activeStepSubName && react.createElement("li", { className: css(styles$x.wizardToggleListItem) }, activeStepSubName)),
            react.createElement("span", { className: css(styles$x.wizardToggleIcon) },
                react.createElement(CaretDownIcon, { "aria-hidden": "true" }))),
        react.createElement("div", { className: css(styles$x.wizardOuterWrap) },
            react.createElement("div", { className: css(styles$x.wizardInnerWrap) },
                nav(isNavOpen),
                react.createElement(WizardBody, { mainComponent: isInPage ? 'div' : 'main', "aria-label": mainAriaLabel, "aria-labelledby": mainAriaLabelledBy, hasNoBodyPadding: hasNoBodyPadding }, activeStep.component)),
            children)));
};
WizardToggle.displayName = 'WizardToggle';

const WizardNav = ({ children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, isOpen = false, returnList = false }) => {
    const innerList = react.createElement("ol", { className: css(styles$x.wizardNavList) }, children);
    if (returnList) {
        return innerList;
    }
    return (react.createElement("nav", { className: css(styles$x.wizardNav, isOpen && styles$x.modifiers.expanded), "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy },
        react.createElement("ol", { className: css(styles$x.wizardNavList) }, children)));
};
WizardNav.displayName = 'WizardNav';

const WizardNavItem = (_a) => {
    var { children = null, content = '', isCurrent = false, isDisabled = false, step, onNavItemClick = () => undefined, navItemComponent = 'button', href = null } = _a, rest = __rest(_a, ["children", "content", "isCurrent", "isDisabled", "step", "onNavItemClick", "navItemComponent", "href"]);
    const NavItemComponent = navItemComponent;
    if (navItemComponent === 'a' && !href && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.error('WizardNavItem: When using an anchor, please provide an href');
    }
    const btnProps = {
        disabled: isDisabled
    };
    const linkProps = {
        tabIndex: isDisabled ? -1 : undefined,
        href
    };
    return (react.createElement("li", { className: css(styles$x.wizardNavItem) },
        react.createElement(NavItemComponent, Object.assign({}, rest, (navItemComponent === 'a' ? Object.assign({}, linkProps) : Object.assign({}, btnProps)), { onClick: () => onNavItemClick(step), className: css(styles$x.wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled'), "aria-disabled": isDisabled ? true : null, "aria-current": isCurrent && !children ? 'page' : false }), content),
        children));
};
WizardNavItem.displayName = 'WizardNavItem';

const WizardContext = react.createContext({
    goToStepById: () => null,
    goToStepByName: () => null,
    onNext: () => null,
    onBack: () => null,
    onClose: () => null,
    activeStep: { name: null }
});
const WizardContextProvider = WizardContext.Provider;
const WizardContextConsumer = WizardContext.Consumer;

const WizardHeader = ({ onClose = () => undefined, title, description, hideClose, closeButtonAriaLabel, titleId, descriptionId }) => (react.createElement("div", { className: css(styles$x.wizardHeader) },
    !hideClose && (react.createElement(Button, { variant: "plain", className: css(styles$x.wizardClose), "aria-label": closeButtonAriaLabel, onClick: onClose },
        react.createElement(TimesIcon, { "aria-hidden": "true" }))),
    react.createElement(Title, { headingLevel: "h2", size: "3xl", className: css(styles$x.wizardTitle), "aria-label": title, id: titleId }, title || react.createElement(react.Fragment, null, "\u00A0")),
    description && (react.createElement("p", { className: css(styles$x.wizardDescription), id: descriptionId }, description))));
WizardHeader.displayName = 'WizardHeader';

class Wizard extends react.Component {
    constructor(props) {
        super(props);
        this.handleKeyClicks = (event) => {
            if (event.keyCode === KEY_CODES.ESCAPE_KEY) {
                if (this.state.isNavOpen) {
                    this.setState({ isNavOpen: !this.state.isNavOpen });
                }
                else if (this.props.isOpen) {
                    this.props.onClose();
                }
            }
        };
        this.onNext = () => {
            const { onNext, onClose, onSave } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            const maxSteps = flattenedSteps.length;
            if (currentStep >= maxSteps) {
                // Hit the save button at the end of the wizard
                if (onSave) {
                    return onSave();
                }
                return onClose();
            }
            else {
                const newStep = currentStep + 1;
                this.setState({
                    currentStep: newStep
                });
                const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
                const { id, name } = flattenedSteps[newStep - 1];
                return onNext && onNext({ id, name }, { prevId, prevName });
            }
        };
        this.onBack = () => {
            const { onBack } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            if (flattenedSteps.length < currentStep) {
                // Previous step was removed, just update the currentStep state
                const adjustedStep = flattenedSteps.length;
                this.setState({
                    currentStep: adjustedStep
                });
            }
            else {
                const newStep = currentStep - 1 <= 0 ? 0 : currentStep - 1;
                this.setState({
                    currentStep: newStep
                });
                const { id: prevId, name: prevName } = flattenedSteps[newStep];
                const { id, name } = flattenedSteps[newStep - 1];
                return onBack && onBack({ id, name }, { prevId, prevName });
            }
        };
        this.goToStep = (step) => {
            const { onGoToStep } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            const maxSteps = flattenedSteps.length;
            if (step < 1) {
                step = 1;
            }
            else if (step > maxSteps) {
                step = maxSteps;
            }
            this.setState({ currentStep: step, isNavOpen: false });
            const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
            const { id, name } = flattenedSteps[step - 1];
            return onGoToStep && onGoToStep({ id, name }, { prevId, prevName });
        };
        this.goToStepById = (stepId) => {
            const flattenedSteps = this.getFlattenedSteps();
            let step;
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].id === stepId) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                this.setState({ currentStep: step });
            }
        };
        this.goToStepByName = (stepName) => {
            const flattenedSteps = this.getFlattenedSteps();
            let step;
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                this.setState({ currentStep: step });
            }
        };
        this.getFlattenedSteps = () => {
            const { steps } = this.props;
            const flattenedSteps = [];
            for (const step of steps) {
                if (step.steps) {
                    for (const childStep of step.steps) {
                        flattenedSteps.push(childStep);
                    }
                }
                else {
                    flattenedSteps.push(step);
                }
            }
            return flattenedSteps;
        };
        this.getFlattenedStepsIndex = (flattenedSteps, stepName) => {
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    return i + 1;
                }
            }
            return 0;
        };
        this.initSteps = (steps) => {
            // Set default Step values
            for (let i = 0; i < steps.length; i++) {
                if (steps[i].steps) {
                    for (let j = 0; j < steps[i].steps.length; j++) {
                        steps[i].steps[j] = Object.assign({ canJumpTo: true }, steps[i].steps[j]);
                    }
                }
                steps[i] = Object.assign({ canJumpTo: true }, steps[i]);
            }
            return steps;
        };
        this.getElement = (appendTo) => {
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo || document.body;
        };
        const newId = Wizard.currentId++;
        this.titleId = props.titleId || `pf-wizard-title-${newId}`;
        this.descriptionId = props.descriptionId || `pf-wizard-description-${newId}`;
        this.state = {
            currentStep: this.props.startAtStep && Number.isInteger(this.props.startAtStep) ? this.props.startAtStep : 1,
            isNavOpen: false
        };
    }
    componentDidMount() {
        const target = typeof document !== 'undefined' ? document.body : null;
        if (target) {
            target.addEventListener('keydown', this.handleKeyClicks, false);
        }
    }
    componentWillUnmount() {
        const target = (typeof document !== 'undefined' && document.body) || null;
        if (target) {
            target.removeEventListener('keydown', this.handleKeyClicks, false);
        }
    }
    render() {
        const _a = this.props, { 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        width, height, title, description, onClose, onSave, onBack, onNext, onGoToStep, className, steps, startAtStep, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel', hideClose, closeButtonAriaLabel = 'Close', navAriaLabel, navAriaLabelledBy, mainAriaLabel, mainAriaLabelledBy, hasNoBodyPadding, footer, appendTo, isOpen, titleId, descriptionId } = _a, rest = __rest(_a, ["width", "height", "title", "description", "onClose", "onSave", "onBack", "onNext", "onGoToStep", "className", "steps", "startAtStep", "nextButtonText", "backButtonText", "cancelButtonText", "hideClose", "closeButtonAriaLabel", "navAriaLabel", "navAriaLabelledBy", "mainAriaLabel", "mainAriaLabelledBy", "hasNoBodyPadding", "footer", "appendTo", "isOpen", "titleId", "descriptionId"])
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ;
        const { currentStep } = this.state;
        const flattenedSteps = this.getFlattenedSteps();
        const adjustedStep = flattenedSteps.length < currentStep ? flattenedSteps.length : currentStep;
        const activeStep = flattenedSteps[adjustedStep - 1];
        const computedSteps = this.initSteps(steps);
        const firstStep = activeStep === flattenedSteps[0];
        const isValid = activeStep && activeStep.enableNext !== undefined ? activeStep.enableNext : true;
        const nav = (isWizardNavOpen) => {
            const wizNavAProps = {
                isOpen: isWizardNavOpen,
                'aria-label': navAriaLabel,
                'aria-labelledby': (title || navAriaLabelledBy) && (navAriaLabelledBy || this.titleId)
            };
            return (react.createElement(WizardNav, Object.assign({}, wizNavAProps), computedSteps.map((step, index) => {
                if (step.isFinishedStep) {
                    // Don't show finished step in the side nav
                    return;
                }
                let enabled;
                let navItemStep;
                if (step.steps) {
                    let hasActiveChild = false;
                    let canJumpToParent = false;
                    for (const subStep of step.steps) {
                        if (activeStep.name === subStep.name) {
                            // one of the children matches
                            hasActiveChild = true;
                        }
                        if (subStep.canJumpTo) {
                            canJumpToParent = true;
                        }
                    }
                    navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.steps[0].name);
                    return (react.createElement(WizardNavItem, { key: index, content: step.name, isCurrent: hasActiveChild, isDisabled: !canJumpToParent, step: navItemStep, onNavItemClick: this.goToStep },
                        react.createElement(WizardNav, Object.assign({}, wizNavAProps, { returnList: true }), step.steps.map((childStep, indexChild) => {
                            if (childStep.isFinishedStep) {
                                // Don't show finished step in the side nav
                                return;
                            }
                            navItemStep = this.getFlattenedStepsIndex(flattenedSteps, childStep.name);
                            enabled = childStep.canJumpTo;
                            return (react.createElement(WizardNavItem, { key: `child_${indexChild}`, content: childStep.name, isCurrent: activeStep.name === childStep.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep }));
                        }))));
                }
                navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.name);
                enabled = step.canJumpTo;
                return (react.createElement(WizardNavItem, Object.assign({}, step.stepNavItemProps, { key: index, content: step.name, isCurrent: activeStep.name === step.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep })));
            })));
        };
        const context = {
            goToStepById: this.goToStepById,
            goToStepByName: this.goToStepByName,
            onNext: this.onNext,
            onBack: this.onBack,
            onClose,
            activeStep
        };
        const divStyles = Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {}));
        const wizard = (react.createElement(WizardContextProvider, { value: context },
            react.createElement("div", Object.assign({}, rest, { className: css(styles$x.wizard, activeStep && activeStep.isFinishedStep && 'pf-m-finished', className), style: Object.keys(divStyles).length ? divStyles : undefined }),
                title && (react.createElement(WizardHeader, { titleId: this.titleId, descriptionId: this.descriptionId, onClose: onClose, title: title, description: description, closeButtonAriaLabel: closeButtonAriaLabel, hideClose: hideClose })),
                react.createElement(WizardToggle, { mainAriaLabel: mainAriaLabel, isInPage: isOpen === undefined, mainAriaLabelledBy: (title || mainAriaLabelledBy) && (mainAriaLabelledBy || this.titleId), isNavOpen: this.state.isNavOpen, onNavToggle: isNavOpen => this.setState({ isNavOpen }), nav: nav, steps: steps, activeStep: activeStep, hasNoBodyPadding: hasNoBodyPadding }, footer || (react.createElement(WizardFooterInternal, { onNext: this.onNext, onBack: this.onBack, onClose: onClose, isValid: isValid, firstStep: firstStep, activeStep: activeStep, nextButtonText: (activeStep && activeStep.nextButtonText) || nextButtonText, backButtonText: backButtonText, cancelButtonText: cancelButtonText }))))));
        if (isOpen !== undefined) {
            return (react.createElement(Modal, { width: width !== null ? width : undefined, isOpen: isOpen, variant: ModalVariant.large, "aria-labelledby": this.titleId, "aria-describedby": this.descriptionId, showClose: false, hasNoBodyWrapper: true }, wizard));
        }
        return wizard;
    }
}
Wizard.displayName = 'Wizard';
Wizard.currentId = 0;
Wizard.defaultProps = {
    title: null,
    description: '',
    className: '',
    startAtStep: 1,
    nextButtonText: 'Next',
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    hideClose: false,
    closeButtonAriaLabel: 'Close',
    navAriaLabel: null,
    navAriaLabelledBy: null,
    mainAriaLabel: null,
    mainAriaLabelledBy: null,
    hasNoBodyPadding: false,
    onBack: null,
    onNext: null,
    onGoToStep: null,
    width: null,
    height: null,
    footer: null,
    onClose: () => undefined,
    appendTo: null,
    isOpen: undefined
};

const WizardFooter = ({ children }) => (react.createElement("footer", { className: css(styles$x.wizardFooter) }, children));
WizardFooter.displayName = 'WizardFooter';

var flex = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "flex": "pf-l-flex",
  "modifiers": {
    "flex": "pf-m-flex",
    "inlineFlex": "pf-m-inline-flex",
    "column": "pf-m-column",
    "columnReverse": "pf-m-column-reverse",
    "row": "pf-m-row",
    "rowReverse": "pf-m-row-reverse",
    "wrap": "pf-m-wrap",
    "wrapReverse": "pf-m-wrap-reverse",
    "nowrap": "pf-m-nowrap",
    "justifyContentFlexStart": "pf-m-justify-content-flex-start",
    "justifyContentFlexEnd": "pf-m-justify-content-flex-end",
    "justifyContentCenter": "pf-m-justify-content-center",
    "justifyContentSpaceBetween": "pf-m-justify-content-space-between",
    "justifyContentSpaceAround": "pf-m-justify-content-space-around",
    "justifyContentSpaceEvenly": "pf-m-justify-content-space-evenly",
    "alignItemsFlexStart": "pf-m-align-items-flex-start",
    "alignItemsFlexEnd": "pf-m-align-items-flex-end",
    "alignItemsCenter": "pf-m-align-items-center",
    "alignItemsStretch": "pf-m-align-items-stretch",
    "alignItemsBaseline": "pf-m-align-items-baseline",
    "alignContentFlexStart": "pf-m-align-content-flex-start",
    "alignContentFlexEnd": "pf-m-align-content-flex-end",
    "alignContentCenter": "pf-m-align-content-center",
    "alignContentStretch": "pf-m-align-content-stretch",
    "alignContentSpaceBetween": "pf-m-align-content-space-between",
    "alignContentSpaceAround": "pf-m-align-content-space-around",
    "alignRight": "pf-m-align-right",
    "alignLeft": "pf-m-align-left",
    "grow": "pf-m-grow",
    "shrink": "pf-m-shrink",
    "fullWidth": "pf-m-full-width",
    "flex_1": "pf-m-flex-1",
    "flex_2": "pf-m-flex-2",
    "flex_3": "pf-m-flex-3",
    "flex_4": "pf-m-flex-4",
    "flexDefault": "pf-m-flex-default",
    "flexNone": "pf-m-flex-none",
    "alignSelfFlexStart": "pf-m-align-self-flex-start",
    "alignSelfFlexEnd": "pf-m-align-self-flex-end",
    "alignSelfCenter": "pf-m-align-self-center",
    "alignSelfBaseline": "pf-m-align-self-baseline",
    "alignSelfStretch": "pf-m-align-self-stretch",
    "flexOnSm": "pf-m-flex-on-sm",
    "inlineFlexOnSm": "pf-m-inline-flex-on-sm",
    "columnOnSm": "pf-m-column-on-sm",
    "columnReverseOnSm": "pf-m-column-reverse-on-sm",
    "rowOnSm": "pf-m-row-on-sm",
    "rowReverseOnSm": "pf-m-row-reverse-on-sm",
    "wrapOnSm": "pf-m-wrap-on-sm",
    "wrapReverseOnSm": "pf-m-wrap-reverse-on-sm",
    "nowrapOnSm": "pf-m-nowrap-on-sm",
    "justifyContentFlexStartOnSm": "pf-m-justify-content-flex-start-on-sm",
    "justifyContentFlexEndOnSm": "pf-m-justify-content-flex-end-on-sm",
    "justifyContentCenterOnSm": "pf-m-justify-content-center-on-sm",
    "justifyContentSpaceBetweenOnSm": "pf-m-justify-content-space-between-on-sm",
    "justifyContentSpaceAroundOnSm": "pf-m-justify-content-space-around-on-sm",
    "justifyContentSpaceEvenlyOnSm": "pf-m-justify-content-space-evenly-on-sm",
    "alignItemsFlexStartOnSm": "pf-m-align-items-flex-start-on-sm",
    "alignItemsFlexEndOnSm": "pf-m-align-items-flex-end-on-sm",
    "alignItemsCenterOnSm": "pf-m-align-items-center-on-sm",
    "alignItemsStretchOnSm": "pf-m-align-items-stretch-on-sm",
    "alignItemsBaselineOnSm": "pf-m-align-items-baseline-on-sm",
    "alignContentFlexStartOnSm": "pf-m-align-content-flex-start-on-sm",
    "alignContentFlexEndOnSm": "pf-m-align-content-flex-end-on-sm",
    "alignContentCenterOnSm": "pf-m-align-content-center-on-sm",
    "alignContentStretchOnSm": "pf-m-align-content-stretch-on-sm",
    "alignContentSpaceBetweenOnSm": "pf-m-align-content-space-between-on-sm",
    "alignContentSpaceAroundOnSm": "pf-m-align-content-space-around-on-sm",
    "alignRightOnSm": "pf-m-align-right-on-sm",
    "alignLeftOnSm": "pf-m-align-left-on-sm",
    "growOnSm": "pf-m-grow-on-sm",
    "shrinkOnSm": "pf-m-shrink-on-sm",
    "fullWidthOnSm": "pf-m-full-width-on-sm",
    "flex_1OnSm": "pf-m-flex-1-on-sm",
    "flex_2OnSm": "pf-m-flex-2-on-sm",
    "flex_3OnSm": "pf-m-flex-3-on-sm",
    "flex_4OnSm": "pf-m-flex-4-on-sm",
    "flexDefaultOnSm": "pf-m-flex-default-on-sm",
    "flexNoneOnSm": "pf-m-flex-none-on-sm",
    "alignSelfFlexStartOnSm": "pf-m-align-self-flex-start-on-sm",
    "alignSelfFlexEndOnSm": "pf-m-align-self-flex-end-on-sm",
    "alignSelfCenterOnSm": "pf-m-align-self-center-on-sm",
    "alignSelfBaselineOnSm": "pf-m-align-self-baseline-on-sm",
    "alignSelfStretchOnSm": "pf-m-align-self-stretch-on-sm",
    "flexOnMd": "pf-m-flex-on-md",
    "inlineFlexOnMd": "pf-m-inline-flex-on-md",
    "columnOnMd": "pf-m-column-on-md",
    "columnReverseOnMd": "pf-m-column-reverse-on-md",
    "rowOnMd": "pf-m-row-on-md",
    "rowReverseOnMd": "pf-m-row-reverse-on-md",
    "wrapOnMd": "pf-m-wrap-on-md",
    "wrapReverseOnMd": "pf-m-wrap-reverse-on-md",
    "nowrapOnMd": "pf-m-nowrap-on-md",
    "justifyContentFlexStartOnMd": "pf-m-justify-content-flex-start-on-md",
    "justifyContentFlexEndOnMd": "pf-m-justify-content-flex-end-on-md",
    "justifyContentCenterOnMd": "pf-m-justify-content-center-on-md",
    "justifyContentSpaceBetweenOnMd": "pf-m-justify-content-space-between-on-md",
    "justifyContentSpaceAroundOnMd": "pf-m-justify-content-space-around-on-md",
    "justifyContentSpaceEvenlyOnMd": "pf-m-justify-content-space-evenly-on-md",
    "alignItemsFlexStartOnMd": "pf-m-align-items-flex-start-on-md",
    "alignItemsFlexEndOnMd": "pf-m-align-items-flex-end-on-md",
    "alignItemsCenterOnMd": "pf-m-align-items-center-on-md",
    "alignItemsStretchOnMd": "pf-m-align-items-stretch-on-md",
    "alignItemsBaselineOnMd": "pf-m-align-items-baseline-on-md",
    "alignContentFlexStartOnMd": "pf-m-align-content-flex-start-on-md",
    "alignContentFlexEndOnMd": "pf-m-align-content-flex-end-on-md",
    "alignContentCenterOnMd": "pf-m-align-content-center-on-md",
    "alignContentStretchOnMd": "pf-m-align-content-stretch-on-md",
    "alignContentSpaceBetweenOnMd": "pf-m-align-content-space-between-on-md",
    "alignContentSpaceAroundOnMd": "pf-m-align-content-space-around-on-md",
    "alignRightOnMd": "pf-m-align-right-on-md",
    "alignLeftOnMd": "pf-m-align-left-on-md",
    "growOnMd": "pf-m-grow-on-md",
    "shrinkOnMd": "pf-m-shrink-on-md",
    "fullWidthOnMd": "pf-m-full-width-on-md",
    "flex_1OnMd": "pf-m-flex-1-on-md",
    "flex_2OnMd": "pf-m-flex-2-on-md",
    "flex_3OnMd": "pf-m-flex-3-on-md",
    "flex_4OnMd": "pf-m-flex-4-on-md",
    "flexDefaultOnMd": "pf-m-flex-default-on-md",
    "flexNoneOnMd": "pf-m-flex-none-on-md",
    "alignSelfFlexStartOnMd": "pf-m-align-self-flex-start-on-md",
    "alignSelfFlexEndOnMd": "pf-m-align-self-flex-end-on-md",
    "alignSelfCenterOnMd": "pf-m-align-self-center-on-md",
    "alignSelfBaselineOnMd": "pf-m-align-self-baseline-on-md",
    "alignSelfStretchOnMd": "pf-m-align-self-stretch-on-md",
    "flexOnLg": "pf-m-flex-on-lg",
    "inlineFlexOnLg": "pf-m-inline-flex-on-lg",
    "columnOnLg": "pf-m-column-on-lg",
    "columnReverseOnLg": "pf-m-column-reverse-on-lg",
    "rowOnLg": "pf-m-row-on-lg",
    "rowReverseOnLg": "pf-m-row-reverse-on-lg",
    "wrapOnLg": "pf-m-wrap-on-lg",
    "wrapReverseOnLg": "pf-m-wrap-reverse-on-lg",
    "nowrapOnLg": "pf-m-nowrap-on-lg",
    "justifyContentFlexStartOnLg": "pf-m-justify-content-flex-start-on-lg",
    "justifyContentFlexEndOnLg": "pf-m-justify-content-flex-end-on-lg",
    "justifyContentCenterOnLg": "pf-m-justify-content-center-on-lg",
    "justifyContentSpaceBetweenOnLg": "pf-m-justify-content-space-between-on-lg",
    "justifyContentSpaceAroundOnLg": "pf-m-justify-content-space-around-on-lg",
    "justifyContentSpaceEvenlyOnLg": "pf-m-justify-content-space-evenly-on-lg",
    "alignItemsFlexStartOnLg": "pf-m-align-items-flex-start-on-lg",
    "alignItemsFlexEndOnLg": "pf-m-align-items-flex-end-on-lg",
    "alignItemsCenterOnLg": "pf-m-align-items-center-on-lg",
    "alignItemsStretchOnLg": "pf-m-align-items-stretch-on-lg",
    "alignItemsBaselineOnLg": "pf-m-align-items-baseline-on-lg",
    "alignContentFlexStartOnLg": "pf-m-align-content-flex-start-on-lg",
    "alignContentFlexEndOnLg": "pf-m-align-content-flex-end-on-lg",
    "alignContentCenterOnLg": "pf-m-align-content-center-on-lg",
    "alignContentStretchOnLg": "pf-m-align-content-stretch-on-lg",
    "alignContentSpaceBetweenOnLg": "pf-m-align-content-space-between-on-lg",
    "alignContentSpaceAroundOnLg": "pf-m-align-content-space-around-on-lg",
    "alignRightOnLg": "pf-m-align-right-on-lg",
    "alignLeftOnLg": "pf-m-align-left-on-lg",
    "growOnLg": "pf-m-grow-on-lg",
    "shrinkOnLg": "pf-m-shrink-on-lg",
    "fullWidthOnLg": "pf-m-full-width-on-lg",
    "flex_1OnLg": "pf-m-flex-1-on-lg",
    "flex_2OnLg": "pf-m-flex-2-on-lg",
    "flex_3OnLg": "pf-m-flex-3-on-lg",
    "flex_4OnLg": "pf-m-flex-4-on-lg",
    "flexDefaultOnLg": "pf-m-flex-default-on-lg",
    "flexNoneOnLg": "pf-m-flex-none-on-lg",
    "alignSelfFlexStartOnLg": "pf-m-align-self-flex-start-on-lg",
    "alignSelfFlexEndOnLg": "pf-m-align-self-flex-end-on-lg",
    "alignSelfCenterOnLg": "pf-m-align-self-center-on-lg",
    "alignSelfBaselineOnLg": "pf-m-align-self-baseline-on-lg",
    "alignSelfStretchOnLg": "pf-m-align-self-stretch-on-lg",
    "flexOnXl": "pf-m-flex-on-xl",
    "inlineFlexOnXl": "pf-m-inline-flex-on-xl",
    "columnOnXl": "pf-m-column-on-xl",
    "columnReverseOnXl": "pf-m-column-reverse-on-xl",
    "rowOnXl": "pf-m-row-on-xl",
    "rowReverseOnXl": "pf-m-row-reverse-on-xl",
    "wrapOnXl": "pf-m-wrap-on-xl",
    "wrapReverseOnXl": "pf-m-wrap-reverse-on-xl",
    "nowrapOnXl": "pf-m-nowrap-on-xl",
    "justifyContentFlexStartOnXl": "pf-m-justify-content-flex-start-on-xl",
    "justifyContentFlexEndOnXl": "pf-m-justify-content-flex-end-on-xl",
    "justifyContentCenterOnXl": "pf-m-justify-content-center-on-xl",
    "justifyContentSpaceBetweenOnXl": "pf-m-justify-content-space-between-on-xl",
    "justifyContentSpaceAroundOnXl": "pf-m-justify-content-space-around-on-xl",
    "justifyContentSpaceEvenlyOnXl": "pf-m-justify-content-space-evenly-on-xl",
    "alignItemsFlexStartOnXl": "pf-m-align-items-flex-start-on-xl",
    "alignItemsFlexEndOnXl": "pf-m-align-items-flex-end-on-xl",
    "alignItemsCenterOnXl": "pf-m-align-items-center-on-xl",
    "alignItemsStretchOnXl": "pf-m-align-items-stretch-on-xl",
    "alignItemsBaselineOnXl": "pf-m-align-items-baseline-on-xl",
    "alignContentFlexStartOnXl": "pf-m-align-content-flex-start-on-xl",
    "alignContentFlexEndOnXl": "pf-m-align-content-flex-end-on-xl",
    "alignContentCenterOnXl": "pf-m-align-content-center-on-xl",
    "alignContentStretchOnXl": "pf-m-align-content-stretch-on-xl",
    "alignContentSpaceBetweenOnXl": "pf-m-align-content-space-between-on-xl",
    "alignContentSpaceAroundOnXl": "pf-m-align-content-space-around-on-xl",
    "alignRightOnXl": "pf-m-align-right-on-xl",
    "alignLeftOnXl": "pf-m-align-left-on-xl",
    "growOnXl": "pf-m-grow-on-xl",
    "shrinkOnXl": "pf-m-shrink-on-xl",
    "fullWidthOnXl": "pf-m-full-width-on-xl",
    "flex_1OnXl": "pf-m-flex-1-on-xl",
    "flex_2OnXl": "pf-m-flex-2-on-xl",
    "flex_3OnXl": "pf-m-flex-3-on-xl",
    "flex_4OnXl": "pf-m-flex-4-on-xl",
    "flexDefaultOnXl": "pf-m-flex-default-on-xl",
    "flexNoneOnXl": "pf-m-flex-none-on-xl",
    "alignSelfFlexStartOnXl": "pf-m-align-self-flex-start-on-xl",
    "alignSelfFlexEndOnXl": "pf-m-align-self-flex-end-on-xl",
    "alignSelfCenterOnXl": "pf-m-align-self-center-on-xl",
    "alignSelfBaselineOnXl": "pf-m-align-self-baseline-on-xl",
    "alignSelfStretchOnXl": "pf-m-align-self-stretch-on-xl",
    "flexOn_2xl": "pf-m-flex-on-2xl",
    "inlineFlexOn_2xl": "pf-m-inline-flex-on-2xl",
    "columnOn_2xl": "pf-m-column-on-2xl",
    "columnReverseOn_2xl": "pf-m-column-reverse-on-2xl",
    "rowOn_2xl": "pf-m-row-on-2xl",
    "rowReverseOn_2xl": "pf-m-row-reverse-on-2xl",
    "wrapOn_2xl": "pf-m-wrap-on-2xl",
    "wrapReverseOn_2xl": "pf-m-wrap-reverse-on-2xl",
    "nowrapOn_2xl": "pf-m-nowrap-on-2xl",
    "justifyContentFlexStartOn_2xl": "pf-m-justify-content-flex-start-on-2xl",
    "justifyContentFlexEndOn_2xl": "pf-m-justify-content-flex-end-on-2xl",
    "justifyContentCenterOn_2xl": "pf-m-justify-content-center-on-2xl",
    "justifyContentSpaceBetweenOn_2xl": "pf-m-justify-content-space-between-on-2xl",
    "justifyContentSpaceAroundOn_2xl": "pf-m-justify-content-space-around-on-2xl",
    "justifyContentSpaceEvenlyOn_2xl": "pf-m-justify-content-space-evenly-on-2xl",
    "alignItemsFlexStartOn_2xl": "pf-m-align-items-flex-start-on-2xl",
    "alignItemsFlexEndOn_2xl": "pf-m-align-items-flex-end-on-2xl",
    "alignItemsCenterOn_2xl": "pf-m-align-items-center-on-2xl",
    "alignItemsStretchOn_2xl": "pf-m-align-items-stretch-on-2xl",
    "alignItemsBaselineOn_2xl": "pf-m-align-items-baseline-on-2xl",
    "alignContentFlexStartOn_2xl": "pf-m-align-content-flex-start-on-2xl",
    "alignContentFlexEndOn_2xl": "pf-m-align-content-flex-end-on-2xl",
    "alignContentCenterOn_2xl": "pf-m-align-content-center-on-2xl",
    "alignContentStretchOn_2xl": "pf-m-align-content-stretch-on-2xl",
    "alignContentSpaceBetweenOn_2xl": "pf-m-align-content-space-between-on-2xl",
    "alignContentSpaceAroundOn_2xl": "pf-m-align-content-space-around-on-2xl",
    "alignRightOn_2xl": "pf-m-align-right-on-2xl",
    "alignLeftOn_2xl": "pf-m-align-left-on-2xl",
    "growOn_2xl": "pf-m-grow-on-2xl",
    "shrinkOn_2xl": "pf-m-shrink-on-2xl",
    "fullWidthOn_2xl": "pf-m-full-width-on-2xl",
    "flex_1On_2xl": "pf-m-flex-1-on-2xl",
    "flex_2On_2xl": "pf-m-flex-2-on-2xl",
    "flex_3On_2xl": "pf-m-flex-3-on-2xl",
    "flex_4On_2xl": "pf-m-flex-4-on-2xl",
    "flexDefaultOn_2xl": "pf-m-flex-default-on-2xl",
    "flexNoneOn_2xl": "pf-m-flex-none-on-2xl",
    "alignSelfFlexStartOn_2xl": "pf-m-align-self-flex-start-on-2xl",
    "alignSelfFlexEndOn_2xl": "pf-m-align-self-flex-end-on-2xl",
    "alignSelfCenterOn_2xl": "pf-m-align-self-center-on-2xl",
    "alignSelfBaselineOn_2xl": "pf-m-align-self-baseline-on-2xl",
    "alignSelfStretchOn_2xl": "pf-m-align-self-stretch-on-2xl",
    "spaceItemsNone": "pf-m-space-items-none",
    "spaceItemsXs": "pf-m-space-items-xs",
    "spaceItemsSm": "pf-m-space-items-sm",
    "spaceItemsMd": "pf-m-space-items-md",
    "spaceItemsLg": "pf-m-space-items-lg",
    "spaceItemsXl": "pf-m-space-items-xl",
    "spaceItems_2xl": "pf-m-space-items-2xl",
    "spaceItems_3xl": "pf-m-space-items-3xl",
    "spaceItems_4xl": "pf-m-space-items-4xl",
    "spaceItemsNoneOnSm": "pf-m-space-items-none-on-sm",
    "spaceItemsXsOnSm": "pf-m-space-items-xs-on-sm",
    "spaceItemsSmOnSm": "pf-m-space-items-sm-on-sm",
    "spaceItemsMdOnSm": "pf-m-space-items-md-on-sm",
    "spaceItemsLgOnSm": "pf-m-space-items-lg-on-sm",
    "spaceItemsXlOnSm": "pf-m-space-items-xl-on-sm",
    "spaceItems_2xlOnSm": "pf-m-space-items-2xl-on-sm",
    "spaceItems_3xlOnSm": "pf-m-space-items-3xl-on-sm",
    "spaceItems_4xlOnSm": "pf-m-space-items-4xl-on-sm",
    "spaceItemsNoneOnMd": "pf-m-space-items-none-on-md",
    "spaceItemsXsOnMd": "pf-m-space-items-xs-on-md",
    "spaceItemsSmOnMd": "pf-m-space-items-sm-on-md",
    "spaceItemsMdOnMd": "pf-m-space-items-md-on-md",
    "spaceItemsLgOnMd": "pf-m-space-items-lg-on-md",
    "spaceItemsXlOnMd": "pf-m-space-items-xl-on-md",
    "spaceItems_2xlOnMd": "pf-m-space-items-2xl-on-md",
    "spaceItems_3xlOnMd": "pf-m-space-items-3xl-on-md",
    "spaceItems_4xlOnMd": "pf-m-space-items-4xl-on-md",
    "spaceItemsNoneOnLg": "pf-m-space-items-none-on-lg",
    "spaceItemsXsOnLg": "pf-m-space-items-xs-on-lg",
    "spaceItemsSmOnLg": "pf-m-space-items-sm-on-lg",
    "spaceItemsMdOnLg": "pf-m-space-items-md-on-lg",
    "spaceItemsLgOnLg": "pf-m-space-items-lg-on-lg",
    "spaceItemsXlOnLg": "pf-m-space-items-xl-on-lg",
    "spaceItems_2xlOnLg": "pf-m-space-items-2xl-on-lg",
    "spaceItems_3xlOnLg": "pf-m-space-items-3xl-on-lg",
    "spaceItems_4xlOnLg": "pf-m-space-items-4xl-on-lg",
    "spaceItemsNoneOnXl": "pf-m-space-items-none-on-xl",
    "spaceItemsXsOnXl": "pf-m-space-items-xs-on-xl",
    "spaceItemsSmOnXl": "pf-m-space-items-sm-on-xl",
    "spaceItemsMdOnXl": "pf-m-space-items-md-on-xl",
    "spaceItemsLgOnXl": "pf-m-space-items-lg-on-xl",
    "spaceItemsXlOnXl": "pf-m-space-items-xl-on-xl",
    "spaceItems_2xlOnXl": "pf-m-space-items-2xl-on-xl",
    "spaceItems_3xlOnXl": "pf-m-space-items-3xl-on-xl",
    "spaceItems_4xlOnXl": "pf-m-space-items-4xl-on-xl",
    "spaceItemsNoneOn_2xl": "pf-m-space-items-none-on-2xl",
    "spaceItemsXsOn_2xl": "pf-m-space-items-xs-on-2xl",
    "spaceItemsSmOn_2xl": "pf-m-space-items-sm-on-2xl",
    "spaceItemsMdOn_2xl": "pf-m-space-items-md-on-2xl",
    "spaceItemsLgOn_2xl": "pf-m-space-items-lg-on-2xl",
    "spaceItemsXlOn_2xl": "pf-m-space-items-xl-on-2xl",
    "spaceItems_2xlOn_2xl": "pf-m-space-items-2xl-on-2xl",
    "spaceItems_3xlOn_2xl": "pf-m-space-items-3xl-on-2xl",
    "spaceItems_4xlOn_2xl": "pf-m-space-items-4xl-on-2xl",
    "spacerNone": "pf-m-spacer-none",
    "spacerXs": "pf-m-spacer-xs",
    "spacerSm": "pf-m-spacer-sm",
    "spacerMd": "pf-m-spacer-md",
    "spacerLg": "pf-m-spacer-lg",
    "spacerXl": "pf-m-spacer-xl",
    "spacer_2xl": "pf-m-spacer-2xl",
    "spacer_3xl": "pf-m-spacer-3xl",
    "spacer_4xl": "pf-m-spacer-4xl",
    "spacerNoneOnSm": "pf-m-spacer-none-on-sm",
    "spacerXsOnSm": "pf-m-spacer-xs-on-sm",
    "spacerSmOnSm": "pf-m-spacer-sm-on-sm",
    "spacerMdOnSm": "pf-m-spacer-md-on-sm",
    "spacerLgOnSm": "pf-m-spacer-lg-on-sm",
    "spacerXlOnSm": "pf-m-spacer-xl-on-sm",
    "spacer_2xlOnSm": "pf-m-spacer-2xl-on-sm",
    "spacer_3xlOnSm": "pf-m-spacer-3xl-on-sm",
    "spacer_4xlOnSm": "pf-m-spacer-4xl-on-sm",
    "spacerNoneOnMd": "pf-m-spacer-none-on-md",
    "spacerXsOnMd": "pf-m-spacer-xs-on-md",
    "spacerSmOnMd": "pf-m-spacer-sm-on-md",
    "spacerMdOnMd": "pf-m-spacer-md-on-md",
    "spacerLgOnMd": "pf-m-spacer-lg-on-md",
    "spacerXlOnMd": "pf-m-spacer-xl-on-md",
    "spacer_2xlOnMd": "pf-m-spacer-2xl-on-md",
    "spacer_3xlOnMd": "pf-m-spacer-3xl-on-md",
    "spacer_4xlOnMd": "pf-m-spacer-4xl-on-md",
    "spacerNoneOnLg": "pf-m-spacer-none-on-lg",
    "spacerXsOnLg": "pf-m-spacer-xs-on-lg",
    "spacerSmOnLg": "pf-m-spacer-sm-on-lg",
    "spacerMdOnLg": "pf-m-spacer-md-on-lg",
    "spacerLgOnLg": "pf-m-spacer-lg-on-lg",
    "spacerXlOnLg": "pf-m-spacer-xl-on-lg",
    "spacer_2xlOnLg": "pf-m-spacer-2xl-on-lg",
    "spacer_3xlOnLg": "pf-m-spacer-3xl-on-lg",
    "spacer_4xlOnLg": "pf-m-spacer-4xl-on-lg",
    "spacerNoneOnXl": "pf-m-spacer-none-on-xl",
    "spacerXsOnXl": "pf-m-spacer-xs-on-xl",
    "spacerSmOnXl": "pf-m-spacer-sm-on-xl",
    "spacerMdOnXl": "pf-m-spacer-md-on-xl",
    "spacerLgOnXl": "pf-m-spacer-lg-on-xl",
    "spacerXlOnXl": "pf-m-spacer-xl-on-xl",
    "spacer_2xlOnXl": "pf-m-spacer-2xl-on-xl",
    "spacer_3xlOnXl": "pf-m-spacer-3xl-on-xl",
    "spacer_4xlOnXl": "pf-m-spacer-4xl-on-xl",
    "spacerNoneOn_2xl": "pf-m-spacer-none-on-2xl",
    "spacerXsOn_2xl": "pf-m-spacer-xs-on-2xl",
    "spacerSmOn_2xl": "pf-m-spacer-sm-on-2xl",
    "spacerMdOn_2xl": "pf-m-spacer-md-on-2xl",
    "spacerLgOn_2xl": "pf-m-spacer-lg-on-2xl",
    "spacerXlOn_2xl": "pf-m-spacer-xl-on-2xl",
    "spacer_2xlOn_2xl": "pf-m-spacer-2xl-on-2xl",
    "spacer_3xlOn_2xl": "pf-m-spacer-3xl-on-2xl",
    "spacer_4xlOn_2xl": "pf-m-spacer-4xl-on-2xl"
  }
};
});

var styles$y = /*@__PURE__*/getDefaultExportFromCjs(flex);

const Flex = (_a) => {
    var { children = null, className = '', spacer, spaceItems, grow, shrink, flex, direction, alignItems, alignContent, alignSelf, align, justifyContent, display, fullWidth, flexWrap } = _a, props = __rest(_a, ["children", "className", "spacer", "spaceItems", "grow", "shrink", "flex", "direction", "alignItems", "alignContent", "alignSelf", "align", "justifyContent", "display", "fullWidth", "flexWrap"]);
    return (react.createElement("div", Object.assign({ className: css(styles$y.flex, formatBreakpointMods(spacer, styles$y), formatBreakpointMods(spaceItems, styles$y), formatBreakpointMods(grow, styles$y), formatBreakpointMods(shrink, styles$y), formatBreakpointMods(flex, styles$y), formatBreakpointMods(direction, styles$y), formatBreakpointMods(alignItems, styles$y), formatBreakpointMods(alignContent, styles$y), formatBreakpointMods(alignSelf, styles$y), formatBreakpointMods(align, styles$y), formatBreakpointMods(justifyContent, styles$y), formatBreakpointMods(display, styles$y), formatBreakpointMods(fullWidth, styles$y), formatBreakpointMods(flexWrap, styles$y), className) }, props), children));
};
Flex.displayName = 'Flex';

const FlexItem = (_a) => {
    var { children = null, className = '', spacer, grow, shrink, flex, alignSelf, align, fullWidth } = _a, props = __rest(_a, ["children", "className", "spacer", "grow", "shrink", "flex", "alignSelf", "align", "fullWidth"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(formatBreakpointMods(spacer, styles$y), formatBreakpointMods(grow, styles$y), formatBreakpointMods(shrink, styles$y), formatBreakpointMods(flex, styles$y), formatBreakpointMods(alignSelf, styles$y), formatBreakpointMods(align, styles$y), formatBreakpointMods(fullWidth, styles$y), className) }), children));
};
FlexItem.displayName = 'FlexItem';

var gallery = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "gallery": "pf-l-gallery",
  "modifiers": {
    "gutter": "pf-m-gutter"
  }
};
});

var styles$z = /*@__PURE__*/getDefaultExportFromCjs(gallery);

const Gallery = (_a) => {
    var { children = null, className = '', hasGutter = false } = _a, props = __rest(_a, ["children", "className", "hasGutter"]);
    return (react.createElement("div", Object.assign({ className: css(styles$z.gallery, hasGutter && styles$z.modifiers.gutter, className) }, props), children));
};
Gallery.displayName = 'Gallery';

const GalleryItem = (_a) => {
    var { children = null } = _a, props = __rest(_a, ["children"]);
    return react.createElement("div", Object.assign({}, props), children);
};
GalleryItem.displayName = 'GalleryItem';

var grid = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "grid": "pf-l-grid",
  "gridItem": "pf-l-grid__item",
  "modifiers": {
    "all_1Col": "pf-m-all-1-col",
    "all_2Col": "pf-m-all-2-col",
    "all_3Col": "pf-m-all-3-col",
    "all_4Col": "pf-m-all-4-col",
    "all_5Col": "pf-m-all-5-col",
    "all_6Col": "pf-m-all-6-col",
    "all_7Col": "pf-m-all-7-col",
    "all_8Col": "pf-m-all-8-col",
    "all_9Col": "pf-m-all-9-col",
    "all_10Col": "pf-m-all-10-col",
    "all_11Col": "pf-m-all-11-col",
    "all_12Col": "pf-m-all-12-col",
    "all_1ColOnSm": "pf-m-all-1-col-on-sm",
    "all_2ColOnSm": "pf-m-all-2-col-on-sm",
    "all_3ColOnSm": "pf-m-all-3-col-on-sm",
    "all_4ColOnSm": "pf-m-all-4-col-on-sm",
    "all_5ColOnSm": "pf-m-all-5-col-on-sm",
    "all_6ColOnSm": "pf-m-all-6-col-on-sm",
    "all_7ColOnSm": "pf-m-all-7-col-on-sm",
    "all_8ColOnSm": "pf-m-all-8-col-on-sm",
    "all_9ColOnSm": "pf-m-all-9-col-on-sm",
    "all_10ColOnSm": "pf-m-all-10-col-on-sm",
    "all_11ColOnSm": "pf-m-all-11-col-on-sm",
    "all_12ColOnSm": "pf-m-all-12-col-on-sm",
    "all_1ColOnMd": "pf-m-all-1-col-on-md",
    "all_2ColOnMd": "pf-m-all-2-col-on-md",
    "all_3ColOnMd": "pf-m-all-3-col-on-md",
    "all_4ColOnMd": "pf-m-all-4-col-on-md",
    "all_5ColOnMd": "pf-m-all-5-col-on-md",
    "all_6ColOnMd": "pf-m-all-6-col-on-md",
    "all_7ColOnMd": "pf-m-all-7-col-on-md",
    "all_8ColOnMd": "pf-m-all-8-col-on-md",
    "all_9ColOnMd": "pf-m-all-9-col-on-md",
    "all_10ColOnMd": "pf-m-all-10-col-on-md",
    "all_11ColOnMd": "pf-m-all-11-col-on-md",
    "all_12ColOnMd": "pf-m-all-12-col-on-md",
    "all_1ColOnLg": "pf-m-all-1-col-on-lg",
    "all_2ColOnLg": "pf-m-all-2-col-on-lg",
    "all_3ColOnLg": "pf-m-all-3-col-on-lg",
    "all_4ColOnLg": "pf-m-all-4-col-on-lg",
    "all_5ColOnLg": "pf-m-all-5-col-on-lg",
    "all_6ColOnLg": "pf-m-all-6-col-on-lg",
    "all_7ColOnLg": "pf-m-all-7-col-on-lg",
    "all_8ColOnLg": "pf-m-all-8-col-on-lg",
    "all_9ColOnLg": "pf-m-all-9-col-on-lg",
    "all_10ColOnLg": "pf-m-all-10-col-on-lg",
    "all_11ColOnLg": "pf-m-all-11-col-on-lg",
    "all_12ColOnLg": "pf-m-all-12-col-on-lg",
    "all_1ColOnXl": "pf-m-all-1-col-on-xl",
    "all_2ColOnXl": "pf-m-all-2-col-on-xl",
    "all_3ColOnXl": "pf-m-all-3-col-on-xl",
    "all_4ColOnXl": "pf-m-all-4-col-on-xl",
    "all_5ColOnXl": "pf-m-all-5-col-on-xl",
    "all_6ColOnXl": "pf-m-all-6-col-on-xl",
    "all_7ColOnXl": "pf-m-all-7-col-on-xl",
    "all_8ColOnXl": "pf-m-all-8-col-on-xl",
    "all_9ColOnXl": "pf-m-all-9-col-on-xl",
    "all_10ColOnXl": "pf-m-all-10-col-on-xl",
    "all_11ColOnXl": "pf-m-all-11-col-on-xl",
    "all_12ColOnXl": "pf-m-all-12-col-on-xl",
    "all_1ColOn_2xl": "pf-m-all-1-col-on-2xl",
    "all_2ColOn_2xl": "pf-m-all-2-col-on-2xl",
    "all_3ColOn_2xl": "pf-m-all-3-col-on-2xl",
    "all_4ColOn_2xl": "pf-m-all-4-col-on-2xl",
    "all_5ColOn_2xl": "pf-m-all-5-col-on-2xl",
    "all_6ColOn_2xl": "pf-m-all-6-col-on-2xl",
    "all_7ColOn_2xl": "pf-m-all-7-col-on-2xl",
    "all_8ColOn_2xl": "pf-m-all-8-col-on-2xl",
    "all_9ColOn_2xl": "pf-m-all-9-col-on-2xl",
    "all_10ColOn_2xl": "pf-m-all-10-col-on-2xl",
    "all_11ColOn_2xl": "pf-m-all-11-col-on-2xl",
    "all_12ColOn_2xl": "pf-m-all-12-col-on-2xl",
    "1Col": "pf-m-1-col",
    "2Col": "pf-m-2-col",
    "3Col": "pf-m-3-col",
    "4Col": "pf-m-4-col",
    "5Col": "pf-m-5-col",
    "6Col": "pf-m-6-col",
    "7Col": "pf-m-7-col",
    "8Col": "pf-m-8-col",
    "9Col": "pf-m-9-col",
    "10Col": "pf-m-10-col",
    "11Col": "pf-m-11-col",
    "12Col": "pf-m-12-col",
    "offset_1Col": "pf-m-offset-1-col",
    "offset_2Col": "pf-m-offset-2-col",
    "offset_3Col": "pf-m-offset-3-col",
    "offset_4Col": "pf-m-offset-4-col",
    "offset_5Col": "pf-m-offset-5-col",
    "offset_6Col": "pf-m-offset-6-col",
    "offset_7Col": "pf-m-offset-7-col",
    "offset_8Col": "pf-m-offset-8-col",
    "offset_9Col": "pf-m-offset-9-col",
    "offset_10Col": "pf-m-offset-10-col",
    "offset_11Col": "pf-m-offset-11-col",
    "offset_12Col": "pf-m-offset-12-col",
    "1Row": "pf-m-1-row",
    "2Row": "pf-m-2-row",
    "3Row": "pf-m-3-row",
    "4Row": "pf-m-4-row",
    "5Row": "pf-m-5-row",
    "6Row": "pf-m-6-row",
    "7Row": "pf-m-7-row",
    "8Row": "pf-m-8-row",
    "9Row": "pf-m-9-row",
    "10Row": "pf-m-10-row",
    "11Row": "pf-m-11-row",
    "12Row": "pf-m-12-row",
    "1ColOnSm": "pf-m-1-col-on-sm",
    "2ColOnSm": "pf-m-2-col-on-sm",
    "3ColOnSm": "pf-m-3-col-on-sm",
    "4ColOnSm": "pf-m-4-col-on-sm",
    "5ColOnSm": "pf-m-5-col-on-sm",
    "6ColOnSm": "pf-m-6-col-on-sm",
    "7ColOnSm": "pf-m-7-col-on-sm",
    "8ColOnSm": "pf-m-8-col-on-sm",
    "9ColOnSm": "pf-m-9-col-on-sm",
    "10ColOnSm": "pf-m-10-col-on-sm",
    "11ColOnSm": "pf-m-11-col-on-sm",
    "12ColOnSm": "pf-m-12-col-on-sm",
    "offset_1ColOnSm": "pf-m-offset-1-col-on-sm",
    "offset_2ColOnSm": "pf-m-offset-2-col-on-sm",
    "offset_3ColOnSm": "pf-m-offset-3-col-on-sm",
    "offset_4ColOnSm": "pf-m-offset-4-col-on-sm",
    "offset_5ColOnSm": "pf-m-offset-5-col-on-sm",
    "offset_6ColOnSm": "pf-m-offset-6-col-on-sm",
    "offset_7ColOnSm": "pf-m-offset-7-col-on-sm",
    "offset_8ColOnSm": "pf-m-offset-8-col-on-sm",
    "offset_9ColOnSm": "pf-m-offset-9-col-on-sm",
    "offset_10ColOnSm": "pf-m-offset-10-col-on-sm",
    "offset_11ColOnSm": "pf-m-offset-11-col-on-sm",
    "offset_12ColOnSm": "pf-m-offset-12-col-on-sm",
    "1RowOnSm": "pf-m-1-row-on-sm",
    "2RowOnSm": "pf-m-2-row-on-sm",
    "3RowOnSm": "pf-m-3-row-on-sm",
    "4RowOnSm": "pf-m-4-row-on-sm",
    "5RowOnSm": "pf-m-5-row-on-sm",
    "6RowOnSm": "pf-m-6-row-on-sm",
    "7RowOnSm": "pf-m-7-row-on-sm",
    "8RowOnSm": "pf-m-8-row-on-sm",
    "9RowOnSm": "pf-m-9-row-on-sm",
    "10RowOnSm": "pf-m-10-row-on-sm",
    "11RowOnSm": "pf-m-11-row-on-sm",
    "12RowOnSm": "pf-m-12-row-on-sm",
    "1ColOnMd": "pf-m-1-col-on-md",
    "2ColOnMd": "pf-m-2-col-on-md",
    "3ColOnMd": "pf-m-3-col-on-md",
    "4ColOnMd": "pf-m-4-col-on-md",
    "5ColOnMd": "pf-m-5-col-on-md",
    "6ColOnMd": "pf-m-6-col-on-md",
    "7ColOnMd": "pf-m-7-col-on-md",
    "8ColOnMd": "pf-m-8-col-on-md",
    "9ColOnMd": "pf-m-9-col-on-md",
    "10ColOnMd": "pf-m-10-col-on-md",
    "11ColOnMd": "pf-m-11-col-on-md",
    "12ColOnMd": "pf-m-12-col-on-md",
    "offset_1ColOnMd": "pf-m-offset-1-col-on-md",
    "offset_2ColOnMd": "pf-m-offset-2-col-on-md",
    "offset_3ColOnMd": "pf-m-offset-3-col-on-md",
    "offset_4ColOnMd": "pf-m-offset-4-col-on-md",
    "offset_5ColOnMd": "pf-m-offset-5-col-on-md",
    "offset_6ColOnMd": "pf-m-offset-6-col-on-md",
    "offset_7ColOnMd": "pf-m-offset-7-col-on-md",
    "offset_8ColOnMd": "pf-m-offset-8-col-on-md",
    "offset_9ColOnMd": "pf-m-offset-9-col-on-md",
    "offset_10ColOnMd": "pf-m-offset-10-col-on-md",
    "offset_11ColOnMd": "pf-m-offset-11-col-on-md",
    "offset_12ColOnMd": "pf-m-offset-12-col-on-md",
    "1RowOnMd": "pf-m-1-row-on-md",
    "2RowOnMd": "pf-m-2-row-on-md",
    "3RowOnMd": "pf-m-3-row-on-md",
    "4RowOnMd": "pf-m-4-row-on-md",
    "5RowOnMd": "pf-m-5-row-on-md",
    "6RowOnMd": "pf-m-6-row-on-md",
    "7RowOnMd": "pf-m-7-row-on-md",
    "8RowOnMd": "pf-m-8-row-on-md",
    "9RowOnMd": "pf-m-9-row-on-md",
    "10RowOnMd": "pf-m-10-row-on-md",
    "11RowOnMd": "pf-m-11-row-on-md",
    "12RowOnMd": "pf-m-12-row-on-md",
    "1ColOnLg": "pf-m-1-col-on-lg",
    "2ColOnLg": "pf-m-2-col-on-lg",
    "3ColOnLg": "pf-m-3-col-on-lg",
    "4ColOnLg": "pf-m-4-col-on-lg",
    "5ColOnLg": "pf-m-5-col-on-lg",
    "6ColOnLg": "pf-m-6-col-on-lg",
    "7ColOnLg": "pf-m-7-col-on-lg",
    "8ColOnLg": "pf-m-8-col-on-lg",
    "9ColOnLg": "pf-m-9-col-on-lg",
    "10ColOnLg": "pf-m-10-col-on-lg",
    "11ColOnLg": "pf-m-11-col-on-lg",
    "12ColOnLg": "pf-m-12-col-on-lg",
    "offset_1ColOnLg": "pf-m-offset-1-col-on-lg",
    "offset_2ColOnLg": "pf-m-offset-2-col-on-lg",
    "offset_3ColOnLg": "pf-m-offset-3-col-on-lg",
    "offset_4ColOnLg": "pf-m-offset-4-col-on-lg",
    "offset_5ColOnLg": "pf-m-offset-5-col-on-lg",
    "offset_6ColOnLg": "pf-m-offset-6-col-on-lg",
    "offset_7ColOnLg": "pf-m-offset-7-col-on-lg",
    "offset_8ColOnLg": "pf-m-offset-8-col-on-lg",
    "offset_9ColOnLg": "pf-m-offset-9-col-on-lg",
    "offset_10ColOnLg": "pf-m-offset-10-col-on-lg",
    "offset_11ColOnLg": "pf-m-offset-11-col-on-lg",
    "offset_12ColOnLg": "pf-m-offset-12-col-on-lg",
    "1RowOnLg": "pf-m-1-row-on-lg",
    "2RowOnLg": "pf-m-2-row-on-lg",
    "3RowOnLg": "pf-m-3-row-on-lg",
    "4RowOnLg": "pf-m-4-row-on-lg",
    "5RowOnLg": "pf-m-5-row-on-lg",
    "6RowOnLg": "pf-m-6-row-on-lg",
    "7RowOnLg": "pf-m-7-row-on-lg",
    "8RowOnLg": "pf-m-8-row-on-lg",
    "9RowOnLg": "pf-m-9-row-on-lg",
    "10RowOnLg": "pf-m-10-row-on-lg",
    "11RowOnLg": "pf-m-11-row-on-lg",
    "12RowOnLg": "pf-m-12-row-on-lg",
    "1ColOnXl": "pf-m-1-col-on-xl",
    "2ColOnXl": "pf-m-2-col-on-xl",
    "3ColOnXl": "pf-m-3-col-on-xl",
    "4ColOnXl": "pf-m-4-col-on-xl",
    "5ColOnXl": "pf-m-5-col-on-xl",
    "6ColOnXl": "pf-m-6-col-on-xl",
    "7ColOnXl": "pf-m-7-col-on-xl",
    "8ColOnXl": "pf-m-8-col-on-xl",
    "9ColOnXl": "pf-m-9-col-on-xl",
    "10ColOnXl": "pf-m-10-col-on-xl",
    "11ColOnXl": "pf-m-11-col-on-xl",
    "12ColOnXl": "pf-m-12-col-on-xl",
    "offset_1ColOnXl": "pf-m-offset-1-col-on-xl",
    "offset_2ColOnXl": "pf-m-offset-2-col-on-xl",
    "offset_3ColOnXl": "pf-m-offset-3-col-on-xl",
    "offset_4ColOnXl": "pf-m-offset-4-col-on-xl",
    "offset_5ColOnXl": "pf-m-offset-5-col-on-xl",
    "offset_6ColOnXl": "pf-m-offset-6-col-on-xl",
    "offset_7ColOnXl": "pf-m-offset-7-col-on-xl",
    "offset_8ColOnXl": "pf-m-offset-8-col-on-xl",
    "offset_9ColOnXl": "pf-m-offset-9-col-on-xl",
    "offset_10ColOnXl": "pf-m-offset-10-col-on-xl",
    "offset_11ColOnXl": "pf-m-offset-11-col-on-xl",
    "offset_12ColOnXl": "pf-m-offset-12-col-on-xl",
    "1RowOnXl": "pf-m-1-row-on-xl",
    "2RowOnXl": "pf-m-2-row-on-xl",
    "3RowOnXl": "pf-m-3-row-on-xl",
    "4RowOnXl": "pf-m-4-row-on-xl",
    "5RowOnXl": "pf-m-5-row-on-xl",
    "6RowOnXl": "pf-m-6-row-on-xl",
    "7RowOnXl": "pf-m-7-row-on-xl",
    "8RowOnXl": "pf-m-8-row-on-xl",
    "9RowOnXl": "pf-m-9-row-on-xl",
    "10RowOnXl": "pf-m-10-row-on-xl",
    "11RowOnXl": "pf-m-11-row-on-xl",
    "12RowOnXl": "pf-m-12-row-on-xl",
    "1ColOn_2xl": "pf-m-1-col-on-2xl",
    "2ColOn_2xl": "pf-m-2-col-on-2xl",
    "3ColOn_2xl": "pf-m-3-col-on-2xl",
    "4ColOn_2xl": "pf-m-4-col-on-2xl",
    "5ColOn_2xl": "pf-m-5-col-on-2xl",
    "6ColOn_2xl": "pf-m-6-col-on-2xl",
    "7ColOn_2xl": "pf-m-7-col-on-2xl",
    "8ColOn_2xl": "pf-m-8-col-on-2xl",
    "9ColOn_2xl": "pf-m-9-col-on-2xl",
    "10ColOn_2xl": "pf-m-10-col-on-2xl",
    "11ColOn_2xl": "pf-m-11-col-on-2xl",
    "12ColOn_2xl": "pf-m-12-col-on-2xl",
    "offset_1ColOn_2xl": "pf-m-offset-1-col-on-2xl",
    "offset_2ColOn_2xl": "pf-m-offset-2-col-on-2xl",
    "offset_3ColOn_2xl": "pf-m-offset-3-col-on-2xl",
    "offset_4ColOn_2xl": "pf-m-offset-4-col-on-2xl",
    "offset_5ColOn_2xl": "pf-m-offset-5-col-on-2xl",
    "offset_6ColOn_2xl": "pf-m-offset-6-col-on-2xl",
    "offset_7ColOn_2xl": "pf-m-offset-7-col-on-2xl",
    "offset_8ColOn_2xl": "pf-m-offset-8-col-on-2xl",
    "offset_9ColOn_2xl": "pf-m-offset-9-col-on-2xl",
    "offset_10ColOn_2xl": "pf-m-offset-10-col-on-2xl",
    "offset_11ColOn_2xl": "pf-m-offset-11-col-on-2xl",
    "offset_12ColOn_2xl": "pf-m-offset-12-col-on-2xl",
    "1RowOn_2xl": "pf-m-1-row-on-2xl",
    "2RowOn_2xl": "pf-m-2-row-on-2xl",
    "3RowOn_2xl": "pf-m-3-row-on-2xl",
    "4RowOn_2xl": "pf-m-4-row-on-2xl",
    "5RowOn_2xl": "pf-m-5-row-on-2xl",
    "6RowOn_2xl": "pf-m-6-row-on-2xl",
    "7RowOn_2xl": "pf-m-7-row-on-2xl",
    "8RowOn_2xl": "pf-m-8-row-on-2xl",
    "9RowOn_2xl": "pf-m-9-row-on-2xl",
    "10RowOn_2xl": "pf-m-10-row-on-2xl",
    "11RowOn_2xl": "pf-m-11-row-on-2xl",
    "12RowOn_2xl": "pf-m-12-row-on-2xl",
    "gutter": "pf-m-gutter"
  }
};
});

var styles$A = /*@__PURE__*/getDefaultExportFromCjs(grid);

var BaseSizes;
(function (BaseSizes) {
    BaseSizes["xs"] = "xs";
    BaseSizes["sm"] = "sm";
    BaseSizes["md"] = "md";
    BaseSizes["lg"] = "lg";
    BaseSizes["xl"] = "xl";
    BaseSizes["2xl"] = "2xl";
    BaseSizes["3xl"] = "3xl";
    BaseSizes["4xl"] = "4xl";
})(BaseSizes || (BaseSizes = {}));
var DeviceSizes;
(function (DeviceSizes) {
    DeviceSizes["sm"] = "Sm";
    DeviceSizes["md"] = "Md";
    DeviceSizes["lg"] = "Lg";
    DeviceSizes["xl"] = "Xl";
    DeviceSizes["xl2"] = "_2xl";
})(DeviceSizes || (DeviceSizes = {}));

const Grid = (_a) => {
    var { children = null, className = '', hasGutter, span = null } = _a, props = __rest(_a, ["children", "className", "hasGutter", "span"]);
    const classes = [styles$A.grid, span && styles$A.modifiers[`all_${span}Col`]];
    Object.entries(DeviceSizes).forEach(([propKey, gridSpanModifier]) => {
        const key = propKey;
        const propValue = props[key];
        if (propValue) {
            classes.push(styles$A.modifiers[`all_${propValue}ColOn${gridSpanModifier}`]);
        }
        delete props[key];
    });
    return (react.createElement("div", Object.assign({ className: css(...classes, hasGutter && styles$A.modifiers.gutter, className) }, props), children));
};
Grid.displayName = 'Grid';

const GridItem = (_a) => {
    var { children = null, className = '', span = null, rowSpan = null, offset = null } = _a, props = __rest(_a, ["children", "className", "span", "rowSpan", "offset"]);
    const classes = [
        styles$A.gridItem,
        span && styles$A.modifiers[`${span}Col`],
        rowSpan && styles$A.modifiers[`${rowSpan}Row`],
        offset && styles$A.modifiers[`offset_${offset}Col`]
    ];
    Object.entries(DeviceSizes).forEach(([propKey, classModifier]) => {
        const key = propKey;
        const rowSpanKey = `${key}RowSpan`;
        const offsetKey = `${key}Offset`;
        const spanValue = props[key];
        const rowSpanValue = props[rowSpanKey];
        const offsetValue = props[offsetKey];
        if (spanValue) {
            classes.push(styles$A.modifiers[`${spanValue}ColOn${classModifier}`]);
        }
        if (rowSpanValue) {
            classes.push(styles$A.modifiers[`${rowSpanValue}RowOn${classModifier}`]);
        }
        if (offsetValue) {
            classes.push(styles$A.modifiers[`offset_${offsetValue}ColOn${classModifier}`]);
        }
        delete props[key];
        delete props[rowSpanKey];
        delete props[offsetKey];
    });
    return (react.createElement("div", Object.assign({ className: css(...classes, className) }, props), children));
};
GridItem.displayName = 'GridItem';

var level = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "level": "pf-l-level",
  "modifiers": {
    "gutter": "pf-m-gutter"
  }
};
});

var styles$B = /*@__PURE__*/getDefaultExportFromCjs(level);

const Level = (_a) => {
    var { hasGutter, className = '', children = null } = _a, props = __rest(_a, ["hasGutter", "className", "children"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$B.level, hasGutter && styles$B.modifiers.gutter, className) }), children));
};
Level.displayName = 'Level';

const LevelItem = (_a) => {
    var { children = null } = _a, props = __rest(_a, ["children"]);
    return (react.createElement("div", Object.assign({}, props), children));
};
LevelItem.displayName = 'LevelItem';

var split = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "wrap": "pf-m-wrap",
    "fill": "pf-m-fill",
    "gutter": "pf-m-gutter"
  },
  "split": "pf-l-split",
  "splitItem": "pf-l-split__item"
};
});

var styles$C = /*@__PURE__*/getDefaultExportFromCjs(split);

const Split = (_a) => {
    var { hasGutter = false, className = '', children = null, component = 'div' } = _a, props = __rest(_a, ["hasGutter", "className", "children", "component"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({}, props, { className: css(styles$C.split, hasGutter && styles$C.modifiers.gutter, className) }), children));
};
Split.displayName = 'Split';

const SplitItem = (_a) => {
    var { isFilled = false, className = '', children = null } = _a, props = __rest(_a, ["isFilled", "className", "children"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$C.splitItem, isFilled && styles$C.modifiers.fill, className) }), children));
};
SplitItem.displayName = 'SplitItem';

var stack = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "fill": "pf-m-fill",
    "gutter": "pf-m-gutter"
  },
  "stack": "pf-l-stack",
  "stackItem": "pf-l-stack__item"
};
});

var styles$D = /*@__PURE__*/getDefaultExportFromCjs(stack);

const Stack = (_a) => {
    var { hasGutter = false, className = '', children = null, component = 'div' } = _a, props = __rest(_a, ["hasGutter", "className", "children", "component"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({}, props, { className: css(styles$D.stack, hasGutter && styles$D.modifiers.gutter, className) }), children));
};
Stack.displayName = 'Stack';

const StackItem = (_a) => {
    var { isFilled = false, className = '', children = null } = _a, props = __rest(_a, ["isFilled", "className", "children"]);
    return (react.createElement("div", Object.assign({}, props, { className: css(styles$D.stackItem, isFilled && styles$D.modifiers.fill, className) }), children));
};
StackItem.displayName = 'StackItem';

export { ActionGroup, Alert, AlertActionCloseButton, AlertActionLink, AlertGroup, AlertVariant, Avatar, Badge, Brand, Breadcrumb, BreadcrumbItem, Card, CardActions, CardBody, CardFooter, CardHeader, CardTitle, Checkbox, Chip, ChipGroup, ClipboardCopy, ContextSelector, ContextSelectorItem, DataList, DataListAction, DataListCell, DataListItem, DataListItemCells, DataListItemRow, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, DropdownToggle, EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateSecondaryActions, ExpandableSection, FileUpload, Flex, FlexItem, Form, FormGroup, Gallery, GalleryItem, Grid, GridItem, InputGroup, JumpLinks, JumpLinksItem, Label, Level, LevelItem, List, ListItem, ListVariant, Modal, ModalVariant, Nav, NavGroup, NavItem, NavList, NumberInput, Page, PageHeader, PageHeaderTools, PageHeaderToolsGroup, PageHeaderToolsItem, PageSection, PageSectionVariants, PageSidebar, Pagination, Select, SelectGroup, SelectOption, SelectVariant, Split, SplitItem, Stack, StackItem, Switch, Tab, TabContent, TabTitleText, Tabs, Text, TextArea, TextContent, TextInput, TextVariants, Toolbar, ToolbarContent, ToolbarItem, Wizard, WizardContextConsumer, WizardFooter };
