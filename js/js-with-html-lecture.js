//console.log("testing");

//let easyMath= 2+ 2;
//console.log (easyMath);

//let x = 1;
//x = x + 1;
//x += 1;

//x/=1;
//x = x / 1;

//Unary Operators
//let y = 5;
//y++;
// written out
//y = y + 1;

y--;

//console.log(x);

// method to turn number into string
//let pi = 3.14;
//let piString = "" + pi;
//console.log(piString)
//console.log(pi)
//let piString = pi.toString(); //this is a number method

// from a string to a number
//let nmrOfStudents = "19";
//nmrOfStudents = parseInt(nmrOfStudents); // this is a js function
//nmrOfStudents = parseFloat(nmrOfStudents);

//let bankAccount = "19.23656";
//console.log("Original value =>",bankAccount);
//bankAccount = parseFloat(bankAccount);
//console.log("Parse Float => ", bankAccount);
//bankAccount = parseFloat(bankAccount.toFixed(2);
//console.log("toFixed => ", bankAccount);
//bankAccount = parseInt(bankAccount);
//console.log("parseInt => ", bankAccount);
//console.log(nmrOfStudents);

//let x = "griffin";
//let xNumber = Number(x);
//console.log(xNumber);
//let isEqual = Nan === NaN;
//console.log(isEqual);
//let isReallyEqual = isNaN(xnumber);

//truthy/falsey

//let emptyString = "" == false;
//console.log(emptyString);
//let noValue; // undefined
//console.log(noValue);
//let zero = 0 == false;
//console.log("zero =>", zero);
//let noData = null;

//if (noData) {
    console.log("YUP, IT'S TRUTHY");
}


// STRING METHODS
let username = "Justino (Nova)";
let guildName;

// get the length of the string
let nameLength = username.length;
console.log("nameLength => ", nameLength);
// find the index of the "(" character
let guildNameStart = username.indexOf("(");
console.log("guildNameStart => ", guildNameStart);
// get the index before the closing ")"
let guildNameEnd = nameLength - 1;
guildName = username.substring(guildNameStart + 1, guildNameEnd);
console.log("guildName => ", guildName);
// we want to remove the guild name from the username now
let guildNameWithParenthesis = "(" + guildName + ")";
username = username.replace(guildNameWithParenthesis, "");
username = username.trim();
console.log("username => ", username);



//TEMPLATE STRINGS
let channelMessage = "username from the guildName guild has logged in.";
channelMessage = ``${username} + " from the " + ${guildName} + " guild has logged in.";
console.log(channelMessage);

let i = 35;
console.log(35++);
