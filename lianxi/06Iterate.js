const arr=[1,2,3];
arr.forEach((item,index)=>{
  console.log(`索引为${index}的元素是${item}`);
})

function iteratorGenerator(list){
  var idx=0;
  var len=list.length;
  return {
    next:function(){
      var done=idx>=len;
      var value=!done ? list[idx++]:undefined;
      return {
        done,value
      }
    }
  }
}
var iterator=iteratorGenerator(['1号','2号','3号','4号',]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());