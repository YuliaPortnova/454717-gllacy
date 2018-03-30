var popup_btn = document.querySelector(".contact-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-btn");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var feedback = popup.querySelector("[name=feedback]");

popup_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show-overlay");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show-overlay");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !feedback.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
})