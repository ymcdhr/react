# 目录

# React安装
### 1、直接创建新的项目

#### 创建新项目文件

npm install -g create-react-app <br/>
create-react-app my-app <br/>

#### 启动调试

cd my-app <br/>
npm start <br/>



### 2、在现有项目上引入react

#### 使用npm安装react，并安装es6和jsx 

npm install --save react react-dom <br/>
npm install --save react babel-preset-react babel-preset-es2015  <br/>

#### react也可以直接引入js使用，但不建议这样使用

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
编程思想：全局组件化，入口 =》组件（可能是路由组件） =》子组件（可能是嵌套路由）=》各种子组件

## 认识jsx
#### 1、 在jsx中定义dom元素（即传统的html写在哪里？）：

js的扩展语法，在jsx中将html和js变量/表达式混合使用。
```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
#### 2、在jsx中书写表达式。
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

#### 3、react页面渲染的入口。
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


## react组件的使用

### 1、组件定义的方式有两种：
（1）方式一：函数组件，es5/es6写法都是可以的。
```js
let Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
}
```
（2）方式二：类组件
```js
class Welcome extends React.Component {
    constructor(){
    }
    render(){
        return <h1>Hello, {props.name}</h1>;
    }
}
```
（3）方式三：React.createClass(老版本)


### 2、组件定义的两种方式的区别：
（1）函数式组件：只能定义简单的html标签和变量绑定，没有类的私有属性等。<br/>
（2）类继承组件：有类的私有属性，例如this.state，生命周期的方法等。<br/>

### 3、组件的生命周期
（1）在类组件中有两个生命周期方法
```js
  //钩子在组件输出被渲染到 DOM 之后运行
  componentDidMount() {
  }
  //组件卸载的时候
  componentWillUnmount() {
  }
  //
  componentWillReceiveProps(){
  }
```

### 4、父组件传递数据到子组件
（1）调用子组件时，在子组件上使用属性
```js
<Welcome name="向组件传递的值"/>
```
（2）子组件通过props获取值（props为只读）<br/>
（2.1）子组件 为function 函数定义：props作为函数参数
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
（2.2）子组件为类class定义：
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
（3）子组件为类class定义时，constructor必须指定super(props)，参考：https://segmentfault.com/q/1010000008340434 <br/>

（3.1）super()的目的：在ES6中，在子类的 constructor中必须先调用 super才能引用 this。因为super相当于在子类中继承父类的constructor。<br/>

（3.2）super(props)的目的：在 constructor中可以使用 this.props，继承祖先的props属性。<br/>

（3.3）无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；如果没用到constructor,是可以不写的,直接使用变量：{this.props.handleEmail}<br/>

### 5、子组件传递数据到父组件
```js
/**
 * 子组件向父组件传值
 */
class DemoFather extends Component {
    constructor (props){
        super(props);
        this.state = {
            email: ""
        }
    }
    handleEmail (e){
        this.setState({email: e.target.value});
    }
    render() {
        return (
            <div>
                <p>输入的地址：{this.state.email}</p>
                {/* 
                this.handleEmail会在子组件中被调用
                为了让this.handleEmail里面的this指向父组件，而不是子组件，所以需要绑定bind
                或者使用箭头函数，类似于定义事件的处理
                */}
                {/* <DemoChild handleEmail={this.handleEmail.bind(this)}/> */}
                <DemoChild handleEmail={(e)=>{this.handleEmail(e)}}/>
            </div>
        );
    }
}
```
```js
class DemoChild extends Component {
    render() {
        return (
            <div>
                {/* 在子组件中可以直接通过this.props调用属性 */}
                <input onChange={this.props.handleEmail}/>
            </div>
        );
    }
}
```

### 6、数据的状态提升
（1）如果多个子组件公用一个数据，建议使用状态提升将数据存储到父组件中
（2）参考：http://www.css88.com/react/docs/lifting-state-up.html

### 7、获取组件的子元素（组件标签中包含的内容），例如xxxx：<Component> xxxx </Component>
（1）通过this.props.children获取组件的内容，例如xxxx。
（2）可以自定义组件内容：
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```
