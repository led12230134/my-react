let initState={
  count:0
}
exports.reducer=(state=initState,action) => {
  switch(action.type){
    case 'send_action':
      return {
        count:state.count+1
      }
    default:
      return state;
  }
}