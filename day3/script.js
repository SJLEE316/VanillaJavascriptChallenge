// 1. Function
function sayHello(name, age) {
  // arguments
  console.log("Hello!", name, "you have", age, "years old.");
  console.log(`Hello! ${name} you have ${age} years old.`); // more easy
  return `Hello! ${name} you have ${age} years old.`;
}

const greetLucy = sayHello("Lucy", 20);
// greetLucy는 sayHello 함수의 리턴 값이랑 같다.
// greetLucy는 sayHello 함수의 리턴값이다.

console.log(greetLucy); // undefined이 나온다. -> return값(반환값)이 없기 때문이지! 6째줄 추가!

// 2. 객체를 만들자
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  remainder: function (a, b) {
    return a % b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiple = calculator.multiple(5, 5);
const divide = calculator.divide(5, 5);
const remainder = calculator.remainder(5, 5);
const power = calculator.power(5, 5);
// console.log와 calculator.plus는 비슷하다.
// console, calculator 두 개 다 모두 객체이고 log(), plus()는 인자를 가지는 함수이고
console.log(plus, minus, multiple, divide, remainder, power);

// 3. HTML을 바꿀 수 있다!!
const title = document.getElementById("title");
// const title = document.querySelector("#title");
console.log(title); //   <h1 id="title">this works</h1>
title.innerHTML = "Hi. I'm JS"; // HTML을 바꿀 수 있다.
title.style.color = "red";
document.title = "I owned you.";
console.log(document);

// 4. Event
function handleResize() {
  console.log("I have been resized");
}
window.addEventListener("resize", handleResize()); // 즉시 호출

function handleResize2(event) {
  // JS에서 온 event
  // 이벤트를 다룰 함수를 만들 때마다 JS는 자동적으로 함수를 개체에 붙인다
  console.log(event);
}
window.addEventListener("resize", handleResize2);

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);
