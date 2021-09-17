export const roundNumbers = <T extends Record<PropertyKey, unknown>>(
  obj: T
): T => {
  (Object.keys(obj) as (keyof T)[]).forEach((key: keyof T) => {
    if (typeof obj[key] === 'number') {
      const value = obj[key] as number;
      (obj[key] as number) = (Math.round(value * 1000.0) / 1000.0) as number;
    }
  });
  return obj;
};

export const round = (num: number): number =>
  (Math.round(num * 1000.0) / 1000.0) as number;

// export const roundIterable = <X>(num: Iterable<X>): Iterable<X> => {
//   for (const iterator of num) {
//     num[i] = (Math.round(v * 1000.0) / 1000.0) as number;
//   }
//   return num;
// }

export const checkMinValue = <T extends Record<PropertyKey, unknown>>(
  obj: T,
  minValue: number
): T => {
  (Object.keys(obj) as (keyof T)[]).forEach((key: keyof T) => {
    if (typeof obj[key] === 'number') {
      if (obj[key] <= minValue) {
        (obj[key] as number) = minValue as number;
      }
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
