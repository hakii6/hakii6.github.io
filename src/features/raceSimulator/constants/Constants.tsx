import { StatusType } from '../types';

const framesPerSec = 15;
const statusType: StatusType[] = [
  'speed',
  'stamina',
  'power',
  'guts',
  'wisdom',
];

export const Constants = {
  framesPerSec,
  statusType,
  frameLength: 1.0 / framesPerSec,
  surface: {
    1: {
      0: {
        speed: 0,
        power: 0,
      },
      1: {
        speed: 0,
        power: -50,
      },
      2: {
        speed: 0,
        power: -50,
      },
      3: {
        speed: -50,
        power: -50,
      },
    },
    2: {
      0: {
        speed: 0,
        power: -100,
      },
      1: {
        speed: 0,
        power: -50,
      },
      2: {
        speed: 0,
        power: -100,
      },
      3: {
        speed: -50,
        power: -100,
      },
    },
  },
  spConsumeRate: {
    normal: 1,
    temptation: 1.6,
    positionKeep: 0.6,
    descentMode: 0.4,
  },
};

export default Constants;
