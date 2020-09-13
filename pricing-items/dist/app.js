const prices = [...document.querySelectorAll(".price")];

const currency = document.querySelector("#currency");
const currencyLogo = document.querySelectorAll(".currency-logo");

const switchBall = document.querySelector(".switch-button");
const checkBox = document.querySelector("input");
const ball = document.querySelector(".ball");
const duration = [...document.querySelectorAll(".duration")];
const buttons = [...document.querySelectorAll("button")];
const boxes = document.querySelectorAll(".pricing-box");

checkBox.addEventListener("click", () => {
  console.log(checkBox.checked);
  console.log(duration);
  if (checkBox.checked) {
    switchBall.style.backgroundColor = "#357edd";
    ball.classList.add("move-ball");
    prices.forEach((item) => (item.textContent = +item.textContent * 10));
    duration.forEach((item) => (item.textContent = "annualy"));
  } else {
    switchBall.style.backgroundColor = "rgba(0, 0, 0, .1)";
    ball.classList.remove("move-ball");
    prices.forEach((item) => (item.textContent = +item.textContent / 10));
    duration.forEach((item) => (item.textContent = "monthly"));
  }
});

currency.addEventListener("change", () => {
  if (currency.value === "usd") {
    prices.map((item) => (item.textContent = +item.textContent / 3));
    currencyLogo.forEach((item) => (item.textContent = "$"));
  } else if (currency.value === "gel") {
    prices.map((item) => (item.textContent = +item.textContent * 3));
    currencyLogo.forEach((item) => (item.textContent = "ლ"));
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    boxes.forEach((box) => box.classList.remove("active"));
    e.target.parentNode.classList.add("active");
  });
});
