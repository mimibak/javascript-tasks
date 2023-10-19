// 01 Greet function

// Implement a welcomeMsg function
/*
The first parameter is the name of the person to be greeted. It's a string.
The function should return a string that contains the name of person in a welcome msg.
 */
// TODO: implement welcomeMsg function

function welcomeMsg(name) {
  return "Welcome" + name;
}

console.log(welcomeMsg(" Jane!"));
console.log(welcomeMsg(" Marc!"));

// 02 Gross Price Function

/*
Implement a calcGrossPrice function.

 The first parameter is the net price as integer number
 The second parameter is the tax rate as float number
 The function should return the gross price
 */

function calcGross(price, tax) {
  return price * tax + price;
}

console.log(calcGross(20, 0.19));

function calcGrossPrice(netPrice, taxRate) {
  return Math.round(netPrice * (1 + taxRate) * 100) / 100;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// 03 Add Positive Function

/*
Implement a addPositive function.

 The function has two parameters which will always be numbers
 The function should add the two numbers and return the result
 If any of the arguments is a negative number, it should be handled as a positive number (see example code)
 */

function addPositive(a, b) {
  return a + b;
}

console.log(addPositive(2, 3));

function addPos(a, b) {
  return a + -1 * b;
}

console.log(addPos(3, -5));

function addPosi(a, b) {
  return -1 * a + -1 * b;
}

console.log(addPosi(-1, -8));
