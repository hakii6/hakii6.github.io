// types
import { UmaSetting, StatusType, ConstantsData, RaceTrack } from '../types';
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

// blue SkillDataGeneral.filter((skill, index) => skill.duration === 0)
// green SkillDataGeneral.filter((skill, index) => skill.duration === -1)

// const SkillCheckInRace = {

// };

// const SkillCheckBeforeRace = {
//   running_style: ,
//   ground_type: ,
//   is_basis_distance: ,
//   distance_type: ,
//   track_id: ,
// };

// // [id1, id2, id3]

// const skillNotCheckingNow = []

// function skillCheckBeforeRace(this: RaceObject, umaOption: UmaSetting, skill) {

// }

function skillCheck(this: UmaObject, skill: [string, string, unknown]) {
  const [attrName, op, value] = skill;
  return false;
  // if (attrName) {}
  //   return;
}

function checkPass(attrValue: number, op: string, value: number) {
  switch (op) {
    case '>=':
      return attrValue >= value;
    case '<=':
      return attrValue <= value;
    case '==':
      return attrValue === value;
    case '>':
      return attrValue > value;
    case '<':
      return attrValue < value;
    case '!=':
      return attrValue !== value;
    default:
      return true;
  }
}

export default skillCheck;
