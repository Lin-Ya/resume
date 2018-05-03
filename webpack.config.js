const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 拆分css样式的插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack')


module.exports = {
    entry: './src/js/index.js',    // 入口文件
    output: {
        filename: 'bundle.[hash:4].js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
        
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    use: ['css-loader','postcss-loader'],
                    publicPath: '../'   //公共路径，为了处理在css中引用其他文件如引用img/01.jpg，就要查找上一级目录下的img
                })
            },
            {
                test: /\.less$/,     // 解析css
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    use: ['css-loader', 'postcss-loader', 'less-loader'],
                    publicPath: '../'   //公共路径，为了处理在css中引用其他文件如引用img/01.jpg，就要查找上一级目录下的img
                    
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'   // 图片打包后存放的目录。位于输出目录下
                        }
                    }
                ]
            },
            {
                //当html文件内有img标签引用图片的时候，也能可以处理
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            },
            {
                //处理字体文件
                test: /\.(woff|svg|eot|ttf|otf)(\??.*)?/,
                use: ['url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]']
            },
            {   
                test: /\.js$/,
                use: 'babel-loader',
                include: /src/,          // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            },
            {
                test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
                loader: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            },
        ]
    },
    plugins: [
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css'),
        // 打包前先清空
        new CleanWebpackPlugin('dist'),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: false               // 开启热更新
    },
    resolve: {
        // 别名
        // alias: {
        //     jquery: path.join(__dirname, "/src/lib/jquery.js")
        // },
        // 省略后缀
        extensions: ['.js', '.json', '.css']
    }, 
    devtool: 'source-map',
    mode: 'development'      // 模式配置
}
