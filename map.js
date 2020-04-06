
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


const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];




const test1 = map(words, word => word[0]);
console.log(test1);
assertArraysEqual(test1, ['g', 'c', 't', 'm', 't']);
// return true
const test2 = map(words, word => word[1]);
console.log(test2);
assertArraysEqual(test2, ['r', 'o', 'o', 'a', 'o']);
// return true
const test3 = map(words, word => word[2]);
console.log(test3)
assertArraysEqual(test2, ['o', 'n', "s", 'j', 'm']); 
// return failed