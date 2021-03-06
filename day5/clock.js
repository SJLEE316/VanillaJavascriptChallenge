const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// 시계 만들기
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // 1초마다 업데이트 되어서 시계처럼 작동
}

init();
