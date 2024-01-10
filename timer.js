let input = document.getElementById("number");
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
    // if (input.value < 9 && input.value >= 0) {
    //   input.value = `0${Number(input.value) + 1}`;
    // } else {
    //   input.value = `${Number(input.value) + 1}`;
    // }
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
  setTimeout(() => {
    
  }, 1 * 1000);
});
