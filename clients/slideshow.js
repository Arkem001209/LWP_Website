const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % (slides.length - 1); // Excluding the last slide
  showSlide(currentIndex);
}, 3000); // Change slide every 3 seconds