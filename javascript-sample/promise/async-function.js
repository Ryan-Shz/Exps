// async/await的基本用法
// 异步非阻塞
// await 只能使用在 promise对象上
console.log('start');

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('test');
        }, 2000);
    });
}

async function test() {
    // async函数内部也是同步执行的
    console.log('test start');
    // 直到执行到这个promise的await方法
    // 类似kotlin中的挂起函数
    let res = await resolveAfter2Seconds();
    console.log(res);
}

test();

console.log('end');