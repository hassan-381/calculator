// const digits = document.querySelectorAll(".digit");
// const display = document.getElementById("inputbox");

// console.log(digits);

// for (let i = 0; i < digits.length; i++) {
//   const digit = digits[i];

//   digit.addEventListener("click", function (e) {
//     const digitValue = e.target.textContent;
//     console.log(digitValue);

//     if (display.textContent == "0") {
//       display.textContent = digitValue;
//     } else {
//       display.textContent = display.textContent + digitValue;
//     }
//   });
// }

// const equal = document.getElementById("equalbtn");

// equal.addEventListener("click", function () {
//   const calculated = eval(display.textContent);

//   console.log(calculated);

//   display.textContent = calculated;
// });

const digits = document.querySelectorAll(".digit");
const display = document.getElementById("inputbox");
console.log("digit");

for (let i = 0; i < digits.length; i++) {
  const digit = digits[i];
  digit.addEventListener("click", function (e) {
    const digitValue = e.target.textContent;
    console.log(digitValue);

    if (display.textContent == "0") {
      display.textContent = digitValue;
    } else {
      display.textContent = display.textContent + digitValue;
    }
  });
}
// Equal btn
const equal = document.getElementById("equalbtn");
equal.addEventListener("click", function () {
  const calculated = eval(display.textContent);
  console.log(calculated);
  display.textContent = calculated;
});
// Ac
const Ac = document.getElementById("Ac");
Ac.addEventListener("click", function () {
  display.textContent = "0";
});
// Del\
const Del = document.getElementById("Del");
Del.addEventListener("click", function () {
  display.textContent = display.textContent.slice(0, -1);

  if (display.textContent == "") {
    display.textContent = "0";
  }
});
