const nameInput = document.getElementById("name-input")
const nameOutput = document.getElementById("name-output")
nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    nameOutput.textContent = inputValue || "Anonymous";
  });
  
//   const nameInput = document.getElementById("name-input");
//   const nameOutput = document.getElementById("name-output");

//     nameInput.addEventListener("input", () => {
//       nameOutput.textContent = nameInput.value || "Anonymous";
//     });

//     nameInput.addEventListener("keyup", (event) => {
//       if (event.key === "Enter") {
//         nameInput.value = "";
//       }
//     });