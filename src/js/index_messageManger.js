import AV from 'leancloud-storage'

// 设置你的app的id和key，在自己的leancloud控制台里面新建应用（免费），然后拷贝过来
var APP_ID = 'n4Yf04qWyxzmjsbwDAVI2aum-gzGzoHsz';
var APP_KEY = 'gsuXDBVJP49sGU1mYoGaI6jw';

//初始化

//绑定对象，这里传入的是jQuery对象，绑定
const model = {
    init: function ($name, $content, $submit) {
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
    },
    save: function (name, content) {
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.save({
            name, content
        }).then((res) => {
            control.loadMessage()
        }, (error) => {
            console.log('报错')
            console.log(error + '报错')
        })
    },
    fetch: function () {
        let query = new AV.Query('Message')
        return query.find()
    }
}

//control
const control = {
    view: null,
    callback: null,
    init: function (targetConfig) {
        Object.assign(this,targetConfig)
        model.init()
        this.loadMessage()
        this.bindEvent()
    },
    bindEvent: function () {
        this.$form.on('submit', (e) => {
            e.preventDefault();
            let name = this.$name.val();
            let content = this.$content.val();
            if (name === "" || content === "") {
                alert("请填写完整在提交")
                return;
            } else if (name.replace(/\s+/g, "").length > 10) {
                alert("用户名太长，请换个用户名。")
                return;
            }
            model.save(name, content)
            this.$name.val('')
            this.$content.val('')
        })
    },
    createNote: function (arr) {
        let message = arr.attributes
        let {name,content} = message;
        let $item = $(`
            <li class="item">
                <h4 class="owner-name">${name}</h4>
                <div class="owner-content">
                <p class="owner-message">${content}</p>
                </div>
            </li>
        `)
        this.render($item)
    },
    loadMessage: function () {
        model.fetch().then((res) => {
            res.forEach(arr => {
                this.createNote(arr)
            }, error => {
                console.log('获取数据失败')
                console.log(error)
            });
        })
    },
    render: function ($item) {
        //这里最坑，因为如果只是添加的话会导致每次都重复添加之前的数据
        //在最后要出发一次update事件。
        this.$view.trigger('add.owl.carousel', [$item]).trigger('update.owl.carousel');
    }
}



module.exports = control;