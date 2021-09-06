import {
  Uma as UmaType,
  Status,
  StatusType,
  UmaState,
  UmaParams,
  ConstantsData,
  RaceTrack,
  RaceParams,
} from '../types';
import { roundNumbers, round, checkMinValue } from './Common';

import { Coefs } from '../constants/Coefs';
import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;
const { framesPerSec, frameLength, statusType } = constants;

interface Acc {
  acc: Record<string, Record<string, number>>;
  dec: Record<string, number>;
}

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

export interface UmaMethods {
  getState: () => any;
  move: (arg1: UmaState[]) => void;
  checkGoal: () => boolean;
  getFrameResult: () => any;
}

const posKeepSpeedCoef = {
  normal: 1.0,
  speedUp: 1.04,
  overtake: 1.05,
  paceUp: 1.04,
  paceDown: 0.915,
};

const stylePosKeepCoef: Record<string, number[]> = {
  '1': [1.0, 1.0],
  '2': [3.0, 5.0],
  '3': [6.5, 7.0],
  '4': [7.5, 8.0],
};

export class Uma implements UmaMethods {
  static raceParams: RaceParams;

  static setRaceParams(raceParams: RaceParams): void {
    this.raceParams = raceParams;
  }

  private rawStatus: Status;

  private umaName: string;

  protected surfaceFit: string;

  protected distFit: string;

  protected styleFit: string;

  protected status: Status;

  protected motivation: string;

  protected style: string;

  protected coefParams: CoefType;

  protected skillActRate: number;

  protected temptRate: number;

  protected spCostCoef: Record<string, number>;

  protected spMax: number;

  protected v: Record<string, number>;

  protected a: Acc;

  protected temptSection: number;

  protected pos: number;

  protected lanePos: number;

  protected momentSpeed: number;

  protected sp: number;

  protected order: number;

  protected moveState: string;

  protected costState: string;

  protected temptCond: {
    temptCount: number;
    temptLast: number;
    ifTempt: boolean;
  };

  protected posKeepCond: {
    mode: 'normal' | 'speedUp' | 'overtake';
    speedCoef: number;
    cd: number;
    start: number;
    end: number;
    rate: number;
    floorDist: number;
    ceilDist: number;
  };

  protected cond: [];

  protected targetSpeed: number;

  protected acc: number;

  protected frameResult: UmaState[];

  protected setPosKeepCoef: any;

  constructor(uma: UmaType) {
    const setCoefParams = () => ({
      motBonus: Coefs.motivation[this.motivation],
      styleFitCoef: Coefs.styleFit[this.styleFit],
      distFitCoef: Coefs.distFit[this.distFit],
      surfaceFitCoef: Coefs.surfaceFit[this.surfaceFit],
      usingStyleCoef: Coefs.usingStyle[this.style],
    });

    const setStatus = () => {
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
    };

    const setV = () => {
      const { speed, guts, wisdom } = this.status;
      const { distFitCoef, usingStyleCoef } = this.coefParams;
      const { baseV } = Uma.raceParams;

      // /////////
      // TODO: set random
      // let wisMod = {}
      // wisMod.max = ((uma.status.wisdom / 5500) * (Math.log10(uma.status.wisdom) - 1) * 0.01)
      // wisMod.min = (wisMod.max - .65)
      // wisMod.avg = (wisMod.max - .325)
      const wisMod =
        ((wisdom / 5500) * Math.log10(wisdom * 0.1) - 0.325) * 0.01;
      const vCoef = usingStyleCoef.v;
      const speedEffect = (speed * 500) ** 0.5 * distFitCoef.v * 0.002;

      const v = {
        startdash: baseV * 0.85,
        phase0: baseV * (vCoef.phase0 + wisMod),
        phase1: baseV * (vCoef.phase1 + wisMod),
        phase2: baseV * (vCoef.phase2 + wisMod) + speedEffect,
        phase3: baseV * (vCoef.phase2 + wisMod) + speedEffect,
        tiring: baseV * 0.85 + (guts * 200) ** 0.5 * 0.001,
        spurting: speedEffect,
      };
      v.spurting += (v.phase2 + baseV * 0.01) * 1.05;

      return roundNumbers(v);
    };

    const setA = () => {
      const { surfaceFitCoef, distFitCoef, usingStyleCoef } = this.coefParams;
      const { power } = this.status;
      const accCoef = (500 * power) ** 0.5 * surfaceFitCoef.a * distFitCoef.a;
      const aCoef = usingStyleCoef.a;
      return roundNumbers({
        acc: {
          normal: {
            phase0: accCoef * 0.0006 * aCoef.phase0,
            phase1: accCoef * 0.0006 * aCoef.phase1,
            phase2: accCoef * 0.0006 * aCoef.phase2,
            phase3: accCoef * 0.0006 * aCoef.phase3,
          },
          ascent: {
            phase0: accCoef * 0.0004 * aCoef.phase0,
            phase1: accCoef * 0.0004 * aCoef.phase1,
            phase2: accCoef * 0.0004 * aCoef.phase2,
            phase3: accCoef * 0.0004 * aCoef.phase3,
          },
          descent: {
            phase0: accCoef * 0.0006 * aCoef.phase0,
            phase1: accCoef * 0.0006 * aCoef.phase1,
            phase2: accCoef * 0.0006 * aCoef.phase2,
            phase3: accCoef * 0.0006 * aCoef.phase3,
          },
        },
        dec: {
          tiring: -1.2,
          phase0: -0.8,
          phase1: -1.0,
          phase2: -1.2,
          phase3: -1.2,
        },
      });
    };
    this.rawStatus = { ...uma.status };
    this.umaName = uma.umaName;
    this.motivation = uma.motivation;
    this.style = uma.usingStyle;

    this.surfaceFit = uma.fit.surface;
    this.distFit = uma.fit.dist;
    this.styleFit = uma.fit.style;
    this.coefParams = setCoefParams();
    this.status = setStatus();

    this.skillActRate = Math.max(
      100 - 9000.0 / (this.rawStatus.wisdom * this.coefParams.motBonus),
      20
    );
    this.temptRate = (6.5 / Math.log10(0.1 * this.status.wisdom + 1)) ** 2;
    this.spCostCoef = {
      ...constants.spConsume,
      spurting: 1 + 200 / (600 * this.status.guts) ** 0.5,
    };
    this.spMax =
      Uma.raceParams.dist +
      0.8 * this.status.stamina * this.coefParams.usingStyleCoef.sp;
    this.v = setV();
    this.a = setA();

    this.temptSection =
      Math.random() * 100 < this.temptRate
        ? Math.floor(Math.random() * 8) + 1
        : -1;

    this.pos = 0;
    this.order = 1;
    this.lanePos = 0;
    this.momentSpeed = 3;
    this.sp = this.spMax;
    this.moveState = 'startdash';
    this.costState = 'normal';
    this.targetSpeed = -1;
    this.acc = -1;
    this.temptCond = {
      temptCount: 0,
      temptLast: 0,
      ifTempt: false,
    };
    this.cond = [];
    this.frameResult = [];

    const distPosKeepCoef = 0.0008 * (Uma.raceParams.dist - 1000) + 1.0;
    this.posKeepCond = {
      mode: 'normal',
      speedCoef: 1,
      cd: 0,
      start: 0,
      end: 0,
      rate:
        (this.style === '1' ? 20 : 15) * Math.log10(0.1 * this.status.wisdom),
      floorDist: stylePosKeepCoef[this.style][0] * distPosKeepCoef,
      ceilDist: stylePosKeepCoef[this.style][1] * distPosKeepCoef,
    };

    this.setPosKeepCoef = setPosKeepCoef(this.style);
  }

  getState = (): any => ({
    umaName: this.umaName,
    cond: this.cond,
    lanePos: this.lanePos,
    pos: this.pos,
    order: this.order,
    momentSpeed: this.momentSpeed,
    sp: this.sp,
  });

  move = (raceState: UmaState[]): void => {
    const {
      order,
      pos,
      lanePos,
      phase,
      section,
      slopeType,
      slopeValue,
      momentSpeed,
      cond,
    } = raceState.find(
      (umaState: UmaState) => umaState.umaName === this.umaName
    ) as UmaState;

    const setMoveState = (): void => {
      const checkSpurt = (): boolean => {
        const costStateCoef = this.spCostCoef.spurting;
        const spSpeedCoef =
          (this.v.spurting - Uma.raceParams.baseV + 12.0) ** 2 / 144;
        const totalTime = (Uma.raceParams.dist - pos - 60) / this.v.spurting;
        const spSurfaceCoef = Uma.raceParams.surfaceCoef.sp;
        const spNeeded =
          20 * costStateCoef * spSpeedCoef * spSurfaceCoef * totalTime;
        return this.sp >= spNeeded;
      };
      if (this.sp <= 0) {
        this.moveState = 'tiring';
      } else {
        switch (this.moveState) {
          case 'startdash':
            this.moveState =
              momentSpeed >= this.v.startdash
                ? `phase${String(phase)}`
                : 'startdash';
            break;
          case 'spurting':
            this.moveState = 'spurting';
            break;
          default:
            this.moveState =
              section > 16 && checkSpurt()
                ? 'spurting'
                : `phase${String(phase)}`;
            break;
        }
      }
    };
    const setCostState = (): void => {
      const checkTemptStart = (): boolean => {
        if (
          section > 10 ||
          section !== this.temptSection ||
          this.temptCond.ifTempt
        ) {
          return false;
        }

        this.temptCond = {
          ...this.temptCond,
          temptLast: 3 * framesPerSec,
          temptCount: 1,
          ifTempt: true,
        };
        return true;
      };
      if (this.costState === 'tempt') {
        const checkTemptEnd = (): boolean => {
          this.temptCond.temptCount += 1;

          if (
            this.temptCond.temptCount >= 12 * framesPerSec ||
            (this.temptCond.temptCount >= this.temptCond.temptLast &&
              Math.random() * 100 < 55)
          ) {
            return true;
          }

          this.temptCond.temptLast += 3 * framesPerSec;
          return false;
        };
        if (checkTemptEnd()) {
          this.costState = 'normal';
        }
      }

      switch (this.costState) {
        case 'normal':
          if (checkTemptStart()) {
            this.costState = 'tempt';
          } else {
            this.costState =
              this.moveState === 'spurting' ? 'spurting' : 'normal';
          }
          break;
        // case 'spurting':
        // break;
        // case 'slacking':
        // unknown right now
        // break;
        // case 'descentMode':
        /// //////////////////
        // todo
        // break;
        default:
          break;
      }
    };
    const setSpeed = (): void => {
      const setTargetSpeed = (): void => {
        const getPosKeepCoef = (): number => {
          if (section <= 10 && this.moveState !== 'startdash') {
            this.setPosKeepCoef[this.posKeepCond.mode].call(this, raceState);
            return posKeepSpeedCoef[this.posKeepCond.mode];
          }
          return 1;
        };
        const getSkillEffect = (): number => {
          // todo
          return 0;
        };
        const getSlopeEffect = (): number => {
          switch (slopeType) {
            case 'ascent':
              return round((slopeValue * -200) / this.status.power);
            case 'descent':
              // todo
              return 0;
            default:
              return 0;
          }
        };

        if (this.moveState === 'startdash') {
          this.targetSpeed = round(
            this.v.startdash + getSlopeEffect() + getSkillEffect()
          );
        } else {
          this.targetSpeed = round(
            this.v[this.moveState] * getPosKeepCoef() +
              getSlopeEffect() +
              getSkillEffect()
          );
        }
      };
      const setAcc = (speedDiff: number): void => {
        this.acc = 0;
        if (this.moveState === 'tiring') {
          this.acc = this.a.dec.tiring;
        } else if (speedDiff !== 0) {
          if (speedDiff < 0) {
            this.acc = this.a.acc[slopeType][`phase${String(phase)}`];
          } else {
            this.acc = this.a.dec[`phase${String(phase)}`];
          }
          // startdash bonus
          if (this.moveState === 'startdash') {
            this.acc += 24.0;
          }
        }
        this.acc = round(this.acc);
      };
      setTargetSpeed();
      const speedDiff = round(momentSpeed - this.targetSpeed);
      setAcc(speedDiff);
      const totalAcc = this.acc * frameLength;
      this.momentSpeed = round(
        Math.abs(totalAcc) > Math.abs(speedDiff)
          ? this.targetSpeed
          : momentSpeed + totalAcc
      );
    };
    const updateUma = (): void => {
      const avgSpeed = (this.momentSpeed + momentSpeed) / 2;
      const getSpCost = (): number => {
        const costStateCoef = this.spCostCoef[this.costState];
        const spSpeedCoef = (avgSpeed - Uma.raceParams.baseV + 12.0) ** 2 / 144;
        const spSurfaceCoef = Uma.raceParams.surfaceCoef.sp;

        return 20 * costStateCoef * spSpeedCoef * spSurfaceCoef * frameLength;
      };
      this.sp -= getSpCost();
      this.pos += avgSpeed * frameLength;
      this.pos = round(this.pos);
    };
    setMoveState();
    setCostState();
    setSpeed();
    updateUma();

    this.frameResult.push(this.getState());
  };

  checkGoal = (): boolean => this.pos >= Uma.raceParams.dist;

  getFrameResult = () => this.frameResult;
}

export default Uma;

// function checkModeEnd(this: UmaState) {
//   if ((this.pos - this.posKeepCond.start) >= Uma.raceParams.sectionDist) {
//     return true;
//   }
// };

// function checkSpeedUpStart(this: UmaState) {
//   if () {

//     return false;
//   }
//   const checkSpeedUpEnd = () => (this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist) ||
//       (this.order === 1 && this.pos - raceState[1].pos > 4.5);
//   return this.costState === 'tempt' ||
//   if ( {
//     return true;
//   }
// };

// function checkOvertake(this: UmaState) {
//   if ((this.pos - this.posKeepCond.start) >= Uma.raceParams.sectionDist) {
//     return true;
//   }
// };

// const setPosKeepCoef = (style: string) => {
//   const posKeepNigeFunc = () => {
//     if (this.posKeepCond.mode === 'normal') {
//       const checkModeStart = () => {
//         return true;
//       };
//       if (this.posKeepCond.cd > 0) {
//         this.posKeepCond.cd--;
//       } else {
//         if (!checkModeStart()) {
//           this.posKeepCond.cd = 2 * framesPerSec;
//         } else {
//           this.posKeepCond.cd = 0;
//         }
//       }
//     } else {
//       checkModeEnd.call(this);
//     }
//   }

//   // const posKeepNige = {
//   //   normal(this: UmaState, raceState: UmaState[]) {
//   //     if (this.posKeepCond.cd > 0) {
//   //       this.posKeepCond.cd -= 1;
//   //       return;
//   //     }
//   //     if (
//   //       raceState[0].umaName === this.umaName &&
//   //       this.pos - raceState[1].pos < 4.5
//   //     ) {
//   //       if (
//   //         Math.random() * 100 < this.posKeepCond.rate ||
//   //         this.moveState === 'tempt'
//   //       ) {
//   //         this.posKeepCond.start = this.pos;
//   //         this.posKeepCond.mode = 'speedUp';
//   //       }
//   //       this.posKeepCond.cd = 2 * framesPerSec;
//   //       // check overtake mode
//   //     } else if (this.order !== 1) {
//   //       // check pass
//   //       if (
//   //         Math.random() * 100 < this.posKeepCond.rate ||
//   //         this.moveState === 'tempt'
//   //       ) {
//   //         this.posKeepCond.start = this.pos;
//   //         this.posKeepCond.mode = 'overtake';
//   //       }
//   //       // if not pass, 2 secs cd
//   //       this.posKeepCond.cd = 2 * framesPerSec;
//   //     }
//   //   },
//   //   speedUp(this: UmaState, raceState: UmaState[]) {
//   //     // check mode end
//   //     if (
//   //       this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
//   //       (this.order === 1 && this.pos - raceState[1].pos > 4.5)
//   //     ) {
//   //       this.posKeepCond.mode = 'normal';
//   //     }
//   //   },
//   //   overtake(this: UmaState, raceState: UmaState[]) {
//   //     // check end
//   //     if (
//   //       this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist ||
//   //       (this.order === 1 && this.pos - raceState[0].pos > 10.0)
//   //     ) {
//   //       this.posKeepCond.mode = 'normal';
//   //     }
//   //   },
//   // };
//   // const posKeepSenkou = {
//   //   normal(this: UmaState, raceState: UmaState[]) {
//   //     if (this.posKeepCond.cd > 0) {
//   //       this.posKeepCond.cd -= 1;
//   //     }
//   //     const sentouPos = raceState[0].pos;

//   //     // check tempoDown
//   //     if (sentouPos - this.pos <= this.posKeepCond.floorDist) {
//   //       this.posKeepCond.mode = 'tempoDown';
//   //       // check tempoUp
//   //     } else if (this.posKeepCond.cd <= 0) {
//   //       if (this.costState === 'tempt') {
//   //         this.posKeepCond.mode = 'tempoUp';
//   //       } else if (
//   //         this.posKeepCond.cd === 0 &&
//   //         Math.random() * 100 < this.posKeepCond.rate
//   //       ) {
//   //         this.posKeepCond.mode = 'tempoUp';
//   //       } else {
//   //         this.posKeepCond.cd = 2 * framesPerSec;
//   //       }
//   //     }
//   //   },
//   //   tempoUp(this: UmaState, raceState: UmaState[]) {
//   //     const posDiff = raceState[0].pos - this.pos;
//   //     if (posDiff <= this.posKeepCond.floorDist) {
//   //       this.posKeepCond.mode = 'tempoDown';
//   //     } else if (posDiff <= this.posKeepCond.ceilDist) {
//   //       this.posKeepCond.mode = 'normal';
//   //     }
//   //   },
//   //   tempoDown(this: UmaState, raceState: UmaState[]) {
//   //     if (this.posKeepCond.cd > 0) {
//   //       this.posKeepCond.cd -= 1;
//   //     }
//   //     const posDiff = raceState[0].pos - this.pos;
//   //     if (posDiff >= this.posKeepCond.floorDist) {
//   //       this.posKeepCond.mode = 'normal';
//   //     }
//   //   },
//   // };

//   // const posKeepFuncList = [{}, posKeepNige, posKeepSenkou];
//   // return posKeepFuncList[Number(style)];
// };
