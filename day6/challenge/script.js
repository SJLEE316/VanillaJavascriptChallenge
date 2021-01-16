const menu = document.querySelector("select");

function refresh() {
  const countryItem = localStorage.getItem("country"); // value값 선택
  if (countryItem !== null) {
    menu.value = countryItem;
  }
}

function saveCountry() {
  const currentValue = menu.value; //  select의 value값을 currentValue에 저장
  localStorage.setItem("country", currentValue);
}

function init() {
  menu.addEventListener("change", saveCountry); // 메뉴가 바뀌면 saveCountry 실행
  refresh();
}

init();

/*
function handleOnChange(e) {
  const value = e.value;
  console.log(value);
}
*/
