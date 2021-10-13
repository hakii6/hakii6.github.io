const SkillHeal = [
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
];

export default SkillHeal;
