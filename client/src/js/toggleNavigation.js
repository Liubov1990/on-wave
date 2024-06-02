$(document).ready(function () {
  const $burgerElem = $('#burger');
  const $navElem = $('.header__nav')[0];
  const $navLink = $('.header__nav-link');

  function toggleNav() {
    this.classList.toggle('is-active');
    $navElem.classList.toggle('is-open');
  }

  function removeActiveNav() {
    $('#burger').removeClass('is-active');
    $('.header__nav').removeClass('is-open');
  }

  function checkActiveClass() {
    const display = $burgerElem.css('display');

    if (display === 'none') {
      removeActiveNav();
    }
  }

  $navLink.on('click', removeActiveNav);
  $burgerElem.on('click', toggleNav);
  $(window).on('resize', checkActiveClass);
});
