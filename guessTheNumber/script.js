let inp = document.querySelector("input");
let btn = document.querySelector("button");
let guesses = document.getElementById("guesses");
let wrng = document.querySelector(".wrng"); 
let pre = document.getElementById("pre"); // Corrected the id name to "pre"
let ans = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;
let guessedNumbers = []; // Array to store guessed numbers

btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    if (inp.value < 1 || inp.value > 100 || isNaN(inp.value)) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    }
    else {
        numGuesses++;
        guesses.innerHTML = "No. of Guess: " + numGuesses;
        guessedNumbers.push(inp.value); // Store the guessed number in the array
        if (inp.value > ans) {
            wrng.innerHTML = "You guessed too high";
        }
        else if (inp.value < ans) {
            wrng.innerHTML = "You guessed too low";
        }
        else {
            wrng.innerHTML = "Congratulations! You guessed the right answer";
            return;
        }
        pre.innerHTML = "Guessed Numbers: " + guessedNumbers.join(", "); // Update the <pre> element with guessed numbers
        inp.value = ""; // Clear the input field
    }
}
