import React,{Component} from 'react';
import AppTab from './container/AppTab'
import AppTab1 from './container/AppTab1'
import AppTab2 from './container/AppTab2'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Add from './community/Add';
import Message from './community/news/Message';
import Messageone from './community/news/Messageone';
import About from './community/About';
import Ping from './community/Ping';
import Shoucang from './my/Shoucang';
import Tongxun from './my/Tongxun';
import Women from './my/Women';
import Yonghu from './my/Yonghu';
import Shezhi from './my/Shezhi';
import Zhanghao from './my/Zhanghao';
import Xiaoxi from './my/Xiaoxi';
import Yinsi from './my/Yinsi';
import Huancun from './my/Huancun';
import Fuwu from './my/Fuwu';
import Login from './login/Login';
import Zhuce from './login/Zhuce';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={AppTab}/>
                    <Route path="/zhuce" component={Zhuce}/>
                    <Route path="/community" component={AppTab1}/>
                    <Route path="/my" component={AppTab2}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/xinnews" component={Message}/>
                    <Route path="/newsone" component={Messageone}/>
                    <Route path="/aboutyouknow" component={About}/>
                    <Route path="/pinglunone" component={Ping}/>
                    <Route path="/shoucangone" component={Shoucang}/>
                    <Route path="/tongxunlvone" component={Tongxun}/>
                    <Route path="/wm" component={Women}/>
                    <Route path="/yonghufankui" component={Yonghu}/>
                    <Route path="/shezhi" component={Shezhi}/>
                    <Route path="/zhanghao" component={Zhanghao}/>
                    <Route path="/xiaoxixi" component={Xiaoxi}/>
                    <Route path="/yinsione" component={Yinsi}/>
                    <Route path="/huancun" component={Huancun}/>
                    <Route path="/fuwu" component={Fuwu}/>
                </div>
            </Router>
        ) 
    }
}
