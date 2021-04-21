import React, { isValidElement } from "../../../web_modules/react.js";
import { Link } from "../../../web_modules/react-router-dom.js";
import useBreadcrumbs from "../../../web_modules/use-react-router-breadcrumbs.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import _ from "../../../web_modules/lodash.js";
import { Breadcrumb, BreadcrumbItem } from "../../../web_modules/@patternfly/react-core.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
import { routes } from "../../route-config.js";
import { GroupBreadCrumbs } from "./GroupBreadCrumbs.js";
export const PageBreadCrumbs = () => {
  const {
    t
  } = useTranslation();
  const {
    realm
  } = useRealm();

  const elementText = crumb => /*#__PURE__*/isValidElement(crumb.breadcrumb) && crumb.breadcrumb.props.children;

  const crumbs = _.uniqBy(useBreadcrumbs(routes(t), {
    excludePaths: ["/", `/${realm}`]
  }), elementText);

  return /*#__PURE__*/React.createElement(React.Fragment, null, crumbs.length > 1 && /*#__PURE__*/React.createElement(Breadcrumb, null, crumbs.map(({
    match,
    breadcrumb: crumb
  }, i) => /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: i,
    isActive: crumbs.length - 1 === i
  }, crumbs.length - 1 !== i && /*#__PURE__*/React.createElement(Link, {
    to: match.url
  }, crumb), crumbs.length - 1 === i && /*#__PURE__*/React.createElement(React.Fragment, null, crumb)))), /*#__PURE__*/React.createElement(GroupBreadCrumbs, null));
};