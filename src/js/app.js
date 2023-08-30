let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();

document.addEventListener("scroll", updateProgress);

function updateProgress() {
  const htmlProgress = document.getElementById("html-progress");
  const cssProgress = document.getElementById("css-progress");
  const jsProgress = document.getElementById("js-progress");

  const htmlPercent = 50;
  const cssPercent = 70;
  const jsPercent = 90;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  const htmlWidth = (scrollY / (pageHeight - windowHeight)) * htmlPercent;
  const cssWidth = (scrollY / (pageHeight - windowHeight)) * cssPercent;
  const jsWidth = (scrollY / (pageHeight - windowHeight)) * jsPercent;

  htmlProgress.style.width = `${htmlWidth}%`;
  htmlProgress.textContent = `HTML (${Math.round(htmlWidth)}) %`;

  cssProgress.style.width = `${cssWidth}%`;
  cssProgress.textContent = `CSS ( ${Math.round(cssWidth)}) %`;

  jsProgress.style.width = `${jsWidth}%`;
  jsProgress.textContent = `JS (${Math.round(jsWidth)}) %`;
}

const slides = document.querySelectorAll(".slide2");
const slideButtons = document.querySelectorAll(".slide-button");
const slidshow = document.querySelector(".slideshow_container");
const recomendation = document.querySelector(".recomendation");

let currentSlideIndex = 0;

function showSlide(index) {
  slides[currentSlideIndex].style.display = "none";
  slideButtons[currentSlideIndex].classList.remove("active");
  currentSlideIndex = index % slides.length;
  slides[currentSlideIndex].style.display = "block";
  slideButtons[currentSlideIndex].classList.add("active");
}


for (let i = 0; i < slideButtons.length; i++) {
  slideButtons[i].addEventListener("click", () => showSlide(i));
}
showSlide(currentSlideIndex);


document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('submit');
  const modal = document.getElementById('modal');
  



  sendButton.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('messageId').value;

    const formData = {
      name: name,
      email: email,
      website: website,
      message: message
    };

    fetch('https://borjomi.loremipsum.ge/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 1) {
        modal.style.display = 'block'; // Show success modal
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
  });
});



