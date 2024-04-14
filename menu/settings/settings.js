const bar = document.querySelector(".bar input");
const conta = document.querySelector(".container");
const barTest = document.querySelector(".bar");

const menuBar = document.querySelector(".menu-bar h3");

document.addEventListener("DOMContentLoaded", function () {
  bar.addEventListener("click", function () {
    conta.classList.add("conta");
    conta.style.borderRadius = "0px";
    barTest.style.display = "none";
    menuBar.style.display = "block";
  });

  menuBar.addEventListener("click", function () {
    conta.classList.remove("conta");
    conta.style.borderTopLeftRadius = "50px";
    conta.style.borderBottomLeftRadius = "50px";
    menuBar.style.display = "none";
    barTest.style.display = "flex";
  });
});
