// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !



function pigIt(str){
  return str.split(' ').map(function(el){
    for(var i = 0; i < el.length; i ++){
      if(el.charCodeAt(i) > 64 && el.charCodeAt(i) < 91 || el.charCodeAt(i) > 96 && el.charCodeAt(i) < 123){
        return el.slice(1) + el.slice(0,1) + 'ay';
      } else {
        return el.slice(1) + el.slice(0,1)
      }
    }
  }).join(' ');
}