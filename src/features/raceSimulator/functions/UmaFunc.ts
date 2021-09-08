import { Uma, UmaClass } from './Uma';
import { ConstantsData } from '../types';
import { roundNumbers, round, checkMinValue } from './Common';

import Constants from '../constants/Constants';

const constants: ConstantsData = Constants;

const { framesPerSec, frameLength, statusType } = constants;

// export function switchCostState(this: UmaClass) {
//   const checkTemptStart = (): boolean => {
//     if (this.section !== this.temptSection || this.temptCond.ifTempt) {
//       return false;
//     }

//     this.temptCond = {
//       ...this.temptCond,
//       temptLast: 3 * framesPerSec,
//       temptCount: 1,
//       ifTempt: true,
//     };
//     return true;
//   };

// checkTemptEnd
// if (this.costState === 'tempt') {
//   this.temptCond.temptCount += 1;
//   if (
//     this.temptCond.temptCount < 12 * framesPerSec &&
//     (this.temptCond.temptCount < this.temptCond.temptLast ||
//       Math.random() * 100 >= 55)
//   ) {
//     this.temptCond.temptLast += 3 * framesPerSec;
//   }
// }

//   switch (this.costState) {
//     case 'normal':
//       if (checkTemptStart()) {
//         this.costState = 'tempt';
//       } else {
//         this.costState = this.moveState === 'spurting' ? 'spurting' : 'normal';
//       }
//       break;

//     // todo: can tempt over section 10?
//     // tempt: (umaState: UmaState) => true,
//     case 'spurting':
//       break;

//     // todo: not checking
//     case 'slacking':
//       break;
//     case 'descent':
//       break;
//     default:
//       break;
//   }
// }
// checkModeStart() {
//   // checkModeStart
//   if (mode === 'tempt' || (order === 1 && pos - order2Uma.pos < 4.5)) {
//     if (Math.random() * 100 < posKeepCond.rate) {
//       return ['speedUp', checkModeEnd['speedUp']];
//     }
//   } else if (order !== 1) {
//     if (Math.random() * 100 < posKeepCond.rate) {
//       return ['overtake', checkModeEnd['overtake']]
//     }
//   } else {
//     cd = 2 * framesPerSec;
//     return () => { cd--; return cd === 0 };
//   }
// }

// checkModeEnd = {
//   speedUp: () => this.order === 1 && this.pos - raceState[1].pos > 4.5,
//   overtake: () => this.order === 1 && this.pos - raceState[1].pos > 10,
//   tempoUp: () => raceState[0].pos - this.pos <= this.posKeepCond.ceilDist,
//   tempoDown: () => raceState[0].pos - this.pos >= this.posKeepCond.floorDist,
// }
// forcePosKeepEnd = () => this.pos - this.posKeepCond.start >= Uma.raceParams.sectionDist;

// setMoveState = () => {
//   if (this.checkMoveStateEnd()) {
//     this.
//   }
// }

// moveState startdash > phase0 > phase 1 > phase 2 > spurting
