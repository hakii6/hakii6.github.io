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
import { roundNumbers, checkMinValue } from './Common';

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

export class Uma {
  static raceParams: RaceParams;

  static setRaceParams(raceParams: RaceParams) {
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

  protected posKeepRate: number;

  protected temptSection: number;

  protected pos: number;

  protected momentSpeed: number;

  protected sp: number;

  constructor(uma: UmaType) {
    this.rawStatus = { ...uma.status };
    this.umaName = uma.umaName;
    this.motivation = uma.motivation;
    this.style = uma.usingStyle;

    this.surfaceFit = uma.fit.surface;
    this.distFit = uma.fit.dist;
    this.styleFit = uma.fit.style;
    this.coefParams = this.setCoefParams();
    this.status = this.setStatus();

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
    this.v = this.setV();
    this.a = this.setA();
    this.posKeepRate =
      (this.style === '1' ? 20 : 15) * Math.log10(0.1 * this.status.wisdom);
    this.temptSection =
      Math.random() * 100 < this.temptRate
        ? Math.floor(Math.random() * 8) + 1
        : -1;

    this.pos = -1;
    this.momentSpeed = -1;
    this.sp = -1;
  }

  setCoefParams = () => ({
    motBonus: Coefs.motivation[this.motivation],
    styleFitCoef: Coefs.styleFit[this.styleFit],
    distFitCoef: Coefs.distFit[this.distFit],
    surfaceFitCoef: Coefs.surfaceFit[this.surfaceFit],
    usingStyleCoef: Coefs.usingStyle[this.style],
  });

  setStatus = () => {
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
      (total: number, curValue: StatusType) => {
        return (
          total +
          Math.min(
            Math.ceil(
              (this.rawStatus[curValue] * this.coefParams.motBonus) / 300
            ),
            4
          ) *
            0.05
        );
      },
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
        rawWisdom * motBonus * styleFitCoef.wisdom + passiveSkillEffect.wisdom,
    };
    return checkMinValue(roundNumbers(status), 1);
  };

  setV = () => {
    // /////////
    // TODO: set random
    // let wisMod = {}
    // wisMod.max = ((uma.status.wisdom / 5500) * (Math.log10(uma.status.wisdom) - 1) * 0.01)
    // wisMod.min = (wisMod.max - .65)
    // wisMod.avg = (wisMod.max - .325)

    const { speed, guts, wisdom } = this.status;
    const { distFitCoef, usingStyleCoef } = this.coefParams;
    const { baseV } = Uma.raceParams;

    const wisMod = ((wisdom / 5500) * Math.log10(wisdom * 0.1) - 0.325) * 0.01;
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

  setA = () => {
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
}

export default Uma;
