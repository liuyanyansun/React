import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Yonghu extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
            leftContent={[
                <Link to="/my"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-icon-copy-sy"></span></Link>
            ]}
            >
            <span>用户反馈</span>
        </NavBar>
      </div>
    );
  }
}
