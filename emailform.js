let form = document.getElementById("myForm"); //Elementen selecteren
let nameInput = document.getElementById("name");
let nameError = document.getElementById("nameError");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");

form.addEventListener("submit", validateForm); //Event aan een element koppelen

function validateForm(event) { //Formulier valideren
    event.preventDefault(); 
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if (name === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("error");
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error");
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("error");
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email";
        emailInput.classList.add("error");
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error");
    }

    if (name !== "" && email !== "" && isValidEmail(email)) {
       
        alert("Form submitted!");
    }
}

