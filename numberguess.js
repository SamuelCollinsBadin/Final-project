// Generate random number between 1 and 100
let computerNumber = Math.floor(Math.random() * 100) + 1;
let guessedNumber = 0; // Variable for user's guess

// Loop to keep the game running
while (true) {
    // Prompt user to guess a number or quit
    const userInput = prompt("Guess a number between 1 and 100, or type 'I give up' to reveal the answer:");

    // Check if the user wants to give up
    if (userInput.toLowerCase() === "i give up") {
        alert(`The correct number was ${computerNumber}. Better luck next time!`);
        break; // Exit the loop
    }

    // Convert the input to a number
    guessedNumber = parseInt(userInput);

    // Check for invalid input
    if (isNaN(guessedNumber)) {
        alert("Please enter a valid number.");
    } else if (guessedNumber < 1 || guessedNumber > 100) {
        alert("The number must be between 1 and 100.");
    } else if (guessedNumber < computerNumber) {
        alert("This number is too low, try again.");
    } else if (guessedNumber > computerNumber) {
        alert("This number is too high, try again.");
    } else {
        alert("YOU GUESSED THE NUMBER! GOOD JOB!");
        break; // Exit the loop if guessed correctly
    }
}