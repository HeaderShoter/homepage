console.log("Hello world!");

const toggleButton = document.querySelector(".js-toggle__button");

toggleButton.addEventListener("click", () => {
  toggleBackground();
  toggleButton.innerText === "ZGAŚ" ? darkMode() : brightMode();
}
);

const toggleBackground = () => {
  const body = document.querySelector(".js-body");
  const articleHeader = document.querySelector(".js-theme");
  const tableHeader = document.querySelector(".js-table__header");
  body.classList.toggle("body--dark");
  articleHeader.classList.toggle("cssTheme--dark"); // It changes article headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
  tableHeader.classList.toggle("table__header--dark"); // It changes table headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
};

const darkMode = () => {
  const bulbImage = document.querySelector(".js-image");
  toggleButton.innerText = "ZAPAL";
  bulbImage.style.display = "none";
};

const brightMode = () => {
  const bulbImage = document.querySelector(".js-image");
  toggleButton.innerText = "ZGAŚ";
  bulbImage.style.display = "block";
};



console.log(button);

