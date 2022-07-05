import React, {useState} from 'react';
import useCreation from './useCreation';
const UseCreationFun = () => {
  const [_, setFlag] = useState(false);
  const getNowData = () => {
    return Math.random();
  }
  // const nowData = useCreation(() => getNowData(), [_]);
  const nowData = useCreation(() => getNowData(), []);
  return (
    <div style={{padding: 50}}>
      <div>正常的函数：{getNowData()}</div>
      <div>useCreation包裹后的：{nowData}</div>
      <button onClick={() => {setFlag(v=>!v)}}>渲染</button>
    </div>
  )
}
export default UseCreationFun;