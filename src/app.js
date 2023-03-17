/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird", "Her llama"];
let action = ["ate", "peed", "crushed", "broke", "stole"];
let what = ["my homework", "the keys", "the car", "the trampoline"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "once upon a time"
];

const randomItemOfArray = arr => arr[Math.floor(Math.random() * arr.length)];
const randomExcuse =
  randomItemOfArray(who) +
  " " +
  randomItemOfArray(action) +
  " " +
  randomItemOfArray(what) +
  " " +
  randomItemOfArray(when);
window.onload = () => {
  let excuse = document.getElementById("excuse");
  return (excuse.innerHTML = randomExcuse);
};
