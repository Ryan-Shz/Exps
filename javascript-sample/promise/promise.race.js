// Promise.race类似Promise.all
// 区别在于，它有一个完成就算完成
// 有一个完成后，其他的promise不会继续执行
console.log('start');

let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('step1');
    }, 2000);
});

let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('step2');
    }, 2000);
});

Promise.race([p1, p2])
    .then(value => {
        console.log(value);
    });