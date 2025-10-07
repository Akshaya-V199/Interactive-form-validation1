const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");

function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    return false;
  }
  nameError.textContent = "";
  nameInput.classList.add("valid");
  nameInput.classList.remove("invalid");
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    emailError.textContent = "Invalid email format.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    return false;
  }
  emailError.textContent = "";
  emailInput.classList.add("valid");
  emailInput.classList.remove("invalid");
  return true;
}

function validatePassword() {
  const password = passwordInput.value;
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    return false;
  }
  passwordError.textContent = "";
  passwordInput.classList.add("valid");
  passwordInput.classList.remove("invalid");
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  const regex = /^[6-9]\d{9}$/;
  if (!regex.test(phone)) {
    phoneError.textContent = "Enter a valid 10-digit Indian phone number.";
    phoneInput.classList.add("invalid");
    phoneInput.classList.remove("valid");
    return false;
  }
  phoneError.textContent = "";
  phoneInput.classList.add("valid");
  phoneInput.classList.remove("invalid");
  return true;
}

function checkFormValidity() {
  const isValid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validatePhone();
  submitBtn.disabled = !isValid;
}

nameInput.addEventListener("input", () => {
  validateName();
  checkFormValidity();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  checkFormValidity();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  checkFormValidity();
});

phoneInput.addEventListener("input", () => {
  validatePhone();
  checkFormValidity();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
