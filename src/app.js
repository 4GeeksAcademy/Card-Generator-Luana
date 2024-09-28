/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let customHeigth = 400;
let intervalId;
window.onload = function() {
  document.querySelector("button").addEventListener("click", generarCartaNueva);
  document.querySelector("#button-1").addEventListener("click", () => {
    intervalId = setInterval(generarCartaNueva, 10000);
  });
  document.querySelector("#button-2").addEventListener("click", () => {
    clearInterval(intervalId);
  });
  document.querySelector("#input-heigth").addEventListener("change", event => {
    customHeigth = event.target.value;
    document.querySelector(".card").style.heigth = customHeigth + "px";
  });
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  function generarCartaNueva() {
    let cardPintas = ["♦", "♥", "♠", "♣"];
    function elegirAleatorio(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    const valorAleatorio = elegirAleatorio(cardValues);
    document.querySelector(".value").innerHTML = valorAleatorio;
    const pintaAleatoria = elegirAleatorio(cardPintas);
    document.querySelectorAll(".pinta").forEach(elementoPinta => {
      elementoPinta.innerHTML = pintaAleatoria;
      if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
        elementoPinta.style.color = "red";
      } else {
        elementoPinta.style.color = "black";
      }
    });
  }
  generarCartaNueva();
};
