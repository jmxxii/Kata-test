/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


function positiveSum(arr) {
  var sum = 0;
  var newArr = arr.map(el => {
    console.log(el)
    if (el > 0){
      return sum += el;
    } else {
      return 0;
    }
  })
  return sum;
}