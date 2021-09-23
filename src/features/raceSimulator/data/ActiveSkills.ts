const activeSkills = [
  {
    id: '200331',
    name: '弧線のプロフェッサー',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200332',
    name: 'コーナー巧者○',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200333',
    name: 'コーナー巧者×',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '21',
        value: -2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200341',
    name: '曲線のソムリエ',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200342',
    name: 'コーナー加速○',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200343',
    name: 'コーナー加速×',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: -2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200361',
    name: 'ハヤテ一文字',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 9000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200362',
    name: '直線巧者',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 9000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200371',
    name: '一陣の風',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200372',
    name: '直線加速',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200411',
    name: 'あきらめ癖',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isLastspurt', '==', true],
        ['straightRandom', '==', 1],
        ['isCorner', '==', false],
        ['distDiffRate', '>=', 75],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '21',
        value: -2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200421',
    name: '手抜き癖',
    actCond: [
      [
        ['remainDist', '==', 200],
        ['order', '==', 1],
        ['bashinDiffBehind', '>=', 1],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '21',
        value: -2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200451',
    name: '注目の踊り子',
    actCond: [[['phaseRandom', '==', 0]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200452',
    name: 'ポジションセンス',
    actCond: [[['phaseRandom', '==', 0]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200461',
    name: 'アガッてきた！',
    actCond: [
      [
        ['phase', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200462',
    name: 'ペースアップ',
    actCond: [
      [
        ['phase', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 18000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200491',
    name: 'ノンストップガール',
    actCond: [
      [
        ['blockedFrontContinuetime', '>=', 1],
        ['isLastspurt', '==', true],
        ['hpPer', '>=', 1],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200492',
    name: '垂れウマ回避',
    actCond: [
      [
        ['blockedFrontContinuetime', '>=', 1],
        ['isLastspurt', '==', true],
        ['hpPer', '>=', 1],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '28',
        value: 50,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200501',
    name: 'レーンの魔術師',
    actCond: [[['phaseRandom', '==', 2]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200502',
    name: '臨機応変',
    actCond: [[['phaseRandom', '==', 2]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200511',
    name: '全身全霊',
    actCond: [
      [
        ['isLastspurt', '==', true],
        ['phaseRandom', '==', 3],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200512',
    name: '末脚',
    actCond: [
      [
        ['isLastspurt', '==', true],
        ['phaseRandom', '==', 3],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200531',
    name: '先手必勝',
    actCond: [
      [
        ['style', '==', 1],
        ['phase', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200532',
    name: '先駆け',
    actCond: [
      [
        ['style', '==', 1],
        ['phase', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200541',
    name: '脱出術',
    actCond: [
      [
        ['style', '==', 1],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200542',
    name: '急ぎ足',
    actCond: [
      [
        ['style', '==', 1],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200551',
    name: '逃亡者',
    actCond: [
      [
        ['style', '==', 1],
        ['isFinalcornerRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200552',
    name: '押し切り準備',
    actCond: [
      [
        ['style', '==', 1],
        ['isFinalcornerRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200581',
    name: 'スピードスター',
    actCond: [
      [
        ['style', '==', 2],
        ['isFinalcornerRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200582',
    name: '抜け出し準備',
    actCond: [
      [
        ['style', '==', 2],
        ['isFinalcornerRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200591',
    name: '迅速果断',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200592',
    name: '位置取り押し上げ',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200601',
    name: '乗り換え上手',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200602',
    name: '差し切り体勢',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200611',
    name: '昇り龍',
    actCond: [
      [
        ['style', '==', 3],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['isBehindIn', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200612',
    name: '外差し準備',
    actCond: [
      [
        ['style', '==', 3],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['isBehindIn', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200631',
    name: '疾風怒濤',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['distDiffRate', '>=', 75],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200632',
    name: '仕掛け抜群',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['distDiffRate', '>=', 75],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200641',
    name: '迫る影',
    actCond: [
      [
        ['style', '==', 4],
        ['isLastspurt', '==', true],
        ['isCorner', '==', false],
      ],
    ],
    duration: 9000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200642',
    name: '直線一気',
    actCond: [
      [
        ['style', '==', 4],
        ['isLastspurt', '==', true],
        ['isCorner', '==', false],
      ],
    ],
    duration: 9000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200651',
    name: 'スプリントターボ',
    actCond: [
      [
        ['distType', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200652',
    name: 'スプリントギア',
    actCond: [
      [
        ['distType', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200671',
    name: '電撃の煌めき',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200672',
    name: '詰め寄り',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200681',
    name: 'マイルの支配者',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200682',
    name: '積極策',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200701',
    name: '豪脚',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200702',
    name: '上昇気流',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200721',
    name: 'キラーチューン',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 9000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200722',
    name: 'テンポアップ',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 9000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200731',
    name: '勝利への執念',
    actCond: [
      [
        ['distType', '==', 3],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['changeOrderOnetime', '>', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200732',
    name: '食い下がり',
    actCond: [
      [
        ['distType', '==', 3],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['changeOrderOnetime', '>', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200751',
    name: '内的体験',
    actCond: [
      [
        ['distType', '==', 4],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['laneType', '==', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200752',
    name: '内弁慶',
    actCond: [
      [
        ['distType', '==', 4],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['laneType', '==', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200851',
    name: '逃げためらい',
    actCond: [
      [
        ['styleCountNigeOtherself', '>=', 1],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '18',
        targetValue: 1,
      },
    ],
  },
  {
    id: '200881',
    name: '先行ためらい',
    actCond: [
      [
        ['styleCountSenkoOtherself', '>=', 1],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '18',
        targetValue: 2,
      },
    ],
  },
  {
    id: '200911',
    name: '差しためらい',
    actCond: [
      [
        ['styleCountSashiOtherself', '>=', 1],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '18',
        targetValue: 3,
      },
    ],
  },
  {
    id: '200941',
    name: '追込ためらい',
    actCond: [
      [
        ['styleCountOikomiOtherself', '>=', 1],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '18',
        targetValue: 4,
      },
    ],
  },
  {
    id: '200961',
    name: '短距離直線◎',
    actCond: [
      [
        ['distType', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200962',
    name: '短距離直線○',
    actCond: [
      [
        ['distType', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200971',
    name: '短距離コーナー◎',
    actCond: [
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200972',
    name: '短距離コーナー○',
    actCond: [
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 1],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200981',
    name: '圧倒的リード',
    actCond: [
      [
        ['distType', '==', 1],
        ['phase', '==', 1],
        ['bashinDiffBehind', '>=', 5],
        ['order', '==', 1],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200982',
    name: '大きなリード',
    actCond: [
      [
        ['distType', '==', 1],
        ['phase', '==', 1],
        ['bashinDiffBehind', '>=', 5],
        ['order', '==', 1],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200991',
    name: 'プランX',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 1],
        ['order', '>=', 2],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200992',
    name: '善後策',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 1],
        ['order', '>=', 2],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201001',
    name: '準備万全！',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201002',
    name: '仕掛け準備',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201011',
    name: '悩殺術',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 0],
        ['order', '<=', 3],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -2500,
        targetType: '10',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201012',
    name: '後方釘付',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 0],
        ['order', '<=', 3],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -2000,
        targetType: '10',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201031',
    name: 'マイル直線◎',
    actCond: [
      [
        ['distType', '==', 2],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201032',
    name: 'マイル直線○',
    actCond: [
      [
        ['distType', '==', 2],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201041',
    name: 'マイルコーナー◎',
    actCond: [
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201042',
    name: 'マイルコーナー○',
    actCond: [
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 2],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201051',
    name: 'ギアチェンジ',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201052',
    name: 'ギアシフト',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201061',
    name: 'アクセル全開！',
    actCond: [
      [
        ['distType', '==', 2],
        ['phase', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201062',
    name: 'アクセラレーション',
    actCond: [
      [
        ['distType', '==', 2],
        ['phase', '==', 1],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 12000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201071',
    name: '姉御肌',
    actCond: [
      [
        ['distType', '==', 2],
        ['isOvertake', '==', true],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201072',
    name: '負けん気',
    actCond: [
      [
        ['distType', '==', 2],
        ['isOvertake', '==', true],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201081',
    name: 'スピードグリード',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -2000,
        targetType: '10',
        targetValue: 5,
      },
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201082',
    name: 'スピードイーター',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '10',
        targetValue: 5,
      },
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201091',
    name: '布陣',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['orderRate', '>', 50],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: -3000,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201092',
    name: '布石',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['orderRate', '>', 50],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: -1000,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201101',
    name: '中距離直線◎',
    actCond: [
      [
        ['distType', '==', 3],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201102',
    name: '中距離直線○',
    actCond: [
      [
        ['distType', '==', 3],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201111',
    name: '中距離コーナー◎',
    actCond: [
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201112',
    name: '中距離コーナー○',
    actCond: [
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 3],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201121',
    name: '千里眼',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 150000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201122',
    name: 'ホークアイ',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201131',
    name: 'ライトニングステップ',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201132',
    name: 'イナズマステップ',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201151',
    name: '独占力',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -2500,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201152',
    name: '束縛',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201171',
    name: '長距離直線◎',
    actCond: [
      [
        ['distType', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201172',
    name: '長距離直線○',
    actCond: [
      [
        ['distType', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201181',
    name: '長距離コーナー◎',
    actCond: [
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201182',
    name: '長距離コーナー○',
    actCond: [
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 1],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 2],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 3],
      ],
      [
        ['distType', '==', 4],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201191',
    name: '先陣の心得',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 1],
        ['bashinDiffBehind', '>=', 3],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201192',
    name: 'リードキープ',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 1],
        ['bashinDiffBehind', '>=', 3],
        ['order', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201211',
    name: '怒涛の追い上げ',
    actCond: [
      [
        ['distType', '==', 4],
        ['phase', '==', 2],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201212',
    name: '追い上げ',
    actCond: [
      [
        ['distType', '==', 4],
        ['phase', '==', 2],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201231',
    name: '奇術師',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: -100000,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201232',
    name: '目くらまし',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: -50000,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201241',
    name: '逃げ直線◎',
    actCond: [
      [
        ['style', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201242',
    name: '逃げ直線○',
    actCond: [
      [
        ['style', '==', 1],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201251',
    name: '逃げコーナー◎',
    actCond: [
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201252',
    name: '逃げコーナー○',
    actCond: [
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 1],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201261',
    name: 'シックスセンス',
    actCond: [
      [
        ['style', '==', 1],
        ['phase', '==', 0],
        ['blockedAllContinuetime', '>=', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201262',
    name: '危険回避',
    actCond: [
      [
        ['style', '==', 1],
        ['phase', '==', 0],
        ['blockedAllContinuetime', '>=', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '28',
        value: 250,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201272',
    name: '先頭プライド',
    actCond: [
      [
        ['style', '==', 1],
        ['phase', '==', 0],
        ['changeOrderOnetime', '>', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201291',
    name: '再燃焼',
    actCond: [
      [
        ['style', '==', 1],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201292',
    name: '二の矢',
    actCond: [
      [
        ['style', '==', 1],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201302',
    name: 'リスタート',
    actCond: [
      [
        ['style', '==', 1],
        ['phaseRandom', '==', 0],
        ['orderRate', '>', 50],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: -1000,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201311',
    name: '先行直線◎',
    actCond: [
      [
        ['style', '==', 2],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201312',
    name: '先行直線○',
    actCond: [
      [
        ['style', '==', 2],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201321',
    name: '先行コーナー◎',
    actCond: [
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201322',
    name: '先行コーナー○',
    actCond: [
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 2],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201331',
    name: '技巧派',
    actCond: [
      [
        ['style', '==', 2],
        ['isMoveLane', '==', 1],
      ],
      [
        ['style', '==', 2],
        ['isMoveLane', '==', 2],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201332',
    name: '巧みなステップ',
    actCond: [
      [
        ['style', '==', 2],
        ['isMoveLane', '==', 1],
      ],
      [
        ['style', '==', 2],
        ['isMoveLane', '==', 2],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201341',
    name: '決意の直滑降',
    actCond: [
      [
        ['style', '==', 2],
        ['slopeType', '==', 'descent'],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201342',
    name: '直滑降',
    actCond: [
      [
        ['style', '==', 2],
        ['slopeType', '==', 'descent'],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201361',
    name: 'くじけぬ精神',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201362',
    name: 'まき直し',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201371',
    name: '幻惑のかく乱',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 2],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: -50000,
        targetType: '10',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201372',
    name: 'かく乱',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 2],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: -30000,
        targetType: '10',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201381',
    name: '差し直線◎',
    actCond: [
      [
        ['style', '==', 3],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201382',
    name: '差し直線○',
    actCond: [
      [
        ['style', '==', 3],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201391',
    name: '差しコーナー◎',
    actCond: [
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201392',
    name: '差しコーナー○',
    actCond: [
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 3],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201401',
    name: '努力家',
    actCond: [
      [
        ['style', '==', 3],
        ['isOvertake', '==', true],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 3000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201402',
    name: 'がんばり屋',
    actCond: [
      [
        ['style', '==', 3],
        ['isOvertake', '==', true],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201411',
    name: '百万バリキ',
    actCond: [
      [
        ['style', '==', 3],
        ['slopeType', '==', 'ascent'],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201412',
    name: '十万バリキ',
    actCond: [
      [
        ['style', '==', 3],
        ['slopeType', '==', 'ascent'],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201431',
    name: '大局観',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 150000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201432',
    name: '読解力',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201451',
    name: '追込直線◎',
    actCond: [
      [
        ['style', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201452',
    name: '追込直線○',
    actCond: [
      [
        ['style', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201461',
    name: '追込コーナー◎',
    actCond: [
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201462',
    name: '追込コーナー○',
    actCond: [
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 1],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 2],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 3],
      ],
      [
        ['style', '==', 4],
        ['cornerRandom', '==', 4],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201471',
    name: '視界良好！異常なし！',
    actCond: [
      [
        ['style', '==', 4],
        ['isMoveLane', '==', 1],
      ],
      [
        ['style', '==', 4],
        ['isMoveLane', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 100000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201472',
    name: 'お見通し',
    actCond: [
      [
        ['style', '==', 4],
        ['isMoveLane', '==', 1],
      ],
      [
        ['style', '==', 4],
        ['isMoveLane', '==', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201501',
    name: '天命士',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 150000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201502',
    name: '策士',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '8',
        value: 50000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201511',
    name: '熱いまなざし',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['order', '>=', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -2500,
        targetType: '4',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201512',
    name: 'まなざし',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 2],
        ['order', '>=', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '21',
        value: -1500,
        targetType: '4',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201581',
    name: '登山家',
    actCond: [[['slopeType', '==', 'ascent']]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201591',
    name: 'ウマ好み',
    actCond: [
      [['nearCount', '==', 4]],
      [['nearCount', '==', 5]],
      [['nearCount', '==', 6]],
      [['nearCount', '==', 7]],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201601',
    name: '地固め',
    actCond: [[['activateCountStart', '>=', 3]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '31',
        value: 2000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201611',
    name: '尻尾上がり',
    actCond: [[['activateCountMiddle', '>=', 3]]],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201651',
    name: 'スリップストリーム',
    actCond: [
      [
        ['infrontNearLaneTime', '>=', 3],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201661',
    name: '遊びはおしまいっ！',
    actCond: [
      [
        ['behindNearLaneTime', '>=', 3],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 30000,
    cd: 300000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201671',
    name: 'チャート急上昇！',
    actCond: [
      [
        ['groundType', '==', 2],
        ['phase', '==', 1],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 3500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201672',
    name: 'レコメンド',
    actCond: [
      [
        ['groundType', '==', 2],
        ['phase', '==', 1],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 18000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
];

export default activeSkills;
