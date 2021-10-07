// types
import { UmaSetting, StatusType, ConstantsData, RaceTrack } from '../types';
import {
  UmaObject,
  UmaMethods,
  UmaParams,
  UmaProps,
  UmaState,
  RaceObject,
  RaceParams,
  RaceProps,
  RaceMethods,
} from './objectTypes';

import { roundNumbers, round, checkMinValue } from '../../../functions/Common';

import { Uma } from './Uma';

import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;
const { FRAMES_PER_SEC, FRAME_LENGTH, STATUS_TYPE } = constants;

export function checkCondStart(this: UmaObject): (condType: string) => boolean {
  const { umaBaseSpeed, coef, temptSection } = this.umaParams;
  const { dist, raceBaseSpeed } = Uma.raceParams;

  return function (this: UmaObject, condType: string) {
    const { sp, pos, phase, section } = this.umaState;
    switch (condType) {
      case 'tired':
        return sp <= 0;
      case 'spurt':
        if (phase < 2) {
          return false;
        }
        const spSpeedCoef =
          (umaBaseSpeed.get('spurt')! - raceBaseSpeed + 12.0) ** 2 / 144;
        const totalTime = (dist - pos - 60) / umaBaseSpeed.get('spurt')!;
        return sp >= 20 * spSpeedCoef * coef.sp.surface * totalTime;
      case 'tempt':
        return section === temptSection;
      default:
        return false;
    }
  };
}

export function checkCondEnd(this: UmaObject): (condType: string) => boolean {
  const { raceBaseSpeed } = Uma.raceParams;
  let temptCount = 0;
  let temptLast = 3 * FRAMES_PER_SEC;
  return function (this: UmaObject, condType: string) {
    switch (condType) {
      case 'tired':
        return this.umaState.sp > 0;
      case 'startdash':
        return this.umaState.momentSpeed >= raceBaseSpeed * 0.85;
      case 'spurt':
        return false;
      case 'posKeep':
        if (this.umaState.section > 10) {
          this.checkCondStartArr.push('spurt');
          return true;
        }
        return false;
      case 'tempt':
        temptCount += 1;
        if (temptCount >= 12 * FRAMES_PER_SEC) {
          return true;
        }
        if (temptCount < temptLast) {
          if (this.getNextRandom() < 55) {
            return true;
          }
          temptLast += 3 * FRAMES_PER_SEC;
        }
        return false;
      default:
        return false;
    }
  };
}
