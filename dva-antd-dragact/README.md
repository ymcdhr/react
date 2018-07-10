# 目录

# React安装
### 1、直接创建新的项目

* （1）创建新项目文件

npm install -g create-react-app <br/>
create-react-app my-app <br/>

* （2）启动调试

cd my-app <br/>
npm start <br/>



### 2、在现有项目上引入react

* （1）使用npm安装react，并安装es6和jsx 

npm install --save react react-dom <br/>
npm install --save react babel-preset-react babel-preset-es2015  <br/>

* （2）react也可以直接引入js使用，但不建议这样使用

<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> <br/>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> <br/>

