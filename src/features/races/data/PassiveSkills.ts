const passiveSkills = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

export default passiveSkills;
