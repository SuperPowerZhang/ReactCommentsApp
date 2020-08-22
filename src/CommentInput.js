import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {HashRouter as Router,Route,Link, HashRouter} from 'react-router-dom'
import NewComment from './NewComment'

class CommentInput extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            name: '',
            content: '',
            date: '',
            gender: '',
            hobby: []
        }
        this.inputFocus = React.createRef();
    }
    componentWillMount() {
        this.loadName();
    }
    componentDidMount() {
        //可以用Refs,render的return的时候返回focus={this.inputFocus}
        //调用的时候应该是this.inputFocus.current.focus()
        this.input.focus()
    }
    loadName() {
        const username = localStorage.getItem('username');
        this.setState(
            {
                name: username
            }
        )
    }
    saveName(username) {
        localStorage.setItem('username', username)
    }
    handleSaveName(event) {
        this.saveName(event.target.value)
    }
    handleChangeName(event) {
        let newState = { ...this.state }
        newState.name = event.target.value
        this.setState(newState)
    }
    handleChangeContent(event) {
        let newState = { ...this.state }
        newState.content = event.target.value
        this.setState(newState)
    }

    handleChangeGender(e) {
        let gender = e.target.value
        if (e.target.checked) {
            this.setState({
                gender
            })
        }
    }
    handleChangeHobby = (e) => {
        let hobbynew = e.target.value;
        let { hobby } = { ...this.state };
        if (e.target.checked) {   
            hobby.push(hobbynew);
            this.setState(hobby);
        }else if(!e.target.checked){
            let hobbyindex=hobby.findIndex((value)=>{
                return value===hobbynew;
            }); 
            hobby.splice(hobbyindex,1);
            this.setState(hobby);
        }
    }
    preventLink(ev){
        var event = ev || window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    handleClick(event) {
        console.log(event.preventDefault);
    
        if (!this.state) {
            alert('啥也没有');
            this.preventLink(event);
        }else if(!this.state.name){
             alert('没有用户名');
            this.preventLink(event);
        }else if(!this.state.gender){
             alert('记得选择性别');
            this.preventLink(event);
        }else if(!this.state.content){
             alert('输入文字内容');
            this.preventLink(event);
        }else if (this.state.hobby.length === 0) {
            alert('一个爱好都没选啊')
            this.preventLink(event);
        }else{
        const {name,content,date,gender,hobby}=this.state;
        this.props.onSubmit({ name,content,date,gender,hobby,date: + new Date() });
        this.setState({ content: '' })
        // //date: '',        gender:'',        hobby:[]不会被刷掉，因为本身展示出来就不是state
        let clearInput = document.querySelectorAll('input');
        for (let i = 0; i < clearInput.length; i++) {
            clearInput[i].checked = false;
        }
        }
    }

    render() {
        return (
            <HashRouter>
            <div className='CommentInput'>
                <h3>提交新评论：</h3>
                {/* <form action='http://www.baidu.com' method='post'> */}
                <p>
                    <span>姓名：</span><input type='text' value={this.state.name} onBlur={this.handleSaveName.bind(this)} onChange={this.handleChangeName.bind(this)}></input>
                </p>
                <p className='InputContent'>
                    内容：
                <textarea type='textarea' ref={(input) => { this.input = input }} value={this.state.content} onChange={this.handleChangeContent.bind(this)}></textarea>
                </p>
                <p>性别：
                <input type='radio' name='gender' value='男' onChange={this.handleChangeGender.bind(this)} ></input><span>男</span>
                    <input type='radio' name='gender' value='女' onChange={this.handleChangeGender.bind(this)}></input><span>女</span>
                </p>
                <p>爱好：
                <input type='checkbox' name='hobby' value='羽毛球' onChange={this.handleChangeHobby}></input><span>羽毛球</span>
                    <input type='checkbox' name='hobby' value='乒乓球' onChange={this.handleChangeHobby}></input><span>乒乓球</span>
                    <input type='checkbox' name='hobby' value='篮球' onChange={this.handleChangeHobby}></input> <span>篮球</span>
                    <input type='checkbox' name='hobby' value='游泳' onChange={this.handleChangeHobby}></input><span>游泳</span>
                    <input type='checkbox' name='hobby' value='看剧' onChange={this.handleChangeHobby}></input><span>看剧</span>
                    <input type='checkbox' name='hobby' value='看电影' onChange={this.handleChangeHobby}></input><span>看电影</span>
                </p>
                <button  >
                    {/* <Route path='/newcomment' component={NewComment}></Route> */}
                    <Link onClick={this.handleClick.bind(this)} to='/newcomment' >提交</Link>
                    </button>
            </div>
            </HashRouter>

        )
    }
}
export default CommentInput


//一些历史
// class CommmentInput extends Component{
//         constructor(){
//             super()
//             this.state={
//                 newcomment:{
//                     name:'',
//                     content:''
//                 }
//                         }
//         }
//         handleChangeName(event){
//
//  *** ...只能解构一层，深层拷贝可以用JSON
// let newstate=JSON.parse(JSON.stringify(this.state));
//  newstate.newcomment.name=event.target.value;
//  this.setState(newstate)
//*** 
//             this.setState({newcomment:{name:event.target.value,content:this.state.newcomment.content}})
//         }
//         handleChangeContent(event){
//             console.log(event.target.value);
//             this.setState({newcomment:{content:event.target.value}})
//         }
//         handleClick(event){
//             console.log(1);
//             this.props.onSubmit(this.state.newcomment);
//                 }

//传参的几种方式
        // //方法1：
        // // this.setState({
        // //     date:+ new Date()
        // // },()=>{            
        // //     this.props.onSubmit(this.state);
        // //     this.setState({content:''})
        // // })
        // //方法2：
        // // var newState = { ...this.state };
        // // newState["date"] = + new Date();
        // //方法3：
        // //官方把this.state解构成name和content传过去，因为不然传过去的this.state是个引用变量。APP中可能会对其修改。我们不想
        // const {name,content,date,gender,hobby}=this.state;
        // window.location.href='/commentlist';