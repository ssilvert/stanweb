import React, { useEffect, useState } from "../../web_modules/react.js";
import { ActionGroup, Button, FormGroup, Select, SelectOption, Switch, TextInput } from "../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../web_modules/react-i18next.js";
import { Controller } from "../../web_modules/react-hook-form.js";
import { useHistory, useParams } from "../../web_modules/react-router-dom.js";
import { FormAccess } from "../components/form-access/FormAccess.js";
import { HelpItem } from "../components/help-enabler/HelpItem.js";
import { useRealm } from "../context/realm-context/RealmContext.js";
import { asyncStateFetch, useAdminClient } from "../context/auth/AdminClient.js";
import { useErrorHandler } from "../../web_modules/react-error-boundary.js";
import moment from "../../web_modules/moment.js";
export const UserForm = ({
  form: {
    handleSubmit,
    register,
    errors,
    watch,
    control,
    setValue,
    reset
  },
  save,
  editMode
}) => {
  const {
    t
  } = useTranslation("users");
  const {
    realm
  } = useRealm();
  const [isRequiredUserActionsDropdownOpen, setRequiredUserActionsDropdownOpen] = useState(false);
  const history = useHistory();
  const adminClient = useAdminClient();
  const {
    id
  } = useParams();
  const handleError = useErrorHandler();
  const watchUsernameInput = watch("username");
  const [timestamp, setTimestamp] = useState(null);
  useEffect(() => {
    if (editMode) {
      return asyncStateFetch(() => adminClient.users.findOne({
        id: id
      }), user => {
        setupForm(user);
      }, handleError);
    }
  }, []);

  const setupForm = user => {
    reset();
    Object.entries(user).map(entry => {
      console.log(entry[0], entry[1]);

      if (entry[0] == "createdTimestamp") {
        setTimestamp(entry[1]);
      } else {
        setValue(entry[0], entry[1]);
      }
    });
  };

  const emailRegexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const requiredUserActionsOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: 0,
    value: "CONFIGURE_TOTP"
  }, t("configureOTP")), /*#__PURE__*/React.createElement(SelectOption, {
    key: 1,
    value: "UPDATE_PASSWORD"
  }, t("updatePassword")), /*#__PURE__*/React.createElement(SelectOption, {
    key: 2,
    value: "UPDATE_PROFILE"
  }, t("updateProfile")), /*#__PURE__*/React.createElement(SelectOption, {
    key: 3,
    value: "VERIFY_EMAIL"
  }, t("verifyEmail"))];

  const clearSelection = () => {
    setRequiredUserActionsDropdownOpen(false);
  };

  return /*#__PURE__*/React.createElement(FormAccess, {
    isHorizontal: true,
    onSubmit: handleSubmit(save),
    role: "manage-users",
    className: "pf-u-mt-lg"
  }, editMode ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("id"),
    fieldId: "kc-id",
    isRequired: true,
    validated: errors.id ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      required: !editMode
    }),
    type: "text",
    id: "kc-id",
    name: "id",
    isReadOnly: editMode
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("createdAt"),
    fieldId: "kc-created-at",
    isRequired: true,
    validated: errors.createdTimestamp ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: moment(timestamp).format("MM/DD/YY hh:MM:ss A"),
    type: "text",
    id: "kc-created-at",
    name: "createdTimestamp",
    isReadOnly: editMode
  }))) : /*#__PURE__*/React.createElement(FormGroup, {
    label: t("username"),
    fieldId: "kc-username",
    isRequired: true,
    validated: errors.username ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    type: "text",
    id: "kc-username",
    name: "username",
    isReadOnly: editMode
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("email"),
    fieldId: "kc-description",
    validated: errors.email ? "error" : "default",
    helperTextInvalid: t("users:emailInvalid")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register({
      pattern: emailRegexPattern
    }),
    type: "email",
    id: "kc-email",
    name: "email",
    "data-testid": "email-input",
    "aria-label": t("emailInput")
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("emailVerified"),
    fieldId: "kc-email-verified",
    helperTextInvalid: t("common:required"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: t("emailVerifiedHelpText"),
      forLabel: t("emailVerified"),
      forID: "email-verified"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "emailVerified",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      "data-testid": "email-verified-switch",
      id: "kc-user-email-verified",
      isDisabled: false,
      onChange: value => onChange(value),
      isChecked: value,
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("firstName"),
    fieldId: "kc-firstname",
    validated: errors.firstName ? "error" : "default",
    helperTextInvalid: t("common:required")
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    "data-testid": "firstName-input",
    type: "text",
    id: "kc-firstname",
    name: "firstName"
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("lastName"),
    fieldId: "kc-name",
    validated: errors.lastName ? "error" : "default"
  }, /*#__PURE__*/React.createElement(TextInput, {
    ref: register(),
    "data-testid": "lastName-input",
    type: "text",
    id: "kc-lastname",
    name: "lastName",
    "aria-label": t("lastName")
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("common:enabled"),
    fieldId: "kc-enabled",
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: t("disabledHelpText"),
      forLabel: t("enabled"),
      forID: "enabled-label"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "enabled",
    defaultValue: false,
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Switch, {
      "data-testid": "user-enabled-switch",
      id: "kc-user-enabled",
      isDisabled: false,
      onChange: value => onChange(value),
      isChecked: value,
      label: t("common:on"),
      labelOff: t("common:off")
    })
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("requiredUserActions"),
    fieldId: "kc-required-user-actions",
    validated: errors.requiredActions ? "error" : "default",
    helperTextInvalid: t("common:required"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: t("requiredUserActionsHelpText"),
      forLabel: t("requiredUserActions"),
      forID: "required-user-actions-label"
    })
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "requiredActions",
    defaultValue: [],
    typeAheadAriaLabel: "Select an action",
    control: control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      "data-testid": "required-actions-select",
      placeholderText: "Select action",
      toggleId: "kc-required-user-actions",
      onToggle: () => setRequiredUserActionsDropdownOpen(!isRequiredUserActionsDropdownOpen),
      isOpen: isRequiredUserActionsDropdownOpen,
      selections: value,
      onSelect: (_, v) => {
        const option = v;

        if (value.includes(option)) {
          onChange(value.filter(item => item !== option));
        } else {
          onChange([...value, option]);
        }
      },
      onClear: clearSelection,
      variant: "typeaheadmulti"
    }, requiredUserActionsOptions)
  })), /*#__PURE__*/React.createElement(ActionGroup, null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": !editMode ? "create-user" : "save-user",
    isDisabled: !editMode && !watchUsernameInput,
    variant: "primary",
    type: "submit"
  }, !editMode ? t("common:Create") : t("common:Save")), /*#__PURE__*/React.createElement(Button, {
    "data-testid": "cancel-create-user",
    onClick: () => history.push(`/${realm}/users`),
    variant: "link"
  }, t("common:cancel"))));
};