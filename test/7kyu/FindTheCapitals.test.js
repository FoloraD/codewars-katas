const capitals = require('../../src/7kyu/FindTheCapitals')
const chai = require("chai");
const assert = chai.assert;


describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});