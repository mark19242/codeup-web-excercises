
                Arrow Functions That Prove True*********
const isBoolean = value => typeof value === "boolean";

const isString = value => typeof value === "string";


const isNotString = value => typeof value !== "string";


const isNotANumber = value => typeof value !== "number";



const isEmptyString = value => typeof value === 'string' && value.trim() === '';
**************************************************
                const isEmptyString = value => {
                    if (typeof value === 'string') {
                        return value.trim() === '';
                    }
                    return false;
                };

/////////////////////////////////////////////////////////////////////////////////
const isNegative = value => (typeof value === 'number' && value < 0) || (typeof value === 'string' && !isNaN(value) && parseFloat(value) < 0);
         *************************************************
                    const isNegative = value => {
                    if (typeof value === 'number') {
                        return value < 0;
                    } else if (typeof value === 'string' && !isNaN(value)) {
                        return parseFloat(value) < 0;
                    }
                    return false;
                };
//////////////////////////////////////////////////////////////////////
const isPositive = value => (typeof value === 'number' || (typeof value === 'string' && !isNaN(value))) ? parseFloat(value) > 0 : false;

****************************************************************************
                const isPositive = value => {
                    if (typeof value === 'number') {
                        return value > 0;
                    } else if (typeof value === 'string' && !isNaN(value)) {
                        return parseFloat(value) > 0;
                    }
                    return false;
                };

/////////////////////////////////////////////////////////////////////////////////////
const isZero = value => (typeof value === 'number' && value === 0) || (typeof value === 'string' && !isNaN(value) && parseFloat(value) === 0);
*********************************************************************************
                const isZero = value => {
                    if (typeof value === 'number') {
                        return value === 0;
                    } else if (typeof value === 'string' && !isNaN(value)) {
                        return parseFloat(value) === 0;
                    }
                    return false;
                };



///////////////////////////////////////////////////////////////////////////
const isArray = value => Array.isArray(value);
******************************

                const isArray = value => {
                    return Array.isArray(value);
                };

////////////////////////////////////////////////////////////
const upperCase = str => typeof str === 'string' ? str.toUpperCase() : false;
***************************************************************
                const upperCase = str => {
                    if (typeof str === 'string') {
                        return str.toUpperCase();
                    } else {
                        return false;
                    }
                };

///////////////////////////////////////////////////////////////////////////////////////////////
                //solutions to first assesment

                ********************

                const isANumber = (value) => {
                    return typeof value === 'number';
                }

                const increment = (value) => {
                    if (typeof value === 'number') {
                        return value + 1;
                    } else {
                        return false;
                    }
                }

                const decrement = (value) => {
                    if (typeof value === 'number') {
                        return value - 1;
                    } else {
                        return false;
                    }
                }

                const parseNumber = (value) => {
                    if (typeof value === 'number' || 'string') {
                        return parseFloat(value);
                        if (typeof value === 'string') {
                            return parseFloat(value);
                        } else {
                            return false;
                        }
                    }}

                const add = (value1, value2) => {
                    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))){
                        return false;
                    }
                    return (parseFloat(value1) + parseFloat(value2));
                }

                const multiply = (value1, value2) => {
                    if (isNaN(parseFloat(value1)) || isNaN(parseFloat(value2))){
                        return false;
                    } else {
                        return (parseFloat(value1) * parseFloat(value2));


                    }
                }

                const square = (value) => {
                    if (typeof value === 'number') {
                        return (parseFloat(value)* parseFloat(value));
                    } else {
                        return false;
                    }
                }

                const sumOfSquares = (value1, value2) => {
                    if (typeof value1 === 'number') {
                        return ((parseFloat(value1) * parseFloat(value1)) + ((parseFloat(value2) * parseFloat(value2))));
                    } else {
                        return false;
                    }
                }

                const getHighestNumber = (value1, value2, value3) => {
                    if (typeof value1 && typeof value2 && typeof value3 === 'number') {
                        return value3;
                    } else {
                        return false;
                    }
// const getHighestNumber = (num1, num2, num3) => {
//         if typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"
//         return false
//         const highestNum = Math.max(num1, num2, num3)
//         return highestNum;
// }

                }

                const isPalindrome = (input) => {
                    if (typeof input !== "string") {
                        return false;
                    }
                    let inputArr = input.split("")
                    let inputArrReversed = inputArr.reverse();
                    let inputReversed = inputArrReversed.join("")
                    return input.toLowerCase() === inputReversed.toLowerCase();

















                //Calculating Total Price with movie rentals *******
// const littleMermaidDays = 3;
// const brotherBearDays = 5;
// const herculesDays = 1;
//
// const pricePerDay = 3.37;
//
// const littleMermaidCost = littleMermaidDays * pricePerDay;
// const brotherBearCost = brotherBearDays * pricePerDay;
// const herculesCost = herculesDays * pricePerDay;
//
// let totalCost = littleMermaidCost + brotherBearCost + herculesCost;
// // totalCost = `$${totalCost.toFixed(2)}`; // we can do it this way
// totalCost = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
// console.log(`The total cost is: ${totalCost}`);
//
// const googlePerHour = 400;
// const facebookPerHour = 350;
// const amazonPerHour = 380;
//
// const googleHoursWorked = 6;
// const facebookHoursWorked = 10;
// const amazonHoursWorked = 4;
//
// let googlePay = googlePerHour * googleHoursWorked;
// let facebookPay = facebookPerHour * facebookHoursWorked;
// let amazonPay = amazonPerHour * amazonHoursWorked;
//
// let totalPay = googlePay + facebookPay + amazonPay;
// totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD" });
// console.log(`The total pay was: ${totalPay}`);
////////////////////////////////////////////////////////////////////////////////
       ////Password and Username Equation ************
// const username = "Codeup";
// const password = "notastrongpassword";
//
// // the password must be at least 5 characters
// const is5Chars = password.length >= 5;
// // the password must not include the username
// const passNotContainsUsername = !password.toLowerCase().includes(username.toLowerCase());
// // the username must be no more than 20 characters
// const userLengthValid = username.length <= 20;
// //  either the username or password can start or end with whitespace
// const usernameNoWhitespace = username.trim() === username;
// const passNoWhitespace = password.trim() === password;
//
// const validPassword = is5Chars && passNotContainsUsername && passNoWhitespace;
// console.log(`The password is valid: ${validPassword}`);
// const validUsername = userLengthValid && usernameNoWhitespace;
// console.log(`The username is valid: ${validUsername}`);
///////////////////////////////////////////////////////////////////////////////////////////////////////
/// String Operations ***********
// // Use .length to find the number of characters in the string.
// let sampleLength = sample.length;
// console.log(`sample length is: ${sampleLength}`);
// // Try to make the sample string all upper or all lower case.
// let sampleUpper = sample.toUpperCase();
// console.log(`sample as uppercase: ${sampleUpper}`);
// // Update (Re-assign) the variable sample via concatenation so that it contains "Hello Codeup Students".
// sample += " Students";
// console.log(`Reassigned sample is: ${sample}`);
// // Replace "Students" with "Class".
// sample = sample.replace("Students", "Class");
// console.log(`sample with replace method: ${sample}`);
// // Find the index of "c" using .indexOf(). What do you observe?
// let indexOfLowercaseC = sample.indexOf("c");
// let foundLowercaseC = indexOfLowercaseC >= 0; // did it find it or not?!
// let alsoFoundLowercaseC = sample.includes("c");
// console.log(`Lowercase "c" indexOf => ${indexOfLowercaseC}`);
// // Find the index of "C" using .indexOf().
// let indexOfUppercaseC = sample.indexOf("Codeup");
// // Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
// let codeupLength = "codeup".length;
// let codeupEnd = indexOfUppercaseC + codeupLength;
// let codeupWord = sample.substring(indexOfUppercaseC, codeupEnd);

// // let codeupWord = sample.split(" ")[1];
// console.log(sample.substring(sample.indexOf("Codeup"), indexOfUppercaseC + "codeup".length));
/////////////////////////////////////////////////////////////////////////////////////////////////
  ////Easy Prompt Color Operation***********
// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website');

// //Prompt
// // Ask the user for their favorite color
// let userFavoriteColor = prompt("What is your favorite color?");
// alert("Great, " + userFavoriteColor + " is my favorite color too! ")
//////////////////////////////////////////////////////////////////////////////////////////////
//*************Functions!!!!!!********
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// const sayHello = (name) => {
//     return `Hello, ${name}!`;
// };
//
// // console.log(sayHello("codeup"));
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
// // const helloMessage = sayHello("Isaac");
//
// // console.log(helloMessage);
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// // const myName = "John";
// // console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// const random = Math.floor(Math.random() * 3 + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// // const isTwo = (num) => {
// //   return num === 2;
// // };
//
// // const isItTwoOrNaw = isTwo(random);
//
// // console.log(isItTwoOrNaw);
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// // const calculateTip = (tipPercentage, billTotal) => {
// //   return billTotal * tipPercentage;
// // };
//
// // const total = calculateTip(0.2, 20);
// // const total2 = calculateTip(0.25, 25.5);
//
// // console.log(total);
// // console.log(total2);
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
// // const calculateTip = (tipPercentage, billTotal) => {
// //   return billTotal * tipPercentage;
// // };
//
// // const billTotal = parseInt(prompt("What is the total on the bill?"));
// // const tipPercentage = parseFloat(
// //   prompt("What percentage would you like to tip?")
// // );
//
// // const total = calculateTip(tipPercentage, billTotal);
//
// // alert(`You should tip $${total.toFixed(2)}`);
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// // const applyDiscount = (price, discount) => {
// //   return (1 - discount) * price;
// // };
//
// // const discount = applyDiscount(45.99, 0.12);
//
// // console.log(discount);

                    (() => {})();

////// D-Bounce Function/////
                    const debounce = (fn, delay) => {
                        let timeoutId;
                        return (...args) => {
                            if (timeoutId) {
                                clearTimeout(timeoutId);
                            }
                            timeoutId = setTimeout(() => {
                                fn(...args);
                            }, delay);
                        };
                    };

                    /////////////////
                // const marker = new mapboxgl.Marker()
                //     .setLngLat(coo)
                //     .addTo(map);
                // const popup = new mapboxgl.Popup()
                //     .setLngLat([-98.4916, 29.4260])
                //     .setHTML("<p>Codeup Rocks!</p>")
                //     .addTo(map);
                // map.flyTo({
                //     center: [-98.4916, 29.4260],
                //     zoom: 16,
                //     speed: 7,
                // });


                //     <!DOCTYPE html>
                //     <html lang="en">
                //
                //         <head>
                //         <meta charset="UTF-8">
                //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
                //         <title>Weather Map Project</title>
                //     <link rel="stylesheet" href="./css/weather_map.css">
                //     </head>
                //
                //     <body>
                //     <div class="page-wrapper">
                //         <div id="map" class="container-fluid flex-grow-1 p-0"></div>
                //     </div>
                //
                //     <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
                //     <script type="module" src="./js/api/openweather.js"></script>
                //     <script type="module" src="js/weather_map.js"></script>
                //     </body>
                //
                // </html>



                    ////////////////////////////////////////////////
//                     import {keys} from "./keys.js";
//
//                     const getCoordinates = async (searchText) => {
//                         searchText = encodeURIComponent(searchText);
//                         const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
//                         const options = {
//                             method: "GET",
//                             headers: {
//                                 "Content-Type": "application/json",
//                             },
//                         };
//                         const response = await fetch(url, options);
//                         const data = await response.json();
//                         console.log(data);
//                         return data.features[0].center;
//                     }
// //MAIN
//                     (async () => {
//                         const coordinates = await getCoordinates("8700 Tereso Dr Suite 100, San Antonio, TX, 78217");
//                         mapboxgl.accessToken = keys.mapbox;
//                         const map = new mapboxgl.Map({
//                             container: 'map', // container ID
//                             style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//                             center: coordinates, // starting position [lng, lat]
//                             zoom: 10, // starting zoom
//                         })
//
//                     })();
