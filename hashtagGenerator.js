function generateHashtag (str) {
  console.log(str.length)
   if(str.length > 140){
     return false;
   } else if (str === '' || str === " "){
     return false;
   }
  var newStr = str.split(' ') ;
  var capStr = newStr.map(el => {
    return el.replace(el.charAt(0), el.charAt(0).toUpperCase())
  })
  var result = capStr.join().replace(/,/g, '');
  return `#${result}`
}
