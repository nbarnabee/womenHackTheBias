setTimeout(function() {
  document.querySelector("body").removeAttribute("class");
  document.querySelector("main").innerHTML = `<img src="./assets/icons/logo_with_text.svg" alt="ShesWithUs" class="logo">
  <section class="top-space pre-dash">
    <h1>Your personalized dashboard is ready!</h1>
    <a href="./profile1AccountInfo.html" class="button">Join the community</a>
  </section>`
}, 3000);