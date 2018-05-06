import AV from 'leancloud-storage'

// 设置你的app的id和key，在自己的leancloud控制台里面新建应用（免费），然后拷贝过来
var APP_ID = 'n4Yf04qWyxzmjsbwDAVI2aum-gzGzoHsz';
var APP_KEY = 'gsuXDBVJP49sGU1mYoGaI6jw';

//初始化

//绑定对象，这里传入的是jQuery对象，绑定
const model = {
    init: function ($name,$content,$submit) {
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
        this.bind($name,$content,$submit);
    },
    save: function (name,content) {
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.set({name,content})
        console.log(message)
        // message.save({
        //     name,content
        // }).then((res)=>{
        //     console.log(res)
        // },(error)=>{
        //     console.log('报错')
        //     console.log(error + '报错')
        // })
    },
    bind: function ($name,$content,$submit) {
        $submit.on('click',(e)=>{
            e.preventDefault();
            let name = $name.val();
            let content = $content.val();
            this.save(name,content)
        })
    }, 
}

module.exports = model;