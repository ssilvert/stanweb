import React from "../../web_modules/react.js";
import { Link } from "../../web_modules/react-router-dom.js";
import { PageSection } from "../../web_modules/@patternfly/react-core.js";
import moment from "../../web_modules/moment.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { useAdminClient } from "../context/auth/AdminClient.js";

const Clients = row => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, Object.values(row.clients).map(client => /*#__PURE__*/React.createElement(Link, {
    key: client,
    to: "",
    className: "pf-u-mx-sm"
  }, client)));
};

export const SessionsSection = () => {
  const adminClient = useAdminClient();

  const loader = async () => {
    const activeClients = await adminClient.sessions.find();
    const clientSessions = (await Promise.all(activeClients.map(client => adminClient.clients.listSessions({
      id: client.id
    })))).flat();
    const userSessions = (await Promise.all(clientSessions.map(session => adminClient.users.listSessions({
      id: session.userId
    })))).flat();
    return userSessions;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: "sessions:title",
    subKey: "sessions:sessionExplain"
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    loader: loader,
    ariaLabelKey: "session:title",
    searchPlaceholderKey: "sessions:searchForSession",
    columns: [{
      name: "username",
      displayKey: "sessions:subject"
    }, {
      name: "lastAccess",
      displayKey: "sessions:lastAccess",
      cellRenderer: row => moment(row.lastAccess).fromNow()
    }, {
      name: "start",
      displayKey: "sessions:startDate",
      cellRenderer: row => moment(row.lastAccess).format("LLL")
    }, {
      name: "clients",
      displayKey: "sessions:accessedClients",
      cellRenderer: Clients
    }]
  })));
};