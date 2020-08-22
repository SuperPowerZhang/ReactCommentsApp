import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BotAppLeft from './BotAppLeft'
import BotAppRight from './BotAppRight'

class BotApp extends Component{
    render(){
        return(
            <div class='bottom'>
            <BotAppLeft></BotAppLeft>
            <BotAppRight></BotAppRight>
            </div>
        )
    }
}
export default BotApp