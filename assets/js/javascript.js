let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i = 0;
  let slides = document.getElementsByClassName("box");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = 5;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i];
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "none";
  dots[slideIndex - 1].className += " active";
}
