"use strict";

const diceBtn = document.querySelector(".dice-btn");
const adviceNumber = document.querySelector(".advice-num");
const adviceText = document.querySelector(".advice");
const apiUrl = "https://api.adviceslip.com/advice";

//Button click event
/*diceBtn.addEventListener("click", () => {
  //Request Data
  fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      //Inject to DOM
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
}); */

diceBtn.addEventListener('click', function() {
    // Request data
    fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
        // inject to dom
        adviceNumber.textContent = `#${dataId}`;
        adviceText.textContent = dataAdvice;
    })
})
