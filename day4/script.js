// If, If else
/*
if (condition) {
  block;
} else {
  block;
}
*/

if (10 > 5) {
  console.log("hi");
} else {
  console.log("bye");
}

// 여러 개 쓸 수 있다.
if ("10" === 10) {
  // 항상 참이다
  console.log("hi");
} else if ("10" === "10") {
  console.log("hello");
} else {
  console.log("bye");
}

// &&, ||
if (10 > 5 && "lucy" === "lucy") {
  // && : 모두 참
  console.log("hi");
} else {
  console.log("bye");
}

if (10 > 5 || "lucy" === "lucy") {
  // || : 하나만 참
  console.log("hi");
} else {
  console.log("bye");
}

/*
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
*/

/* 계속 열려서 주석처리함
const age = prompt("How old are you?"); 

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
*/

// 자바스크립트에서 css 작업하기
const title = document.querySelector("#title");

/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
*/

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
  const currentClass = title.className;
  if (currentClass != CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}
*/

function handleClick() {
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
  */
  // 더 간단하게 써보자
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
