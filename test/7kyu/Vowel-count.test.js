const abbrevName = require("/Users/folora.duang-arop/codewars-katas/src/7kyu/Vowel-count.js");
const chai = require('chai');
const assert = chai.assert;

describe("Vowels Count Test", function(){
    it("should return 5 for 'abracadabra'", function(){
        assert.strictEqual(getCount("abracadabra", 5));

    });
});