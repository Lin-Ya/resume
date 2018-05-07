const owl = {};
owl.init = function () {
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
                items: 3,
                dotsEach: 3
            }
        }
    });
    $('#owl-message').owlCarousel({
        items: 1,
        autoplay: 3800,
        autoplaySpeed: 2000,
        loop: true,
        dots: false
    })
}

module.exports = owl;