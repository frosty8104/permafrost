// Burger menu
const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
burger.addEventListener('click', () => {
    links.classList.toggle('active')
});
// Change date whenever the year changes
const year = new Date().getFullYear();
const date = document.querySelector(".date");
date.innerHTML = year;
// Case study image modal
const img = document.querySelector("img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#page");
let captionText = document.querySelector(".caption");
img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.alt;
});
const span = document.querySelector(".close");
span.addEventListener('click', function() {
    modal.style.display = "none";
});
// Daily image replacement