import React, { useContext, useEffect, useState } from "../../../web_modules/react.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import i18n from "../../i18n.js";
import { AdminClient, asyncStateFetch } from "../auth/AdminClient.js";
import { RealmContext } from "../realm-context/RealmContext.js";
export class WhoAmI {
  constructor(homeRealm, me) {
    this.homeRealm = homeRealm;
    this.me = me;

    if (this.me !== undefined && this.me.locale) {
      i18n.changeLanguage(this.me.locale, error => {
        if (error) console.error("Unable to set locale to", this.me?.locale);
      });
    }
  }

  getDisplayName() {
    if (this.me === undefined) return "";
    return this.me.displayName;
  }
  /**
   * Return the realm I am signed in to.
   */


  getHomeRealm() {
    let realm = this.homeRealm;
    if (realm === undefined) realm = this.me?.realm;
    if (realm === undefined) realm = "master"; // this really can't happen in the real world

    return realm;
  }

  canCreateRealm() {
    return this.me !== undefined && this.me.createRealm;
  }

  getRealmAccess() {
    if (this.me === undefined) return {};
    return this.me.realm_access;
  }

}
export const WhoAmIContext = /*#__PURE__*/React.createContext({
  refresh: () => {},
  whoAmI: new WhoAmI()
});
export const WhoAmIContextProvider = ({
  children
}) => {
  const adminClient = useContext(AdminClient);
  const handleError = useErrorHandler();
  const {
    realm,
    setRealm
  } = useContext(RealmContext);
  const [whoAmI, setWhoAmI] = useState(new WhoAmI());
  const [key, setKey] = useState(0);
  useEffect(() => {
    return asyncStateFetch(() => adminClient.whoAmI.find({
      realm: adminClient.keycloak?.realm
    }), me => {
      const whoAmI = new WhoAmI(adminClient.keycloak?.realm, me);

      if (!realm) {
        setRealm(whoAmI.getHomeRealm());
      }

      setWhoAmI(whoAmI);
    }, handleError);
  }, [key]);
  return /*#__PURE__*/React.createElement(WhoAmIContext.Provider, {
    value: {
      refresh: () => setKey(key + 1),
      whoAmI
    }
  }, children);
};