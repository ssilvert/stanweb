import FileSaver from "../web_modules/file-saver.js";
import _ from "../web_modules/lodash.js";
export const sortProviders = providers => {
  return [...new Map(Object.entries(providers).sort(sortProvider)).keys()];
};

const sortProvider = (a, b) => {
  let s1, s2;

  if (a[1].order !== b[1].order) {
    s1 = b[1].order;
    s2 = a[1].order;
  } else {
    s1 = a[0];
    s2 = b[0];
  }

  if (s1 < s2) {
    return -1;
  } else if (s1 > s2) {
    return 1;
  } else {
    return 0;
  }
};

export const exportClient = client => {
  const clientCopy = _.cloneDeep(client);

  delete clientCopy.id;

  if (clientCopy.protocolMappers) {
    for (let i = 0; i < clientCopy.protocolMappers.length; i++) {
      delete clientCopy.protocolMappers[i].id;
    }
  }

  FileSaver.saveAs(new Blob([JSON.stringify(clientCopy, null, 2)], {
    type: "application/json"
  }), clientCopy.clientId + ".json");
};
export const toUpperCase = name => name.charAt(0).toUpperCase() + name.slice(1);
export const convertToFormValues = (obj, prefix, setValue) => {
  return Object.keys(obj).map(key => {
    const newKey = key.replace(/\./g, "-");
    setValue(prefix + "." + newKey, obj[key]);
  });
};
export const convertFormValuesToObject = obj => {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = key.replace(/-/g, ".");
    return {
      [newKey]: obj[key]
    };
  });
  return Object.assign({}, ...keyValues);
};
export const emptyFormatter = () => data => {
  return data ? data : "—";
};
export const boolFormatter = () => data => {
  const boolVal = data?.toString();
  return boolVal ? boolVal.charAt(0).toUpperCase() + boolVal.slice(1) : undefined;
};
export const getBaseUrl = adminClient => {
  return adminClient.keycloak ? adminClient.keycloak.authServerUrl : adminClient.baseUrl + "/";
};