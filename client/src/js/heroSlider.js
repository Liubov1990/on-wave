import { heroSliderOptions } from './constants.js';

$(document).ready(function () {
  const heroSlider = document.querySelector('.hero-slider');

  $(heroSlider).slick(heroSliderOptions);
});
