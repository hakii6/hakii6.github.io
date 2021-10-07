// types
import {
  UmaSetting,
  StatusType,
  RaceOption,
  ConstantsData,
  RaceTrack,
} from '../types';
import {
  UmaObject,
  UmaMethods,
  UmaParams,
  UmaProps,
  UmaState,
  RaceObject,
  RaceParams,
  RaceState,
  RaceProps,
  RaceMethods,
} from './objectTypes';

import CourseData from '../constants/CourseData.json';

const courseData: Record<string, RaceTrack> = CourseData;

// [レーン距離] (0 ~ CourseLane) (tokyo 1.5)
// const laneDist = () => {
//   return
// };

const courseLane = courseData['10009'].courses['10901'].laneMax / 1000.0;
const horseLane = courseLane / 18;

const isOnVision = (thisUma, targetUma) => {
  const posDiff = targetUma.pos - thisUma.pos;
  if (Math.abs(posDiff) <= thisUma.vision) {
    const lanePosDiff = targetUma.lanePos - thisUma.lanePos;
    const laneVision = (11.5 * horseLane * posDiff / thisUma.vision + 2 * horseLane) / 2;
    return Math.abs(lanePosDiff) <= laneVision;
  }
  return false;
};

const laneType = (thisUma) => {
  const laneTypeArr = ['內', '中', '外', '大外'];
  return laneTypeArr[(Math.min(Math.ceil(thisUma.lanePos - 0.001) / 0.2), 3)];
};

const startLanePos = (thisUma) => (thisUma.postNumber - 1) * horseLane;

const blocking = (thisUma, targetUma, condType) => {
  const posDiff = targetUma.pos - thisUma.pos;
  const lanePosDiff = targetUma.lanePos - thisUma.lanePos;

  switch(condType) {
    case 'front':
      return (posDiff < 2.0 && posDiff > 0) && (Math.abs(lanePosDiff) <= (1.0 - 0.6 * posDiff / 2.0) * 0.75 * horseLane);
    case 'left':
      return lanePosDiff > 0 && lanePosDiff < 2 * horseLane && Math.abs(posDiff) < 1.05;
    case 'right':
      return lanePosDiff < 0 &&  lanePosDiff * (-1) < 2 * horseLane && Math.abs(posDiff) < 1.05;
  }
};


const blockedAll = () => blockedSide >= 1 && blockedFront >= 1;

const isNearUma = (thisUma, targetUma) => {
  const posDiff = targetUma.pos - thisUma.pos;
  const lanePosDiff = targetUma.lanePos - thisUma.lanePos;
  return Math.abs(lanePosDiff) < 1.5 * horseLane && Math.abs(posDiff) < 1.5;

};

const isBackUma = (thisUma, targetUma) => {
  const posDiff = targetUma.pos - thisUma.pos;
  const lanePosDiff = targetUma.lanePos - thisUma.lanePos;
  return Math.abs(lanePosDiff) < 1 * horseLane && Math.abs(posDiff) < 2.5;
};

const isOvertakeTarget = (thisUma, targetUma) => {
  const posDiff = targetUma.pos - thisUma.pos;
  const lanePosDiff = targetUma.lanePos - thisUma.lanePos;
  if (posDiff <= 20 && posDiff >= 1) {
    const momentSpeedDiff = thisUma.momentSpeed - targetUma.momentSpeed;
    if (momentSpeedDiff >= 0 && posDiff / momentSpeedDiff >= 15) {
      return thisUma.targetSpeed > (targetUma.blockedFront ? targetUma.momentSpeed : targetUma.targetSpeed);
    }
  }
  return false;
};
