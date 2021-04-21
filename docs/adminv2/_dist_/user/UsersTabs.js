import React, { useEffect, useState } from "../../web_modules/react.js";
import { AlertVariant, PageSection, Tab, TabTitleText } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { useForm } from "../../web_modules/react-hook-form.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { UserForm } from "./UserForm.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useHistory, useParams, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { KeycloakTabs } from "../components/keycloak-tabs/KeycloakTabs.js";
import { UserGroups } from "./UserGroups.js";
export const UsersTabs = () => {
  const {
    t
  } = useTranslation("roles");
  const {
    addAlert
  } = useAlerts();
  const {
    url
  } = useRouteMatch();
  const history = useHistory();
  const adminClient = useAdminClient();
  const form = useForm({
    mode: "onChange"
  });
  const {
    id
  } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    const update = async () => {
      if (id) {
        const fetchedUser = await adminClient.users.findOne({
          id
        });
        setUser(fetchedUser.username);
      }
    };

    setTimeout(update, 100);
  }, []);

  const save = async user => {
    try {
      if (id) {
        await adminClient.users.update({
          id: user.id
        }, user);
        addAlert(t("users:userSaved"), AlertVariant.success);
      } else {
        await adminClient.users.create(user);
        addAlert(t("users:userCreated"), AlertVariant.success);
        history.push(url.substr(0, url.lastIndexOf("/")));
      }
    } catch (error) {
      addAlert(t("users:userCreateError", {
        error: error.response?.data?.errorMessage || error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: user || t("users:createUser"),
    subKey: ""
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, id && /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "details",
    "data-testid": "user-details-tab",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("details"))
  }, /*#__PURE__*/React.createElement(UserForm, {
    form: form,
    save: save,
    editMode: true
  })), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "groups",
    "data-testid": "user-groups-tab",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("groups"))
  }, /*#__PURE__*/React.createElement(UserGroups, null))), !id && /*#__PURE__*/React.createElement(UserForm, {
    form: form,
    save: save,
    editMode: false
  })));
};