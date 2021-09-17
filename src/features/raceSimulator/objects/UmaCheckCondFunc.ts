import {
  UmaOption,
  Status,
  StatusType,
  ConstantsData,
  RaceTrack,
} from '../types';
import { RaceParams } from './Race';
import { roundNumbers, round, checkMinValue } from '../../../functions/Common';

import { UmaClass, Uma } from './Uma';

import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;
const { framesPerSec, frameLength, statusType } = constants;

export function checkCondStart(condType: string): (this: UmaClass) => boolean {
  switch (condType) {
    case 'tired':
      return function () {
        if (this.umaState.sp <= 0) {
          return true;
        }
        return false;
      };
    case 'spurt':
      return function () {
        if (this.umaState.phase < 2) {
          return false;
        }
        const { umaBaseSpeed, coef } = this.umaParams;
        const { pos, sp } = this.umaState;
        const { dist, raceBaseSpeed } = Uma.raceParams;
        const spSpeedCoef =
          (umaBaseSpeed.get('spurt')! - raceBaseSpeed + 12.0) ** 2 / 144;
        const totalTime = (dist - pos - 60) / umaBaseSpeed.get('spurt')!;
        return sp >= 20 * spSpeedCoef * coef.sp.surface * totalTime;
      };
    case 'tempt':
      return function () {
        if (this.umaState.section === this.temptSection) {
          return true;
        }
        return false;
      };
    default:
      return function () {
        return false;
      };
  }
}

export function checkCondEnd(condType: string): (this: UmaClass) => boolean {
  switch (condType) {
    case 'tired':
      return function () {
        if (this.umaState.sp > 0) {
          return true;
        }
        return false;
      };
    case 'startdash':
      return function () {
        if (this.umaState.momentSpeed >= Uma.raceParams.raceBaseSpeed * 0.85) {
          return true;
        }
        return false;
      };
    case 'spurt':
      return function () {
        return false;
      };
    case 'posKeep':
      return function () {
        if (this.umaState.section > 10) {
          this.checkCondStartArr.push('spurt');
          return true;
        }
        return false;
      };
    case 'tempt':
      var temptCount = 0;
      var temptLast = 3 * framesPerSec;
      return function () {
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
      };
    default:
      return function () {
        return false;
      };
  }
}
