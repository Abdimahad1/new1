document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slideshow img');
    const dotsContainer = document.querySelector('.dots-container');
    const acceptBtn = document.getElementById('accept-btn');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
  
      updateDots(index);
      
      // Check if the current slide is the last one
      if (index === slides.length - 1) {
        acceptBtn.style.display = 'block'; // Show the accept button
      } else {
        acceptBtn.style.display = 'none'; // Hide the accept button
      }
    }
  
    function updateDots(index) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
  
    // Generate dots for each slide
    slides.forEach((slide, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => showSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    // Event listener for accept button
    document.getElementById('accept-btn').addEventListener('click', function() {
      // Redirect to the main page or perform any action
      window.location.href = "login.html";
    });
  
    // Event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
  });
  