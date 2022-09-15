"use strict"

// const greetFunc = function (greeting) {
//   return function (userName) {
//     console.log(`${greeting} ${userName}`);
//   };
// };

// const defaultGreeting = greetFunc("Namaste");
// defaultGreeting("rehman");

// with arr func
// const greetingarr = (greet) => (userName) => {
//   const welcomeString = greet + " " + userName;
//   const WelocmeEl = document.querySelector(".user_name");
//   WelocmeEl.textContent = welcomeString;
// };

// greetingarr("Welcome")("Rehman");

// // Call / Bind / apply Methods
// const moviesTicket = {
//   moviesName: "Spiderman No Way Home",
//   bookings: [],
//   book(SeatNumber, userName) {
//     console.log(
//       `${userName} has booked the ticket of ${this.moviesName} with the Seat No (${SeatNumber})`
//     );
//     this.bookings.push({
//       Movie: `${this.moviesName}`,
//       SeatNumber,
//       userName,
//     });

//     console.log(this.bookings);
//   },
// };

// const movieBookingEngine = moviesTicket.book;

// moviesTicket.book("33B", "rehman");
// moviesTicket.book("777A", "shoyaib");

// const Joker = {
//   moviesName: "Joker",
//   bookings: [],
// };
// const harryPotter = {
//   moviesName: "Harry Potter The Globlet of Fire",
//   bookings: [],
// };
// const harryPotterData = ["22C", "Mannan"];

// // example of Call method
// const firozBooking = ["55R", "Firoz"];
// movieBookingEngine.call(Joker, "44A", "firoz");
// movieBookingEngine.call(harryPotter, ...firozBooking);

// // apply method
// movieBookingEngine.apply(harryPotter, harryPotterData);
// // Call / Bind / apply Methods

// const TaxCalc = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const Vat = TaxCalc(2);

// const TaxResult = Vat(400);
// const TaxElement = document.querySelector(".user_name");

// TaxElement.textContent = TaxResult;

// const itemInBucket = {
//   item: "MacBook Pro",
//   actualPrice: 200000,
//   discountedPrice: 100000,
//   tax: 18,
// };

// document.querySelector(".item-name").textContent = itemInBucket.item;
// document.querySelector(".actual-price").textContent = itemInBucket.actualPrice;

// const discount = itemInBucket.actualPrice - itemInBucket.discountedPrice;

// document.querySelector(".discounted-price").textContent = discount;

// const totalTax = (itemInBucket.tax / 100) * itemInBucket.discountedPrice;
// document.querySelector(".tax").textContent = totalTax;
// document.querySelector(".sub-total").textContent = discount + totalTax;

// // closer look at func's last challenge
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // get Answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n (Write option number)`
//       )
//     );

//     // register answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.resultDisplay();
//     this.resultDisplay("string");
//   },
//   resultDisplay(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(",")}`);
//     }
//   },
// };

// document
//   .querySelector(".answer-poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.resultDisplay.call({ answers: [2, 3, 4, 5, 6] });
// poll.resultDisplay.call({ answers: [2, 3, 4, 5, 6] }, "string");

// // last challenge of closures

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.body.addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// Arrays;
// const accountHistory = [
//   200, 100, 4000, 2200, 1200, -200, 0, -3000, 444, -22, -1112,
// ];
// // Arrays
// const balanceHistoryEl = document.querySelector(".balance-history_section");
// for (const transaction of accountHistory) {
//   if (transaction > 0) {
//     const printDetails = `You have deposit $ ${transaction}`;
//     const transactionEl = document.createElement("div");
//     transactionEl.textContent = printDetails;
//     balanceHistoryEl.append(transactionEl);
//   } else {
//     const printDetails = `You have withdrawan $ ${transaction}`;
//     const transactionEl = document.createElement("div");
//     transactionEl.textContent = printDetails;
//     balanceHistoryEl.append(transactionEl);
//   }
// }

// // total balance
// document.querySelector(
//   ".total-balance"
// ).textContent = `Remaining Balance: $${accountHistory.reduce((sum, value) => {
//   return sum + value;
// }, 0)} `;
// total balance

// Arrays first challenge
// const testCaseOne = {
//   JuliasData: [3, 5, 2, 12, 7],
//   KatesData: [4, 1, 15, 8, 3],
// };
// const testCaseTwo = {
//   JuliasData: [9, 16, 6, 8, 3],
//   KatesData: [10, 5, 6, 1, 4],
// };

// const checkDogs = function (dogsJulia, dogsKate) {
//   // console.log(dogsJulia);
//   const shallowCopy = dogsJulia;
//   shallowCopy.splice(0, 1);
//   shallowCopy.splice(-2);
//   // console.log(shallowCopy);

//   const filterdData = [...dogsJulia, ...dogsKate];
//   console.log(filterdData);

//   filterdData.forEach(function (ages, index) {
//     if (ages < 3) {
//       console.log(
//         `Puppy number ${index + 1} is still a Puppy with the age of ${ages}`
//       );
//     } else {
//       console.log(
//         `Dog number ${index + 1} is an Adult with the age of ${ages}`
//       );
//     }
//     console.log(`----------------------------------`);
//   });
// };
// checkDogs(testCaseTwo.JuliasData, testCaseTwo.KatesData);
// checkDogs(testCaseTwo.JuliasData, testCaseTwo.KatesData);
// Arrays first challenge

// reduce method
// const max = accountOne.movements.reduce((acc, mov) => {
//   if (acc > mov) return acc
//   else return mov
// }, accountOne.movements[0])

// console.log(max)
// console.log(accountOne.movements)

// function calcAverageHumanAge(dogAge) {
//   const humanAge = dogAge.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//   const adults = humanAge.filter((age) => age >= 18)

//   const average = adults.reduce((acc, value) => acc + value, 0) / adults.length
//   return average
// }

// const averageData1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const averageData2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// console.log(averageData1, averageData2)

// coding challenge #3
// const calcAverageHumanAge = (dogAge) => {
//   const humanAge = dogAge
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((adults) => adults >= 18)
//     .reduce((totalAges, age, i, arr) => totalAges + age / arr.length, 0)
//   return humanAge
// }

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// coding challenge #3

// Bankist Project

// Elements
const bankistApp = document.querySelector(".app")
const balance = document.querySelector(".balance")
const availableBalance = document.querySelector(".available-balance")
const movementsContainer = document.querySelector(".movements")
const userActions = document.querySelector(".user-actions")
const cashflowFeature = document.querySelector(".cashflow_feature")
const loginBTN = document.querySelector(".submit-credentials")
const userNameInput = document.querySelector(".username")
const passWordInput = document.querySelector(".userPin")
const TransferBtn = document.querySelector(".send-money")
const receiverName = document.querySelector(".receiver-name")
const transferAmount = document.querySelector(".transfer-amount")
const deleteUserName = document.querySelector(".del-acc-user")
const deleteUserPin = document.querySelector(".del-acc-pin")
const deleteAccountBtn = document.querySelector(".deactivate-account")
const LoanRequestBtn = document.querySelector(".request-loan")
const LoanRequestInput = document.querySelector(".loan-request_input")
// Elements

// users
const accountOne = {
  user: "Rehman tyagi",
  movements: [
    200, 100, 400, -499, -993, 22, 1222, -2999, 35000, 3933, -222, -111, -2300,
    -2000, 34000,
  ],
  interest: 2,
  pin: 5555,
}
const accountTwo = {
  user: "shoyaib tyagi",
  movements: [
    200, 100, 4800, -4199, -9913, 22, 12522, -29799, 3500, 39334, -22, -11,
    -200, -200, 3400,
  ],
  interest: 3,
  pin: 9971,
}
const accountThree = {
  user: "Mannan tyagi",
  movements: [
    500, 100, 600, -4909, -9093, 202, 122, -29909, 3500, 333, -2022, -1011,
    -23100, -20000, 340000,
  ],
  interest: 1.5,
  pin: 1200,
}

const totalAccounts = [accountOne, accountThree, accountTwo]

const movementsFunc = function (acc) {
  acc.movements.forEach(function (mov, index) {
    const transactionType = mov > 0 ? "Deposit" : "Withdrawal"
    const movementsHTML = `<div class="transaction-movements">
    <div class="transaction">
      <span class="${transactionType} transaction-type">${
      index + 1
    } ${transactionType}</span>
      <span class="transaction-date">12/05/2022</span>
    </div>
    <div class="transaction-amount">$${Math.abs(mov)}</div>
  </div>`
    movementsContainer.insertAdjacentHTML("afterbegin", movementsHTML)
  })

  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  availableBalance.innerHTML = `$${acc.balance}`
}
const userNameCreation = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.user
      .toLowerCase()
      .split(" ")
      .map((shortName) => shortName[0])
      .join("")
  })
}
userNameCreation(totalAccounts)
// users

const displayUserSummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, item) => acc + item, 0)
  document.querySelector(".user-income").textContent = `IN $${income}`

  const redeem = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, item) => acc + item, 0)
  document.querySelector(".redeem").textContent = `OUT $${Math.abs(redeem)}`

  const interest = acc.movements
    .filter((deposit) => deposit > 0)
    .map((deposit) => Math.floor((deposit * acc.interest) / 100))
    .filter((int) => {
      return int >= 1
    })
    .reduce((int, value) => int + value, 0)
  document.querySelector(".user-interest").textContent = `INTEREST $${interest}`
}

// user dashboard data
function updateUI(acc) {
  movementsFunc(acc)
  displayUserSummary(acc)
}

// User login engine

let loggedUser
loginBTN.addEventListener("click", function () {
  loggedUser = totalAccounts.find((acc) => acc.username === userNameInput.value)

  if (loggedUser?.pin === Number(passWordInput.value)) {
    // welcoming message
    document.querySelector(".welcome-message").textContent = `Welcome Back, ${
      loggedUser.user.split(" ")[0]
    }`

    // clear input forms
    userNameInput.value = passWordInput.value = ""
    passWordInput.blur()

    // display user dashboard
    document.querySelector(".app").style.opacity = 1
  } else {
    alert("please enter correct Pin and Username")
    userNameInput.value = passWordInput.value = ""
  } // upadte user dashboard
  updateUI(loggedUser)
})
// Money Transfer feature
TransferBtn.addEventListener("click", function () {
  const amount = transferAmount.value
  const Receiver = totalAccounts.find(
    (acc) => acc.username === receiverName.value
  )
  if (
    amount > 0 &&
    Receiver &&
    loggedUser.balance >= transferAmount.value &&
    Receiver.username !== loggedUser.username &&
    transferAmount.value > 0
  ) {
    // success alert box
    alert("Money has Transfered")

    // user tranfers balance
    loggedUser.movements.push(Number(-amount))
    Receiver.movements.push(Number(amount))

    // upadte user dashboard
    updateUI(loggedUser)
  } else {
    if (!Receiver?.username) alert("user does not exist")
    else if (transferAmount.value > loggedUser.balance)
      alert("Amount is grater than your balance")
  }
  if (transferAmount.value <= 0 || loggedUser.username === Receiver.username)
    alert("Amount is not transferrable")
})
// delete account feature
deleteAccountBtn.addEventListener("click", function () {
  if (
    loggedUser.username === deleteUserName.value &&
    loggedUser.pin === Number(deleteUserPin.value)
  ) {
    const indexOfAccount = totalAccounts.findIndex(
      (acc) => acc.username === loggedUser.username
    )

    totalAccounts.splice(indexOfAccount, 1)
    document.querySelector(".app").style.opacity = 0
  }
})
// Loan requesting feature
LoanRequestBtn.addEventListener("click", function () {
  const LoanAmount = Number(LoanRequestInput.value)
  if (LoanAmount <= 5000 && LoanAmount > 0) {
    loggedUser.movements.push(LoanAmount)
    alert("Loan Amount Added")
    // update UI
    updateUI(loggedUser)
  } else alert("Value is not considerable")
  if (LoanAmount > 5000) alert("Amount is greater than your limit")
})

// Bankist Project
