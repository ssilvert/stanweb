import React, { useEffect, useState } from "../../web_modules/react.js";
import { useHistory } from "../../web_modules/react-router-dom.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Controller, useForm } from "../../web_modules/react-hook-form.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import { ActionGroup, AlertVariant, Button, ButtonVariant, ClipboardCopy, DropdownItem, DropdownSeparator, FormGroup, PageSection, Select, SelectOption, SelectVariant, Stack, StackItem, Switch, Tab, Tabs, TabTitleText, TextInput } from "../../web_modules/@patternfly/react-core.js";
import { getBaseUrl, toUpperCase } from "../util.js";
import { useConfirmDialog } from "../components/confirm-dialog/ConfirmDialog.js";
import { useAdminClient, asyncStateFetch } from "../context/auth/AdminClient.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { ViewHeader } from "../components/view-header/ViewHeader.js";
import { useAlerts } from "../components/alert/Alerts.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { FormattedLink } from "../components/external-link/FormattedLink.js";

const RealmSettingsHeader = ({
  save,
  onChange,
  value,
  realmName
}) => {
  const {
    t
  } = useTranslation("realm-settings");
  const adminClient = useAdminClient();
  const {
    addAlert
  } = useAlerts();
  const history = useHistory();
  const {
    setRealm
  } = useRealm();
  const [toggleDisableDialog, DisableConfirm] = useConfirmDialog({
    titleKey: "realm-settings:disableConfirmTitle",
    messageKey: "realm-settings:disableConfirm",
    continueButtonLabel: "common:disable",
    onConfirm: () => {
      onChange(!value);
      save();
    }
  });
  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "realm-settings:deleteConfirmTitle",
    messageKey: "realm-settings:deleteConfirm",
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.realms.del({
          realm: realmName
        });
        addAlert(t("deletedSuccess"), AlertVariant.success);
        setRealm("master");
        history.push("/master/");
      } catch (error) {
        addAlert(t("deleteError", {
          error
        }), AlertVariant.danger);
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DisableConfirm, null), /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: toUpperCase(realmName),
    subKey: "",
    dropdownItems: [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "import",
      onClick: () => {}
    }, t("partialImport")), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "export",
      onClick: () => {}
    }, t("partialExport")), /*#__PURE__*/React.createElement(DropdownSeparator, {
      key: "separator"
    }), /*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete",
      onClick: toggleDeleteDialog
    }, t("common:delete"))],
    isEnabled: value,
    onToggle: value => {
      if (!value) {
        toggleDisableDialog();
      } else {
        onChange(value);
        save();
      }
    }
  }));
};

const requireSslTypes = ["all", "external", "none"];
export const RealmSettingsSection = () => {
  const {
    t
  } = useTranslation("realm-settings");
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const {
    realm: realmName
  } = useRealm();
  const {
    addAlert
  } = useAlerts();
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit
  } = useForm();
  const [realm, setRealm] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const baseUrl = getBaseUrl(adminClient);
  useEffect(() => {
    return asyncStateFetch(() => adminClient.realms.findOne({
      realm: realmName
    }), realm => {
      setRealm(realm);
      setupForm(realm);
    }, handleError);
  }, []);

  const setupForm = realm => {
    Object.entries(realm).map(entry => setValue(entry[0], entry[1]));
  };

  const save = async realm => {
    try {
      await adminClient.realms.update({
        realm: realmName
      }, realm);
      setRealm(realm);
      addAlert(t("saveSuccess"), AlertVariant.success);
    } catch (error) {
      addAlert(t("saveError", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Controller, {
    name: "enabled",
    control: control,
    defaultValue: true,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(RealmSettingsHeader, {
      value: value,
      onChange: onChange,
      realmName: realmName,
      save: () => save(getValues())
    })
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(Tabs, {
    activeKey: activeTab,
    onSelect: (_, key) => setActiveTab(key),
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: 0,
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("general"))
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "manage-realm",
    className: "pf-u-mt-lg",
    onSubmit: handleSubmit(save)
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("realmId"),
    fieldId: "kc-realm-id",
    isRequired: true
  }, /*#__PURE__*/React.createElement(ClipboardCopy, {
    isReadOnly: true
  }, realmName)), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("displayName"),
    fieldId: "kc-display-name"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-display-name",
    name: "displayName",
    ref: register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("htmlDisplayName"),
    fieldId: "kc-html-display-name"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-html-display-name",
    name: "displayNameHtml",
    ref: register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("frontendUrl"),
    fieldId: "kc-frontend-url",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "realm-settings-help:frontendUrl",
      forLabel: t("frontendUrl"),
      forID: "kc-frontend-url"
    })
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-frontend-url",
    name: "attributes.frontendUrl",
    ref: register
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("requireSsl"),
    fieldId: "kc-require-ssl",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "realm-settings-help:requireSsl",
      forLabel: t("requireSsl"),
      forID: "kc-require-ssl"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "sslRequired",
    defaultValue: "none",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-require-ssl",
      onToggle: () => setOpen(!open),
      onSelect: (_, value) => {
        onChange(value);
        setOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("requireSsl"),
      isOpen: open
    }, requireSslTypes.map(sslType => /*#__PURE__*/React.createElement(SelectOption, {
      selected: sslType === value,
      key: sslType,
      value: sslType
    }, t(`sslType.${sslType}`))))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("userManagedAccess"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "realm-settings-help:userManagedAccess",
      forLabel: t("userManagedAccess"),
      forID: "kc-user-manged-access"
    }),
    fieldId: "kc-user-manged-access"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "userManagedAccessAllowed",
    control: control,
    defaultValue: false,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-user-manged-access",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("endpoints"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "realm-settings-help:endpoints",
      forLabel: t("endpoints"),
      forID: "kc-endpoints"
    }),
    fieldId: "kc-endpoints"
  }, /*#__PURE__*/React.createElement(Stack, null, /*#__PURE__*/React.createElement(StackItem, null, /*#__PURE__*/React.createElement(FormattedLink, {
    href: `${baseUrl}realms/${realmName}/.well-known/openid-configuration`,
    title: t("openEndpointConfiguration")
  })), /*#__PURE__*/React.createElement(StackItem, null, /*#__PURE__*/React.createElement(FormattedLink, {
    href: `${baseUrl}realms/${realmName}/protocol/saml/descriptor`,
    title: t("samlIdentityProviderMetadata")
  })))), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => setupForm(realm)
  }, t("common:revert"))))))));
};