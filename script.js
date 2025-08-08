let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Navigasi ke slide berikutnya
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Kembali ke slide utama
function backToMain() {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide-main').classList.add('active');
}

// Tampilkan slide menu makanan
function showMenuSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide-menu').classList.add('active');
}

// ==== Link Eksternal ====
// Ganti link sesuai dengan akun kamu

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
  // Bisa tambah pesan otomatis di akhir URL jika mau
  window.open('https://wa.me/6285167071487', '_blank');
}
