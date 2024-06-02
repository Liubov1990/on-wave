export const heroSliderOptions = {
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 900,
  fade: true,
  cssEase: 'linear',
  lazyLoad: 'progressive',
  arrows: false,
  dots: true,
  dotsClass: 'custom-slider-dots'
};

export const arrivalsSliderOptions = {
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  lazyLoad: 'progressive',
  prevArrow: $('.arrivals-slider__prev-arrow'),
  nextArrow: $('.arrivals-slider__next-arrow'),
  // slidesToShow: 4.99,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        // slidesToShow: 2.99
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true,
        dotsClass: 'custom-slider-dots'
        // slidesToShow: 0.99
      }
    }
  ]
};

export const partnersSliderOptions = {
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1500,
  pauseOnFocus: false,
  lazyLoad: 'progressive',
  dots: false,
  prevArrow: $('.partners-slider__prev-arrow'),
  nextArrow: $('.partners-slider__next-arrow'),
  // slidesToShow: 8.99,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        // slidesToShow: 5.99
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: true,
        dotsClass: 'custom-slider-dots'
        // slidesToShow: 1.99
      }
    }
  ]
};
