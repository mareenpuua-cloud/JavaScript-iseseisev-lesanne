// script.js
const galleryImages = Array.from(document.querySelectorAll(".gallery-grid img"));
let currentImageIndex = 0;

function openModal(img) {
  currentImageIndex = galleryImages.indexOf(img);
  updateModalImage();
  document.getElementById("modal").style.display = "flex";
}

function updateModalImage() {
  document.getElementById("modalImg").src = galleryImages[currentImageIndex].src;
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  document.getElementById("modal").style.display = "none";
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateModalImage();
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateModalImage();
}

function clickModalImage(event) {
  event.stopPropagation();
  const rect = event.target.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const edgeZone = rect.width * 0.25;

  if (clickX < edgeZone) {
    showPrevImage();
  } else if (clickX > rect.width - edgeZone) {
    showNextImage();
  }
}

function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modalImg").addEventListener("click", clickModalImage);
});