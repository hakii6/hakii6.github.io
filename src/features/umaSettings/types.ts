export interface RaceOption {
  raceTrackId: string;
  raceId: string;
  groundCond: string;
  weather: string;
  season: string;
}

export interface RaceDetails {
  raceTrackId: number;
  name: string;
  distance: number;
  distanceType: number;
  surface: number;
  turn: number;
  courseSetStatus: number[];
  laneMax: number;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: Record<string, number>[];
  slopes: number[];
}

export interface RaceTrack {
  name: string;
  courses: Record<string, RaceDetails>;
}

export interface ConstantsData {
  FRAMES_PER_SEC: number;
  STATUS_TYPE: StatusType[];
  FRAME_LENGTH: number;
  surface: {
    [index: string]: {
      [index: string]: Record<string, number>;
    };
  };
  spConsume: Record<string, number>;
}

export interface UmaSetting {
  name: string;
  status: Record<StatusType, number>;
  option: {
    style: string;
    fit: {
      surface: string;
      dist: string;
      style: string;
    };
    motivation: string;
  };
  skill: Record<string, string[]>;
}

export interface CoefType {
  motBonus: number;
  styleFitCoef: Record<string, number>;
  distFitCoef: Record<string, number>;
  surfaceFitCoef: Record<string, number>;
  styleCoef: {
    sp: number;
    v: Record<string, number>;
    a: Record<string, number>;
  };
}

export type StatusType = 'speed' | 'stamina' | 'power' | 'guts' | 'wisdom';

export type UmaObject = UmaMethods & UmaProps;

export interface UmaMethods {
  // method
  move: (umaObjArr: UmaObject[]) => void;
  getNextRandom: () => number;
}

export interface UmaProps {
  umaSetting: UmaSetting;
  umaParams: UmaParams;
  umaState: UmaState;
  umaFrameResult: UmaState[];
  checkCondStartArr: string[];
  checkCondEndArr: string[];
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
  temptSection: number;
  rate: Record<string, number>;
  floorDist: number;
  ceilDist: number;
}

export interface UmaState {
  phase: number;
  section: number;
  slopeValue: number;
  pos: number;
  momentSpeed: number;
  targetSpeed: number;
  lanePos: number;
  laneMomentSpeed: number;
  laneTargetSpeed: number;
  visibility: number;
  momentAcc: number;
  sp: number;
  skillEffect: Record<string, number>;
  posKeepCond: {
    mode: 'normal' | 'speedUp' | 'overtake' | 'paceUp' | 'paceDown';
    speedCoef: number;
    cd: number;
    start: number;
  };
  cond: Record<string, boolean>;
}

export type RaceObject = RaceMethods & RaceProps;

export interface RaceMethods {
  orderUma: () => void;
  progressRace: () => void;
}

export interface RaceProps {
  raceParams: RaceParams;
  raceState: RaceState;
  raceFrameResult: RaceState[];
}

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

export interface RaceState {
  goalCount: number;
  elapsedFrame: number;
  sentouPos: number;
}
