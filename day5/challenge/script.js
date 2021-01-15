// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const toToday = Date.now(); // 지금 : 밀리초로 바꾼다
  const toXmas = Date.parse(xmasDay); // xmas까지의 시간을 밀리초로 바꾼다
  const gap = toXmas - toToday;
  const days = Math.floor(gap / (60 * 60 * 24 * 1000));
  const hours = Math.floor((gap % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
  const minutes = Math.floor(
    ((gap % (60 * 60 * 24 * 1000)) % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (((gap % (60 * 60 * 24 * 1000)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000
  );

  clockTitle.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
