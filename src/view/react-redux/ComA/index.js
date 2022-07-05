import React,{Component, createRef, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {Button,DatePicker,Alert} from 'antd';
function ComA(props){
  const outputDate = (e) => {
    console.log('outputDate e:',e);
    console.log('myinput:',myinput);
    console.log('myDate:',myDate);
  }
  const myinput = useRef('2022-06-18');
  console.log('Home render:', props);

  const [myDate, setMyDate] = useState(new Date());
  const dataChange = (value) => {
    setMyDate(value);
  }

  return (
    <>
      <div>
        {/* <DatePicker ref={myinput}></DatePicker> */}
        {/* <DatePicker value={myDate} onChange={dataChange}></DatePicker> */}
        {/* <div style={{ marginTop: 16 }}>
          <Alert message="当前日期" description={myDate ? myDate.format('YYYY年MM月DD日') : '未选择'} />
        </div> */}
        <Button type='primary' onClick={outputDate}>点击</Button>
        {props.count}
      </div>
    </>
  )
}
const mapStateToProps=(state) => {
  console.log('Home:', state);
  return state;
}
export default connect(mapStateToProps)(ComA)
