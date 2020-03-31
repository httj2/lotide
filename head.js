const head = function (array) {
  return array[0];
}
const assertEqual = function (head, num){
  if (head === num) { 
    console.log(`Assertion Failed: ${head} === ${num}`);
  } else {
    console.log(`Assertion Passed: ${head} !== ${num}`);
  }
}


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "Hello");



// Create a function head which returns the first item in the array.
// The head function should not return the first element as an array. It should simply return the element itself.
// Use assertEqual to write test cases for various scenarios. 