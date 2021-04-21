import { FormGroup, Select, SelectOption, SelectVariant, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
import React, { useState } from "../../../web_modules/react.js";
import { HelpItem } from "../../components/help-enabler/HelpItem.js";
import { useWatch, Controller } from "../../../web_modules/react-hook-form.js";
import { FormAccess } from "../../components/form-access/FormAccess.js";
import _ from "../../../web_modules/lodash.js";
import { WizardSectionHeader } from "../../components/wizard-section-header/WizardSectionHeader.js";
export const SettingsCache = ({
  form,
  showSectionHeading = false,
  showSectionDescription = false
}) => {
  const {
    t
  } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;
  const [isCachePolicyDropdownOpen, setIsCachePolicyDropdownOpen] = useState(false);
  const [isEvictionHourDropdownOpen, setIsEvictionHourDropdownOpen] = useState(false);
  const cachePolicyType = useWatch({
    control: form.control,
    name: "config.cachePolicy"
  });
  const [isEvictionMinuteDropdownOpen, setIsEvictionMinuteDropdownOpen] = useState(false);
  const [isEvictionDayDropdownOpen, setIsEvictionDayDropdownOpen] = useState(false);
  const hourOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: 0,
    value: [`${0}`],
    isPlaceholder: true
  }, [`0${0}`])];
  let hourDisplay = "";

  for (let index = 1; index < 24; index++) {
    if (index < 10) {
      hourDisplay = `0${index}`;
    } else {
      hourDisplay = `${index}`;
    }

    hourOptions.push( /*#__PURE__*/React.createElement(SelectOption, {
      key: index,
      value: [`${index}`]
    }, hourDisplay));
  }

  const minuteOptions = [/*#__PURE__*/React.createElement(SelectOption, {
    key: 0,
    value: [`${0}`],
    isPlaceholder: true
  }, [`0${0}`])];
  let minuteDisplay = "";

  for (let index = 1; index < 60; index++) {
    if (index < 10) {
      minuteDisplay = `0${index}`;
    } else {
      minuteDisplay = `${index}`;
    }

    minuteOptions.push( /*#__PURE__*/React.createElement(SelectOption, {
      key: index,
      value: [`${index}`]
    }, minuteDisplay));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, showSectionHeading && /*#__PURE__*/React.createElement(WizardSectionHeader, {
    title: t("cacheSettings"),
    description: helpText("cacheSettingsDescription"),
    showDescription: showSectionDescription
  }), /*#__PURE__*/React.createElement(FormAccess, {
    role: "manage-realm",
    isHorizontal: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("cachePolicy"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("cachePolicyHelp"),
      forLabel: t("cachePolicy"),
      forID: "kc-cache-policy"
    }),
    fieldId: "kc-cache-policy"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.cachePolicy",
    defaultValue: ["DEFAULT"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-cache-policy",
      required: true,
      onToggle: () => setIsCachePolicyDropdownOpen(!isCachePolicyDropdownOpen),
      isOpen: isCachePolicyDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsCachePolicyDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single,
      "data-testid": "kerberos-cache-policy"
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: ["DEFAULT"],
      isPlaceholder: true
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: ["EVICT_DAILY"]
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 2,
      value: ["EVICT_WEEKLY"]
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 3,
      value: ["MAX_LIFESPAN"]
    }), /*#__PURE__*/React.createElement(SelectOption, {
      key: 4,
      value: ["NO_CACHE"]
    }))
  })), _.isEqual(cachePolicyType, ["EVICT_WEEKLY"]) ? /*#__PURE__*/React.createElement(FormGroup, {
    label: t("evictionDay"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("evictionDayHelp"),
      forLabel: t("evictionDay"),
      forID: "kc-eviction-day"
    }),
    isRequired: true,
    fieldId: "kc-eviction-day"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.evictionDay[0]",
    defaultValue: "1",
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      "data-testid": "cache-day",
      toggleId: "kc-eviction-day",
      required: true,
      onToggle: () => setIsEvictionDayDropdownOpen(!isEvictionDayDropdownOpen),
      isOpen: isEvictionDayDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsEvictionDayDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, /*#__PURE__*/React.createElement(SelectOption, {
      key: 0,
      value: "1",
      isPlaceholder: true
    }, t("common:Sunday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 1,
      value: "2"
    }, t("common:Monday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 2,
      value: "3"
    }, t("common:Tuesday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 3,
      value: "4"
    }, t("common:Wednesday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 4,
      value: "5"
    }, t("common:Thursday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 5,
      value: "6"
    }, t("common:Friday")), /*#__PURE__*/React.createElement(SelectOption, {
      key: 6,
      value: "7"
    }, t("common:Saturday")))
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), _.isEqual(cachePolicyType, ["EVICT_DAILY"]) || _.isEqual(cachePolicyType, ["EVICT_WEEKLY"]) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormGroup, {
    label: t("evictionHour"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("evictionHourHelp"),
      forLabel: t("evictionHour"),
      forID: "kc-eviction-hour"
    }),
    isRequired: true,
    fieldId: "kc-eviction-hour"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.evictionHour",
    defaultValue: ["0"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-eviction-hour",
      onToggle: () => setIsEvictionHourDropdownOpen(!isEvictionHourDropdownOpen),
      isOpen: isEvictionHourDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsEvictionHourDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, hourOptions)
  })), /*#__PURE__*/React.createElement(FormGroup, {
    label: t("evictionMinute"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("evictionMinuteHelp"),
      forLabel: t("evictionMinute"),
      forID: "kc-eviction-minute"
    }),
    isRequired: true,
    fieldId: "kc-eviction-minute"
  }, /*#__PURE__*/React.createElement(Controller, {
    name: "config.evictionMinute",
    defaultValue: ["0"],
    control: form.control,
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/React.createElement(Select, {
      toggleId: "kc-eviction-minute",
      onToggle: () => setIsEvictionMinuteDropdownOpen(!isEvictionMinuteDropdownOpen),
      isOpen: isEvictionMinuteDropdownOpen,
      onSelect: (_, value) => {
        onChange(value);
        setIsEvictionMinuteDropdownOpen(false);
      },
      selections: value,
      variant: SelectVariant.single
    }, minuteOptions)
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null), _.isEqual(cachePolicyType, ["MAX_LIFESPAN"]) ? /*#__PURE__*/React.createElement(FormGroup, {
    label: t("maxLifespan"),
    labelIcon: /*#__PURE__*/React.createElement(HelpItem, {
      helpText: helpText("maxLifespanHelp"),
      forLabel: t("maxLifespan"),
      forID: "kc-max-lifespan"
    }),
    fieldId: "kc-max-lifespan"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "text",
    id: "kc-max-lifespan",
    name: "config.maxLifespan[0]",
    ref: form.register,
    "data-testid": "kerberos-cache-lifespan"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null)));
};