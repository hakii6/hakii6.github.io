// export interface RaceClass {
// raceName: string;

// dist: number;

// distType: string;

// phaseLine: number[];

// sectionDist: number;

// surface: string;

// turn: string;

// statusCheck: StatusType[];

// laneMax: number;

// finishTimeMin: number;

// finishTimeMax: number;

// corners: Record<string, number>[];

// slopes: number[];

// surfaceConstant: Record<string, number>;

// surfaceCoef: Record<string, number>;

// baseV: number;
// }

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
  framesPerSec: number;
  statusType: StatusType[];
  frameLength: number;
  surface: {
    [index: string]: {
      [index: string]: Record<string, number>;
    };
  };
  spConsume: Record<string, number>;
}

export interface Status {
  speed: number;
  stamina: number;
  power: number;
  guts: number;
  wisdom: number;
}

export interface Uma {
  umaName: string;
  status: Status;
  usingStyle: string;
  fit: {
    surface: string;
    dist: string;
    style: string;
  };
  motivation: string;
}

export interface Acc {
  acc: Record<string, Record<string, number>>;
  dec: Record<string, number>;
}

export interface CoefType {
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
export interface UmaParams extends Uma {
  umaName: string;
  coefData?: CoefType;
  rawStatus?: Status;
  status: Status;
  skillActRate: number;
  temptRate: number;
  spCostCoef?: Record<string, number>;
  spMax: number;
  v?: Record<string, number>;
  a?: Acc;
  posKeepRate: number;
  usingStyle: string;
  temptSection: number;
}

export interface UmaFrame {
  pos: number;
  momentSpeed: number;
  sp: number;
}

// would not be use in next frame
export interface UmaFrameDetails {
  startSpeed: number;
  endSpeed: number;
  targetSpeed: number;
  avgSpeed: number;
  speedDiff: number;
  totalAcc: number;
  momentAcc: number;
  spCost: number;
}

// would be use at next frame
export interface UmaMomentState {
  moveState: string;
  costState: string;
  temptCond: {
    temptCount: number;
    temptLast: number;
    ifTempt: boolean;
  };
  posKeeping: boolean;
  phase: number;
  section: number;
  slopeType: string;
  slopeEffect: number;
  posKeepCoef: number;
  skillEffect: number;
}

export interface UmaState {
  frameIndex: number;
  umaIndex: number;
  order: number;

  momentFrame: UmaFrame;
  nextFrame: UmaFrame;

  frameDetails: UmaFrameDetails;
  momentState: UmaMomentState;

  umaParams: UmaParams;
  raceParams: RaceParams;
  randomNumbers?: number[];
}

export type StatusType = 'speed' | 'stamina' | 'power' | 'guts' | 'wisdom';

export interface RaceParams {
  raceName: string;
  dist: number;
  phaseLine: number[];
  sectionDist: number;
  distType: string;
  surface: string;
  turn: string;
  statusCheck: StatusType[];
  laneMax: number;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: Record<string, number>[];
  slopes: number[];
  surfaceConstant: Record<string, number>;
  surfaceCoef: Record<string, number>;
  baseV: number;
}

export interface RaceState {
  index: number;
  umaStateList: UmaState[];
  momentResult: Record<string, number>[];
  goalCount: number;
}
