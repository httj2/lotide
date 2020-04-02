// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (eqArrays(arrayOne, arrayTwo)) {
//     console.log(`✅✅✅Assertion Passed`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed`);
//   }
// };

// const eqArrays = function(arrayOne, arrayTwo) {
//   // compare length
//   if (arrayOne.length !== arrayTwo.length) {
//     console.log(arrayOne.length);
//     console.log(arrayTwo.length);
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Implement without which will return a subset of a given array, removing unwanted elements. 

const without = function(sourceArray, removeArray){
  for (var i = 0; i < sourceArray.length; i++){
    // console.log(sourceArray[i])
    for (var j = 0; j < removeArray.length; j++){
      // console.log(removeArray[j])
      if (sourceArray[i] === removeArray[j]){
        sourceArray.splice(i, 1);
      }
      // console.log(sourceArray)
    }
    // console.log(sourceArray)
  } 
  return sourceArray;
}

without(["1", "2", "3"], [1, 2, "3"])
without([1, 2, 3], [1]) // => [2, 3]
