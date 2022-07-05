import useUpdate from "./Update/useUpdate";
const UpdateDemo=(props) => {
  const update = useUpdate();
  return (
    <div style={{padding:50}}>
      <div>时间：{Date.now()}</div>
      <button onClick={update}>更新时间</button>
    </div>
  )
}
export default UpdateDemo;