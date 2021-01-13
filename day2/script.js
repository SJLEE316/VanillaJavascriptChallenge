// Let
let a = 221; // a 생성하고 숫자 221로 초기화한 것(동시에 가능)
let b = a - 5; // a 사용
a = 4; // a를 바꿀 수 있다. let을 사용하지 않고 update만 해주었다
console.log(b, a); // 216 4

// Const
const c = 221;
let d = c - 5;
// c = 4; // a는 상수이기 때문에 바꿀 수 없다 -> error
console.log(c, d); // 221 216

// Var
var e = 221;
var f = e - 5;
e = 4;
console.log(e, f); // 4 216

// String
const string = "Lucy"; // Text 저장(이모티콘도 가능)
console.log(string);

// Boolean
const boolean = true; // 모두 소문자로 쓰고 ""안에 쓰지 않는다

// Number
const number = 666;

// Float
const float = 55.1;

// Array
const something = "Something"; // 이렇게도 데이터를 넣을 수 있다
const daysOfWeek = ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun", true, something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]); // Wed : 0부터 센다

// Object
const lucyInfo = {
  name: "Lucy",
  age: "24",
  gender: "Female",
  isPretty: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"], // favMovies Object 안에 Array가 있다.
  favFood: [
    // favFood Object 안에 Array가 있고, 그 안에 Object가 있다.
    {
      name: "Kimchi",
      fatty: false,
    },
    {
      name: "Cheese Burger",
      fatty: true,
    },
  ],
};

console.log(lucyInfo);
console.log(lucyInfo.favFood[0].name); // kimchi
