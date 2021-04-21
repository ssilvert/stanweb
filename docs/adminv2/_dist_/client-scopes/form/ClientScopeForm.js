import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useHistory, useParams } from "../../../web_modules/react-router-dom.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { ActionGroup, AlertVariant, Button, Form, FormGroup, PageSection, Select, SelectOption, SelectVariant, Switch, Tab, TabTitleText, TextInput, ValidatedOptions } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller, useForm } from "../../../web_modules/react-hook-form.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { KeycloakTabs } from "../../components/keycloak-tabs/KeycloakTabs.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { useLoginProviders } from "../../context/server-info/ServerInfoProvider.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { convertFormValuesToObject, convertToFormValues } from "../../util.js";
import { MapperList } from "../details/MapperList.js";
export const ClientScopeForm = () => {
  const {
    t
  } = useTranslation("client-scopes");
  const {
    register,
    control,
    handleSubmit,
    errors,
    setValue
  } = useForm();
  const history = useHistory();
  const [clientScope, setClientScope] = useState();
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const providers = useLoginProviders();
  const {
    id
  } = useParams();
  const [open, isOpen] = useState(false);
  const {
    addAlert
  } = useAlerts();
  const [key, setKey] = useState(0);

  const refresh = () => setKey(new Date().getTime());

  useEffect(() => {
    return asyncStateFetch(async () => {
      if (id) {
        const data = await adminClient.clientScopes.findOne({
          id
        });

        if (data) {
          Object.entries(data).map(entry => {
            if (entry[0] === "attributes") {
              convertToFormValues(entry[1], "attributes", setValue);
            }

            setValue(entry[0], entry[1]);
          });
        }

        return data;
      }
    }, data => setClientScope(data), handleError);
  }, [key]);

  const save = async clientScopes => {
    try {
      clientScopes.attributes = convertFormValuesToObject(clientScopes.attributes);

      if (id) {
        await adminClient.clientScopes.update({
          id
        }, clientScopes);
      } else {
        await adminClient.clientScopes.create(clientScopes);
      }

      addAlert(t((id ? "update" : "create") + "Success"), AlertVariant.success);
    } catch (error) {
      addAlert(t((id ? "update" : "create") + "Error", {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: clientScope ? clientScope.name : "client-scopes:createClientScope",
    subKey: "client-scopes:clientScopeExplain",
    badge: clientScope ? clientScope.protocol : undefined
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(KeycloakTabs, {
    isBox: true
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "settings",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("common:settings"))
  }, /*#__PURE__*/React.createElement(Form, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    className: "pf-u-mt-md"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:name"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:name",
      forLabel: t("common:name"),
      forID: "kc-name"
    }),
    fieldId: "kc-name",
    isRequired: true,
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default,
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: true
    }),
    type: "text",
    id: "kc-name",
    name: "name",
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:description"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:description",
      forLabel: t("common:description"),
      forID: "kc-description"
    }),
    fieldId: "kc-description"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register,
    type: "text",
    id: "kc-description",
    name: "description"
  })), !id && /*#__PURE__*/React.createElement(FormGroup, {
    label: t("protocol"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:protocol",
      forLabel: "protocol",
      forID: "kc-protocol"
    }),
    fieldId: "kc-protocol"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "protocol",
    defaultValue: providers[0],
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-protocol",
      required: true,
      onToggle: () => isOpen(!open),
      onSelect: (_, value) => {
        onChange(value);
        isOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("selectEncryptionType"),
      isOpen: open
    }, providers.map(option => /*#__PURE__*/React.createElement(SelectOption, {
      selected: option === value,
      key: option,
      value: option
    })))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("displayOnConsentScreen"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:displayOnConsentScreen",
      forLabel: t("displayOnConsentScreen"),
      forID: "kc-display.on.consent.screen"
    }),
    fieldId: "kc-display.on.consent.screen"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.display-on-consent-screen",
    control: control,
    defaultValue: "false",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-display.on.consent.screen",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("consentScreenText"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:consentScreenText",
      forLabel: t("consentScreenText"),
      forID: "kc-consent-screen-text"
    }),
    fieldId: "kc-consent-screen-text"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register,
    type: "text",
    id: "kc-consent-screen-text",
    name: "attributes.consent-screen-text"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("includeInTokenScope"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:includeInTokenScope",
      forLabel: t("includeInTokenScope"),
      forID: "includeInTokenScope"
    }),
    fieldId: "includeInTokenScope"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.include-in-token-scope",
    control: control,
    defaultValue: "false",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "includeInTokenScope",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("guiOrder"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:guiOrder",
      forLabel: t("guiOrder"),
      forID: "kc-gui-order"
    }),
    fieldId: "kc-gui-order",
    helperTextInvalid: t("shouldBeANumber"),
    validated: errors.attributes && errors.attributes["gui_order"] ? ValidatedOptions.error : ValidatedOptions.default
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      pattern: /^([0-9]*)$/
    }),
    type: "text",
    id: "kc-gui-order",
    name: "attributes.gui-order",
    validated: errors.attributes && errors.attributes["gui_order"] ? ValidatedOptions.error : ValidatedOptions.default
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => history.push("/client-scopes/")
  }, t("common:cancel"))))), /*#__PURE__*/React.createElement(Tab, {
    isHidden: !id,
    eventKey: "mappers",
    title: /*#__PURE__*/React.createElement(TabTitleText, null, t("mappers"))
  }, clientScope && /*#__PURE__*/React.createElement(MapperList, {
    clientScope: clientScope,
    refresh: refresh
  })))));
};