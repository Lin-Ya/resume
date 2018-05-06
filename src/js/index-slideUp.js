const slideUp = {
    init: function ($target) {
        $target.on('load', this.bind($target))
    },
    bind: function ($target) {
        $target.css('margin-top','30px')
        $(window).on('scroll',function () {
            let toTop = $target.offset().top
            let windowHeight = $(window).height()
            let scroolTop = $(window).scrollTop()
            if(toTop - windowHeight < scroolTop + 30) {            
                console.log('他出现了')
            }
        }) 
    }
}

module.exports = slideUp