const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};


// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key
    }
  }
  return undefined;
};

const test1 = {
  "Blue Hill": { stars: 1},
  "Akaleri":   { stars: 3, blackhole: true },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3, blackhole: false },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const result1 = findKey(test1, x => x.stars === 3) // => "Akaleri"
const result2 = findKey(test1, x => x.stars === 3 && x.blackhole === false) //=> "elBulli"
console.log(result1);
console.log(result2);
assertEqual(result1, "elBulli");
assertEqual(result2, "elBulli");
