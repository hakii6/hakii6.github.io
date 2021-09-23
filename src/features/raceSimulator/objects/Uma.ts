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

// constants
import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';
import { posKeepSpeedCoef, stylePosKeepCoef } from './UmaConstants';

// common functions
import {
  closeEqual,
  roundNumbers,
  round,
  checkMinValue,
} from '../../../functions/Common';

// uma call functions
import { checkCondStart, checkCondEnd } from './UmaCheckCondFunc';
import { checkPassiveSkill } from './SkillCheckFunc';

const constants: ConstantsData = Constants;
const { framesPerSec, frameLength, statusType } = constants;

export class Uma implements UmaObject {
  static raceParams: RaceParams;

  static calPosDetails: (pos: number) => {
    phase: number;
    section: number;
    slopeValue: number;
  };

  umaSetting: UmaSetting;

  umaParams: UmaParams;

  umaFrameResult: UmaState[] = [];

  umaState: UmaState;

  checkSkillStartFunc: any;

  checkSkillEndFunc: any;

  checkCondStartFunc: (condType: string) => boolean;

  checkCondEndFunc: (condType: string) => boolean;

  checkCondStartArr: Array<string> = [];

  checkCondEndArr: Array<string> = [];

  constructor(umaSetting: UmaSetting, umaState: UmaState) {
    this.umaState = umaState;
    this.umaFrameResult = [umaState];
    this.umaSetting = umaSetting;
    const { raceParams } = Uma;
    const { dist, statusCheck, raceBaseSpeed, distPosKeepCoef } = raceParams;
    const { name, status: rawStatus, option, skill } = umaSetting;
    const { fit, motivation, style } = option;
    const { surface: surfaceFit, dist: distFit, style: styleFit } = fit;
    const { skillEffect } = umaState;

    const { passive: passiveSkills } = skill;
    let newSkillEffect = { ...skillEffect };

    if (Array.isArray(passiveSkills)) {
      passiveSkills.forEach((skillId: string, index: number) => {
        checkPassiveSkill.call(this, skillId);
      }, this);
    }

    let motBonus: number, styleFitCoef, distFitCoef, surfaceFitCoef, styleCoef;
    {
      motBonus = Coefs.motivation[motivation];
      styleFitCoef = Coefs.styleFit[styleFit];
      distFitCoef = Coefs.distFit[distFit];
      surfaceFitCoef = Coefs.surfaceFit[surfaceFit];
      styleCoef = Coefs.style[style];
    }

    let umaParams;
    {
      let status;
      {
        const {
          speed: rawSpeed,
          stamina: rawStamina,
          power: rawPower,
          guts: rawGuts,
          wisdom: rawWisdom,
        } = rawStatus;

        const speedMutiplier = statusCheck.reduce(
          (total: number, curValue: StatusType) =>
            total +
            Math.min(Math.ceil((rawStatus[curValue] * motBonus) / 300), 4) *
              0.05,
          1
        );

        status = {
          speed:
            rawSpeed * motBonus * speedMutiplier +
            raceParams.surfaceConstant.speed +
            skillEffect.speed / 10000,
          stamina: rawStamina * motBonus + skillEffect.stamina / 10000,
          power:
            rawPower * motBonus +
            raceParams.surfaceConstant.power +
            skillEffect.power / 10000,
          guts: rawGuts * motBonus + skillEffect.guts / 10000,
          wisdom:
            rawWisdom * motBonus * styleFitCoef.wisdom +
            skillEffect.wisdom / 10000,
        };
        status = checkMinValue(roundNumbers(status), 1);
      }

      let umaBaseSpeed = new Map();
      {
        const { speed, guts, wisdom } = status;

        // /////////
        // TODO: set random
        // let wisMod = {}
        // wisMod.max((umaSetting.status.wisdom / 5500) * (Math.log10(umaSetting.status.wisdom) - 1) * 0.01)
        // wisMod.min(wisMod.max - .65)
        // wisMod.avg(wisMod.max - .325)
        const wisMod =
          ((wisdom / 5500) * Math.log10(wisdom * 0.1) - 0.325) * 0.01;
        const vCoef = styleCoef.v;
        const speedEffect = (speed * 500) ** 0.5 * distFitCoef.v * 0.002;
        umaBaseSpeed
          .set(0, raceBaseSpeed * (vCoef.phase0 + wisMod))
          .set(1, raceBaseSpeed * (vCoef.phase1 + wisMod))
          .set(2, raceBaseSpeed * (vCoef.phase2 + wisMod) + speedEffect)
          .set(3, umaBaseSpeed.get(2))
          .set(
            'spurt',
            umaBaseSpeed.get(2) +
              (umaBaseSpeed.get(2) + raceBaseSpeed * 0.01) * 1.05
          )
          .set('tired', raceBaseSpeed * 0.85 + (guts * 200) ** 0.5 * 0.001);
        for (const [i, v] of umaBaseSpeed) {
          umaBaseSpeed.set(i, round(v));
        }
      }

      let umaBaseAcc = new Map();
      {
        const { power } = status;
        const accCoef = (500 * power) ** 0.5 * surfaceFitCoef.a * distFitCoef.a;
        const aCoef = styleCoef.a;
        umaBaseAcc
          .set(0, accCoef * 0.0006 * aCoef.phase0)
          .set(1, accCoef * 0.0006 * aCoef.phase1)
          .set(2, accCoef * 0.0006 * aCoef.phase2)
          .set(3, accCoef * 0.0006 * aCoef.phase3);
      }

      let umaBaseDec = new Map();
      {
        umaBaseDec
          .set(0, -0.8)
          .set(1, -1.0)
          .set(2, -1.2)
          .set(3, -1.2)
          .set('tired', -1.2)
          .set('spurt', -1.2);
      }

      let rate;
      {
        rate = {
          skill: Math.max(100 - 9000.0 / (rawStatus.wisdom * motBonus), 20),
          tempt: (6.5 / Math.log10(0.1 * status.wisdom + 1)) ** 2,
          posKeep: (style === '1' ? 20 : 15) * Math.log10(0.1 * status.wisdom),
        };
      }

      let coef;
      {
        let sp = {
          spurt: 1 + 200 / (600 * status.guts) ** 0.5,
          surface: raceParams.surfaceCoef.sp,
        };
        coef = {
          sp,
        };
      }

      let spMax;
      {
        spMax = raceParams.dist + 0.8 * status.stamina * styleCoef.sp;
        spMax = round(spMax);
      }

      let temptSection = -1;
      {
        if (this.getNextRandom() < rate.tempt) {
          temptSection = Math.floor(this.getNextRandom() * 8) + 1;
          this.checkCondStartArr.push('tempt');
        }
      }

      umaParams = {
        rawStatus,
        name,
        motivation,
        style,
        surfaceFit,
        distFit,
        styleFit,
        status,
        umaBaseSpeed,
        umaBaseAcc,
        umaBaseDec,
        temptSection,
        spMax,
        rate,
        coef,
        floorDist: round(stylePosKeepCoef[style][0] * distPosKeepCoef),
        ceilDist: round(stylePosKeepCoef[style][1] * distPosKeepCoef),
      };
    }
    this.umaParams = umaParams;

    this.checkCondStartFunc = checkCondStart.call(this);
    this.checkCondEndFunc = checkCondEnd.call(this);
    this.checkCondStartArr = ['tired'];
    this.checkCondEndArr = ['startdash', 'posKeep'];
  }

  // todo: set seed array
  getNextRandom(): number {
    return Math.random() * 100;
  }

  // checkPosKeep(umaStateList: UmaState[]) {
  //   switch (this.posKeepCond.mode) {
  //     case 'normal':
  //       if (this.posKeepCond.cd === 0) {
  //         if (Math.random() * 100 < this.posKeepCond.rate || this.umaState.cond.tempt) {
  //           if (this.order === 1 && this.findUmaPos(2, umaStateList) < 4.5) {
  //             this.posKeepCond.start = this.pos;
  //             return 'speedUp';
  //           }
  //           if (this.order !== 1) {
  //             this.posKeepCond.start = this.pos;
  //             return 'overtake';
  //           }
  //         }
  //         this.posKeepCond.cd = framesPerSec * 3;
  //         return 'normal';
  //       }
  //       this.posKeepCond.cd -= 1;
  //       return 'normal';
  //     case 'speedUp':
  //       if (
  //         this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
  //         this.pos - this.findUmaPos(2, umaStateList) > 4.5
  //       ) {
  //         return 'normal';
  //       }
  //       return 'speedUp';
  //     case 'overtake':
  //       if (
  //         this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
  //         this.pos - this.findUmaPos(2, umaStateList) > 10
  //       ) {
  //         return 'normal';
  //       }
  //       return 'overtake';
  //     default:
  //       return 'normal';
  //   }
  // };

  // checkPosKeep2(umaStateList: UmaState[]) {
  //   const { ceilDist, floorDist, rate } = this.posKeepCond;
  //   const { sectionDist } = Uma.raceParams;
  //   const posDiff = this.findUmaPos(1, umaStateList) - this.pos;
  //   const lastDist = this.pos - this.posKeepCond.start;

  //   switch (this.posKeepCond.mode) {
  //     case 'normal':
  //       if (this.posKeepCond.cd === 0) {
  //         if (posDiff > ceilDist) {
  //           if (Math.random() * 100 < rate || this.umaState.cond.tempt) {
  //             this.posKeepCond.start = this.pos;
  //             return 'paceUp';
  //           }
  //         } else if (posDiff < floorDist) {
  //           this.posKeepCond.start = this.pos;
  //           return 'paceDown';
  //         }

  //         this.posKeepCond.cd = framesPerSec * 3;
  //         return 'normal';
  //       }
  //       this.posKeepCond.cd -= 1;
  //       return 'normal';
  //     case 'paceUp':
  //       if (lastDist >= sectionDist || posDiff > ceilDist) {
  //         return 'normal';
  //       }
  //       return 'paceUp';
  //     case 'paceDown':
  //       // todo: if skill on, then true
  //       if (lastDist >= sectionDist || posDiff > floorDist) {
  //         return 'normal';
  //       }
  //       return 'paceDown';
  //     default:
  //       return 'normal';
  //   }
  // };

  checkUmaState() {
    const checkCondEndArr = [...this.checkCondEndArr];
    const checkCondStartArr = [...this.checkCondStartArr];
    this.checkCondEndArr = checkCondEndArr.filter((condType: string) => {
      if (this.checkCondEndFunc(condType)) {
        this.umaState.cond[condType as string] = false;
        return false;
      }
      return true;
    });
    this.checkCondStartArr = checkCondStartArr.filter((condType: string) => {
      if (this.checkCondStartFunc(condType)) {
        this.umaState.cond[condType as string] = true;
        return false;
      }
      return true;
    });
  }

  updateUmaState(): void {
    const { raceBaseSpeed, dist } = Uma.raceParams;
    const { umaState, umaParams } = this;
    const { coef, status, umaBaseSpeed, umaBaseAcc, umaBaseDec } = umaParams;
    const { pos, momentSpeed, sp, skillEffect, cond } = umaState;
    const { slopeValue, phase, section } = Uma.calPosDetails(pos);

    let nextSpeed;
    {
      let targetSpeed;
      {
        if (cond.tired) {
          targetSpeed = umaBaseSpeed.get('tired') as number;
        } else {
          if (cond.startdash) {
            // todo: posKeep vs startdash?
            targetSpeed = 0.85 * raceBaseSpeed;
          } else {
            targetSpeed = cond.spurt
              ? (umaBaseSpeed.get('spurt') as number)
              : (umaBaseSpeed.get(phase) as number);
          }

          let posKeepCoef = 1.0;
          {
            // todo
            // if (section <= 10 && this.moveState !== 'startdash') {
            //   this.setPosKeepCoef[this.posKeepCond.mode].call(this, raceState);
            //   return posKeepSpeedCoef[this.posKeepCond.mode];
            // }
            // return posKeepSpeedCoef[this.posKeepCond.mode];
            if (cond.posKeep && !cond.startdash) {
              posKeepCoef = 1.0;
            }
          }
          targetSpeed *= posKeepCoef;
        }

        let slopeEffect = 0;
        {
          slopeEffect =
            slopeValue >= 1 ? (slopeValue * -200) / status.power : 0;
          // todo: descentMode
          if (cond.descentMode) {
            slopeEffect = 0;
          }
        }
        targetSpeed += slopeEffect;
        targetSpeed += skillEffect.targetSpeed;
      }

      let momentAcc = 0;
      {
        if (targetSpeed >= momentSpeed) {
          momentAcc = umaBaseAcc.get(phase) as number;
          momentAcc *= slopeValue >= 1 ? 2 / 3 : 1;
          momentAcc += cond.startdash ? 0 : 24.0;
        } else {
          momentAcc = cond.tired ? -1.2 : (umaBaseDec.get(phase) as number);
        }
        momentAcc += skillEffect.momentAcc;
      }

      const maxAcc = momentAcc * frameLength;

      nextSpeed =
        Math.abs(targetSpeed - momentSpeed) < Math.abs(maxAcc)
          ? targetSpeed
          : momentSpeed + maxAcc;
    }

    let nextSp = sp;
    {
      let avgSpeed = (momentSpeed + nextSpeed) / 2;
      let spCost = (20 * (avgSpeed - raceBaseSpeed + 12.0) ** 2) / 144;

      spCost *= cond.tempt ? 1.6 : 1;
      spCost *= cond.spurt ? coef.sp.spurt : 1;
      spCost *= cond.descentMode ? 0.4 : 1;

      spCost *= coef.sp.surface * frameLength;
      nextSp -= spCost;
      nextSp += skillEffect.sp;
    }

    let nextPos = pos;
    {
      nextPos += ((nextSpeed + momentSpeed) * frameLength) / 2;
      if (nextPos >= dist) {
        this.umaState.cond.goal = true;
        nextPos = dist;
      }
    }

    this.umaState = {
      ...umaState,
      sp: round(nextSp),
      momentSpeed: round(nextSpeed),
      pos: round(nextPos),
    };
  }

  move(umaObjArr: UmaObject[]): void {
    if (!this.umaState.cond.goal) {
      this.checkUmaState();
      // if (this.umaState.cond.posKeep) {
      //   if (this.style === '1') {
      //     this.posKeepCond.mode = this.checkPosKeep(umaStateList);
      //   } else {
      //     this.posKeepCond.mode = this.checkPosKeep2(umaStateList);
      //   }
      // }
      this.updateUmaState();
      this.umaFrameResult.push(this.umaState);
    }
  }
}

export default Uma;
