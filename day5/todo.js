const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn); // li>delBtn과 span
  li.appendChild(span);
  toDoList.appendChild(li); // toDoList>li
}

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 방지, enter 작동안된다
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 빈칸으로 만들자
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  } else {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
