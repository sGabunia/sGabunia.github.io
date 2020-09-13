const cardName = document.querySelector(".card-holder-name");
const cardNameInput = document.querySelector("#card-name");
const button = document.querySelector("button");

const expireMonth = document.querySelector(".expire-month");
const expireMonthOption = document.querySelector("#expiration-date");

const expireYear = document.querySelector(".expire-year");
const expireYearOption = document.querySelector("#expiration-year");

const cardNumbers = document.querySelectorAll(".card-number span");

const cardNumberInput = document.querySelector("#card-number");
const cvv = document.querySelector("#cvv");

// regex
const patterns = {
  cardNumber: /^[4-5][0-9]{15}?$/,
  cvv: /^[0-9]{3}$/,
};

// enter and check card number
cardNumberInput.addEventListener("keyup", () => {
  if (patterns.cardNumber.test(cardNumberInput.value)) {
    cardNumberInput.classList.add("valid");
    cardNumberInput.classList.remove("notvalid");
  } else {
    cardNumberInput.classList.add("notvalid");
  }
  for (let i = 0; i < cardNumbers.length; i++) {
    cardNumbers[i].textContent = cardNumberInput.value[i];
  }
});

// enter and check cvv
cvv.addEventListener("keyup", () => {
  if (patterns.cvv.test(cvv.value)) {
    console.log(cvv.value);
    cvv.classList.add("valid");
    cvv.classList.remove("notvalid");
  } else {
    cvv.classList.add("notvalid");
  }
});

// enter name
cardNameInput.addEventListener("keyup", (e) => {
  cardName.textContent = e.target.value;
});

// change expiration month
function changeMonth() {
  expireMonth.textContent = expireMonthOption.value;
}

expireMonthOption.addEventListener("change", changeMonth);

// change expiration year
function changeYear() {
  expireYear.textContent = expireYearOption.value;
}

expireYearOption.addEventListener("change", changeYear);
