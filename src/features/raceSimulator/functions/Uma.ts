import {
  UmaOption,
  Status,
  StatusType,
  ConstantsData,
  RaceTrack,
  RaceParams,
} from '../types';
import { roundNumbers, round, checkMinValue } from './Common';

import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;
const { framesPerSec, frameLength, statusType } = constants;

export type UmaClass = UmaClassType & UmaState;

interface CoefType {
  motBonus: number;
  styleFitCoef: Record<string, number>;
  distFitCoef: Record<string, number>;
  surfaceFitCoef: Record<string, number>;
  usingStyleCoef: {
    sp: number;
    v: Record<string, number>;
    a: Record<string, number>;
  };
}

export interface UmaClassType {
  // method
  setReady: (arg1: UmaState) => UmaState;
  getState: () => any;
  move: (arg1: UmaState, arg2: UmaState[]) => UmaState;
  // checkGoal: () => boolean;

  // public
  surfaceFit: string;
  distFit: string;
  styleFit: string;
  status: Status;
  motivation: string;
  style: string;
  coefParams: CoefType;
  skillActRate: number;
  temptRate: number;
  spMax: number;
  v: number[];
  spurtSpeed: number;
  acc: number[];
  dec: number[];
  temptSection: number;
  spurtSpCoef: number;
  setPosKeepCoef: any;
}

export interface UmaState {
  waku: number;
  phase: number;
  section: number;
  slopeValue: number;
  pos: number;
  lanePos: number;
  momentSpeed: number;
  targetSpeed: number;
  speedNeeded: number;
  momentAcc: number;
  sp: number;
  order: number;
  temptCond: {
    temptCount: number;
    temptLast: number;
  };
  posKeepCond: {
    mode: 'normal' | 'speedUp' | 'overtake';
    speedCoef: number;
    cd: number;
    start: number;
    rate: number;
    floorDist: number;
    ceilDist: number;
  };
  cond: Record<string, boolean>;
}

export class Uma implements UmaClassType, UmaState {
  static raceParams: RaceParams;

  static setRaceParams(raceParams: RaceParams): void {
    this.raceParams = raceParams;
  }

  private rawStatus: Status;

  private umaName: string;

  surfaceFit: string;

  distFit: string;

  styleFit: string;

  status: Status;

  motivation: string;

  style: string;

  coefParams: CoefType;

  skillActRate: number;

  temptRate: number;

  spurtSpCoef: number;

  spSurfaceCoef: number;

  spMax: number;

  v: number[];

  spurtSpeed: number;

  acc: number[];

  dec: number[];

  temptSection: number;

  setPosKeepCoef: any;

  waku = 0;

  phase = 0;

  section = 0;

  slopeValue = 0;

  pos = 0;

  lanePos = 0;

  momentSpeed = 0;

  sp = 0;

  order = 0;

  targetSpeed = 0;

  temptCond = {
    temptCount: 0,
    temptLast: 0,
  };

  posKeepCond = {
    mode: 'normal' as UmaState['posKeepCond']['mode'],
    speedCoef: 1,
    cd: 0,
    start: 0,
    rate: 0,
    floorDist: 0,
    ceilDist: 0,
  };

  momentAcc = 0;

  speedNeeded = 0;

  cond = {
    startdash: true,
    posKeep: true,
    ascent: false,
    descent: false,
    tempt: false,
    spurt: false,
    tiring: false,
  };

  checkStateFuncList: Array<() => boolean> = [];

  constructor(umaOption: UmaOption) {
    this.rawStatus = { ...umaOption.status };
    this.umaName = umaOption.umaName;
    this.motivation = umaOption.motivation;
    this.style = umaOption.usingStyle;

    this.surfaceFit = umaOption.fit.surface;
    this.distFit = umaOption.fit.dist;
    this.styleFit = umaOption.fit.style;
    this.coefParams = {
      motBonus: Coefs.motivation[this.motivation],
      styleFitCoef: Coefs.styleFit[this.styleFit],
      distFitCoef: Coefs.distFit[this.distFit],
      surfaceFitCoef: Coefs.surfaceFit[this.surfaceFit],
      usingStyleCoef: Coefs.usingStyle[this.style],
    };

    this.status = (() => {
      const { raceParams } = Uma;
      const { motBonus, styleFitCoef } = this.coefParams;
      const {
        speed: rawSpeed,
        stamina: rawStamina,
        power: rawPower,
        guts: rawGuts,
        wisdom: rawWisdom,
      } = this.rawStatus;

      const speedMutiplier = Uma.raceParams.statusCheck.reduce(
        (total: number, curValue: StatusType) =>
          total +
          Math.min(
            Math.ceil(
              (this.rawStatus[curValue] * this.coefParams.motBonus) / 300
            ),
            4
          ) *
            0.05,
        1
      );

      // ///////////
      // // todo: let users to set it by themselves
      const passiveSkillEffect = {
        speed: 0,
        stamina: 0,
        power: 0,
        guts: 0,
        wisdom: 0,
      };

      const status = {
        speed:
          rawSpeed * motBonus * speedMutiplier +
          raceParams.surfaceConstant.speed +
          passiveSkillEffect.speed,
        stamina: rawStamina * motBonus + passiveSkillEffect.stamina,
        power:
          rawPower * motBonus +
          raceParams.surfaceConstant.power +
          passiveSkillEffect.power,
        guts: rawGuts * motBonus + passiveSkillEffect.guts,
        wisdom:
          rawWisdom * motBonus * styleFitCoef.wisdom +
          passiveSkillEffect.wisdom,
      };
      return checkMinValue(roundNumbers(status), 1);
    })();

    this.v = (() => {
      const { speed, guts, wisdom } = this.status;
      const { distFitCoef, usingStyleCoef } = this.coefParams;
      const { baseSpeed } = Uma.raceParams;

      // /////////
      // TODO: set random
      // let wisMod = {}
      // wisMod.max = ((umaOption.status.wisdom / 5500) * (Math.log10(umaOption.status.wisdom) - 1) * 0.01)
      // wisMod.min = (wisMod.max - .65)
      // wisMod.avg = (wisMod.max - .325)
      const wisMod =
        ((wisdom / 5500) * Math.log10(wisdom * 0.1) - 0.325) * 0.01;
      const vCoef = usingStyleCoef.v;
      const speedEffect = (speed * 500) ** 0.5 * distFitCoef.v * 0.002;
      this.spurtSpeed = speedEffect;
      return [
        round(baseSpeed * (vCoef.phase0 + wisMod)),
        round(baseSpeed * (vCoef.phase1 + wisMod)),
        round(baseSpeed * (vCoef.phase2 + wisMod) + speedEffect),
        round(baseSpeed * (vCoef.phase2 + wisMod) + speedEffect),
      ];
    })();
    this.spurtSpeed += (this.v[2] + Uma.raceParams.baseSpeed * 0.01) * 1.05;

    this.acc = (() => {
      const { surfaceFitCoef, distFitCoef, usingStyleCoef } = this.coefParams;
      const { power } = this.status;
      const accCoef = (500 * power) ** 0.5 * surfaceFitCoef.a * distFitCoef.a;
      const aCoef = usingStyleCoef.a;
      return [
        round(accCoef * 0.0006 * aCoef.phase0),
        round(accCoef * 0.0006 * aCoef.phase1),
        round(accCoef * 0.0006 * aCoef.phase2),
        round(accCoef * 0.0006 * aCoef.phase3),
      ];
    })();
    this.dec = [-0.8, -1.0, -1.2, -1.2];

    this.skillActRate = Math.max(
      100 - 9000.0 / (this.rawStatus.wisdom * this.coefParams.motBonus),
      20
    );
    this.temptRate = (6.5 / Math.log10(0.1 * this.status.wisdom + 1)) ** 2;
    this.spurtSpCoef = 1 + 200 / (600 * this.status.guts) ** 0.5;
    this.spSurfaceCoef = Uma.raceParams.surfaceCoef.sp;
    this.spMax =
      Uma.raceParams.dist +
      0.8 * this.status.stamina * this.coefParams.usingStyleCoef.sp;

    this.checkStateFuncList = [
      this.checkStartdashEnd,
      this.checkPosKeepEnd,
      this.checkTiringStart,
    ];

    // todo: rand
    this.temptSection =
      Math.random() * 100 < this.temptRate
        ? Math.floor(Math.random() * 8) + 1
        : -1;
    if (this.temptSection !== -1) {
      this.checkStateFuncList.push(this.checkTemptStart);
    }
  }

  setReady = (umaState: any): UmaState => ({
    ...umaState,
    sp: this.spMax,
  });

  checkTiringStart = () => {
    if (this.sp <= 0) {
      this.cond.tiring = true;
      return true;
    }
    return false;
  };

  checkStartdashEnd = () => {
    if (this.momentSpeed >= Uma.raceParams.baseSpeed * 0.85) {
      this.cond.startdash = false;
      return true;
    }
    return false;
  };

  checkPosKeepEnd = () => {
    if (this.section > 10) {
      this.cond.posKeep = false;
      this.checkStateFuncList.push(this.checkSpurtStart);
      return true;
    }
    return false;
  };

  checkSpurtStart = () => {
    if (this.phase < 2) {
      return false;
    }
    const { spurtSpeed, spSurfaceCoef, spurtSpCoef } = this;
    const { dist, baseSpeed } = Uma.raceParams;
    const spSpeedCoef = (spurtSpeed - baseSpeed + 12.0) ** 2 / 144;
    const totalTime = (dist - this.pos - 60) / spurtSpeed;
    if (this.sp >= 20 * spSpeedCoef * spSurfaceCoef * totalTime) {
      this.cond.spurt = true;
      return true;
    }
    return false;
  };

  checkTemptStart = () => {
    if (this.section === this.temptSection) {
      this.cond.tempt = true;
      this.checkStateFuncList.push(this.checkTemptEnd);
      this.temptCond = {
        temptLast: 3 * framesPerSec,
        temptCount: 1,
      };
      return true;
    }
    return false;
  };

  checkTemptEnd = () => {
    this.temptCond.temptCount += 1;
    if (this.temptCond.temptCount >= 12 * framesPerSec) {
      this.cond.tempt = false;
      return true;
    }
    if (this.temptCond.temptCount < this.temptCond.temptLast) {
      if (Math.random() * 100 < 55) {
        this.cond.tempt = false;
        return true;
      }
      this.temptCond.temptLast += 3 * framesPerSec;
    }
    return false;
  };

  setCheckStateFuncList = () => {
    this.checkStateFuncList = this.checkStateFuncList.filter(
      (checkFunc: () => boolean) => !checkFunc()
    );
  };

  updateState = (): void => {
    const { baseSpeed } = Uma.raceParams;
    const { momentSpeed, targetSpeed, cond, status, phase, v, acc, dec } = this;
    const getNextSpeed = (): number => {
      const getTargetSpeed = (): number => {
        const getPosKeepCoef = (): number => {
          // todo
          // if (section <= 10 && this.moveState !== 'startdash') {
          //   this.setPosKeepCoef[this.posKeepCond.mode].call(this, raceState);
          //   return posKeepSpeedCoef[this.posKeepCond.mode];
          // }
          return 1;
        };
        const getSkillEffect = (): number => {
          // todo
          return 0;
        };
        const getSlopeEffect = (): number => {
          if (cond.ascent) {
            return round((this.slopeValue * -200) / status.power);
          }
          if (cond.descent) {
            // todo
            return 0;
          }
          return 0;
        };

        if (cond.tiring) {
          return baseSpeed * 0.85 + (status.guts * 200) ** 0.5 * 0.001;
        }

        let baseTargetSpeed = v[phase];

        if (cond.startdash) {
          // todo: posKeep vs startdash?
          baseTargetSpeed = 0.85 * Uma.raceParams.baseSpeed;
        } else if (cond.posKeep) {
          baseTargetSpeed *= getPosKeepCoef();
        } else if (cond.spurt) {
          baseTargetSpeed = this.spurtSpeed;
        }
        return baseTargetSpeed + getSlopeEffect() + getSkillEffect();
      };
      const getMomentAcc = (): number => {
        const getAcc = () => {
          let baseAcc = acc[phase];
          if (cond.ascent) {
            baseAcc *= 2 / 3;
          }
          if (cond.startdash) {
            baseAcc += 24.0;
          }

          return baseAcc;
          // todo
          // return baseAcc + getSkillEffect();
        };
        const getDec = () => {
          if (cond.tiring) {
            return -1.2;
          }
          return dec[phase];
        };
        return this.speedNeeded >= 0 ? getAcc() : getDec();
      };

      this.targetSpeed = getTargetSpeed();
      this.speedNeeded = this.targetSpeed - this.momentSpeed;
      this.momentAcc = getMomentAcc();
      this.speedNeeded = round(this.targetSpeed - this.momentSpeed);
      const maxAcc = this.momentAcc * frameLength;

      return Math.abs(this.speedNeeded) < Math.abs(maxAcc)
        ? this.targetSpeed
        : this.momentSpeed + maxAcc;
    };
    const getNextSp = (avgSpeed: number): number => {
      let spCost = (20 * (avgSpeed - baseSpeed + 12.0) ** 2) / 144;
      if (cond.tempt) {
        spCost *= 1.6;
      } else if (cond.spurt) {
        spCost *= this.spurtSpCoef;
      }

      if (cond.descent) {
        spCost *= 0.4;
      }

      return this.sp - spCost * this.spSurfaceCoef * frameLength;
    };

    const nextSpeed = getNextSpeed();
    const avgSpeed = (this.momentSpeed + nextSpeed) / 2;
    const nextSp = getNextSp(avgSpeed);

    this.momentSpeed = nextSpeed;
    this.pos += round(avgSpeed * frameLength);
  };

  setState = (umaState: UmaState) => Object.assign(this, umaState);

  getState = (): any => ({
    pos: this.pos,
    phase: this.phase,
    section: this.section,
    lanePos: 0,
    momentSpeed: this.momentSpeed,
    targetSpeed: this.targetSpeed,
    speedNeeded: this.speedNeeded,
    acc: this.acc,
    sp: this.sp,
    temptCond: { ...this.temptCond },
    posKeepCond: { ...this.posKeepCond },
  });

  move = (umaState: UmaState, umaStateList: UmaState[]): UmaState => {
    this.setState(umaState);
    this.setCheckStateFuncList();
    this.updateState();

    return this.getState();
  };
}

export default Uma;
