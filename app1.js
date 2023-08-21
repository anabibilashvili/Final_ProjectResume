const slides = document.querySelectorAll('.slide');
const slideButtons = document.querySelectorAll('.slide-button');

let currentSlideIndex = 0;

function showSlide(index) {
    slides[currentSlideIndex].style.display = 'none';
    slideButtons[currentSlideIndex].classList.remove('active');
    currentSlideIndex = index % slides.length;
    slides[currentSlideIndex].style.display = 'block';
    slideButtons[currentSlideIndex].classList.add('active');
}

// Attach click event listeners to the slide buttons
for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener('click', () => showSlide(i));
}

// Initial display of the first slide
showSlide(currentSlideIndex);