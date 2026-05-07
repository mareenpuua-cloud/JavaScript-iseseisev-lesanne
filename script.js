// script.js
function openModal(img){  document.getElementById("modal").style.display = "flex";  document.getElementById("modalImg").src = img.src;}
function closeModal(){  document.getElementById("modal").style.display = "none";}
function toggleMenu(){  const nav = document.getElementById("mobileNav");
  if(nav.style.display === "flex"){    nav.style.display = "none";  } else {    nav.style.display = "flex";  }}