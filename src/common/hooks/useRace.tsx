import * as React from 'react';
import Races from '../data/Races.json';

const useRace = (): any => {
  const raceTrackArray = React.useMemo(
    () =>
      Races.map(raceTrack => ({
        id: raceTrack.id,
        name: raceTrack.name,
      })),
    [],
  );
  const getRaceArray = React.useCallback(raceTrackId => {
    const raceTrack = Races.find(raceTrack => raceTrack.id === raceTrackId);
    if (!raceTrack) {
      throw new Error('RaceTrack not found!');
    }
    const { courses } = raceTrack;
    return courses.map(race => ({ id: race.id, name: race.name }));
  }, []);

  return [raceTrackArray, getRaceArray];
};

export default useRace;
