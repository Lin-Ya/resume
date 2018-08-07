//本体样式
import './iconfont.js'
import '../css/normalize.css';
import '../less/index.less'


//依赖jQuery插件
import '../lib/fakeLoader.css'
import '../lib/fakeLoader'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../lib/owl.carousel.min.js'
import '../lib/owl.carousel.min.css'
import '../lib/circle'
import '../lib/circle.css'



//APP
const AV = require('leancloud-storage')
const owl = require('./index_owl');
const control = require('./index_messageManger')
const anchor = require('./index-anchor')
$(function () {
    //loader动画
    $("#fakeLoaders").fakeLoader({
        timeToHide: 2500, //设置loading动画显示的时间
        zIndex: "999", //设置z-index层级
        spinner: "spinner6", //这里有[spinner1,spinner2,...,spinner7]7种动画
        bgColor: "#2a74e2", //设置背景颜色
    });
    //轮播
    owl.init();
    //圆形数据进度图
    $('.circlechart').circlechart();
    //tab切换
    $('#project-nav a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
    //留言板
    let messageTarget = {}
    messageTarget.$view = $('#owl-message'),
        messageTarget.$name = $('#message-name'),
        messageTarget.$content = $('#message-data'),
        messageTarget.$form = $('#message-form')
    control.init(messageTarget);

    //锚点跳转
    anchor.bind($('.page-jump'))

    //动态固定顶部的状态栏
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.bt-navbar').addClass('navbar-fixed-top')
        } else {
            $('.bt-navbar').removeClass('navbar-fixed-top')
        }
        watchingScroll()
    })

    function watchingScroll() {
        let $mySections = $('[data-x]')
        let length = $mySections.length
        let minIndex = 0
        for (let i = 1; i < length; i++) {
            if (Math.abs($mySections[i].offsetTop - window.scrollY) <
                Math.abs($mySections[minIndex].offsetTop - window.scrollY)
            ) {
                minIndex = i;
            }
        }
        $('.bt-navbar ul li').eq(minIndex).addClass('heightLight').siblings().removeClass('heightLight')
    }
});