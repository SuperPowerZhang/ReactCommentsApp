import React from 'react'


class Hhome extends React.Component{
    handleClick=()=>{
        console.log(this.props.history);
        this.props.history.push('/home',{test:'haha',age:18})
        
    }
    callFather(){
        console.log('按钮成功了');
        this.props.callback();
        
        
        // console.log(this.props.history.location);
        
        // this.props.history.location.func();
    }
    // componentWillMount () {
    //     console.log(this.props.history.location.data)
    //   }
    //   componentWillReceiveProps () {
    //     console.log(this.props.history.location.data)
    //   }
    render(){
        console.log('子组件渲染');
        
        console.log(this.props.initProps.match);
        // let{id,order}=this.props.initProps;
        // console.log(id); 
        return(
            <div>
                {/* <h4>{id}</h4>
        <h4>{order}</h4> */}
        <button onClick={this.handleClick}>返回</button>
        <button onClick={this.callFather.bind(this)}>测试调用父组件</button>
            </div>
        )
    }
   
} 
export default Hhome;