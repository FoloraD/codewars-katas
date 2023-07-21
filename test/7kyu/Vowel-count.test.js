const getCount = require("../../src/7kyu/VowelCount.js");
const chai = require('chai');
const assert = chai.assert;

describe("Vowels Count Test", function(){
    it("should return 5 for 'abracadabra'", function(){
        assert.strictEqual(getCount("abracadabra"), 5);
    });

    it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function(){
        assert.strictEqual(getCount('o a kak ushakov lil vo kashu kakao'), 13);

    });
    
    it("should return 0 for 'my pyx'", function(){
        assert.strictEqual(getCount('my pyx'), 0)
    });

});