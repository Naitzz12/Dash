const bar = document.querySelector(".bar input");
const conta = document.querySelector(".container");
const barTest = document.querySelector(".bar");

const opOnOff = document.querySelector(".op-1-1onoff input");
const opLever = document.querySelector(".rounded");

const opOnOff2 = document.querySelector(".pullCheck2");
const opOnOff3 = document.querySelector(".pullCheck3");
const opOnOff4 = document.querySelector(".pullCheck4");
const opOnOff5 = document.querySelector(".pullCheck5");

const opLever2 = document.querySelector(".rounded2");
const opLever3 = document.querySelector(".rounded3");
const opLever4 = document.querySelector(".rounded4");
const opLever5 = document.querySelector(".rounded5");

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

  // On Off Switch Option

  opOnOff.addEventListener("click", function () {
    opLever.classList.toggle("opLeverRight");
  });
  opOnOff2.addEventListener("click", function () {
    opLever2.classList.toggle("opLeverRight");
  });
  opOnOff3.addEventListener("click", function () {
    opLever3.classList.toggle("opLeverRight");
  });
  opOnOff4.addEventListener("click", function () {
    opLever4.classList.toggle("opLeverRight");
  });
  opOnOff5.addEventListener("click", function () {
    opLever5.classList.toggle("opLeverRight");
  });

  // On Off Switch Option
});
