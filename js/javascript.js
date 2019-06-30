var link = document.querySelector(".write-us-button");

var popup = document.querySelector(".write-us-block");
var close = popup.querySelector(".write-us-close-button");

var form = popup.querySelector("form");
var nameField = popup.querySelector("[name=user-name]");
var emailField = popup.querySelector("[name=user-email]");

var overlay = popup.querySelector(".overlay");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("nameField");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        nameField.value = storage;
        emailField.focus();
    } else {
        nameField.focus();
    }
});


close.addEventListener("click", function(evt) {
    popup.classList.remove("modal-show");
});

overlay.addEventListener("click", function(evt) {
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
    if (!nameField.value || !emailField.value) {
        evt.preventDefault();
        console.log("Нужно ввести логин и почту");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("nameField", nameField.value);
        }
    }
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === escape) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
})