// For the intro effect, see https://www.youtube.com/watch?v=2ak37WrbSDg

const overlay = document.querySelector(".overlay");
const underlay = document.querySelector(".underlay");
const logoGroup = document.querySelectorAll(".intro");

const button1 = document.querySelector(".sb1");
const button2 = document.querySelector(".sb2");
const button3 = document.querySelector(".sb3");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");


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
        }, 2500);
      });
      setTimeout(() => {
        underlay.classList.add("active")
        overlay.style.top = "-1400px";
        setTimeout(() => {
          overlay.style.opacity="0";
        }, 200);
      }, 2600);
    }, 500)

    setTimeout(() => {

    })

  })

});



button1.addEventListener("click", loadFirstSlide);
button2.addEventListener("click", loadSecondSlide);
button3.addEventListener("click", loadThirdSlide);

// function loadFirstSlide() {
//   if (slide1.classList.contains("slide-center"))
//   return;
//   else if (slide2.classList.contains("slide-left")) {
//     slide3.classList.replace("slide-center", "slide-right");
//     slide2.classList.replace("slide-left", "slide-center");
//     button2.classList.add("blue");
//     button3.classList.remove("blue");
//     setTimeout(() => {
//       slide2.classList.replace("slide-center", "slide-right");
//       slide1.classList.replace("slide-left", "slide-center");
//       button1.classList.add("blue");
//       button2.classList.remove("blue");
//     }, 500);
//   }
//   else {
//     slide2.classList.replace("slide-center", "slide-right");
//     slide1.classList.replace("slide-left", "slide-center");
//     button1.classList.add("blue");
//     button2.classList.remove("blue");
//   }
// };


// function loadSecondSlide() {
//   if (slide2.classList.contains("slide-center"))
//   return;
//   else if (slide2.classList.contains("slide-left")) {
//     slide3.classList.replace("slide-center", "slide-right");
//     slide2.classList.replace("slide-left", "slide-center");
//     button2.classList.add("blue");
//     button3.classList.remove("blue");
//   }
//   else {
//     slide1.classList.replace("slide-center", "slide-left");
//     slide2.classList.replace("slide-left", "slide-center");
//     button1.classList.remove("blue");
//     button2.classList.add("blue");
//   }
// };

// function loadThirdSlide() {
//   if (slide3.classList.contains("slide-center"))
//   return;
//   else if (slide2.classList.contains("slide-right")) {
//     slide1.classList.replace("slide-center", "slide-left");
//     slide2.classList.replace("slide-right", "slide-center");
//     button2.classList.add("blue");
//     button1.classList.remove("blue");
//     setTimeout(() => {
//       slide2.classList.replace("slide-center", "slide-left");
//       slide3.classList.replace("slide-right", "slide-center");
//       button3.classList.add("blue");
//       button2.classList.remove("blue");
//     }, 500);
//   }
//   else {
//     slide2.classList.replace("slide-center", "slide-left");
//       slide3.classList.replace("slide-right", "slide-center");
//       button3.classList.add("blue");
//       button2.classList.remove("blue");
//   }
// };


