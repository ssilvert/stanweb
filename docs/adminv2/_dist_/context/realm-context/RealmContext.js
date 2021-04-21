import React, { useContext, useState } from "../../../web_modules/react.js";
export const RealmContext = /*#__PURE__*/React.createContext({
  realm: "",
  setRealm: () => {}
});
export const RealmContextProvider = ({
  children
}) => {
  const [realm, setRealm] = useState("");
  return /*#__PURE__*/React.createElement(RealmContext.Provider, {
    value: {
      realm,
      setRealm
    }
  }, children);
};
export const useRealm = () => useContext(RealmContext);