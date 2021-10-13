const skillUniqueSuccession = [
  {
    id: '900011',
    name: 'シューティングスター',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '>=', 2],
        ['orderRate', '<=', 50],
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
    id: '900021',
    name: '先頭の景色は譲らない…！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '==', 1],
        ['bashinDiffBehind', '>=', 1],
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
    id: '900031',
    name: '究極テイオーステップ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 3],
        ['bashinDiffInfront', '<=', 1],
        ['isOvertake', '==', true],
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
    id: '900041',
    name: '紅焔ギア/LP1211-M',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['order', '<=', 5],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 24000,
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
    id: '900061',
    name: '勝利の鼓動',
    actCond: [
      [
        ['order', '>=', 2],
        ['order', '<=', 5],
        ['orderRate', '<=', 50],
        ['remainDist', '<=', 201],
        ['remainDist', '>=', 199],
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
    id: '900071',
    name: '不沈艦、抜錨ォッ！',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['distRate', '<=', 60],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 36000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900081',
    name: 'カッティング×DRIVE！',
    actCond: [
      [
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
        ['remainDist', '<=', 200],
        ['bashinDiffInfront', '<=', 1],
      ],
      [
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
        ['remainDist', '<=', 200],
        ['bashinDiffBehind', '<=', 1],
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
    id: '900091',
    name: 'ブリリアント・レッドエース',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '==', 1],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 1000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900101',
    name: 'ヴィクトリーショット！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 24000,
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
    id: '900111',
    name: '精神一到何事か成らざらん',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['changeOrderOnetime', '<', 0],
        ['order', '>=', 4],
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
    id: '900131',
    name: '貴顕の使命を果たすべく',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['distDiffRate', '<=', 30],
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
    id: '900141',
    name: 'プランチャ☆ガナドール',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['hpPer', '>=', 30],
        ['order', '<=', 2],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 1000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900151',
    name: 'ヴィットーリアに捧ぐ舞踏',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['bashinDiffInfront', '<=', 1],
        ['bashinDiffBehind', '<=', 1],
        ['blockedSideContinuetime', '>=', 2],
        ['order', '<=', 4],
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
    id: '900161',
    name: 'Shadow Break',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['order', '>=', 2],
        ['orderRate', '<=', 75],
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
    id: '900171',
    name: '汝、皇帝の神威を見よ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['changeOrderUpEndAfter', '>=', 3],
        ['isCorner', '==', false],
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
    id: '900181',
    name: 'ブレイズ・オブ・プライド',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['order', '>=', 4],
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
    id: '900201',
    name: 'アングリング×スキーミング',
    actCond: [
      [
        ['phase', '>=', 2],
        ['isCorner', '==', true],
        ['order', '==', 1],
      ],
    ],
    duration: 24000,
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
    id: '900231',
    name: '∴win Q.E.D.',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['changeOrderOnetime', '<', 0],
        ['order', '<=', 4],
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
    id: '900241',
    name: 'ひらめき☆ランディング',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['blockedSideContinuetime', '>=', 2],
        ['order', '<=', 3],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 1000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900261',
    name: 'G00 1st.F∞;',
    actCond: [
      [
        ['isBadstart', '==', 0],
        ['temptationCount', '==', 0],
        ['order', '<=', 3],
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
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
    id: '900271',
    name: 'レッツ・アナボリック！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['isCorner', '==', true],
        ['orderRate', '>=', 65],
        ['orderRate', '<=', 70],
      ],
    ],
    duration: 24000,
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
    id: '900301',
    name: 'ブルーローズチェイサー',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 4],
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
    id: '900321',
    name: 'U=ma2',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['isCorner', '==', true],
        ['order', '>=', 3],
        ['orderRate', '<=', 40],
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
    id: '900351',
    name: '勝利のチケットを、君にッ！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 5],
        ['blockedSideContinuetime', '>=', 2],
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
    id: '900381',
    name: '#LookatCurren',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['distRate', '<=', 65],
        ['order', '>=', 3],
        ['orderRate', '<=', 40],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 1000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900411',
    name: '優等生×バクシン＝大勝利ッ',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '<=', 3],
        ['blockedSideContinuetime', '>=', 2],
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
    id: '900451',
    name: 'ピュリティオブハート',
    actCond: [
      [
        ['phaseRandom', '==', 1],
        ['order', '>=', 2],
        ['orderRate', '<=', 40],
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
    id: '900461',
    name: 'キラキラ☆STARDOM',
    actCond: [
      [
        ['phase', '==', 1],
        ['isCorner', '==', false],
        ['order', '==', 1],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 30000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 500,
        targetType: '1',
        targetValue: 0,
      },
      {
        type: '31',
        value: 1000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '900501',
    name: 'Nemesis',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['orderRate', '>=', 50],
        ['orderRate', '<=', 75],
        ['isOvertake', '==', true],
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
    id: '900521',
    name: 'ワクワククライマックス',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['orderRate', '>', 50],
        ['nearCount', '>=', 1],
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
    id: '900561',
    name: '来ます来てます来させます！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '>=', 3],
        ['blockedFront', '==', 1],
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
    id: '900601',
    name: 'きっとその先へ…！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '==', 3],
        ['bashinDiffBehind', '<=', 1],
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
    id: '900611',
    name: 'Pride of KING',
    actCond: [
      [
        ['temptationCount', '==', 0],
        ['remainDist', '<=', 201],
        ['remainDist', '>=', 199],
        ['order', '>=', 5],
        ['orderRate', '<=', 60],
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
    id: '910031',
    name: '絶対は、ボクだ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['isOvertake', '==', true],
        ['order', '<=', 5],
        ['orderRate', '<=', 50],
        ['overtakeTargetNoOrderUpTime', '>=', 2],
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
    id: '910131',
    name: '最強の名を懸けて',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['hpPer', '<=', 35],
        ['order', '<=', 3],
        ['orderRate', '<=', 50],
        ['bashinDiffBehind', '<=', 1],
        ['overtakeTargetTime', '>=', 1],
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
    id: '910181',
    name: '薫風、永遠なる瞬間を',
    actCond: [
      [
        ['phaseRandom', '==', 1],
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
        ['isOvertake', '==', true],
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
    id: '910241',
    name: 'フラワリー☆マニューバ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['orderRate', '<=', 40],
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
];

export default skillUniqueSuccession;
