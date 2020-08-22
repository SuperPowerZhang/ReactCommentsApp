import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class TopAppLeft extends Component {
    render() {
        return (
            <ul className='topnav_left'>
                <li><a href="javascript:;">新闻</a></li>
                <li><a href="javascript:;">hao123</a></li>
                <li><a href="javascript:;">地图</a></li>
                <li><a href="javascript:;">视频</a></li>
                <li><a href="javascript:;">贴吧</a></li>
                <li><a href="javascript:;">学术</a></li>
                <li >
                   <a href="javascript:;">更多</a>
                    <div className='list'>
                    <div className='row1'>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baiduyun@2x-e0be79e69e.png'></img>
                            <p >网盘</p>
                        </a>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/zhidao@2x-e9b427ecc4.png'></img>
                            <p >知道</p>
                        </a>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baike@2x-1fe3db7fa6.png'></img>
                            <p >百科</p>
                        </a>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/tupian@2x-482fc011fc.png'></img>
                            <p >图片</p>
                        </a>
                   </div>
                        <div className='row2'>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/baobaozhidao@2x-af409f9dbe.png'></img>
                            <p >宝宝知道</p>
                        </a>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/wenku@2x-f3aba893c1.png'></img>
                            <p >文库</p>
                        </a>
                        <a>
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/jingyan@2x-e53eac48cb.png'></img>
                            <p >经验</p>
                        </a>
                        <a href="javascript:;">
                            <img src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png'></img>
                            <p >音乐</p>
                        </a>
                        </div>
                    <p className='more'><a href="javascript:;">查看全部百度产品 &gt;</a></p>
                    </div>
                </li>
            </ul >
        )
    }
}
export default TopAppLeft