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

interface Acc {
  acc: Record<string, Record<string, number>>;
  dec: Record<string, Record<string, number>>;
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

export interface UmaClassType {
  // method
  setReady: (arg1: UmaState) => UmaState;
  getState: () => any;
  move: (arg1: UmaState, arg2: UmaState[]) => UmaState;
  // checkGoal: () => boolean;
  getFrameResult: () => any;

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
  spCostCoef: Record<string, number>;
  spMax: number;
  v: Record<string, number>;
  a: Acc;
  temptSection: number;
  frameResult: UmaState[];
  setPosKeepCoef: any;
}

export interface UmaState {
  waku: number;
  phase: number;
  section: number;
  slopeType: string;
  slopeValue: number;
  pos: number;
  lanePos: number;
  momentSpeed: number;
  targetSpeed: number;
  speedNeeded: number;
  acc: number;
  sp: number;
  order: number;
  moveState: string;
  costState: string;
  temptCond: {
    temptCount: number;
    temptLast: number;
    ifTempt: boolean;
  };
  posKeepCond: {
    mode: 'normal' | 'speedUp' | 'overtake';
    speedCoef: number;
    cd: number;
    start: number;
    end: number;
    rate: number;
    floorDist: number;
    ceilDist: number;
  };
  cond: Array<unknown>;
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

  spCostCoef: Record<string, number>;

  spMax: number;

  v: Record<string, number>;

  a: Acc;

  temptSection: number;

  frameResult: UmaState[];

  setPosKeepCoef: any;

  waku = 0;

  phase = 0;

  section = 0;

  slopeType = '';

  slopeValue = 0;

  pos = 0;

  lanePos = 0;

  momentSpeed = 0;

  sp = 0;

  order = 0;

  moveState = '';

  costState = '';

  targetSpeed = 0;

  temptCond = {
    temptCount: 0,
    temptLast: 0,
    ifTempt: false,
  };

  posKeepCond = {
    mode: 'normal' as UmaState['posKeepCond']['mode'],
    speedCoef: 0,
    cd: 0,
    start: 0,
    end: 0,
    rate: 0,
    floorDist: 0,
    ceilDist: 0,
  };

  acc = 0;

  speedNeeded = 0;

  cond = [];

  checkMoveStateIndex = 0;

  checkMoveStateList: Array<[string, () => boolean]> = [
    ['startdash', () => this.momentSpeed >= this.v.startdash],
    ['phase0', () => this.phase !== 0],
    ['phase1', () => this.phase !== 1],
    ['phase2', () => false],
  ];

  checkMoveStateEnd = () => false;

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
      const { baseV } = Uma.raceParams;

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
    })();

    this.a = (() => {
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
            spurting: accCoef * 0.0006 * aCoef.phase3,
          },
          ascent: {
            phase0: accCoef * 0.0004 * aCoef.phase0,
            phase1: accCoef * 0.0004 * aCoef.phase1,
            phase2: accCoef * 0.0004 * aCoef.phase2,
            phase3: accCoef * 0.0004 * aCoef.phase3,
            spurting: accCoef * 0.0006 * aCoef.phase3,
          },
          descent: {
            phase0: accCoef * 0.0006 * aCoef.phase0,
            phase1: accCoef * 0.0006 * aCoef.phase1,
            phase2: accCoef * 0.0006 * aCoef.phase2,
            phase3: accCoef * 0.0006 * aCoef.phase3,
            spurting: accCoef * 0.0006 * aCoef.phase3,
          },
        },
        dec: {
          normal: {
            tiring: -1.2,
            phase0: -0.8,
            phase1: -1.0,
            phase2: -1.2,
            phase3: -1.2,
            spurting: -1.2,
          },
          ascent: {
            tiring: -1.2,
            phase0: -0.8,
            phase1: -1.0,
            phase2: -1.2,
            phase3: -1.2,
            spurting: -1.2,
          },
          descent: {
            tiring: -1.2,
            phase0: -0.8,
            phase1: -1.0,
            phase2: -1.2,
            phase3: -1.2,
            spurting: -1.2,
          },
        },
      });
    })();

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

    // todo: rand
    this.temptSection =
      Math.random() * 100 < this.temptRate
        ? Math.floor(Math.random() * 8) + 1
        : -1;
    this.cond = [];
    this.frameResult = [];

    [this.moveState, this.checkMoveStateEnd] =
      this.checkMoveStateList[this.checkMoveStateIndex];
  }

  setReady = (umaState: any): UmaState => ({
    ...umaState,
    sp: this.spMax,
  });

  // checkModeStart() {
  //   // checkModeStart
  //   if (mode === 'tempt' || (order === 1 && pos - order2Uma.pos < 4.5)) {
  //     if (Math.random() * 100 < posKeepCond.rate) {
  //       return ['speedUp', checkModeEnd['speedUp']];
  //     }
  //   } else if (order !== 1) {
  //     if (Math.random() * 100 < posKeepCond.rate) {
  //       return ['overtake', checkModeEnd['overtake']]
  //     }
  //   } else {
  //     cd = 2 * framesPerSec;
  //     return () => { cd--; return cd === 0 };
  //   }
  // }

  // checkModeEnd = {
  //   speedUp: () => this.order === 1 && this.pos - raceState[1].pos > 4.5,
  //   overtake: () => this.order === 1 && this.pos - raceState[1].pos > 10,
  //   tempoUp: () => raceState[0].pos - this.pos <= this.posKeepCond.ceilDist,
  //   tempoDown: () => raceState[0].pos - this.pos >= this.posKeepCond.floorDist,
  // }
  // forcePosKeepEnd = () => this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist;

  // setMoveState = () => {
  //   if (this.checkMoveStateEnd()) {
  //     this.
  //   }
  // }

  // moveState startdash > phase0 > phase 1 > phase 2 > spurting

  setMoveState = () => {
    if (this.checkMoveStateEnd()) {
      this.checkMoveStateIndex += 1;
      [this.moveState, this.checkMoveStateEnd] =
        this.checkMoveStateList[this.checkMoveStateIndex];
    }
  };

  checkCostStateEnd = () => false;

  checkCostStateEndDict: Record<UmaState['costState'], () => boolean> = {
    normal: () =>
      this.phase === this.temptSection || this.moveState === 'spurting',

    // todo: can tempt over section 10?
    // tempt: (umaState: UmaState) => true,
    spurting: () => false,

    // todo: not checking
    slacking: () => true,
    descent: () => true,
  };

  setNewCostState = (): string => {
    if (this.moveState === 'spurting') {
      return 'spurting';
    }
    return 'normal';
  };

  getPosKeepCoef = (): number => {
    // todo
    // if (section <= 10 && this.moveState !== 'startdash') {
    //   this.setPosKeepCoef[this.posKeepCond.mode].call(this, raceState);
    //   return posKeepSpeedCoef[this.posKeepCond.mode];
    // }
    return 1;
  };

  getSkillEffect = (): number => {
    // todo
    return 0;
  };

  getSlopeEffect = (): number => {
    switch (this.slopeType) {
      case 'ascent':
        return round((this.slopeValue * -200) / this.status.power);
      case 'descent':
        // todo
        return 0;
      default:
        return 0;
    }
  };

  setTargetSpeed = (): void => {
    // todo: posKeep when startdash?
    if (this.moveState === 'startdash') {
      this.targetSpeed = round(
        this.v.startdash + this.getSlopeEffect() + this.getSkillEffect()
      );
    } else {
      this.targetSpeed = round(
        this.v[this.moveState] * this.getPosKeepCoef() +
          this.getSlopeEffect() +
          this.getSkillEffect()
      );
    }
  };

  setAcc = (): void => {
    this.acc = this.moveState === 'startdash' ? 24.0 : 0;
    if (this.moveState === 'tiring') {
      this.acc = this.a.dec[this.slopeType].tiring;
    } else {
      this.acc =
        this.speedNeeded > 0
          ? this.a.acc[this.slopeType][`phase${String(this.phase)}`]
          : this.a.dec[this.slopeType][`phase${String(this.phase)}`];
    }
    this.acc = round(this.acc);
  };

  getNextSpeed = (): number => {
    this.setTargetSpeed();
    this.speedNeeded = round(this.targetSpeed - this.momentSpeed);
    this.setAcc();
    const maxAcc = this.acc * frameLength;
    return Math.abs(this.speedNeeded) < Math.abs(maxAcc)
      ? this.targetSpeed
      : this.momentSpeed + maxAcc;
  };

  updateSp = (avgSpeed: number): void => {
    const costStateCoef = this.spCostCoef[this.costState];
    const spSpeedCoef = (avgSpeed - Uma.raceParams.baseV + 12.0) ** 2 / 144;
    const spSurfaceCoef = Uma.raceParams.surfaceCoef.sp;
    this.sp -= 20 * costStateCoef * spSpeedCoef * spSurfaceCoef * frameLength;
  };

  updateUma = (): void => {
    const nextSpeed = this.getNextSpeed();
    const avgSpeed = (this.momentSpeed + nextSpeed) / 2;
    this.updateSp(avgSpeed);
    this.momentSpeed = nextSpeed;
    this.pos += avgSpeed * frameLength;
    this.pos = round(this.pos);
  };

  setState = (umaState: UmaState) => Object.assign(this, umaState);

  getState = (): any => ({
    pos: this.pos,
    lanePos: 0,
    momentSpeed: this.momentSpeed,
    targetSpeed: this.targetSpeed,
    speedNeeded: this.speedNeeded,
    acc: this.acc,
    sp: this.sp,
    moveState: this.moveState,
    costState: this.costState,
    temptCond: { ...this.temptCond },
    posKeepCond: { ...this.posKeepCond },
  });

  move = (umaState: UmaState, umaStateList: UmaState[]): UmaState => {
    this.setState(umaState);
    this.setMoveState();
    if (this.checkCostStateEnd()) {
      this.setNewCostState();
    }

    this.updateUma();

    return this.getState();
  };

  // checkGoal = (): boolean => this.pos >= Uma.raceParams.dist;

  getFrameResult = () => this.frameResult;
}

export default Uma;
