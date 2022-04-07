// Here I grab all of the elements that I am going to reference

let buttonSet = document.querySelectorAll('.survey');
const personal = document.querySelector(".select-personal");
const professional = document.querySelector(".select-professional");
const both = document.querySelector(".select-both");
const submit = document.querySelector(".submit-survey");

// And here are all of the elements that are going to be changed

const headerTxt = document.querySelector(".survey-header");
const pTxt = document.querySelector("p");
const baseSurvey = document.querySelector(".base-survey");
const personalOptions = document.querySelector(".options-personal");
const professionalOptions = document.querySelector(".options-professional");
const buttonSwap = document.querySelector(".btn-container");

// I am sure that there is a better way to do all of this, but I'm afraid I don't know it.

const personalSurveyList = `<h2>Personal</h2>
<ul class="survey-container-grid">
  <li class="button survey two-line">Time<br> Management</li>
  <li class="button survey">Mental Health</li>
  <li class="button survey two-line">Dating &<br> Relationships</li>
  <li class="button survey">Body Image</li>
  <li class="button survey">Family</li>
  <li class="button survey">Friends</li>
  <li class="button survey">School</li>
  <li class="button survey">Finance</li>
  <li class="button survey">Parenting</li>
</ul>`;
const professionalSurveyList = `<h2>Professional</h2>
<ul class="survey-container-grid">
  <li class="button survey">Career Transition</li>
  <li class="button survey two-line">Salary<br> Negotiation</li>
  <li class="button survey">Work/Life Balance</li>
  <li class="button survey two-line">Moving Up the<br> Ladder</li>
  <li class="button survey">Work From Home</li>
  <li class="button survey">Soft Skills</li>
  <li class="button survey two-line">Conflict<br>Management</li>
</ul>`

createListeners();

// We make an array from the survey options and apply a new style when they're checked.  This will also apply to the secondary survey items, but we'll have to call it again.

function createListeners() {
  Array.from(buttonSet).forEach(element => element.addEventListener("click", makeActive));

  function makeActive(click) {
    click.target.classList.toggle("survey__checked");
  }
};


// Here's where we start the process of updating the page's contents depending on the choices made in the initial survey.

submit.addEventListener("click", updateSurvey);

function updateSurvey() {
  baseSurvey.style.display = "none";
  if (both.classList.contains("survey__checked") || (personal.classList.contains("survey__checked") && professional.classList.contains("survey__checked"))) {
    headerTxt.innerText = `Which area(s) of your personal or professional life would you want to improve on the most?`;
    personalOptions.innerHTML = personalSurveyList;
    professionalOptions.innerHTML = professionalSurveyList;
  }
  else if (personal.classList.contains("survey__checked")) {
    headerTxt.innerText = `Which area(s) of your personal life would you want to improve on the most?`;
    personalOptions.innerHTML = personalSurveyList;
  }
  else {
    headerTxt.innerText = `Which area(s) of your professional life would you want to improve on the most?`;
    professionalOptions.innerHTML = professionalSurveyList;
  }
  pTxt.innerHTML = `Choose up to three.<br>You can edit them later.`;
  buttonSwap.innerHTML = `<a href="./onboardSurvey4.html" class="button btn-small">Continue</a>`;
  pTxt.classList.remove("left");
  buttonSet = document.querySelectorAll('.survey');
  createListeners();
}
