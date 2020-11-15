// 1. 对象中普通函数的this指向
const obj1 = {
    name: 'Ryan', 
    // 普通函数的this指向当前对象
    showName: function() {
        console.log(`my name is ${this.name}`);
    }
}
// my name is Ryan
obj1.showName();

// 2. 对象的箭头函数的this指向
const obj2 = {
    name: 'Ryan', 
    // 箭头函数没有this，指向外层这个JS文件对象
    showName: () => {
        console.log(`my name is ${this.name}`);
    }
}
// my name is undefined
obj2.showName();

// 3. 对象内的方法可以简写为 方法名() {...}
const obj3 = {
    name: 'Ryan',
    // 对象方法的简写函数，不是箭头函数
    showName() {
        console.log(`my name is ${this.name}`);
    }
}
// my name is Ryan
obj3.showName();

// 4. 箭头函数中的无法获取arguments对象
// ES5 的写法
function sum(x, y) {
    console.log(arguments);
    console.log(x + y);
};
sum(1, 2);
// 箭头函数写法
let sum1 = (x, y) => {
    // 无法获取arguments对象
    console.log(arguments);
    console.log(x + y);
}
sum1(1, 2);

// 5. 访问类对象的构造参数
function Course(name, price) {
    this.name = name;
    this.price = price;
}
let c = new Course('Ryan', 12);
console.log(c);

let course = (name, price) => {
    this.name = name;
    this.price = price;
}
// TypeError: course is not a constructor
let c1 = new course();
console.log(c1);