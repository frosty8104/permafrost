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
const imgs = document.querySelectorAll(".img");
const modals = document.querySelectorAll(".modal");
imgs.forEach((img, i) => {
    img.addEventListener('click', function() {
        modals[i].style.display = "block";
        const modalImg = modals[i].querySelector(".page");
        const captionText = modals[i].querySelector(".caption");
        if (modalImg) modalImg.src = img.src;
        if (captionText) captionText.textContent = img.alt;
    });
});
modals.forEach((modal) => {
    const span = modal.querySelector(".close");
    if (span) {
        span.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }
});
// Daily image replacement [replace images/text every 24 hours with local storage: 
// reference Sticky Notes & Name Tag app projects in Skillcrush]
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

const folioArray = [ "house", "conmigo", "bean", "delong", "fireball", "restaurant", "rescue", "retreat", "wordpress", "recipes", "dinosaur", "color" ];

const folioMap = folioArray.map(function (item) {
    return item;
});
console.log(folioMap);

// JS elements needed: map, includes (?), indexOf (?), filter (?), localStorage, else/if conditional statements for
// rotating portfolio pieces every 24 hours

// read more button/section
const hidden = document.querySelector("text-hidden");
const more = document.querySelector("read-more");
more.addEventListener("click", function() {
    if (hidden.classList.contains("hidden")) {
        hidden.classList.remove("hidden");
        more.textContent = "Read Less";
    } else {
        hidden.classList.add("hidden");
        more.textContent = "Read More";
    }
});