import { Brand, Button, Card, CardBody, CardTitle, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, EmptyState, EmptyStateBody, Grid, GridItem, Label, List, ListItem, ListVariant, PageSection, Text, TextContent, Title } from "../../web_modules/@patternfly/react-core.js";
import React from "../../web_modules/react.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import _ from "../../web_modules/lodash.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { useServerInfo } from "../context/server-info/ServerInfoProvider.js";
import "./dashboard.css.proxy.js";
import { toUpperCase } from "../util.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";

const EmptyDashboard = () => {
  const {
    t
  } = useTranslation("dashboard");
  const {
    realm,
    setRealm
  } = useRealm();
  return /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    variant: "large"
  }, /*#__PURE__*/React.createElement(Brand, {
    src: "./icon.svg",
    alt: "Keycloak icon",
    className: "keycloak__dashboard_icon"
  }), /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h4",
    size: "3xl"
  }, t("welcome")), /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h4",
    size: "4xl"
  }, realm), /*#__PURE__*/React.createElement(EmptyStateBody, null, t("introduction")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => setRealm("master")
  }, t("common:realmInfo"))));
};

const Dashboard = () => {
  const {
    t
  } = useTranslation("dashboard");
  const {
    realm
  } = useRealm();
  const serverInfo = useServerInfo();

  const enabledFeatures = _.xor(serverInfo.profileInfo?.disabledFeatures, serverInfo.profileInfo?.experimentalFeatures, serverInfo.profileInfo?.previewFeatures);

  const isExperimentalFeature = feature => {
    return serverInfo.profileInfo?.experimentalFeatures?.includes(feature);
  };

  const isPreviewFeature = feature => {
    return serverInfo.profileInfo?.previewFeatures?.includes(feature);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(TextContent, {
    className: "pf-u-mr-sm"
  }, /*#__PURE__*/React.createElement(Text, {
    component: "h1"
  }, toUpperCase(realm), " realm"))), /*#__PURE__*/React.createElement(PageSection, null, /*#__PURE__*/React.createElement(Grid, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(GridItem, {
    lg: 2,
    sm: 12
  }, /*#__PURE__*/React.createElement(Card, {
    className: "keycloak__dashboard_card"
  }, /*#__PURE__*/React.createElement(CardTitle, null, t("serverInfo")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(DescriptionList, null, /*#__PURE__*/React.createElement(DescriptionListGroup, null, /*#__PURE__*/React.createElement(DescriptionListTerm, null, t("version")), /*#__PURE__*/React.createElement(DescriptionListDescription, null, serverInfo.systemInfo?.version), /*#__PURE__*/React.createElement(DescriptionListTerm, null, t("product")), /*#__PURE__*/React.createElement(DescriptionListDescription, null, toUpperCase(serverInfo.profileInfo?.name))))))), /*#__PURE__*/React.createElement(GridItem, {
    lg: 10,
    sm: 12
  }, /*#__PURE__*/React.createElement(Card, {
    className: "keycloak__dashboard_card"
  }, /*#__PURE__*/React.createElement(CardTitle, null, t("profile")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(DescriptionList, null, /*#__PURE__*/React.createElement(DescriptionListGroup, null, /*#__PURE__*/React.createElement(DescriptionListTerm, null, t("enabledFeatures"), " ", /*#__PURE__*/React.createElement(HelpItem, {
    forID: "enabledFeatures",
    forLabel: t("enabledFeatures"),
    helpText: "dashboard:infoEnabledFeatures"
  })), /*#__PURE__*/React.createElement(DescriptionListDescription, null, /*#__PURE__*/React.createElement(List, {
    variant: ListVariant.inline
  }, enabledFeatures.map(feature => /*#__PURE__*/React.createElement(ListItem, {
    key: feature
  }, feature, " ", isExperimentalFeature(feature) ? /*#__PURE__*/React.createElement(Label, {
    color: "orange"
  }, t("experimental")) : /*#__PURE__*/React.createElement(React.Fragment, null), isPreviewFeature(feature) ? /*#__PURE__*/React.createElement(Label, {
    color: "blue"
  }, t("preview")) : /*#__PURE__*/React.createElement(React.Fragment, null)))))), /*#__PURE__*/React.createElement(DescriptionListGroup, null, /*#__PURE__*/React.createElement(DescriptionListTerm, null, t("disabledFeatures"), " ", /*#__PURE__*/React.createElement(HelpItem, {
    forID: "disabledFeatures",
    forLabel: t("disabledFeatures"),
    helpText: "dashboard:infoDisabledFeatures"
  })), /*#__PURE__*/React.createElement(DescriptionListDescription, null, /*#__PURE__*/React.createElement(List, {
    variant: ListVariant.inline
  }, serverInfo.profileInfo?.disabledFeatures?.map(feature => /*#__PURE__*/React.createElement(ListItem, {
    key: feature
  }, feature))))))))))));
};

export const DashboardSection = () => {
  const {
    realm
  } = useRealm();
  const isMasterRealm = realm === "master";
  return /*#__PURE__*/React.createElement(React.Fragment, null, !isMasterRealm && /*#__PURE__*/React.createElement(EmptyDashboard, null), isMasterRealm && /*#__PURE__*/React.createElement(Dashboard, null));
};