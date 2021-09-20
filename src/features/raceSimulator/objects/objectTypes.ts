import { UmaSetting, StatusType, ConstantsData, RaceTrack } from '../types';

export type UmaObject = UmaMethods & UmaProps;

export interface UmaMethods {
  // method
  move: (umaObjArr: UmaObject[]) => void;
  getNextRandom: () => number;
}

export interface UmaParams {
  name: string;
  rawStatus: Record<StatusType, number>;
  status: Record<StatusType, number>;
  surfaceFit: string;
  distFit: string;
  styleFit: string;
  motivation: string;
  style: string;
  coef: Record<string, Record<string, number>>;
  spMax: number;
  umaBaseSpeed: Map<string | number, number>;
  umaBaseAcc: Map<string | number, number>;
  umaBaseDec: Map<string | number, number>;
  rate: Record<string, number>;
  floorDist: number;
  ceilDist: number;
}

export interface UmaProps {
  umaParams: UmaParams;
  umaFrameResult: UmaState[];
  umaState: UmaState;
  temptSection: number;
  checkCondStartArr: string[];
  checkCondEndArr: string[];
}

export interface UmaState {
  phase: number;
  section: number;
  slopeType: string;
  slopeValue: number;
  pos: number;
  lanePos: number;
  momentSpeed: number;
  targetSpeed: number;
  speedNeeded: number;
  momentAcc: number;
  sp: number;
  posKeepCond: {
    mode: 'normal' | 'speedUp' | 'overtake' | 'paceUp' | 'paceDown';
    speedCoef: number;
    cd: number;
    start: number;
  };
  cond: Record<string, boolean>;
}

export type RaceObject = RaceMethods & RaceProps;

export interface RaceParams {
  name: string;
  dist: number;
  phaseLine: number[];
  sectionDist: number;
  distType: number;
  surface: number;
  turn: number;
  statusCheck: StatusType[];
  laneMax: number;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: Record<string, number>[];
  slopes: number[];
  surfaceConstant: Record<string, number>;
  surfaceCoef: Record<string, number>;
  raceBaseSpeed: number;
  distPosKeepCoef: number;
}

export interface RaceProps {
  raceParams: RaceParams;
  raceState: RaceState;
  raceFrameResult: RaceState[];
}

export interface RaceState {
  goalCount: number;
  elapsedFrame: number;
  sentouPos: number;
}

export interface RaceMethods {
  orderUma: () => void;
  progressRace: () => void;
}
