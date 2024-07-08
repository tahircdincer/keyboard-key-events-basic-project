"use strict";
const keyCode = document.querySelector(".key-code");
const code = document.querySelector(".code");
const key = document.querySelector(".key");
const intro = document.querySelector(".intro");
// Not practical way

window.addEventListener("keydown", function (e) {
  intro.innerHTML = `
 <div class="container">
      <div class="card-container">
        <div class="card">
          <h3>e.key</h3>
          <span>${e.key === " " ? " Space " : e.key}</span>
        </div>
        <div class="card">
          <h3>e.keyCode</h3>
          <span class="key-code"> ${e.keyCode}</span>
        </div>
        <div class="card">
          <h3>e.code</h3>
          <span class="code">${e.code}</span>
        </div>
      </div>
    </div>
    `;
});

/* More Practical Way */

// I' ll implement a more practical way if I can.
