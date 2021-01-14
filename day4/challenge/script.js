// #914EAD 보라색
// #EEBC12 노란색
// #2E8CD5 파란색

function changeColor() {
  let width = window.innerWidth;
  if (width < 500) {
    document.body.style.backgroundColor = "#914EAD";
    console.log("purple");
  } else if (width > 800) {
    document.body.style.backgroundColor = "#EEBC12";
    console.log("peru");
  } else {
    document.body.style.backgroundColor = "#2E8CD5";
    console.log("skyblue");
  }
}

function init() {
  window.addEventListener("resize", changeColor); // resize되었을 때 changeColor 함수 호출
  changeColor(); // 처음 브라우저가 실행되었을 때부터 작동
}

init();
