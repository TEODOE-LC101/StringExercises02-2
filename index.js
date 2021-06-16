// Part One:

let word = 'Javascript';
console.log(word[8]); // p

let phrase = "Strings are sequences of characters.";
console.log(phrase[5]); // g

let word1 = 'Wonderful';
console.log(word1.length); // 9

let phrase1 = "Do spaces count?";
console.log(phrase1.length); // yes


///////////////////////////////////////////////////////////////////

let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);



//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num1 = 123.45
console.log(String(num1).length-1);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
/*
if(String(num1).includes('.')){
  console.log(String(num1).length-1);
} else {
  console.log(String(num1).length);
}
*/
let num2 = 1234567

if(String(num2).includes('.')){
  console.log(String(num2).length-1);
} else {
  console.log(String(num2).length);
}
