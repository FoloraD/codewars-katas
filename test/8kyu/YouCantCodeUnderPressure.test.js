const doubleInteger = require('../../src/8kyu/YouCantCodeUnderPressure.js')
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("doubles the integer 2", () => {
Test.assertEquals(doubleInteger(2), 4);
  });
});