/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
var types = ["heart", "diamond", "club", "spade"];
var colours = ["red", "black"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var divCard = document.getElementById("divCard");
  var randonNumber = Math.floor(Math.random() * numbers.length);
  var randomType = Math.floor(Math.random() * types.length);
  var randomColour = Math.floor(Math.random() * colours.length);
  divCard.querySelector(".number").innerHTML = numbers[randonNumber];
  var icons = divCard.querySelectorAll(".icon");
  icons.forEach(function(icon) {
    types.forEach(function(type) {
      icon.classList.remove(type);
    });
    colours.forEach(function(colour) {
      icon.classList.remove(colour);
    });
    icon.className += " " + types[randomType];
    icon.className += " " + colours[randomColour];
  });
};
