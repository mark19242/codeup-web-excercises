// if (true){
//     console.log("The condition is true!")
// } else {
//     console.log("The condition is false!");
// };
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");

// const nmrOfUsers =157;
//
// if (nmrOfUsers >= 200) { console.log ("Thats a lot of users")
// } else{
//     console.log("Marketing needs to do a better job")
// };


// const userRole = "admin"
//
// if (userRole === "student") {
//     console.log("Let them see the curriculm")
// } else if (userRole ==="admin") {
//     console.log("Let them see the curriculum and the instructor portal")
// } else{
//     console.log("Dont let them see anything");
// }


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// const color = "blue"; {
//     let message;
// function analyzeColor(UserColor) {
//     if (UserColor === "red") {
//         message =("Strawberries are red")
//     } else if (UserColor === "blue") {
//         message = ("blue is the color of the sky")
//
//     } else if (UserColor === "cyan") {
//         message = ("I don't know anything about cyan")
//
//     }
//     return message;
// };
//
// const myMessage = analyzeColor("blue");
// console.log(myMessage);






        // Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(randomColor) {
//     if (randomColor === "red") {
//         console.log("Strawberries are red")
//     } else if (randomColor === "blue") {
//         console.log("blue is the color of the sky")
//
//     } else if (randomColor === "cyan") {
//         console.log("I don't know anything about cyan")
//
//     }
// }
//
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// console.log(randomColor);




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(UserColor) {
//     switch (UserColor.toLowerCase()) {
//         case "red":
//             return "Strawberries are red.";
//         case "blue":
//             return "blue is the color of the sky.";
//         case "cyan":
//             return "I don't know anything about cyan.";
//
//     }
// }
//
//
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));








/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



// const color = "blue";
// function analyzeColor(UserColor) {
//     if (UserColor === "red") {
//         alert("Strawberries are red")
//     } else if (UserColor === "blue") {
//         alert("blue is the color of the sky")
//
//     } else if (UserColor === "cyan") {
//         alert("I don't know anything about cyan")
//
//     }
// }
//
//
// const userColorInput = prompt("Please enter a color:");
//
//
// const analysisResult = analyzeColor(userColorInput);





/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     let discount = 0;
//
//     switch (luckyNumber) {
//         case 0:
//             discount = 0;
//             break;
//         case 1:
//             discount = 0.1;
//             break;
//         case 2:
//             discount = 0.25;
//             break;
//         case 3:
//             discount = 0.35;
//             break;
//         case 4:
//             discount = 0.5;
//             break;
//         case 5:
//             return 0;
//         default:
//             return totalAmount;
//     }
//
//     return totalAmount - totalAmount * discount;
// }
//
//
// const luckyNumber = 3;
// const totalAmount = 100;
// const discountedPrice = calculateTotal(luckyNumber, totalAmount);
// console.log("Discounted Price: $" + discountedPrice.toFixed(2));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// const luckyNumber = Math.floor(Math.random() * 6);
//
//
// const totalBill = parseFloat(prompt("Please enter your total bill amount:"));
//
//
//
// if (!isNaN(totalBill)) {
//
//     const discountedPrice = calculateTotal(luckyNumber, totalBill);
//
//
//     alert("Your lucky number is: " + luckyNumber +
//         "Your price before the discount was: $" + totalBill.toFixed(2) +
//         "Your price after the discount is: $" + discountedPrice.toFixed(2));
// } else {
//
//     alert("Invalid input. Please enter a valid number for your total bill.");
// }


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// Function to check if a value is a number
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Function to determine if a number is even or odd
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Function to display information about the number
function displayNumberInfo(number) {
    if (isNumber(number)) {
        const parsedNumber = parseFloat(number);
        const plus100 = parsedNumber + 100;

        alert(`Number is ${isEvenOrOdd(parsedNumber)}.`);
        alert(`Number plus 100 is ${plus100}.`);
        alert(`Number is ${parsedNumber >= 0 ? "positive" : "negative"}.`);
    } else {
        alert("Incorrect input data type. Please enter a valid number.");
    }
}

// Ask the user if they want to enter a number
const userWantsToEnterNumber = confirm("Would you like to enter a number?");
if (userWantsToEnterNumber) {
    const userNumber = prompt("Please enter a number:");
    displayNumberInfo(userNumber);
} else {
    alert("No number was entered.");
}

