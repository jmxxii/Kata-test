/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell).
*/


function bonusTime(salary, bonus) {
  var euro = "\u00A3";
if(bonus === true){
  var bonusYear = salary * 10;
  return euro.concat(bonusYear);
}  else {
  return euro.concat(salary) 
}
}