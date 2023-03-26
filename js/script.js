console.log("Hellow world!");

let button = document.querySelector(".bulbSwitch");
let bulb = document.querySelector(".bulbImage");
let brightElement = document.getElementById("bright");

button.addEventListener("click", () => {
  if (button.innerText === "ZGAŚ") {
    button.innerText = "ZAPAL";
    body.classList = "dark";
    bulb.style.display = "none";
  } else {
    button.innerText = "ZGAŚ";
    body.classList = "";
    bulb.style.display = "block";
  }
});
// bulb.remove();
//});

console.log(button);
