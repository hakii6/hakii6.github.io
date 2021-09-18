// types
import {
  UmaOption,
  Status,
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

import Uma from './Uma';

import Constants from '../constants/Constants';
import CourseData from '../constants/CourseData.json';
import { Coefs } from '../constants/Coefs';

import { roundNumbers, round, checkMinValue } from '../../../functions/Common';

const courseData: Record<string, RaceTrack> = CourseData;
const constants: ConstantsData = Constants;

const { framesPerSec, frameLength, statusType } = constants;

export class Race implements RaceObject {
  raceParams: RaceParams;

  raceState: RaceState;

  raceFrameResult: RaceState[];

  umaObjArr: UmaObject[];

  constructor(raceOption: RaceOption, umaOptionArr: UmaOption[]) {
    const { raceTrackId, raceId, groundCond, weather, season } = raceOption;
    var raceParams;
    {
      const raceTrackData = courseData[raceTrackId];
      const raceData = raceTrackData.courses[raceId as string];
      const {
        name,
        distance: dist,
        distanceType: distType,
        surface,
        turn,
        laneMax,
        finishTimeMin,
        finishTimeMax,
        corners,
        slopes,
      } = raceData;

      var phaseLine;
      {
        phaseLine = [
          0,
          (dist / 6.0) as number,
          ((dist * 2.0) / 3) as number,
          ((dist * 5.0) / 6) as number,
          dist,
        ];
      }
      var sectionDist = dist / 24.0;

      var statusCheck = raceData.courseSetStatus.map(
        (value: number) => statusType[value - 1]
      );

      raceParams = {
        ...raceOption,
        phaseLine,
        sectionDist,
        statusCheck,
        name,
        dist,
        distType,
        surface,
        turn,
        laneMax,
        finishTimeMin,
        finishTimeMax,
        corners,
        slopes,
        surfaceConstant: constants.surface[surface][groundCond],
        surfaceCoef: Coefs.surface[surface][groundCond],
        raceBaseSpeed: 22.0 - dist / 1000.0,
        distPosKeepCoef: 0.0008 * (dist - 1000) + 1.0,
      };
    }
    this.raceParams = raceParams;

    // Uma
    Uma.raceParams = this.raceParams;
    Uma.calPosDetails = calPosDetails.call(this);
    var umaState: UmaState;
    {
      const { phase, section, slopeType, slopeValue } = Uma.calPosDetails(0);
      umaState = {
        pos: 0,
        phase,
        section,
        slopeType,
        slopeValue,
        lanePos: 0,
        targetSpeed: 0,
        momentAcc: 0,
        speedNeeded: 0,
        momentSpeed: 3,
        sp: -1,
        cond: {
          startdash: true,
          posKeep: true,
          tempt: false,
          spurt: false,
          tiring: false,
          goal: false,
        },
        posKeepCond: {
          mode: 'normal' as UmaState['posKeepCond']['mode'],
          speedCoef: 1,
          cd: 0,
          start: 0,
        },
      };
    }

    this.umaObjArr = umaOptionArr.map(
      (umaOption: UmaOption, index: number) => new Uma(umaOption, umaState)
    );

    var raceState;
    {
      raceState = {
        goalCount: 0,
        elapsedFrame: 0,
        sentouPos: 0,
      };
    }
    this.raceState = raceState;
    this.raceFrameResult = [raceState];
  }

  orderUma() {
    var goalCount = 0;
    {
      this.umaObjArr.forEach((umaObj: UmaObject) => {
        if (umaObj.umaState.cond.goal === true) goalCount += 1;
      });
    }
    this.raceState.goalCount = goalCount;

    this.umaObjArr.sort((a: UmaObject, b: UmaObject) => {
      if (a.umaState.cond.goal) {
        return 1;
      }
      return a.umaState.pos - b.umaState.pos;
    });
  }

  progressRace(): void {
    this.umaObjArr.forEach((umaObject: UmaObject, index: number) => {
      umaObject.move(this.umaObjArr);
    });
    // this.saveFrameResult();
    this.orderUma();
  }
}

export default Race;

function calPosDetails(this: RaceObject) {
  const { phaseLine, sectionDist, dist, slopes } = this.raceParams;

  return function (pos: number) {
    var slopeValue;
    var slopeType = 'normal';
    {
      // Linear interpolation
      const t = (1000 * round(pos)) / dist;
      const i = Math.floor(t);
      slopeValue =
        round(slopes[i] + (slopes[i + 1] - slopes[i]) * (t - i)) * 100.0;
      if (slopeValue >= 1) {
        slopeType = 'ascent';
      } else if (slopeValue <= -1) {
        slopeType = 'descent';
      }
    }
    return {
      phase: phaseLine.findIndex((value: number) => pos < value) - 1,
      section: Math.floor(pos / sectionDist) + 1,
      slopeType,
      slopeValue,
    };
  };
}
