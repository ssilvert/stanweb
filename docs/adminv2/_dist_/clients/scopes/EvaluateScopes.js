import React, { useContext, useEffect, useRef, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { ClipboardCopy, EmptyState, EmptyStateBody, Form, FormGroup, Grid, GridItem, Select, SelectOption, SelectVariant, Split, SplitItem, Tab, TabContent, Tabs, TabTitleText, Text, TextArea, TextContent, Title } from "../../../web_modules/@patternfly/react-core.js";
import { QuestionCircleIcon } from "../../../web_modules/@patternfly/react-icons.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { RealmContext } from "../../context/realm-context/RealmContext.js";
import { KeycloakDataTable } from "../../components/table-toolbar/KeycloakDataTable.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import "./evaluate.css.proxy.js";

const ProtocolMappers = ({
  protocolMappers
}) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, [protocolMappers]);
  return /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: () => Promise.resolve(protocolMappers),
    ariaLabelKey: "clients:effectiveProtocolMappers",
    searchPlaceholderKey: "clients:searchForProtocol",
    columns: [{
      name: "mapperName",
      displayKey: "clients:name"
    }, {
      name: "containerName",
      displayKey: "clients:parentClientScope"
    }, {
      name: "type.category",
      displayKey: "common:category"
    }, {
      name: "type.priority",
      displayKey: "commmon:priority"
    }]
  });
};

const EffectiveRoles = ({
  effectiveRoles
}) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, [effectiveRoles]);
  return /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    loader: () => Promise.resolve(effectiveRoles),
    ariaLabelKey: "client:effectiveRoleScopeMappings",
    searchPlaceholderKey: "clients:searchForRole",
    columns: [{
      name: "name",
      displayKey: "clients:role"
    }, {
      name: "containerId",
      displayKey: "clients:origin"
    }]
  });
};

export const EvaluateScopes = ({
  clientId,
  protocol
}) => {
  const prefix = "openid";
  const {
    t
  } = useTranslation("clients");
  const adminClient = useAdminClient();
  const {
    realm
  } = useContext(RealmContext);
  const mapperTypes = useServerInfo().protocolMapperTypes[protocol];
  const [selectableScopes, setSelectableScopes] = useState([]);
  const [isScopeOpen, setIsScopeOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [selected, setSelected] = useState([prefix]);
  const [activeTab, setActiveTab] = useState(0);
  const [userItems, setUserItems] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState();
  const [key, setKey] = useState("");

  const refresh = () => setKey(`${new Date().getTime()}`);

  const [effectiveRoles, setEffectiveRoles] = useState([]);
  const [protocolMappers, setProtocolMappers] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const tabContent1 = useRef(null);
  const tabContent2 = useRef(null);
  const tabContent3 = useRef(null);
  const handleError = useErrorHandler();
  useEffect(() => {
    return asyncStateFetch(() => adminClient.clients.listOptionalClientScopes({
      id: clientId
    }), optionalClientScopes => setSelectableScopes(optionalClientScopes), handleError);
  }, []);

  const toString = user => {
    return t("common:fullName", {
      givenName: user.firstName,
      familyName: user.lastName
    }).trim() || user.username || "";
  };

  useEffect(() => {
    return asyncStateFetch(() => {
      if (userSearch.length > 2) {
        return adminClient.users.find({
          search: userSearch
        });
      } else {
        return Promise.resolve([]);
      }
    }, users => setUserItems(users.map(user => {
      user.toString = function () {
        return toString(this);
      };

      return user;
    }).map(user => /*#__PURE__*/React.createElement(SelectOption, {
      key: user.id,
      value: user
    }))), handleError);
  }, [userSearch]);
  useEffect(() => {
    return asyncStateFetch(async () => {
      const scope = selected.join(" ");
      const effectiveRoles = await adminClient.clients.evaluatePermission({
        id: clientId,
        roleContainer: realm,
        scope,
        type: "granted"
      });
      const mapperList = await adminClient.clients.evaluateListProtocolMapper({
        id: clientId,
        scope
      });
      return {
        mapperList,
        effectiveRoles
      };
    }, ({
      mapperList,
      effectiveRoles
    }) => {
      setEffectiveRoles(effectiveRoles);
      mapperList.map(mapper => {
        mapper.type = mapperTypes.filter(type => type.id === mapper.protocolMapper)[0];
      });
      setProtocolMappers(mapperList);
      refresh();
    }, handleError);
  }, [selected]);
  useEffect(() => {
    return asyncStateFetch(() => {
      const scope = selected.join(" ");

      if (user) {
        return adminClient.clients.evaluateGenerateAccessToken({
          id: clientId,
          userId: user.id,
          scope
        });
      } else {
        return Promise.resolve({});
      }
    }, accessToken => {
      setAccessToken(JSON.stringify(accessToken, undefined, 3));
    }, handleError);
  }, [user, selected]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextContent, {
    className: "keycloak__scopes_evaluate__intro"
  }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(QuestionCircleIcon, null), " ", t("clients-help:evaluateExplain"))), /*#__PURE__*/React.createElement(Form, {
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("scopeParameter"),
    fieldId: "scopeParameter",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:scopeParameter",
      forLabel: t("scopeParameter"),
      forID: "scopeParameter"
    })
  }, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, /*#__PURE__*/React.createElement(Select, {
    toggleId: "scopeParameter",
    variant: SelectVariant.typeaheadMulti,
    typeAheadAriaLabel: t("scopeParameter"),
    onToggle: () => setIsScopeOpen(!isScopeOpen),
    isOpen: isScopeOpen,
    selections: selected,
    onSelect: (_, value) => {
      const option = value;

      if (selected.includes(option)) {
        if (option !== prefix) {
          setSelected(selected.filter(item => item !== option));
        }
      } else {
        setSelected([...selected, option]);
      }
    },
    "aria-labelledby": t("scopeParameter"),
    placeholderText: t("scopeParameterPlaceholder")
  }, selectableScopes.map((option, index) => /*#__PURE__*/React.createElement(SelectOption, {
    key: index,
    value: option.name
  })))), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(ClipboardCopy, {
    className: "keycloak__scopes_evaluate__clipboard-copy"
  }, selected.join(" "))))), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("user"),
    fieldId: "user",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:user",
      forLabel: t("user"),
      forID: "user"
    })
  }, /*#__PURE__*/React.createElement(Select, {
    toggleId: "user",
    variant: SelectVariant.typeahead,
    typeAheadAriaLabel: t("user"),
    onToggle: () => setIsUserOpen(!isUserOpen),
    onFilter: e => {
      const value = e?.target.value || "";
      setUserSearch(value);
      return userItems;
    },
    onClear: () => {
      setUser(undefined);
      setUserSearch("");
    },
    selections: [user],
    onSelect: (_, value) => {
      setUser(value);
      setUserSearch("");
      setIsUserOpen(false);
    },
    isOpen: isUserOpen
  }))), /*#__PURE__*/React.createElement(Grid, {
    hasGutter: true,
    className: "keycloak__scopes_evaluate__tabs"
  }, /*#__PURE__*/React.createElement(GridItem, {
    span: 8
  }, /*#__PURE__*/React.createElement(TabContent, {
    "aria-labelledby": "pf-tab-0-effectiveProtocolMappers",
    eventKey: 0,
    id: "effectiveProtocolMappers",
    ref: tabContent1
  }, /*#__PURE__*/React.createElement(ProtocolMappers, {
    protocolMappers: protocolMappers
  })), /*#__PURE__*/React.createElement(TabContent, {
    "aria-labelledby": "pf-tab-0-effectiveRoleScopeMappings",
    eventKey: 1,
    id: "effectiveRoleScopeMappings",
    ref: tabContent2,
    hidden: true
  }, /*#__PURE__*/React.createElement(EffectiveRoles, {
    effectiveRoles: effectiveRoles
  })), /*#__PURE__*/React.createElement(TabContent, {
    "aria-labelledby": "pf-tab-0-generatedAccessToken",
    eventKey: 2,
    id: "generatedAccessToken",
    ref: tabContent3,
    hidden: true
  }, user && /*#__PURE__*/React.createElement(TextArea, {
    rows: 20,
    id: "accessToken",
    value: accessToken
  }), !user && /*#__PURE__*/React.createElement(EmptyState, {
    variant: "large"
  }, /*#__PURE__*/React.createElement(Title, {
    headingLevel: "h4",
    size: "lg"
  }, t("noGeneratedAccessToken")), /*#__PURE__*/React.createElement(EmptyStateBody, null, t("generatedAccessTokenIsDisabled"))))), /*#__PURE__*/React.createElement(GridItem, {
    span: 4
  }, /*#__PURE__*/React.createElement(Tabs, {
    key: key,
    isVertical: true,
    activeKey: activeTab,
    onSelect: (_, key) => setActiveTab(key)
  }, /*#__PURE__*/React.createElement(Tab, {
    id: "effectiveProtocolMappers",
    "aria-controls": "effectiveProtocolMappers",
    eventKey: 0,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("effectiveProtocolMappers")),
    tabContentRef: tabContent1
  }), /*#__PURE__*/React.createElement(Tab, {
    id: "effectiveRoleScopeMappings",
    "aria-controls": "effectiveRoleScopeMappings",
    eventKey: 1,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("effectiveRoleScopeMappings")),
    tabContentRef: tabContent2
  }), /*#__PURE__*/React.createElement(Tab, {
    id: "generatedAccessToken",
    "aria-controls": "generatedAccessToken",
    eventKey: 2,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("generatedAccessToken")),
    tabContentRef: tabContent3
  })))));
};