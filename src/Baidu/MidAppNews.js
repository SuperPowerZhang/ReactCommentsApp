import React,{ Component } from "react";
import MidAppInput from "./MidAppInput";
import { News } from "./News.js";

class MidAppNews extends Component {
    
    render(){
        const newslist=['华盛顿邮报刊文称美国深陷危机','民法典开讲:专家解读合同编','钟南山等专家呼吁远离烟草','多伦多爆发反对种族主义游行示威','韩国一杯咖啡钱飞济州岛','拒绝二手烟 还我们纯净天空']
        return(
            <div className='news'>
                <div className='news_hd'>
                    <a href='javascript:;' className='news_hd_left'>百度热榜</a>
                    <a href='javascript:;' className='news_hd_right'>换一换</a>
                </div>
                <div className='news_bd'>
                    <ul>
                    {newslist.map(
                        (item,index)=><News news={item} index={index}  key={index}/>
                    )}
                    </ul>
                </div>
            </div>
        )
}
}
export default MidAppNews
