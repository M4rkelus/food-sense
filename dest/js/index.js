"use strict";

var slides = document.querySelectorAll(".slider__baner");
var prevBtn = document.querySelector(".slider__previous");
var nextBtn = document.querySelector(".slider__next");
var sliderTabs = document.querySelectorAll(".slider__button");
var slideIndex = 1;

var toggleActiveTab = function toggleActiveTab() {
  sliderTabs.forEach(function (tab, i) {
    if (i !== slideIndex - 1) {
      tab.classList.remove("slider__button_active");
    } else {
      tab.classList.add("slider__button_active");
    }
  });
};

var prevSlide = function prevSlide() {
  slideIndex -= 1;
  showSlides(slideIndex);
  toggleActiveTab();
};

var nextSlide = function nextSlide() {
  slideIndex += 1;
  showSlides(slideIndex);
  toggleActiveTab();
};

var currentSlide = function currentSlide(num) {
  slideIndex = num;
  showSlides(slideIndex);
};

var showSlides = function showSlides(num) {
  if (num > slides.length) {
    slideIndex = 1;
  }

  if (num < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(function (slide) {
    return slide.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "flex";
  sliderTabs[slideIndex - 1].classList.add("slider__button_active");
};

var handleTabClick = function handleTabClick(index) {
  currentSlide(index + 1);
  toggleActiveTab();
}; // Убириет transiton при загрузке страницы


var preventTransitonOnLoad = function preventTransitonOnLoad() {
  document.querySelector(".preload").classList.remove("preload");
};

var registerEventListeners = function registerEventListeners() {
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  sliderTabs.forEach(function (tab, index) {
    return tab.addEventListener("click", function () {
      return handleTabClick(index);
    });
  });
  window.addEventListener("load", preventTransitonOnLoad);
};

var init = function init() {
  registerEventListeners();
  showSlides(slideIndex);
};

init();