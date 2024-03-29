import { useEffect, useRef } from "react";
const useUnmount=(fn)=>{
  const ref = useRef(fn);
  ref.current=fn;
  useEffect(() => {
    fn?.()
  },[]);
};
export default useUnmount;