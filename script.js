let slideIndex = 1;
let lastChangeTime = Date.now();

changeSlides(slideIndex);
slideShow();

// Next/previous controls
function plusSlides(n) {
  changeSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  changeSlides(slideIndex = n);
}

function changeSlides(n = null) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");

  if (n !== null) {
    slideIndex = n <= 0 ? slides.length : n > slides.length ? 1 : n;
  } else {
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
  }

  Array.from(slides).forEach((slide, index) => {
    slide.style.display = index + 1 === slideIndex ? "block" : "none";
  });

  Array.from(dots).forEach((dot, index) => {
    dot.className = index + 1 === slideIndex ? `${dot.className} active` : dot.className.replace(" active", "");
  });

  document.body.style.background = `url('Images/image${slideIndex}.jpg') center center / cover fixed`;
  document.body.style.transition = 'background 1s ease';
  
}

// SlideShow
function slideShow() {
  changeSlides();
  setTimeout(slideShow, 5000); // Change image every 5 seconds
}
