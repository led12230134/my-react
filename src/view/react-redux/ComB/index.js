import React,{Component} from 'react';
import {connect} from 'react-redux';
class ComB extends Component{
  handleClick=()=>{
    console.log('ComB:', this.props);
    this.props.sendAction();
  }
  render(){
    return (
      <>
        <button onClick={this.handleClick}>点击+1</button>
      </>
    )
  }
}
const mapDispatchToProps=(dispatch) => {
  return {
    sendAction:()=>{
      dispatch({
        type:'send_action'
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(ComB)
// 第一个参数：要接收的函数
// 第二个参数：要发送action的函数
// 第三个参数：后面括号里面是要加强的组件