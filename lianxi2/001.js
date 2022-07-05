// function crazyFunction(){
//   var a=(b=10);
// }
// crazyFunction();
// console.log('b', typeof b === 'undefined'); false
// console.log('a', typeof a === 'undefined'); true

// const numbers=[1,2,3];
// for(var index=0;index<numbers.length;index++);
// {
//   const number=numbers[index];
//   console.log(number);
// }


let i;
for(let i=0;i<3;i++){
  // const log=()=>{
  //   console.log(i);
  // };
  // setTimeout(log,100);
  setTimeout(()=>{
    console.log(i);
  },1000);
}