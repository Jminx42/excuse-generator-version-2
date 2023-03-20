/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "His turtle", "My bird", "Her llama"];
const action = ["ate", "peed", "crushed", "broke", "stole"];
const what = ["my homework", "the keys", "the car", "the trampoline"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "once upon a time"
];

const randomItemOfArray = arr => arr[Math.floor(Math.random() * arr.length)];
const randomExcuse = () => {
  return (
    randomItemOfArray(who) +
    " " +
    randomItemOfArray(action) +
    " " +
    randomItemOfArray(what) +
    " " +
    randomItemOfArray(when)
  );
};

window.onload = () => {
  document.getElementById("excuse").innerHTML = randomExcuse();
};

document
  .querySelector("#button")
  .addEventListener(
    "click",
    () => (document.getElementById("excuse").innerHTML = randomExcuse())
  );
