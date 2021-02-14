const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

let resultBtnValue = result.value;

let number = "";
let nextNumber = "";
let operator = "";
let currentValue = 0;
let memoryValue = 0;

function handleReset() {
  number = "";
  nextNumber = "";
  currentValue = 0;
  memoryValue = 0;
  operator = "";
  result.innerText = "0";
}

function handleEqual() {
  console.log(memoryValue, currentValue);
  result.innerText = `${memoryValue}`;
}

function handleOperator(event) {
  const operatorBtn = event.target;
  let operatorValue = operatorBtn.value;
  number = "";
  nextNumber = "";
  if (operator === "") {
    memoryValue = currentValue;
    operator = `${operatorValue}`;
    currentValue = 0;
  } else if (operator === "=") {
    operator = `${operatorValue}`;
  } else {
    switch (operator) {
      case "+":
        memoryValue = currentValue + memoryValue;
        operator = `${operatorValue}`;
        result.innerText = `${memoryValue}`;
        currentValue = 0;
        break;

      case "-":
        memoryValue = memoryValue - currentValue;
        operator = `${operatorValue}`;
        result.innerText = `${memoryValue}`;
        currentValue = 0;
        break;

      case "*":
        memoryValue = memoryValue * currentValue;
        operator = `${operatorValue}`;
        result.innerText = `${memoryValue}`;
        currentValue = 0;
        break;

      case "/":
        memoryValue = memoryValue / currentValue;
        operator = `${operatorValue}`;
        result.innerText = `${memoryValue}`;
        currentValue = 0;
        break;
    }
  }
}

function paintNumber(event) {
  const numberBtn = event.target;
  const numberValue = numberBtn.value;
  nextNumber = numberValue;
  number = number + nextNumber;
  resultBtnValue = number;
  result.innerText = number;
  currentValue = parseInt(number);
}

numberBtns.forEach(function (numberBtn) {
  numberBtn.addEventListener("click", paintNumber);
});
operatorBtns.forEach(function (operatorBtn) {
  operatorBtn.addEventListener("click", handleOperator);
});
reset.addEventListener("click", handleReset);
equal.addEventListener("click", handleOperator);
