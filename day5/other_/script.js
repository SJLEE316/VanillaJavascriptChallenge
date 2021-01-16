// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const h2 = document.querySelector("h2");
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const gap = xmasDay - today;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);
  h2.innerText = `${day > 9 ? day : `0${day}`}d ${
    hours > 9 ? hours : `0${hours}`
  }h ${minutes > 9 ? minutes : `0${minutes}`}m ${
    seconds > 9 ? seconds : `0${seconds}`
  }s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
