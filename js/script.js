console.log("Hellow world!");

let button = document.querySelector(".bulbSwitch");
let switchLabel = document.querySelector(".switchLabel");
let background = document.querySelector(".body");
let foreground = document.querySelector(".articleHeader");
let bulb = document.querySelector(".bulbImage");

button.addEventListener("click", () => {
  if (switchLabel.innerText === "ZGAŚ") {
    switchLabel.innerText = "ZAPAL";
    background.classList.add("darkBackground");
    foreground.classList.add("darkForeground");
    bulb.style.display = "none";
  }
  else {
    switchLabel.innerText = "ZGAŚ";
    background.classList.remove("darkBackground");
    foreground.classList.remove("darkForeground");
    bulb.style.display = "block";
  }
});

console.log(button);
