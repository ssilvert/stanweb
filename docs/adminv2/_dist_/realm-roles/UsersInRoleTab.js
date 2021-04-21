import React, { useContext } from "../../web_modules/react.js";
import { useHistory, useParams } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Button, PageSection, Popover } from "../../web_modules/@patternfly/react-core.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { boolFormatter, emptyFormatter } from "../util.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { QuestionCircleIcon } from "../../web_modules/@patternfly/react-icons.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { HelpContext } from "../components/help-enabler/HelpHeader.js";
export const UsersInRoleTab = () => {
  const history = useHistory();
  const {
    realm
  } = useRealm();
  const {
    t
  } = useTranslation("roles");
  const {
    id
  } = useParams();
  const adminClient = useAdminClient();

  const loader = async (first, max) => {
    const role = await adminClient.roles.findOneById({
      id: id
    });
    const usersWithRole = await adminClient.roles.findUsersWithRole({
      name: role.name,
      first: first,
      max: max
    });
    return usersWithRole;
  };

  const {
    enabled
  } = useContext(HelpContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    "data-testid": "users-page",
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    isPaginated: true,
    loader: loader,
    ariaLabelKey: "roles:roleList",
    searchPlaceholderKey: "",
    toolbarItem: enabled && /*#__PURE__*/React.createElement(Popover, {
      "aria-label": "Basic popover",
      position: "bottom",
      bodyContent: /*#__PURE__*/React.createElement("div", null, t("roles:whoWillAppearPopoverText"), /*#__PURE__*/React.createElement(Button, {
        className: "kc-groups-link",
        variant: "link",
        onClick: () => history.push(`/${realm}/groups`)
      }, t("groups")), t("or"), /*#__PURE__*/React.createElement(Button, {
        className: "kc-users-link",
        variant: "link",
        onClick: () => history.push(`/${realm}/users`)
      }, t("users"), ".")),
      footerContent: t("roles:whoWillAppearPopoverFooterText")
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      className: "kc-who-will-appear-button",
      key: "who-will-appear-button",
      icon: /*#__PURE__*/React.createElement(QuestionCircleIcon, null)
    }, t("roles:whoWillAppearLinkText"))),
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      hasIcon: true,
      message: t("noDirectUsers"),
      instructions: /*#__PURE__*/React.createElement("div", null, t("noUsersEmptyStateDescription"), /*#__PURE__*/React.createElement(Button, {
        className: "kc-groups-link-empty-state",
        variant: "link",
        onClick: () => history.push(`/${realm}/groups`)
      }, t("groups")), t("or"), /*#__PURE__*/React.createElement(Button, {
        className: "kc-users-link-empty-state",
        variant: "link",
        onClick: () => history.push(`/${realm}/users`)
      }, t("users")), t("noUsersEmptyStateDescriptionContinued"))
    }),
    columns: [{
      name: "username",
      displayKey: "roles:userName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "email",
      displayKey: "roles:email",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "lastName",
      displayKey: "roles:lastName",
      cellFormatters: [emptyFormatter()]
    }, {
      name: "firstName",
      displayKey: "roles:firstName",
      cellFormatters: [boolFormatter(), emptyFormatter()]
    }]
  })));
};