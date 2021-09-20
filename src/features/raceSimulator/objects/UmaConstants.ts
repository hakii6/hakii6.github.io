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

export const skillEffect: Record<string, number> = {
  speed: 0,
  stamina: 0,
  power: 0,
  guts: 0,
  wisdom: 0,
};

export const skillEffectDict: Record<string, string> = {
  '1': 'speed',
  '2': 'stamina',
  '3': 'power',
  '4': 'guts',
  '5': 'wisdom',
  '8': 'visibility',
  '9': 'sp',
  '10': 'startdash',
  '13': 'temptLast',
  '21': 'redTargetSpeed',
  '27': 'targetSpeed',
  '28': 'moveLaneSpeed',
  '31': 'momentAcc',
};
export default posKeepSpeedCoef;
