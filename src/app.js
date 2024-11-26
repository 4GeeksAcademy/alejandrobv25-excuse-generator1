/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "Harry Potter",
    "Darth Vader",
    "Simba",
    "Rocky Balboa",
    "Indiana Jones"
  ];
  let action = [
    "corre por la jungla",
    "explora una galaxia",
    "lucha contra el mal",
    "salta entre edificios",
    "se enfrenta a un monstruo"
  ];
  let what = [
    "con un hechizo",
    "con una espada laser",
    "en una invasion alienígena",
    "en una batalla épica",
    "con una brújula mágica"
  ];
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[randomwho]} ${action[randomaction]} ${what[randomwhat]}!`;
};
