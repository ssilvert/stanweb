import React, { useEffect, useState } from "../../../web_modules/react.js";
import { Spinner } from "../../../web_modules/@patternfly/react-core.js";
import { useErrorHandler } from "../../../web_modules/react-error-boundary.js";
import { asyncStateFetch } from "../../context/auth/AdminClient.js";
export function DataLoader(props) {
  const [data, setData] = useState();
  const handleError = useErrorHandler();
  useEffect(() => {
    return asyncStateFetch(() => props.loader(), result => setData(result), handleError);
  }, props.deps || []);

  if (data) {
    if (props.children instanceof Function) {
      return props.children(data);
    }

    return props.children;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pf-u-text-align-center"
  }, /*#__PURE__*/React.createElement(Spinner, null));
}