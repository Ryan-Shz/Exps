console.log("start");

// 错误处理方式1
// reject(message) + then(null, (message) => {...})
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("good bye!");
  }, 2000);
}).then(
  (value) => {
    console.log(value);
  },
  (value) => {
    console.log("method1: " + value);
  }
);

// 异常处理方式2
// reject(error) + catch
// 必须调用 reject 来发送 异常
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error('this is a test error!');
        } catch (error) {
            // 这里调用后后面的catch函数才能执行到
            reject(error);
        }
    }, 2000);
}).catch(error => {
    console.log('method2: ' + error);
});

// 如果promise 中的异常是在同一个调用栈抛出的，则会被catch函数捕获
// 而无需再手动调用reject发送
new Promise((resolve, reject) => {
    throw new Error('this is a test error!');
}).catch(error => {
    console.log('method3: ' + error);
});

// catch 仍然会返回 promise 实例
new Promise((resolve, reject) => {
    throw new Error('this is a test error!');
}).catch(error => {
    console.log('method4: ' + error);
    // 重点
    return 'return in catch'
}).then((value) => {
    // 重点
    console.log(value);
});