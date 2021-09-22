// Objects
import { Uma } from './Uma';

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

// constants
import { skillPassiveDict } from '../constants/SkillPassiveDict';

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

export function skillCheck(this: UmaObject, skillId: string) {
  const skill = skillPassiveDict[skillId];
  const { actCond, effects } = skill;
  const { raceParams } = Uma;
  const { umaSetting, umaState } = this;
  for (const actCondArr of actCond as [string, string, unknown][][]) {
    for (const actCond of actCondArr) {
      const [attrType, op, value] = actCond;
      const attrValue = !(attrType in umaSetting)
        ? raceParams[attrType as keyof RaceParams]
        : umaSetting[attrType as keyof UmaSetting];
      if (checkPass(attrValue, op, value)) {
        for (const effect of effects as Record<string, string | number>[]) {
          umaState.skillEffect[effect.type] += effect.value as number;
        }
      }
    }
  }
  // if (checkPass(skill)) {
  return false;
}

export function checkPass<T>(attrValue: T, op: string, value: T) {
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
