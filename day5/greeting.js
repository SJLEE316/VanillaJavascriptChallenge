const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser_apple", //소스 검사에서 나오는 값.
  // 예를 들어 const USER_LC = "apple"이면 소스 검사에 apple이라고 뜬다.
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  // localStorage.setItem("lucy", "true") 하면 lucy는 key, true는 value로 저장된다.
  // lovalStorage.getItem("lucy") 하면 true값이 나온다.
  if (currentUser === null) {
    // she is not
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
