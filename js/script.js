console.log("Hello world!");

let toggle = document.querySelector(".js-toggle__button");
let body = document.querySelector(".js-body");
let articleHeader = document.querySelector(".js-theme");
let tableHeader = document.querySelector(".js-table__header");
let bulbImage = document.querySelector(".js-image");

toggle.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  articleHeader.classList.toggle("cssTheme--dark"); // It changes article headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
  tableHeader.classList.toggle("table__header--dark"); // It changes table headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
  if (toggle.innerText === "ZGAŚ") {
    toggle.innerText = "ZAPAL";
    bulbImage.style.display = "none";
  }
  else {
    toggle.innerText = "ZGAŚ";
    bulbImage.style.display = "block";
  }
});

console.log(button);
