const inventory=[
  {name:'Banans',quantity:5},
  {name:'Apples',quantity:10},
  {name:'Grapes',quantity:2}
];
function getApples(arr,value){
  for(let index=0;index<arr.length;index++){
    if(arr[index].name==='Apples'){
      return arr[index];
    }
  }
}
function getApples2(arr,value){
  return arr.find((obj) => obj.name==='Apples');
}
const result=getApples(inventory);
const result2=getApples2(inventory);
console.log(result2);

// const num=parseInt('10');
const num=+'10';
console.log(num);
console.log(typeof num);
console.log(Number('0.1'));
console.log(+'0.1');
console.log(0.1 === '0.1');
console.log('-----');
const isInteger = (val) => Number.isInteger(+val);
console.log(isInteger('dev'));
console.log(isInteger('30'));
console.log(isInteger(30));
console.log(+'09iu');
console.log(parseInt('09iu'));
const myOrigin = {name:['jack','tom'],age:[12,14],sex:undefined,events:{AAclick:()=>{console.log(123);}},A:{click:()=>{console.log(321);}}};
let target = {events:{}};
target = JSON.parse(JSON.stringify(myOrigin));
// target.events.click = myOrigin.events.click;
target.events.click = myOrigin.events.click;
// myOrigin.events.click = null;
// console.log(target);
console.log('JSON:', JSON.stringify(myOrigin));
// console.log(myOrigin);
console.log(typeof target.events.click);
console.log(target.events.click instanceof Function);
const namec='DevPoint';
const message="Hi "+namec + "!";
console.log(message);
const named="DevPoint";
const messaged=`Hi ${named}!`;
console.log(messaged);
const employee={name:"DevPoint",age:30};
const salary={grade:"A"};
// const summary=salary;
// for(const key in employee){
//   summary[key]=employee[key];
// }
const summary = {...salary,...employee};
console.log(summary);
// repalcer 接受两个参数 key value
// key value 分别为对象的每个键值对
// 因此我们可以根据键或者值的类型进行简单筛选
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}
// function 可自己测试
function replacerFunc(key, value) {
  if (typeof value === "string") {
    return () => {};
  }
  return value;
}
const foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
const list = [1, '22', 3];
// const jsonString = JSON.stringify(foo, replacer);
// console.log(jsonString);
// console.log(JSON.stringify(list, replacer));
console.log(JSON.stringify(foo, replacerFunc));
console.log(JSON.stringify(list, replacerFunc));

const obj={
  name:"jack",
  age:23,
  toJSON(){
    return 'return toJSON';
  }
}
console.log(JSON.stringify(obj));
console.log(JSON.stringify([null, NaN, -NaN, Infinity, -Infinity]));
console.log(JSON.stringify([Number('123a'), +'123a', 1/0]));
const objsymbol = {
  name: 'zcxiaobao',
  age: 18,
  [Symbol('lyl')]: 'unique'
}
function replacersymbol(key, value) {
  if (typeof key === 'symbol') {
    return value;
  }
}

// undefined
console.log(JSON.stringify(objsymbol, replacersymbol));
