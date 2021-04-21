import React, { useContext, useState } from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Button, Modal, ModalVariant, ToolbarItem } from "../../web_modules/@patternfly/react-core.js";
import moment from "../../web_modules/moment.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { RealmContext } from "../context/realm-context/RealmContext.js";
import { Table, TableBody, TableHeader, TableVariant } from "../../web_modules/@patternfly/react-table.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";

const DisplayDialog = ({
  titleKey,
  onClose,
  children
}) => {
  const {
    t
  } = useTranslation("events");
  return /*#__PURE__*/React.createElement(Modal, {
    variant: ModalVariant.medium,
    title: t(titleKey),
    isOpen: true,
    onClose: onClose
  }, children);
};

export const AdminEvents = () => {
  const {
    t
  } = useTranslation("events");
  const adminClient = useAdminClient();
  const {
    realm
  } = useContext(RealmContext);
  const [key, setKey] = useState("");

  const refresh = () => setKey(`${new Date().getTime()}`);

  const [authEvent, setAuthEvent] = useState();
  const [representationEvent, setRepresentationEvent] = useState();

  const loader = async (first, max, search) => {
    const params = {
      first: first,
      max: max,
      realm
    };

    if (search) {
      console.log("how to search?", search);
    }

    return await adminClient.realms.findAdminEvents({ ...params
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, authEvent && /*#__PURE__*/React.createElement(DisplayDialog, {
    titleKey: "auth",
    onClose: () => setAuthEvent(undefined)
  }, /*#__PURE__*/React.createElement(Table, {
    "aria-label": "authData",
    variant: TableVariant.compact,
    cells: [t("attribute"), t("value")],
    rows: Object.entries(authEvent.authDetails)
  }, /*#__PURE__*/React.createElement(TableHeader, null), /*#__PURE__*/React.createElement(TableBody, null))), representationEvent && /*#__PURE__*/React.createElement(DisplayDialog, {
    titleKey: "representation",
    onClose: () => setRepresentationEvent(undefined)
  }, "some json from the changed values"), /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: loader,
    isPaginated: true,
    ariaLabelKey: "events:adminEvents",
    searchPlaceholderKey: "events:searchForEvent",
    toolbarItem: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToolbarItem, null, /*#__PURE__*/React.createElement(Button, {
      onClick: refresh
    }, t("refresh")))),
    actions: [{
      title: t("auth"),
      onRowClick: event => setAuthEvent(event)
    }, {
      title: t("representation"),
      onRowClick: event => setRepresentationEvent(event)
    }],
    columns: [{
      name: "time",
      displayKey: "events:time",
      cellRenderer: row => moment(row.time).fromNow()
    }, {
      name: "resourcePath",
      displayKey: "events:resourcePath"
    }, {
      name: "resourceType",
      displayKey: "events:resourceType"
    }, {
      name: "operationType",
      displayKey: "events:operationType"
    }, {
      name: "",
      displayKey: "events:user",
      cellRenderer: event => event.authDetails?.userId
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("emptyEvents"),
      instructions: t("emptyEventsInstructions")
    })
  }));
};