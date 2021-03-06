/*
let text = "Hello World!";
console.log(text[2]);
let number = 8;
console.log(number);
number = 8.9999999;
console.log(number);

console.log((5.1234).toPrecision(3));
//testestets

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

console.log('Hello World!'[6])
const txt = ('Hello World!')
console.log(txt[5] = "-") // Cannot modified string, instead make a new string using original values
console.log(txt)

//Anonymous functions

const anotherWay = function(x) {console.log(x)}
anotherWay('Hello Class');

//function literal
(function(x, y) {console.log(x + y)})(5, 6);
*/
//callbacks
/*
function anyFunction(data, callback) {
    async-process(data).then(   // do async request
      function(result) {        // then on return
        callback(result)        // execute callback
      }
    );
    //rest the code
}

*/

/*

functionOne(data, function(resultOne) {
    functionTwo(resultOne, function(resultTwo) {
        functionThree(resultTwo, function(resultThree){
          // our code .......
        })
    })
})


console.log("Hello World".length)

const text1 = 'first name'
const text2 = 'last name'

const fullName = text1.concat(text2)
console.log(fullName)

console.log(text1.toUpperCase())
console.log(text1.trim()) // removes any whitespace at ends of string

const newText = new String('SDV')
console.log(newText);

const newTextToString = (newText.toString()) 
console.log(newTextToString)
*/

/*
Callback is also known as high-order function

High-order function - passing a function to another function "otherFunction"

Callback pattern

Let students = ['Dale', 'Frank', 'Kyran', 'Aaron']

students.forEach(function (eachStudent, index) {
  console.log(index + 1 + "." + eachName) //

  When we pass a function as an argument to another function
  you are only passing a function definition

  otherFunction has the callback function in its parameter as a function definition
  it can execute the callback ANYTIME 

----------------------------------------------------------------------------------------------------------

const dat = []
  function myData(dataFromUser) {
    if (typeof dataaFromUser === 'string') {
      console.log(dataFromUser)
    } else if (typeof dataFromUser === "object") {
      for (let item in dataFromUser) {
        console.log(item + ":" + dataFromUser[item])
      }
    }
  }
})

const result = function input(dataInput, callback) {
   dat.push(dataTnput)
   callback(dataInput)
}

input({}, myData)
*/

/*
let pathToNextLocation
fs.readFile('./file/location1.md'. 'utf-8', function(err, val) {
  if(err) throw new error
  pathToNextLocation = val;
  fs.readFile(pathToNextLocation, 'utf-8', function(err, val) {
    // do stuff!
  })
})

1- Name your functions and declare them and pass the name only of the function
as callbak.

2- Separate your code into modules. And this is good coding in Express.js
*/

let myObject = {
  firstName: "Travis",
  lastName: "Byrman",
};

console.log(myObject);

console.log(myObject.firstName);
myObject.name = "Bob";
console.log(myObject);

/*
1- Only use letters, digits, underscores.
2- Must start with a letter or underscore
3- Names are case-sensitive
4- Must not match a reserved keyword in JS

*/

let students = {
  name: "Luke",
  class: "SDV503",
  school: "NMIT",
};

console.log(Object.keys(students)); // Prints keys of  object

//Object.freeze(students); // 'Freezes' object, prevents any change to it

students.name = "Phil";

console.log(students);

console.log(Object.isFrozen(students));

let anotherStudent = {
  studentName: "Luke",
  otherClass: "CSA",
  school: "NMIT",
};

const newObj = Object.assign(students, anotherStudent);
console.log(newObj);

// Object.create()
let person = {
  name: "Jim",
  age: 28,
  school: "NMIT",
};
const guy = Object.create(person);

console.log(guy.name);
console.log(guy.age);

// Object.is()
let check = Object.is(students.name, guy.name);
console.log(check);

// Object.isExtensible()
Object.freeze(person);
console.log(Object.isExtensible(person));
