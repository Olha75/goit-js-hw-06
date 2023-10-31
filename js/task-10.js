function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let amount = Number(inputRef.value);

  if (amount < 1 || amount > 100) {
    alert("Введіть число від 1 до 100");
    return;
  }

  inputRef.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      createBoxes();
    }
  });
  const initialSize = 30;
  let html = "";

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i + 10;
    const color = getRandomHexColor();
    html += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
  }
  boxesRef.innerHTML = html;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}
