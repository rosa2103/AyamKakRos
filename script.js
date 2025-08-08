let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function backToMain() {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide-main').classList.add('active');
}

function showMenuSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide-menu').classList.add('active');
}

function backToIntro() {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide-intro').classList.add('active');
}

function gofood() {
  window.open('https://gofood.link.tld', '_blank'); // Ganti dengan link asli GoFood
}

function shopeefood() {
  window.open('https://shopeefood.link.tld', '_blank'); // Ganti dengan link asli ShopeeFood
}

function grabfood() {
  window.open('https://grabfood.link.tld', '_blank'); // Ganti dengan link asli GrabFood
}

function whatsappAdmin() {
  window.open('https://wa.me/6285167071487', '_blank');
}
