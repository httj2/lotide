// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("tail", () => {
  it("returns ['Lighthouse Labs', 'Labs'] for ['Yo-yo', 'Lighthouse Labs', 'Labs']", () => {
    assert.deepEqual(tail(['Yo-yo', 'Lighthouse Labs', 'Labs']), ['Lighthouse Labs', 'Labs'])
  });
  it("returns [1, 2, 3] for [2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  })

});

