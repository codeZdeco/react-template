import _ from "@lodash";
import collections from "./collections";
import baseTheme from "./base";

const instance = {};

_.keys(collections).map((themeKey: string) => {
  const cloned = _.cloneDeep(baseTheme);
  const themeItem = _.get(collections, themeKey);

  _.set(instance, themeKey, _.merge(cloned, themeItem));

  return themeKey;
});

export default instance;
