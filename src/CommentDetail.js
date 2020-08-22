import React,{ Component } from "react";
import CommentModify from "./CommentModify";

class CommentDetail extends Component{
    constructor(){
        super();
        this.state={
            dateDisplay:'',
            modibox:false
        }
    }
    componentDidMount(){
        this.showmask();
    }
    componentDidUpdate(){
        this.showmask();
    }
    componentWillMount(){
        
        this.upadateDate()
        this.timer=setInterval(() => {
            this.upadateDate()
        }, 5000);
    }
    upadateDate(){
        let Display=this.props.update(this.props.current.date);
        this.setState({dateDisplay:Display})
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    showmask(){
        let mask=document.getElementsByClassName("mask")[0];        
        if(this.state.modibox){
            mask.style.display='block';
        }else{
            mask.style.display='none';
        }
    }
    changemodibox(){
        this.setState(()=>({modibox:!this.state.modibox}));
    }
    changeData(modifycomment){
        this.props.changeApp(modifycomment)
    }
    render(){      
        return(
            <div className='detail'>
                <div className='mask'style={{display:this.state.modibox}}></div>
               <h2>详情</h2>
         <p><i>姓名：</i><span>{this.props.current.name}</span></p>
        <p><i>性别：</i><span>{this.props.current.gender}</span></p>
         <p><i>评论内容：</i><span>{this.props.current.content}</span></p>
        <p><i>爱好：</i><span>{this.props.current.hobby.join('&')}</span></p>
         <p><i>时间：</i><span>{this.state.dateDisplay}</span></p>
         <button onClick={this.changemodibox.bind(this)}>点击修改名字</button>
         <p>
        <CommentModify detail={this.props.current} display={this.state.modibox} changeData={this.changeData.bind(this)} change={this.changemodibox.bind(this)}></CommentModify>
             
             </p>            
            </div> 
        )
    }
}
export default CommentDetail;



    // //时间也要刷新
    // componentWillMount(){
    //     console.log('没有渲染吗');
        
    //     this.upadateDate()
    //     //因为setInterval是windows的一个属性，所以里面的this指向windows。需要bind一下或者箭头函数可以解决
    //     this.timer=setInterval(() => {
    //         this.upadateDate()
    //     }, 5000);
    // }
    // upadateDate(){
    //     let dateNow=+new Date()
    //     let ddate=(dateNow-this.props.comment.date)/1000
    //     let Display=''
    //     if(ddate>86400){
    //         //字符串模板
    //         Display=`${Math.round(ddate/86400)} 天前`
    //     }else if(ddate>3600){
    //         //字符串模板
    //         Display=`${Math.round(ddate/3600)} 小时前`
    //     }else if(ddate>60){
    //         Display=`${Math.round(ddate/60)} 分钟前`
    //     }else{
    //         //console.log('miao')
    //         Display=`${Math.round(ddate)} 秒前`
    //     }
    //     this.setState({dateDisplay:Display})
    // }