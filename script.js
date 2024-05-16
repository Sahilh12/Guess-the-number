const input = document.querySelector("input");
const submitBtn = document.querySelector(".submit");
const newGameBtn = document.querySelector(".new-game");
const userResult = document.querySelector(".user-result");
const guessedNumbers = document.querySelector(".guessed-numbers");
const form = document.querySelector("form");

function a() {
  let numbers = [];
  let compGuess = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputVal = input.value;
    numbers.push(inputVal);
    if (compGuess < inputVal) {
      userResult.innerText = "too high !";
    } else if (compGuess > inputVal) {
      userResult.innerText = "too low !";
    } else {
      userResult.innerText = "You guessed it, Congratsss !";
      newGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    guessedNumbers.innerText = `Your guesses : ${numbers.join(", ")}`;
    form.reset();
  });

  newGameBtn.addEventListener("click", () => {
    submitBtn.disabled = false;
    newGameBtn.disabled = true;
    let compGuess = Math.round(Math.random() * 100);
    numbers = [];
    userResult.innerText = "";
    guessedNumbers.innerText = "";
  });
}

a();
