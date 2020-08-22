import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import PropTypes from 'prop-types'
import { HashRouter,Link,Route } from 'react-router-dom';
import CommentDetail from './CommentModify';


class CommmentList extends Component {
    constructor(){
        super();
        this.state={
           commentlist:''
        }
    }
    static propTypes = {
        filter: PropTypes.func
    }
    componentWillMount(){
        this.Filter();
        // this.props.save();
    }

    Filter() {
        let commentlist=this.props.filter();
        this.setState({
            commentlist
        })        
        // if(filter.gender!==undefined){
        //     commentsFilter = commentsFilter.filter((item) => item.gender === filter.gender);
        //     console.log('gender筛选了');
        // }
    }
    render() {
        return (
            <HashRouter>
            <div className='list'>
                <h2>列表页 <button className='backindex'><Link to='/' >返回首页</Link></button> </h2>
                <div>
                    {this.state.commentlist.map(
                        (item,i)=>{
                         return  <Comment key={i} update={this.props.update} comment={item} modCurrent={this.props.modCurrent} delcomment={this.props.dellist}></Comment>
                        }
                    )}
                </div>
            </div>
            </HashRouter>
        )
    }
}
export default CommmentList;

 // handleModify(index,modifyComment){
    //     console.log('list的修改函数');
    //     this.props.modifyApp(index,modifyComment);
    // }

     // handleDel(index) {
    //     console.log(this);
    //     this.props.ddelComm(index)
    // }