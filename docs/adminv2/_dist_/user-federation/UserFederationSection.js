function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useEffect, useState } from "../../web_modules/react.js";
import { useHistory, useRouteMatch } from "../../web_modules/react-router-dom.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { AlertVariant, ButtonVariant, Card, CardTitle, DropdownItem, Gallery, GalleryItem, PageSection, Split, SplitItem, Text, TextContent, TextVariants } from "../../web_modules/@patternfly/react-core.js";
import { KeycloakCard } from "../components/keycloak-card/KeycloakCard.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { DatabaseIcon } from "../../web_modules/@patternfly/react-icons.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { RealmContext } from "../context/realm-context/RealmContext.js";
import { useAdminClient, asyncStateFetch } from "../context/auth/AdminClient.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import "./user-federation.css.proxy.js";
export const UserFederationSection = () => {
  const [userFederations, setUserFederations] = useState();
  const {
    addAlert
  } = useAlerts();
  const {
    t
  } = useTranslation("user-federation");
  const {
    realm
  } = useContext(RealmContext);
  const adminClient = useAdminClient();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  const handleError = useErrorHandler();
  const {
    url
  } = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    return asyncStateFetch(() => {
      const testParams = {
        parentId: realm,
        type: "org.keycloak.storage.UserStorageProvider"
      };
      return adminClient.components.find(testParams);
    }, userFederations => {
      setUserFederations(userFederations);
    }, handleError);
  }, [key]);
  const ufAddProviderDropdownItems = [/*#__PURE__*/React.createElement(DropdownItem, {
    key: "itemLDAP",
    onClick: () => history.push(`${url}/ldap/new`)
  }, "LDAP"), /*#__PURE__*/React.createElement(DropdownItem, {
    key: "itemKerberos",
    onClick: () => history.push(`${url}/kerberos/new`)
  }, "Kerberos")];
  const learnMoreLinkProps = {
    title: t("common:learnMore"),
    href: "https://www.keycloak.org/docs/latest/server_admin/index.html#_user-storage-federation"
  };
  let cards;
  const [currentCard, setCurrentCard] = useState("");
  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: t("userFedDeleteConfirmTitle"),
    messageKey: t("userFedDeleteConfirm"),
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.components.del({
          id: currentCard
        });
        refresh();
        addAlert(t("userFedDeletedSuccess"), AlertVariant.success);
      } catch (error) {
        addAlert(t("userFedDeleteError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const toggleDeleteForCard = id => {
    setCurrentCard(id);
    toggleDeleteDialog();
  };

  if (userFederations) {
    cards = userFederations.map((userFederation, index) => {
      const ufCardDropdownItems = [/*#__PURE__*/React.createElement(DropdownItem, {
        key: `${index}-cardDelete`,
        onClick: () => {
          toggleDeleteForCard(userFederation.id);
        },
        "data-testid": "card-delete"
      }, t("common:delete"))];
      return /*#__PURE__*/React.createElement(GalleryItem, {
        key: index,
        className: "keycloak-admin--user-federation__gallery-item"
      }, /*#__PURE__*/React.createElement(KeycloakCard, {
        id: userFederation.id,
        dropdownItems: ufCardDropdownItems,
        providerId: userFederation.providerId,
        title: userFederation.name,
        footerText: userFederation.providerId === "ldap" ? "LDAP" : "Kerberos",
        labelText: userFederation.config["enabled"][0] !== "false" ? `${t("common:enabled")}` : `${t("common:disabled")}`,
        labelColor: userFederation.config["enabled"][0] !== "false" ? "blue" : "gray"
      }));
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, _extends({
    titleKey: "userFederation",
    subKey: "user-federation:userFederationExplanation",
    subKeyLinkProps: learnMoreLinkProps
  }, userFederations && userFederations.length > 0 ? {
    lowerDropdownItems: ufAddProviderDropdownItems,
    lowerDropdownMenuTitle: "user-federation:addNewProvider"
  } : {})), /*#__PURE__*/React.createElement(PageSection, null, userFederations && userFederations.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(Gallery, {
    hasGutter: true
  }, cards)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextContent, null, /*#__PURE__*/React.createElement(Text, {
    component: TextVariants.p
  }, t("getStarted"))), /*#__PURE__*/React.createElement(TextContent, null, /*#__PURE__*/React.createElement(Text, {
    className: "pf-u-mt-lg",
    component: TextVariants.h2
  }, t("providers"))), /*#__PURE__*/React.createElement("hr", {
    className: "pf-u-mb-lg"
  }), /*#__PURE__*/React.createElement(Gallery, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(Card, {
    isHoverable: true,
    onClick: () => history.push(`${url}/kerberos/new`),
    "data-testid": "kerberos-card"
  }, /*#__PURE__*/React.createElement(CardTitle, null, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(DatabaseIcon, {
    size: "lg"
  })), /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, t("addKerberos"))))), /*#__PURE__*/React.createElement(Card, {
    isHoverable: true,
    onClick: () => history.push(`${url}/ldap/new`),
    "data-testid": "ldap-card"
  }, /*#__PURE__*/React.createElement(CardTitle, null, /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(DatabaseIcon, {
    size: "lg"
  })), /*#__PURE__*/React.createElement(SplitItem, {
    isFilled: true
  }, t("addLdap")))))))));
};