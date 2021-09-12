import {
  UmaOption,
  Status,
  StatusType,
  RaceOption,
  ConstantsData,
  RaceTrack,
} from '../types';

import Uma, { UmaState, UmaClass } from './Uma';

import Constants from '../constants/Constants';
import CourseData from '../constants/CourseData.json';
import { Coefs } from '../constants/Coefs';

import { roundNumbers, round, checkMinValue } from '../../../functions/Common';

const courseData: Record<string, RaceTrack> = CourseData;
const constants: ConstantsData = Constants;

const { framesPerSec, frameLength, statusType } = constants;

const posKeepSpeedCoef = {
  normal: 1.0,
  speedUp: 1.04,
  overtake: 1.05,
  paceUp: 1.04,
  paceDown: 0.915,
};

const stylePosKeepCoef: Record<string, number[]> = {
  '1': [1.0, 1.0],
  '2': [3.0, 5.0],
  '3': [6.5, 7.0],
  '4': [7.5, 8.0],
};

export interface RaceParams {
  raceName: string;
  dist: number;
  phaseLine: number[];
  sectionDist: number;
  distType: string;
  surface: string;
  turn: string;
  statusCheck: StatusType[];
  laneMax: number;
  finishTimeMin: number;
  finishTimeMax: number;
  corners: Record<string, number>[];
  slopes: number[];
  surfaceConstant: Record<string, number>;
  surfaceCoef: Record<string, number>;
  baseSpeed: number;
}

interface RacePublicProperties {
  raceName: string;

  dist: number;

  distType: string;

  phaseLine: number[];

  sectionDist: number;

  surface: string;

  turn: string;

  statusCheck: StatusType[];

  laneMax: number;

  finishTimeMin: number;

  finishTimeMax: number;

  corners: Record<string, number>[];

  slopes: number[];

  surfaceConstant: Record<string, number>;

  surfaceCoef: Record<string, number>;

  baseSpeed: number;

  raceState: UmaState[];

  umaCount: number;

  raceResult: UmaState[][];
}

export class Race implements RacePublicProperties {
  private raceTrackId: string;

  private raceId: string;

  private groundCond: string;

  private weather: string;

  private season: string;

  raceName;

  dist;

  distType;

  phaseLine;

  sectionDist;

  surface;

  turn;

  statusCheck;

  laneMax;

  finishTimeMin;

  finishTimeMax;

  corners;

  slopes;

  surfaceConstant;

  surfaceCoef;

  baseSpeed;

  raceState: UmaState[];

  umaCount;

  raceResult: UmaState[][];

  umaList: UmaClass[];

  umaStateList: UmaState[];

  distPosKeepCoef: number;

  constructor(raceOption: RaceOption, umaOptionList: UmaOption[]) {
    // private
    const { raceTrackId, raceId, groundCond, weather, season } = raceOption;
    this.raceTrackId = raceTrackId;
    this.raceId = raceId;
    this.groundCond = groundCond;
    this.weather = weather;
    this.season = season;

    // public
    const raceTrackData = courseData[raceTrackId];
    const raceData = raceTrackData.courses[raceId as string];
    this.raceName = raceData.name;
    this.dist = raceData.distance;
    this.phaseLine = [
      0,
      (this.dist / 6.0) as number,
      ((this.dist * 2.0) / 3) as number,
      ((this.dist * 5.0) / 6) as number,
      this.dist,
    ];
    this.sectionDist = this.dist / 24.0;
    this.distType = String(raceData.distanceType);
    this.surface = String(raceData.surface);
    this.turn = String(raceData.turn);
    this.statusCheck = raceData.courseSetStatus.map(
      (value: number) => statusType[value - 1]
    );
    this.laneMax = raceData.laneMax;
    this.finishTimeMin = raceData.finishTimeMin;
    this.finishTimeMax = raceData.finishTimeMax;
    this.corners = raceData.corners;
    this.slopes = raceData.slopes;
    this.surfaceConstant = constants.surface[this.surface][this.groundCond];
    this.surfaceCoef = Coefs.surface[this.surface][this.groundCond];
    this.baseSpeed = 22.0 - this.dist / 1000.0;
    this.distPosKeepCoef = 0.0008 * (this.dist - 1000) + 1.0;

    // Uma
    Uma.setRaceParams(this.getRaceParams());
    this.umaList = umaOptionList.map(
      (umaOption: UmaOption) => new Uma(umaOption)
    );
    this.umaCount = this.umaList.length;
    this.raceResult = [];
    this.umaStateList = this.umaList.map(
      (umaClass: UmaClass, index: number) => {
        this.raceResult.push([]);
        return umaClass.setReady({
          // todo: random the lanePos and waku
          waku: index,
          ...this.getPosDetails(0),
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
          temptCond: {
            temptCount: 0,
            temptLast: 0,
          },
          posKeepCond: {
            mode: 'normal',
            speedCoef: 1,
            cd: 0,
            start: 0,
            rate:
              (umaClass.style === '1' ? 20 : 15) *
              Math.log10(0.1 * umaClass.status.wisdom),
            floorDist:
              stylePosKeepCoef[umaClass.style][0] * this.distPosKeepCoef,
            ceilDist:
              stylePosKeepCoef[umaClass.style][1] * this.distPosKeepCoef,
          },
        });
      }
    );

    this.raceState = [];
  }

  getRaceParams = (): RaceParams => ({
    raceName: this.raceName,
    dist: this.dist,
    distType: this.distType,
    phaseLine: this.phaseLine,
    sectionDist: this.sectionDist,
    surface: this.surface,
    turn: this.turn,
    statusCheck: this.statusCheck,
    laneMax: this.laneMax,
    finishTimeMin: this.finishTimeMin,
    finishTimeMax: this.finishTimeMax,
    corners: this.corners,
    slopes: this.slopes,
    surfaceConstant: this.surfaceConstant,
    surfaceCoef: this.surfaceCoef,
    baseSpeed: this.baseSpeed,
  });

  getPosDetails = (pos: number) => ({
    phase: this.phaseLine.findIndex((value: number) => pos < value) - 1,
    section: Math.floor(pos / this.sectionDist) + 1,
    ...(() => {
      // Linear interpolation
      const t = (1000 * round(pos)) / this.dist;
      const i = Math.floor(t);
      const slopeValue: number =
        round(
          this.slopes[i] + (this.slopes[i + 1] - this.slopes[i]) * (t - i)
        ) * 100.0;
      let slopeType = 'normal';
      if (slopeValue >= 1) {
        slopeType = 'ascent';
      } else if (slopeValue <= -1) {
        slopeType = 'descent';
      }
      return {
        slopeType,
        slopeValue,
      };
    })(),
  });

  setUmaOrder = () => {
    this.umaStateList.forEach((umaState: UmaState) => {
      umaState.order = 1;
    });
    const listLength = this.umaStateList.length;
    for (let i = 0; i < listLength; i += 1) {
      for (let j = 0; j < listLength; j += 1) {
        if (i !== j && this.umaStateList[i].pos >= this.umaStateList[j].pos) {
          this.umaStateList[j].order += 1;
        }
      }
    }
  };

  saveFrameResult = (umaState: UmaState, index: number): void => {
    this.raceResult[index].push(umaState);
  };

  progressRace = (): void => {
    this.umaStateList = this.umaList.map(
      (umaClass: UmaClass, index: number) => {
        let newUmaState;
        if (umaClass.pos >= this.dist) {
          newUmaState = this.umaStateList[index];
        } else {
          newUmaState = {
            ...umaClass.move(
              {
                ...this.umaStateList[index],
                ...this.getPosDetails(this.umaStateList[index].pos),
              },
              this.umaStateList
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
  };

  checkAllGoal = (): boolean =>
    this.umaStateList.every((umaState: UmaState) => umaState.pos >= this.dist);

  getRaceResult = (): UmaState[][] => this.raceResult;

  getUmaStateList = (): UmaState[] => this.umaStateList;

  getRaceState = (): UmaState[] => this.raceState;
}

export default Race;
