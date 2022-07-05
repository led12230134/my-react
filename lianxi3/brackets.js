function addParen(list,leftRem,rightRem,str,count){
  if(count === str.length) {
    list.push(str);
  }
  if(leftRem > 0){
    str[count] = '(';
    addParen(list,leftRem-1,rightRem,str,count+1);
  }
  if(rightRem>0&&rightRem>leftRem){
    str[count]=")";
    addParen(list,leftRem,rightRem-1,str,count+1);
  }
}
function genParens(n){
  let res = [];
  let str = new Array(2*n);
  addParen(res,n,n,str,0);
  return res;
}
let resTmp = genParens(2);
console.log(resTmp);