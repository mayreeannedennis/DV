let toggleButton = document.querySelector("#barBtn");
let menudisplay = document.querySelector("#menuDisplay");

toggleButton.addEventListener("click", toggleBtn);

function toggleBtn() {
    menudisplay.classList.toggle('hide');
}
