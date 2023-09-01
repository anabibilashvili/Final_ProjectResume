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

const skills = [
  { name: 'html', percent: 80 },
  { name: 'css', percent: 70 },
  { name: 'js', percent: 50 },
];

function animateSkillBars() {
  skills.forEach(skill => {
    const skillProgress = document.querySelector(`.skill-progress.${skill.name}`);
    const targetWidth = (skill.percent / 100) * skillProgress.parentElement.offsetWidth;

    let currentWidth = 0;
    const animationInterval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(animationInterval);
      } else {
        currentWidth++;
        skillProgress.style.width = `${currentWidth}px`;
      }
    }, 10); // Adjust the interval for smoother/faster animation
  });
}

// Call the function to animate skill bars when the page loads
animateSkillBars();

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

document.addEventListener('DOMContentLoaded', function () {
  const filterCategory = document.querySelectorAll('.chooseCategory');
  const items = document.querySelectorAll('.item');

  filterCategory.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-category');

          items.forEach(item => {
              const itemCategory = item.getAttribute('data-category');
              if (category === 'all' || category === itemCategory) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});



