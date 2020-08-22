import React, { Component } from 'react'

class CommentModify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modifycomment: {
                name: this.props.detail.name
                // content: this.props.detail.content,
                // gender: this.props.detail.gender,
                // hobby: this.props.detail.hobby
            }
        }
    }
    handleModifyName = (e) => {
        let { modifycomment } = { ...this.state };
        modifycomment.name = e.target.value;
        this.setState({
            modifycomment
        })
    }
  
    showmodify(){
        const detailbox=document.getElementsByClassName("modify")[0];
        if(this.props.display){
            detailbox.style.display='block';
        }else{
            detailbox.style.display='none';
        }
    }
    componentDidMount(){
      this.showmodify();
    }
    componentDidUpdate(){
      this.showmodify();
    }
    handleCancel(){
        this.props.change();
    }
    handleSubmit(){
        let {modifycomment}=this.state;
        console.log(modifycomment);
        this.handleCancel();
        this.props.changeData(modifycomment)
    }
    render() {
        return (
            <div className='modify'>
                <h2>修改框</h2>
                <div className='detailBox'>
                    <div >
                    <p>
                    姓名：<span>{this.props.detail.name}</span>
                    </p>
                    <p>
                    修改成：
                       <input type='text' value={this.state.name} onChange={this.handleModifyName}></input>
                    </p>
                    </div>
                    </div> 
                <div className='button'>
                <button onClick={this.handleSubmit.bind(this)}>提交</button>
                <button onClick={this.handleCancel.bind(this)}>取消</button>
                </div>
            </div>
            )
                    {/* <div className='name'>
                        内容：<span>{this.props.commentdetail.content}</span>
                        <input type='text'value={this.state.content} onChange={this.handleModifyContent}></input>
                        <span className='modify'>修改成：</span>
                    </div>
                    <div className='name'>
                        性别：<span>{this.props.commentdetail.gender}</span>
                        <input type='text'value={this.state.gender} onChange={this.handleModifyGender}></input>
                        <span className='modify'>修改成：</span></div>
                    <div className='name'>
                        爱好：<span>{this.props.commentdetail.hobby}</span>
                        <input type='text' value={this.state.hobby} onChange={this.handleModifyHobby}></input>
                        <span className='modify'>修改成：</span>
                    </div>
                    <input className='submit' type='submit' value='提交' onClick={this.handleSubmit.bind(this)}></input> */}
               
    
    }
}
export default CommentModify;




  // handleModifyContent = (e) => {
    //     let { modifycomment } = { ...this.state };
    //     modifycomment.content = e.target.value;
    //     this.setState({
    //         modifycomment
    //     }, () => {
    //         console.log(this.state);
    //     })
    // }
    // handleModifyGender = (e) => {
    //     let { modifycomment } = { ...this.state };
    //     modifycomment.gender = e.target.value;
    //     this.setState({
    //         modifycomment
    //     }, () => {
    //         console.log(this.state);
    //     })
    // }
    // handleModifyHobby = (e) => {
    //     let { modifycomment } = { ...this.state };
    //     modifycomment.hobby = e.target.value;
    //     this.setState({
    //         modifycomment
    //     }, () => {
    //         console.log(this.state);
    //     })
    // }
    // handleSubmit(){
    //     let modifyNow=this.state.modifycomment;
    //     if(modifyNow.name===''){
    //         modifyNow.name=this.props.commentdetail.name;
    //     }
    //     if(modifyNow.gender===''){
    //         console.log('性别没改');
            
    //         modifyNow.gender=this.props.commentdetail.gender;
    //     }
    //     if(modifyNow.content===''){
    //         console.log('内容没改');
            
    //         modifyNow.content=this.props.commentdetail.content;
    //     }
    //     if(modifyNow.hobby===''){
    //         modifyNow.hobby=this.props.commentdetail.hobby;
    //     }
    //     console.log(modifyNow);
    //     this.props.modifyCom(this.props.index,modifyNow);
    //     this.setState({
    //         modifycomment: {
    //             name: '',
    //             content: '',
    //             gender: '',
    //             hobby: '',
    //         }
    //     })
    //     // global.box.classList.add('display');
    // }