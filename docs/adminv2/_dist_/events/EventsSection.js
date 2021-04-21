import React, { useContext, useState } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Button, Label, PageSection, Tab, TabTitleText, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import moment from "../../web_modules/moment.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { RealmContext } from "../context/realm-context/RealmContext.js";
import { InfoCircleIcon } from "../../web_modules/@patternfly/react-icons.js";
import { AdminEvents } from "./AdminEvents.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
export const EventsSection = () => {
  const {
    t
  } = useTranslation("events");
  const adminClient = useAdminClient();
  const {
    realm
  } = useContext(RealmContext);
  const [key, setKey] = useState("");

  const refresh = () => setKey(`${new Date().getTime()}`);

  const loader = async (first, max, search) => {
    const params = {
      first: first,
      max: max,
      realm
    };

    if (search) {
      console.log("how to search?", search);
    }

    return await adminClient.realms.findEvents({ ...params
    });
  };

  const StatusRow = event => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
      color: "red",
      icon: /*#__PURE__*/React.createElement(InfoCircleIcon, null)
    }, event.type));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "events:title",
    subKey: "events:eventExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "userEvents",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("userEvents"))
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "events:title",
    searchPlaceholderKey: "events:searchForEvent",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      onClick: refresh
    }, t("refresh")))),
    columns: [{
      name: "time",
      displayKey: "events:time",
      cellRenderer: row => moment(row.time).fromNow()
    }, {
      name: "userId",
      displayKey: "events:user"
    }, {
      name: "type",
      displayKey: "events:eventType",
      cellRenderer: StatusRow
    }, {
      name: "ipAddress",
      displayKey: "events:ipAddress"
    }, {
      name: "clientId",
      displayKey: "events:client"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("emptyEvents"),
      instructions: t("emptyEventsInstructions")
    })
  })), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "adminEvents",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("adminEvents"))
  }, /*#__PURE__*/React.createElement(AdminEvents, null)))));
};