// import 'reset-css'
import '../css/normalize.css';

//依赖jQuery插件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../lib/owl.carousel.min.js'
import '../lib/owl.carousel.min.css'
import '../lib/circle'
import '../lib/circle.css'


//本体样式
import '../less/index.less'


$(function () {
    //轮播
    $('#owl-welcome').owlCarousel({
        items: 1,
        autoplay: 3800,
        autoplaySpeed: 2000,
        loop: true,
        animateOut: 'fadeOut',
        dots: false
    });
    $('#owl-skills').owlCarousel({
        autoplay: 3800,
        autoplaySpeed: 2000,
        loop: true,
        dots: true,
        margin: 10,
        pagination: true,
        info: true,
        responsive: {
            0: {
                dotsEach: 1,
                items: 1
            },
            768: {
                items: 2,
                dotsEach: 2
            },
            992: {
                items: 3,
                dotsEach: 3
            },
            1200: {
                items: 4,
                dotsEach: 1
            }
        }
    });
    $('#owl-message').owlCarousel({
        items: 1,
        autoplay: 3800,
        autoplaySpeed: 2000,
        loop: true,
        animateOut: 'fadeOut',
        dots: false
    })

    //圆形数据进度图
    $('.circlechart').circlechart();
    //tab切换
    $('#project-nav a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
});