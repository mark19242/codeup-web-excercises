// //function sayHello() {
//     console.log("Hello");
// //}
//
// sayHello();


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


// sayHello ("Jason");

//Exercise

//const isCoding = (User) => {
//    console.log (`Coding, ${User}`)
//}

//isCoding ("Mark")

//Return Keyword

// const sayHello = (userFullName) => {
//     return `Hello, ${userFullName}`;
// };
//
// const greeting = sayHello("Jason");
//
// console.log(greeting);



const isCoding = (User) => {
    return `Coding, ${User}`;
}

const action = isCoding ("Mark")

console.log(action);

//redo the isCoding function to use a arrow function that takes in 2 arguments that returns "Isaac hates coding".