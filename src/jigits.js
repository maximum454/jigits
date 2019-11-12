import './jigits.scss'
import './scss/patrial/slick.scss'
import './js/slick'


import './img/logo.svg'
import './img/salons.jpg'
import './img/logo-big.svg'
import './img/about-img.jpg'
import './img/barbers-1.jpg'
import './img/barbers-2.jpg'
import './img/barbers-3.jpg'
import './img/MorgansLogo.svg'
import './img/footer-instagram.svg'
import './img/99907.jpg'
import './img/102373.jpg'
import './img/102694.jpg'
import './img/104929.jpg'
import './img/DSC00617.jpg'
import './img/DSC00649.jpg'
import './img/DSC00709.jpg'

import './img/DSC00825.jpg'
import './img/DSC00866.jpg'
import './img/DSC00891.jpg'


$('.js-slider').slick({
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: false,
    speed: 300,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(window).scroll(function () {
    var nav = $('.nav');
    if ($(this).scrollTop() > 0) {
        nav.addClass("f-nav");
    } else {
        nav.removeClass("f-nav");
    }
});

$(".menu, .menu-mobile").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 50;
    $('body,html').animate({scrollTop: top}, 1000);
    $('.menu-mobile').removeClass("active");
});

$('.js-sandwich').on("click", function () {
    $('.menu-mobile').toggleClass('active');
});

$('.js-zapis').on('click', function () {
    $('.iframe').toggleClass("active");
});

$('.js-zapis-close').on('click', function () {
    $('.iframe').toggleClass("active");
});




