console.log("Hellow world!");

let button = document.querySelector(".switch");
let bulb = document.querySelector(".bulbImage");

button.addEventListener("click", () => {
  bulb.remove();
});

console.log(button);
