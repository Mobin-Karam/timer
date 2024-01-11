let input = document.getElementById("number");
let boxSec = document.querySelector(".box-sec");
let boxSecond;
const buttonIncrement = document.querySelector(".increment");
const buttonDecrement = document.querySelector(".decrement");
const buttonStart = document.querySelector(".start");

buttonIncrement.addEventListener("click", () => {
  if (!(input.value === "99")) {
    if (input.value < 9 && input.value >= 0) {
      input.value = `0${Number(input.value) + 1}`;
    } else {
      input.value = `${Number(input.value) + 1}`;
    }
  } else {
    input.value = "00";
  }
});

buttonDecrement.addEventListener("click", () => {
  if (!(input.value === "00")) {
    if (input.value < 11 && input.value >= 0) {
      input.value = `0${Number(input.value) - 1}`;
    } else {
      input.value = `${Number(input.value) - 1}`;
    }
  } else {
    input.value = "100";
    if (input.value < 11 && input.value >= 0) {
      input.value = `0${Number(input.value) - 1}`;
    } else {
      input.value = `${Number(input.value) - 1}`;
    }
  }
});

buttonStart.addEventListener("click", () => {
  boxSec.textContent = input.value;
  //   boxSecond = boxSec.textContent;

  setInterval(() => {
    console.log("start");
    boxSecond = boxSec.textContent;
    if (!(boxSecond === "00")) {
      if (input.value < 11 && input.value >= 0) {
        boxSec.textContent = `0${Number(boxSecond) - 1}`;
      } else {
        boxSec.textContent = `${Number(boxSecond) - 1}`;
      }
    }
  }, 1 * 1000);
  console.log(Number(input.value))
  console.log(clearInterval())

  console.log(boxSec.textContent);
});
