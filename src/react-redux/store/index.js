import { createStore } from "redux";
// 导入已创建的reducer
import { reducer } from '../reducer';
export default createStore(reducer);
