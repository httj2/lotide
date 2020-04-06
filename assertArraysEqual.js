const eqArrays = require('./eqArrays');
 

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅Arrays are Equal ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑Arrays are NOT equal ${arrayOne} !== ${arrayTwo}`);
  }
  
};

module.exports = assertArraysEqual;