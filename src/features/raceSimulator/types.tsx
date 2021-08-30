export interface RaceOption {
  raceTrackId: string;
  raceId: string;
  groundCond: string;
  weather: string;
  season: string;
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
  randomNumbers?: any;
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
  statusCheck: number[];
  laneMax: string;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: string;
  slopes: string;
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
