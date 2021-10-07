import { StatusType, ConstantsData } from '../types';

const FRAMES_PER_SEC = 15;
const STATUS_TYPE: StatusType[] = [
  'speed',
  'stamina',
  'power',
  'guts',
  'wisdom',
];

export const Constants: ConstantsData = {
  FRAMES_PER_SEC,
  STATUS_TYPE,
  FRAME_LENGTH: 1.0 / FRAMES_PER_SEC,
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
  spConsume: {
    normal: 1,
    tempt: 1.6,
    positionKeep: 0.6,
    descentMode: 0.4,
  },
};

export default Constants;
