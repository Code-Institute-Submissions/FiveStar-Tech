// --------------------------------------------- Service Function

// Set Button Variable(s)
var service_01_btn = document.getElementById("service_01");
var service_02_btn = document.getElementById("service_02");
var service_03_btn = document.getElementById("service_03");
var splash_btn = document.getElementById("splash_btn");

function service_01(){
    document.getElementById("bookingService").value = document.getElementById("service_01").value;
}

function service_02(){
    document.getElementById("bookingService").value = document.getElementById("service_02").value;
}

function service_03(){
    document.getElementById("bookingService").value = document.getElementById("service_03").value;
}

// Button Event Handler
service_01_btn.onclick = service_01;
service_02_btn.onclick = service_02;
service_03_btn.onclick = service_03;
splash_btn.onclick = service_02;

// --------------------------------------------- End-of-function

// --------------------------------------------- Back To Top Function

var top_btn = document.getElementById("top_btn");

// When the user scrolls down 800 pixels from the top of the document, show the top button
window.onscroll = function() {scrollFunction()};

// Show Top Button After 800 Pixels
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    top_btn.style.display = "block";
  } else {
    top_btn.style.display = "none";
  }
}

// Scroll-to-Top On Click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Button Event Handler
top_btn.onclick = topFunction;

// --------------------------------------------- End-of-function

// --------------------------------------------- Automatic Slideshow function

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("section__slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}  

// --------------------------------------------- End-of-function