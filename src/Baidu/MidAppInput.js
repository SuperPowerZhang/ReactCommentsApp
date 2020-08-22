import React, { Component } from 'react'
import MidApp from './MidApp'


class MidAppInput extends Component{
    constructor(){
        super();
        this.state={
        value:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div className='main'>
                <a><img src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'></img></a>
                <form>
                <input className='input' value={this.state.value}  onChange={this.handleChange}></input>
                <span>
                <p>按图片搜索</p>
                </span>
                <input type='submit' value='百度一下' className='submit' ></input>
                </form>
            </div>
        )
    }
}
export default MidAppInput 