
// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website');

// //Prompt
// // Ask the user for their favorite color
// let userFavoriteColor = prompt("What is your favorite color?");
// alert("Great, " + userFavoriteColor + " is my favorite color too! ")

// Prompt Excercise
// let LittleMermaid = 3
// let BrotherBear = 5
// let Hercules = 1
// const pricePerADay = 3
// prompt(`LittleMermaid$3`)
// prompt(`BrotherBear$5`)
// prompt(`Hercules$1`)
// console.log (pricePerADay*(LittleMermaid + BrotherBear + Hercules));


// Prompt Excercise part 2
const googlePerHour = 400;
const facebookPerHour = 350;
const amazonPerHour = 380;

const googleHoursWorked = 6;
const facebookHoursWorked = 10;
const amazonHoursWorked = 4;

prompt('google$400')
prompt('facebook$350')
prompt('amazon$380')

let googlePay = googlePerHour * googleHoursWorked;
let facebookPay = facebookPerHour * facebookHoursWorked;
let amazonPay = amazonPerHour * amazonHoursWorked;

let totalPay = googlePay + facebookPay + amazonPay;
totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(`The total pay was: ${totalPay}`);















