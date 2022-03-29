const buttonSet = document.querySelectorAll('.survey');
Array.from(buttonSet).forEach(element => element.addEventListener("click", makeActive));

function makeActive(click) {
  click.target.classList.toggle("survey__checked");
}