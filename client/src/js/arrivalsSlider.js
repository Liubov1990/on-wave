import { arrivalsSliderOptions } from './constants.js';

$(document).ready(function () {
  const arrivalsSlider = document.querySelector('.arrivals-slider__list');

  $(arrivalsSlider).slick(arrivalsSliderOptions);
});
