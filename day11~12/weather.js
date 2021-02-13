const weather = document.querySelector(".js-weather");

const API_KEY = "a4282484e34665d5add4f83ec8197a6d";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}%units=metric`
    // fetch()안에는 가져올 데이터가 들어간다. https://를 앞에 써준다.
  )
    .then(function (response) {
      // 데이터가 우리한테 넘어왔을 때의 호출할 함수를 넣는다.
      return response.json();
    })
    .then(function (json) {
      // console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  // 위치를 가져오는데 성공하면
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //latitude: latitude,
    //longitude: longitude,
    // 객체의 변수 이름가 객체의 key의 이름을 같게 저장할 때는 한 번만 적어주어도 된다.
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  // 위치를 가져오는데 실패하면
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    // 저장된 값이 없다면
    askForCoords(); // askForCoords 함수 실행
  } else {
    const parsedCoords = JSON.parse(loadedCoords); // loadedCoords는 원래 string
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
