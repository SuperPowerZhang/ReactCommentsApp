import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import BaiduApp from './Baidu/BaiduApp'
import CommentApp from './CommentAPP.js'
// import PinyinApp from '../src/pinyin/pinyinApp.js'
// import 'https://www.jq22.com/jquery/jquery-3.3.1.js'
import $ from 'jquery'
import {BrowserRouter as Router,Route,Switch,Link,NavLink, Redirect} from 'react-router-dom'
import './index.css'
import Notfound from './Notfound'

ReactDOM.render(
 <CommentApp/>,
  document.getElementById('root')
  // $("#root")
);
