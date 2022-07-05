import './App.css';
import ComA from './view/react-redux/ComA';
import ComB from './view/react-redux/ComB';
import store from './react-redux/store';
import {Provider} from 'react-redux';
import TargetComponent from './view/TargetComponent';
import { useState } from 'react';
import { HIndex } from './HIndex';
import MockMemo from './MockMemo';
import RefIndex from './RefIndex';
import UseCreationFun from './UseCreationFun';
import { useEffect } from 'react';
import MountUnmount from './MountUnmount';
import UpdateDemo from './UpdateDemo';

function App() {
  const [num,updateNum]=useState(0);
  const AA = function(){
    const randomNum = Math.random();
    updateNum(randomNum+num);
  }
  useEffect(() => {
    console.log('useEffect')
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={()=>updateNum(num=>num+1)}>{num}</button> */}
        {/* <button onClick={() => updateNum(num+1)}>{num}</button> */}
        <button onClick={AA}>{num}</button>
        <HIndex />
        <MockMemo />
        <RefIndex />
        <UseCreationFun />
        <MountUnmount />
        <UpdateDemo />
      </header>
    </div>
  );
}

export default App;
