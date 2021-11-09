import * as React from 'react';
import RaceTracks from '../data/RaceTracks.json';
import Races from '../data/Races.json';
import RaceDetails from '../data/RaceDetails.json';

const useRace = (): any => {
  const raceTracks: any = RaceTracks;
  const races: any = Races;

  const getRaceArray = React.useCallback((raceTrackId: any) => {
    if (races[raceTrackId]) {
      return races[raceTrackId];
    }
    throw new Error('RaceTrack not found!');
  }, []);

  return {
    raceTrackArray: raceTracks,
    getRaceArray,
  };
};

export default useRace;
