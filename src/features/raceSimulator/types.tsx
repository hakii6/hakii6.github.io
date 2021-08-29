export interface RaceOption {
  raceTrackId: string,
    raceId: string,
    groundCond: string,
    weather: string,
    season: string,
}

export interface Uma {
  umaName: string,
    status: {
      speed: number,
      stamina: number,
      power: number,
      guts: number,
      wisdom: number,
    },
    usingStyle: string,
    fit: {
      surface: string,
      dist: string,
      style: string,
    },
    motivation: string,
}

export type StatusType= 'speed' | 'stamina' | 'power' | 'guts' | 'wisdom'
