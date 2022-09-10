"use strict";

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

document
  .querySelector(".answer-poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.resultDisplay.call({ answers: [2, 3, 4, 5, 6] });
poll.resultDisplay.call({ answers: [2, 3, 4, 5, 6] }, "string");

// last challenge of closures

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

Arrays
const accountHistory = [
  200, 100, 4000, 2200, 1200, -200, 0, -3000, 444, -22, -1112,
];
// Arrays
const balanceHistoryEl = document.querySelector(".balance-history_section");
for (const transaction of accountHistory) {
  if (transaction > 0) {
    const printDetails = `You have deposit $ ${transaction}`;
    const transactionEl = document.createElement("div");
    transactionEl.textContent = printDetails;
    balanceHistoryEl.append(transactionEl);
  } else {
    const printDetails = `You have withdrawan $ ${transaction}`;
    const transactionEl = document.createElement("div");
    transactionEl.textContent = printDetails;
    balanceHistoryEl.append(transactionEl);
  }
}

// total balance
document.querySelector(
  ".total-balance"
).textContent = `Remaining Balance: $${accountHistory.reduce((sum, value) => {
  return sum + value;
}, 0)} `;
// total balance
