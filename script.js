const slides = document.querySelectorAll('.slide');

function showSlide(id) {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Intro ➜ Main
function goToMain() {
  showSlide('slide-main');
}

// Main ➜ Intro
function backToIntro() {
  showSlide('slide-intro');
}

// Main ➜ Menu Makanan
function showMenuSlide() {
  showSlide('slide-menu');
}

// Link External
function gofood() {
  window.open('https://gofood.link.tld', '_blank'); // Ganti dengan link asli
}

function shopeefood() {
  window.open('https://shopeefood.link.tld', '_blank'); // Ganti dengan link asli
}

function grabfood() {
  window.open('https://grabfood.link.tld', '_blank'); // Ganti dengan link asli
}

function whatsappAdmin() {
  window.open('https://wa.me/6285167071487', '_blank');
}
