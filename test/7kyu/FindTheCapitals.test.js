const capitals = require('../../src/7kyu/FindTheCapitals')
const chai = require("chai");
const assert = chai.assert;


describe("Capital Letter Tests", () => {
  it("Testing for CodEWaRs ", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });

  it("Testing for loNDoN ", () => {
    assert.deepEqual(capitals('loNDoN'), [2,3,5] );
  });

  it("Testing for SOLutioN ", () => {
    assert.deepEqual(capitals('SOLutioN'), [0, 1, 2, 7] );
  });
});