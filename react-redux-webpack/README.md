# 配置安装
git clone 到本地目录 <br/>
npm install 执行安装（注意拷贝文件时，不要遗漏类.babelrc文件）<br/>

# 编译调试
启动本地热更新调试：npm run hot<br/>
调试工具：react_dev_tools_3_2_3_0.crx，可以在chrome中帮助查看react虚拟dom<br/>

# 生产构建（暂时用不到，预留）
npm run prd<br/>

# 项目目录结构
├── Readme.md                   // help<br/>
├── package.json                // npm包管理，scripts里面定义了打包环境与命令<br/>
├── webpack.config.js           // webpack配置<br/>
├── devServer.js                // webpack配置，webpack-dev-server基于node api的配置方式<br/>
├── expServer.js                // webpack配置，webpack-dev-middleware基于node api的配置<br/>
├── webpack                     // webpack配置<br/>
├── ├── webpack.helper.js       // webpack配置，打包入口等<br/>
├── ├── webpack.ouput.js        // webpack配置，打包输出目录，包括虚拟目录<br/>
├── ├── webpack.rules.js        // webpack配置，js/css文件处理器等<br/>
├── ├── webpack.plugins.js      // webpack配置，插件配置，html生成/提取公共代码等<br/>
├── ├── webpack.server.js       // webpack配置，webpack-dev-server基于devServer的配置<br/>
├── src                         // 网站源码<br/>
├── ├── index.html              // 首页html文件模版，webpack会根据此文件打包，添加引入<br/>
├── ├── entry.js                // 网站全局入口，引入react/redux等依赖<br/>
├── ├── style                   // css样式文件<br/>
├── ├── router                  // 路由配置<br/>
├── ├── ├── routers.js          // 路由配置详细对应关系<br/>
├── ├── pages                   // 路由对应的页面<br/>
├── ├── components              // 公用组件<br/>
├── ├── util                    // 公用库或者插件<br/>
├── ├── redux                   // redux：全局状态管理<br/>
├── ├── ├── actions             // redux：执行动作<br/>
├── ├── ├── reducers            // redux：获取新state<br/>
├── ├── ├── containers          // redux：绑定container组件和view组件<br/>
├── ├── data                    // 本地数据文件存储目录<br/>
├── .babelrc                    // ES6编译配置，也可以写到webpack.config.js中<br/>

# react开发说明
* 入口

1、entry.js全局入口，在此文件引入react、redux的依赖；<br/>
2、App.js为首页入口组件，在此调用路由。<br/>

* 路由

1、routeMenu.js 为左侧导航组件，使用const数据对象渲染模版展示；<br/>
2、routers.js 定义路由组件，包括引入“导航组件”负责展示和定义“路由视图”负责路由。<br/>

* 页面

1、pages目录，配合路由定义的页面存储到pages下面；<br/>
2、js和css可以共同使用一个子目录，在路由配置中引入<。br/>

* 公用组件

1、components目录，定义的组件存储到pages下面；<br/>
2、js和css可以共同使用一个子目录，在其它页面使用import引入。<br/>

* 本地数据

1、data目录，如果有需要使用本地数据，将json文件存入此目录，使用fetch获取。<br/>

# redux说明
### 1、react-redux用于全局数据/状态管理；
### 2、主要包括的概念：
* action 定义数据变更的type；

* reducer 执行数据变更的操作，旧 state => 新 state，初始化的数据在此定义；

* container 将容器组件和视图组件绑定，其中容器组件中处理action和reducer的数据，视图组件定义模版。

# Webpack 打包配置
参考：

