import React, {useState} from 'react';
import useMount from './Mount/useMount';
import useUnmount from './Mount/useUnmount';
const Child=()=>{
  useMount(()=>{
    alert('首次渲染');
  });
  useUnmount(()=>{
    alert('组件已卸载');
  })
  return <div>你好，我是小肚</div>;
}
const MountUnmount = (props)=>{
  const [flag,setFlag] = useState(false);
  return (
    <div style={{padding:50}}>
      <button onClick={()=>{setFlag(v=>!v)}}>切换{flag?'unmount':'mount'}</button>
      {flag && <Child />}
    </div>
  )
}
export default MountUnmount;