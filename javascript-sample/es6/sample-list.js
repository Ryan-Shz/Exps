// 以下注释的每一点都是ES新特性

// 1. 使用const定义常量
const MAX_LIMIT = 15;

let list = ['1', '2', '3'];
// 2. 对象属性简写方式，不用写key
let obj = {
    list
}
console.log(obj);

let funcObj = {
    // 3. 对象中的方法不需要加function关键字
    // 4. 可以给参数添加默认值
    load(start = 0) {
        // 5. 引入Promise执行异步操作
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Yes');
            }, 2000);
        });
    }
}

// 6. 引入箭头函数
funcObj.load(1).then(value => {
    console.log(value);
});

// 7，...对象展开运算符
let user = {
    name: 'Ryan',
    age: 15
}
user = {...user, age: 22};
console.log(user);

// 8. 异步函数(ES8引入的异步编程解决方案)
let asyncFunc = async (x, y) => {
    let result = await funcObj.load(1);
    console.log('result1: ' + result);
}
asyncFunc();

async function loadFromServer() {
    let result = await funcObj.load(2);
    console.log('result2: ' + result);
}
loadFromServer();