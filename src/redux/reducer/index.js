// store收到action以后，会给一个新的State，这样View才会发生变化。这种State的计算过程叫做Reducer

// 第一个参数为state，我们可以定义默认值，然后进行赋值
// 在函数中判断第二个参数action的type值是否是我们发送的，是则通过return返回新的state，
// 将reducer导出
// 专门处理发送过来的action
const reducer = (state={value:'默认值'},action) => {
  console.log('reducer,', state, action);
  switch(action.type){
    case 'send_action':
      return Object.assign({}, state, action);
    default:
      return state;
  }
}

module.exports={
  reducer
}
