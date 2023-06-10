let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslide");
  if (n > slides.length){
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  }

  /* Nav Bar*/

  function myFunction() {
  var x = document.getElementsByClassName("heading");
  if (x.className === "heading") {
    x.className += " responsive";
  } else {
    x.className = "heading";
  }
}