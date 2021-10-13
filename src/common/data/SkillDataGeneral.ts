const SkillDataGeneral = [
  {
    id: '10081',
    name: 'アクセルX',
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
    duration: 50000,
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
    id: '10091',
    name: 'レッドエース',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '==', 1],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
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
    id: '10111',
    name: '精神一到',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['changeOrderOnetime', '<', 0],
        ['order', '>=', 4],
      ],
    ],
    duration: 50000,
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
    id: '10141',
    name: '熱血☆アミーゴ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['hpPer', '>=', 30],
        ['order', '<=', 2],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
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
    id: '10181',
    name: 'エンプレス・プライド',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['order', '>=', 4],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 50000,
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
    id: '10241',
    name: '勝利のキッス☆',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['blockedSideContinuetime', '>=', 2],
        ['order', '<=', 3],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 1500,
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
    id: '10271',
    name: '燃えろ筋肉！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['isCorner', '==', true],
        ['orderRate', '>=', 65],
        ['orderRate', '<=', 70],
      ],
    ],
    duration: 40000,
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
    id: '10321',
    name: 'introduction：My body',
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
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '10351',
    name: '全力Vサインッ！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 5],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 50000,
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
    id: '10411',
    name: '学級委員長+速さ＝バクシン',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '<=', 3],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 50000,
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
    id: '10451',
    name: 'クリアハート',
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
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '10521',
    name: 'ワクワクよーいドン',
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
        value: 350,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '10561',
    name: '来てください来てください！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '>=', 3],
        ['blockedFront', '==', 1],
      ],
    ],
    duration: 50000,
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
    id: '10601',
    name: 'アタシもたまには、ね？',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '==', 3],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 50000,
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
    id: '10611',
    name: 'Call me KING',
    actCond: [
      [
        ['temptationCount', '==', 0],
        ['remainDist', '<=', 201],
        ['remainDist', '>=', 199],
        ['order', '>=', 5],
        ['orderRate', '<=', 60],
      ],
    ],
    duration: 50000,
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
    id: '100011',
    name: 'シューティングスター',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '>=', 2],
        ['orderRate', '<=', 50],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 50000,
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
    id: '100021',
    name: '先頭の景色は譲らない…！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '==', 1],
        ['bashinDiffBehind', '>=', 1],
      ],
    ],
    duration: 50000,
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
    id: '100031',
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
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 4500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100041',
    name: '紅焔ギア/LP1211-M',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['order', '<=', 5],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 40000,
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
    id: '100061',
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
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 4500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100071',
    name: '不沈艦、抜錨ォッ！',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['distRate', '<=', 60],
        ['orderRate', '>', 50],
      ],
    ],
    duration: 60000,
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
    id: '100081',
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
    duration: 50000,
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
    id: '100091',
    name: 'ブリリアント・レッドエース',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '==', 1],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
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
    id: '100101',
    name: 'ヴィクトリーショット！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
      ],
    ],
    duration: 40000,
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
    id: '100111',
    name: '精神一到何事か成らざらん',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['changeOrderOnetime', '<', 0],
        ['order', '>=', 4],
      ],
    ],
    duration: 50000,
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
    id: '100131',
    name: '貴顕の使命を果たすべく',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['distDiffRate', '<=', 30],
      ],
    ],
    duration: 50000,
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
    id: '100141',
    name: 'プランチャ☆ガナドール',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['hpPer', '>=', 30],
        ['order', '<=', 2],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
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
    id: '100151',
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
    duration: 50000,
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
    id: '100161',
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
    duration: 50000,
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
    id: '100171',
    name: '汝、皇帝の神威を見よ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['changeOrderUpEndAfter', '>=', 3],
        ['isCorner', '==', false],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 4500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100181',
    name: 'ブレイズ・オブ・プライド',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['order', '>=', 4],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 50000,
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
    id: '100201',
    name: 'アングリング×スキーミング',
    actCond: [
      [
        ['phase', '>=', 2],
        ['isCorner', '==', true],
        ['order', '==', 1],
      ],
    ],
    duration: 40000,
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
    id: '100231',
    name: '∴win Q.E.D.',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['changeOrderOnetime', '<', 0],
        ['order', '<=', 4],
      ],
    ],
    duration: 50000,
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
    id: '100241',
    name: 'ひらめき☆ランディング',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['blockedSideContinuetime', '>=', 2],
        ['order', '<=', 3],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
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
    id: '100261',
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
    duration: 50000,
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
    id: '100271',
    name: 'レッツ・アナボリック！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['isCorner', '==', true],
        ['orderRate', '>=', 65],
        ['orderRate', '<=', 70],
      ],
    ],
    duration: 40000,
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
    id: '100301',
    name: 'ブルーローズチェイサー',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 4],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 50000,
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
    id: '100321',
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
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100351',
    name: '勝利のチケットを、君にッ！',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', false],
        ['order', '<=', 5],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 50000,
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
    id: '100381',
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
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
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
    id: '100411',
    name: '優等生×バクシン＝大勝利ッ',
    actCond: [
      [
        ['distRate', '>=', 50],
        ['order', '<=', 3],
        ['blockedSideContinuetime', '>=', 2],
      ],
    ],
    duration: 50000,
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
    id: '100451',
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
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100461',
    name: 'キラキラ☆STARDOM',
    actCond: [
      [
        ['phase', '==', 1],
        ['isCorner', '==', false],
        ['order', '==', 1],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 2500,
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
    id: '100501',
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
    duration: 50000,
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
    id: '100521',
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
        value: 550,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '100561',
    name: '来ます来てます来させます！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '>=', 3],
        ['blockedFront', '==', 1],
      ],
    ],
    duration: 50000,
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
    id: '100601',
    name: 'きっとその先へ…！',
    actCond: [
      [
        ['phase', '>=', 2],
        ['order', '==', 3],
        ['bashinDiffBehind', '<=', 1],
      ],
    ],
    duration: 50000,
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
    id: '100611',
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
    duration: 50000,
    cd: 5000000,
    effects: [
      {
        type: '27',
        value: 4500,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
  {
    id: '110031',
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
    duration: 50000,
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
    id: '110131',
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
    duration: 50000,
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
    id: '110181',
    name: '薫風、永遠なる瞬間を',
    actCond: [
      [
        ['phaseRandom', '==', 1],
        ['order', '>=', 3],
        ['orderRate', '<=', 50],
        ['isOvertake', '==', true],
      ],
    ],
    duration: 50000,
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
    id: '110241',
    name: 'フラワリー☆マニューバ',
    actCond: [
      [
        ['isFinalcorner', '==', true],
        ['isCorner', '==', true],
        ['orderRate', '<=', 40],
        ['changeOrderOnetime', '<', 0],
      ],
    ],
    duration: 50000,
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
        type: '3',
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
        type: '3',
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
        type: '3',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '4',
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
        type: '5',
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
        type: '5',
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
        type: '5',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '3',
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
        type: '3',
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
        type: '3',
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
        type: '4',
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
        type: '4',
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
        type: '1',
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
        type: '1',
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
        type: '1',
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
        type: '2',
        value: -400000,
        targetType: '1',
        targetValue: 0,
      },
    ],
  },
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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

export default SkillDataGeneral;
