/* ----- Code for the CoC modal --------- */

document.querySelector(".coc-link").addEventListener("click", openCoC);
document.querySelector(".coc-agree").addEventListener("click", agreeCoC);
document.querySelector(".coc-close").addEventListener("click", closeCoC);

function openCoC(){ 
  document.querySelector(".coc-modal").style.display="block";
}

function agreeCoC() {
  const agreeBtn = document.getElementById("cocAgreeCheck");
  document.querySelector(".coc-modal").style.display="none";
  agreeBtn.setAttribute("checked", "");
}

function closeCoC() {
  document.querySelector(".coc-modal").style.display="none";
}