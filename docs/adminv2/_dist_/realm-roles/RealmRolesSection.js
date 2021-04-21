import React from "../../web_modules/react.js";
import { PageSection } from "../../web_modules/@patternfly/react-core.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { RolesList } from "./RolesList.js";
export const RealmRolesSection = () => {
  const adminClient = useAdminClient();

  const loader = (first, max, search) => {
    const params = {
      first: first,
      max: max
    };
    const searchParam = search || "";

    if (searchParam) {
      params.search = searchParam;
    }

    return adminClient.roles.find(params);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "roles:title",
    subKey: "roles:roleExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light",
    padding: {
      default: "noPadding"
    }
  }, /*#__PURE__*/React.createElement(RolesList, {
    loader: loader
  })));
};