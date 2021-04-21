import React from "../../web_modules/react.js";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState.js";

function handleClick() {
  alert("Button clicked to add a thing.");
}

export default {
  title: "List empty state",
  component: ListEmptyState
};

const Template = args => /*#__PURE__*/React.createElement(ListEmptyState, args);

export const View = Template.bind({});
View.args = {
  message: "No things",
  instructions: "You haven't created any things for this list.",
  primaryActionText: "Add it now!",
  secondaryActions: [{
    text: "Add a thing",
    onClick: handleClick
  }]
};