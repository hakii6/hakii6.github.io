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

import Uma from './Uma';

import Constants from '../constants/Constants';
import CourseData from '../constants/CourseData.json';
import { Coefs } from '../constants/Coefs';

import { roundNumbers, round, checkMinValue } from '../../../functions/Common';

const courseData: Record<string, RaceTrack> = CourseData;
const constants: ConstantsData = Constants;

const { FRAMES_PER_SEC, FRAME_LENGTH, STATUS_TYPE } = constants;

export class Race implements RaceObject {
  raceParams: RaceParams;

  raceState: RaceState;

  raceFrameResult: RaceState[];

  umaObjArr: UmaObject[];

  constructor(raceOption: RaceOption, umaOptionArr: UmaSetting[]) {
    const { raceTrackId, raceId, groundCond, weather, season } = raceOption;
    let raceParams;
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

      let phaseLine;
      {
        phaseLine = [
          0,
          (dist / 6.0) as number,
          ((dist * 2.0) / 3) as number,
          ((dist * 5.0) / 6) as number,
          dist,
        ];
      }
      let sectionDist = dist / 24.0;

      let statusCheck = raceData.courseSetStatus.map(
        (value: number) => STATUS_TYPE[value - 1]
      );

      raceParams = {
        ...raceOption,
        phaseLine,
        sectionDist,
        statusCheck,
        name,
        dist,
        distType,
        basicDist: dist % 400 === 0,
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
    this.raceParams = { ...raceParams };

    // Uma
    Uma.raceParams = { ...this.raceParams };
    Uma.calPosDetails = calPosDetails.call(this);
    let umaState: UmaState;
    {
      const { phase, section, slopeValue } = Uma.calPosDetails(0);
      umaState = {
        phase,
        section,
        slopeValue,
        pos: 0,
        momentSpeed: 3,
        targetSpeed: 0,
        lanePos: 0,
        laneMomentSpeed: 0,
        laneTargetSpeed: 0,
        visibility: 20,

        momentAcc: 0,
        sp: -1,
        cond: {
          startdash: true,
          posKeep: true,
          tempt: false,
          spurt: false,
          tiring: false,
          goal: false,
        },
        skillEffect: {
          speed: 0,
          stamina: 0,
          power: 0,
          guts: 0,
          wisdom: 0,
          visibility: 0,
          sp: 0,
          startdash: 0,
          temptLast: 0,
          redTargetSpeed: 0,
          targetSpeed: 0,
          moveLaneSpeed: 0,
          momentAcc: 0,
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
      (umaOption: UmaSetting, index: number) => new Uma(umaOption, umaState)
    );

    this.raceState = {
      goalCount: 0,
      elapsedFrame: 0,
      sentouPos: 0,
    };
    this.raceFrameResult = [this.raceState];
  }

  orderUma() {
    this.raceState.goalCount = this.umaObjArr.reduce(
      (preVal: number, curVal: UmaObject) =>
        preVal + Number(curVal.umaState.cond.goal),
      0
    );
    this.umaObjArr.sort(
      (a: UmaObject, b: UmaObject) =>
        +a.umaState.cond.goal || a.umaState.pos - b.umaState.pos
    );
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

  return (pos: number) => {
    let slopeValue;
    {
      // Linear interpolation
      const t = (1000 * round(pos)) / dist;
      const i = Math.floor(t);
      slopeValue = slopes[i] + (slopes[i + 1] - slopes[i]) * (t - i) * 100.0;
    }
    return {
      phase: phaseLine.findIndex((value: number) => pos < value) - 1,
      section: Math.floor(pos / sectionDist) + 1,
      slopeValue,
    };
  };
}
