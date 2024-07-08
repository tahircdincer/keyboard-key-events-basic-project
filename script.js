"use strict";

const container = document.querySelector(".container");
const header = document.querySelector("h1");
const body = document.querySelector("body");
container.addEventListener("dblclick", function () {
  if (container.style.backgroundColor !== "pink") {
    container.style.backgroundColor = "pink";
    container.style.color = "white";
  } else if (container.style.backgroundColor === "pink") {
    container.style.backgroundColor = "white";
    container.style.color = "black";
  }
});

header.addEventListener(
  "click",
  (e) => (header.textContent = `X: ${e.clientX} Y: ${e.clientY}`)
);

document.querySelector("#deneme").addEventListener("keypress", function (e) {
  header.textContent = ` ${e.key} `;
  console.log(" deneme ");
});
