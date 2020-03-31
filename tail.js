// Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(result, num) {
  if (result === num) {
    console.log(`${result} = ${num}`);
  }
};

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(words);
// tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words));
// assertEqual(words.length, 3); // original array should still have 3 elements!


// Write a test case to make sure that the original array is not modified.
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
