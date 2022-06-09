var number = 5;
var chance = 5;
console.log("** Welcome to the Game **")
var name = prompt("Enter your Name");
console.log("Hai ", name , "All the Best");
// var guess_number = parseInt(prompt("Number is"));
for ( i = 0; i < chance; i++) {
    guess_number =parseInt(prompt("Enter the Number:"));
    var tries = chance - i;
    console.log("Remaining Chance are ", tries);
    console.log("Your Guessing Number: ", guess_number);
    if (guess_number == number) {
        console.log(" Your Win! Well Done");
        break;
    }
    else if (guess_number > number) {
        console.log("Your Number is Greater than Guessing Number ");
    }
    else if(guess_number < number)
    {
        console.log("Your Number is Less than Guessing Number ")
    }

}
console.log("Your Lose Better Luck Next Time ")





