import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MidAppInput from './MidAppInput'
import MidAppNews from './MidAppNews'

class MidApp extends Component{
    render(){
        return(
            <div>
            <MidAppInput></MidAppInput>
            <MidAppNews></MidAppNews>
            </div>
        )
    }
}
export default MidApp