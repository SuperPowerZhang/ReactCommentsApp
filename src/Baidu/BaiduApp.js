import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TopApp from './TopApp'
import MidApp from './MidApp'
import BotApp from './BotApp'


class BaiduApp extends Component{
    render(){
        return(
            <div>
                <TopApp />
                <MidApp />
                <BotApp />
            </div>
        )
    }
}
export default BaiduApp