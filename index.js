const bar = document.querySelector(".bar input");
const conta = document.querySelector(".container");
const barTest = document.querySelector(".bar");

const chP = document.querySelector(".chP");
const signC = document.querySelector(".sign-card");
const cCard = document.querySelector(".close-card");

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

  chP.addEventListener("click", function () {
    signC.style.display = "flex";
  });

  cCard.addEventListener("click", function () {
    signC.style.display = "none";
  });
});

function myServerList() {
  const myS = document.querySelector(".myListS");
  const St = document.querySelector(".ch-list");

  myS.innerHTML = "Show Server";
  myS.addEventListener("click", function () {
    St.classList.toggle("showServerL");
  });
}

myServerList();

function myStorageList() {
  const myS = document.querySelector(".myStorageL");
  const sT = document.querySelector(".storage-list");

  myS.innerHTML = "Show Storage";
  myS.addEventListener("click", function () {
    sT.classList.toggle("showList");
  });
}

myStorageList();

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    pagination: false,
    arrows: false,
    gap: "10rem",
  });
  splide.mount();
});
