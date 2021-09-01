import { JsonData, StrNumDict, StrDict } from '../types';

// type Foo = Record<string, unknown>;

// type TObject = Record<string, any>;
// type TObject = <T extends number | string | unknown>(arg: Record<string, T>) => void;
// type TObjects = (obj: Record<string, any>) => void;

export const roundNumbers = (obj: any) => {
  Object.keys(obj).forEach((value: string) => {
    if (typeof obj[value] === 'number') {
      obj[value] = obj[value].round();
    }
  });
};

export const mergeObjects = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): void => {
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

// hello, I want to use a function to do something like:
// send a object to the function
// => check every "value" of the "object"
// => if is a "number" type than do Math.round()

// code:
// type TObject = <T extends number | string | unknown>(arg: Record<string, T>) => void;
// // type TObjects = (obj: Record<string, any>) => void;

// export const roundNumbers: TObject = (obj) => {
//   Object.keys(obj).forEach((value: string) => {
//     if (typeof obj[value] === 'number') {
//       obj[value] = Math.round(obj[value]);
//     }
//   });
// };

// but what I met is 'property does not exist in type "T".'
// google a lot and didn't find any answer working without "any"
// could someone help me?
