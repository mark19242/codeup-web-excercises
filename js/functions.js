// //function sayHello() {
//     console.log("Hello");
// //}
//
// sayHello();
//
//
// function isCoding(User) {
//     console.log(`isCoding,${User}`)
//
// }
//
// isCoding("Mark")
//
// // Arrow function expression
// const sayHello = (usersFullName) => {
//     console.log(`Hello, ${usersFullName}`);
// };
//
//
// sayHello ("Jason");
//
// Exercise
//
// const isCoding = (User) => {
//    console.log (`Coding, ${User}`)
// }
//
// isCoding ("Mark")

//
// Return Keyword
//
// const sayHello = (userFullName) => {
//     return `Hello, ${userFullName}`;
// };
//
// const greeting = sayHello("Jason");
//
// console.log(greeting);
//
//
//
// const isCoding = (User) => {
//     return `Coding, ${User}`;
// }
//
// const action = isCoding ("Mark")
//
// console.log(action);

//redo the isCoding function to use a arrow function that takes in 2 arguments that returns "Isaac hates coding".

// const sayHello = (userFullName = "no username") => {
//     return `Hello, ${userFullName}`;
// };
//
// const greeting = sayHello("Jason");
// const greeting2 = sayHello();

// const globalVar = "I am global";
//
// const tieFighter = () => {
//     console.log(globalVar);
// }
//
// console.log(globalVar);
//
// tieFighter();

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
//Use arrow function

// function SayHello(name) {
//     console.log(`hello, ${name}`)
// }
//
// SayHello("Mark");


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
 //Using the original function, from the upper exercise.
// The word "call" is calling onto the function that was maid.

// SayHello("Mark")
// let helloMessage =  SayHello("Mark")
//
// console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// let myName = "Mark";
// SayHello = myName;
// console.log(SayHello);



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

/// Use arrow functions/ The parameter is just a placeholder/ ===(is strict)
// const isTwo = (number) => {
//     return number === 2
// }
//
// console.log(isTwo(1))
// console.log(isTwo(2))
// console.log(isTwo(3))







/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// const calculateTip =  (tipPercentage, billTotal) => {
//     return billTotal * tipPercentage;
// }
// const total = calculateTip(0.2, 20);
// const total2 = calculateTip(0.25, 25.5);
// console.log(total);
// console.log(total2)

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// const calculateTip = (tipPercentage, billTotal) => {
//   return billTotal * tipPercentage;
// };
//
// const billTotal = parseInt(prompt("What is the total on the bill?"));
// const tipPercentage = parseFloat(
//   prompt("What percentage would you like to tip?")
// );
//
// const total = calculateTip(tipPercentage, billTotal);
//
// alert(`You should tip $${total.toFixed(2)}`);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

const applyDiscount = (discount, itemPrice)=>{
    let discountAmount = (100 * discount) / itemPrice;
    let newTotal = itemPrice - discountAmount
    return newTotal;
};

let yourItemPrice = prompt(`how much was your item?`);
let discountPercent = prompt(`how much was your discount?`);

let discountedPrice = applyDiscount(parseFloat(discountPercent), parseFloat(yourItemPrice));

alert(`after your discount the item will be ${discountedPrice}`);