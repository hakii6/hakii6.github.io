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

const ignoredSkills = [
  'postNumber',
  'styleCountSame',
  'styleEqualPopularityOne',
  'grade',
  'popularity',
  'randomLot',
  'sameSkillHorseCount',
];

function checkCondGroup(this: UmaObject, actCondGroup: any) {
  const { raceParams } = Uma;
  const {
    umaSetting: { option },
    umaState,
  } = this;

  for (const actCond of actCondGroup) {
    const [attrType, op, value] = actCond;

    if (ignoredSkills.includes(attrType)) {
      continue;
    }
    let attrValue;
    if (attrType in option) {
      attrValue = option[attrType as keyof UmaSetting['option']];
    } else if (attrType in raceParams) {
      attrValue = raceParams[attrType as keyof RaceParams];
    } else {
      continue;
    }
    if (!checkPass(attrValue, op, value)) {
      return false;
    }
  }
  return true;
}

export function checkPassiveSkill(this: UmaObject, skillId: string) {
  const skill = skillPassiveDict[skillId];
  const {
    umaSetting: { option },
    umaState,
  } = this;
  const { actCond, effects } = skill;
  for (const actCondGroup of actCond as [string, string, unknown][][]) {
    if (checkCondGroup.call(this, actCondGroup)) {
      for (const effect of effects as Record<string, string | number>[]) {
        umaState.skillEffect[effect.type] += effect.value as number;
        return true;
      }
    }
  }
  return false;
}

const checkPass = <T>(attrValue: T, op: string, value: T) => {
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
};

export default checkPassiveSkill;
