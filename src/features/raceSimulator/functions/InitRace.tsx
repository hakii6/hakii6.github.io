import { RaceOption } from '../types';

import Constants from '../constants/Constants';
import Coefs from '../constants/Coefs';
import CourseData from '../constants/CourseData.json';

const courseData = CourseData as any;
const constants = Constants as any;
const coefs = Coefs as any;

const { framesPerSec, frameLength, statusType } = constants;

const loadTrack = (raceOption: RaceOption) => {
  const { raceTrackId, raceId } = raceOption;
  const raceTrackData = courseData[raceTrackId as string];
  const raceData = raceTrackData.courses[raceId];
  const dist: number = raceData.distance;
  const phaseLine: number[] = [
    (dist / 6.0).round() as number,
    ((dist * 2.0) / 3).round() as number,
    ((dist * 5.0) / 6).round() as number,
  ];
  const sectionDist = (dist / 24.0).round();
  return {
    courseName: raceTrackData.name,
    raceName: raceData.name,
    dist,
    phaseLine,
    sectionDist,
    distType: String(raceData.distanceType),
    surface: String(raceData.surface),
    turn: String(raceData.turn),
    statusCheck: raceData.courseSetStatus,
    laneMax: raceData.laneMax,
    finishTimeMin: raceData.finishTimeMin,
    finishTimeMax: raceData.finishTimeMax,
    corners: raceData.corners,
    slopes: raceData.slopes,
  };
};

export const initRace = (raceOption: RaceOption) => {
  const raceParams = loadTrack(raceOption);
  const { groundCond } = raceOption;
  const { surface } = raceParams;
  const surfaceConstant = constants.surface[surface][groundCond];
  const surfaceCoef = coefs.surface[surface][groundCond];

  const baseV = (22.0 - raceParams.dist / 1000.0).round();
  return Object.assign(
    raceParams,
    { surfaceConstant, surfaceCoef, baseV },
    { framesPerSec, frameLength, statusType }
  );
};

export default initRace;
