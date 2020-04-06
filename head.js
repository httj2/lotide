
// Create a function head which returns the first item in the array.
// The head function should not return the first element as an array. It should simply return the element itself.
// Use assertEqual to write test cases for various scenarios.
const head = function(array) {
  return array[0];
};

const assertEqual = require('./assertEqual');


module.exports = head;
