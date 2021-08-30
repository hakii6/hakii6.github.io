import * as Types from '../types';

export const getStorageArray = (property: string) => {
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

export const setStorageArray = (property: string, arr: any, mode: string) => {
  switch (mode) {
    case 'replace':
      localStorage.setItem(property, JSON.stringify(arr));
      break;
    default:
      break;
  }
};

export const getStorageObject = (property: string) => {
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

export const setStorageObject = (property: string, obj: any, mode: string) => {
  switch (mode) {
    case 'replace':
      localStorage.setItem(property, JSON.stringify(obj));
      break;
    default:
      break;
  }
};

export default getStorageArray;
