// 传递最新的state，然后用一个数据渲染comment，加返回按钮回到input页面

import React,{ Component } from "react";
import Comment from './Comment'
import {Link} from 'react-router-dom'
import CommentDetail from "./CommentDetail";

class NewComment extends Component{
  
    render(){
        return(
            <div class='newcomment'>
                <h2>查看提交的最新评论    <button className='backindex'><Link to='/' >返回首页</Link></button>   </h2>
                <CommentDetail current={this.props.current} 
                changeApp={this.props.changeApp} update={this.props.update}
                />
                
            </div>
        )
    }
}
export default NewComment;