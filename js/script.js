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
const captionText = document.querySelector("#caption");
img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText = this.alt;
});
const span = document.querySelector(".close")[0];
span.addEventListener('click', () => {
    modal.style.display = "none";
});