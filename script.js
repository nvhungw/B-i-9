//Lấy 2 ô input
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let resultElement = document.getElementById('result');
let congBtn = document.getElementById('congBtn');
let truBtn = document.getElementById('truBtn');

//Viết hàm Cộng+
// function add() {
//   let first = +firstNumber.value; //Thêm dấu + để đổi sang dạng số
//   let second = +secondNumber.value; //Thêm dấu + để đổi sang dạng số
//   let result = first + second;
//   resultElement.innerText = `${first} + ${second} = ${result}`;
// }

//Hoặc có thể viết hàm Cộng+ như này (bỏ onclick ở button Cộng+) Nên dùng cách này
congBtn.addEventListener(
  'click',
  function () //Bao gồm: click, change, keypress, keyup, keydown
  {
    let first = +firstNumber.value; //Thêm dấu + để đổi sang dạng số
    let second = Number(secondNumber.value); //Thêm Number() để đổi sang dạng số
    let result = first + second;
    resultElement.innerText = `${first} + ${second} = ${result}`;
  }
);

// //Viết hàm Trừ-
// function tru() {
//   let first = +firstNumber.value; //Thêm dấu + để đổi sang dạng số
//   let second = +secondNumber.value; //Thêm dấu + để đổi sang dạng số
//   let result = first - second;
//   resultElement.innerText = `${first} - ${second} = ${result}`;
// }

truBtn.addEventListener(
  'click',
  function () //Bao gồm: click, change, keypress, keyup, keydown
  {
    let first = +firstNumber.value; //Thêm dấu + để đổi sang dạng số
    let second = Number(secondNumber.value); //Thêm Number() để đổi sang dạng số
    let result = first - second;
    resultElement.innerText = `${first} - ${second} = ${result}`;
  }
);
