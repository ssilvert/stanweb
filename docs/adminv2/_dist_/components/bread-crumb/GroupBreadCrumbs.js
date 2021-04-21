import React, { useEffect } from "../../../web_modules/react.js";
import { Link, useHistory, useLocation } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Breadcrumb, BreadcrumbItem } from "../../../web_modules/@patternfly/react-core.js";
import { useSubGroups } from "../../groups/SubGroupsContext.js";
import { useRealm } from "../../context/realm-context/RealmContext.js";
export const GroupBreadCrumbs = () => {
  const {
    t
  } = useTranslation();
  const {
    clear,
    remove,
    subGroups
  } = useSubGroups();
  const {
    realm
  } = useRealm();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    return history.listen(({
      pathname
    }) => {
      if (pathname.indexOf("/groups") === -1 || pathname.endsWith("/groups")) {
        clear();
      }
    });
  }, [history]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, subGroups.length !== 0 && /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: "home"
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/${realm}/groups`
  }, t("groups"))), subGroups.map((group, i) => /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: i,
    isActive: subGroups.length - 1 === i
  }, subGroups.length - 1 !== i && /*#__PURE__*/React.createElement(Link, {
    to: location.pathname.substr(0, location.pathname.indexOf(group.id) + group.id.length),
    onClick: () => remove(group)
  }, group.name), subGroups.length - 1 === i && /*#__PURE__*/React.createElement(React.Fragment, null, group.name)))));
};