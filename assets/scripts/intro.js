/* --------  INTRO TRANSITION ---------------  */

// For the intro effect, see https://www.youtube.com/watch?v=2ak37WrbSDg

const overlay = document.querySelector(".overlay");
const underlay = document.querySelector(".underlay");
const logoGroup = document.querySelectorAll(".intro");

const button1 = document.querySelector(".sb1");
const button2 = document.querySelector(".sb2");
const button3 = document.querySelector(".sb3");
const slide = document.querySelector(".slide");
const slideGroup = Array.from(document.querySelectorAll(".slide"));
slideGroup.forEach(e => e.style.right = "0vw");
let slideCheck;

// Setting it up here so that JS can keep track of "right"



window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {

    logoGroup.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add("active");
      }, (i + 1) * 400);
    });

    setTimeout(() => {
      logoGroup.forEach((e, i) => {
        setTimeout(() => {
          e.classList.replace("active", "fade");
        }, 3000);
      });
      setTimeout(() => {
        overlay.style.top = "-1400px";
        overlay.style.opacity="0";
        setTimeout(() => {
          underlay.classList.add("active")
        }, 500);
      }, 3200);
    }, 500)

    setTimeout(() => {

    })

  })

});



button1.addEventListener("click", loadFirstSlide);
button2.addEventListener("click", loadSecondSlide);
button3.addEventListener("click", loadThirdSlide);

function loadFirstSlide() {
  slideCheck = slide.style.right;
  if (slideCheck === "0vw")
  return;
  else if (slideCheck === "207vw") 
    slideGroup.forEach(e => e.style.right = "0vw");
  else 
    slideGroup.forEach(e => e.style.right = "0vw");
  button1.classList.add("blue");
  button2.classList.remove("blue");
  button3.classList.remove("blue");
}

function loadSecondSlide() {
  slideCheck = slide.style.right;
  if (slideCheck === "102vw")
  return;
  else if (slideCheck === "207vw") 
    slideGroup.forEach(e => e.style.right = "min(720px, 102vw)");
  else 
    slideGroup.forEach(e => e.style.right = "min(720px, 102vw)");
  button1.classList.remove("blue");
  button2.classList.add("blue");
  button3.classList.remove("blue");
}

function loadThirdSlide() {
  slideCheck = slide.style.right;
  if (slideCheck === "207vw")
  return;
  else if (slideCheck === "0vw") 
    slideGroup.forEach(e => e.style.right = "min(1380px, 207vw)");
  else 
    slideGroup.forEach(e => e.style.right = "min(1380px, 207vw)");
  button1.classList.remove("blue");
  button2.classList.remove("blue");
  button3.classList.add("blue");
}

