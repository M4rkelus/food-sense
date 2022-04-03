const slides = document.querySelectorAll(".slider__baner");
const prevBtn = document.querySelector(".slider__previous");
const nextBtn = document.querySelector(".slider__next");
const sliderTabs = document.querySelectorAll(".slider__button");

let slideIndex = 1;

const toggleActiveTab = function () {
  sliderTabs.forEach((tab, i) => {
    if (i !== slideIndex - 1) {
      tab.classList.remove("slider__button_active");
    } else {
      tab.classList.add("slider__button_active");
    }
  });
};

const prevSlide = function () {
  slideIndex -= 1;
  showSlides(slideIndex);
  toggleActiveTab();
};

const nextSlide = function () {
  slideIndex += 1;
  showSlides(slideIndex);
  toggleActiveTab();
};

const currentSlide = function (num) {
  slideIndex = num;
  showSlides(slideIndex);
};

const showSlides = function (num) {
  if (num > slides.length) {
    slideIndex = 1;
  }

  if (num < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));

  slides[slideIndex - 1].style.display = "flex";
  sliderTabs[slideIndex - 1].classList.add("slider__button_active");
};

const handleTabClick = function (index) {
  currentSlide(index + 1);
  toggleActiveTab();
};

// Убириет transiton при загрузке страницы
const preventTransitonOnLoad = function () {
  document.querySelector(".preload").classList.remove("preload");
};

const registerEventListeners = function () {
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  sliderTabs.forEach((tab, index) =>
    tab.addEventListener("click", () => handleTabClick(index))
  );
  window.addEventListener("load", preventTransitonOnLoad);
};

const init = function () {
  registerEventListeners();
  showSlides(slideIndex);
};
init();
