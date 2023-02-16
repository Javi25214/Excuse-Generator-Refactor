import "bootstrap";
import generateExcuse from "./generateExcuse";
import "./style.css";

window.onload = function() {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
