console.log("Hellow world!");

let button = document.querySelector(".bulbSwitch");
let background = document.getElementById("background");
let foreground = document.querySelector(".articleHeader");
let bulb = document.querySelector(".bulbImage");

button.addEventListener("click", () => {
  if (button.innerText === "ZGAŚ") {
    button.innerText = "ZAPAL";
    background.classList = "darkBackground";
    foreground.classList.add("darkForeground");
    bulb.style.display = "none";
  }
  else {
    button.innerText = "ZGAŚ";
    background.classList.remove("darkBackground");
    foreground.classList.remove("darkForeground");
    bulb.style.display = "block";
  }
});

console.log(button);
