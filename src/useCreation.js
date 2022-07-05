import { useRef } from "react";
// import type { DependencyList } from "react";
const depsAreSame = (oldDeps, deps) => {
  console.log('oldDeps:', oldDeps);
  console.log('deps:', deps);
  if(oldDeps === deps) {
    return true;
  }
  for(let i=0;i<oldDeps.length;i++) {
    if(!Object.is(oldDeps[i], deps[i])) {
      return false;
    }
  }
  return true;
}
const useCreation = (fn, deps) => {
  const { current } = useRef({
    deps, obj: undefined, initialized: false
  })
  console.log('current:', current);
  if(current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }
  return current.obj;
}
export default useCreation;
