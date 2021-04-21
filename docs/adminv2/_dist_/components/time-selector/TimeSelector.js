function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Select, SelectOption, SelectVariant, Split, SplitItem, TextInput } from "../../../web_modules/@patternfly/react-core.js";
import React, { useEffect, useState } from "../../../web_modules/react.js";
import { useTranslation } from "../../../web_modules/react-i18next.js";
export const TimeSelector = ({
  value,
  units = ["seconds", "minutes", "hours", "days"],
  onChange,
  ...rest
}) => {
  const {
    t
  } = useTranslation("common");
  const allTimes = [{
    unit: "seconds",
    label: t("times.seconds"),
    multiplier: 1
  }, {
    unit: "minutes",
    label: t("times.minutes"),
    multiplier: 60
  }, {
    unit: "hours",
    label: t("times.hours"),
    multiplier: 3600
  }, {
    unit: "days",
    label: t("times.days"),
    multiplier: 86400
  }];
  const times = units.map(unit => allTimes.find(time => time.unit === unit));
  const defaultMultiplier = allTimes.find(time => time.unit === units[0])?.multiplier;
  const [timeValue, setTimeValue] = useState("");
  const [multiplier, setMultiplier] = useState(defaultMultiplier);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const x = times.reduce((v, time) => value % time.multiplier === 0 && v < time.multiplier ? time.multiplier : v, 1);

    if (value) {
      setMultiplier(x);
      setTimeValue(value / x);
    } else {
      setTimeValue("");
      setMultiplier(defaultMultiplier);
    }
  }, [value]);

  const updateTimeout = (timeout, times = multiplier) => {
    if (timeout !== "") {
      onChange(timeout * (times || 1));
      setTimeValue(timeout);
    } else {
      onChange("");
    }
  };

  return /*#__PURE__*/React.createElement(Split, {
    hasGutter: true
  }, /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(TextInput, _extends({}, rest, {
    type: "number",
    id: `kc-time-${new Date().getTime()}`,
    min: "0",
    value: timeValue,
    onChange: value => {
      updateTimeout("" === value ? value : parseInt(value));
    }
  }))), /*#__PURE__*/React.createElement(SplitItem, null, /*#__PURE__*/React.createElement(Select, {
    variant: SelectVariant.single,
    "aria-label": t("unitLabel"),
    onSelect: (_, value) => {
      setMultiplier(value);
      updateTimeout(timeValue, value);
      setOpen(false);
    },
    selections: [multiplier],
    onToggle: () => {
      setOpen(!open);
    },
    isOpen: open
  }, times.map(time => /*#__PURE__*/React.createElement(SelectOption, {
    key: time.label,
    value: time.multiplier
  }, time.label)))));
};