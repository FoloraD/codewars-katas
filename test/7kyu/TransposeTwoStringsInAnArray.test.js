const transposeTwoStrings = require("../../src/7kyu/TransposeTwoStringsInAnArray.js")
const strictEqual = require('chai').assert.strictEqual;


function doTest(array, expected) {
	const log = `for array :\n["${array[0]}", "${array[1]}"]\n`;
	const actual = transposeTwoStrings(array);
	strictEqual(actual, expected, log);
}

describe("Transpose Two Strings Tests suite", function () {
	it("'Hello', 'World'", function () {
		doTest(['Hello', 'World'], "H W\ne o\nl r\nl l\no d");
	});

    it("'joey', 'louise' ", function () {
		doTest(['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e");
	});

    it("'a', 'cat'", function () {
        doTest(['a', 'cat'], "a c\n  a\n  t");
	});

    it("cat, ' ' ", function () {
		doTest(['cat', ''], "c  \na  \nt  ");
	});

    it(" '!a!a!', '?b?b' ", function () {
	    doTest(['!a!a!', '?b?b'], "! ?\na b\n! ?\na b\n!  ");
	});
});