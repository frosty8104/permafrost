/* display needs: 2 buttons (Case Study, Portfolio; extract text from pdf: fetch & display text in created div) */
const button = document.querySelector("button");
// case studies
//Fetch and display case study text
/* const getText = async function () {
    const fetchStudy = await fetch('');
    const studyText = await. json(fetchStudy);
    displayText(studyText);
};
const displayText = function(text) {
    
}*/
// Add button to display case study text
// Edit button to hide case study div
button.addEventListener ("click", function () {
    div.classList.add(show);
    button.innerText = "Case Study";
});
folio.addEventListener ("click", function () {
    div.classList.remove(hide);
    button.innerText = "Portfolio";
});
// Create div for displaying text
/*const div = document.createElement("div");
div.classList.show(fetchStudy);
div.innerHTML = `
<div><h2><strong>Project Title:</strong> </h2>
<p><strong>Type/Scope:</strong> </p>
<p><strong>Role:<strong> </p>
<p><strong>Overview:</strong> </p>
<p><strong>Goals & Problems Solved:</strong> </p>
<p><strong>Design Process:</strong> </p>
<p><strong>Challenges & Takeaways:</strong> </p>
<p><strong>Conclusion:</strong> </p></div>`; */

// hamburger menu
/* const mobile = document.querySelector(".burger");
const list = document.querySelector("ul");
mobile.addEventListener("click", mobileMenu);
function mobileMenu() {
    mobile.classList.toggle("active");
    list.classList.toggle("active");
} */