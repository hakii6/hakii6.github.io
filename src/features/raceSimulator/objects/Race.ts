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

  raceState: UmaState[];

  umaCount;

  raceResult: UmaState[][];

  umaObjArr: UmaObject[];

  umaStateArr: UmaState[];

  constructor(raceOption: RaceOption, umaOptionArr: UmaOption[]) {
    // private
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

    this.umaStateArr = [];
    this.umaObjArr = umaOptionArr.map((umaOption: UmaOption, index: number) => {
      const umaState = {
        // todo: random the lanePos and waku
        waku: index,
        ...this.calPosDetails(0),
        pos: 0,
        order: index,
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
        },
        posKeepCond: {
          mode: 'normal' as UmaState['posKeepCond']['mode'],
          speedCoef: 1,
          cd: 0,
          start: 0,
        },
      };
      this.umaStateArr.push(umaState);
      return new Uma(umaOption, umaState);
    });
    this.umaCount = this.umaObjArr.length;
    this.raceResult = [];
    this.raceState = [];
  }

  calPosDetails(pos: number) {
    const { phaseLine, sectionDist, dist, slopes } = this.raceParams;
    var phase = phaseLine.findIndex((value: number) => pos < value) - 1;
    var section = Math.floor(pos / sectionDist) + 1;
    var slopeValue,
      slopeType = 'normal';
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
      phase,
      section,
      slopeType,
      slopeValue,
    };
  }

  setUmaOrder() {
    this.umaStateArr.forEach((umaState: UmaState) => {
      umaState.order = 1;
    });
    const listLength = this.umaStateArr.length;
    for (let i = 0; i < listLength; i += 1) {
      for (let j = 0; j < listLength; j += 1) {
        if (i !== j && this.umaStateArr[i].pos >= this.umaStateArr[j].pos) {
          this.umaStateArr[j].order += 1;
        }
      }
    }
  }

  saveFrameResult(umaState: UmaState, index: number): void {
    this.raceResult[index].push(umaState);
  }

  progressRace(): void {
    this.umaStateArr = this.umaObjArr.map(
      (umaClass: UmaObject, index: number) => {
        let newUmaState;
        if (umaClass.pos >= this.dist) {
          newUmaState = this.umaStateArr[index];
        } else {
          newUmaState = {
            ...umaClass.move(
              {
                ...this.umaStateArr[index],
                ...this.calPosDetails(this.umaStateArr[index].pos),
              },
              this.umaStateArr
            ),
          };
        }
        this.saveFrameResult(newUmaState, index);
        return {
          ...this.raceState[index],
          ...newUmaState,
        };
      }
    );
    // this.saveFrameResult();
    this.setUmaOrder();
  }

  checkAllGoal(): boolean {
    return this.umaStateArr.every(
      (umaState: UmaState) => umaState.pos >= this.raceParams.dist
    );
  }
}

export default Race;
