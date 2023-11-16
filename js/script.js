console.log("Hello world!");

const themeToggle = document.querySelector(".js-themeToggle");

themeToggle.addEventListener("click", () => {
  toggleButtonText();
  toggleBackground();
  bulbImageShow();
}
);

const toggleButtonText = () => {
  switch (themeToggle.innerText) {
    case "ZGAŚ": themeToggle.innerText = "ZAPAL";
      window.darkModeStatus = 'on';
      break;
    default: themeToggle.innerText = "ZGAŚ";
      window.darkModeStatus = 'off';
  }
};

const toggleBackground = () => {
  const body = document.querySelector(".js-body");
  const articleHeader = document.querySelector(".js-theme");
  const tableHeader = document.querySelector(".js-table__header");
  body.classList.toggle("body--dark");
  articleHeader.classList.toggle("cssTheme--dark"); // It changes article headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
  tableHeader.classList.toggle("table__header--dark"); // It changes table headers body when light is off but for now it works only with just one of headers and I will fix this when I will know how to.
};

const bulbImageShow = () => {
  const bulbImage = document.querySelector(".js-image");
  darkModeStatus === 'off' ? bulbImage.style.display = "block" : bulbImage.style.display = "none";
};