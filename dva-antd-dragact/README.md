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
（1）如果多个子组件公用一个数据，建议使用状态提升将数据存储到父组件中 <br/>
（2）参考：http://www.css88.com/react/docs/lifting-state-up.html<br/>

### 7、获取组件的子元素（组件标签中包含的内容），例如xxxx：<Component> xxxx </Component><br/>
（1）通过this.props.children获取组件的内容，例如xxxx。<br/>
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


## react绑定样式方法

### 1、组件添加样式
（1）dom元素中添加className
```css
//在css文件中定义样式
.lala{
        color:red;
        font-size: 40px;
}
```
```js
//在jsx中 import css文件，然后dom元素上指定className
<div className="lala"> 我出来了!</div>
```
（2）dom元素中添加style
```js
let style={color:"red","font-size":"40px"}
<div style={style}> 我出来了! </div>
```
### 2、组件动态绑定样式
（1）动态绑定className
```js
class DemoStyle extends Component {
    constructor (){
        super();
        this.state = {
            dyStyle: "class-red"
        }

        setTimeout(()=>{
            this.setState({
                dyStyle: "class-blue"
            })
        },5000);
    }
    render() {
        return (
            <div className={this.state.dyStyle}>
                <p>5s后改变颜色</p>
            </div>
        );
    }
}
```
（2）动态绑定style
```js
class DemoStyle extends Component {
    constructor (){
        super();
        this.state = {
            dyStyle: {
                color: 'red',
                fontSize: '14px'
            }
        }

        setTimeout(()=>{
            this.setState({
                dyStyle: {
                    color: 'blue',
                    fontSize: '18px'
                }
            })
        },5000);
    }
    render() {
        return (
            <div style={this.state.dyStyle}>
                <p>5s后改变颜色</p>
            </div>
        );
    }
}
```

## react事件绑定
### 1、组件中事件定义的几种方法：
（1）在函数function组件中定义事件
```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
（2）在类组件中定义事件，方式一：
（2.1）必须在constructor中bind this
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```
（3）在类组件中定义事件，方式二：可以在回调中使用一个 箭头函数
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 这个语法确保 `this` 被绑定在 handleClick 中
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
```
（4）事件传参：
```bash
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
（5）不能使用return false

## react中state&setState
### 1、组件的数据绑定，state使用：
（1）state定义与数据的绑定（参考示例）
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
（2）不能直接修改state，需要使用setState方法
```js
tick() {
    this.setState({
      date: new Date()
    });
}
```
（3）setState的使用以及两种传参方式：<br/>
（3.1）方式一，通过定义新对象（可以局部更新，setState会合并state），例如：<br/>
```js
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
（3.2）方式二，通过函数返回值（其中第一个参数为之前状态对象prevState），例如：
```js
// 正确
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
（4）state值是局部的，只能在当前组件使用。如果子组件需要使用，需要通过子组件的属性传值。<br/>
<br/>
（5）在绑定数据的时候，不要直接绑定一个对象；否则会报错～<br/>

# Redux
## 1、redux的应用场景
#### （1）基本应用场景：全局状态管理器，或者全局数据，全局变量的存储器！

#### （2）常见的应用场景：
#### （2.1）多个页面都要用的公共信息 ；如果存进store就不用每个页面都像服务器请求数据；
例如：购物网站，已经添加到购物车中的商品；在购买页面/购物车页面/确认订单等页面都可能用到商品数据。

#### （2.2）一个页面有多个http请求获取数据 ；？
例如：Dashboard上有多个模块，每个模块的数据都是一个请求；且每个模块都有一些操作会对数据进行改变。

#### （2.3）不同组件之间期望不用通过组件代码通信；
例如：父子组件嵌套较深，且有较频繁的数据通信。

#### （3）为什么应用redux：
随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。<br/><br/>

管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。<br/>

 


## 2、redux的原始组成部分
（1）action，描述“发生了什么”<br/>
（2）reducer，根据 action 更新 state <br/>
（3）store，关联action和reducer<br/>

## 3、redux的特点：严格的单向数据流

## 4、redux的原始流程：

（1）定义action => dispatch(action) 将action传入store<br/>
（2）Redux store 调用 reducer 函数，并将state树和action作为参数<br/>
（3）combineReducers函数将多个reducer合并为一个<br/>
（4）Redux store 保存了根 reducer 返回的完整 state 树。所有订阅  store.subscribe(listener) 的监听器都将被调用；监听器里可以调用  store.getState() 获得当前 state。<br/>

 


5、react-redux的结构

（1）定义ui组件，写好模版        =>        1个模版为1个js文件<br/>
（2）定义action：描述“发生了什么”        =>         写入action.js<br/>
（3）定义reducer：在触发action时（即触发ui组件上的事件），store会触发对应的reducer 返回新的store       =>        每个reducer为1个js文件，最后使用combineReducers合并所有reducer<br/>
（4）定义容器组件        =>        将容器组件connect绑定到ui组件，写在1个js文件中<br/>
mapStateToProps：给reducer里面返回的新state做处理，例如过滤/取别名等<br/>
mapDispatchToProps：根据action使用dispatch来定义事件，将action和事件关联到ui组件里面，在ui组件触发<br/>
connect：将mapStateToProps、mapDispatchToProps和ui组件进行绑定<br/>
（5）入口，使用：let store = createStore(reducers) 将容器组件和reducer进行绑定。<br/>
（6）调用，在页面中调用容器组件<br/>
