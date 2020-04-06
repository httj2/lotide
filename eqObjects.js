const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  // false: if the lengths do not equal
  if (arr1.length !== arr2.length) {
    for (let key in arr1) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])){
          return true;
        } else {
          return false;
        }
      } 
    } 
    return false
  } else {
    return true;
  }
};





const ab = { a: "5", b: "2" };
const ba = { b: "2", a: "6" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
