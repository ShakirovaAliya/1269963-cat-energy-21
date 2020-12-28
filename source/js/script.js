let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
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
let buttonBefore = document.querySelector(".slider__button--before");
let buttonAfter = document.querySelector(".slider__button--after");
let currentSlider = document.querySelector(".slider__item");
let firstSlide = document.querySelector(".slider__item--before");
let secondSlide = document.querySelector(".slider__item--after");
let sliderBar = document.querySelector(".slider__bar");
let sliderToggle = document.querySelector(".slider__toggle");
let slider = document.querySelector(".slider");

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

let form = document.querySelector(".form");
let formField = document.querySelectorAll(".form__field");

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

// map

let mapImg = document.querySelector(".address__image");
mapImg.style.display = "none";
let myMap = document.getElementById("mymap");
myMap.style.height = "100%";
