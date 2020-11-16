// Map的使用
let num = 123;
let arr = [1, 2, 3, 4, 5];
let func = function () {
  console.log("hello");
};
let obj = { name: "JavaScript" };

// 创建map对象
const map = new Map([
    ['s1', 'v1'],
    ['s2', 'v2']
]);
// 添加数据, map的key和value都可以是任意类型
map.set(num, "v1");
map.set(arr, "v2");
map.set(func, "v3");
map.set(obj, "v4");
// 删除
map.delete(num);
// 遍历1
for (let key of map.keys()) {
  console.log(`${typeof(key)} : ${map.get(key)}`);
}
// 遍历2
map.forEach((value, key) => {
  console.log(`key: ${typeof(key)}, value: ${value}`);
});

// Set的使用
let set1 = new Set([1, 2, 3, 4, 5]);
set1.add(1);
set1.delete(2);
console.log(set1);

let set2 = new Set(2, 3, 4, 6, 7);
// 合并去重
let merge = new Set([...set1, ...set2]);
console.log(merge);