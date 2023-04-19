
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".number-button");
  buttons.forEach(item => {
    item.addEventListener("click", (event) => getNumber(event));
  });
});

const numbers = [];
const operations = [];

function setDisplay() {
  const currentEl = document.getElementById("current");
  let result = "";
  numbers.forEach((item, index) => {
    if (index === numbers.length - 1) {
      result = result + `${item}`;
      return;
    }
    result = result + `${item} ${operations[index]}`;
  });
  console.log(result);
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

function equal() {
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
  console.log(result);
}

function del() {
  
}
