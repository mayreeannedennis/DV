let toggleButton = document.querySelector("#barBtn");
let menuDisplay = document.querySelector(".menu");

toggleButton.addEventListener("click", toggleBtn);

function toggleBtn() {
    menuDisplay.classList.toggle('hide');
}