
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".number-button");
  buttons.forEach(item => {
    item.addEventListener("click", (event) => getNumber(event));
  });
});

let numbers = [];
let operations = [];

function setDisplay() {
  const currentEl = document.getElementById("current");
  let result = "";
  numbers.forEach((item, index) => {
    if (operations[index]) {
      result = result + `${item} ${operations[index]} `;
      return;
    }
    result = result + `${item}`;
  });
  currentEl.innerText = result;
}

function getNumber(event) {
  const value = Number(event.target.innerText);
  numbers.push(value);
  setDisplay();
}

function getOperation(operation) {
  operations.push(operation);
  setDisplay();
}

function cleanMemory() {
  numbers = [];
  operations = [];
}

function equal() {
  const currentEl = document.getElementById("current");
  const resultEl = document.getElementById("result");
  let result = 0;
  numbers.forEach((item, index) => {
    switch (operations[index]) {
      case "+":
        if (index === 0) {
          result = item + numbers[index + 1];
          break;
        }
        result = result + numbers[index + 1];
        break;
      case "*":
        if (index === 0) {
          result = item * numbers[index + 1];
          break;
        }
        result = result * numbers[index + 1];
        break;
      case "-":
        if (index === 0) {
          result = item - numbers[index + 1];
          break;
        }
        result = result - numbers[index + 1];
        break;
      case "/":
        if (index === 0) {
          result = item / numbers[index + 1];
          break;
        }
        result = result / numbers[index + 1];
        break;
    }
  });
  cleanMemory();
  currentEl.innerText = 0;
  resultEl.innerText = result;
}

function del() {
  if (numbers.length === operations.length) {
    operations.pop();
  } else {
    numbers.pop();
  }
  setDisplay();
}
