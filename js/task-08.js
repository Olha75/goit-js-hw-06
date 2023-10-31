const loginForm = document.querySelector(".login-form")
loginForm.addEventListener('submit', function (event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
  
    formData.forEach((value, code) => {
      formObject[code] = value;
    });
  
    if (!formObject.email || !formObject.password) {
      alert('All fields must be filled in');
      return;
    }
  
    console.log(formObject);
    loginForm.reset();
  });