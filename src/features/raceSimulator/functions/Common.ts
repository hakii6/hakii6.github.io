import { JsonData, StrNumDict, StrDict } from '../types';

// export function roundNumbers<T extends Record<PropertyKey, unknown>>(
//   obj: T
// ): void {
//   (Object.keys(obj) as (keyof T)[]).forEach((key) => {
//     if (typeof obj[key] === 'number') {
//       (obj[key] as number) = (obj[key] as number).round();
//     }
//   });
// }

// export const setObjProperties = (obj: any, ...args: any) => {
//   args.forEach((v: any) => {
//     obj[v.key]
//   })
// };

export const roundNumbers = <T extends Record<PropertyKey, unknown>>(
  obj: T
): T => {
  (Object.keys(obj) as (keyof T)[]).forEach((key) => {
    if (typeof obj[key] === 'number') {
      (obj[key] as number) = (obj[key] as number).round();
    }
  });
  return obj;
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
