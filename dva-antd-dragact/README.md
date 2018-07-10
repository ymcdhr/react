# 目录

# React安装
### 1、直接创建新的项目

* 创建新项目文件

npm install -g create-react-app <br/>
create-react-app my-app <br/>

* 启动调试

cd my-app <br/>
npm start <br/>



### 2、在现有项目上引入react

* 使用npm安装react，并安装es6和jsx 

npm install --save react react-dom <br/>
npm install --save react babel-preset-react babel-preset-es2015  <br/>

* react也可以直接引入js使用，但不建议这样使用

<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> <br/>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> <br/>

# React/Vue/Angularjs特点
### react
* 1、社区活跃，插件丰富；
* 2、组件化思维，一切都是组件，更方便代码的维护和重用；
* 3、虚拟dom，性能更优（相比于jquery，减少来很多dom的操作）；
* 4、没有什么不好，除了学习路线比较陡峭以外；
* 5、声明式写法更符合人性；
* 6、单向数据流；


### vue


### angularjs

# react基础知识
### 编程思想：全局组件化，入口 =》组件（可能是路由组件） =》子组件（可能是嵌套路由）=》各种子组件
### 认识jsx
* 1、 在jsx中定义dom元素（即传统的html写在哪里？）：

js的扩展语法，在jsx中将html和js变量/表达式混合使用。
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
* 2、在jsx中书写表达式。
（1）可以在jsx中嵌入表达式，例如：
```js
const DemoDOM = () => {
    let str = '表达式';
    return (
        <div>
            <p>您可以在jsx dom中嵌入{str}</p>
            <p>组件的定义方式一：函数式定义</p>
        </div>
    )
}
```
（2）可以在jsx中嵌入map，使用大括号，例如：
```js
const NumberList = (props) => {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```
（3） if 语句和  for 循环在 JavaScript 中不是表达式，因此它们不能直接在 JSX 中使用，但是你可以将它们放在变量或者子组件中。
```js
const NumberDescriber = (props)  => {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```
（4）或者根据条件来确定是否渲染React元素，而不是用if语句：
```js
<div>
  {showHeader && <Header />}
  <Content />
</div>
```
（5）返回数组时，不需要额外的包裹：
```js
render() {
  // 不需要使用额外的元素包裹数组中的元素
  return [
    // 不要忘记 key :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```

* 3、react页面渲染的入口。
（1）将elment挂载到首页标签上，在element中引入子组件即可。
```js
const React = require('react');
const ReactDOM = require('react-dom');
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
（2）通常情况下，react只执行一次ReactDOM.render，所以页面通过路由/子组件引入
