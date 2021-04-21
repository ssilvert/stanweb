import React, { createContext, useContext } from "../../../web_modules/react.js";
import { sortProviders } from "../../util.js";
import { DataLoader } from "../../components/data-loader/DataLoader.js";
import { useAdminClient } from "../auth/AdminClient.js";
export const ServerInfoContext = /*#__PURE__*/createContext({});
export const useServerInfo = () => useContext(ServerInfoContext);
export const useLoginProviders = () => {
  return sortProviders(useServerInfo().providers["login-protocol"].providers);
};
export const ServerInfoProvider = ({
  children
}) => {
  const adminClient = useAdminClient();

  const loader = async () => {
    return await adminClient.serverInfo.find();
  };

  return /*#__PURE__*/React.createElement(DataLoader, {
    loader: loader
  }, serverInfo => /*#__PURE__*/React.createElement(ServerInfoContext.Provider, {
    value: serverInfo
  }, children));
};