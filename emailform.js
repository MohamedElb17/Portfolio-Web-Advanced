const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

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
       
        alert("Form submitted successfully!");
    }
}
