import {
  Uma,
  UmaState,
  RaceParams,
  Status,
  StatusType,
  RaceOption,
  ConstantsData,
  RaceTrack,
} from '../types';

import Constants from '../constants/Constants';
import CourseData from '../constants/CourseData.json';
import { Coefs } from '../constants/Coefs';

import { roundNumbers, round, checkMinValue } from './Common';

const courseData: Record<string, RaceTrack> = CourseData;
const constants: ConstantsData = Constants;

const { framesPerSec, frameLength, statusType } = constants;

export class Race {
  private raceTrackId: string;

  private raceId: string;

  private groundCond: string;

  private weather: string;

  private season: string;

  protected raceName: string;

  protected dist: number;

  protected distType: string;

  protected phaseLine: number[];

  protected sectionDist: number;

  protected surface: string;

  protected turn: string;

  protected statusCheck: StatusType[];

  protected laneMax: number;

  protected finishTimeMin: number;

  protected finishTimeMax: number;

  protected corners: Record<string, number>[];

  protected slopes: number[];

  protected surfaceConstant: Record<string, number>;

  protected surfaceCoef: Record<string, number>;

  protected baseV: number;

  protected raceState: UmaState[];

  protected umaCount: number;

  protected raceResult: UmaState[][];

  constructor(raceOption: RaceOption) {
    const { raceTrackId, raceId, groundCond, weather, season } = raceOption;
    this.raceTrackId = raceTrackId;
    this.raceId = raceId;
    this.groundCond = groundCond;
    this.weather = weather;
    this.season = season;

    const raceTrackData = courseData[raceTrackId];
    const raceData = raceTrackData.courses[raceId as string];

    this.raceName = raceData.name;
    this.dist = raceData.distance;
    this.phaseLine = [
      (this.dist / 6.0) as number,
      ((this.dist * 2.0) / 3) as number,
      ((this.dist * 5.0) / 6) as number,
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
    this.baseV = 22.0 - this.dist / 1000.0;

    this.raceState = [];
    this.raceResult = [];
    this.umaCount = 0;
  }

  getRaceParams = (): RaceParams => {
    return {
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
      baseV: this.baseV,
    };
  };

  setUmaReady = (umaState: UmaState): void => {
    this.umaCount += 1;
    this.raceState.push({ ...umaState });
  };

  progressRace = (umaStateList: UmaState[]): void => {
    const getPosDetails = (pos: number) => {
      const getSlopeDetails = () => {
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
      };

      const { slopeType, slopeValue } = getSlopeDetails();
      return {
        phase: this.phaseLine.findIndex((value: number) => pos >= value) + 1,
        section: Math.floor(pos / this.sectionDist) + 1,
        slopeType,
        slopeValue,
        // posKeeping: newMomentState.section <= 10,
      };
    };
    this.raceState = umaStateList
      .map((umaState: UmaState) => {
        return roundNumbers({
          ...umaState,
          ...getPosDetails(umaState.pos),
        });
      })
      .sort((umaA: UmaState, umaB: UmaState) => umaB.pos - umaA.pos);

    this.raceState.forEach((umaState: UmaState, index: number) => {
      this.raceState[index].order = index + 1;
    });
    this.raceResult.push(this.raceState);
  };

  getRaceResult = (): UmaState[][] => this.raceResult;

  getRaceState = (): UmaState[] => this.raceState;
}

export default Race;
