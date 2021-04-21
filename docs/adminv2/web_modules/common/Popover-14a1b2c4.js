import { _ as __rest, c as createIcon } from './check-icon-f0a4273c.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule } from './_commonjsHelpers-2c0027bd.js';
import { r as react } from './index-9e3d5f03.js';
import { r as reactDom } from './index-ceff71b8.js';

/** Joins args into a className string
 *
 * @param {any} args list of objects, string, or arrays to reduce
 */
function css(...args) {
    // Adapted from https://github.com/JedWatson/classnames/blob/master/index.js
    const classes = [];
    const hasOwn = {}.hasOwnProperty;
    args.filter(Boolean).forEach((arg) => {
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            const inner = css(...arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
}

const KEY_CODES = { ARROW_UP: 38, ARROW_DOWN: 40, ESCAPE_KEY: 27, TAB: 9, ENTER: 13, SPACE: 32 };
const KEYHANDLER_DIRECTION = { UP: 'up', DOWN: 'down', RIGHT: 'right', LEFT: 'left' };
var ValidatedOptions;
(function (ValidatedOptions) {
    ValidatedOptions["success"] = "success";
    ValidatedOptions["error"] = "error";
    ValidatedOptions["warning"] = "warning";
    ValidatedOptions["default"] = "default";
})(ValidatedOptions || (ValidatedOptions = {}));

/*!
* tabbable 5.1.5
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  while (node) {
    if (getComputedStyle(node).display === 'none') {
      return true;
    }

    node = node.parentElement;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
};

/*!
* focus-trap 6.2.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{ firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable(container);

      if (tabbableNodes.length > 0) {
        return {
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (config.clickOutsideDeactivates) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || e.target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = e.target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      if (e.shiftKey) {
        var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
          var firstTabbableNode = _ref.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
          var lastTabbableNode = _ref2.lastTabbableNode;
          return e.target === lastTabbableNode;
        });

        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (config.clickOutsideDeactivates) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

      if (onActivate) {
        onActivate();
      }

      addListeners();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay(function () {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }

      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};

class FocusTrap extends react.Component {
    constructor(props) {
        super(props);
        this.divRef = react.createRef();
        if (typeof document !== 'undefined') {
            this.previouslyFocusedElement = document.activeElement;
        }
    }
    componentDidMount() {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        this.focusTrap = createFocusTrap(this.divRef.current, Object.assign(Object.assign({}, this.props.focusTrapOptions), { returnFocusOnDeactivate: false }));
        if (this.props.active) {
            this.focusTrap.activate();
        }
        if (this.props.paused) {
            this.focusTrap.pause();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.active && !this.props.active) {
            this.focusTrap.deactivate();
        }
        else if (!prevProps.active && this.props.active) {
            this.focusTrap.activate();
        }
        if (prevProps.paused && !this.props.paused) {
            this.focusTrap.unpause();
        }
        else if (!prevProps.paused && this.props.paused) {
            this.focusTrap.pause();
        }
    }
    componentWillUnmount() {
        this.focusTrap.deactivate();
        if (this.props.focusTrapOptions.returnFocusOnDeactivate !== false &&
            this.previouslyFocusedElement &&
            this.previouslyFocusedElement.focus) {
            this.previouslyFocusedElement.focus({ preventScroll: this.props.preventScrollOnDeactivate });
        }
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { children, className, focusTrapOptions, active, paused, preventScrollOnDeactivate } = _a, rest = __rest(_a, ["children", "className", "focusTrapOptions", "active", "paused", "preventScrollOnDeactivate"]);
        return (react.createElement("div", Object.assign({ ref: this.divRef, className: className }, rest), children));
    }
}
FocusTrap.displayName = 'FocusTrap';
FocusTrap.defaultProps = {
    active: true,
    paused: false,
    focusTrapOptions: {},
    preventScrollOnDeactivate: false
};

let uid = 0;
const ouiaPrefix = 'OUIA-Generated-';
const ouiaIdByRoute = {};
/** Get props to conform to OUIA spec
 *
 * For functional components, use the useOUIAProps function instead
 *
 * In class based components, create a state variable ouiaStateId to create a static generated ID:
 * state = {
 *  ouiaStateId: getDefaultOUIAId(Chip.displayName)
 * }
 * This generated ID should remain alive as long as the component is not unmounted.
 *
 * Then add the attributes to the component
 * {...getOUIAProps('OverflowChip', this.props.ouiaId !== undefined ? this.props.ouiaId : this.state.ouiaStateId)}
 *
 * @param {string} componentType OUIA component type
 * @param {number|string} id OUIA component id
 * @param {boolean} ouiaSafe false if in animation
 */
function getOUIAProps(componentType, id, ouiaSafe = true) {
    return {
        'data-ouia-component-type': `PF4/${componentType}`,
        'data-ouia-safe': ouiaSafe,
        'data-ouia-component-id': id
    };
}
/**
 * Hooks version of the getOUIAProps function that also memoizes the generated ID
 * Can only be used in functional components
 *
 * @param {string} componentType OUIA component type
 * @param {number|string} id OUIA component id
 * @param {boolean} ouiaSafe false if in animation
 * @param {string} variant Optional variant to add to the generated ID
 */
const useOUIAProps = (componentType, id, ouiaSafe = true, variant) => ({
    'data-ouia-component-type': `PF4/${componentType}`,
    'data-ouia-safe': ouiaSafe,
    'data-ouia-component-id': useOUIAId(componentType, id, variant)
});
/**
 * Returns the ID or the memoized generated ID
 *
 * @param {string} componentType OUIA component type
 * @param {number|string} id OUIA component id
 * @param {string} variant Optional variant to add to the generated ID
 */
const useOUIAId = (componentType, id, variant) => {
    if (id !== undefined) {
        return id;
    }
    return react.useMemo(() => getDefaultOUIAId(componentType, variant), [componentType, variant]);
};
/**
 * Returns a generated id based on the URL location
 *
 * @param {string} componentType OUIA component type
 * @param {string} variant Optional variant to add to the generated ID
 */
function getDefaultOUIAId(componentType, variant) {
    /*
    ouiaIdByRoute = {
      [route+componentType]: [number]
    }
    */
    try {
        const key = `${window.location.href}-${componentType}-${variant || ''}`;
        if (!ouiaIdByRoute[key]) {
            ouiaIdByRoute[key] = 0;
        }
        return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++ouiaIdByRoute[key]}`;
    }
    catch (exception) {
        return `${ouiaPrefix}${componentType}-${variant ? `${variant}-` : ''}${++uid}`;
    }
}

/**
 * @param {string} input - String to capitalize first letter
 */
function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
}
/**
 * @param {string} prefix - String to prefix ID with
 */
function getUniqueId(prefix = 'pf') {
    const uid = new Date().getTime() +
        Math.random()
            .toString(36)
            .slice(2);
    return `${prefix}-${uid}`;
}
/**
 * @param { any } this - "This" reference
 * @param { Function } func - Function to debounce
 * @param { number } wait - Debounce amount
 */
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
/** This function returns whether or not an element is within the viewable area of a container. If partial is true,
 * then this function will return true even if only part of the element is in view.
 *
 * @param {HTMLElement} container  The container to check if the element is in view of.
 * @param {HTMLElement} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 *
 * @returns { boolean } True if the component is in View.
 */
function isElementInView(container, element, partial) {
    if (!container || !element) {
        return false;
    }
    const containerBounds = container.getBoundingClientRect();
    const elementBounds = element.getBoundingClientRect();
    const containerBoundsLeft = Math.floor(containerBounds.left);
    const containerBoundsRight = Math.floor(containerBounds.right);
    const elementBoundsLeft = Math.floor(elementBounds.left);
    const elementBoundsRight = Math.floor(elementBounds.right);
    // Check if in view
    const isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
    const isPartiallyInView = partial &&
        ((elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft) ||
            (elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight));
    // Return outcome
    return isTotallyInView || isPartiallyInView;
}
/** Interpolates a parameterized templateString using values from a templateVars object.
 * The templateVars object should have keys and values which match the templateString's parameters.
 * Example:
 *    const templateString: 'My name is ${firstName} ${lastName}';
 *    const templateVars: {
 *      firstName: 'Jon'
 *      lastName: 'Dough'
 *    };
 *    const result = fillTemplate(templateString, templateVars);
 *    // "My name is Jon Dough"
 *
 * @param {string} templateString  The string passed by the consumer
 * @param {object} templateVars The variables passed to the string
 *
 * @returns {string} The template string literal result
 */
function fillTemplate(templateString, templateVars) {
    return templateString.replace(/\${(.*?)}/g, (_, match) => templateVars[match] || '');
}
/**
 * This function allows for keyboard navigation through dropdowns. The custom argument is optional.
 *
 * @param {number} index The index of the element you're on
 * @param {number} innerIndex Inner index number
 * @param {string} position The orientation of the dropdown
 * @param {string[]} refsCollection Array of refs to the items in the dropdown
 * @param {object[]} kids Array of items in the dropdown
 * @param {boolean} [custom] Allows for handling of flexible content
 */
function keyHandler(index, innerIndex, position, refsCollection, kids, custom = false) {
    if (!Array.isArray(kids)) {
        return;
    }
    const isMultiDimensional = refsCollection.filter(ref => ref)[0].constructor === Array;
    let nextIndex = index;
    let nextInnerIndex = innerIndex;
    if (position === 'up') {
        if (index === 0) {
            // loop back to end
            nextIndex = kids.length - 1;
        }
        else {
            nextIndex = index - 1;
        }
    }
    else if (position === 'down') {
        if (index === kids.length - 1) {
            // loop back to beginning
            nextIndex = 0;
        }
        else {
            nextIndex = index + 1;
        }
    }
    else if (position === 'left') {
        if (innerIndex === 0) {
            nextInnerIndex = refsCollection[index].length - 1;
        }
        else {
            nextInnerIndex = innerIndex - 1;
        }
    }
    else if (position === 'right') {
        if (innerIndex === refsCollection[index].length - 1) {
            nextInnerIndex = 0;
        }
        else {
            nextInnerIndex = innerIndex + 1;
        }
    }
    if (refsCollection[nextIndex] === null ||
        refsCollection[nextIndex] === undefined ||
        (isMultiDimensional &&
            (refsCollection[nextIndex][nextInnerIndex] === null || refsCollection[nextIndex][nextInnerIndex] === undefined))) {
        keyHandler(nextIndex, nextInnerIndex, position, refsCollection, kids, custom);
    }
    else if (custom) {
        if (refsCollection[nextIndex].focus) {
            refsCollection[nextIndex].focus();
        }
        // eslint-disable-next-line react/no-find-dom-node
        const element = reactDom.findDOMNode(refsCollection[nextIndex]);
        element.focus();
    }
    else if (position !== 'tab') {
        if (isMultiDimensional) {
            refsCollection[nextIndex][nextInnerIndex].focus();
        }
        else {
            refsCollection[nextIndex].focus();
        }
    }
}
/** This function is a helper for keyboard navigation through dropdowns.
 *
 * @param {number} index The index of the element you're on
 * @param {string} position The orientation of the dropdown
 * @param {string[]} collection Array of refs to the items in the dropdown
 */
function getNextIndex(index, position, collection) {
    let nextIndex;
    if (position === 'up') {
        if (index === 0) {
            // loop back to end
            nextIndex = collection.length - 1;
        }
        else {
            nextIndex = index - 1;
        }
    }
    else if (index === collection.length - 1) {
        // loop back to beginning
        nextIndex = 0;
    }
    else {
        nextIndex = index + 1;
    }
    if (collection[nextIndex] === undefined || collection[nextIndex][0] === null) {
        return getNextIndex(nextIndex, position, collection);
    }
    else {
        return nextIndex;
    }
}
/** This function is a helper for pluralizing strings.
 *
 * @param {number} i The quantity of the string you want to pluralize
 * @param {string} singular The singular version of the string
 * @param {string} plural The change to the string that should occur if the quantity is not equal to 1.
 *                 Defaults to adding an 's'.
 */
function pluralize(i, singular, plural) {
    if (!plural) {
        plural = `${singular}s`;
    }
    return `${i || 0} ${i === 1 ? singular : plural}`;
}
/**
 * This function is a helper for turning arrays of breakpointMod objects for data toolbar and flex into classes
 *
 * @param {object} mods The modifiers object
 * @param {any} styles The appropriate styles object for the component
 */
const formatBreakpointMods = (mods, styles) => Object.entries(mods || {})
    .map(([breakpoint, mod]) => `${mod}${breakpoint !== 'default' ? `-on-${breakpoint}` : ''}`)
    .map(toCamel)
    .map(mod => mod.replace(/-?(\dxl)/gi, (_res, group) => `_${group}`))
    .map(modifierKey => styles.modifiers[modifierKey])
    .filter(Boolean)
    .join(' ');
const camelize = (s) => s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
/**
 *
 * @param {string} s string to make camelCased
 */
const toCamel = (s) => s.replace(/([-_][a-z])/gi, camelize);
/**
 * Copied from exenv
 */
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Calculate the width of the text
 * Example:
 * getTextWidth('my text', node)
 *
 * @param {string} text The text to calculate the width for
 * @param {HTMLElement} node The HTML element
 */
const getTextWidth = (text, node) => {
    const computedStyle = getComputedStyle(node);
    // Firefox returns the empty string for .font, so this function creates the .font property manually
    const getFontFromComputedStyle = () => {
        let computedFont = '';
        // Firefox uses percentages for font-stretch, but Canvas does not accept percentages
        // so convert to keywords, as listed at:
        // https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
        const fontStretchLookupTable = {
            '50%': 'ultra-condensed',
            '62.5%': 'extra-condensed',
            '75%': 'condensed',
            '87.5%': 'semi-condensed',
            '100%': 'normal',
            '112.5%': 'semi-expanded',
            '125%': 'expanded',
            '150%': 'extra-expanded',
            '200%': 'ultra-expanded'
        };
        // If the retrieved font-stretch percentage isn't found in the lookup table, use
        // 'normal' as a last resort.
        let fontStretch;
        if (computedStyle.fontStretch in fontStretchLookupTable) {
            fontStretch = fontStretchLookupTable[computedStyle.fontStretch];
        }
        else {
            fontStretch = 'normal';
        }
        computedFont =
            computedStyle.fontStyle +
                ' ' +
                computedStyle.fontVariant +
                ' ' +
                computedStyle.fontWeight +
                ' ' +
                fontStretch +
                ' ' +
                computedStyle.fontSize +
                '/' +
                computedStyle.lineHeight +
                ' ' +
                computedStyle.fontFamily;
        return computedFont;
    };
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = computedStyle.font || getFontFromComputedStyle();
    return context.measureText(text).width;
};
/**
 * Get the inner dimensions of an element
 *
 * @param {HTMLElement} node HTML element to calculate the inner dimensions for
 */
const innerDimensions = (node) => {
    const computedStyle = getComputedStyle(node);
    let width = node.clientWidth; // width with padding
    let height = node.clientHeight; // height with padding
    height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    return { height, width };
};
/**
 * This function is a helper for truncating text content on the left, leaving the right side of the content in view
 *
 * @param {HTMLElement} node HTML element
 * @param {string} value The original text value
 */
const trimLeft = (node, value) => {
    const availableWidth = innerDimensions(node).width;
    let newValue = value;
    if (getTextWidth(value, node) > availableWidth) {
        // we have text overflow, trim the text to the left and add ... in the front until it fits
        while (getTextWidth(`...${newValue}`, node) > availableWidth) {
            newValue = newValue.substring(1);
        }
        // replace text with our truncated text
        if (node.value) {
            node.value = `...${newValue}`;
        }
        else {
            node.innerText = `...${newValue}`;
        }
    }
    else {
        if (node.value) {
            node.value = value;
        }
        else {
            node.innerText = value;
        }
    }
};
/**
 * @param {string[]} events - Operations to prevent when disabled
 */
const preventedEvents = (events) => events.reduce((handlers, eventToPrevent) => (Object.assign(Object.assign({}, handlers), { [eventToPrevent]: (event) => {
        event.preventDefault();
    } })), {});

var title = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "4xl": "pf-m-4xl",
    "3xl": "pf-m-3xl",
    "2xl": "pf-m-2xl",
    "xl": "pf-m-xl",
    "lg": "pf-m-lg",
    "md": "pf-m-md",
    "overpassFont": "pf-m-overpass-font"
  },
  "title": "pf-c-title"
};
});

var styles = /*@__PURE__*/getDefaultExportFromCjs(title);

var TitleSizes;
(function (TitleSizes) {
    TitleSizes["md"] = "md";
    TitleSizes["lg"] = "lg";
    TitleSizes["xl"] = "xl";
    TitleSizes["2xl"] = "2xl";
    TitleSizes["3xl"] = "3xl";
    TitleSizes["4xl"] = "4xl";
})(TitleSizes || (TitleSizes = {}));
var headingLevelSizeMap;
(function (headingLevelSizeMap) {
    headingLevelSizeMap["h1"] = "2xl";
    headingLevelSizeMap["h2"] = "xl";
    headingLevelSizeMap["h3"] = "lg";
    headingLevelSizeMap["h4"] = "md";
    headingLevelSizeMap["h5"] = "md";
    headingLevelSizeMap["h6"] = "md";
})(headingLevelSizeMap || (headingLevelSizeMap = {}));
const Title = (_a) => {
    var { className = '', children = '', headingLevel: HeadingLevel, size = headingLevelSizeMap[HeadingLevel] } = _a, props = __rest(_a, ["className", "children", "headingLevel", "size"]);
    return (react.createElement(HeadingLevel, Object.assign({}, props, { className: css(styles.title, size && styles.modifiers[size], className) }), children));
};
Title.displayName = 'Title';

var button = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "buttonIcon": "pf-c-button__icon",
  "buttonProgress": "pf-c-button__progress",
  "modifiers": {
    "active": "pf-m-active",
    "block": "pf-m-block",
    "small": "pf-m-small",
    "primary": "pf-m-primary",
    "displayLg": "pf-m-display-lg",
    "secondary": "pf-m-secondary",
    "tertiary": "pf-m-tertiary",
    "link": "pf-m-link",
    "danger": "pf-m-danger",
    "warning": "pf-m-warning",
    "inline": "pf-m-inline",
    "control": "pf-m-control",
    "expanded": "pf-m-expanded",
    "plain": "pf-m-plain",
    "disabled": "pf-m-disabled",
    "ariaDisabled": "pf-m-aria-disabled",
    "progress": "pf-m-progress",
    "inProgress": "pf-m-in-progress",
    "start": "pf-m-start",
    "end": "pf-m-end",
    "overpassFont": "pf-m-overpass-font"
  },
  "spinner": "pf-c-spinner"
};
});

var buttonStyles = /*@__PURE__*/getDefaultExportFromCjs(button);

var spinner = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "sm": "pf-m-sm",
    "md": "pf-m-md",
    "lg": "pf-m-lg",
    "xl": "pf-m-xl"
  },
  "spinner": "pf-c-spinner",
  "spinnerClipper": "pf-c-spinner__clipper",
  "spinnerLeadBall": "pf-c-spinner__lead-ball",
  "spinnerPath": "pf-c-spinner__path",
  "spinnerTailBall": "pf-c-spinner__tail-ball"
};
});

var styles$1 = /*@__PURE__*/getDefaultExportFromCjs(spinner);

var spinnerSize;
(function (spinnerSize) {
    spinnerSize["sm"] = "sm";
    spinnerSize["md"] = "md";
    spinnerSize["lg"] = "lg";
    spinnerSize["xl"] = "xl";
})(spinnerSize || (spinnerSize = {}));
const Spinner = (_a) => {
    var { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '', size = 'xl', 'aria-valuetext': ariaValueText = 'Loading...', isSVG = false, diameter } = _a, props = __rest(_a, ["className", "size", 'aria-valuetext', "isSVG", "diameter"]);
    const Component = isSVG ? 'svg' : 'span';
    return (react.createElement(Component, Object.assign({ className: css(styles$1.spinner, styles$1.modifiers[size], className), role: "progressbar", "aria-valuetext": ariaValueText }, (isSVG && { viewBox: '0 0 100 100' }), (diameter && { style: { '--pf-c-spinner--diameter': diameter } }), props), isSVG ? (react.createElement("circle", { className: styles$1.spinnerPath, cx: "50", cy: "50", r: "45", fill: "none" })) : (react.createElement(react.Fragment, null,
        react.createElement("span", { className: css(styles$1.spinnerClipper) }),
        react.createElement("span", { className: css(styles$1.spinnerLeadBall) }),
        react.createElement("span", { className: css(styles$1.spinnerTailBall) })))));
};
Spinner.displayName = 'Spinner';

var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["primary"] = "primary";
    ButtonVariant["secondary"] = "secondary";
    ButtonVariant["tertiary"] = "tertiary";
    ButtonVariant["danger"] = "danger";
    ButtonVariant["warning"] = "warning";
    ButtonVariant["link"] = "link";
    ButtonVariant["plain"] = "plain";
    ButtonVariant["control"] = "control";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["button"] = "button";
    ButtonType["submit"] = "submit";
    ButtonType["reset"] = "reset";
})(ButtonType || (ButtonType = {}));
const Button = (_a) => {
    var { children = null, className = '', component = 'button', isActive = false, isBlock = false, isDisabled = false, isAriaDisabled = false, isLoading = null, spinnerAriaValueText, isSmall = false, isLarge = false, inoperableEvents = ['onClick', 'onKeyPress'], isInline = false, type = ButtonType.button, variant = ButtonVariant.primary, iconPosition = 'left', 'aria-label': ariaLabel = null, icon = null, ouiaId, ouiaSafe = true, tabIndex = null } = _a, props = __rest(_a, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isAriaDisabled", "isLoading", "spinnerAriaValueText", "isSmall", "isLarge", "inoperableEvents", "isInline", "type", "variant", "iconPosition", 'aria-label', "icon", "ouiaId", "ouiaSafe", "tabIndex"]);
    const ouiaProps = useOUIAProps(Button.displayName, ouiaId, ouiaSafe, variant);
    const Component = component;
    const isButtonElement = Component === 'button';
    const isInlineSpan = isInline && Component === 'span';
    if (isAriaDisabled && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('You are using a beta component feature (isAriaDisabled). These api parts are subject to change in the future.');
    }
    const preventedEvents = inoperableEvents.reduce((handlers, eventToPrevent) => (Object.assign(Object.assign({}, handlers), { [eventToPrevent]: (event) => {
            event.preventDefault();
        } })), {});
    const getDefaultTabIdx = () => {
        if (isDisabled) {
            return isButtonElement ? null : -1;
        }
        else if (isAriaDisabled) {
            return null;
        }
        else if (isInlineSpan) {
            return 0;
        }
    };
    return (react.createElement(Component, Object.assign({}, props, (isAriaDisabled ? preventedEvents : null), { "aria-disabled": isDisabled || isAriaDisabled, "aria-label": ariaLabel, className: css(buttonStyles.button, buttonStyles.modifiers[variant], isBlock && buttonStyles.modifiers.block, isDisabled && buttonStyles.modifiers.disabled, isAriaDisabled && buttonStyles.modifiers.ariaDisabled, isActive && buttonStyles.modifiers.active, isInline && variant === ButtonVariant.link && buttonStyles.modifiers.inline, isLoading !== null && buttonStyles.modifiers.progress, isLoading && buttonStyles.modifiers.inProgress, isSmall && buttonStyles.modifiers.small, isLarge && buttonStyles.modifiers.displayLg, className), disabled: isButtonElement ? isDisabled : null, tabIndex: tabIndex !== null ? tabIndex : getDefaultTabIdx(), type: isButtonElement || isInlineSpan ? type : null, role: isInlineSpan ? 'button' : null }, ouiaProps),
        isLoading && (react.createElement("span", { className: css(buttonStyles.buttonProgress) },
            react.createElement(Spinner, { size: spinnerSize.md, "aria-valuetext": spinnerAriaValueText }))),
        variant !== ButtonVariant.plain && icon && iconPosition === 'left' && (react.createElement("span", { className: css(buttonStyles.buttonIcon, buttonStyles.modifiers.start) }, icon)),
        children,
        variant !== ButtonVariant.plain && icon && iconPosition === 'right' && (react.createElement("span", { className: css(buttonStyles.buttonIcon, buttonStyles.modifiers.end) }, icon))));
};
Button.displayName = 'Button';

const TimesIconConfig = {
  name: 'TimesIcon',
  height: 512,
  width: 352,
  svgPath: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  yOffset: 0,
  xOffset: 0,
};

const TimesIcon = createIcon(TimesIconConfig);

var tooltip = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "modifiers": {
    "top": "pf-m-top",
    "bottom": "pf-m-bottom",
    "left": "pf-m-left",
    "right": "pf-m-right",
    "textAlignLeft": "pf-m-text-align-left"
  },
  "tooltip": "pf-c-tooltip",
  "tooltipArrow": "pf-c-tooltip__arrow",
  "tooltipContent": "pf-c-tooltip__content"
};
});

var styles$2 = /*@__PURE__*/getDefaultExportFromCjs(tooltip);

const TooltipContent = (_a) => {
    var { className, children, isLeftAligned } = _a, props = __rest(_a, ["className", "children", "isLeftAligned"]);
    return (react.createElement("div", Object.assign({ className: css(styles$2.tooltipContent, isLeftAligned && styles$2.modifiers.textAlignLeft, className) }, props), children));
};
TooltipContent.displayName = 'TooltipContent';

const TooltipArrow = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return react.createElement("div", Object.assign({ className: css(styles$2.tooltipArrow, className) }, props));
};
TooltipArrow.displayName = 'TooltipArrow';

const c_tooltip_MaxWidth = {
  "name": "--pf-c-tooltip--MaxWidth",
  "value": "18.75rem",
  "var": "var(--pf-c-tooltip--MaxWidth)"
};

/**
 * This component wraps any ReactNode and finds its ref
 * It has to be a class for findDOMNode to work
 * Ideally, all components used as triggers/toggles are either:
 * - class based components we can assign our own ref to
 * - functional components that have forwardRef implemented
 * However, there is no guarantee that is what will get passed in as trigger/toggle in the case of tooltips and popovers
 */
class FindRefWrapper extends react.Component {
    componentDidMount() {
        // eslint-disable-next-line react/no-find-dom-node
        const root = reactDom.findDOMNode(this);
        this.props.onFoundRef(root);
    }
    render() {
        return this.props.children || null;
    }
}
FindRefWrapper.displayName = 'FindRefWrapper';

/**
 * @param element
 */
function getBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
    };
}

// @ts-nocheck
/* :: import type { Window } from '../types'; */
/* :: declare function getWindow(node: Node | Window): Window; */
/**
 * @param node
 */
function getWindow(node) {
    if (node.toString() !== '[object Window]') {
        const ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
    }
    return node;
}

// @ts-nocheck
/**
 * @param node
 */
function getWindowScroll(node) {
    const win = getWindow(node);
    const scrollLeft = win.pageXOffset;
    const scrollTop = win.pageYOffset;
    return {
        scrollLeft,
        scrollTop
    };
}

// @ts-nocheck
/* :: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */
/**
 * @param node
 */
function isElement(node) {
    const OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
/* :: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */
/**
 * @param node
 */
function isHTMLElement(node) {
    const OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}

// @ts-nocheck
/**
 * @param element
 */
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

// @ts-nocheck
/**
 * @param node
 */
function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
    }
    else {
        return getHTMLElementScroll(node);
    }
}

/**
 * @param element
 */
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}

// @ts-nocheck
/**
 * @param element
 */
function getDocumentElement(element) {
    // $FlowFixMe: assume body is always available
    return (isElement(element) ? element.ownerDocument : element.document).documentElement;
}

// @ts-nocheck
/**
 * @param element
 */
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// @ts-nocheck
/**
 * @param element
 */
function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
}

// @ts-nocheck
/**
 * @param element
 */
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
/**
 * @param elementOrVirtualElement
 * @param offsetParent
 * @param isFixed
 */
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed = false) {
    const documentElement = getDocumentElement(offsetParent);
    const rect = getBoundingClientRect(elementOrVirtualElement);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    let scroll = { scrollLeft: 0, scrollTop: 0 };
    let offsets = { x: 0, y: 0 };
    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
        if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
            isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        }
        else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
        }
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
/**
 * @param element
 */
function getLayoutRect(element) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    };
}

// @ts-nocheck
/**
 * @param element
 */
function getParentNode(element) {
    if (getNodeName(element) === 'html') {
        return element;
    }
    return (
    // $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
        element.parentNode || // DOM Element detected
        // $FlowFixMe: need a better way to handle this...
        element.host || // ShadowRoot detected
        // $FlowFixMe: HTMLElement is a Node
        getDocumentElement(element) // fallback
    );
}

// @ts-nocheck
/**
 * @param node
 */
function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
        // $FlowFixMe: assume body is always available
        return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
    }
    return getScrollParent(getParentNode(node));
}

// @ts-nocheck
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
/**
 * @param element
 * @param list
 */
function listScrollParents(element, list = []) {
    const scrollParent = getScrollParent(element);
    const isBody = getNodeName(scrollParent) === 'body';
    const win = getWindow(scrollParent);
    const target = isBody
        ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : [])
        : scrollParent;
    const updatedList = list.concat(target);
    return isBody
        ? updatedList // $FlowFixMe: isBody tells us target will be an HTMLElement here
        : updatedList.concat(listScrollParents(getParentNode(target)));
}

// @ts-nocheck
/**
 * @param element
 */
function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

// @ts-nocheck
/**
 * @param element
 */
function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle$1(element).position === 'fixed') {
        return null;
    }
    const offsetParent = element.offsetParent;
    if (offsetParent) {
        const html = getDocumentElement(offsetParent);
        if (getNodeName(offsetParent) === 'body' &&
            getComputedStyle$1(offsetParent).position === 'static' &&
            getComputedStyle$1(html).position !== 'static') {
            return html;
        }
    }
    return offsetParent;
}
// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
/**
 * @param element
 */
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
        const css = getComputedStyle$1(currentNode);
        // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        if (css.transform !== 'none' || css.perspective !== 'none' || (css.willChange && css.willChange !== 'auto')) {
            return currentNode;
        }
        else {
            currentNode = currentNode.parentNode;
        }
    }
    return null;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
/**
 * @param element
 */
function getOffsetParent(element) {
    const window = getWindow(element);
    let offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
        offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static') {
        return window;
    }
    return offsetParent || getContainingBlock(element) || window;
}

// @ts-nocheck
const top = 'top';
const bottom = 'bottom';
const right = 'right';
const left = 'left';
const auto = 'auto';
const basePlacements = [top, bottom, right, left];
const start = 'start';
const end = 'end';
const clippingParents = 'clippingParents';
const viewport = 'viewport';
const popper = 'popper';
const reference = 'reference';
const variationPlacements = basePlacements.reduce((acc, placement) => acc.concat([`${placement}-${start}`, `${placement}-${end}`]), []);
const placements = [...basePlacements, auto].reduce((acc, placement) => acc.concat([placement, `${placement}-${start}`, `${placement}-${end}`]), []);
// modifiers that need to read the DOM
const beforeRead = 'beforeRead';
const read = 'read';
const afterRead = 'afterRead';
// pure-logic modifiers
const beforeMain = 'beforeMain';
const main = 'main';
const afterMain = 'afterMain';
// modifier with the purpose to write to the DOM (or write into a framework state)
const beforeWrite = 'beforeWrite';
const write = 'write';
const afterWrite = 'afterWrite';
const modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

// source: https://stackoverflow.com/questions/49875255
/**
 * @param modifiers
 */
function order(modifiers) {
    const map = new Map();
    const visited = new Set();
    const result = [];
    modifiers.forEach(modifier => {
        map.set(modifier.name, modifier);
    });
    // On visiting object, check for its dependencies and visit them recursively
    /**
     * @param modifier
     */
    function sort(modifier) {
        visited.add(modifier.name);
        const requires = [...(modifier.requires || []), ...(modifier.requiresIfExists || [])];
        requires.forEach(dep => {
            if (!visited.has(dep)) {
                const depModifier = map.get(dep);
                if (depModifier) {
                    sort(depModifier);
                }
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(modifier => {
        if (!visited.has(modifier.name)) {
            // check for visited object
            sort(modifier);
        }
    });
    return result;
}
/**
 * @param modifiers
 */
function orderModifiers(modifiers) {
    // order based on dependencies
    const orderedModifiers = order(modifiers);
    // order based on phase
    return modifierPhases.reduce((acc, phase) => acc.concat(orderedModifiers.filter(modifier => modifier.phase === phase)), []);
}

// @ts-nocheck
/**
 * @param fn
 */
function debounce$1(fn) {
    let pending;
    return () => {
        if (!pending) {
            pending = new Promise(resolve => {
                Promise.resolve().then(() => {
                    pending = undefined;
                    resolve(fn());
                });
            });
        }
        return pending;
    };
}

/**
 * @param placement
 */
function getBasePlacement(placement) {
    return placement.split('-')[0];
}

/**
 * @param modifiers
 */
function mergeByName(modifiers) {
    const merged = modifiers.reduce((merged, current) => {
        const existing = merged[current.name];
        merged[current.name] = existing
            ? Object.assign(Object.assign(Object.assign({}, existing), current), { options: Object.assign(Object.assign({}, existing.options), current.options), data: Object.assign(Object.assign({}, existing.data), current.data) }) : current;
        return merged;
    }, {});
    // IE11 does not support Object.values
    return Object.keys(merged).map(key => merged[key]);
}

// @ts-nocheck
/**
 * @param element
 */
function getViewportRect(element) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
    };
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
/**
 * @param element
 */
function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const winScroll = getWindowScroll(element);
    const body = element.ownerDocument.body;
    const width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    const height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    let x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    const y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === 'rtl') {
        x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return { width, height, x, y };
}

// @ts-nocheck
/**
 * @param parent
 * @param child
 */
function contains(parent, child) {
    // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
    const isShadow = Boolean(child.getRootNode && child.getRootNode().host);
    // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (isShadow) {
        let next = child;
        do {
            if (next && parent.isSameNode(next)) {
                return true;
            }
            // $FlowFixMe: need a better way to handle this...
            next = next.parentNode || next.host;
        } while (next);
    }
    // Give up, the result is false
    return false;
}

/**
 * @param rect
 */
function rectToClientRect(rect) {
    return Object.assign(Object.assign({}, rect), { left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height });
}

/**
 * @param element
 */
function getInnerBoundingClientRect(element) {
    const rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
/**
 * @param element
 * @param clippingParent
 */
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport
        ? rectToClientRect(getViewportRect(element))
        : isHTMLElement(clippingParent)
            ? getInnerBoundingClientRect(clippingParent)
            : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
/**
 * @param element
 */
function getClippingParents(element) {
    const clippingParents = listScrollParents(getParentNode(element));
    const canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
        return [];
    }
    // $FlowFixMe: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(clippingParent => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body');
}
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
/**
 * @param element
 * @param boundary
 * @param rootBoundary
 */
function getClippingRect(element, boundary, rootBoundary) {
    const mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    const clippingParents = [...mainClippingParents, rootBoundary];
    const firstClippingParent = clippingParents[0];
    const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
        const rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = Math.max(rect.top, accRect.top);
        accRect.right = Math.min(rect.right, accRect.right);
        accRect.bottom = Math.min(rect.bottom, accRect.bottom);
        accRect.left = Math.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

/**
 * @param placement
 */
function getVariation(placement) {
    return placement.split('-')[1];
}

/**
 * @param placement
 */
function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

// @ts-nocheck
/**
 *
 */
function computeOffsets({ reference, element, placement }) {
    const basePlacement = placement ? getBasePlacement(placement) : null;
    const variation = placement ? getVariation(placement) : null;
    const commonX = reference.x + reference.width / 2 - element.width / 2;
    const commonY = reference.y + reference.height / 2 - element.height / 2;
    let offsets;
    switch (basePlacement) {
        case top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    const mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        switch (variation) {
            case start:
                offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
                break;
            case end:
                offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
                break;
        }
    }
    return offsets;
}

/**
 *
 */
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

/**
 * @param paddingObject
 */
function mergePaddingObject(paddingObject) {
    return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

// @ts-nocheck
/**
 * @param value
 * @param keys
 */
function expandToHashMap(value, keys) {
    return keys.reduce((hashMap, key) => {
        hashMap[key] = value;
        return hashMap;
    }, {});
}

/**
 * @param state
 * @param options
 */
function detectOverflow(state, options = {}) {
    const { placement = state.placement, boundary = clippingParents, rootBoundary = viewport, elementContext = popper, altBoundary = false, padding = 0 } = options;
    const paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    const altContext = elementContext === popper ? reference : popper;
    const referenceElement = state.elements.reference;
    const popperRect = state.rects.popper;
    const element = state.elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    const referenceClientRect = getBoundingClientRect(referenceElement);
    const popperOffsets = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement
    });
    const popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
    const elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    const overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    const offsetData = state.modifiersData.offset;
    // Offsets can be applied only to the popper element
    if (elementContext === popper && offsetData) {
        const offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(key => {
            const multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            const axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

const DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
/**
 * @param args
 */
function areValidElements(...args) {
    return !args.some(element => !(element && typeof element.getBoundingClientRect === 'function'));
}
/**
 * @param generatorOptions
 */
function popperGenerator(generatorOptions = {}) {
    const { defaultModifiers = [], defaultOptions = DEFAULT_OPTIONS } = generatorOptions;
    return function createPopper(reference, popper, options = defaultOptions) {
        let state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
            modifiersData: {},
            elements: {
                reference,
                popper
            },
            attributes: {},
            styles: {}
        };
        let effectCleanupFns = [];
        let isDestroyed = false;
        const instance = {
            state,
            setOptions(options) {
                cleanupModifierEffects();
                state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
                state.scrollParents = {
                    reference: isElement(reference)
                        ? listScrollParents(reference)
                        : reference.contextElement
                            ? listScrollParents(reference.contextElement)
                            : [],
                    popper: listScrollParents(popper)
                };
                // Orders the modifiers based on their dependencies and `phase`
                // properties
                const orderedModifiers = orderModifiers(mergeByName([...defaultModifiers, ...state.options.modifiers]));
                // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(m => m.enabled);
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate() {
                if (isDestroyed) {
                    return;
                }
                const { reference, popper } = state.elements;
                // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    return;
                }
                // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                    popper: getLayoutRect(popper)
                };
                // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement;
                // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(modifier => (state.modifiersData[modifier.name] = Object.assign({}, modifier.data)));
                for (let index = 0; index < state.orderedModifiers.length; index++) {
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    const { fn, options = {}, name } = state.orderedModifiers[index];
                    if (typeof fn === 'function') {
                        state = fn({ state, options, name, instance }) || state;
                    }
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce$1(() => new Promise(resolve => {
                instance.forceUpdate();
                resolve(state);
            })),
            destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            return instance;
        }
        instance.setOptions(options).then(state => {
            if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
            }
        });
        // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        /**
         *
         */
        function runModifierEffects() {
            state.orderedModifiers.forEach(({ name, options = {}, effect }) => {
                if (typeof effect === 'function') {
                    const cleanupFn = effect({ state, name, instance, options });
                    const noopFn = () => { };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        /**
         *
         */
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(fn => fn());
            effectCleanupFns = [];
        }
        return instance;
    };
}

const passive = { passive: true };
/**
 *
 */
function effect({ state, instance, options }) {
    const { scroll = true, resize = true } = options;
    const window = getWindow(state.elements.popper);
    const scrollParents = [...state.scrollParents.reference, ...state.scrollParents.popper];
    if (scroll) {
        scrollParents.forEach(scrollParent => {
            scrollParent.addEventListener('scroll', instance.update, passive);
        });
    }
    if (resize) {
        window.addEventListener('resize', instance.update, passive);
    }
    return () => {
        if (scroll) {
            scrollParents.forEach(scrollParent => {
                scrollParent.removeEventListener('scroll', instance.update, passive);
            });
        }
        if (resize) {
            window.removeEventListener('resize', instance.update, passive);
        }
    };
}
var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: () => { },
    effect,
    data: {}
};

/**
 *
 */
function popperOffsets({ state, name }) {
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
}
var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};

const unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
};
// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
/**
 *
 */
function roundOffsets({ x, y }) {
    const win = window;
    const dpr = win.devicePixelRatio || 1;
    return {
        x: Math.round(x * dpr) / dpr || 0,
        y: Math.round(y * dpr) / dpr || 0
    };
}
/**
 *
 */
function mapToStyles({ popper, popperRect, placement, offsets, position, gpuAcceleration, adaptive }) {
    let { x, y } = roundOffsets(offsets);
    const hasX = offsets.hasOwnProperty('x');
    const hasY = offsets.hasOwnProperty('y');
    let sideX = left;
    let sideY = top;
    const win = window;
    if (adaptive) {
        let offsetParent = getOffsetParent(popper);
        if (offsetParent === getWindow(popper)) {
            offsetParent = getDocumentElement(popper);
        }
        // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        /* :: offsetParent = (offsetParent: Element); */
        if (placement === top) {
            sideY = bottom;
            y -= offsetParent.clientHeight - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left) {
            sideX = right;
            x -= offsetParent.clientWidth - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    const commonStyles = Object.assign({ position }, (adaptive && unsetSides));
    if (gpuAcceleration) {
        return Object.assign(Object.assign({}, commonStyles), { [sideY]: hasY ? '0' : '', [sideX]: hasX ? '0' : '', 
            // Layer acceleration can disable subpixel rendering which causes slightly
            // blurry text on low PPI displays, so we want to use 2D transforms
            // instead
            transform: (win.devicePixelRatio || 1) < 2 ? `translate(${x}px, ${y}px)` : `translate3d(${x}px, ${y}px, 0)` });
    }
    return Object.assign(Object.assign({}, commonStyles), { [sideY]: hasY ? `${y}px` : '', [sideX]: hasX ? `${x}px` : '', transform: '' });
}
/**
 *
 */
function computeStyles({ state, options }) {
    const { gpuAcceleration = true, adaptive = true } = options;
    const commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), { offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive })));
    }
    if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), { offsets: state.modifiersData.arrow, position: 'absolute', adaptive: false })));
    }
    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), { 'data-popper-placement': state.placement });
}
var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
/**
 *
 */
function applyStyles({ state }) {
    Object.keys(state.elements).forEach(name => {
        const style = state.styles[name] || {};
        const attributes = state.attributes[name] || {};
        const element = state.elements[name];
        // arrow is optional + virtual elements
        if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
        }
        // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(name => {
            const value = attributes[name];
            if (value === false) {
                element.removeAttribute(name);
            }
            else {
                element.setAttribute(name, value === true ? '' : value);
            }
        });
    });
}
/**
 *
 */
function effect$1({ state }) {
    const initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return () => {
        Object.keys(state.elements).forEach(name => {
            const element = state.elements[name];
            const attributes = state.attributes[name] || {};
            const styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            // Set all values to an empty string to unset them
            const style = styleProperties.reduce((style, property) => {
                style[property] = '';
                return style;
            }, {});
            // arrow is optional + virtual elements
            if (!isHTMLElement(element) || !getNodeName(element)) {
                return;
            }
            // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(attribute => {
                element.removeAttribute(attribute);
            });
        });
    };
}
var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$1,
    requires: ['computeStyles']
};

/**
 * @param placement
 * @param rects
 * @param offset
 */
function distanceAndSkiddingToXY(placement, rects, offset) {
    const basePlacement = getBasePlacement(placement);
    const invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    let [skidding, distance] = typeof offset === 'function'
        ? offset(Object.assign(Object.assign({}, rects), { placement }))
        : offset;
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
}
/**
 *
 */
function offset({ state, options, name }) {
    const { offset = [0, 0] } = options;
    const data = placements.reduce((acc, placement) => {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    const { x, y } = data[state.placement];
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
}
var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
};

const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
/**
 * @param placement
 */
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}

const hash$1 = { start: 'end', end: 'start' };
/**
 * @param placement
 */
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, matched => hash$1[matched]);
}

/* :: type OverflowsMap = { [ComputedPlacement]: number }; */
/* ;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
/**
 * @param state
 * @param options
 */
function computeAutoPlacement(state, options = {}) {
    const { placement, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements = placements } = options;
    const variation = getVariation(placement);
    const placements$1 = variation
        ? flipVariations
            ? variationPlacements
            : variationPlacements.filter(placement => getVariation(placement) === variation)
        : basePlacements;
    // $FlowFixMe
    let allowedPlacements = placements$1.filter(placement => allowedAutoPlacements.indexOf(placement) >= 0);
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements$1;
    }
    // $FlowFixMe: Flow seems to have problems with two array unions...
    const overflows = allowedPlacements.reduce((acc, placement) => {
        acc[placement] = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            padding
        })[getBasePlacement(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort((a, b) => overflows[a] - overflows[b]);
}

/**
 * @param placement
 */
function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
        return [];
    }
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeVariationPlacement(placement),
        oppositePlacement,
        getOppositeVariationPlacement(oppositePlacement)
    ];
}
/**
 *
 */
function flip({ state, options, name }) {
    if (state.modifiersData[name]._skip) {
        return;
    }
    const { mainAxis: checkMainAxis = true, altAxis: checkAltAxis = true, fallbackPlacements: specifiedFallbackPlacements, padding, boundary, rootBoundary, altBoundary, flipVariations = true, allowedAutoPlacements } = options;
    const preferredPlacement = state.options.placement;
    const basePlacement = getBasePlacement(preferredPlacement);
    const isBasePlacement = basePlacement === preferredPlacement;
    const fallbackPlacements = specifiedFallbackPlacements ||
        (isBasePlacement || !flipVariations
            ? [getOppositePlacement(preferredPlacement)]
            : getExpandedFallbackPlacements(preferredPlacement));
    const placements = [preferredPlacement, ...fallbackPlacements].reduce((acc, placement) => acc.concat(getBasePlacement(placement) === auto
        ? computeAutoPlacement(state, {
            placement,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
        })
        : placement), []);
    const referenceRect = state.rects.reference;
    const popperRect = state.rects.popper;
    const checksMap = new Map();
    let makeFallbackChecks = true;
    let firstFittingPlacement = placements[0];
    for (let i = 0; i < placements.length; i++) {
        const placement = placements[i];
        const basePlacement = getBasePlacement(placement);
        const isStartVariation = getVariation(placement) === start;
        const isVertical = [top, bottom].indexOf(basePlacement) >= 0;
        const len = isVertical ? 'width' : 'height';
        const overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
        });
        let mainVariationSide = isVertical ? (isStartVariation ? right : left) : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        const altVariationSide = getOppositePlacement(mainVariationSide);
        const checks = [];
        if (checkMainAxis) {
            checks.push(overflow[basePlacement] <= 0);
        }
        if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(check => check)) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        const numberOfChecks = flipVariations ? 3 : 1;
        for (let i = numberOfChecks; i > 0; i--) {
            const fittingPlacement = placements.find(placement => {
                const checks = checksMap.get(placement);
                if (checks) {
                    return checks.slice(0, i).every(check => check);
                }
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                break;
            }
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
}
var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: { _skip: false }
};

// @ts-nocheck
/**
 * @param axis
 */
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}

// @ts-nocheck
/**
 * @param min
 * @param value
 * @param max
 */
function within(min, value, max) {
    return Math.max(min, Math.min(value, max));
}

// @ts-nocheck
/**
 *
 */
function preventOverflow({ state, options, name }) {
    const { mainAxis: checkMainAxis = true, altAxis: checkAltAxis = false, boundary, rootBoundary, altBoundary, padding, tether = true, tetherOffset = 0 } = options;
    const overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
    });
    const basePlacement = getBasePlacement(state.placement);
    const variation = getVariation(state.placement);
    const isBasePlacement = !variation;
    const mainAxis = getMainAxisFromPlacement(basePlacement);
    const altAxis = getAltAxis(mainAxis);
    const popperOffsets = state.modifiersData.popperOffsets;
    const referenceRect = state.rects.reference;
    const popperRect = state.rects.popper;
    const tetherOffsetValue = typeof tetherOffset === 'function'
        ? tetherOffset(Object.assign(Object.assign({}, state.rects), { placement: state.placement }))
        : tetherOffset;
    const data = { x: 0, y: 0 };
    if (!popperOffsets) {
        return;
    }
    if (checkMainAxis) {
        const mainSide = mainAxis === 'y' ? top : left;
        const altSide = mainAxis === 'y' ? bottom : right;
        const len = mainAxis === 'y' ? 'height' : 'width';
        const offset = popperOffsets[mainAxis];
        const min = popperOffsets[mainAxis] + overflow[mainSide];
        const max = popperOffsets[mainAxis] - overflow[altSide];
        const additive = tether ? -popperRect[len] / 2 : 0;
        const minLen = variation === start ? referenceRect[len] : popperRect[len];
        const maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        const arrowElement = state.elements.arrow;
        const arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 };
        const arrowPaddingObject = state.modifiersData['arrow#persistent']
            ? state.modifiersData['arrow#persistent'].padding
            : getFreshSideObject();
        const arrowPaddingMin = arrowPaddingObject[mainSide];
        const arrowPaddingMax = arrowPaddingObject[altSide];
        // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        const arrowLen = within(0, referenceRect[len], arrowRect[len]);
        const minOffset = isBasePlacement
            ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue
            : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        const maxOffset = isBasePlacement
            ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue
            : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        const arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        const clientOffset = arrowOffsetParent
            ? mainAxis === 'y'
                ? arrowOffsetParent.clientTop || 0
                : arrowOffsetParent.clientLeft || 0
            : 0;
        const offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        const tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        const tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
        const preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        const mainSide = mainAxis === 'x' ? top : left;
        const altSide = mainAxis === 'x' ? bottom : right;
        const offset = popperOffsets[altAxis];
        const min = offset + overflow[mainSide];
        const max = offset - overflow[altSide];
        const preventedOffset = within(min, offset, max);
        popperOffsets[altAxis] = preventedOffset;
        data[altAxis] = preventedOffset - offset;
    }
    state.modifiersData[name] = data;
}
var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
};

/**
 *
 */
function arrow({ state, name }) {
    const arrowElement = state.elements.arrow;
    const popperOffsets = state.modifiersData.popperOffsets;
    const basePlacement = getBasePlacement(state.placement);
    const axis = getMainAxisFromPlacement(basePlacement);
    const isVertical = [left, right].indexOf(basePlacement) >= 0;
    const len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
        return;
    }
    const paddingObject = state.modifiersData[`${name}#persistent`].padding;
    const arrowRect = getLayoutRect(arrowElement);
    const minProp = axis === 'y' ? top : left;
    const maxProp = axis === 'y' ? bottom : right;
    const endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    const startDiff = popperOffsets[axis] - state.rects.reference[axis];
    const arrowOffsetParent = getOffsetParent(arrowElement);
    const clientSize = arrowOffsetParent
        ? axis === 'y'
            ? arrowOffsetParent.clientHeight || 0
            : arrowOffsetParent.clientWidth || 0
        : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    const min = paddingObject[minProp];
    const max = clientSize - arrowRect[len] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    const offset = within(min, center, max);
    // Prevents breaking syntax highlighting...
    const axisProp = axis;
    state.modifiersData[name] = {
        [axisProp]: offset,
        centerOffset: offset - center
    };
}
/**
 *
 */
function effect$2({ state, options, name }) {
    let { element: arrowElement = '[data-popper-arrow]', padding = 0 } = options;
    if (arrowElement == null) {
        return;
    }
    // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
            return;
        }
    }
    if (!contains(state.elements.popper, arrowElement)) {
        return;
    }
    state.elements.arrow = arrowElement;
    state.modifiersData[`${name}#persistent`] = {
        padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
    };
}
var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$2,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
};

/**
 * @param overflow
 * @param rect
 * @param preventedOffsets
 */
function getSideOffsets(overflow, rect, preventedOffsets = { x: 0, y: 0 }) {
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
/**
 * @param overflow
 */
function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(side => overflow[side] >= 0);
}
/**
 *
 */
function hide({ state, name }) {
    const referenceRect = state.rects.reference;
    const popperRect = state.rects.popper;
    const preventedOffsets = state.modifiersData.preventOverflow;
    const referenceOverflow = detectOverflow(state, {
        elementContext: 'reference'
    });
    const popperAltOverflow = detectOverflow(state, {
        altBoundary: true
    });
    const referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    const popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    const isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    const hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
    };
    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), { 'data-popper-reference-hidden': isReferenceHidden, 'data-popper-escaped': hasPopperEscaped });
}
var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
};

// @ts-nocheck
const defaultModifiers = [
    eventListeners,
    popperOffsets$1,
    computeStyles$1,
    applyStyles$1,
    offset$1,
    flip$1,
    preventOverflow$1,
    arrow$1,
    hide$1
];
const createPopper = popperGenerator({ defaultModifiers });

/* eslint-disable @typescript-eslint/consistent-type-definitions */
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
/**
 * Simple ponyfill for Object.fromEntries
 */
const fromEntries = (entries) => entries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement
    ? react.useLayoutEffect
    : react.useEffect;
const EMPTY_MODIFIERS = [];
const usePopper = (referenceElement, popperElement, options = {}) => {
    const prevOptions = react.useRef(null);
    const optionsWithDefaults = {
        onFirstUpdate: options.onFirstUpdate,
        placement: options.placement || 'bottom',
        strategy: options.strategy || 'absolute',
        modifiers: options.modifiers || EMPTY_MODIFIERS
    };
    const [state, setState] = react.useState({
        styles: {
            popper: {
                position: optionsWithDefaults.strategy,
                left: '0',
                top: '0'
            }
        },
        attributes: {}
    });
    const updateStateModifier = react.useMemo(() => ({
        name: 'updateState',
        enabled: true,
        phase: 'write',
        // eslint-disable-next-line no-shadow
        fn: ({ state }) => {
            const elements = Object.keys(state.elements);
            setState({
                styles: fromEntries(elements.map(element => [element, state.styles[element] || {}])),
                attributes: fromEntries(elements.map(element => [element, state.attributes[element]]))
            });
        },
        requires: ['computeStyles']
    }), []);
    const popperOptions = react.useMemo(() => {
        const newOptions = {
            onFirstUpdate: optionsWithDefaults.onFirstUpdate,
            placement: optionsWithDefaults.placement,
            strategy: optionsWithDefaults.strategy,
            modifiers: [...optionsWithDefaults.modifiers, updateStateModifier, { name: 'applyStyles', enabled: false }]
        };
        if (isEqual(prevOptions.current, newOptions)) {
            return prevOptions.current || newOptions;
        }
        else {
            prevOptions.current = newOptions;
            return newOptions;
        }
    }, [
        optionsWithDefaults.onFirstUpdate,
        optionsWithDefaults.placement,
        optionsWithDefaults.strategy,
        optionsWithDefaults.modifiers,
        updateStateModifier
    ]);
    const popperInstanceRef = react.useRef();
    useIsomorphicLayoutEffect(() => {
        if (popperInstanceRef && popperInstanceRef.current) {
            popperInstanceRef.current.setOptions(popperOptions);
        }
    }, [popperOptions]);
    useIsomorphicLayoutEffect(() => {
        if (referenceElement == null || popperElement == null) {
            return;
        }
        const createPopper$1 = options.createPopper || createPopper;
        const popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
        popperInstanceRef.current = popperInstance;
        return () => {
            popperInstance.destroy();
            popperInstanceRef.current = null;
        };
    }, [referenceElement, popperElement, options.createPopper]);
    return {
        state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
        styles: state.styles,
        attributes: state.attributes,
        update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
        forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
    };
};

const hash$2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
const getOppositePlacement$1 = (placement) => placement.replace(/left|right|bottom|top/g, (matched) => hash$2[matched]);
const getOpacityTransition = (animationDuration) => `opacity ${animationDuration}ms cubic-bezier(.54, 1.5, .38, 1.11)`;
const Popper = ({ trigger, popper, popperMatchesTriggerWidth = true, direction = 'down', position = 'left', placement, appendTo = () => document.body, zIndex = 9999, isVisible = true, positionModifiers, distance = 0, onMouseEnter, onMouseLeave, onFocus, onBlur, onDocumentClick, onTriggerClick, onTriggerEnter, onPopperClick, onDocumentKeyDown, enableFlip = true, flipBehavior = 'flip', reference }) => {
    const [triggerElement, setTriggerElement] = react.useState(null);
    const [refElement, setRefElement] = react.useState(null);
    const [popperElement, setPopperElement] = react.useState(null);
    const [ready, setReady] = react.useState(false);
    const refOrTrigger = refElement || triggerElement;
    const onDocumentClickCallback = react.useCallback(event => onDocumentClick(event, refOrTrigger, popperElement), [
        isVisible,
        triggerElement,
        refElement,
        popperElement,
        onDocumentClick
    ]);
    react.useEffect(() => {
        setReady(true);
    }, []);
    react.useEffect(() => {
        if (reference) {
            if (reference.current) {
                setRefElement(reference.current);
            }
            else if (typeof reference === 'function') {
                setRefElement(reference());
            }
        }
    }, [reference]);
    const addEventListener = (listener, element, event) => {
        if (listener && element) {
            element.addEventListener(event, listener);
        }
    };
    const removeEventListener = (listener, element, event) => {
        if (listener && element) {
            element.removeEventListener(event, listener);
        }
    };
    react.useEffect(() => {
        addEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
        addEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
        addEventListener(onFocus, refOrTrigger, 'focus');
        addEventListener(onBlur, refOrTrigger, 'blur');
        addEventListener(onTriggerClick, refOrTrigger, 'click');
        addEventListener(onTriggerEnter, refOrTrigger, 'keydown');
        addEventListener(onPopperClick, popperElement, 'click');
        onDocumentClick && addEventListener(onDocumentClickCallback, document, 'click');
        addEventListener(onDocumentKeyDown, document, 'keydown');
        return () => {
            removeEventListener(onMouseEnter, refOrTrigger, 'mouseenter');
            removeEventListener(onMouseLeave, refOrTrigger, 'mouseleave');
            removeEventListener(onFocus, refOrTrigger, 'focus');
            removeEventListener(onBlur, refOrTrigger, 'blur');
            removeEventListener(onTriggerClick, refOrTrigger, 'click');
            removeEventListener(onTriggerEnter, refOrTrigger, 'keydown');
            removeEventListener(onPopperClick, popperElement, 'click');
            onDocumentClick && removeEventListener(onDocumentClickCallback, document, 'click');
            removeEventListener(onDocumentKeyDown, document, 'keydown');
        };
    }, [
        triggerElement,
        popperElement,
        onMouseEnter,
        onMouseLeave,
        onFocus,
        onBlur,
        onTriggerClick,
        onTriggerEnter,
        onPopperClick,
        onDocumentClick,
        onDocumentKeyDown,
        refElement
    ]);
    const getPlacement = () => {
        if (placement) {
            return placement;
        }
        let convertedPlacement = direction === 'up' ? 'top' : 'bottom';
        if (position !== 'center') {
            convertedPlacement = `${convertedPlacement}-${position === 'right' ? 'end' : 'start'}`;
        }
        return convertedPlacement;
    };
    const getPlacementMemo = react.useMemo(getPlacement, [direction, position, placement]);
    const getOppositePlacementMemo = react.useMemo(() => getOppositePlacement$1(getPlacement()), [
        direction,
        position,
        placement
    ]);
    const sameWidthMod = react.useMemo(() => ({
        name: 'sameWidth',
        enabled: popperMatchesTriggerWidth,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
        },
        effect: ({ state }) => {
            state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
            return () => { };
        }
    }), [popperMatchesTriggerWidth]);
    const { styles: popperStyles, attributes } = usePopper(refOrTrigger, popperElement, {
        placement: getPlacementMemo,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, distance]
                }
            },
            {
                name: 'preventOverflow',
                enabled: false
            },
            {
                // adds attribute [data-popper-reference-hidden] to the popper element which can be used to hide it using CSS
                name: 'hide',
                enabled: true
            },
            {
                name: 'flip',
                enabled: getPlacementMemo.startsWith('auto') || enableFlip,
                options: {
                    fallbackPlacements: flipBehavior === 'flip' ? [getOppositePlacementMemo] : flipBehavior
                }
            },
            sameWidthMod
        ]
    });
    const modifierFromPopperPosition = () => {
        if (attributes && attributes.popper && attributes.popper['data-popper-placement']) {
            const popperPlacement = attributes.popper['data-popper-placement'];
            if (popperPlacement.startsWith('top')) {
                return positionModifiers.top || '';
            }
            else if (popperPlacement.startsWith('bottom')) {
                return positionModifiers.bottom || '';
            }
            else if (popperPlacement.startsWith('left')) {
                return positionModifiers.left || '';
            }
            else if (popperPlacement.startsWith('right')) {
                return positionModifiers.right || '';
            }
        }
        return positionModifiers.top;
    };
    const menuWithPopper = react.cloneElement(popper, Object.assign({ className: css(popper.props && popper.props.className, positionModifiers && modifierFromPopperPosition()), style: Object.assign(Object.assign(Object.assign({}, ((popper.props && popper.props.style) || {})), popperStyles.popper), { zIndex }) }, attributes.popper));
    const getTarget = () => {
        if (typeof appendTo === 'function') {
            return appendTo();
        }
        return appendTo;
    };
    return (react.createElement(react.Fragment, null,
        !reference && trigger && (react.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setTriggerElement(foundRef) }, trigger)),
        ready &&
            isVisible &&
            reactDom.createPortal(react.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setPopperElement(foundRef) }, menuWithPopper), getTarget())));
};
Popper.displayName = 'Popper';

var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["auto"] = "auto";
    TooltipPosition["top"] = "top";
    TooltipPosition["bottom"] = "bottom";
    TooltipPosition["left"] = "left";
    TooltipPosition["right"] = "right";
})(TooltipPosition || (TooltipPosition = {}));
// id for associating trigger with the content aria-describedby or aria-labelledby
let pfTooltipIdCounter = 1;
const Tooltip = (_a) => {
    var { content: bodyContent, position = 'top', trigger = 'mouseenter focus', isVisible = false, isContentLeftAligned = false, enableFlip = true, className = '', entryDelay = 0, exitDelay = 0, appendTo = () => document.body, zIndex = 9999, maxWidth = c_tooltip_MaxWidth.value, distance = 15, aria = 'describedby', 
    // For every initial starting position, there are 3 escape positions
    flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'], id = `pf-tooltip-${pfTooltipIdCounter++}`, children, animationDuration = 300, reference, boundary, isAppLauncher, tippyProps } = _a, rest = __rest(_a, ["content", "position", "trigger", "isVisible", "isContentLeftAligned", "enableFlip", "className", "entryDelay", "exitDelay", "appendTo", "zIndex", "maxWidth", "distance", "aria", "flipBehavior", "id", "children", "animationDuration", "reference", "boundary", "isAppLauncher", "tippyProps"]);
    const triggerOnMouseenter = trigger.includes('mouseenter');
    const triggerOnFocus = trigger.includes('focus');
    const triggerOnClick = trigger.includes('click');
    const triggerManually = trigger === 'manual';
    const [visible, setVisible] = react.useState(false);
    const [opacity, setOpacity] = react.useState(0);
    const transitionTimerRef = react.useRef(null);
    const showTimerRef = react.useRef(null);
    const hideTimerRef = react.useRef(null);
    const onDocumentKeyDown = (event) => {
        if (!triggerManually) {
            if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
                hide();
            }
        }
    };
    const onTriggerEnter = (event) => {
        if (event.keyCode === KEY_CODES.ENTER) {
            if (!visible) {
                show();
            }
            else {
                hide();
            }
        }
    };
    react.useEffect(() => {
        if (isVisible) {
            show();
        }
        else {
            hide();
        }
    }, [isVisible]);
    const show = () => {
        if (transitionTimerRef.current) {
            clearTimeout(transitionTimerRef.current);
        }
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }
        showTimerRef.current = setTimeout(() => {
            setVisible(true);
            setOpacity(1);
        }, entryDelay);
    };
    const hide = () => {
        if (showTimerRef.current) {
            clearTimeout(showTimerRef.current);
        }
        hideTimerRef.current = setTimeout(() => {
            setOpacity(0);
            transitionTimerRef.current = setTimeout(() => setVisible(false), animationDuration);
        }, exitDelay);
    };
    const positionModifiers = {
        top: styles$2.modifiers.top,
        bottom: styles$2.modifiers.bottom,
        left: styles$2.modifiers.left,
        right: styles$2.modifiers.right
    };
    const hasCustomMaxWidth = maxWidth !== c_tooltip_MaxWidth.value;
    const content = (react.createElement("div", Object.assign({ className: css(styles$2.tooltip, className), role: "tooltip", id: id, style: {
            maxWidth: hasCustomMaxWidth ? maxWidth : null,
            opacity,
            transition: getOpacityTransition(animationDuration)
        } }, rest),
        react.createElement(TooltipArrow, null),
        react.createElement(TooltipContent, { isLeftAligned: isContentLeftAligned }, bodyContent)));
    const onDocumentClick = (event, triggerElement) => {
        // event.currentTarget = document
        // event.target could be triggerElement or something else
        {
            // hide on inside the toggle as well as on outside clicks
            if (visible) {
                hide();
            }
            else if (event.target === triggerElement) {
                show();
            }
        }
    };
    const addAriaToTrigger = () => {
        if (aria === 'describedby' && children && children.props && !children.props['aria-describedby']) {
            return react.cloneElement(children, { 'aria-describedby': id });
        }
        else if (aria === 'labelledby' && children.props && !children.props['aria-labelledby']) {
            return react.cloneElement(children, { 'aria-labelledby': id });
        }
        return children;
    };
    return (react.createElement(Popper, { trigger: aria !== 'none' && visible ? addAriaToTrigger() : children, reference: reference, popper: content, popperMatchesTriggerWidth: false, appendTo: appendTo, isVisible: visible, positionModifiers: positionModifiers, distance: distance, placement: position, onMouseEnter: triggerOnMouseenter && show, onMouseLeave: triggerOnMouseenter && hide, onFocus: triggerOnFocus && show, onBlur: triggerOnFocus && hide, onDocumentClick: triggerOnClick && onDocumentClick, onDocumentKeyDown: triggerManually ? null : onDocumentKeyDown, onTriggerEnter: triggerManually ? null : onTriggerEnter, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior }));
};
Tooltip.displayName = 'Tooltip';

var dropdown = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "badge": "pf-c-badge",
  "check": "pf-c-check",
  "divider": "pf-c-divider",
  "dropdown": "pf-c-dropdown",
  "dropdownGroup": "pf-c-dropdown__group",
  "dropdownGroupTitle": "pf-c-dropdown__group-title",
  "dropdownMenu": "pf-c-dropdown__menu",
  "dropdownMenuItem": "pf-c-dropdown__menu-item",
  "dropdownMenuItemDescription": "pf-c-dropdown__menu-item-description",
  "dropdownMenuItemIcon": "pf-c-dropdown__menu-item-icon",
  "dropdownMenuItemMain": "pf-c-dropdown__menu-item-main",
  "dropdownToggle": "pf-c-dropdown__toggle",
  "dropdownToggleButton": "pf-c-dropdown__toggle-button",
  "dropdownToggleCheck": "pf-c-dropdown__toggle-check",
  "dropdownToggleIcon": "pf-c-dropdown__toggle-icon",
  "dropdownToggleImage": "pf-c-dropdown__toggle-image",
  "dropdownToggleText": "pf-c-dropdown__toggle-text",
  "menu": "pf-c-menu",
  "modifiers": {
    "action": "pf-m-action",
    "disabled": "pf-m-disabled",
    "plain": "pf-m-plain",
    "splitButton": "pf-m-split-button",
    "active": "pf-m-active",
    "expanded": "pf-m-expanded",
    "primary": "pf-m-primary",
    "top": "pf-m-top",
    "alignRight": "pf-m-align-right",
    "alignLeft": "pf-m-align-left",
    "alignRightOnSm": "pf-m-align-right-on-sm",
    "alignLeftOnSm": "pf-m-align-left-on-sm",
    "alignRightOnMd": "pf-m-align-right-on-md",
    "alignLeftOnMd": "pf-m-align-left-on-md",
    "alignRightOnLg": "pf-m-align-right-on-lg",
    "alignLeftOnLg": "pf-m-align-left-on-lg",
    "alignRightOnXl": "pf-m-align-right-on-xl",
    "alignLeftOnXl": "pf-m-align-left-on-xl",
    "alignRightOn_2xl": "pf-m-align-right-on-2xl",
    "alignLeftOn_2xl": "pf-m-align-left-on-2xl",
    "icon": "pf-m-icon",
    "description": "pf-m-description",
    "text": "pf-m-text"
  }
};
});

var styles$3 = /*@__PURE__*/getDefaultExportFromCjs(dropdown);

var DropdownPosition;
(function (DropdownPosition) {
    DropdownPosition["right"] = "right";
    DropdownPosition["left"] = "left";
})(DropdownPosition || (DropdownPosition = {}));
var DropdownDirection;
(function (DropdownDirection) {
    DropdownDirection["up"] = "up";
    DropdownDirection["down"] = "down";
})(DropdownDirection || (DropdownDirection = {}));
const DropdownContext = react.createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelect: (event) => undefined,
    id: '',
    toggleIndicatorClass: '',
    toggleIconClass: '',
    toggleTextClass: '',
    menuClass: '',
    itemClass: '',
    toggleClass: '',
    baseClass: '',
    baseComponent: 'div',
    sectionClass: '',
    sectionTitleClass: '',
    sectionComponent: 'section',
    disabledClass: '',
    plainTextClass: '',
    menuComponent: 'ul'
});
const DropdownArrowContext = react.createContext({
    keyHandler: null,
    sendRef: null
});

class DropdownMenu extends react.Component {
    constructor() {
        super(...arguments);
        this.refsCollection = [];
        this.componentWillUnmount = () => {
            document.removeEventListener('keydown', this.onKeyDown);
        };
        this.onKeyDown = (event) => {
            if (!this.props.isOpen ||
                !Array.from(document.activeElement.classList).find(className => DropdownMenu.validToggleClasses.concat(this.context.toggleClass).includes(className))) {
                return;
            }
            const refs = this.refsCollection;
            if (event.key === 'ArrowDown') {
                const firstFocusTargetCollection = refs.find(ref => ref && ref[0] && !ref[0].hasAttribute('disabled'));
                DropdownMenu.focusFirstRef(firstFocusTargetCollection);
            }
            else if (event.key === 'ArrowUp') {
                const collectionLength = refs.length;
                const lastFocusTargetCollection = refs.slice(collectionLength - 1, collectionLength);
                const lastFocusTarget = lastFocusTargetCollection && lastFocusTargetCollection[0];
                DropdownMenu.focusFirstRef(lastFocusTarget);
            }
        };
        this.childKeyHandler = (index, innerIndex, position, custom = false) => {
            keyHandler(index, innerIndex, position, this.refsCollection, this.props.isGrouped ? this.refsCollection : react.Children.toArray(this.props.children), custom);
        };
        this.sendRef = (index, nodes, isDisabled, isSeparator) => {
            this.refsCollection[index] = [];
            nodes.map((node, innerIndex) => {
                if (!node) {
                    this.refsCollection[index][innerIndex] = null;
                }
                else if (!node.getAttribute) {
                    // eslint-disable-next-line react/no-find-dom-node
                    this.refsCollection[index][innerIndex] = reactDom.findDOMNode(node);
                }
                else if (isSeparator) {
                    this.refsCollection[index][innerIndex] = null;
                }
                else {
                    this.refsCollection[index][innerIndex] = node;
                }
            });
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        const { autoFocus } = this.props;
        if (autoFocus) {
            // Focus first non-disabled element
            const focusTargetCollection = this.refsCollection.find(ref => ref && ref[0] && !ref[0].hasAttribute('disabled'));
            const focusTarget = focusTargetCollection && focusTargetCollection[0];
            if (focusTarget && focusTarget.focus) {
                setTimeout(() => focusTarget.focus());
            }
        }
    }
    shouldComponentUpdate() {
        // reset refsCollection before updating to account for child removal between mounts
        this.refsCollection = [];
        return true;
    }
    extendChildren() {
        const { children, isGrouped } = this.props;
        if (isGrouped) {
            let index = 0;
            return react.Children.map(children, groupedChildren => {
                const group = groupedChildren;
                const props = {};
                if (group.props && group.props.children) {
                    if (Array.isArray(group.props.children)) {
                        props.children = react.Children.map(group.props.children, option => react.cloneElement(option, {
                            index: index++
                        }));
                    }
                    else {
                        props.children = react.cloneElement(group.props.children, {
                            index: index++
                        });
                    }
                }
                return react.cloneElement(group, props);
            });
        }
        return react.Children.map(children, (child, index) => react.cloneElement(child, {
            index
        }));
    }
    render() {
        const _a = this.props, { className, isOpen, position, children, component, isGrouped, setMenuComponentRef, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        openedOnEnter } = _a, props = __rest(_a, ["className", "isOpen", "position", "children", "component", "isGrouped", "setMenuComponentRef", "openedOnEnter"]);
        return (react.createElement(DropdownArrowContext.Provider, { value: {
                keyHandler: this.childKeyHandler,
                sendRef: this.sendRef
            } }, component === 'div' ? (react.createElement(DropdownContext.Consumer, null, ({ onSelect, menuClass }) => (react.createElement("div", { className: css(menuClass, position === DropdownPosition.right && styles$3.modifiers.alignRight, className), hidden: !isOpen, onClick: event => onSelect && onSelect(event), ref: setMenuComponentRef }, children)))) : ((isGrouped && (react.createElement(DropdownContext.Consumer, null, ({ menuClass, menuComponent }) => {
            const MenuComponent = (menuComponent || 'div');
            return (react.createElement(MenuComponent, Object.assign({}, props, { className: css(menuClass, position === DropdownPosition.right && styles$3.modifiers.alignRight, className), hidden: !isOpen, role: "menu", ref: setMenuComponentRef }), this.extendChildren()));
        }))) || (react.createElement(DropdownContext.Consumer, null, ({ menuClass, menuComponent }) => {
            const MenuComponent = (menuComponent || component);
            return (react.createElement(MenuComponent, Object.assign({}, props, { className: css(menuClass, position === DropdownPosition.right && styles$3.modifiers.alignRight, className), hidden: !isOpen, role: "menu", ref: setMenuComponentRef }), this.extendChildren()));
        })))));
    }
}
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = {
    className: '',
    isOpen: true,
    openedOnEnter: false,
    autoFocus: true,
    position: DropdownPosition.left,
    component: 'ul',
    isGrouped: false,
    setMenuComponentRef: null
};
DropdownMenu.validToggleClasses = [styles$3.dropdownToggle, styles$3.dropdownToggleButton];
DropdownMenu.focusFirstRef = (refCollection) => {
    if (refCollection && refCollection[0] && refCollection[0].focus) {
        setTimeout(() => refCollection[0].focus());
    }
};
DropdownMenu.contextType = DropdownContext;

class DropdownWithContext extends react.Component {
    constructor(props) {
        super(props);
        this.openedOnEnter = false;
        this.baseComponentRef = react.createRef();
        this.menuComponentRef = react.createRef();
        this.onEnter = () => {
            this.openedOnEnter = true;
        };
        this.setMenuComponentRef = (element) => {
            this.menuComponentRef = element;
        };
        this.getMenuComponentRef = () => this.menuComponentRef;
        if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
            // eslint-disable-next-line no-console
            console.error('Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered');
        }
    }
    componentDidUpdate() {
        if (!this.props.isOpen) {
            this.openedOnEnter = false;
        }
    }
    render() {
        const _a = this.props, { children, className, direction, dropdownItems, isOpen, isPlain, isGrouped, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSelect, position, toggle, autoFocus, menuAppendTo } = _a, props = __rest(_a, ["children", "className", "direction", "dropdownItems", "isOpen", "isPlain", "isGrouped", "onSelect", "position", "toggle", "autoFocus", "menuAppendTo"]);
        const id = toggle.props.id || `pf-dropdown-toggle-id-${DropdownWithContext.currentId++}`;
        let component;
        let renderedContent;
        let ariaHasPopup = false;
        if (dropdownItems && dropdownItems.length > 0) {
            component = 'ul';
            renderedContent = dropdownItems;
            ariaHasPopup = true;
        }
        else {
            component = 'div';
            renderedContent = react.Children.toArray(children);
        }
        const openedOnEnter = this.openedOnEnter;
        return (react.createElement(DropdownContext.Consumer, null, ({ baseClass, baseComponent, id: contextId, ouiaId, ouiaComponentType, ouiaSafe }) => {
            const BaseComponent = baseComponent;
            const menuContainer = (react.createElement(DropdownMenu, { setMenuComponentRef: this.setMenuComponentRef, component: component, isOpen: isOpen, position: position, "aria-labelledby": contextId ? `${contextId}-toggle` : id, isGrouped: isGrouped, autoFocus: openedOnEnter && autoFocus }, renderedContent));
            const popperContainer = (react.createElement("div", { className: css(baseClass, direction === DropdownDirection.up && styles$3.modifiers.top, position === DropdownPosition.right && styles$3.modifiers.alignRight, isOpen && styles$3.modifiers.expanded, className) }, isOpen && menuContainer));
            const mainContainer = (react.createElement(BaseComponent, Object.assign({}, props, { className: css(baseClass, direction === DropdownDirection.up && styles$3.modifiers.top, position === DropdownPosition.right && styles$3.modifiers.alignRight, isOpen && styles$3.modifiers.expanded, className), ref: this.baseComponentRef }, getOUIAProps(ouiaComponentType, ouiaId, ouiaSafe)),
                react.Children.map(toggle, oneToggle => react.cloneElement(oneToggle, {
                    parentRef: this.baseComponentRef,
                    getMenuRef: this.getMenuComponentRef,
                    isOpen,
                    id,
                    isPlain,
                    'aria-haspopup': ariaHasPopup,
                    onEnter: () => this.onEnter()
                })),
                menuAppendTo === 'inline' && isOpen && menuContainer));
            const getParentElement = () => {
                if (this.baseComponentRef && this.baseComponentRef.current) {
                    return this.baseComponentRef.current.parentElement;
                }
                return null;
            };
            return menuAppendTo === 'inline' ? (mainContainer) : (react.createElement(Popper, { trigger: mainContainer, popper: popperContainer, direction: direction, position: position, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen }));
        }));
    }
}
DropdownWithContext.displayName = 'DropdownWithContext';
// seed for the aria-labelledby ID
DropdownWithContext.currentId = 0;
DropdownWithContext.defaultProps = {
    className: '',
    dropdownItems: [],
    isOpen: false,
    isPlain: false,
    isGrouped: false,
    position: DropdownPosition.left,
    direction: DropdownDirection.down,
    onSelect: () => undefined,
    autoFocus: true,
    menuAppendTo: 'inline'
};

const Dropdown = (_a) => {
    var { onSelect, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref, // Types of Ref are different for React.FC vs React.Component
    ouiaId, ouiaSafe } = _a, props = __rest(_a, ["onSelect", "ref", "ouiaId", "ouiaSafe"]);
    return (react.createElement(DropdownContext.Provider, { value: {
            onSelect: event => onSelect && onSelect(event),
            toggleTextClass: styles$3.dropdownToggleText,
            toggleIconClass: styles$3.dropdownToggleImage,
            toggleIndicatorClass: styles$3.dropdownToggleIcon,
            menuClass: styles$3.dropdownMenu,
            itemClass: styles$3.dropdownMenuItem,
            toggleClass: styles$3.dropdownToggle,
            baseClass: styles$3.dropdown,
            baseComponent: 'div',
            sectionClass: styles$3.dropdownGroup,
            sectionTitleClass: styles$3.dropdownGroupTitle,
            sectionComponent: 'section',
            disabledClass: styles$3.modifiers.disabled,
            plainTextClass: styles$3.modifiers.text,
            ouiaId: useOUIAId(Dropdown.displayName, ouiaId),
            ouiaSafe,
            ouiaComponentType: Dropdown.displayName
        } },
        react.createElement(DropdownWithContext, Object.assign({}, props))));
};
Dropdown.displayName = 'Dropdown';

class InternalDropdownItem extends react.Component {
    constructor() {
        super(...arguments);
        this.ref = react.createRef();
        this.additionalRef = react.createRef();
        this.getInnerNode = (node) => (node && node.childNodes && node.childNodes.length ? node.childNodes[0] : node);
        this.onKeyDown = (event) => {
            // Detected key press on this item, notify the menu parent so that the appropriate item can be focused
            const innerIndex = event.target === this.ref.current ? 0 : 1;
            if (!this.props.customChild) {
                event.preventDefault();
            }
            if (event.key === 'ArrowUp') {
                this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.UP);
            }
            else if (event.key === 'ArrowDown') {
                this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
            }
            else if (event.key === 'ArrowRight') {
                this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.RIGHT);
            }
            else if (event.key === 'ArrowLeft') {
                this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.LEFT);
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.target.click();
                this.props.enterTriggersArrowDown &&
                    this.props.context.keyHandler(this.props.index, innerIndex, KEYHANDLER_DIRECTION.DOWN);
            }
        };
    }
    componentDidMount() {
        const { context, index, isDisabled, role, customChild, autoFocus } = this.props;
        const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
        context.sendRef(index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
        autoFocus && setTimeout(() => customRef.focus());
    }
    componentDidUpdate() {
        const { context, index, isDisabled, role, customChild } = this.props;
        const customRef = customChild ? this.getInnerNode(this.ref.current) : this.ref.current;
        context.sendRef(index, [customRef, customChild ? customRef : this.additionalRef.current], isDisabled, role === 'separator');
    }
    extendAdditionalChildRef() {
        const { additionalChild } = this.props;
        return react.cloneElement(additionalChild, {
            ref: this.additionalRef
        });
    }
    render() {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        const _a = this.props, { className, children, isHovered, context, onClick, component, role, isDisabled, isPlainText, index, href, tooltip, tooltipProps, id, componentID, listItemClassName, additionalChild, customChild, enterTriggersArrowDown, icon, autoFocus, styleChildren, description, inoperableEvents } = _a, additionalProps = __rest(_a, ["className", "children", "isHovered", "context", "onClick", "component", "role", "isDisabled", "isPlainText", "index", "href", "tooltip", "tooltipProps", "id", "componentID", "listItemClassName", "additionalChild", "customChild", "enterTriggersArrowDown", "icon", "autoFocus", "styleChildren", "description", "inoperableEvents"]);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        let classes = css(icon && styles$3.modifiers.icon, className);
        if (component === 'a') {
            additionalProps['aria-disabled'] = isDisabled;
        }
        else if (component === 'button') {
            additionalProps['aria-disabled'] = isDisabled;
            additionalProps.type = additionalProps.type || 'button';
        }
        const renderWithTooltip = (childNode) => tooltip ? (react.createElement(Tooltip, Object.assign({ content: tooltip }, tooltipProps), childNode)) : (childNode);
        const renderClonedComponent = (element) => react.cloneElement(element, Object.assign(Object.assign({}, (styleChildren && {
            className: css(element.props.className, classes)
        })), { ref: this.ref }));
        const renderDefaultComponent = (tag) => {
            const Component = tag;
            const componentContent = description ? (react.createElement(react.Fragment, null,
                react.createElement("div", { className: styles$3.dropdownMenuItemMain },
                    icon && react.createElement("span", { className: css(styles$3.dropdownMenuItemIcon) }, icon),
                    children),
                react.createElement("div", { className: styles$3.dropdownMenuItemDescription }, description))) : (react.createElement(react.Fragment, null,
                icon && react.createElement("span", { className: css(styles$3.dropdownMenuItemIcon) }, icon),
                children));
            return (react.createElement(Component, Object.assign({}, additionalProps, (isDisabled ? preventedEvents(inoperableEvents) : null), { href: href, ref: this.ref, className: classes, id: componentID }), componentContent));
        };
        return (react.createElement(DropdownContext.Consumer, null, ({ onSelect, itemClass, disabledClass, plainTextClass }) => {
            if (this.props.role !== 'separator') {
                classes = css(classes, isDisabled && disabledClass, isPlainText && plainTextClass, itemClass, description && styles$3.modifiers.description);
            }
            if (customChild) {
                return react.cloneElement(customChild, {
                    ref: this.ref,
                    onKeyDown: this.onKeyDown
                });
            }
            return (react.createElement("li", { className: listItemClassName || null, role: role, onKeyDown: this.onKeyDown, onClick: (event) => {
                    if (!isDisabled) {
                        onClick(event);
                        onSelect(event);
                    }
                }, id: id },
                renderWithTooltip(react.isValidElement(component)
                    ? renderClonedComponent(component)
                    : renderDefaultComponent(component)),
                additionalChild && this.extendAdditionalChildRef()));
        }));
    }
}
InternalDropdownItem.displayName = 'InternalDropdownItem';
InternalDropdownItem.defaultProps = {
    className: '',
    isHovered: false,
    component: 'a',
    role: 'none',
    isDisabled: false,
    isPlainText: false,
    tooltipProps: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (event) => undefined,
    index: -1,
    context: {
        keyHandler: () => { },
        sendRef: () => { }
    },
    enterTriggersArrowDown: false,
    icon: null,
    styleChildren: true,
    description: null,
    inoperableEvents: ['onClick', 'onKeyPress']
};

const DropdownItem = (_a) => {
    var { children, className, component = 'a', isDisabled = false, isPlainText = false, isHovered = false, href, tooltip, tooltipProps = {}, listItemClassName, onClick, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref, // Types of Ref are different for React.FC vs React.Component
    additionalChild, customChild, tabIndex = -1, icon = null, autoFocus, description = null, styleChildren, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "component", "isDisabled", "isPlainText", "isHovered", "href", "tooltip", "tooltipProps", "listItemClassName", "onClick", "ref", "additionalChild", "customChild", "tabIndex", "icon", "autoFocus", "description", "styleChildren", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
    return (react.createElement(DropdownArrowContext.Consumer, null, context => (react.createElement(InternalDropdownItem, Object.assign({ context: context, role: "menuitem", tabIndex: tabIndex, className: className, component: component, isDisabled: isDisabled, isPlainText: isPlainText, isHovered: isHovered, href: href, tooltip: tooltip, tooltipProps: tooltipProps, listItemClassName: listItemClassName, onClick: onClick, additionalChild: additionalChild, customChild: customChild, icon: icon, autoFocus: autoFocus, styleChildren: styleChildren, description: description }, ouiaProps, props), children))));
};
DropdownItem.displayName = 'DropdownItem';

var divider = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "divider": "pf-c-divider",
  "modifiers": {
    "vertical": "pf-m-vertical",
    "insetNone": "pf-m-inset-none",
    "insetXs": "pf-m-inset-xs",
    "insetSm": "pf-m-inset-sm",
    "insetMd": "pf-m-inset-md",
    "insetLg": "pf-m-inset-lg",
    "insetXl": "pf-m-inset-xl",
    "inset_2xl": "pf-m-inset-2xl",
    "inset_3xl": "pf-m-inset-3xl",
    "insetNoneOnSm": "pf-m-inset-none-on-sm",
    "insetXsOnSm": "pf-m-inset-xs-on-sm",
    "insetSmOnSm": "pf-m-inset-sm-on-sm",
    "insetMdOnSm": "pf-m-inset-md-on-sm",
    "insetLgOnSm": "pf-m-inset-lg-on-sm",
    "insetXlOnSm": "pf-m-inset-xl-on-sm",
    "inset_2xlOnSm": "pf-m-inset-2xl-on-sm",
    "inset_3xlOnSm": "pf-m-inset-3xl-on-sm",
    "insetNoneOnMd": "pf-m-inset-none-on-md",
    "insetXsOnMd": "pf-m-inset-xs-on-md",
    "insetSmOnMd": "pf-m-inset-sm-on-md",
    "insetMdOnMd": "pf-m-inset-md-on-md",
    "insetLgOnMd": "pf-m-inset-lg-on-md",
    "insetXlOnMd": "pf-m-inset-xl-on-md",
    "inset_2xlOnMd": "pf-m-inset-2xl-on-md",
    "inset_3xlOnMd": "pf-m-inset-3xl-on-md",
    "insetNoneOnLg": "pf-m-inset-none-on-lg",
    "insetXsOnLg": "pf-m-inset-xs-on-lg",
    "insetSmOnLg": "pf-m-inset-sm-on-lg",
    "insetMdOnLg": "pf-m-inset-md-on-lg",
    "insetLgOnLg": "pf-m-inset-lg-on-lg",
    "insetXlOnLg": "pf-m-inset-xl-on-lg",
    "inset_2xlOnLg": "pf-m-inset-2xl-on-lg",
    "inset_3xlOnLg": "pf-m-inset-3xl-on-lg",
    "insetNoneOnXl": "pf-m-inset-none-on-xl",
    "insetXsOnXl": "pf-m-inset-xs-on-xl",
    "insetSmOnXl": "pf-m-inset-sm-on-xl",
    "insetMdOnXl": "pf-m-inset-md-on-xl",
    "insetLgOnXl": "pf-m-inset-lg-on-xl",
    "insetXlOnXl": "pf-m-inset-xl-on-xl",
    "inset_2xlOnXl": "pf-m-inset-2xl-on-xl",
    "inset_3xlOnXl": "pf-m-inset-3xl-on-xl",
    "insetNoneOn_2xl": "pf-m-inset-none-on-2xl",
    "insetXsOn_2xl": "pf-m-inset-xs-on-2xl",
    "insetSmOn_2xl": "pf-m-inset-sm-on-2xl",
    "insetMdOn_2xl": "pf-m-inset-md-on-2xl",
    "insetLgOn_2xl": "pf-m-inset-lg-on-2xl",
    "insetXlOn_2xl": "pf-m-inset-xl-on-2xl",
    "inset_2xlOn_2xl": "pf-m-inset-2xl-on-2xl",
    "inset_3xlOn_2xl": "pf-m-inset-3xl-on-2xl"
  }
};
});

var styles$4 = /*@__PURE__*/getDefaultExportFromCjs(divider);

var DividerVariant;
(function (DividerVariant) {
    DividerVariant["hr"] = "hr";
    DividerVariant["li"] = "li";
    DividerVariant["div"] = "div";
})(DividerVariant || (DividerVariant = {}));
const Divider = (_a) => {
    var { className, component = DividerVariant.hr, isVertical = false, inset } = _a, props = __rest(_a, ["className", "component", "isVertical", "inset"]);
    const Component = component;
    return (react.createElement(Component, Object.assign({ className: css(styles$4.divider, isVertical && styles$4.modifiers.vertical, formatBreakpointMods(inset, styles$4), className) }, (component !== 'hr' && { role: 'separator' }), props)));
};
Divider.displayName = 'Divider';

const DropdownSeparator = (_a) => {
    var { className = '', 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref, // Types of Ref are different for React.FC vs React.Component
    ouiaId, ouiaSafe } = _a, props = __rest(_a, ["className", "ref", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps(DropdownSeparator.displayName, ouiaId, ouiaSafe);
    return (react.createElement(DropdownArrowContext.Consumer, null, context => (react.createElement(InternalDropdownItem, Object.assign({}, props, { context: context, component: react.createElement(Divider, { component: DividerVariant.div }), className: className, role: "separator" }, ouiaProps)))));
};
DropdownSeparator.displayName = 'DropdownSeparator';

const EllipsisVIconConfig = {
  name: 'EllipsisVIcon',
  height: 512,
  width: 192,
  svgPath: 'M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z',
  yOffset: 0,
  xOffset: 0,
};

const EllipsisVIcon = createIcon(EllipsisVIconConfig);

class Toggle extends react.Component {
    constructor() {
        super(...arguments);
        this.buttonRef = react.createRef();
        this.componentDidMount = () => {
            document.addEventListener('mousedown', this.onDocClick);
            document.addEventListener('touchstart', this.onDocClick);
            document.addEventListener('keydown', this.onEscPress, { capture: true });
        };
        this.componentWillUnmount = () => {
            document.removeEventListener('mousedown', this.onDocClick);
            document.removeEventListener('touchstart', this.onDocClick);
            document.removeEventListener('keydown', this.onEscPress, { capture: true });
        };
        this.onDocClick = (event) => {
            const { isOpen, parentRef, onToggle, getMenuRef } = this.props;
            const menuRef = getMenuRef && getMenuRef();
            const clickedOnToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const clickedWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (isOpen && !(clickedOnToggle || clickedWithinMenu)) {
                onToggle(false, event);
                this.buttonRef.current.focus();
            }
        };
        this.onEscPress = (event) => {
            const { parentRef, getMenuRef } = this.props;
            const keyCode = event.keyCode || event.which;
            const menuRef = getMenuRef && getMenuRef();
            const escFromToggle = parentRef && parentRef.current && parentRef.current.contains(event.target);
            const escFromWithinMenu = menuRef && menuRef.contains && menuRef.contains(event.target);
            if (this.props.isOpen &&
                (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
                (escFromToggle || escFromWithinMenu)) {
                this.props.onToggle(false, event);
                this.buttonRef.current.focus();
            }
        };
        this.onKeyDown = (event) => {
            if (event.key === 'Tab' && !this.props.isOpen) {
                return;
            }
            if (!this.props.bubbleEvent) {
                event.stopPropagation();
            }
            event.preventDefault();
            if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.props.isOpen) {
                this.props.onToggle(!this.props.isOpen, event);
            }
            else if ((event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') && !this.props.isOpen) {
                this.props.onToggle(!this.props.isOpen, event);
                this.props.onEnter();
            }
        };
    }
    render() {
        const _a = this.props, { className, children, isOpen, isDisabled, isPlain, isPrimary, isSplitButton, onToggle, 'aria-haspopup': ariaHasPopup, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        isActive, bubbleEvent, onEnter, parentRef, getMenuRef, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        id, type } = _a, props = __rest(_a, ["className", "children", "isOpen", "isDisabled", "isPlain", "isPrimary", "isSplitButton", "onToggle", 'aria-haspopup', "isActive", "bubbleEvent", "onEnter", "parentRef", "getMenuRef", "id", "type"]);
        return (react.createElement(DropdownContext.Consumer, null, ({ toggleClass }) => (react.createElement("button", Object.assign({}, props, { id: id, ref: this.buttonRef, className: css(isSplitButton ? styles$3.dropdownToggleButton : toggleClass || styles$3.dropdownToggle, isActive && styles$3.modifiers.active, isPlain && styles$3.modifiers.plain, isPrimary && styles$3.modifiers.primary, className), type: type || 'button', onClick: event => onToggle(!isOpen, event), "aria-expanded": isOpen, "aria-haspopup": ariaHasPopup, onKeyDown: event => this.onKeyDown(event), disabled: isDisabled }), children))));
    }
}
Toggle.displayName = 'Toggle';
Toggle.defaultProps = {
    className: '',
    isOpen: false,
    isActive: false,
    isDisabled: false,
    isPlain: false,
    isPrimary: false,
    isSplitButton: false,
    onToggle: () => { },
    onEnter: () => { },
    bubbleEvent: false
};

const KebabToggle = (_a) => {
    var { id = '', 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children = null, className = '', isOpen = false, 'aria-label': ariaLabel = 'Actions', parentRef = null, getMenuRef = null, isActive = false, isPlain = false, isDisabled = false, bubbleEvent = false, onToggle = () => undefined, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref } = _a, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["id", "children", "className", "isOpen", 'aria-label', "parentRef", "getMenuRef", "isActive", "isPlain", "isDisabled", "bubbleEvent", "onToggle", "ref"]);
    return (react.createElement(Toggle, Object.assign({ id: id, className: className, isOpen: isOpen, "aria-label": ariaLabel, parentRef: parentRef, getMenuRef: getMenuRef, isActive: isActive, isPlain: isPlain, isDisabled: isDisabled, onToggle: onToggle, bubbleEvent: bubbleEvent }, props),
        react.createElement(EllipsisVIcon, null)));
};
KebabToggle.displayName = 'KebabToggle';

const StarIconConfig = {
  name: 'StarIcon',
  height: 512,
  width: 576,
  svgPath: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
  yOffset: 0,
  xOffset: 0,
};

const StarIcon = createIcon(StarIconConfig);

var check = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "check": "pf-c-check",
  "checkBody": "pf-c-check__body",
  "checkDescription": "pf-c-check__description",
  "checkInput": "pf-c-check__input",
  "checkLabel": "pf-c-check__label",
  "modifiers": {
    "standalone": "pf-m-standalone",
    "disabled": "pf-m-disabled"
  }
};
});

var checkStyles = /*@__PURE__*/getDefaultExportFromCjs(check);

const AngleDownIconConfig = {
  name: 'AngleDownIcon',
  height: 512,
  width: 320,
  svgPath: 'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
  yOffset: 0,
  xOffset: 0,
};

const AngleDownIcon = createIcon(AngleDownIconConfig);

var popover = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = {
  "button": "pf-c-button",
  "modifiers": {
    "noPadding": "pf-m-no-padding",
    "widthAuto": "pf-m-width-auto",
    "top": "pf-m-top",
    "bottom": "pf-m-bottom",
    "left": "pf-m-left",
    "right": "pf-m-right"
  },
  "popover": "pf-c-popover",
  "popoverArrow": "pf-c-popover__arrow",
  "popoverBody": "pf-c-popover__body",
  "popoverContent": "pf-c-popover__content",
  "popoverFooter": "pf-c-popover__footer",
  "title": "pf-c-title"
};
});

var styles$5 = /*@__PURE__*/getDefaultExportFromCjs(popover);

const PopoverContent = (_a) => {
    var { className = null, children } = _a, props = __rest(_a, ["className", "children"]);
    return (react.createElement("div", Object.assign({ className: css(styles$5.popoverContent, className) }, props), children));
};
PopoverContent.displayName = 'PopoverContent';

const PopoverBody = (_a) => {
    var { children, id } = _a, props = __rest(_a, ["children", "id"]);
    return (react.createElement("div", Object.assign({ className: css(styles$5.popoverBody), id: id }, props), children));
};
PopoverBody.displayName = 'PopoverBody';

const PopoverHeader = (_a) => {
    var { children, id } = _a, props = __rest(_a, ["children", "id"]);
    return (react.createElement(Title, Object.assign({ headingLevel: "h6", size: TitleSizes.md, id: id }, props), children));
};
PopoverHeader.displayName = 'PopoverHeader';

const PopoverFooter = (_a) => {
    var { children, className = '' } = _a, props = __rest(_a, ["children", "className"]);
    return (react.createElement("footer", Object.assign({ className: css(styles$5.popoverFooter, className) }, props), children));
};
PopoverFooter.displayName = 'PopoverFooter';

const PopoverCloseButton = (_a) => {
    var { onClose = () => undefined } = _a, props = __rest(_a, ["onClose"]);
    const [closeButtonElement, setCloseButtonElement] = react.useState(null);
    react.useEffect(() => {
        closeButtonElement && closeButtonElement.addEventListener('click', onClose, false);
        return () => {
            closeButtonElement && closeButtonElement.removeEventListener('click', onClose, false);
        };
    }, [closeButtonElement]);
    return (react.createElement(FindRefWrapper, { onFoundRef: (foundRef) => setCloseButtonElement(foundRef) },
        react.createElement(Button, Object.assign({ variant: "plain", "aria-label": true }, props, { style: { pointerEvents: 'auto' } }),
            react.createElement(TimesIcon, null))));
};
PopoverCloseButton.displayName = 'PopoverCloseButton';

const PopoverArrow = (_a) => {
    var { className = '' } = _a, props = __rest(_a, ["className"]);
    return react.createElement("div", Object.assign({ className: css(styles$5.popoverArrow, className) }, props));
};
PopoverArrow.displayName = 'PopoverArrow';

const c_popover_MaxWidth = {
  "name": "--pf-c-popover--MaxWidth",
  "value": "none",
  "var": "var(--pf-c-popover--MaxWidth)"
};

const c_popover_MinWidth = {
  "name": "--pf-c-popover--MinWidth",
  "value": "auto",
  "var": "var(--pf-c-popover--MinWidth)"
};

var PopoverPosition;
(function (PopoverPosition) {
    PopoverPosition["auto"] = "auto";
    PopoverPosition["top"] = "top";
    PopoverPosition["bottom"] = "bottom";
    PopoverPosition["left"] = "left";
    PopoverPosition["right"] = "right";
})(PopoverPosition || (PopoverPosition = {}));
const Popover = (_a) => {
    var { children, position = 'top', enableFlip = true, className = '', isVisible = null, shouldClose = () => null, shouldOpen = () => null, 'aria-label': ariaLabel = '', bodyContent, headerContent = null, footerContent = null, appendTo = () => document.body, hideOnOutsideClick = true, onHide = () => null, onHidden = () => null, onShow = () => null, onShown = () => null, onMount = () => null, zIndex = 9999, minWidth = c_popover_MinWidth && c_popover_MinWidth.value, maxWidth = c_popover_MaxWidth && c_popover_MaxWidth.value, closeBtnAriaLabel = 'Close', showClose = true, distance = 25, 
    // For every initial starting position, there are 3 escape positions
    flipBehavior = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'], animationDuration = 300, id, withFocusTrap: propWithFocusTrap, boundary, tippyProps, reference, hasNoPadding = false, hasAutoWidth = false } = _a, rest = __rest(_a, ["children", "position", "enableFlip", "className", "isVisible", "shouldClose", "shouldOpen", 'aria-label', "bodyContent", "headerContent", "footerContent", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "minWidth", "maxWidth", "closeBtnAriaLabel", "showClose", "distance", "flipBehavior", "animationDuration", "id", "withFocusTrap", "boundary", "tippyProps", "reference", "hasNoPadding", "hasAutoWidth"]);
    // could make this a prop in the future (true | false | 'toggle')
    // const hideOnClick = true;
    const uniqueId = id || getUniqueId();
    const triggerManually = isVisible !== null;
    const [visible, setVisible] = react.useState(false);
    const [opacity, setOpacity] = react.useState(0);
    const [focusTrapActive, setFocusTrapActive] = react.useState(Boolean(propWithFocusTrap));
    const transitionTimerRef = react.useRef(null);
    const showTimerRef = react.useRef(null);
    const hideTimerRef = react.useRef(null);
    react.useEffect(() => {
        onMount();
    }, []);
    react.useEffect(() => {
        if (triggerManually) {
            if (isVisible) {
                show();
            }
            else {
                hide();
            }
        }
    }, [isVisible, triggerManually]);
    const show = (withFocusTrap) => {
        onShow();
        if (transitionTimerRef.current) {
            clearTimeout(transitionTimerRef.current);
        }
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }
        showTimerRef.current = setTimeout(() => {
            setVisible(true);
            setOpacity(1);
            propWithFocusTrap !== false && withFocusTrap && setFocusTrapActive(true);
            onShown();
        }, 0);
    };
    const hide = () => {
        onHide();
        if (showTimerRef.current) {
            clearTimeout(showTimerRef.current);
        }
        hideTimerRef.current = setTimeout(() => {
            setOpacity(0);
            setFocusTrapActive(false);
            transitionTimerRef.current = setTimeout(() => {
                setVisible(false);
                onHidden();
            }, animationDuration);
        }, 0);
    };
    const positionModifiers = {
        top: styles$5.modifiers.top,
        bottom: styles$5.modifiers.bottom,
        left: styles$5.modifiers.left,
        right: styles$5.modifiers.right
    };
    const hasCustomMinWidth = minWidth !== c_popover_MinWidth.value;
    const hasCustomMaxWidth = maxWidth !== c_popover_MaxWidth.value;
    const onDocumentKeyDown = (event) => {
        if (event.keyCode === KEY_CODES.ESCAPE_KEY && visible) {
            if (triggerManually) {
                shouldClose(null, hide, event);
            }
            else {
                hide();
            }
        }
    };
    const onDocumentClick = (event, triggerElement, popperElement) => {
        if (hideOnOutsideClick && visible) {
            // check if we clicked within the popper, if so don't do anything
            const isChild = popperElement && popperElement.contains(event.target);
            if (isChild) {
                // clicked within the popper
                return;
            }
            if (triggerManually) {
                shouldClose(null, hide, event);
            }
            else {
                hide();
            }
        }
    };
    const onTriggerEnter = (event) => {
        if (event.keyCode === KEY_CODES.ENTER) {
            if (!visible) {
                if (triggerManually) {
                    shouldOpen(show, event);
                }
                else {
                    show(true);
                }
            }
            else {
                if (triggerManually) {
                    shouldClose(null, hide, event);
                }
                else {
                    hide();
                }
            }
        }
    };
    const onTriggerClick = (event) => {
        if (triggerManually) {
            if (visible) {
                shouldClose(null, hide, event);
            }
            else {
                shouldOpen(show, event);
            }
        }
        else {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }
    };
    const onContentMouseDown = () => {
        if (focusTrapActive) {
            setFocusTrapActive(false);
        }
    };
    const closePopover = (event) => {
        event.stopPropagation();
        if (triggerManually) {
            shouldClose(null, hide, event);
        }
        else {
            hide();
        }
    };
    const content = (react.createElement(FocusTrap, Object.assign({ active: focusTrapActive, focusTrapOptions: {
            returnFocusOnDeactivate: true,
            clickOutsideDeactivates: true,
            fallbackFocus: () => {
                // If the popover's trigger is focused but scrolled out of view,
                // FocusTrap will throw an error when the Enter button is used on the trigger.
                // That is because the Popover is hidden when its trigger is out of view.
                // Provide a fallback in that case.
                let node = null;
                if (document && document.activeElement) {
                    node = document.activeElement;
                }
                return node;
            }
        }, preventScrollOnDeactivate: true, className: css(styles$5.popover, hasNoPadding && styles$5.modifiers.noPadding, hasAutoWidth && styles$5.modifiers.widthAuto, className), role: "dialog", "aria-modal": "true", "aria-label": headerContent ? undefined : ariaLabel, "aria-labelledby": headerContent ? `popover-${uniqueId}-header` : undefined, "aria-describedby": `popover-${uniqueId}-body`, onMouseDown: onContentMouseDown, style: {
            minWidth: hasCustomMinWidth ? minWidth : null,
            maxWidth: hasCustomMaxWidth ? maxWidth : null,
            opacity,
            transition: getOpacityTransition(animationDuration)
        } }, rest),
        react.createElement(PopoverArrow, null),
        react.createElement(PopoverContent, null,
            showClose && react.createElement(PopoverCloseButton, { onClose: closePopover, "aria-label": closeBtnAriaLabel }),
            headerContent && (react.createElement(PopoverHeader, { id: `popover-${uniqueId}-header` }, typeof headerContent === 'function' ? headerContent(hide) : headerContent)),
            react.createElement(PopoverBody, { id: `popover-${uniqueId}-body` }, typeof bodyContent === 'function' ? bodyContent(hide) : bodyContent),
            footerContent && (react.createElement(PopoverFooter, { id: `popover-${uniqueId}-footer` }, typeof footerContent === 'function' ? footerContent(hide) : footerContent)))));
    return (react.createElement(Popper, { trigger: children, reference: reference, popper: content, popperMatchesTriggerWidth: false, appendTo: appendTo, isVisible: visible, positionModifiers: positionModifiers, distance: distance, placement: position, onTriggerClick: onTriggerClick, onTriggerEnter: onTriggerEnter, onDocumentClick: onDocumentClick, onDocumentKeyDown: onDocumentKeyDown, enableFlip: enableFlip, zIndex: zIndex, flipBehavior: flipBehavior }));
};
Popover.displayName = 'Popover';

export { AngleDownIcon as A, Button as B, DropdownItem as C, DropdownContext as D, DropdownWithContext as E, FocusTrap as F, DropdownDirection as G, toCamel as H, Title as I, Popover as J, KEY_CODES as K, Dropdown as L, KebabToggle as M, DropdownPosition as N, Popper as P, StarIcon as S, Tooltip as T, ValidatedOptions as V, capitalize as a, ButtonVariant as b, css as c, TimesIcon as d, canUseDOM as e, Toggle as f, DropdownSeparator as g, Divider as h, debounce as i, getUniqueId as j, checkStyles as k, buttonStyles as l, getOUIAProps as m, getDefaultOUIAId as n, fillTemplate as o, keyHandler as p, getNextIndex as q, TooltipPosition as r, styles$3 as s, trimLeft as t, useOUIAProps as u, formatBreakpointMods as v, Spinner as w, spinnerSize as x, isElementInView as y, pluralize as z };
