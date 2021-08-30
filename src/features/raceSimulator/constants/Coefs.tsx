const Coefs = {
  motivation: {
    0: 1.04,
    1: 1.02,
    2: 1,
    3: 0.98,
    4: 0.96,
  },
  surface: {
    1: {
      0: {
        sp: 1,
      },
      1: {
        sp: 1,
      },
      2: {
        sp: 1.02,
      },
      3: {
        sp: 1.02,
      },
    },
    2: {
      0: {
        sp: 1,
      },
      1: {
        sp: 1,
      },
      2: {
        sp: 1.01,
      },
      3: {
        sp: 1.02,
      },
    },
  },
  styleFit: {
    S: {
      wisdom: 1.1,
    },
    A: {
      wisdom: 1,
    },
    B: {
      wisdom: 0.85,
    },
    C: {
      wisdom: 0.75,
    },
    D: {
      wisdom: 0.6,
    },
    E: {
      wisdom: 0.4,
    },
    F: {
      wisdom: 0.2,
    },
    G: {
      wisdom: 0.1,
    },
  },
  distFit: {
    S: {
      v: 1.05,
      a: 1,
    },
    A: {
      v: 1,
      a: 1,
    },
    B: {
      v: 0.9,
      a: 1,
    },
    C: {
      v: 0.8,
      a: 1,
    },
    D: {
      v: 0.6,
      a: 1,
    },
    E: {
      v: 0.4,
      a: 0.6,
    },
    F: {
      v: 0.2,
      a: 0.5,
    },
    G: {
      v: 0.1,
      a: 0.4,
    },
  },
  surfaceFit: {
    S: {
      a: 1.05,
    },
    A: {
      a: 1,
    },
    B: {
      a: 0.9,
    },
    C: {
      a: 0.8,
    },
    D: {
      a: 0.7,
    },
    E: {
      a: 0.5,
    },
    F: {
      a: 0.3,
    },
    G: {
      a: 0.1,
    },
  },
  usingStyle: {
    1: {
      sp: 0.95,
      v: {
        phase0: 1,
        phase1: 0.98,
        phase2: 0.962,
      },
      a: {
        phase0: 1,
        phase1: 1,
        phase2: 0.996,
        phase3: 0.996,
      },
    },
    2: {
      sp: 0.89,
      v: {
        phase0: 0.978,
        phase1: 0.991,
        phase2: 0.975,
      },
      a: {
        phase0: 0.985,
        phase1: 1,
        phase2: 0.996,
        phase3: 0.996,
      },
    },
    3: {
      sp: 1,
      v: {
        phase0: 0.938,
        phase1: 0.998,
        phase2: 0.994,
      },
      a: {
        phase0: 0.975,
        phase1: 1,
        phase2: 1,
        phase3: 1,
      },
    },
    4: {
      sp: 0.995,
      v: {
        phase0: 0.931,
        phase1: 1,
        phase2: 1,
      },
      a: {
        phase0: 0.945,
        phase1: 1,
        phase2: 0.997,
        phase3: 0.997,
      },
    },
  },
  spConsume: {
    normal: 1,
    tempt: 1.6,
    slacking: 0.6,
    descentMode: 0.4,
  },
};

export default Coefs;
