// Popup dialog box
//alert('Hello, World');

// writing to browsers's console
console.log(1);
console.log(2);

// Variables 
//define a variable
let age = 25;
let year = 2022;

console.log(age, year);

//modify an existing variable's value
age = 30;

console.log(age);

// Constants
const points = 100;

console.log(points);

// old style variable usage
var score = 75;

console.log(score);

// Data Types:
// Strings
console.log('Hello World');

let email = 'max@vax.co.in';
console.log(email);

//string concatenation
firstName = "Max";
lastName = "Vax";
fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

index = email.indexOf("@");
console.log(index);

result = email.lastIndexOf('x');
console.log(result);

result = email.slice(0, 10);
console.log(result);

result = email.slice(2, 10);
console.log(result);

result = email.substr(0, 10);
console.log(result);

result = email.substr(2, 10);
console.log(result);

result = email.substring(0, 10);
console.log(result);

result = email.substring(2, 10);
console.log(result);

result = email.replace('x', 'w');
console.log(result);

// Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// Arithmetic Opeartors +, -, *, /, **, % 
console.log(10/2);

result = radius % 3;
console.log(result);

result = pi * radius ** 2;
console.log(result);

// Order of Operations - B I D M A S
result = 5 * (10-3)**2;
console.log(result);

// increment operator
let likes = 10;
// likes = likes + 1;
// likes += 1;
// likes++;
++likes;
console.log(likes);
--likes;
console.log(likes);

likes -= 5;
console.log(likes);

likes *= 2;
console.log(likes);

likes /= 2; // divide likes by 2 and update it
console.log(likes);

//NaN
console.log(5 / 'Hello');
console.log(5 * '*');

// Concatenate number
result = 'The blog has ' + likes + ' likes.';
console.log(result);











