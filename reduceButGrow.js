/*Given and array of integers (x), return the result of multiplying the values together in order. Example:

[1, 2, 3] --> 6
*/


function grow(x){
  var result = x.reduce((sum, el) => {
    return sum * el
  })
  return result;
}