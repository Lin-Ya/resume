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
const model =require('./index_messageManger')
$(function () {
    owl.init();

    //圆形数据进度图
    $('.circlechart').circlechart();
    //tab切换
    $('#project-nav a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
    model.init($('#message-name'),$('#message-data'),$('#message-submit'));
});