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
    inputPassword.classList.remove("hidden");
  } else {
    errorPassword.classList.add("hidden");
  }
});
