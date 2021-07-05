import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = `@@FundamentalsWrapper::`;

export const get = (key) => {
  return AsyncStorage.getItem(`${PREFIX}${key}`);
};

export const set = (key, value) => {
  return AsyncStorage.setItem(`${PREFIX}${key}`, value);
};
