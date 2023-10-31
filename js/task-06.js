const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = Number(validationInput.getAttribute("data-length"));
  const currentLength = validationInput.value.trim(0).length;

  if (currentLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
