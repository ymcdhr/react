import React, { Component } from 'react';
// react-router 4.x写法
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
// react-router 2.x写法
// import { Router, Route, hashHistory, Link } from 'react-router';

import './routers.css';

import RouteMenu from "./routeMenu";
// 路由页面
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import SubRouter from '../pages/subRouter'
import Coms from '../components/coms.js'


const Home = () => (
    <div>
      <h1>Welcome to the Tornadoes Website!</h1>
    </div>
  )

/**
 * 路由导航展示自页面
 */
const RouteView = () => (
    <div className="view-box">
        {/* exact表示严格匹配，通常根目录/需要指定，否则无法切换 */}
        <Switch>
            <Route exact path='/' component={Home}/>
            {/* 还需要写一个异步action示例 */}
            <Route path='/redux' component={Coms}/>
            <Route path='/subrouter' component={SubRouter}/>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
            <Route path='/page3' component={Page3}/>
        </Switch>
    </div>
)

/**
 * 路由导航app
 */
class RouterApp extends Component {
    render() {
        return (
            <div className="router-box">
                {/* 路由导航 */}
                <RouteMenu />

                {/* 路由视图 */}
                <RouteView />
            </div>
        )
    }
}

  

// 以下是自定义组件示例
class Routers extends Component {
    render() {
        return (
            <div className="router-demo">
                {/* 据说Router中只能放最多一个元素，所以放一个组件 */}
                <Router>
                    <RouterApp />
                </Router>
            </div>
        );
    }
}

export default Routers;