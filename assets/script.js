const btnShuffle = document.querySelector(".shuffle");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-number");
const toggleElements = document.querySelectorAll(".toggle");

// Fetching the data from API
const fetchData = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    toggleElements.forEach((el) => {
      el.classList.remove("toggle");
    });
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  } catch (err) {
    advice.innerHTML = err;
    toggleElements.forEach((el) => {
      el.classList.add("toggle");
    });
  }
};

// Adding event listener
window.addEventListener("load", fetchData);
btnShuffle.addEventListener("click", fetchData);
