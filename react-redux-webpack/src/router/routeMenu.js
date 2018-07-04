import React, { Component } from 'react';
// react-router 4.x写法
import { Link } from 'react-router-dom';

import './routers.css';


const menuData = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Redux示例",
        path: "/redux"
    },
    {
        name: "嵌套路由示例",
        path: "/subrouter"
    },
    {
        name: "拖拽示例",
        path: "/page3"
    },
    {
        name: "各种组件",
        subMenu: [
            {
                name: "子组件1",
                path: "/page1"
            },
            {
                name: "子组件2",
                path: "/page2"
            }
        ]
    },
    {
        name: "测试menu",
        subMenu: [
            {
                name: "sub page1",
                path: "/page1"
            },
            {
                name: "sub page2",
                path: "/page2"
            }
        ]
    }
] 

/**
 * 子菜单组件
 */
class SubMenu extends Component {
    constructor(props){
        super(props);
        console.log("props.isShow:",props.isShow);
    }
    render(){
        if(this.props.isShow){
            let menuList = this.props.menuList.map((item,idx)=>{
                return <li key={idx}><Link className="menu-link sub" to={item.path}>{item.name}</Link></li>;
            });

            return (
                <ul className="menu-ul sub">
                {menuList}
                </ul>
            );
        }
        else{
            return null;
        }
    }
}

/**
 * 菜单组件
 */
class RouteMenu extends Component {
    constructor(props){
        super(props);
        this.state = {// 初始化子菜单显示控制
            subMenus: (()=>{
                let newObj = {};
                menuData.map((item,idx)=>{
                    if(item.subMenu){
                        newObj[idx] = false;
                    }
                });
                // console.log("subMenus:",newObj);

                return newObj;
            })(),
            menuList: menuData
        };

        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }
    // 切换子menu的展示
    toggleSubMenu(e,idx){

        this.setState(prevState=>({
            subMenus: (()=>{
                let newObj = {},
                    subs = prevState.subMenus;
                for(let pro in subs){
                    newObj[pro] = pro == idx?!subs[pro]:subs[pro];
                }
                return newObj;
            })()
        })); 

    }
    // 页面渲染
    render() {

        let menuList = this.state.menuList.map((item,idx)=>{
            let isShow = this.state.subMenus[idx];
            
            // 根据是否存在子菜单来确定
            let linkTag = item.subMenu?
            <a className="menu-link" onClick={(e)=>this.toggleSubMenu(e,idx)}>{item.name}</a>:
            <Link className="menu-link" to={item.path}>{item.name}</Link>;

            return (
                <li key={idx}>
                    {linkTag}
                    <SubMenu isShow={isShow} menuList={item.subMenu} />
                </li>
            )

        });

        return (
            <div className="menu-box">
                <ul className="menu-ul">
                    {menuList}
                </ul>
            </div>
            )
        }
}

export default RouteMenu;