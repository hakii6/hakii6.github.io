import * as Types from '../types';

export const generateRandomNumberArray = (size: number, max: number) => {
  const numberArr = [];
  for (let i = 0; i < max; i += 1) {
    numberArr.push(Math.floor(Math.random() * max));
  }
  return numberArr;
};

export const calSpCost = (
  V: number,
  time: number,
  spCostCoef: any,
  raceParams: any
) => {
  const { surfaceCoef, baseV } = raceParams;
  const spVCoef = (V - baseV + 12.0) ** 2 / 144;
  return (20 * spCostCoef * spVCoef * surfaceCoef.sp * time).round();
};

export default generateRandomNumberArray;
