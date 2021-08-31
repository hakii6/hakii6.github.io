import {
  Uma,
  RaceParams,
  UmaState,
  JsonData,
  StrNumDict,
  FunctionsGroup,
  StrDict,
  RaceFunctions,
} from '../types';

type TArray = <T>(arg: string) => T[] | null;

export const getStorageArray: TArray = (property) => {
  let storageArray = localStorage.getItem(property);
  if (storageArray !== null) {
    try {
      storageArray = JSON.parse(storageArray);
    } catch (e) {
      localStorage.removeItem(property);
      return null;
    }
  }
  if (!Array.isArray(storageArray)) {
    return null;
  }
  return storageArray;
};

export const setStorageArray = (
  property: string,
  arr: unknown,
  mode: string
): void => {
  switch (mode) {
    case 'replace':
      localStorage.setItem(property, JSON.stringify(arr));
      break;
    default:
      break;
  }
};

export const getStorageObject = (property: string): StrDict | null => {
  let storageObject = localStorage.getItem(property);
  if (storageObject !== null) {
    try {
      storageObject = JSON.parse(storageObject);
    } catch (e) {
      localStorage.removeItem(property);
      return null;
    }
  }
  if (typeof storageObject !== 'object') {
    return null;
  }
  return storageObject;
};

export const setStorageObject = (
  property: string,
  obj: StrDict,
  mode: string
): void => {
  switch (mode) {
    case 'replace':
      localStorage.setItem(property, JSON.stringify(obj));
      break;
    default:
      break;
  }
};

export default getStorageArray;
