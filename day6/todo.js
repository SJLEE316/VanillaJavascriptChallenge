const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // 배열로 나타낸다. 추가된다.

function deleteToDo(event) {
  // console.log(event); // 어떤 버튼이 눌렸는지 모른다.
  // console.log(event.target); // 부모가 누군지 모른다. 버튼의 부모는 <li>태그!
  // console.dir(event.target); // parentNode를 찾았다.
  // console.log(event.target.parentNode); // 이제 누가 삭제되는지 알 수 있다.
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // 새로고침하면 다시 생긴다...!
  const cleanToDos = toDos.filter(function (toDo) {
    // 모든 아이템을 통해 함수를 실행하고 true를 return하는 아이템들이 있는 배열을 만든다
    // console.log(toDo.id, li.id); // number, string -> number로 변환해서 배열에 넣는다.
    return toDo.id !== parseInt(li.id); // 아닌 것들만 반환해서 배열을 만든다.
  });
  // console.log(cleanToDos);
  toDos = cleanToDos; // toDos는 예전의 것, cleanToDos는 새로운 것
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // toDos만 쓰면 object로 저장된다.
  // localStorage는 string으로 저장하기 때문에 object를 string으로 바꿔주어야한다. -> JSON.stringify
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); // 클릭하면 deleteTodo함수 호출
  span.innerText = text;
  li.appendChild(delBtn); // li>delBtn과 span
  li.appendChild(span);
  li.id = newId; // delete 기능을 추가할 때 무엇을 지우는지 알아야한다 -> id 설정
  toDoList.appendChild(li); // toDoList>li
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // ToDos안에 ToDoObj를 넣는다
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 방지, enter 작동안된다
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 빈칸으로 만들자
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    // console.log(loadedToDos); // String
    // JSON -> JavaScript Object Notation : 데이터를 전달할 때, 자바스크립트가 다룰 수 있도록 object<->string으로 바꿔주는 기능
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      // array에 담겨있는 것들을 각각 한 번씩 함수를 실행시킨다
      // console.log(toDo.text);
      paintToDo(toDo.text);
    });
  } else {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
