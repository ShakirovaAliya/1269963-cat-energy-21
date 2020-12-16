var buttonBefore = document.querySelector(".slider__button--before");
var buttonAfter = document.querySelector(".slider__button--after");
var currentSlider = document.querySelector(".slider__item");
var firstSlide = document.querySelector(".slider__item--before");
var secondSlide = document.querySelector(".slider__item--after");
var sliderBar = document.querySelector(".slider__bar");
var sliderToggle = document.querySelector(".slider__toggle");

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
