// Promise.resolve 返回一个fullfilled状态的 Promise 实例
// 1. 如果没有参数，则发射到下一次为 undefine
// 2. 如果参数不是promise, 则发射到下一次then的是参数值
// 3. 如果参数是promise, 则原封不动返回该promise
// 4. 如果参数是thenable, 则会直接执行thenable
console.log('start');

Promise.resolve()
    .then(value => {
        console.log('step1: ' + value);
        return Promise.resolve('hello');
    }).then(value => {
        console.log('step2: ' + value);
        return Promise.resolve(new Promise(resolve => {
            setTimeout(() => {
                resolve('Good');
            }, 2000);
        }));
    }).then(value => {
        console.log('step3: ' + value);
        return Promise.resolve({
            then() {
                console.log('step4');
            }
        });
    })