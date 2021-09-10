import {
  UmaOption,
  Status,
  StatusType,
  ConstantsData,
  RaceTrack,
} from '../types';
import { RaceParams } from './Race';
import { roundNumbers, round, checkMinValue } from './Common';

import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;
const { framesPerSec, frameLength, statusType } = constants;

export type UmaClass = UmaMethods & UmaParams & UmaState;

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

interface UmaMethods {
  // method
  setReady: (arg1: UmaState) => UmaState;
  getState: () => any;
  move: (arg1: UmaState, arg2: UmaState[]) => UmaState;
  findUmaPos: (arg1: number, arg2: UmaState[]) => number;
}

interface UmaParams {
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
    mode: 'normal' | 'speedUp' | 'overtake' | 'paceUp' | 'paceDown';
    speedCoef: number;
    cd: number;
    start: number;
    rate: number;
    floorDist: number;
    ceilDist: number;
  };
  cond: Record<string, boolean>;
}

const posKeepSpeedCoef = {
  normal: 1.0,
  speedUp: 1.04,
  overtake: 1.05,
  paceUp: 1.04,
  paceDown: 0.915,
};

export class Uma implements UmaMethods, UmaParams, UmaState {
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

  cond: Record<string, boolean> = {
    startdash: true,
    posKeep: true,
    tempt: false,
    spurt: false,
    tiring: false,
  };

  checkCondStartArr: Array<string> = [];

  checkCondEndArr: Array<string> = [];

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

    this.checkCondStartArr = ['tiring'];
    this.checkCondEndArr = ['startdash', 'posKeep'];
    // todo: rand
    this.temptSection =
      Math.random() * 100 < this.temptRate
        ? Math.floor(Math.random() * 8) + 1
        : -1;
    if (this.temptSection !== -1) {
      this.checkCondStartArr.push('tempt');
    }
  }

  findUmaPos = (umaOrder: number, umaStateList: UmaState[]): number => {
    const umaState = umaStateList.find(
      (curUmaState: UmaState) => curUmaState.order === umaOrder
    );
    if (umaState === undefined) {
      // todo: checkError
      return 5000;
    }
    return umaState.pos;
  };

  setReady = (umaState: any): UmaState => ({
    ...umaState,
    sp: this.spMax,
  });

  checkCondStart: Record<string, () => boolean> = {
    tiring: () => {
      if (this.sp <= 0) {
        return true;
      }
      return false;
    },
    spurt: () => {
      if (this.phase < 2) {
        return false;
      }
      const { spurtSpeed, spSurfaceCoef, spurtSpCoef } = this;
      const { dist, baseSpeed } = Uma.raceParams;
      const spSpeedCoef = (spurtSpeed - baseSpeed + 12.0) ** 2 / 144;
      const totalTime = (dist - this.pos - 60) / spurtSpeed;
      return this.sp >= 20 * spSpeedCoef * spSurfaceCoef * totalTime;
    },
    tempt: () => {
      if (this.section === this.temptSection) {
        this.temptCond = {
          temptLast: 3 * framesPerSec,
          temptCount: 1,
        };
        return true;
      }
      return false;
    },
  };

  checkCondEnd: Record<string, () => boolean> = {
    tiring: () => {
      if (this.sp > 0) {
        return true;
      }
      return false;
    },
    startdash: () => {
      if (this.momentSpeed >= Uma.raceParams.baseSpeed * 0.85) {
        return true;
      }
      return false;
    },
    spurt: () => false,
    posKeep: () => {
      if (this.section > 10) {
        this.checkCondStartArr.push('spurt');
        return true;
      }
      return false;
    },
    tempt: () => {
      this.temptCond.temptCount += 1;
      if (this.temptCond.temptCount >= 12 * framesPerSec) {
        return true;
      }
      if (this.temptCond.temptCount < this.temptCond.temptLast) {
        if (Math.random() * 100 < 55) {
          return true;
        }
        this.temptCond.temptLast += 3 * framesPerSec;
      }
      return false;
    },
  };

  checkPosKeep = (umaStateList: UmaState[]) => {
    switch (this.posKeepCond.mode) {
      case 'normal':
        if (this.posKeepCond.cd === 0) {
          if (Math.random() * 100 < this.posKeepCond.rate || this.cond.tempt) {
            if (this.order === 1 && this.findUmaPos(2, umaStateList) < 4.5) {
              this.posKeepCond.start = this.pos;
              return 'speedUp';
            }
            if (this.order !== 1) {
              this.posKeepCond.start = this.pos;
              return 'overtake';
            }
          }
          this.posKeepCond.cd = framesPerSec * 3;
          return 'normal';
        }
        this.posKeepCond.cd -= 1;
        return 'normal';
      case 'speedUp':
        if (
          this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
          this.pos - this.findUmaPos(2, umaStateList) > 4.5
        ) {
          return 'normal';
        }
        return 'speedUp';
      case 'overtake':
        if (
          this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
          this.pos - this.findUmaPos(2, umaStateList) > 10
        ) {
          return 'normal';
        }
        return 'overtake';
      default:
        return 'normal';
    }
  };

  checkPosKeep2 = (umaStateList: UmaState[]) => {
    const { ceilDist, floorDist, rate } = this.posKeepCond;
    const { sectionDist } = Uma.raceParams;
    const posDiff = this.findUmaPos(1, umaStateList) - this.pos;
    const lastDist = this.pos - this.posKeepCond.start;

    switch (this.posKeepCond.mode) {
      case 'normal':
        if (this.posKeepCond.cd === 0) {
          if (posDiff > ceilDist) {
            if (Math.random() * 100 < rate || this.cond.tempt) {
              this.posKeepCond.start = this.pos;
              return 'paceUp';
            }
          } else if (posDiff < floorDist) {
            this.posKeepCond.start = this.pos;
            return 'paceDown';
          }

          this.posKeepCond.cd = framesPerSec * 3;
          return 'normal';
        }
        this.posKeepCond.cd -= 1;
        return 'normal';
      case 'paceUp':
        if (lastDist >= sectionDist || posDiff > ceilDist) {
          return 'normal';
        }
        return 'paceUp';
      case 'paceDown':
        // todo: if skill on, then true
        if (lastDist >= sectionDist || posDiff > floorDist) {
          return 'normal';
        }
        return 'paceDown';
      default:
        return 'normal';
    }
  };

  checkState = () => {
    this.checkCondEndArr = this.checkCondEndArr.filter((condName: string) => {
      if (this.checkCondEnd[condName as string]()) {
        this.cond[condName as string] = false;
        return false;
      }
      return true;
    });
    this.checkCondStartArr = this.checkCondStartArr.filter(
      (condName: string) => {
        if (this.checkCondStart[condName as string]()) {
          this.cond[condName as string] = true;
          return false;
        }
        return true;
      }
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
          return posKeepSpeedCoef[this.posKeepCond.mode];
        };
        const getSkillEffect = (): number => {
          // todo
          return 0;
        };
        const getSlopeEffect = (): number => {
          if (this.slopeValue >= 1) {
            return round((this.slopeValue * -200) / status.power);
          }
          if (this.slopeValue <= -1) {
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
          if (this.slopeValue >= 1) {
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

    const nextSpeed = round(getNextSpeed());
    const avgSpeed = round((this.momentSpeed + nextSpeed) / 2);
    const nextSp = round(getNextSp(avgSpeed));

    this.momentSpeed = nextSpeed;
    this.sp = nextSp;
    this.pos += round(avgSpeed * frameLength);
  };

  setState = (umaState: UmaState) => Object.assign(this, umaState);

  getState = (): any => ({
    pos: round(this.pos),
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
    cond: this.cond,
  });

  move = (umaState: UmaState, umaStateList: UmaState[]): UmaState => {
    this.setState(umaState);
    this.checkState();
    if (this.cond.posKeep) {
      if (this.style === '1') {
        this.posKeepCond.mode = this.checkPosKeep(umaStateList);
      } else {
        this.posKeepCond.mode = this.checkPosKeep2(umaStateList);
      }
    }
    this.updateState();

    return this.getState();
  };
}

export default Uma;
