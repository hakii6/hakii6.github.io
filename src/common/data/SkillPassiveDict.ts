export const skillPassiveDict: Record<string, Record<string, unknown>> = {
  200011: {
    id: '200011',
    name: '右回り◎',
    actCond: [[['turn', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200012: {
    id: '200012',
    name: '右回り○',
    actCond: [[['turn', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200013: {
    id: '200013',
    name: '右回り×',
    actCond: [[['turn', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200021: {
    id: '200021',
    name: '左回り◎',
    actCond: [[['turn', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200022: {
    id: '200022',
    name: '左回り○',
    actCond: [[['turn', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200023: {
    id: '200023',
    name: '左回り×',
    actCond: [[['turn', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200031: {
    id: '200031',
    name: '東京レース場◎',
    actCond: [[['raceTrackId', '==', 10006]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200032: {
    id: '200032',
    name: '東京レース場○',
    actCond: [[['raceTrackId', '==', 10006]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200033: {
    id: '200033',
    name: '東京レース場×',
    actCond: [[['raceTrackId', '==', 10006]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200041: {
    id: '200041',
    name: '中山レース場◎',
    actCond: [[['raceTrackId', '==', 10005]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200042: {
    id: '200042',
    name: '中山レース場○',
    actCond: [[['raceTrackId', '==', 10005]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200043: {
    id: '200043',
    name: '中山レース場×',
    actCond: [[['raceTrackId', '==', 10005]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200051: {
    id: '200051',
    name: '阪神レース場◎',
    actCond: [[['raceTrackId', '==', 10009]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200052: {
    id: '200052',
    name: '阪神レース場○',
    actCond: [[['raceTrackId', '==', 10009]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200053: {
    id: '200053',
    name: '阪神レース場×',
    actCond: [[['raceTrackId', '==', 10009]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200061: {
    id: '200061',
    name: '京都レース場◎',
    actCond: [[['raceTrackId', '==', 10008]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200062: {
    id: '200062',
    name: '京都レース場○',
    actCond: [[['raceTrackId', '==', 10008]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200063: {
    id: '200063',
    name: '京都レース場×',
    actCond: [[['raceTrackId', '==', 10008]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200071: {
    id: '200071',
    name: '中京レース場◎',
    actCond: [[['raceTrackId', '==', 10007]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200072: {
    id: '200072',
    name: '中京レース場○',
    actCond: [[['raceTrackId', '==', 10007]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200073: {
    id: '200073',
    name: '中京レース場×',
    actCond: [[['raceTrackId', '==', 10007]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200081: {
    id: '200081',
    name: '札幌レース場◎',
    actCond: [[['raceTrackId', '==', 10001]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200082: {
    id: '200082',
    name: '札幌レース場○',
    actCond: [[['raceTrackId', '==', 10001]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200083: {
    id: '200083',
    name: '札幌レース場×',
    actCond: [[['raceTrackId', '==', 10001]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200091: {
    id: '200091',
    name: '函館レース場◎',
    actCond: [[['raceTrackId', '==', 10002]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200092: {
    id: '200092',
    name: '函館レース場○',
    actCond: [[['raceTrackId', '==', 10002]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200093: {
    id: '200093',
    name: '函館レース場×',
    actCond: [[['raceTrackId', '==', 10002]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200101: {
    id: '200101',
    name: '福島レース場◎',
    actCond: [[['raceTrackId', '==', 10004]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200102: {
    id: '200102',
    name: '福島レース場○',
    actCond: [[['raceTrackId', '==', 10004]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200103: {
    id: '200103',
    name: '福島レース場×',
    actCond: [[['raceTrackId', '==', 10004]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200111: {
    id: '200111',
    name: '新潟レース場◎',
    actCond: [[['raceTrackId', '==', 10003]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200112: {
    id: '200112',
    name: '新潟レース場○',
    actCond: [[['raceTrackId', '==', 10003]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200113: {
    id: '200113',
    name: '新潟レース場×',
    actCond: [[['raceTrackId', '==', 10003]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200121: {
    id: '200121',
    name: '小倉レース場◎',
    actCond: [[['raceTrackId', '==', 10010]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200122: {
    id: '200122',
    name: '小倉レース場○',
    actCond: [[['raceTrackId', '==', 10010]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200123: {
    id: '200123',
    name: '小倉レース場×',
    actCond: [[['raceTrackId', '==', 10010]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200131: {
    id: '200131',
    name: '根幹距離◎',
    actCond: [[['basicDist', '==', true]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200132: {
    id: '200132',
    name: '根幹距離○',
    actCond: [[['basicDist', '==', true]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200133: {
    id: '200133',
    name: '根幹距離×',
    actCond: [[['basicDist', '==', true]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200141: {
    id: '200141',
    name: '非根幹距離◎',
    actCond: [[['basicDist', '==', false]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200142: {
    id: '200142',
    name: '非根幹距離○',
    actCond: [[['basicDist', '==', false]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200143: {
    id: '200143',
    name: '非根幹距離×',
    actCond: [[['basicDist', '==', false]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200151: {
    id: '200151',
    name: '良バ場◎',
    actCond: [[['groundCond', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200152: {
    id: '200152',
    name: '良バ場○',
    actCond: [[['groundCond', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200153: {
    id: '200153',
    name: '良バ場×',
    actCond: [[['groundCond', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200161: {
    id: '200161',
    name: '道悪◎',
    actCond: [
      [['groundCond', '==', 2]],
      [['groundCond', '==', 3]],
      [['groundCond', '==', 4]],
    ],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200162: {
    id: '200162',
    name: '道悪○',
    actCond: [
      [['groundCond', '==', 2]],
      [['groundCond', '==', 3]],
      [['groundCond', '==', 4]],
    ],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200163: {
    id: '200163',
    name: '道悪×',
    actCond: [
      [['groundCond', '==', 2]],
      [['groundCond', '==', 3]],
      [['groundCond', '==', 4]],
    ],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200171: {
    id: '200171',
    name: '春ウマ娘◎',
    actCond: [[['season', '==', 1]], [['season', '==', 5]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200172: {
    id: '200172',
    name: '春ウマ娘○',
    actCond: [[['season', '==', 1]], [['season', '==', 5]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200173: {
    id: '200173',
    name: '春ウマ娘×',
    actCond: [[['season', '==', 1]], [['season', '==', 5]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200181: {
    id: '200181',
    name: '夏ウマ娘◎',
    actCond: [[['season', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200182: {
    id: '200182',
    name: '夏ウマ娘○',
    actCond: [[['season', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200183: {
    id: '200183',
    name: '夏ウマ娘×',
    actCond: [[['season', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200191: {
    id: '200191',
    name: '秋ウマ娘◎',
    actCond: [[['season', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200192: {
    id: '200192',
    name: '秋ウマ娘○',
    actCond: [[['season', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200193: {
    id: '200193',
    name: '秋ウマ娘×',
    actCond: [[['season', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200201: {
    id: '200201',
    name: '冬ウマ娘◎',
    actCond: [[['season', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200202: {
    id: '200202',
    name: '冬ウマ娘○',
    actCond: [[['season', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200203: {
    id: '200203',
    name: '冬ウマ娘×',
    actCond: [[['season', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200211: {
    id: '200211',
    name: '晴れの日◎',
    actCond: [[['weather', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200212: {
    id: '200212',
    name: '晴れの日○',
    actCond: [[['weather', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200221: {
    id: '200221',
    name: '曇りの日◎',
    actCond: [[['weather', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200222: {
    id: '200222',
    name: '曇りの日○',
    actCond: [[['weather', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200231: {
    id: '200231',
    name: '雨の日◎',
    actCond: [[['weather', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200232: {
    id: '200232',
    name: '雨の日○',
    actCond: [[['weather', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200233: {
    id: '200233',
    name: '雨の日×',
    actCond: [[['weather', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200241: {
    id: '200241',
    name: '雪の日◎',
    actCond: [[['weather', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200242: {
    id: '200242',
    name: '雪の日○',
    actCond: [[['weather', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200251: {
    id: '200251',
    name: '内枠得意◎',
    actCond: [[['postNumber', '<=', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200252: {
    id: '200252',
    name: '内枠得意○',
    actCond: [[['postNumber', '<=', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200253: {
    id: '200253',
    name: '内枠苦手',
    actCond: [[['postNumber', '<=', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200261: {
    id: '200261',
    name: '外枠得意◎',
    actCond: [[['postNumber', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200262: {
    id: '200262',
    name: '外枠得意○',
    actCond: [[['postNumber', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200263: {
    id: '200263',
    name: '外枠苦手',
    actCond: [[['postNumber', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200271: {
    id: '200271',
    name: 'おひとり様◎',
    actCond: [[['styleCountSame', '<=', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200272: {
    id: '200272',
    name: 'おひとり様○',
    actCond: [[['styleCountSame', '<=', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200281: {
    id: '200281',
    name: '対抗意識◎',
    actCond: [[['styleCountSame', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200282: {
    id: '200282',
    name: '対抗意識○',
    actCond: [[['styleCountSame', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200283: {
    id: '200283',
    name: '引っ込み思案',
    actCond: [[['styleCountSame', '>=', 6]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'power',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200291: {
    id: '200291',
    name: '徹底マーク◎',
    actCond: [[['styleEqualPopularityOne', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200292: {
    id: '200292',
    name: '徹底マーク○',
    actCond: [[['styleEqualPopularityOne', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'guts',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200301: {
    id: '200301',
    name: '伏兵◎',
    actCond: [[['popularity', '>=', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200302: {
    id: '200302',
    name: '伏兵○',
    actCond: [[['popularity', '>=', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200311: {
    id: '200311',
    name: 'GⅠ苦手',
    actCond: [[['grade', '==', 100]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200321: {
    id: '200321',
    name: '小心者',
    actCond: [[['popularity', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200951: {
    id: '200951',
    name: '大井レース場◎',
    actCond: [[['raceTrackId', '==', 10101]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200952: {
    id: '200952',
    name: '大井レース場○',
    actCond: [[['raceTrackId', '==', 10101]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  200953: {
    id: '200953',
    name: '大井レース場×',
    actCond: [[['raceTrackId', '==', 10101]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'stamina',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201521: {
    id: '201521',
    name: '逃げのコツ◎',
    actCond: [[['style', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201522: {
    id: '201522',
    name: '逃げのコツ○',
    actCond: [[['style', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201531: {
    id: '201531',
    name: '先行のコツ◎',
    actCond: [[['style', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201532: {
    id: '201532',
    name: '先行のコツ○',
    actCond: [[['style', '==', 2]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201541: {
    id: '201541',
    name: '差しのコツ◎',
    actCond: [[['style', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201542: {
    id: '201542',
    name: '差しのコツ○',
    actCond: [[['style', '==', 3]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201551: {
    id: '201551',
    name: '追込のコツ◎',
    actCond: [[['style', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201552: {
    id: '201552',
    name: '追込のコツ○',
    actCond: [[['style', '==', 4]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'wisdom',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'visibility',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201561: {
    id: '201561',
    name: 'スーパーラッキーセブン',
    actCond: [
      [
        ['randomLot', '==', 50],
        ['postNumber', '==', 7],
      ],
    ],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'stamina',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'power',
        value: 600000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201562: {
    id: '201562',
    name: 'ラッキーセブン',
    actCond: [
      [
        ['randomLot', '==', 50],
        ['postNumber', '==', 7],
      ],
    ],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'stamina',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: 'power',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201631: {
    id: '201631',
    name: 'シンパシー',
    actCond: [[['sameSkillHorseCount', '>=', 5]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  201641: {
    id: '201641',
    name: '一匹狼',
    actCond: [[['sameSkillHorseCount', '==', 1]]],
    duration: -1,
    cd: 0,
    effects: [
      {
        type: 'speed',
        value: 400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
};

export default skillPassiveDict;
