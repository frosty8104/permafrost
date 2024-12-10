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
// Daily image replacement [replace images/text every 24 hours with local storage: reference Sticky Notes & Name Tag app projects in Skillcrush]
const house = document.querySelector(".house-of-light");
const conmigo = document.querySelector(".sit-conmigo");
const bean = document.querySelector(".whole-bean");
const delong = document.querySelector(".dorothy-delong");
const fireball = document.querySelector(".fireball-app");
const restaurant = document.querySelector(".restaurant-app");
const rescue = document.querySelector(".pet-rescue");
const retreat = document.querySelector(".unplugged-retreat");
const wordpress = document.querySelector(".wordpress-theme");
const recipes = document.querySelector(".recipes-app");
const dinosaur = document.querySelector(".dinosaur-app");
const color = document.querySelector(".color-app");

const folioArray = [ house, conmigo, bean, delong, fireball, restaurant, rescue, retreat, wordpress, recipes, dinosaur, color ];

const folioMap = folioArray.map(function (item) {
    return item;
});
console.log(folioMap);