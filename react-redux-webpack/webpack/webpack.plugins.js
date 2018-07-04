;(function(m,undefined){
    const webpack = require('webpack');
    const HtmlWebpackPlugin = require("html-webpack-plugin"); //打包html的插件
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const helper = require("./webpack.helper");

    let Plugins = [
        // 提取css，统一打包到style.css
        new ExtractTextPlugin({
            filename: 'css/[name]-[hash:8].css'
        }),


        /**
         * 打包公共库/插件文件
         * 1、可以将入口的文件合并打包
         * 2、可以将入口文件中共用的import/require的文件提取出来
         * 3、提取公用代码时，会根据minChunks条件来做判断
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor'],// entry中的模块名称
            filename: 'vendor.bundle.js',
            minChunks: 2// 最小调用次数
        }),
        /**
         * 用于生成html文件，配置参考：https://segmentfault.com/a/1190000007294861
         */
        new HtmlWebpackPlugin({
            title: "react-redux-webpack",
            filename: "index.html",
            template: "./src/index.html",//引用模版，会将处理过后的css和js添加的模版中，也可以是其它格式的模版（需要安装对应的插件）
            inject: true,// script是否至于body底部
            minify: {
                removeAttributeQuotes: false // 移除属性的引号
            },
            hash: true,
            cache: true,
            showErrors: true,// 如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true ，也就是显示错误信息。
            chunks: ['index','vendor'],// 指定加载js文件，默认全部加载
            xhtml: false
        }), 
        /**
         * 文件拷贝，参数如下
         * from    定义要拷贝的源目录           from: __dirname + ‘/src/public’
         * to      定义要拷贝到的目标目录     from: __dirname + ‘/dist’
         * toType  file 或者 dir         可选，默认是文件
         * force   强制覆盖先前的插件           可选 默认false
         * context                         可选 默认base context可用specific context
         * flatten 只拷贝文件不管文件夹      默认是false
         * ignore  忽略拷贝指定的文件           可以用模糊匹配
         */
        new CopyWebpackPlugin([
          {
            from: __dirname + "/../src/data/",
            to: __dirname + "/../"+helper.getEnv()+"/data/"
          }
        ]),

        /**
         * 压缩混淆代码
         */
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,   // 打开代码映射
            // beautify: true, // 美化代码，默认关闭
            // mangle: true,   // 混淆代码，默认打开
            comments: false    // 去掉注释和版权信息
        })
      ];

      // hot 模式下package.json中加了--hot参数就不需要了，des模式需要
      if(helper.getEnv()==="des"||helper.getEnv()==="exp"){
        // 热更新与热加载hmr
        // webpack-dev-server --hot，加了参数hot就可以省略HotModuleReplacementPlugin
        Plugins.push(new webpack.HotModuleReplacementPlugin());
        // Use NoErrorsPlugin for webpack 1.x
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        Plugins.push(new webpack.NoEmitOnErrorsPlugin());
      }
      else{
          console.log("env:",helper.getEnv());
      }

      m.exports = Plugins;
}(module));