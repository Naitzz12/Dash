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

document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "Server Info",
    },
    xAxis: {
      categories: ["RAM", "CPU", "Storage"],
    },
    yAxis: {
      title: {
        text: "CPU, RAM, Storage",
      },
    },
    series: [
      {
        name: "Node 1",
        data: [1, 0, 4],
      },
      {
        name: "Node 2",
        data: [5, 9, 3],
      },
      {
        name: "Node 3",
        data: [4, 7, 2],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container2", {
    chart: {
      type: "pie",
    },
    title: {
      text: "User Login",
    },
    xAxis: {
      categories: ["RAM", "CPU", "Storage"],
    },
    series: [
      {
        name: "Node 1",
        data: [1, 0, 4],
      },
      {
        name: "Node 2",
        data: [5, 9, 3],
      },
      {
        name: "Node 3",
        data: [4, 7, 2],
      },
    ],
  });
});

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
