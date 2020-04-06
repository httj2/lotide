const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')




const testArray1 = [1,2,3,4]; // case where the array length is even (so two numbers are returned)
assertArraysEqual(middle(testArray1), [2,3]); // expected  PASS

const testArray2 = [1,2,3,4,5]; // case where the array length is odd.
assertArraysEqual(middle(testArray2), [3]); // expected PASS

const testArray3 = [1,2,3,4,5]; // case where the array length is odd.
assertArraysEqual(middle(testArray3), [6]); // expected fail

