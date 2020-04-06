const assertEqual = require('../assertEqual');
const test = require('../test');


const word = ["Lighthouse", "Labs"];
assertEqual(word.length, 2); // ensure we get back two elements
assertEqual(word[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(word[1], "Labs"); // ensure second element is "Labs"
