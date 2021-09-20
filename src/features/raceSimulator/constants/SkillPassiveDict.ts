const skillPassiveDict: Record<string, unknown> = {
  '20001': {
    id: '20001',
    actCond: [[['turn', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200011',
        name: '右回り◎',
        actCond: [[['turn', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200012',
        name: '右回り○',
        actCond: [[['turn', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200013',
        name: '右回り×',
        actCond: [[['turn', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20002': {
    id: '20002',
    actCond: [[['turn', '==', 2]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200021',
        name: '左回り◎',
        actCond: [[['turn', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200022',
        name: '左回り○',
        actCond: [[['turn', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200023',
        name: '左回り×',
        actCond: [[['turn', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20003': {
    id: '20003',
    actCond: [[['raceTrackId', '==', 10006]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200031',
        name: '東京レース場◎',
        actCond: [[['raceTrackId', '==', 10006]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200032',
        name: '東京レース場○',
        actCond: [[['raceTrackId', '==', 10006]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200033',
        name: '東京レース場×',
        actCond: [[['raceTrackId', '==', 10006]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20004': {
    id: '20004',
    actCond: [[['raceTrackId', '==', 10005]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200041',
        name: '中山レース場◎',
        actCond: [[['raceTrackId', '==', 10005]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200042',
        name: '中山レース場○',
        actCond: [[['raceTrackId', '==', 10005]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200043',
        name: '中山レース場×',
        actCond: [[['raceTrackId', '==', 10005]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20005': {
    id: '20005',
    actCond: [[['raceTrackId', '==', 10009]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200051',
        name: '阪神レース場◎',
        actCond: [[['raceTrackId', '==', 10009]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200052',
        name: '阪神レース場○',
        actCond: [[['raceTrackId', '==', 10009]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200053',
        name: '阪神レース場×',
        actCond: [[['raceTrackId', '==', 10009]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20006': {
    id: '20006',
    actCond: [[['raceTrackId', '==', 10008]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200061',
        name: '京都レース場◎',
        actCond: [[['raceTrackId', '==', 10008]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200062',
        name: '京都レース場○',
        actCond: [[['raceTrackId', '==', 10008]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200063',
        name: '京都レース場×',
        actCond: [[['raceTrackId', '==', 10008]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20007': {
    id: '20007',
    actCond: [[['raceTrackId', '==', 10007]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200071',
        name: '中京レース場◎',
        actCond: [[['raceTrackId', '==', 10007]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200072',
        name: '中京レース場○',
        actCond: [[['raceTrackId', '==', 10007]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200073',
        name: '中京レース場×',
        actCond: [[['raceTrackId', '==', 10007]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20008': {
    id: '20008',
    actCond: [[['raceTrackId', '==', 10001]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200081',
        name: '札幌レース場◎',
        actCond: [[['raceTrackId', '==', 10001]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200082',
        name: '札幌レース場○',
        actCond: [[['raceTrackId', '==', 10001]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200083',
        name: '札幌レース場×',
        actCond: [[['raceTrackId', '==', 10001]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20009': {
    id: '20009',
    actCond: [[['raceTrackId', '==', 10002]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200091',
        name: '函館レース場◎',
        actCond: [[['raceTrackId', '==', 10002]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200092',
        name: '函館レース場○',
        actCond: [[['raceTrackId', '==', 10002]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200093',
        name: '函館レース場×',
        actCond: [[['raceTrackId', '==', 10002]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20010': {
    id: '20010',
    actCond: [[['raceTrackId', '==', 10004]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200101',
        name: '福島レース場◎',
        actCond: [[['raceTrackId', '==', 10004]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200102',
        name: '福島レース場○',
        actCond: [[['raceTrackId', '==', 10004]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200103',
        name: '福島レース場×',
        actCond: [[['raceTrackId', '==', 10004]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20011': {
    id: '20011',
    actCond: [[['raceTrackId', '==', 10003]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200111',
        name: '新潟レース場◎',
        actCond: [[['raceTrackId', '==', 10003]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200112',
        name: '新潟レース場○',
        actCond: [[['raceTrackId', '==', 10003]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200113',
        name: '新潟レース場×',
        actCond: [[['raceTrackId', '==', 10003]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20012': {
    id: '20012',
    actCond: [[['raceTrackId', '==', 10010]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200121',
        name: '小倉レース場◎',
        actCond: [[['raceTrackId', '==', 10010]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200122',
        name: '小倉レース場○',
        actCond: [[['raceTrackId', '==', 10010]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200123',
        name: '小倉レース場×',
        actCond: [[['raceTrackId', '==', 10010]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20013': {
    id: '20013',
    actCond: [[['basicDist', '==', true]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200131',
        name: '根幹距離◎',
        actCond: [[['basicDist', '==', true]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200132',
        name: '根幹距離○',
        actCond: [[['basicDist', '==', true]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200133',
        name: '根幹距離×',
        actCond: [[['basicDist', '==', true]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20014': {
    id: '20014',
    actCond: [[['basicDist', '==', false]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200141',
        name: '非根幹距離◎',
        actCond: [[['basicDist', '==', false]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200142',
        name: '非根幹距離○',
        actCond: [[['basicDist', '==', false]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200143',
        name: '非根幹距離×',
        actCond: [[['basicDist', '==', false]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20015': {
    id: '20015',
    actCond: [[['groundCond', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200151',
        name: '良バ場◎',
        actCond: [[['groundCond', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200152',
        name: '良バ場○',
        actCond: [[['groundCond', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200153',
        name: '良バ場×',
        actCond: [[['groundCond', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20016': {
    id: '20016',
    actCond: [
      [['groundCond', '==', 2]],
      [['groundCond', '==', 3]],
      [['groundCond', '==', 4]],
    ],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
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
            type: '3',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
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
            type: '3',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
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
            type: '3',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20017': {
    id: '20017',
    actCond: [[['season', '==', 1]], [['season', '==', 5]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200171',
        name: '春ウマ娘◎',
        actCond: [[['season', '==', 1]], [['season', '==', 5]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200172',
        name: '春ウマ娘○',
        actCond: [[['season', '==', 1]], [['season', '==', 5]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200173',
        name: '春ウマ娘×',
        actCond: [[['season', '==', 1]], [['season', '==', 5]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20018': {
    id: '20018',
    actCond: [[['season', '==', 2]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200181',
        name: '夏ウマ娘◎',
        actCond: [[['season', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200182',
        name: '夏ウマ娘○',
        actCond: [[['season', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200183',
        name: '夏ウマ娘×',
        actCond: [[['season', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20019': {
    id: '20019',
    actCond: [[['season', '==', 3]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200191',
        name: '秋ウマ娘◎',
        actCond: [[['season', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200192',
        name: '秋ウマ娘○',
        actCond: [[['season', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200193',
        name: '秋ウマ娘×',
        actCond: [[['season', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20020': {
    id: '20020',
    actCond: [[['season', '==', 4]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200201',
        name: '冬ウマ娘◎',
        actCond: [[['season', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200202',
        name: '冬ウマ娘○',
        actCond: [[['season', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200203',
        name: '冬ウマ娘×',
        actCond: [[['season', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20021': {
    id: '20021',
    actCond: [[['weather', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200211',
        name: '晴れの日◎',
        actCond: [[['weather', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200212',
        name: '晴れの日○',
        actCond: [[['weather', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20022': {
    id: '20022',
    actCond: [[['weather', '==', 2]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200221',
        name: '曇りの日◎',
        actCond: [[['weather', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200222',
        name: '曇りの日○',
        actCond: [[['weather', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20023': {
    id: '20023',
    actCond: [[['weather', '==', 3]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200231',
        name: '雨の日◎',
        actCond: [[['weather', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200232',
        name: '雨の日○',
        actCond: [[['weather', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200233',
        name: '雨の日×',
        actCond: [[['weather', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20024': {
    id: '20024',
    actCond: [[['weather', '==', 4]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200241',
        name: '雪の日◎',
        actCond: [[['weather', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200242',
        name: '雪の日○',
        actCond: [[['weather', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20025': {
    id: '20025',
    actCond: [[['postNumber', '<=', 3]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200251',
        name: '内枠得意◎',
        actCond: [[['postNumber', '<=', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200252',
        name: '内枠得意○',
        actCond: [[['postNumber', '<=', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200253',
        name: '内枠苦手',
        actCond: [[['postNumber', '<=', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20026': {
    id: '20026',
    actCond: [[['postNumber', '>=', 6]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200261',
        name: '外枠得意◎',
        actCond: [[['postNumber', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200262',
        name: '外枠得意○',
        actCond: [[['postNumber', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200263',
        name: '外枠苦手',
        actCond: [[['postNumber', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20027': {
    id: '20027',
    actCond: [[['styleCountSame', '<=', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200271',
        name: 'おひとり様◎',
        actCond: [[['styleCountSame', '<=', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200272',
        name: 'おひとり様○',
        actCond: [[['styleCountSame', '<=', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20028': {
    id: '20028',
    actCond: [[['styleCountSame', '>=', 6]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200281',
        name: '対抗意識◎',
        actCond: [[['styleCountSame', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200282',
        name: '対抗意識○',
        actCond: [[['styleCountSame', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200283',
        name: '引っ込み思案',
        actCond: [[['styleCountSame', '>=', 6]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '3',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20029': {
    id: '20029',
    actCond: [[['styleEqualPopularityOne', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200291',
        name: '徹底マーク◎',
        actCond: [[['styleEqualPopularityOne', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200292',
        name: '徹底マーク○',
        actCond: [[['styleEqualPopularityOne', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '4',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20030': {
    id: '20030',
    actCond: [[['popularity', '>=', 4]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200301',
        name: '伏兵◎',
        actCond: [[['popularity', '>=', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200302',
        name: '伏兵○',
        actCond: [[['popularity', '>=', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20031': {
    id: '20031',
    actCond: [[['grade', '==', 100]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200311',
        name: 'GⅠ苦手',
        actCond: [[['grade', '==', 100]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20032': {
    id: '20032',
    actCond: [[['popularity', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200321',
        name: '小心者',
        actCond: [[['popularity', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20095': {
    id: '20095',
    actCond: [[['raceTrackId', '==', 10101]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '200951',
        name: '大井レース場◎',
        actCond: [[['raceTrackId', '==', 10101]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '200952',
        name: '大井レース場○',
        actCond: [[['raceTrackId', '==', 10101]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '3': {
        id: '200953',
        name: '大井レース場×',
        actCond: [[['raceTrackId', '==', 10101]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '2',
            value: -400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20152': {
    id: '20152',
    actCond: [[['style', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201521',
        name: '逃げのコツ◎',
        actCond: [[['style', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 100000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '201522',
        name: '逃げのコツ○',
        actCond: [[['style', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 50000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20153': {
    id: '20153',
    actCond: [[['style', '==', 2]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201531',
        name: '先行のコツ◎',
        actCond: [[['style', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 100000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '201532',
        name: '先行のコツ○',
        actCond: [[['style', '==', 2]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 50000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20154': {
    id: '20154',
    actCond: [[['style', '==', 3]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201541',
        name: '差しのコツ◎',
        actCond: [[['style', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 100000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '201542',
        name: '差しのコツ○',
        actCond: [[['style', '==', 3]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 50000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20155': {
    id: '20155',
    actCond: [[['style', '==', 4]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201551',
        name: '追込のコツ◎',
        actCond: [[['style', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 100000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
        id: '201552',
        name: '追込のコツ○',
        actCond: [[['style', '==', 4]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '5',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '8',
            value: 50000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20156': {
    id: '20156',
    actCond: [
      [
        ['randomLot', '==', 50],
        ['postNumber', '==', 7],
      ],
    ],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
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
            type: '1',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '2',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '3',
            value: 600000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
      '2': {
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
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '2',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
          {
            type: '3',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20163': {
    id: '20163',
    actCond: [[['sameSkillHorseCount', '>=', 5]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201631',
        name: 'シンパシー',
        actCond: [[['sameSkillHorseCount', '>=', 5]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
  '20164': {
    id: '20164',
    actCond: [[['sameSkillHorseCount', '==', 1]]],
    cd: 0,
    duration: -1,
    rarity: {
      '1': {
        id: '201641',
        name: '一匹狼',
        actCond: [[['sameSkillHorseCount', '==', 1]]],
        duration: -1,
        cd: 0,
        effects: [
          {
            type: '1',
            value: 400000,
            targetType: '1',
            targetValue: 0,
          },
        ],
      },
    },
  },
};
export default skillPassiveDict;
