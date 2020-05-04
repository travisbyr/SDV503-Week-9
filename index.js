/*
let text = "Hello World!";
console.log(text[2]);
let number = 8;
console.log(number);
number = 8.9999999;
console.log(number);

console.log((5.1234).toPrecision(3));
*/

function number(x, y) {
  const result = Number.parseInt(x, y); //Parse variable as an integer
  if (Number.isNaN(result)) {
    return 0;
  }
  return result * 10;
}
console.log(number("5", 10));

const numOne = 1000;
const numTwo = Number(1000);
const numThree = new Number(1000);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

console.log(numOne === numTwo);
console.log(numTwo === numThree);
console.log(numThree === numOne);

console.log(typeof numTwo);
console.log(numTwo == numThree);

//Printing variables and text together
console.log(`numOne ${numOne}, numTwo ${numTwo} and numThree ${numThree}`);

// Number.isNaN() // Tests whether a value is an illegal number (not a number)
let x = "Hello" - 2;
console.log(Number.isNaN(x));

// Number.isFinite() // Tests whether a value is a finite number
let y = 2e64;
console.log(Number.isFinite(y));

// Number.isInteger() // Tests whether value is an integer or not
let z = "test";
console.log(Number.isInteger(z));

//toFixed() // Rounds number to a defined amount of decimal places
console.log((234.56).toFixed(1));

//ToLocaleString // Rounds number to where necessary
console.log((234.56).toLocaleString());

function money(x, y) {
  x = Number(x);
  y = y || "$";

  if (Number.isNaN(x) || typeof y != "string") {
    return null;
  }
  return y + x.toFixed(2);
}

console.log(money(15, "$"));
console.log(money(6));
console.log(money(7, "S$"));

console.log("Hello Class");
const arr = ["a", "b", "c"];
console.log(arr);
