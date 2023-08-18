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
