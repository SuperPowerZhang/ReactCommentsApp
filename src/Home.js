import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {BrowserRouter as Router,Route,Switch,Link,NavLink, HashRouter} from 'react-router-dom'
import Hhome from './Hhome'
import {hashHistory} from 'react-router'
import CommmentInput from './CommentInput'
import CommentFilter from './CommentFilter'

 class Home extends Component{
    //  Toson(){
        //  this.props.history.replace({pathname:'/home/1/1',data:{age:18},func:this.sonCallMe})
    //  }
    //  sonCallMe=()=>{
    //      console.log('子组件调用成功！牛！');
         
    //  }
     render(){
        // console.log(this.props);
    
        return (
            <HashRouter>
                <div>
                <h2>首页</h2>
               
                {/* <Link to='/home/1/1' >链接1</Link>
                <Route path='/home/1/1' component={()=><Hhome callback={this.sonCallMe.bind(this)} initProps={this.props}/>            }/>                 */}
            </div>
            </HashRouter>
        )
     }
    
}
export default Home;