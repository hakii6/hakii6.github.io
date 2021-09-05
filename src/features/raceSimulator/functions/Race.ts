import {
  Uma,
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

  protected raceState: {
    umaName: string;
    pos: number;
    momentSpeed: number;
  }[];

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
  }

  getRaceParams = () => {
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

  setUmaReady = (umaName: string) => {
    this.raceState.push({
      umaName,
      pos: 0,
      momentSpeed: 3,
    });
  };
}

export default Race;
