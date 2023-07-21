const sum = require("../../src/8kyu/SumArrays.js")
const Test = require('@codewars/test-compat');

describe("Array of numbers Tests", () => {
  it("tests an array of numbers returns the sum of the numbers", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});