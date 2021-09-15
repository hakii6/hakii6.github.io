type TArray = <T>(arg: string) => T[];

export const getStorage: TArray = (property) => {
  let storageArray = localStorage.getItem(property);
  if (storageArray !== null) {
    try {
      storageArray = JSON.parse(storageArray);
    } catch (e) {
      localStorage.removeItem(property);
      return [];
    }
  }
  if (!Array.isArray(storageArray)) {
    return [];
  }
  return storageArray;
};

export const createStorage = (
  property: string,
  obj: unknown,
  callbackFn?: () => void
): void => {
  const rawArray = getStorage(property);
  localStorage.setItem(property, JSON.stringify(rawArray.concat(obj)));
  if (callbackFn) {
    callbackFn();
  }
};

export const showStorage = (
  property: string,
  index: number
): Record<string, unknown> | null => {
  const rawArray = getStorage(property);
  if (rawArray.length > index) {
    return rawArray[index] as Record<string, unknown>;
  }
  return null;
};

export const updateStorage = (
  property: string,
  obj: unknown,
  index: number,
  callbackFn?: () => void
): void => {
  const rawArray = getStorage(property);
  if (rawArray.length > index) {
    rawArray[index] = obj;
    localStorage.setItem(property, JSON.stringify(rawArray));
  }
  if (callbackFn) {
    callbackFn();
  }
};

export const getSingleStorage = (
  property: string
): Record<string, unknown> | null => {
  const storageObject = localStorage.getItem(property);
  if (storageObject !== null) {
    try {
      const object = JSON.parse(storageObject) as Record<string, unknown>;
      return object;
    } catch (e) {
      localStorage.removeItem(property);
      return null;
    }
  }
  return null;
};

export const setSingleStorage = (
  property: string,
  obj: unknown,
  callbackFn?: () => void
): void => {
  localStorage.setItem(property, JSON.stringify(obj));
  if (callbackFn) {
    callbackFn();
  }
};

// export const deleteStorage = (
//   property: string,
//   obj: unknown,
//   mode: string
// ): void => {
//   switch (mode) {
//     case 'replace':
//       localStorage.setItem(property, JSON.stringify(obj));
//       break;
//     default:
//       break;
//   }
// };

export default getSingleStorage;
