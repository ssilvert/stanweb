import React, { createContext, useContext, useState } from "../../web_modules/react.js";
const SubGroupContext = /*#__PURE__*/createContext({
  subGroups: [],
  setSubGroups: () => {},
  clear: () => {},
  remove: () => {},
  currentGroup: () => {
    return {};
  }
});
export const SubGroups = ({
  children
}) => {
  const [subGroups, setSubGroups] = useState([]);

  const clear = () => setSubGroups([]);

  const remove = group => setSubGroups(subGroups.slice(0, subGroups.findIndex(g => g.id === group.id)));

  const currentGroup = () => subGroups[subGroups.length - 1];

  return /*#__PURE__*/React.createElement(SubGroupContext.Provider, {
    value: {
      subGroups,
      setSubGroups,
      clear,
      remove,
      currentGroup
    }
  }, children);
};
export const useSubGroups = () => useContext(SubGroupContext);