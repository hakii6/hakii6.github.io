import {
  Uma,
  RaceParams,
  Status,
  StatusType,
  RaceOption,
  ConstantsData,
} from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData: Record<string, any> = CourseData;
const constants: Record<string, any> = Constants;
const coefs: Record<string, any> = Coefs;

const { framesPerSec, frameLength, statusType } = constants;

const loadTrack = (raceOption: RaceOption) => {
  const { raceTrackId, raceId } = raceOption;
  if (raceTrackId in courseData) {
    const raceTrackData = courseData[raceTrackId];
    const raceData = raceTrackData.courses[raceId as string];
    const dist: number = raceData.distance;
    const phaseLine: number[] = [
      (dist / 6.0) as number,
      ((dist * 2.0) / 3) as number,
      ((dist * 5.0) / 6) as number,
    ];
    const sectionDist = dist / 24.0;
    const statusCheck = raceData.courseSetStatus.map(
      (value: number) => statusType[value - 1]
    );
    return {
      courseName: raceTrackData.name,
      raceName: raceData.name,
      dist,
      phaseLine,
      sectionDist,
      distType: String(raceData.distanceType),
      surface: String(raceData.surface),
      turn: String(raceData.turn),
      statusCheck,
      laneMax: raceData.laneMax,
      finishTimeMin: raceData.finishTimeMin,
      finishTimeMax: raceData.finishTimeMax,
      corners: raceData.corners,
      slopes: raceData.slopes,
    };
  }
  throw new Error('Race track not found');
};

export const initRace = (raceOption: RaceOption): RaceParams => {
  const raceParams = loadTrack(raceOption);
  const { groundCond } = raceOption;
  const { surface } = raceParams;
  const surfaceConstant = constants.surface[surface][groundCond];
  const surfaceCoef = coefs.surface[surface][groundCond];

  const baseV = 22.0 - raceParams.dist / 1000.0;
  return Object.assign(
    raceParams,
    { surfaceConstant, surfaceCoef, baseV },
    { framesPerSec, frameLength, statusType }
  );
};

export default initRace;
