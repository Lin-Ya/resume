import '../css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../lib/owl.carousel.min.js'
import '../lib/owl.carousel.min.css'
import '../less/index.less'


$(function () {
    $('#owl-welcome').owlCarousel({
        items: 1,
        autoPlay: true,
        loop: true,
        nav: true
    });
});