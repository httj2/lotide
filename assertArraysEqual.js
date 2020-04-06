const eqArrays = function(arrayOne, arrayTwo) {
    if (arrayOne.length === arrayTwo.length) {
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
    } else {
      return false
    }
    return true
};

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS