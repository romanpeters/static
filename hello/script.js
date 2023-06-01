// script.js
document.addEventListener("DOMContentLoaded", function () {
  var colors = ["#00897B", "#4DB6AC", "#80CBC4", "#B2DFDB", "#E0F2F1"];
  var currentIndex = 0;
  var body = document.querySelector("body");

  function changeColor() {
    body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }

  setInterval(changeColor, 5000);
});

