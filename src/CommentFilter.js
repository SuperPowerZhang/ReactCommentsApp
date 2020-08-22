import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList';
import {HashRouter as Router,Link,Route, HashRouter} from 'react-router-dom'

class CommentFilter extends Component{
    constructor(){
        super();
        this.state={
            namefilter:'',
            genderfilter:'',
            hobbynumfilter:''
        }
    }
    handleNameChange=(event)=>{
        let namefilter=event.target.value
        this.setState(()=>(
            {namefilter}
        ))
    }
    handleSelectGender=(event)=>{
        let genderfilter=event.target.value
        this.setState(()=>(
            {genderfilter}
        ))
    }
    handleSelectHobbyNum=(event)=>{
        let hobbynumfilter=event.target.value
        this.setState(()=>(
            {hobbynumfilter}
        )
        )
    }
    handleFilter=()=>{
        let {namefilter,genderfilter,hobbynumfilter}=this.state;        
        this.props.filtertransfer({namefilter,genderfilter,hobbynumfilter});     
    }
    render(){
        return(           
            <HashRouter>
            <div>
                <div className='commentFilter'>
                    <h3>筛选查看评论列表：</h3>
                    <div>
                    <span>姓名筛选：</span>
                        <input value={this.state.namefilter} onChange={this.handleNameChange}></input>
                        <span>性别筛选：</span>
                        <select onChange={this.handleSelectGender.bind(this)}>
                            <option></option>
                            <option>男</option>
                            <option>女</option>
                        </select>
                        <span>爱好个数筛选：</span>
                        <select onChange={this.handleSelectHobbyNum.bind(this)}>
                            <option></option>
                            <option value='1'>小于3个</option>
                            <option value='0'>3个及以上</option>
                            </select>
                       <p>
                        <button onClick={this.handleFilter}><Link to='/commentlist'>提交筛选条件</Link></button>
                        </p>
                    </div>
                </div>
            </div>
            </HashRouter>
        )
    }
}
export default CommentFilter;