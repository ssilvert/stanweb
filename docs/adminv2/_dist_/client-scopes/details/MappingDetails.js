import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useHistory, useParams, useRouteMatch } from "../../../web_modules/react-router-dom.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { ActionGroup, AlertVariant, Button, ButtonVariant, Checkbox, DropdownItem, Flex, FlexItem, FormGroup, PageSection, Select, SelectOption, SelectVariant, Switch, TextInput, ValidatedOptions } from "../../../web_modules/@patternfly/react-core.js";
import { ViewHeader } from "../../components/view-header/ViewHeader.js";
import { useAdminClient, asyncStateFetch } from "../../context/auth/AdminClient.js";
import { Controller, useForm } from "../../../web_modules/react-hook-form.js";
import { useConfirmDialog } from "../../components/confirm-dialog/ConfirmDialog.js";
import { useAlerts } from "../../components/alert/Alerts.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { convertFormValuesToObject, convertToFormValues } from "../../util.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
export const MappingDetails = () => {
  const {
    t
  } = useTranslation("client-scopes");
  const adminClient = useAdminClient();
  const handleError = useErrorHandler();
  const {
    addAlert
  } = useAlerts();
  const {
    id,
    mapperId
  } = useParams();
  const {
    register,
    errors,
    setValue,
    control,
    handleSubmit
  } = useForm();
  const [mapping, setMapping] = useState();
  const [typeOpen, setTypeOpen] = useState(false);
  const [configProperties, setConfigProperties] = useState();
  const history = useHistory();
  const serverInfo = useServerInfo();
  const {
    url
  } = useRouteMatch();
  const isGuid = /^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/;
  useEffect(() => {
    return asyncStateFetch(async () => {
      if (mapperId.match(isGuid)) {
        const data = await adminClient.clientScopes.findProtocolMapper({
          id,
          mapperId
        });

        if (data) {
          Object.entries(data).map(entry => {
            convertToFormValues(entry[1], "config", setValue);
          });
        }

        const mapperTypes = serverInfo.protocolMapperTypes[data.protocol];
        const properties = mapperTypes.find(type => type.id === data.protocolMapper)?.properties;
        return {
          configProperties: properties,
          mapping: data
        };
      } else {
        const scope = await adminClient.clientScopes.findOne({
          id
        });
        const protocolMappers = serverInfo.protocolMapperTypes[scope.protocol];
        const mapping = protocolMappers.find(mapper => mapper.id === mapperId);
        return {
          mapping: {
            name: mapping.name,
            protocol: scope.protocol,
            protocolMapper: mapperId
          }
        };
      }
    }, result => {
      setConfigProperties(result.configProperties);
      setMapping(result.mapping);
    }, handleError);
  }, []);
  const [toggleDeleteDialog, DeleteConfirm] = useConfirmDialog({
    titleKey: "client-scopes:deleteMappingTitle",
    messageKey: "client-scopes:deleteMappingConfirm",
    continueButtonLabel: "common:delete",
    continueButtonVariant: ButtonVariant.danger,
    onConfirm: async () => {
      try {
        await adminClient.clientScopes.delClientScopeMappings({
          client: id,
          id: mapperId
        }, []);
        addAlert(t("mappingDeletedSuccess"), AlertVariant.success);
        history.push(`${url}/${id}`);
      } catch (error) {
        addAlert(t("mappingDeletedError", {
          error
        }), AlertVariant.danger);
      }
    }
  });

  const save = async formMapping => {
    const config = convertFormValuesToObject(formMapping.config);
    const map = { ...mapping,
      ...formMapping,
      config
    };
    const key = mapperId.match(isGuid) ? "Updated" : "Created";

    try {
      if (mapperId.match(isGuid)) {
        await adminClient.clientScopes.updateProtocolMapper({
          id,
          mapperId
        }, map);
      } else {
        await adminClient.clientScopes.addProtocolMapper({
          id
        }, map);
      }

      addAlert(t(`mapping${key}Success`), AlertVariant.success);
    } catch (error) {
      addAlert(t(`mapping${key}Error`, {
        error
      }), AlertVariant.danger);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DeleteConfirm, null), /*#__PURE__*/React.createElement(ViewHeader, {
    titleKey: mapping ? mapping.name : t("addMapper"),
    subKey: mapperId.match(isGuid) ? mapperId : "",
    badge: mapping?.protocol,
    dropdownItems: mapperId.match(isGuid) ? [/*#__PURE__*/React.createElement(DropdownItem, {
      key: "delete",
      value: "delete",
      onClick: toggleDeleteDialog
    }, t("common:delete"))] : undefined
  }), /*#__PURE__*/React.createElement(PageSection, {
    variant: "light"
  }, /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-clients"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, !mapperId.match(isGuid) && /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:name"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:mapperName",
      forLabel: t("common:name"),
      forID: "name"
    }),
    fieldId: "name",
    isRequired: true,
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default,
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: true
    }),
    type: "text",
    id: "name",
    name: "name",
    validated: errors.name ? ValidatedOptions.error : ValidatedOptions.default
  }))), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("realmRolePrefix"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:prefix",
      forLabel: t("realmRolePrefix"),
      forID: "prefix"
    }),
    fieldId: "prefix"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "prefix",
    name: "config.usermodel-realmRoleMapping-rolePrefix"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("multiValued"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:multiValued",
      forLabel: t("multiValued"),
      forID: "multiValued"
    }),
    fieldId: "multiValued"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.multivalued",
    control: control,
    defaultValue: "false",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "multiValued",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("tokenClaimName"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:tokenClaimName",
      forLabel: t("tokenClaimName"),
      forID: "claimName"
    }),
    fieldId: "claimName"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "claimName",
    name: "config.claim-name"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("claimJsonType"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "client-scopes-help:claimJsonType",
      forLabel: t("claimJsonType"),
      forID: "claimJsonType"
    }),
    fieldId: "claimJsonType"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.jsonType-label",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "claimJsonType",
      onToggle: () => setTypeOpen(!typeOpen),
      onSelect: (_, value) => {
        onChange(value);
        setTypeOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "aria-label": t("claimJsonType"),
      isOpen: typeOpen
    }, configProperties && configProperties.find(property => property.name === "jsonType.label")?.options.map(option => /*#__PURE__*/React.createElement(SelectOption, {
      selected: option === value,
      key: option,
      value: option
    })))
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("addClaimTo"),
    fieldId: "addClaimTo"
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Controller, {
    name: "config.id-token-claim",
    defaultValue: "false",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Checkbox, {
      label: t("idToken"),
      id: "idToken",
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Controller, {
    name: "config.access-token-claim",
    defaultValue: "false",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Checkbox, {
      label: t("accessToken"),
      id: "accessToken",
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FlexItem, null, /*#__PURE__*/React.createElement(Controller, {
    name: "config.userinfo-token-claim",
    defaultValue: "false",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Checkbox, {
      label: t("userInfo"),
      id: "userInfo",
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })))), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, t("common:cancel"))))));
};