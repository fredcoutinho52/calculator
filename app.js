
document.addEventListener("DOMContentLoaded", () => {
  setDisplay();

  const buttons = document.querySelectorAll(".number-button");
  buttons.forEach(item => {
    item.addEventListener("click", (e) => getNumber(e));
  });
});

const data = {
  num: 0,
  nextNum: 0,
  operation: "",
}

function setDisplay() {
  const display = document.querySelector(".display");
  display.innerText = data.num;
}

function getNumber(event) {
  const value = Number(event.target.innerText);
  
  if (data.num !== 0) {
    data.nextNum = value;
    setDisplay();
    return;
  }
  
  data.num = value;
  setDisplay();
}

function sum() {
  data.operation = "+";

  if (data.num !== 0 && data.nextNum !== 0) {
    console.log(data.num + data.nextNum);
    data.num = data.num + data.nextNum;
    return;
  }
}

function sub() {
  data.operation = "-";
}

function times() {
  data.operation = "*";
}

function divide() {
  data.operation = "/";
}

function equal() {
  data.operation = "=";
}

function del() {
  
}
