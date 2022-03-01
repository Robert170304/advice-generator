"use strict";

const diceBtn = document.querySelector(".dice-btn");
const adviceNumber = document.querySelector(".advice-num");
const adviceText = document.querySelector(".advice");
const apiUrl = "https://api.adviceslip.com/advice";

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
