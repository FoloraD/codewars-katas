/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

eg should return 5 for 'abracadabra
*/

function getCount(str){
    //find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return the number of vowels
    return count
}

module.exports = getCount

/* 
1) getCount(str) string is passed to the getCount() function

2) Regular expression(RegEx) is used with the match() method to find the number of vowels in a string.

3) /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. 

4) str.match(/[aeiou]/gi); matches a string against a regular expression

5) length property gives the number of vowels 

*/