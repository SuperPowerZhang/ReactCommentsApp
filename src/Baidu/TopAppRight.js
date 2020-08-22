import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './baidu.css'

 class TopAppRight extends Component{
     render(){
         return(
             <ul className='topnav_right'>
                 <li><a href='javascript:;' className='redfont'>抗击肺炎</a></li>  
                 <li className='setting'>
                     <a href='javascript:;'>设置</a>
                     <div className='setlist'>
                         <ul>
                             <li><a href='javascript;'>搜索设置</a></li>
                             <li><a href='javascript;'>高级搜索</a></li>
                             <li><a href='javascript;'>关闭预测</a></li>
                             <li><a href='javascript;'>隐私设置</a></li>
                             <li><a href='javascript;'>关闭热榜</a></li>
                         </ul>
                     </div>
                 </li>  
                 <li><a href='javascript:;' className='falsebtn'>登录</a></li>  
             </ul>
         )
     }
 }
 export default TopAppRight