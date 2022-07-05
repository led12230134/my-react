// Action就是View发出的通知，表示State应该要发生变化了。
// Action是一个对象，其中的type属性是必须的，表示Action的名称，其他属性也可自由设置。
const sendAction=() => {
  return {
    type: 'send_action',
    value: '发送了某个数据----'
  }
}
module.exports = {
  sendAction
}
