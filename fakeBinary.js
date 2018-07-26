// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
  var strNum = x.split('');
  var result = strNum.map(el => {
    if(el < 5){
      return (el, '0');
    } else if (el >= 5){
      return el.replace(el, `1`);
    }
  })
  return result.join().replace(/,/g, '');
}