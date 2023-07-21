/* 
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    // your code here
    let total = 0;
  array.forEach((score) => {
    total += score;
  });
    if(array == 0){
      return 0;
    } else {
  average = total / array.length;
  
    return average;
      }
  
  }
  module.exports = findAverage;