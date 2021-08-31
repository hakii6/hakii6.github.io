import { JsonData, StrNumDict, StrDict } from '../types';

export const mergeObjects = (obj1: StrDict, obj2: StrDict): void => {
  Object.keys(obj2).forEach((attrName: string) => {
    obj1[attrName] = obj2[attrName];
  });
};

export const generateRandomNumberArray = (
  size: number,
  max: number
): Array<number> => {
  const numberArr = [];
  for (let i = 0; i < max; i += 1) {
    numberArr.push(Math.floor(Math.random() * max));
  }
  return numberArr;
};

export default generateRandomNumberArray;
