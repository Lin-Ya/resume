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

const AV = require('leancloud-storage')
const owl = require('./index_owl');
const control =require('./index_messageManger')
$(function () {
    owl.init();

    //圆形数据进度图
    $('.circlechart').circlechart();
    //tab切换
    $('#project-nav a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
    let target = {}
        target.$view = $('#owl-message'),
        target.$name = $('#message-name'),
target.$content = $('#message-data'),
        target.$form = $('#message-form')
    
    control.init(target);
});