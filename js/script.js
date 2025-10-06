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
// Names of God
const name = document.querySelector(".name");
if (name.innerText = "Lord of Lords") {
    name.classList.add("King of Kings");
} else if (name.innerText = "King of Kings") {
    name.classList.add("Adonai");
} else if (name.innerText = "Adonai") {
    name.classList.add("Elohim");
} else if (name.innerText = "Elohim") {
    name.classList.add("El Elyon");
} else if (name.innerText = "El Elyon") {
    name.classList.add("El Olam");
} else if (name.innerText = "El Olam") {
    name.classList.add("El Shaddai");
} else if (name.innerText = "El Shaddai") {
    name.classList.add("Immanuel");
} else if (name.innerText = "Immanuel") {
    name.classList.add("Jehovah Jireh");
} else if (name.innerText = "Jehovah Jireh") {
    name.classList.add("Jehovah Mekoddishkem");
} else if (name.innerText = "Jehovah Mekoddishkem") {
    name.classList.add("Jehovah Nissi");
} else if (name.innerText = "Jehovah Nissi") {
    name.classList.add("Jehovah-Raah");
} else if (name.innerText = "Jehovah-Raah") {
    name.classList.add("Jehovah Rapha");
} else if (name.innerText = "Jehovah Rapha") {
    name.classList.add("Jehovah Saboath");
} else if (name.innerText = "Jehovah Saboath") {
    name.classList.add("Jehovah Shalom");
} else if (name.innerText = "Jehovah Shalom") {
    name.classList.add("Jehovah Shamma");
} else if (name.innerText = "Jehovah Shamma") {
    name.classList.add("Jehovah Tsidkenu");
} else if (name.innerText = "Jehovah Tsidkenu") {
    name.classList.add("Jesus");
} else if (name.innerText = "Jesus") {
    name.classList.add("Øanna");
} else if (name.innerText = "Øanna") {
    name.classList.add("Yahweh");
} else (name.innerText = "Lord of Lords");
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