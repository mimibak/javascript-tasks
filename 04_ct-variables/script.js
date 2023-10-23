// 01 Spot the errors and fix them
// Copy the following complete code block to your script.js file and try to spot and fix the errors.

/*const userName = function (username) {
  return username;
};

console.log(userName("Jenna"));

function getUserNameLength(userName) {
  return "Jenna".length;
}

console.log(getUserNameLength("Jenna") > 4);

// ^______________ Should log true*/

let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return (userName = userName.length);
}

console.log(getUserNameLength(userName) > 4);

/*let userName = "Jenna";

function getUserNameLength() {
  return (userName = userName.length);
}

console.log(getUserNameLength(userName));*/

// 02 isString function
/*Implement a isString function.

 The function has one parameter which could be any kind of data type
 The function is written as a function expression
 The function returns a boolea string otherwise it will return falsean. It returns only true, when the data type is 
*/

// TODO: Implement the isString function

const isString = function (datatype) {
  return typeof datatype == "string";
};

/*let isString = function (datatype) {
  return typeof datatype == "string";
};*/

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
