import React, { useState } from "../../web_modules/react.js";
import { Link } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Button, ButtonVariant, Chip, ChipGroup, Form, InputGroup, PageSection, PageSectionVariants, Text, TextContent, TextInput } from "../../web_modules/@patternfly/react-core.js";
import { SearchIcon } from "../../web_modules/@patternfly/react-icons.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
import { useAdminClient } from "../context/auth/AdminClient.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";
export const SearchGroups = () => {
  const {
    t
  } = useTranslation("groups");
  const adminClient = useAdminClient();
  const {
    realm
  } = useRealm();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerms, setSearchTerms] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const deleteTerm = id => {
    const index = searchTerms.indexOf(id);
    searchTerms.splice(index, 1);
    setSearchTerms([...searchTerms]);
    refresh();
  };

  const addTerm = () => {
    setSearchTerms([...searchTerms, searchTerm]);
    setSearchTerm("");
    refresh();
  };

  const GroupNameCell = group => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    key: group.id,
    to: `/${realm}/groups/${group.link}`
  }, group.name));

  const flatten = (groups, id) => {
    let result = [];

    for (const group of groups) {
      const link = `${id || ""}${id ? "/" : ""}${group.id}`;
      result.push({ ...group,
        link
      });

      if (group.subGroups) {
        result = [...result, ...flatten(group.subGroups, link)];
      }
    }

    return result;
  };

  const loader = async (first, max) => {
    const params = {
      first: first,
      max: max
    };
    let result = [];

    if (searchTerms[0]) {
      result = await adminClient.groups.find({ ...params,
        search: searchTerms[0]
      });
      result = flatten(result);

      for (const searchTerm of searchTerms) {
        result = result.filter(group => group.name?.includes(searchTerm));
      }
    }

    setSearchCount(result.length);
    return result;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageSection, {
    variant: PageSectionVariants.light
  }, /*#__PURE__*/React.createElement(TextContent, {
    className: "pf-u-mr-sm"
  }, /*#__PURE__*/React.createElement(Text, {
    component: "h1"
  }, t("searchForGroups"))), /*#__PURE__*/React.createElement(Form, {
    className: "pf-u-mt-sm keycloak__form",
    onSubmit: e => {
      e.preventDefault();
      addTerm();
    }
  }, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(TextInput, {
    name: "search",
    "data-testid": "group-search",
    type: "search",
    "aria-label": t("search"),
    placeholder: t("searchGroups"),
    value: searchTerm,
    onChange: value => setSearchTerm(value)
  }), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "search-button",
    variant: ButtonVariant.control,
    "aria-label": t("search"),
    onClick: addTerm
  }, /*#__PURE__*/React.createElement(SearchIcon, null))), /*#__PURE__*/React.createElement(ChipGroup, null, searchTerms.map(term => /*#__PURE__*/React.createElement(Chip, {
    key: term,
    onClick: () => deleteTerm(term)
  }, term))))), /*#__PURE__*/React.createElement(PageSection, {
    variant: searchCount === 0 ? "light" : "default"
  }, /*#__PURE__*/React.createElement(KeycloakDataTable, {
    key: key,
    ariaLabelKey: "groups:groups",
    isPaginated: true,
    loader: loader,
    columns: [{
      name: "name",
      displayKey: "groups:groupName",
      cellRenderer: GroupNameCell
    }, {
      name: "path",
      displayKey: "groups:path"
    }],
    emptyState: /*#__PURE__*/React.createElement(ListEmptyState, {
      message: t("noSearchResults"),
      instructions: t("noSearchResultsInstructions"),
      hasIcon: false
    })
  })));
};