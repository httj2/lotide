const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};
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





const ab = { a: "6", b: "2" };
const ba = { b: "2", a: "5" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
