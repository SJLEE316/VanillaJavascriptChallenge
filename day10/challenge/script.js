const title = document.querySelector(".js-title"),
  number = document.getElementById("number"),
  range = document.getElementById("js-range"),
  guessForm = document.getElementById("js-guess"),
  result = document.getElementById("js-result");

function handleGuess(e) {
  e.preventDefault();
  // random Number
  const max = range.value;
  const randomNum = Math.ceil(Math.random() * max);

  // user Number
  const inputNum = guessForm.querySelector("input");
  const yourNum = inputNum.value;

  // compare
  const realResult = result.querySelector("span");
  realResult.innerHTML = `You chose: ${yourNum}, the machine chose: ${randomNum}.<br> <strong> ${
    yourNum === randomNum ? "You won!" : "You lost!"
  }</strong>`;
}

function handleRange() {
  const userMax = title.querySelector("span");
  userMax.innerHTML = range.value;
}

range.addEventListener("input", handleRange);
guessForm.addEventListener("submit", handleGuess);
