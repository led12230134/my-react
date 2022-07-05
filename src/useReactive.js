import { useRef } from "react";
import useUpdate from "./Update/useUpdate";
import useCreation from "./useCreation";
const observer = (initialVal,cb) => {
  const proxy = new Proxy(initialVal, {
    get(target,key,receiver){
      const res = Reflect.get(target,key,receiver);
      return typeof res === 'object' ? observer(res,cb) : Reflect.get(target, key);
    },
    set(target, key, val){
      const ret = Reflect.set(target,key,val);
      cb();
      return ret;
    },
  });
  return proxy;
}
const useReactive=(initialState) => {
  const ref = useRef(initialState);
  const update = useUpdate();
  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);
  return state;
};
export default useReactive;
