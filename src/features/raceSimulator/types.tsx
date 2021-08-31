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
export interface JsonData {
  [index: string]: any;
}
export interface StrNumDict {
  [index: string]: number;
}
export interface StrDict {
  [index: string]: any;
}
export interface Uma {
  umaName: string;
  status: {
    speed: number;
    stamina: number;
    power: number;
    guts: number;
    wisdom: number;
  };
  usingStyle: string;
  fit: {
    surface: string;
    dist: string;
    style: string;
  };
  motivation: string;
}

export interface UmaState {
  umaName: string;
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
  temptCond: any;
  params: any;
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
  surfaceConstant: any;
  surfaceCoef: any;
  baseV: number;
}

export interface Status {
  speed: number;
  stamina: number;
  power: number;
  guts: number;
  wisdom: number;
}
