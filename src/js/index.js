import '../css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../lib/owl.carousel.min.js'
import '../lib/owl.carousel.min.css'
import '../less/index.less'


$(function () {
    $('#owl-welcome').owlCarousel({
        items: 1,
        autoplay: 3800,
        autoplaySpeed: 2000,
        loop: true,
        animateOut: 'fadeOut'
        // nav: true
    });
});