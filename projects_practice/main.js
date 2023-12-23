const form = document.querySelector("form");
const guessValue = document.querySelector("#guess-value");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#remaining");
const lowOrHigh = document.querySelector(".lowOrHigh");
const btnDiv = document.querySelector("#btn-div");

let playGame = true;
let prevGuess = [];
let numOfGuess = 1;
let button = document.createElement("button");
let randomNumber = Math.round(Math.random() * 100 + 1);

if (playGame) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let guess = parseInt(guessValue.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 0 || guess > 100) {
    alert("Please Enter a Number Between 1 and 100");
  } else {
    prevGuess.push(guess);

    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is too high`);
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is too low`);
  }
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `${message}`;
}

function displayGuess(guess) {
  guessValue.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess}`;
}

function newGame() {
  const newGame = document.querySelector("#new-game");

  newGame.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guessValue.innerHTML = "";
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numOfGuess}`;
    prevGuess = [];
    numOfGuess = 1;
    guessValue.removeAttribute("disabled");
    btnDiv.removeChild(button);

    console.log("new game");

    playGame = true;
  });
}

function endGame() {
  guessValue.value = "";
  guessValue.setAttribute("disabled", "");
  button.setAttribute("class", "text-xl px-4 py-2 bg-yellow-500 rounded-xl");
  button.setAttribute("id", "new-game");
  button.innerText = "Start new game";
  btnDiv.appendChild(button);
  playGame = false;

  newGame();
}
