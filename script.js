/* display needs: 2 buttons (Case Study, Portfolio; extract text from pdf: fetch & display text in created div)
const button = document.querySelector("button");

//Fetch and display case study text
//Add button to display case study text
//Edit button to hide case study div

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
} */