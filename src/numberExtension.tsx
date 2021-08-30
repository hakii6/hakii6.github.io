interface Number {
  round: () => number;
}

// eslint-disable-next-line no-extend-native
Number.prototype.round = function () {
  return typeof this === 'number' ? Math.round(this * 1000.0) / 1000.0 : -1;
};

export {};
