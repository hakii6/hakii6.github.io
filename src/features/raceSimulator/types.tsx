export interface RaceOption {
  raceTrackId: string;
  raceId: string;
  groundCond: string;
  weather: string;
  season: string;
}
export interface FunctionsGroup {
  [index: string]: (arg1: UmaState) => void;
}
export interface RaceFunctions {
  momentStateFunctions: FunctionsGroup;
  nextStateFunctions: FunctionsGroup;
}

export interface StrDict {
  [index: string]: StrDict | string | number;
}
export interface JsonData {
  [index: string]: any;
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
  corners: StrNumDict[];
}
export interface RaceTrack {
  name: string;
  courses: RaceDetails;
}
export interface RaceTrackJson {
  [index: string]: any;
}
export type StrNumDict = Record<string, number>;

export interface ConstantsData {
  framesPerSec: number;
  statusType: StatusType[];
  frameLength: number;
  surface: {
    [index: string]: {
      [index: string]: StrNumDict;
    };
  };
  spConsume: StrNumDict;
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
  acc: {
    [index: string]: {
      [index: string]: number;
    };
  };
  dec: {
    [index: string]: number;
  };
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
  spCostCoef?: StrNumDict;
  spMax: number;
  v?: StrNumDict;
  a?: Acc;
  posKeepRate: number;
  usingStyle: string;
  temptSection: number;
}

export interface UmaState {
  index: number;
  pos: number;
  phase: number;
  section: number;
  momentSpeed: number;
  targetSpeed: number;
  speedDiff: number;
  momentAcc: number;
  avgSpeed: number;
  unusedSp: number;
  spCost: number;
  moveState: string;
  costState: string;
  nextSpeed: number;
  nextPos: number;
  nextUnusedSp: number;
  slopeType: string;
  slopeEffect: number;
  temptCond: {
    temptCount: number;
    temptLast: number;
    ifTempt: boolean;
  };
  posKeeping: boolean;
  umaParams: UmaParams;
  raceParams: RaceParams;
  randomNumbers?: number[];
}

export type StatusType = 'speed' | 'stamina' | 'power' | 'guts' | 'wisdom';

export interface RaceParams {
  courseName: string;
  raceName: string;
  dist: number;
  phaseLine: number[];
  sectionDist: number;
  distType: string;
  surface: string;
  turn: string;
  statusCheck: StatusType[];
  laneMax: string;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: string;
  slopes: number[];
  surfaceConstant: StrNumDict;
  surfaceCoef: StrNumDict;
  baseV: number;
}
