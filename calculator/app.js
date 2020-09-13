class Calculator {
  constructor(prevNumber, currentNumber) {
    this.prevNumber = prevNumber;
    this.currentNumber = currentNumber;
    this.currentOperand = "";
    this.previousOperand = "";
    this.operationType = "";

    // this.clear();
  }

  clear() {
    this.currentNumber.innerText = "0";
    this.prevNumber.innerText = "";
    this.currentOperand = "";
    this.previousOperand = "";
    this.operationType = "";
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    if (this.currentOperand === "0") {
      return;
    }
    if (this.currentOperand.length > 17) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  operation(op) {
    if (this.currentOperand === "") {
      return;
    }

    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operationType = op;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    console.log(this.operationType);
    switch (this.operationType) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;

      default:
        return;
    }
    this.currentOperand = result;
    this.operationType = "";
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentNumber.innerText = this.currentOperand;
    if (this.operationType !== null) {
      this.prevNumber.innerText = `${this.previousOperand} ${this.operationType}`;
    }
  }
}

const numButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operation");
const equalButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const prevNumber = document.querySelector(".previous-num");
const currentNumber = document.querySelector(".current-num");

const calculator = new Calculator(prevNumber, currentNumber);

function addNumbers(e) {
  calculator.appendNumber(e.target.innerText);
  calculator.updateDisplay();
}
numButtons.forEach((button) => {
  button.addEventListener("click", addNumbers);
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calculator.clear();
});
