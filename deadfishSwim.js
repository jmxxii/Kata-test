/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data ){
let count = 0;
let result = [];

for(let i = 0; i < data.length; i++){
    if(data[i] === "i"){
      count++
    } else if(data[i] === "d"){
      count--
    } else if(data[i] === "s"){
      count = count*count
    } else if(data[i] === "o"){
      result.push(count)
    }
  }
  return result
}
