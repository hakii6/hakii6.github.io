// interface Number {
//   round() : number;
// }

// eslint-disable-next-line no-extend-native
Number.prototype.round = function () {
  return Math.round(this * 1000.0) / 1000.0;
};

export {};
