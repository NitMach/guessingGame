let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const textBox = document.getElementById("textBox");
const guessButton = document.getElementById("guessing");
const noOfGuesses = document.getElementById("noOfGuesses");

guessButton.onclick = function () {
  let userGuess = parseInt(textBox.value);
  console.log(userGuess);
  attempts++;

  if (userGuess === randomNumber) {
    noOfGuesses.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    noOfGuesses.style.color = "green";
    textBox.disabled = true;
  } else if (userGuess > randomNumber) {
    noOfGuesses.textContent = "📉 Too high! Try again.";
    noOfGuesses.style.color = "red";
  } else {
    noOfGuesses.textContent = "📈 Too low! Try again.";
    noOfGuesses.style.color = "blue";
  }

  textBox.value = "";
};
