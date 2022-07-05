import React, {Component} from 'react';
import store from '../../redux/store';
import { sendAction } from '../../redux/action';
import {bindActionCreators} from 'redux';

class UrlList extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state = {a:'default'};
  }
  handleClick(){
    const action = sendAction();
    console.log('action:',action);
    store.dispatch(action);
  }
  componentDidMount(){
    console.log('this.context.router:', this.context.router);
    store.subscribe(() => {
      console.log('subscribe:', store.getState().value);
      this.setState({a: store.getState().value});
    })
  }
  render(){
    const aa = this.state;
    console.log('aa:', aa);
    return (
      <>
        <button onClick={this.handleClick}>按钮发送</button>
        <h1>{store.getState().value}</h1>
        <h2>{this.state.a}</h2>
      </>
    )
  }
}
export default UrlList;
