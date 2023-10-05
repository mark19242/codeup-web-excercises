let a = 1;
console.log(a);

let b = a++;
console.log(b)

let c = ++a;
console.log(c)

//a= 1, b= 1, c=3

let d = "hello";
console.log(d)
//d= hello

let e = false;
console.log(e)
// e= false

console.log(d++);
//NaN

console.log(e++);
//0

let perplexed; perplexed + 2;
console.log(perplexed);
//undefined

let price = 2.7;
price.toFixed(2);
console.log(price);

//let price = "2.7";
//price.toFixed(2);
//console.log(price)

isNaN(0)
console.log(0)

isNaN(1)
console.log(1)


isNaN("")
console.log("")



isNaN("string")
console.log("string")

isNaN("0")
console.log(0)

isNaN("1")
console.log(1)

isNaN("3.145")
console.log (3.145)

isNaN(Number.MAX_VALUE)
console.log(Number.MAX_VALUE)


isNaN(Infinity)
console.log(Infinity)
isNaN("true")
console.log("true")

isNaN(true)
console.log(true)

isNaN("false")
console.log("false")

isNaN(false)
console.log(false)




!false
console.log(!false)

!!true
console.log(!!true)

!!false
console.log(!!false)


!!0
console.log(!!0)

!!-0
console.log(!!-0)

!!1
console.log(!!1)

!!-1
console.log(!!-1)

!!0.1
console.log(!!0.1)

!!"hello"
console.log(!!"hello")

!!""
console.log (!!"")

!!''
console.log(!!'')

!!"false"
console.log(!!"false")

!!"0"
console.log(!!"0")


let sample = "Hello Codeup";

let NumberOfCharacters = sample.length;
let indexOfc = sample.indexOf("c");
console.log(`Index of lowercase c is => ${indexOfc}`);
let hasLowercaseC = indexOfc >= 0;
console.log(NumberOfCharacters)
console.log(sample.toUpperCase())
console.log(sample + 'Students');
const p = 'Hello Codeup'
console.log(p.replace('Codeup', 'Class'))
let indexOfC = sample.indexOf("C")
console.log(`Index of Uppercase C => ${indexOfC}`)
let substring = sample.substring
console.log(sample.substring(6));
let LM = 3
let BB = 5
let H = 1
const pricePerADay = 3
console.log (pricePerADay*(LM + BB + H));

// const googlePerHour = 400;
// const FacebookPerHour = 350;
// const amazonPerHour = 380;
//
// const googleHoursWorked = 6;
// const FacebookHoursWorked = 10;
// const amazonHoursWorked = 4;
//
// let googlePay = googlePerHour * googleHoursWorked;
// let facebookPay = FacebookPerHour * FacebookHoursWorked;
// let amazonPay = amazonPerHour * amazonHoursWorked
//
// let totalPay = googlePay + facebookPay + amazonPay;

//totalPay= totalPay.toLocaleString("en-US", {styles: "currency", currency: "USD"});
console.log("The total pay was: ${totalPay}");

let username = 'codeup';
let password = 'notastrongpassword';

console.log(password.length >= 5, username.length <=20, password!==username,username.trim(),password.trim());

