
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i])
      return false;
  }
  return true
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // if the lengths do not equal, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // make a loop; 
    //  should have the same number of keys
    // value of key in one object = value of key in another;
  for (let key in object1) { 
    // if both are arrays, then pass to eqArrays
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      // arrays as values
      if (eqArrays(object1[key], object2[key]) === false){
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "5", b: "2" };
const ba = { b: "2", a: "5" };
assertObjectsEqual(ab, ba);