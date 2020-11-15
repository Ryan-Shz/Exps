// 定义一个对象
const person = {
  name: "Ryan",
  age: 12,
  job: {
    name: "engineer",
    workAge: 7,
  },
};

// ES5写法
// let name = person.name;
// let age = person.age;

// ES6对象的解构赋值
// 解构的变量名和对象的属性名要11对应
// name:jobName 可以给name属性取个别名，避免变量名重复
// 属性名: {...} 表示继续解构对象
let {
  name,
  age,
  job: { name: jobName, workAge },
} = person;
console.log(name, age, jobName, workAge);

// ES6数组的解构赋值
let arr = ["Ryan", "Tom", "Fiona"];
let [a, b, c] = arr;
console.log(`a: ${a}, b: ${b}, c: ${c}`);

// 解构赋值的示例
// 当对象或数组作为函数参数时，参数可以直接写成解耦赋值的形式
// 参数是数组
let sum = ([a, b, c]) => {
    return a + b + c;
}
console.log(sum([1, 2, 3]));
// 参数是对象
let foo = ({name, age, sex}) => {
    console.log(name, age, sex);
}
foo({
    name: 'Ryan', 
    age: 11,
    sex: 'male'
});
// 函数返回值是对象或者数组，直接使用解构赋值
let foo1 = () => {
    return {
        name1: 'Ryan',
        age1: 22
    }
}
let {name1, age1} = foo1();
console.log(name1, age1);

// 利用数组解构的特性进行变量交换
let k = 1;
let v = 2;
[v, k] = [k, v];
console.log(k, v);

// json转化为对象后进行解构
let result = '{"name3": "Ryan", "age3": "12"}';
let {name3, age3} = JSON.parse(result);
console.log(name3, age3);