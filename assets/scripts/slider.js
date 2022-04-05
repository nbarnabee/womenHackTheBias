const button1 = document.querySelector(".sb1");
const button2 = document.querySelector(".sb2");
const button3 = document.querySelector(".sb3");
const slide = document.querySelector(".slide");

button1.addEventListener("click", loadFirstSlide);
button2.addEventListener("click", loadSecondSlide);
button3.addEventListener("click", loadThirdSlide);

function loadFirstSlide() {
  if (slide.classList.contains("slide1"))
  return;
  else {
    button1.classList.add("blue");
    button2.classList.remove("blue");
    button3.classList.remove("blue");
    slide.innerHTML = `<h1>She is not afraid to ask for help.</h1>
    <p class="txt-light">We can always use some support in all areas of our lives, whether personal or
      professional.
      Post your questions and get support.</p>`;
    slide.classList.add("slide1");
    slide.classList.remove("slide2");
    slide.classList.remove("slide3");
  }
}

function loadSecondSlide() {
  if (slide.classList.contains("slide2"))
  return;
  else {
    button1.classList.remove("blue");
    button2.classList.add("blue");
    button3.classList.remove("blue");
    slide.innerHTML = `<h1>She is supportive.</h1>
    <p class="txt-light">Show your strengths by stepping up to guide one another.</p>`;
    slide.classList.remove("slide1");
    slide.classList.add("slide2");
    slide.classList.remove("slide3");
  }
}

function loadThirdSlide() {
  if (slide.classList.contains("slide3"))
  return;
  else {
    button1.classList.remove("blue");
    button2.classList.remove("blue");
    button3.classList.add("blue");
    slide.innerHTML = `<h1>She is connected.</h1>
    <p class="txt-light">Establish meaningful relationships by being part of a supportive community.</p>`;
    slide.classList.remove("slide1");
    slide.classList.remove("slide2");
    slide.classList.add("slide3");
  }
}




    /*<div class="slide slide2">
    <h1>She is supportive.</h1>
    <p class="txt-light">Show your strengths by stepping up to guide one another.</p>
  </div>
  <div class="slide slide3">
    <h1>She is connected.</h1>
    <p class="txt-light">Establish meaningful relationships by being part of a supportive community.</p>
  </div> */