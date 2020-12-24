var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function(evt) {
  if(navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
  }
});


// slider
var buttonBefore = document.querySelector(".slider__button--before");
var buttonAfter = document.querySelector(".slider__button--after");
var currentSlider = document.querySelector(".slider__item");
var firstSlide = document.querySelector(".slider__item--before");
var secondSlide = document.querySelector(".slider__item--after");
var sliderBar = document.querySelector(".slider__bar");
var sliderToggle = document.querySelector(".slider__toggle");
var slider = document.querySelector(".slider");

if(slider) {
  buttonAfter.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.remove("slider__item--current");
    secondSlide.classList.add("slider__item--current");
    sliderBar.style.margin = "3px 4px 0 43px";
    sliderToggle.style.left = "95%";
  })

  buttonBefore.addEventListener("click", function (evt) {
    evt.preventDefault();
    secondSlide.classList.remove("slider__item--current");
    firstSlide.classList.add("slider__item--current");
    sliderBar.style.margin = "3px 43px 0 4px";
    sliderToggle.style.left = "0%";
  })
}


// form error

var form = document.querySelector(".form");
var formField = document.querySelectorAll(".form__field");

if(form) {
  form.addEventListener("submit", function (evt) {
    for (var i=0; i<=4; i++) {
      if (!formField[i].value) {
        evt.preventDefault();
        formField[i].classList.add("form__field--error");
      } else {
        formField[i].classList.remove("form__field--error");
      }
    }
  })
}
