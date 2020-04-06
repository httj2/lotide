const eqArrays = function(arrayOne, arrayTwo) {
  // compare length
  if (arrayOne.length !== arrayTwo.length) {
    console.log(arrayOne.length);
    console.log(arrayTwo.length);
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
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