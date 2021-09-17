import {
  UmaOption,
  Status,
  StatusType,
  ConstantsData,
  RaceTrack,
} from '../types';

export type UmaObject = UmaMethods & UmaProps;

export interface UmaMethods {
  // method
  move: (arg1: UmaState, arg2: UmaState[]) => UmaState;
  findUmaPos: (arg1: number, arg2: UmaState[]) => number;
  getNextRandom: () => number;
}

export interface UmaParams {
  name: string;
  rawStatus: Status;
  status: Status;
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
  raceState: UmaState[];
  umaCount: number;
  raceResult: UmaState[][];
}

export interface RaceMethods {
  calPosDetails: (arg1: number) => Record<string, unknown>;
  setUmaOrder: () => void;
  saveFrameResult: (arg1: UmaState, arg2: number) => void;
  progressRace: () => void;
  checkAllGoal: () => boolean;
}
