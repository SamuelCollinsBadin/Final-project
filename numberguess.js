let ComputerNumber = Math.floor(Math.random() * 100) + 1; //generate random number 1-100
let guessedNumber = 0; //variable for user guess


//while loop to keep it repeatinng
while (guessedNumber !== ComputerNumber);
 guessedNumber = prompt ("Guess a number between 1 and 100")
 //in case number was put in wordform
 guessedNumber = parseInt(guessedNumber);

 if(isNaN(guessedNumber)) {
     alert ("Please Enter a Valid Number");
    } else if (guessedNumber <1 || guessedNumber > 100){
        alert("The Number must be between 1 and 100")
    } else if (guessedNumber < ComputerNumber){
        alert("This number is to low, try again")
    } else if (guessedNumber > ComputerNumber){
        alert("This number is to high, try again")
    } else {
        alert("YOU GUESSED THE NUMBER!, GOOD JOB")
    }


