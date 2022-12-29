const button = document.querySelector("button");

button.addEventListener ("click", function () {
    div.classList.add(show);
    button.innerText.remove;
});
const div = document.createElement("div");
div.innerHTML = 
`<h2>Project Title: </h2>
<p>Type/Scope: </p>
<p>Role: </p>
<p>Overview: </p>
<p>Goals & Problems Solved: </p>
<p>Design Process: </p>
<p>Challenges & Takeaways: </p>
<p>Conclusion: </p>`;

const mobile = document.querySelector(".burger");
const list = document.querySelector("ul");
mobile.addEventListener("click", mobileMenu);
function mobileMenu() {
    mobile.classList.toggle("active");
    list.classList.toggle("active");
}

const navLink = document.querySelectorAll("a");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    burger.classList.remove("active");
    list.classList.remove("active");
}