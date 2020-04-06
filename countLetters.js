// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result
}

assertEqual(countLetters("lighthouse working"), { l: 1,
  i: 2,
  g: 2,
  h: 2,
  t: 1,
  o: 2,
  u: 1,
  s: 1,
  e: 1,
  w: 1,
  r: 1,
  k: 1,
  n: 1 });
assertEqual(countLetters("wow"), {w: 2, i: 0});