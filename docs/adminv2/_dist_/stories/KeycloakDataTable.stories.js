import React from "../../web_modules/react.js";
import clients from "../clients/__tests__/mock-clients.json.proxy.js";
import { KeycloakDataTable } from "../components/table-toolbar/KeycloakDataTable.js";
export default {
  title: "Keycloak Data Table",
  component: KeycloakDataTable
};

const wait = (ms, value) => new Promise(resolve => setTimeout(resolve, ms, value));

const Template = args => /*#__PURE__*/React.createElement(KeycloakDataTable, args);

export const SimpleList = Template.bind({});
SimpleList.args = {
  ariaLabelKey: "clients:clientList",
  searchPlaceholderKey: "common:search",
  columns: [{
    name: "clientId",
    displayKey: "clients:clientID"
  }, {
    name: "protocol",
    displayKey: "common:type"
  }, {
    name: "description",
    displayKey: "common:description",
    cellFormatters: [data => {
      return data ? data : "—";
    }]
  }, {
    name: "baseUrl",
    displayKey: "clients:homeURL"
  }],
  loader: () => clients
};
export const LoadingList = Template.bind({});
LoadingList.args = {
  ariaLabelKey: "clients:clientList",
  searchPlaceholderKey: "common:search",
  columns: [{
    name: "title"
  }, {
    name: "body"
  }],
  isPaginated: true,
  loader: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const value = await res.json();
    return wait(3000, value);
  }
};
export const EmptyList = Template.bind({});
EmptyList.args = {
  ariaLabelKey: "clients:clientList",
  searchPlaceholderKey: "common:search",
  columns: [{
    name: "title"
  }, {
    name: "body"
  }],
  loader: () => Promise.resolve([]),
  emptyState: /*#__PURE__*/React.createElement("h1", null, "Wait what? No content?")
};