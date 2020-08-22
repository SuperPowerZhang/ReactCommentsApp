import React from 'react'

export  function News(props){
    console.log(props);
return   <li><span className='index'>{props.index+1}</span><a href='https://www.cruise.ctrip.com'>{props.news}</a><span className='tag'></span></li>
    
}