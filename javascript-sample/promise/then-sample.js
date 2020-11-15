// 示例结论：
// 1. 一个 promise 可以写 多个 then
// 2. then 可以接收两个参数，分别代码 fullfilled 和 rejected
// 3. 当Promise的状态改变时，then会根据其最终状态，选择特定的状态相应函数执行
// 4. promise 的 then 会返回一个新的 promise实例，所以它可以链式调用
// 5. 当前then返回什么下一个then就接受到什么，如果不返回，则下个then接受到的就是undefine
// 6. 状态响应函数可以返回新的promise, 或其他值
// 7. 如果返回新的promise，那么下一级的.then会在新Promise状态改变后执行
// 8. 如果返回其他值，则会立刻执行下一级.then

console.log('start');

new Promise(resolve => {
    setTimeout(()=> {
        resolve('hello');
    }, 2000);
}).then(value => {
    console.log(value);
    console.log('everyone');
    (function () {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Mr.R');
                resolve('Yes');
            }, 2000);
        });
    }());
    // 不直接return新的promise
    return false;
}).then(value => {
    // 因为上面返回的是false, 此处输出false world!
    console.log(value + ' world!');
})

