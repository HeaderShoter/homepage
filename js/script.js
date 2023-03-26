console.log("Hello world!");

let toggle = document.querySelector(".bulbToggle");
let background = document.querySelector(".body");
let foreground = document.querySelector(".articleHeader");
let bulb = document.querySelector(".bulbImage");

toggle.addEventListener("click", () => {
  if (toggle.innerText === "ZGAŚ") {
    toggle.innerText = "ZAPAL";
    background.classList.add("darkBackground");
    foreground.classList.add("darkForeground");
    bulb.style.display = "none";
  }
  else {
    toggle.innerText = "ZGAŚ";
    background.classList.remove("darkBackground");
    foreground.classList.remove("darkForeground");
    bulb.style.display = "block";
  }
});

console.log(button);
