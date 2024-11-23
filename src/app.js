/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Jack Sparrow", "Barbossa", "Will Turner", "Calypso"];
  let action = ["me robó", "secuestró", "encontró"];
  let what = ["la Perla Negra", "el mapa", "el tesoro"];

  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[randomwho]} ${action[randomaction]} ${what[randomwhat]}!`;
};
