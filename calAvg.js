// Write function avg which calculates average of numbers in given list.


function find_average(array) {
  var sum = 0
  var arr = array.map(el => {
    sum += el;
    return sum;
    })
    return sum / array.length;
  }