#! usr/bin/env node 
import inquirer from "inquirer";
console.log(" Welcome To CodeWithHassaan - CLI NUmber Guessing Game ");
// 1) Computer will generate a Random Number
// 2) User will input their own choice number
// 3) Compare user input and Computer Generated Random Number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please Guess a Number Between 1 to 6 :",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! You Guessed a Right Number");
}
else if (answer.userGuessedNumber > 6) {
    console.log("please Enter Number Below Or Equal To 6");
}
else {
    console.log("You Guessed a Wrong Number");
}
