// types
import {
  UmaOption,
  Status,
  StatusType,
  ConstantsData,
  RaceTrack,
} from '../types';
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
const { framesPerSec, frameLength, statusType } = constants;

export function checkCondStart(this: UmaObject): (condType: string) => boolean {
  const { umaBaseSpeed, coef } = this.umaParams;
  const { dist, raceBaseSpeed } = Uma.raceParams;

  return function (this: UmaObject, condType: string) {
    switch (condType) {
      case 'tired':
        return this.umaState.sp <= 0;
      case 'spurt':
        if (this.umaState.phase < 2) {
          return false;
        }
        const { pos, sp } = this.umaState;
        const spSpeedCoef =
          (umaBaseSpeed.get('spurt')! - raceBaseSpeed + 12.0) ** 2 / 144;
        const totalTime = (dist - pos - 60) / umaBaseSpeed.get('spurt')!;
        return sp >= 20 * spSpeedCoef * coef.sp.surface * totalTime;
      case 'tempt':
        return this.umaState.section === this.temptSection;
      default:
        return false;
    }
  };
}

export function checkCondEnd(this: UmaObject): (condType: string) => boolean {
  const { raceBaseSpeed } = Uma.raceParams;
  var temptCount = 0;
  var temptLast = 3 * framesPerSec;
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
        if (temptCount >= 12 * framesPerSec) {
          return true;
        }
        if (temptCount < temptLast) {
          if (this.getNextRandom() < 55) {
            return true;
          }
          temptLast += 3 * framesPerSec;
        }
        return false;
      default:
        return false;
    }
  };
}
