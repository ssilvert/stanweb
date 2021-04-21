import React, { createContext, useContext, useEffect, useState } from "../../../web_modules/react.js";
import { RealmContext } from "../../context/realm-context/RealmContext.js";
import { WhoAmIContext } from "../../context/whoami/WhoAmI.js";
export const AccessContext = /*#__PURE__*/createContext({
  hasAccess: () => false,
  hasSomeAccess: () => false
});
export const useAccess = () => useContext(AccessContext);
export const AccessContextProvider = ({
  children
}) => {
  const {
    whoAmI
  } = useContext(WhoAmIContext);
  const {
    realm
  } = useContext(RealmContext);
  const [access, setAccess] = useState([]);
  useEffect(() => {
    if (whoAmI.getRealmAccess()[realm]) {
      setAccess(whoAmI.getRealmAccess()[realm]);
    }
  }, [whoAmI, realm]);

  const hasAccess = (...types) => {
    return types.every(type => type === "anyone" || access.includes(type));
  };

  const hasSomeAccess = (...types) => {
    return types.some(type => type === "anyone" || access.includes(type));
  };

  return /*#__PURE__*/React.createElement(AccessContext.Provider, {
    value: {
      hasAccess,
      hasSomeAccess
    }
  }, children);
};