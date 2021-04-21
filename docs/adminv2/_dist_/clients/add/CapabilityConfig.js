import React from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { FormGroup, Switch, Checkbox, Grid, GridItem, InputGroup } from "../../../web_modules/@patternfly/react-core.js";
import { Controller, useFormContext } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
export const CapabilityConfig = ({
  unWrap,
  protocol: type
}) => {
  const {
    t
  } = useTranslation("clients");
  const {
    control,
    watch,
    setValue
  } = useFormContext();
  const protocol = type || watch("protocol");
  const clientAuthentication = watch("publicClient");
  const clientAuthorization = watch("authorizationServicesEnabled");
  return /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    role: "manage-clients",
    unWrap: unWrap
  }, /*#__PURE__*/React.createElement(React.Fragment, null, protocol === "openid-connect" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("clientAuthentication"),
    fieldId: "kc-authentication"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "publicClient",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-authentication",
      name: "publicClient",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value,
      onChange: onChange
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("clientAuthorization"),
    fieldId: "kc-authorization"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "authorizationServicesEnabled",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-authorization",
      name: "authorizationServicesEnabled",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value,
      onChange: value => {
        onChange(value);

        if (value) {
          setValue("serviceAccountsEnabled", true);
        }
      },
      isDisabled: !clientAuthentication
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    hasNoPaddingTop: true,
    label: t("authenticationFlow"),
    fieldId: "kc-flow"
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridItem, {
    lg: 3,
    sm: 6
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "standardFlowEnabled",
    defaultValue: true,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: t("standardFlow"),
      id: "kc-flow-standard",
      name: "standardFlowEnabled",
      isChecked: value,
      onChange: onChange
    }), /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:standardFlow",
      forLabel: t("standardFlow"),
      forID: "kc-flow-standard"
    }))
  })), /*#__PURE__*/React.createElement(GridItem, {
    lg: 9,
    sm: 6
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "directAccessGrantsEnabled",
    defaultValue: true,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: t("directAccess"),
      id: "kc-flow-direct",
      name: "directAccessGrantsEnabled",
      isChecked: value,
      onChange: onChange
    }), /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:directAccess",
      forLabel: t("directAccess"),
      forID: "kc-flow-direct"
    }))
  })), /*#__PURE__*/React.createElement(GridItem, {
    lg: 3,
    sm: 6
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "implicitFlowEnabled",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: t("implicitFlow"),
      id: "kc-flow-implicit",
      name: "implicitFlowEnabled",
      isChecked: value,
      onChange: onChange
    }), /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:implicitFlow",
      forLabel: t("implicitFlow"),
      forID: "kc-flow-implicit"
    }))
  })), /*#__PURE__*/React.createElement(GridItem, {
    lg: 9,
    sm: 6
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "serviceAccountsEnabled",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Checkbox, {
      label: t("serviceAccount"),
      id: "kc-flow-service-account",
      name: "serviceAccountsEnabled",
      isChecked: value,
      onChange: onChange,
      isDisabled: !clientAuthentication || clientAuthorization
    }), /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:serviceAccount",
      forLabel: t("serviceAccount"),
      forID: "kc-flow-service-account"
    }))
  })))))), /*#__PURE__*/React.createElement(React.Fragment, null, protocol === "saml" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:encryptAssertions",
      forLabel: t("encryptAssertions"),
      forID: "kc-encrypt"
    }),
    label: t("encryptAssertions"),
    fieldId: "kc-encrypt"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.saml_encrypt",
    control: control,
    defaultValue: "false",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-encrypt",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:clientSignature",
      forLabel: t("clientSignature"),
      forID: "kc-client-signature"
    }),
    label: t("clientSignature"),
    fieldId: "kc-client-signature"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.saml_client_signature",
    control: control,
    defaultValue: "false",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      id: "kc-client-signature",
      label: t("common:on"),
      labelOff: t("common:off"),
      isChecked: value === "true",
      onChange: value => onChange("" + value)
    })
  })))));
};