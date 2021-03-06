// 
// This article about JS Event Listners helped me to modifiy solutions found in this script for my needs.
// Limitations of a single function per event, per element was not an option.
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-event-listeners.php

// --------------------------------------------- Navbar Close Function

/**
* Code sourced from fellow student
* byIlsa and mentor Simen Daehlin
*/

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

// --------------------------------------------- End-of-function

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

// Used source code & css from W3schools to enable this feature. Modified for my needs.
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

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

// Used source code from W3Schools Automatic Slideshow
// and modified for my needs - https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}  

// --------------------------------------------- End-of-function

// --------------------------------------------- Form Alert Function

// Set Button Variable(s)
var contact_btn = document.getElementById("contactSub");
var modal_btn = document.getElementById("bookingSub");

function formReply() {
    alert("Thank you for testing this form and its functions. As you may have guessed, the SUBMIT button works as expected, however form attributes Action and Method have not been configured for this project. This feature will be developed in the future.");
}

// Button Event Handler
contact_btn.onclick = formReply;
modal_btn.onclick = formReply;

// --------------------------------------------- End-of-function