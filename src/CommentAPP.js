import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
import './comment.css'
import Home from './Home';
import CommentList from './CommentList';
import Comment from './Comment';
import $ from 'jquery';
import CommentInput from './CommentInput';
import CommentFilter from './CommentFilter'
import NewComment from './NewComment'
import CommentDetail from './CommentDetail';

class CommentApp extends Component {
    constructor() {
        super()
        this.state = { comments: [],filter:{},commentsfilter:[],current:{} }
    }
    handleAdd=this.handleAdd.bind(this);
    //组件将要挂载时加载数据
    componentWillMount() {
        this.loadComments();
    }
    
    //写一个更新id的函数，每次数据更新重新排序,新增的时候不用
    //其实是组件将要挂载、删除的时候要用
    renewId(){
        let comments=this.state.comments;
        if(comments){
            let commentsNew=comments.map((item,i)=>{
                item['id']=i+1;
                return item;
            })
            this.setState({comments:commentsNew})
        }
        
    }
    //APP的添加新评论函数
    handleAdd(newcomment) {
        let { comments } = this.state;
        if(comments){
            newcomment.id=comments.length+1;
            comments.push(newcomment);
        }else{
            newcomment.id=1;
            comments[0]=newcomment;
        }
        
        
        this.modifyCurrent(newcomment)
        this.saveComments(comments);
    }
    //删除某个评论
    handelDelCom(index) {
        let comments = [...this.state.comments]
        comments.splice(index-1, 1);
        this.saveComments(comments);
    }
    //在本地存储comments
    saveComments(comments) {
        this.setState({ comments },()=>{
            this.renewId();
        });
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    //本地存储筛选条件

    saveFilter(filter){
        localStorage.setItem('filter',JSON.stringify(filter))
    }
    //本地存储筛选后的list列表
    saveFilterComents(commentsfilter){
        localStorage.setItem('commentsfilter',JSON.stringify(commentsfilter))
    } 
    //修改当前展示的内容
    modifyCurrent(current){
        this.setState({
            current
        })
        localStorage.setItem('current',JSON.stringify(current))
    }
    //Loaclstroage里面的值要存字符串格式，相当于调用了toString方法，所以如果直接把对象存进去，在parse转换时会报错
    //const声明的引用类型变量不可以修改，但可以改它的属性。const声明的基本类型变量不可以修改。
    //本地加载comments
    loadComments() {
        let comments = localStorage.getItem('comments')
        let filter = localStorage.getItem('filter')
        let current=localStorage.getItem('current')
        // let commentsfilter = JSON.parse(comments)
        
        
        if (JSON.stringify(comments)==="null") {
        }else{
             comments = JSON.parse(comments)
            this.setState({ comments }, ()=>{
                this.renewId()
                    } )
        }
        if (JSON.stringify(filter)!=="null") {
            filter = JSON.parse(filter)
            this.setState({ filter })
        }
        if (JSON.stringify(current)!=="null") {
            current = JSON.parse(current)
            this.setState({ current })
        }
}
    //修改筛选条件
    changeFilter=(filter)=>{
        this.setState(()=>(
            {filter}
        ));
        this.saveFilter(filter);
    }
    //APP的筛选函数
    filterComments(){
        let {comments,filter}=this.state;
         if(filter.namefilter!==""){
            comments = comments.filter((item) => item.name === filter.namefilter);
         }
         if(filter.genderfilter!==""){
            comments = comments.filter((item) => item.gender === filter.genderfilter);
         }
         if(filter.hobbynumfilter!==""){
            filter.hobbynumfilter==='1'?comments = comments.filter((item) => item.hobby.length<3):comments = comments.filter((item) => item.hobby.length>=3)
         }
         return comments;
    }
    //app的修改函数
    handleChange(modifycomment){
        let {current,comments}=this.state;
        current={...current,...modifycomment}
        comments.splice(this.state.current.id-1,1,current)
        this.modifyCurrent(current)
        this.saveComments(comments)
    }
    //app的更新时间函数，只能写在app，因为detail也要用
    updateTime(timebase){
        let dateNow=+new Date()
        let ddate=(dateNow-timebase)/1000
        let Display=''
        if(ddate>86400){
            //字符串模板
            Display=`${Math.round(ddate/86400)} 天前`
        }else if(ddate>3600){
            //字符串模板
            Display=`${Math.round(ddate/3600)} 小时前`
        }else if(ddate>60){
            Display=`${Math.round(ddate/60)} 分钟前`
        }else{
            Display=`${Math.round(ddate)} 秒前`
        }
        return Display;
    }
    
    render() {
        console.log( this.state.comments);
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/' component={()=><CommentInput onSubmit={this.handleAdd}/>} >
                    </Route>
                    <Route exact path='/' component={()=><CommentFilter filtertransfer={this.changeFilter}/>} ></Route>
                    {/* // save={this.saveComments.bind(this)} */}
                    <Route path='/commentlist' component={()=><CommentList update={this.updateTime.bind(this)} dellist={this.handelDelCom.bind(this)} filter={this.filterComments.bind(this)} modCurrent={this.modifyCurrent.bind(this)}/>}/>
                    <Route path='/comment' component={Comment} />
                    <Route path='/newcomment' component={()=><NewComment  current={this.state.current} update={this.updateTime.bind(this)} changeApp={this.handleChange.bind(this)}/>} />
                    <Route path='/commentdetail' component={()=><CommentDetail update={this.updateTime.bind(this)} current={this.state.current} changeApp={this.handleChange.bind(this)}/>}></Route>
                </div>
            </HashRouter>
        )
    }
}
export default CommentApp
ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
    // $("#root")
);
