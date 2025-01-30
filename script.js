const increaseBottonEl = document.querySelector(".counter__button--increase");
const counterValueEl = document.querySelector(".counter__value");
const resetBottonEl = document.querySelector(".counter__reset-button");
const decreaseBottonEl = document.querySelector(".counter__button--decrease");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

decreaseBottonEl.addEventListener("click", () => {
      const currentValue = counterValueEl.textContent;
      const currentValueAsNumber = +currentValue;
      const newValue = currentValueAsNumber - 1;
      newValue < 0
            ? (counterValueEl.textContent = 0)
            : (counterValueEl.textContent = newValue);
});

increaseBottonEl.addEventListener("click", () => {
      const currentValue = counterValueEl.textContent;
      const currentValueAsBumber = +currentValue;
      const newValue = currentValueAsBumber + 1;
      newValue > 5
            ? (counterValueEl.textContent = 5) &&
              (counterEl.style.backgroundColor = "#119abf") &&
              (counterTitleEl.textContent = "need pro version") &&
              (increaseBottonEl.disabled = true) &&
              (decreaseBottonEl.disabled = true)
            : (counterValueEl.textContent = newValue) &&
              (counterEl.style.backgroundColor = "#16c2f2");
});

resetBottonEl.addEventListener("click", () => {
      counterValueEl.textContent = 0;
      counterEl.style.backgroundColor = "#16c2f2";

      counterTitleEl.textContent = "Fancy Counter";
      increaseBottonEl.disabled = false;
      decreaseBottonEl.disabled = false;
});
