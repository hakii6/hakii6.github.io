interface Number {
  round: () => number;
}

// Number.prototype.round = function () {
//   return typeof this === 'number' ? Math.round(this * 1000.0) / 1000.0 : -1;
// };

export {};
