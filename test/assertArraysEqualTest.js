
const assertArraysEqual = require('../assertArraysEqual')



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 3, 5]);
assertArraysEqual([1, 2, 3], [3, 2, 3, 5, 3, 4]);