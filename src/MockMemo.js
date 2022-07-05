import React, { useState, useCallback } from 'react';
const MockMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const add = useCallback(() => {
    setCount(count+1);
  }, [count]);
  return (
    <div>
      <div style={{display: 'flex',justifyContent:'flex-start'}}>
        <Tbutton title='普通点击' onClick={() => setCount(count+1)} />
        <Tbutton title='useCallback点击' onClick={add} />
      </div>
      <div style={{marginTop:20}}>count:{count}</div>
      <button onClick={() => {setShow(!show)}}>切换</button>
    </div>
  )
}
const Tbutton = React.memo((props) => {
  console.log(props.title);
  return <button onClick={props.onClick} style={props.title === 'useCallback点击' ? {marginLeft:20} : undefined}>{props.title}</button>
})
export default MockMemo;