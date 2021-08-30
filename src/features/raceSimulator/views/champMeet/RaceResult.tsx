import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice'

// import * as InitRaceFunctions from './InitRaceFunctions';
// import * as InitUmasFunctions from './InitUmasFunctions';
// import * as RaceFunctions from './RaceFunctions';

// const RaceResult = ({ count, resultAdd, umas, option }) => {
//   const [raceParams, setRaceParams] = useState(
//     InitRaceFunctions.initRace(option)
//   );
//   const [umasParams, setUmasParams] = useState(
//     InitUmasFunctions.initUmas(umas, raceParams)
//   );
//   // const simulateStart =
//   useEffect(() => {
//     // init uma ready
//     let umasState = [];
//     umasParams.forEach((umaParams, index) => {
//       const uma = {
//         umaId: umaParams.umaId,
//         index,
//         pos: 0,
//         momentV: 3,
//         sp: umaParams.spMax,
//         phase: 0,
//         section: 1,
//         moveState: 'startdash',
//         costState: 'normal',
//         otherCond: {
//           ifTempt: false,
//           temptLast: 0,
//           posKeepMode: 'normal',
//           posKeepCD: 0,
//           posKeepStart: 0,
//         },
//       };
//       umasState.push(uma);
//     });

//     const umaLimit = {
//       pos: raceParams.dist,
//       momentV: 30,
//     };

//     const umasResult = [];
//     // let maxPos = 0
//     const frames = [];
//     let umasOrder = [umaLimit];
//     umasOrder = umasOrder.concat(umasState);
//     // console.log(umasOrder)
//     // while (count < 100) {
//     while (umasOrder[1].pos < raceParams.sectionDist * 16) {
//       const frame = [];
//       const umasStateNew = [];

//       umasState.forEach((umaState, index) => {
//         let momentUma = {};
//         const preUma = { ...umaState };
//         const umaParams = umasParams[index];
//         // let momentRace = {}
//         const objParams = {
//           preUma,
//           momentUma,
//           umaParams,
//           raceParams,
//           umasOrder,
//         };

//         momentUma.index = index;
//         momentUma.pre = preUma;

//         momentUma.otherCond = { ...preUma.otherCond };
//         // let { pos, sp, momentV, phase, section, otherCond } = preUma
//         momentUma.moveState = RaceFunctions.checkMoveState(objParams);
//         momentUma.costState = RaceFunctions.checkCostState(objParams);

//         momentUma = RaceFunctions.moveProcess(objParams);
//         momentUma = RaceFunctions.moveResult(objParams);

//         frame.push(momentUma);
//         umasStateNew.push(momentUma.result);
//       });
//       // console.log(umasStateNew[0].pos, umasStateNew[1].pos,
//       // (umasState[0].pos - umasState[1].pos).round())
//       // console.log(umasStateNew[0].momentV, umasStateNew[1].momentV)
//       umasState = umasStateNew;
//       umasOrder = [umaLimit];
//       let flag;
//       umasState.forEach((uma, index) => {
//         flag = false;
//         for (const [index2, umaTmp] of umasOrder.entries()) {
//           if (uma.pos > umaTmp.pos) {
//             umasOrder.splice(index2, 0, umaTmp);
//             flag = true;
//             break;
//           }
//         }
//         if (!flag) {
//           umasOrder.push(uma);
//         }
//       });
//       // console.log(umasOrder)

//       frames.push(frame);
//     }

//     console.log(
//       umasState[0].pos,
//       umasState[1].pos,
//       (umasState[0].pos - umasState[1].pos).round()
//     );
//     resultAdd((umasState[0].pos - umasState[1].pos).round());

//     console.log(frames);
//     return frames;
//   }, [count]);
// };

// export default RaceResult;
