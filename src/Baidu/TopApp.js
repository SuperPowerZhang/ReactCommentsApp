import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TopAppLeft from './TopAppLeft'
import TopAppRight from './TopAppRight'
import './baidu.css'

class TopApp extends Component{
    render(){
        return(
            <div className='topnav'>
           <TopAppLeft></TopAppLeft>
           <TopAppRight></TopAppRight>

            </div>
        )
    }
}
export default TopApp