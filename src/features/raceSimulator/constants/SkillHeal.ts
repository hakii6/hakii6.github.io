const SkillHeal = [
  {
    id: '200351',
    name: '円弧のマエストロ',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200352',
    name: 'コーナー回復○',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200353',
    name: 'コーナー回復×',
    actCond: [
      [['cornerRandom', '==', 1]],
      [['cornerRandom', '==', 2]],
      [['cornerRandom', '==', 3]],
      [['cornerRandom', '==', 4]],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -200,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200381',
    name: '好転一息',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200382',
    name: '直線回復',
    actCond: [[['straightRandom', '==', 1]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200391',
    name: '坂苦手',
    actCond: [[['slopeType', '==', 'ascent']]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -200,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200401',
    name: 'バ群嫌い',
    actCond: [
      [
        ['accumulatetime', '>=', 2],
        ['blockedAllContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -200,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200431',
    name: 'コンセントレーション',
    actCond: [[['always', '==', 1]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '10',
        value: 4000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200432',
    name: '集中力',
    actCond: [[['always', '==', 1]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '10',
        value: 9000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200433',
    name: 'ゲート難',
    actCond: [[['always', '==', 1]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '10',
        value: 15000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200441',
    name: '鋼の意志',
    actCond: [
      [
        ['phase', '==', 0],
        ['accumulatetime', '>=', 5],
        ['blockedFrontContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200442',
    name: '隠れ蓑',
    actCond: [
      [
        ['phase', '==', 0],
        ['accumulatetime', '>=', 5],
        ['blockedFrontContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200471',
    name: '不屈の心',
    actCond: [
      [
        ['phase', '==', 1],
        ['changeOrderOnetime', '>', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200472',
    name: 'ペースキープ',
    actCond: [
      [
        ['phase', '==', 1],
        ['changeOrderOnetime', '>', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200481',
    name: 'どこ吹く風',
    actCond: [
      [
        ['phase', '==', 1],
        ['blockedAllContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200482',
    name: 'ウマ込み冷静',
    actCond: [
      [
        ['phase', '==', 1],
        ['blockedAllContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200521',
    name: '空回り',
    actCond: [
      [
        ['accumulatetime', '>=', 2],
        ['order', '==', 1],
        ['bashinDiffBehind', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -200,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200561',
    name: '余裕綽々',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200562',
    name: 'スタミナキープ',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200571',
    name: 'レースプランナー',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200572',
    name: '好位追走',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200621',
    name: '眠れる獅子',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 1],
        ['distDiffRate', '>=', 75],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200622',
    name: '後方待機',
    actCond: [
      [
        ['style', '==', 4],
        ['phaseRandom', '==', 1],
        ['distDiffRate', '>=', 75],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200662',
    name: '様子見',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 1],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200691',
    name: '慧眼',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200692',
    name: '展開窺い',
    actCond: [
      [
        ['distType', '==', 2],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200711',
    name: '切り開く者',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200712',
    name: '前途洋々',
    actCond: [
      [
        ['distType', '==', 3],
        ['phaseRandom', '==', 1],
        ['order', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200741',
    name: 'クールダウン',
    actCond: [
      [
        ['distType', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200742',
    name: '深呼吸',
    actCond: [
      [
        ['distType', '==', 4],
        ['straightRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200761',
    name: '火事場のバ鹿力',
    actCond: [
      [
        ['distType', '==', 4],
        ['isHpEmptyOnetime', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200762',
    name: '別腹タンク',
    actCond: [
      [
        ['distType', '==', 4],
        ['isHpEmptyOnetime', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '200771',
    name: 'トリック（前）',
    actCond: [
      [
        ['phase', '==', 1],
        ['orderRate', '<=', 50],
        ['temptationCountBehind', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '20',
        targetValue: 10,
      },
    ],
  },
  {
    id: '200781',
    name: 'トリック（後）',
    actCond: [
      [
        ['phase', '==', 1],
        ['orderRate', '>', 50],
        ['temptationCountInfront', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '19',
        targetValue: 10,
      },
    ],
  },
  {
    id: '200791',
    name: '逃げ駆け引き',
    actCond: [
      [
        ['styleTemptationCountNige', '>=', 1],
        ['isTemptation', '==', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '13',
        value: 50000,
        targetType: '21',
        targetValue: 1,
      },
    ],
  },
  {
    id: '200801',
    name: '先行駆け引き',
    actCond: [
      [
        ['styleTemptationCountSenko', '>=', 1],
        ['isTemptation', '==', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '13',
        value: 50000,
        targetType: '21',
        targetValue: 2,
      },
    ],
  },
  {
    id: '200811',
    name: '差し駆け引き',
    actCond: [
      [
        ['styleTemptationCountSashi', '>=', 1],
        ['isTemptation', '==', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '13',
        value: 50000,
        targetType: '21',
        targetValue: 3,
      },
    ],
  },
  {
    id: '200821',
    name: '追込駆け引き',
    actCond: [
      [
        ['styleTemptationCountOikomi', '>=', 1],
        ['isTemptation', '==', 0],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '13',
        value: 50000,
        targetType: '21',
        targetValue: 4,
      },
    ],
  },
  {
    id: '200831',
    name: '逃げけん制',
    actCond: [
      [
        ['styleCountNigeOtherself', '>=', 1],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 1,
      },
    ],
  },
  {
    id: '200841',
    name: '逃げ焦り',
    actCond: [
      [
        ['styleCountNigeOtherself', '>=', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 1,
      },
    ],
  },
  {
    id: '200861',
    name: '先行けん制',
    actCond: [
      [
        ['styleCountSenkoOtherself', '>=', 1],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 2,
      },
    ],
  },
  {
    id: '200871',
    name: '先行焦り',
    actCond: [
      [
        ['styleCountSenkoOtherself', '>=', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 2,
      },
    ],
  },
  {
    id: '200891',
    name: '差しけん制',
    actCond: [
      [
        ['styleCountSashiOtherself', '>=', 1],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 3,
      },
    ],
  },
  {
    id: '200901',
    name: '差し焦り',
    actCond: [
      [
        ['styleCountSashiOtherself', '>=', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 3,
      },
    ],
  },
  {
    id: '200921',
    name: '追込けん制',
    actCond: [
      [
        ['styleCountOikomiOtherself', '>=', 1],
        ['phaseRandom', '==', 0],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 4,
      },
    ],
  },
  {
    id: '200931',
    name: '追込焦り',
    actCond: [
      [
        ['styleCountOikomiOtherself', '>=', 1],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '18',
        targetValue: 4,
      },
    ],
  },
  {
    id: '201021',
    name: '逃亡禁止令',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 0],
        ['orderRate', '>', 50],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -300,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201022',
    name: '抜け駆け禁止',
    actCond: [
      [
        ['distType', '==', 1],
        ['phaseRandom', '==', 0],
        ['orderRate', '>', 50],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201141',
    name: '神業ステップ',
    actCond: [
      [
        ['distType', '==', 3],
        ['isMoveLane', '==', 1],
        ['accumulatetime', '>=', 10],
      ],
      [
        ['distType', '==', 3],
        ['isMoveLane', '==', 2],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201142',
    name: '軽やかステップ',
    actCond: [
      [
        ['distType', '==', 3],
        ['isMoveLane', '==', 1],
        ['accumulatetime', '>=', 10],
      ],
      [
        ['distType', '==', 3],
        ['isMoveLane', '==', 2],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201161',
    name: '魅惑のささやき',
    actCond: [
      [
        ['distType', '==', 3],
        ['phase', '==', 1],
        ['blockedFrontContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -300,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201162',
    name: 'ささやき',
    actCond: [
      [
        ['distType', '==', 3],
        ['phase', '==', 1],
        ['blockedFrontContinuetime', '>=', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '9',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201202',
    name: 'パス上手',
    actCond: [
      [
        ['distType', '==', 4],
        ['isOvertake', '==', true],
        ['accumulatetime', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201221',
    name: 'スタミナグリード',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 1],
        ['order', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -200,
        targetType: '9',
        targetValue: 5,
      },
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201222',
    name: 'スタミナイーター',
    actCond: [
      [
        ['distType', '==', 4],
        ['phaseRandom', '==', 1],
        ['order', '>=', 5],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -50,
        targetType: '9',
        targetValue: 5,
      },
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201281',
    name: 'じゃじゃウマ娘',
    actCond: [
      [
        ['style', '==', 1],
        ['slopeType', '==', 'ascent'],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201282',
    name: '勢い任せ',
    actCond: [
      [
        ['style', '==', 1],
        ['slopeType', '==', 'ascent'],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201351',
    name: '食いしん坊',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201352',
    name: '栄養補給',
    actCond: [
      [
        ['style', '==', 2],
        ['phaseRandom', '==', 1],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201421',
    name: 'リラックス',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201422',
    name: '小休憩',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201441',
    name: '八方にらみ',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -300,
        targetType: '4',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201442',
    name: '鋭い眼光',
    actCond: [
      [
        ['style', '==', 3],
        ['phaseRandom', '==', 2],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: -100,
        targetType: '4',
        targetValue: 18,
      },
    ],
  },
  {
    id: '201481',
    name: '下校後のスペシャリスト',
    actCond: [
      [
        ['style', '==', 4],
        ['slopeType', '==', 'descent'],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201482',
    name: '下校の楽しみ',
    actCond: [
      [
        ['style', '==', 4],
        ['slopeType', '==', 'descent'],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201491',
    name: '冷静沈着',
    actCond: [
      [
        ['style', '==', 4],
        ['blockedFrontContinuetime', '>=', 1],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201492',
    name: '冷静',
    actCond: [
      [
        ['style', '==', 4],
        ['blockedFrontContinuetime', '>=', 1],
        ['accumulatetime', '>=', 10],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201571',
    name: 'スリーセブン',
    actCond: [
      [
        ['remainDist', '<=', 778],
        ['remainDist', '>=', 776],
      ],
    ],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '201621',
    name: 'ふり絞り',
    actCond: [[['activateCountEndAfter', '>=', 3]]],
    duration: 0,
    cd: 5000000,
    effects: [
      {
        type: '9',
        value: 150,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
];

export default SkillHeal;
