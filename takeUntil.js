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


// The function will return a "slice of the array with elements taken from the beginning."  It should keep going until the callback/predicate returns a truthy value. 
// the callback should only be provided one value: The item in the array. 
const takeUntil = function(array, callback) {
  let arr = [];
  for (let item of array) {
    if (callback(item)){
      // if function is true, return array
      return arr
    } else {
      // if not, keep pushing until array is true
      arr.push(item)
    } 
  }
  return arr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])

console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ] )

// expected Output:
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
