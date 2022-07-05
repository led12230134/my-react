function unique(arr) {
  const keySet = new Set();
  const uniqueObj = {}
  // 提取所有的键
  arr.forEach(item => {
    Object.keys(item).forEach(key => keySet.add(key))
  })
  const replacer = [...keySet];
  arr.forEach(item => {
    // 所有的对象按照规定键值 replacer 过滤
    unique[JSON.stringify(item, replacer)] = item;
  })
  return Object.keys(unique).map(u => JSON.parse(u))
}

// 测试一下
console.log(unique([{}, {}, 
      {x:1},
      {x:1},
      {a:1},
      {x:1,a:1},
      {x:1,a:1},
      {x:1,a:1,b:1}
      ]));