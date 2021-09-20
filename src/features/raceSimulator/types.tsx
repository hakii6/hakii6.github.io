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
  skill: {
    passive: Record<string, string>;
  };
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
