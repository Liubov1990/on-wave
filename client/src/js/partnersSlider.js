import { partnersSliderOptions } from './constants.js';

$(document).ready(function () {
  const partnersSlider = document.querySelector('.partners-slider__list');

  $(partnersSlider).slick(partnersSliderOptions);
});
