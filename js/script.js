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
