document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.partners-content__carousel');
  const carouselWrapper = carousel.querySelector('.partners-content__carousel-wrapper');
  const slides = carousel.querySelectorAll('.partners-content__carousel-slide');
  const prevButton = document.querySelector('.partners-content__controls-prev');
  const nextButton = document.querySelector('.partners-content__controls-next');
  const pagination = document.querySelector('.partners-content__pagination');

  let slidesToShow = getSlidesToShow();
  let slideWidth = 100 / slidesToShow;
  let currentIndex = 0;

  // Initialize slides width
  function updateSlides() {
    slidesToShow = getSlidesToShow();
    slideWidth = 100 / slidesToShow;

    slides.forEach(slide => {
      slide.style.flex = `0 0 ${slideWidth}%`;
    });

    createPagination();
    goToSlide(currentIndex);
  }

  //Slides per watch
  function getSlidesToShow() {
    if (window.innerWidth >= 640) {
      return 1;
    } else {
      return 1;
    }
  }

  //Create pagination
  function createPagination() {
    pagination.innerHTML = '';
    const totalDots = Math.ceil(slides.length / slidesToShow);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      pagination.appendChild(dot);
    }
    updatePagination();
  }

  function updatePagination() {
    const dots = pagination.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  //Go to slide
  function goToSlide(index) {
    if (index < 0) {
      index = 0;
    } else if (index >= Math.ceil(slides.length / slidesToShow)) {
      index = Math.ceil(slides.length / slidesToShow) - 1;
    }
    currentIndex = index;
    const offset = currentIndex * (100 / slidesToShow);
    carouselWrapper.style.transform = `translateX(-${offset}%)`;
    updatePagination();
    updateButtons();
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= Math.ceil(slides.length / slidesToShow) - 1;
  }

  prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

  window.addEventListener('resize', updateSlides);

  updateSlides();
  createPagination();
  goToSlide(0);
});