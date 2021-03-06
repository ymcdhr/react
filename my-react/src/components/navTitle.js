import React, { Component } from 'react';
import NavTitlelist from './navTitleList';

class NavTitle extends Component {
    constructor(props){
        super(props);
        this.state = {isShowList: false};
        this.showUlList = this.showUlList.bind(this);
    }

    showUlList(){
        
        this.setState((preState) => {
            return {
                isShowList: !preState.isShowList
            }   
        });
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-back">
                    <a href="javascript:history.back(-1)" className="nav-iconbtn">返回</a>
                </div> 
                <div className="nav-title of">导航标题</div>
                <div className="nav-right tr pr" onClick={()=>this.showUlList()}>
                    <img className="nav-img" src="//sale.suning.com/images/advertise/cdn/images/more.png" />

                    <NavTitlelist showList={this.state.isShowList}/>
                </div> 
            </div>
        );
    }
}

export default NavTitle;