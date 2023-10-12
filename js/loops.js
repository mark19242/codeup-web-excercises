console.log("loops!");

// for (/*initialization*/; /*condition*/; /*increment*/) {
// // body){
//     /* the code that will repeat
// }


//When writing a for loop, syntax first!
// for (let i = 0; i < 10 ;i++) {
//     console.log(`The code ran at index ${i}.`);
//
// }

/* While Loop */

// While(condition) {
//
// }
//
// */

// let index = 0;
// while (index < 10) {
//     console.log(`The code ran at index ${index}`);
//     index++;
// }
//
//  let favPizza = prompt("What is your favorite pizza");
// while (favPizza !== "pepperoni") {
//     favPizza = prompt ("WRONG ANSWER! TRY AGAIN");
// }
// alert("That's what I thought, That's a good choice.");

/* DO WHILE LOOP
do {
//body
} while(condition)

 */

// let myNumber = 0;
//
// do {
//     console.log(myNumber);
//     myNumber++;
// } while (myNumber<= 10);

//write a function called buildPyramid that takes a number as an argument.
// the function should return an asterisk pyramid that has as many rows as the number

// const buildRow = (num) =>{
//     let result = "";
//     for(let i = 0; i < num; i++){
//         result += "*";
//     }
//     result+= "\n";
//     return result;
// };
//
//
// const buildPyramid = (rows) => {
//     let result = "";
//     //first loop
//     for(let i =0; i < rows; i++){
//         result += "*\n";
//     }
//     return result;
// };
//
// let pyramid = buildPyramid(5);
// console.log(pyramid)

//Using (i) starting at (1), have to use output what it needed to be.
// Break down question and finish out function before trying to solve.

// const showMultiplicationTable = (number) => {
//     for(let i = 1; i <= 10; i++){
//         let result = number * i;
//         let message = `${number} x ${i} = ${result}`;
//         console.log(message);
//     }
// }
//
// showMultiplicationTable(7);


// randomNumberfunction +(min, max) => {
//         return parseInt(Math.random() * (max -min) + min)
// }
// for (let i = 0; i < 10; i++) {
//     // Generate a random number between 20 and 200
//     const number = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
//
//     // Check if the number is odd or even
//     if (number % 2 === 0) {
//         console.log(number + " is even.");
//     } else {
//         console.log(number + " is odd.");
//     }
// }

// Use the String().repeat(); method
// for (let i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }

// Created a for loop that uses console.log to create the output  5 to 100. While increasing in increments of 5.
// for (let i = 100; i >=5; i-=5) {
//         console.log(i)
//
// }








