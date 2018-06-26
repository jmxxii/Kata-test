
// Your task is to make a function that can take any non-negative 
// integer as a argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

//  ######################## My Solution ##########################

function descendingOrder(n){
  let numString = n.toString();
  let numSplit = numString.split("");
  let numSort = numSplit.sort();
  let numReverse = numSort.reverse();
  let numJoin = numReverse.join();
  let numSplitComma = numJoin.replace(/,/g , "");
  let result = Number(numSplitComma);
  return result
}