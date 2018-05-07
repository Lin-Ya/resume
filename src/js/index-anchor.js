const anchor = {
    //接受参数是jQuery对象，可以是一个或多个
    bind: function ($target) {
        $target.each(function () {
            let $this = $(this)
            $this.on('click', function () {
                var href = $this.attr("href");
                var pos = $(href).offset().top - 60;
                $("html,body").animate({ scrollTop: pos }, 1000);
                return false;
            })
        })
    }
}
module.exports = anchor