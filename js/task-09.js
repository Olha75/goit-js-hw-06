function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
}

changeColorButton.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});
