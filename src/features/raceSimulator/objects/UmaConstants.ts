export const posKeepSpeedCoef: Record<string, number> = {
  normal: 1.0,
  speedUp: 1.04,
  overtake: 1.05,
  paceUp: 1.04,
  paceDown: 0.915,
};

export const stylePosKeepCoef: Record<string, number[]> = {
  [1]: [1.0, 1.0],
  [2]: [3.0, 5.0],
  [3]: [6.5, 7.0],
  [4]: [7.5, 8.0],
};

export default posKeepSpeedCoef;
