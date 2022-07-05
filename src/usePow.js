import { useMemo } from "react";
const usePow = (list) => {
  return useMemo(() => list.map((item) => {
    console.log(1);
    return Math.pow(item,2);
  }), []);
}
export default usePow;
