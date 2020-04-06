const middle = function(array) {
  let arrays = array.length; /*  */
  let mid = [];
  if (arrays <= 2) { /* two elements or less  */
    mid;
  } else if (arrays % 2 === 1) {  /* Odd number of Elements*/
    mid.push(Math.ceil(arrays / 2));   /* returns the higher element */
  } else if (arrays % 2 === 0) {     /* Even Number of Elements  */
    mid.push(((arrays / 2)), (arrays / 2) + 1);    /* returns two elements (lower, higher) of the middle element */
  }
  return mid;
};

module.exports = middle

