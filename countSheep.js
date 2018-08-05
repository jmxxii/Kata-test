/*
If you can't sleep, just count sheep!!

Task:
Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

*/


var countSheep = function (num){
  var arr = [];
  for(var i = 1;i<=num;i++){
    arr.push(i, ' sheep...')
  }
  return arr.join().replace(/,/g, '');
}