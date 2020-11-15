console.log('start');

// promise队列赋值给一个变量
let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 1000);  
});

setTimeout(()=> {
    // fullfilled状态的promise也可以使用then获取resolve的值
    promise.then(value => {
        console.log(value + 'world!');
    })
}, 3000);