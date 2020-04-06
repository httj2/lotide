const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // pass
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), false); // fail
