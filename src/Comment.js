import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CommentDetail from './CommentDetail'
import { Link, HashRouter,Route } from 'react-router-dom'

class Comment extends Component{
    static defaultProps = {
        comment: {}
    }
    static propTypes={
        comment: PropTypes.object.isRequired,
        delCom:PropTypes.func,
        index:PropTypes.number
        //key不会被传递到组件，所以加上验证会warning。ref也不会
        //key:PropTypes.number
    }
    state={
        dateDisplay:''
    }
    //必须得在WillMount里面调用一次函数，否则第一次显示不出来时间，相当于渲染的时候直接在state取值而不会去执行函数。
    componentWillMount(){
        this.upadateDate()
        //因为setInterval是windows的一个属性，所以里面的this指向windows。需要bind一下或者箭头函数可以解决
        this.timer=setInterval(() => {
            this.upadateDate()
        }, 5000);
        //达到一定条件后执行的函数叫做callback
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    upadateDate(){
        let Display=this.props.update(this.props.comment.date);
        this.setState({dateDisplay:Display})
    }
    handleCom(e){
        console.log('comment的删除函数');
        this.props.delcomment(this.props.comment.id);
    }
    handleModify(index,modifyComment){
        console.log('comment的修改函数');
        this.props.modifyList(index,modifyComment);
    }
    getProcessedHtml(content){
        // console.log(content)
        return content
        // .replace(/&/g, "&amp;")
        // .replace(/</g, "&lt;")
        // .replace(/>/g, "&gt;")
        // .replace(/"/g, "&quot;")
        // .replace(/'/g, "&#039;")
        // .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    handleClick(){
        this.props.modCurrent(this.props.comment);
    }
 
    render(){     
        // let aa11=this.props.comment.hobby.length;  
        // console.log(aa11);
        return( 
            <HashRouter>
            <div className='comment'>
            <div>
                <hr ></hr>
                id：<span>{this.props.comment.id}</span>---
                姓名：<span>{this.props.comment.name}</span>---
                内容：<span dangerouslySetInnerHTML={{__html: this.getProcessedHtml(this.props.comment.content)}}></span>---
                性别：<span>{this.props.comment.gender}</span>---
                爱好：<span>{this.props.comment.hobby.join('&')}</span>---
                发布时间：<span>{this.state.dateDisplay}</span>---
                <button><Link to='/CommentDetail' id={this.props.id} onClick={this.handleClick.bind(this)} >查看详情</Link></button>
                <button  onClick={this.handleCom.bind(this)}>删除按钮</button>
                {/* <CommentDetail modifyCom={this.handleModify.bind(this)} commentdetail={this.props.comment} index={this.props.index}></CommentDetail> */}
            </div>
            
            </div>
            </HashRouter> 
        )
    }
}

export default Comment;