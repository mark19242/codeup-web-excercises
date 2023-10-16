// Generate a random number between 1 and 100 (inclusive)
const targetNumber= Math.floor(Math.random() * 100) + 1;




// Initialize the number of attempts
let attempts = 1;
document.getElementById("submitGuess").onclick= function (){
// Function to handle the user's guess
     let checkGuess = ;

     if (checkGuess === targetNumber) {


        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + attempts + " GUESS ");
    }

    /* If guessed number is greater than actual number*/
    else if (checkGuess > targetNumber) {
        attempts++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        attempts++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
};

const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
console.log(checkGuess(3));




