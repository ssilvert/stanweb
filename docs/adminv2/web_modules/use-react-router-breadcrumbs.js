import './common/_commonjsHelpers-2c0027bd.js';
import { r as react } from './common/index-9e3d5f03.js';
import './common/index-0288a116.js';
import { k as useLocation, m as matchPath } from './common/react-router-4de028fb.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This script exports a hook that accepts a routes array of objects
 * and an options object.
 *
 * API:
 *
 * useBreadcrumbs(
 *   routes?: Array<Route>,
 *   options? Object<Options>,
 * ): Array<BreadcrumbData>
 *
 * More Info:
 *
 * https://github.com/icd2k3/use-react-router-breadcrumbs
 *
 */
var DEFAULT_MATCH_OPTIONS = {
  exact: true
};
var NO_BREADCRUMB = 'NO_BREADCRUMB';
/**
 * This method was "borrowed" from https://stackoverflow.com/a/28339742
 * we used to use the humanize-string package, but it added a lot of bundle
 * size and issues with compilation. This 4-liner seems to cover most cases.
 */

var humanize = function humanize(str) {
  return str.replace(/^[\s_]+|[\s_]+$/g, '').replace(/[_\s]+/g, ' ').replace(/^[a-z]/, function (m) {
    return m.toUpperCase();
  });
};
/**
 * Renders and returns the breadcrumb complete
 * with `match`, `location`, and `key` props.
 */


var render = function render(_a) {
  var Breadcrumb = _a.breadcrumb,
      match = _a.match,
      location = _a.location,
      rest = __rest(_a, ["breadcrumb", "match", "location"]);

  var componentProps = __assign({
    match: match,
    location: location,
    key: match.url
  }, rest);

  return __assign(__assign({}, componentProps), {
    breadcrumb: typeof Breadcrumb === 'string' ? react.createElement('span', {
      key: componentProps.key
    }, Breadcrumb) : react.createElement(Breadcrumb, __assign({}, componentProps))
  });
};
/**
 * Small helper method to get a default breadcrumb if the user hasn't provided one.
 */


var getDefaultBreadcrumb = function getDefaultBreadcrumb(_a) {
  var currentSection = _a.currentSection,
      location = _a.location,
      pathSection = _a.pathSection;
  var match = matchPath(pathSection, __assign(__assign({}, DEFAULT_MATCH_OPTIONS), {
    path: pathSection
  }))
  /* istanbul ignore next: this is hard to mock in jest :( */
  || {
    url: 'not-found'
  };
  return render({
    breadcrumb: humanize(currentSection),
    match: match,
    location: location
  });
};
/**
 * Loops through the route array (if provided) and returns either a
 * user-provided breadcrumb OR a sensible default (if enabled)
 */


var getBreadcrumbMatch = function getBreadcrumbMatch(_a) {
  var currentSection = _a.currentSection,
      disableDefaults = _a.disableDefaults,
      excludePaths = _a.excludePaths,
      location = _a.location,
      pathSection = _a.pathSection,
      routes = _a.routes;
  var breadcrumb; // Check the optional `excludePaths` option in `options` to see if the
  // current path should not include a breadcrumb.

  var getIsPathExcluded = function getIsPathExcluded(path) {
    return matchPath(pathSection, {
      path: path,
      exact: true,
      strict: false
    }) != null;
  };

  if (excludePaths && excludePaths.some(getIsPathExcluded)) {
    return NO_BREADCRUMB;
  } // Loop through the route array and see if the user has provided a custom breadcrumb.


  routes.some(function (_a) {
    var userProvidedBreadcrumb = _a.breadcrumb,
        matchOptions = _a.matchOptions,
        path = _a.path,
        rest = __rest(_a, ["breadcrumb", "matchOptions", "path"]);

    if (!path) {
      throw new Error('withBreadcrumbs: `path` must be provided in every route object');
    }

    var match = matchPath(pathSection, __assign(__assign({}, matchOptions || DEFAULT_MATCH_OPTIONS), {
      path: path
    })); // If user passed breadcrumb: null OR custom match options to suppress a breadcrumb
    // we need to know NOT to add it to the matches array
    // see: `if (breadcrumb !== NO_BREADCRUMB)` below.

    if (match && userProvidedBreadcrumb === null || !match && matchOptions) {
      breadcrumb = NO_BREADCRUMB;
      return true;
    }

    if (match) {
      // This covers the case where a user may be extending their react-router route
      // config with breadcrumbs, but also does not want default breadcrumbs to be
      // automatically generated (opt-in).
      if (!userProvidedBreadcrumb && disableDefaults) {
        breadcrumb = NO_BREADCRUMB;
        return true;
      }

      breadcrumb = render(__assign({
        // Although we have a match, the user may be passing their react-router config object
        // which we support. The route config object may not have a `breadcrumb` param specified.
        // If this is the case, we should provide a default via `humanize`.
        breadcrumb: userProvidedBreadcrumb || humanize(currentSection),
        match: match,
        location: location
      }, rest));
      return true;
    }

    return false;
  }); // User provided a breadcrumb prop, or we generated one above.

  if (breadcrumb) {
    return breadcrumb;
  } // If there was no breadcrumb provided and user has disableDefaults turned on.


  if (disableDefaults) {
    return NO_BREADCRUMB;
  } // If the above conditionals don't fire, generate a default breadcrumb based on the path.


  return getDefaultBreadcrumb({
    pathSection: pathSection,
    // include a "Home" breadcrumb by default (can be overrode or disabled in config).
    currentSection: pathSection === '/' ? 'Home' : currentSection,
    location: location
  });
};
/**
 * Splits the pathname into sections, then search for matches in the routes
 * a user-provided breadcrumb OR a sensible default.
 */


var getBreadcrumbs = function getBreadcrumbs(_a) {
  var routes = _a.routes,
      location = _a.location,
      _b = _a.options,
      options = _b === void 0 ? {} : _b;
  var matches = [];
  var pathname = location.pathname;
  pathname.split('?')[0] // Split pathname into sections.
  .split('/') // Reduce over the sections and call `getBreadcrumbMatch()` for each section.
  .reduce(function (previousSection, currentSection, index) {
    // Combine the last route section with the currentSection.
    // For example, `pathname = /1/2/3` results in match checks for
    // `/1`, `/1/2`, `/1/2/3`.
    var pathSection = !currentSection ? '/' : previousSection + "/" + currentSection; // Ignore trailing slash or double slashes in the URL

    if (pathSection === '/' && index !== 0) {
      return '';
    }

    var breadcrumb = getBreadcrumbMatch(__assign({
      currentSection: currentSection,
      location: location,
      pathSection: pathSection,
      routes: routes
    }, options)); // Add the breadcrumb to the matches array
    // unless the user has explicitly passed.
    // { path: x, breadcrumb: null } to disable.

    if (breadcrumb !== NO_BREADCRUMB) {
      matches.push(breadcrumb);
    }

    return pathSection === '/' ? '' : pathSection;
  }, '');
  return matches;
};
/**
 * Takes a route array and recursively flattens it IF there are
 * nested routes in the config.
 */

var flattenRoutes = function flattenRoutes(routes) {
  return routes.reduce(function (arr, route) {
    if (route.routes) {
      return arr.concat(__spreadArrays([route], flattenRoutes(route.routes)));
    }

    return arr.concat(route);
  }, []);
};
/**
 * Default hook function export.
 */


var useReactRouterBreadcrumbs = function useReactRouterBreadcrumbs(routes, options) {
  return getBreadcrumbs({
    routes: flattenRoutes(routes || []),
    location: useLocation(),
    options: options
  });
};

export default useReactRouterBreadcrumbs;
