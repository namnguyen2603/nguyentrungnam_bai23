var btn = document.querySelector(".btn");
var modalContainer = document.querySelector(".modal-container");
var overlay = document.querySelector(".overlay");

btn.addEventListener("click", function () {
  modalContainer.classList.add("show");
});

overlay.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});

var tabLogin = document.querySelector(".login");
var tabRegister = document.querySelector(".register");
var loginForm = document.querySelector(".login-form");
var registerForm = document.querySelector(".register-form");

tabLogin.addEventListener("click", function () {
  tabLogin.classList.remove("non-active");
  tabRegister.classList.add("non-active");
  loginForm.classList.remove("non-active");
  registerForm.classList.add("non-active");
});

tabRegister.addEventListener("click", function () {
  tabLogin.classList.add("non-active");
  tabRegister.classList.remove("non-active");
  loginForm.classList.add("non-active");
  registerForm.classList.remove("non-active");
});

var inputEmail = document.querySelector(".input-email");
var inputPassword = document.querySelector(".input-password");
var errorEmail = document.querySelector(".login-hidden-email");
var errorPassword = document.querySelector(".login-hidden-password");

inputEmail.addEventListener("blur", function () {
  if (inputEmail.value.trim() === "") {
    errorEmail.classList.remove("hidden");
  } else {
    errorEmail.classList.add("hidden");
  }
});
inputEmail.addEventListener("focus", function () {
  errorEmail.classList.add("hidden");
});

inputPassword.addEventListener("blur", function () {
  if (inputPassword.value.trim() === "") {
    errorPassword.classList.remove("hidden");
  } else {
    errorPassword.classList.add("hidden");
  }
});
inputPassword.addEventListener("focus", function () {
  errorPassword.classList.add("hidden");
});

// inputPassword.addEventListener("click", function () {
//   errorPassword.classList.remove("hidden");
// });

var registerName = document.querySelector(".register-input-name");
var registerEmail = document.querySelector(".register-input-email");
var registerPassword = document.querySelector(".register-input-password");
var errorNameRegister = document.querySelector(".register-name-hidden");
var errorEmailRegister = document.querySelector(".register-email-hidden");
var errorPasswordRegister = document.querySelector(".register-password-hidden");

registerName.addEventListener("blur", function () {
  if (registerName.value.trim() === "") {
    errorNameRegister.classList.add("hidden");
  } else {
    errorNameRegister.classList.remove("hidden");
  }
});
registerName.addEventListener("focus", function () {
  errorNameRegister.classList.remove("hidden");
});

registerEmail.addEventListener("blur", function () {
  if (registerEmail.value.trim() === "") {
    errorEmailRegister.classList.add("hidden");
  } else {
    errorEmailRegister.classList.remove("hidden");
  }
});
registerEmail.addEventListener("focus", function () {
  errorEmailRegister.classList.remove("hidden");
});

registerPassword.addEventListener("blur", function () {
  if (registerPassword.value.trim() === "") {
    errorPasswordRegister.classList.add("hidden");
  } else {
    errorPasswordRegister.classList.remove("hidden");
  }
});
registerPassword.addEventListener("focus", function () {
  errorPasswordRegister.classList.remove("hidden");
});
