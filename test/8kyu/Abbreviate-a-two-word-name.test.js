const abbrevName = require("../../src/8kyu/Abbreviate-a-two-word-name.js");
const chai = require('chai');
const assert = chai.assert;

describe("Abbreviate A Two Word Name Tests", () => {
    it("Testing for Sam Harris", () => {
        assert.strictEqual(abbrevName("Sam Harris"), "S.H")
    });

    it("Testing for Patrick Feenan", () => {
        assert.strictEqual(abbrevName("Patrick Feenan"), "P.F")
    });

    it("Testing for Evan Cole", () => {
        assert.strictEqual(abbrevName("Evan Cole"), "E.C")
    });

    it("Testing for P Favuzzi", () => {
        assert.strictEqual(abbrevName("P Favuzzi"), "P.F")
    });
});
