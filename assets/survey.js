/* -----  Code for the survey buttons ------ */

const buttonSet = document.querySelectorAll('.survey');
const personal = document.querySelector(".survey-personal");
const professional = document.querySelector(".survey-professional");
const both = document.querySelector(".survey.both");
const submit = document.querySelector(".submit-survey");

Array.from(buttonSet).forEach(element => element.addEventListener("click", makeActive));

function makeActive(click) {
  click.target.classList.toggle("survey__checked");
}