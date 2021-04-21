import React, { useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import { Controller } from "../../../web_modules/react-hook-form.js";
import { ActionGroup, Button, FormGroup, Select, SelectOption, SelectVariant } from "../../../web_modules/@patternfly/react-core.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider.js";
import { sortProviders } from "../../util.js";
export const FineGrainOpenIdConnect = ({
  control,
  save,
  reset
}) => {
  const {
    t
  } = useTranslation("clients");
  const providers = useServerInfo().providers;
  const clientSignatureProviders = providers?.clientSignature.providers;
  const contentEncryptionProviders = providers?.contentencryption.providers;
  const cekManagementProviders = providers?.cekmanagement.providers;
  const signatureProviders = providers?.signature.providers;
  const [accessTokenOpen, setAccessTokenOpen] = useState(false);
  const [idTokenOpen, setIdTokenOpen] = useState(false);
  const [idTokenKeyManagementOpen, setIdTokenKeyManagementOpen] = useState(false);
  const [idTokenContentOpen, setIdTokenContentOpen] = useState(false);
  const [userInfoSignedResponseOpen, setUserInfoSignedResponseOpen] = useState(false);
  const [requestObjectSignatureOpen, setRequestObjectSignatureOpen] = useState(false);
  const [requestObjectRequiredOpen, setRequestObjectRequiredOpen] = useState(false);
  const keyOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: "empty",
    value: ""
  }, t("common:choose")), ...sortProviders(clientSignatureProviders).map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }))];
  const cekManagementOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: "empty",
    value: ""
  }, t("common:choose")), ...sortProviders(cekManagementProviders).map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }))];
  const signatureOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: "unsigned",
    value: ""
  }, t("unsigned")), ...sortProviders(signatureProviders).map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }))];
  const contentOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: "empty",
    value: ""
  }, t("common:choose")), ...sortProviders(contentEncryptionProviders).map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }))];
  const requestObjectOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: "any",
    value: "any"
  }, t("any")), /*#__PURE__*/React.createElement(SelectOption, {
    key: "none",
    value: "none"
  }, t("none")), ...sortProviders(clientSignatureProviders).map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }))];
  const requestObjectRequiredOptions = ["not required", "request or request_uri", "request only", "request_uri only"].map(p => /*#__PURE__*/React.createElement(SelectOption, {
    key: p,
    value: p
  }, t(`requestObject.${p}`)));

  const selectOptionToString = (value, options) => {
    const selectOption = options.find(s => s.props.value === value);
    return selectOption?.props.children || selectOption?.props.value;
  };

  return /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-clients",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("accessTokenSignatureAlgorithm"),
    fieldId: "accessTokenSignatureAlgorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:accessTokenSignatureAlgorithm",
      forLabel: t("accessTokenSignatureAlgorithm"),
      forID: "accessTokenSignatureAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.access-token-signed-response-alg",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "accessTokenSignatureAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setAccessTokenOpen(!accessTokenOpen),
      isOpen: accessTokenOpen,
      onSelect: (_, value) => {
        onChange(value);
        setAccessTokenOpen(false);
      },
      selections: [selectOptionToString(value, keyOptions)]
    }, keyOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("idTokenSignatureAlgorithm"),
    fieldId: "kc-id-token-signature",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:idTokenSignatureAlgorithm",
      forLabel: t("idTokenSignatureAlgorithm"),
      forID: "idTokenSignatureAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.id-token-signed-response-alg",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "idTokenSignatureAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setIdTokenOpen(!idTokenOpen),
      isOpen: idTokenOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIdTokenOpen(false);
      },
      selections: [selectOptionToString(value, keyOptions)]
    }, keyOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("idTokenEncryptionKeyManagementAlgorithm"),
    fieldId: "idTokenEncryptionKeyManagementAlgorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:idTokenEncryptionKeyManagementAlgorithm",
      forLabel: t("idTokenEncryptionKeyManagementAlgorithm"),
      forID: "idTokenEncryptionKeyManagementAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.id-token-encrypted-response-alg",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "idTokenEncryptionKeyManagementAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setIdTokenKeyManagementOpen(!idTokenKeyManagementOpen),
      isOpen: idTokenKeyManagementOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIdTokenKeyManagementOpen(false);
      },
      selections: [selectOptionToString(value, cekManagementOptions)]
    }, cekManagementOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("idTokenEncryptionContentEncryptionAlgorithm"),
    fieldId: "idTokenEncryptionContentEncryptionAlgorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:idTokenEncryptionContentEncryptionAlgorithm",
      forLabel: t("idTokenEncryptionContentEncryptionAlgorithm"),
      forID: "idTokenEncryptionContentEncryptionAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.id-token-encrypted-response-enc",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "idTokenEncryptionContentEncryptionAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setIdTokenContentOpen(!idTokenContentOpen),
      isOpen: idTokenContentOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIdTokenContentOpen(false);
      },
      selections: [selectOptionToString(value, contentOptions)]
    }, contentOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("userInfoSignedResponseAlgorithm"),
    fieldId: "userInfoSignedResponseAlgorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:userInfoSignedResponseAlgorithm",
      forLabel: t("userInfoSignedResponseAlgorithm"),
      forID: "userInfoSignedResponseAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.user-info-response-signature-alg",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "userInfoSignedResponseAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setUserInfoSignedResponseOpen(!userInfoSignedResponseOpen),
      isOpen: userInfoSignedResponseOpen,
      onSelect: (_, value) => {
        onChange(value);
        setUserInfoSignedResponseOpen(false);
      },
      selections: [selectOptionToString(value, signatureOptions)]
    }, signatureOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("requestObjectSignatureAlgorithm"),
    fieldId: "requestObjectSignatureAlgorithm",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:requestObjectSignatureAlgorithm",
      forLabel: t("requestObjectSignatureAlgorithm"),
      forID: "requestObjectSignatureAlgorithm"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.request_object_signature_alg",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "requestObjectSignatureAlgorithm",
      variant: SelectVariant.single,
      onToggle: () => setRequestObjectSignatureOpen(!requestObjectSignatureOpen),
      isOpen: requestObjectSignatureOpen,
      onSelect: (_, value) => {
        onChange(value);
        setRequestObjectSignatureOpen(false);
      },
      selections: [selectOptionToString(value, requestObjectOptions)]
    }, requestObjectOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("requestObjectRequired"),
    fieldId: "requestObjectRequired",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: "clients-help:requestObjectRequired",
      forLabel: t("requestObjectRequired"),
      forID: "requestObjectRequired"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "attributes.request-object-required",
    defaultValue: "",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "requestObjectRequired",
      variant: SelectVariant.single,
      onToggle: () => setRequestObjectRequiredOpen(!requestObjectRequiredOpen),
      isOpen: requestObjectRequiredOpen,
      onSelect: (_, value) => {
        onChange(value);
        setRequestObjectRequiredOpen(false);
      },
      selections: [selectOptionToString(value, requestObjectRequiredOptions)]
    }, requestObjectRequiredOptions)
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    id: "fineGrainSave",
    variant: "tertiary",
    onClick: save
  }, t("common:save")), /*#__PURE__*/React.createElement(Button, {
    id: "fineGrainRevert",
    variant: "link",
    onClick: reset
  }, t("common:revert"))));
};