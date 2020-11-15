// 实现队列，多个promise顺序执行
// 利用then返回一个新promise的特性
// 可以用forEach等循环实现
let promise = doSomething();
promise = promise.then(doSomethingElse1);
promise = promise.then(doSomethingElse2);
promise = promise.then(doSomethingElse3);
promise = promise.then(doSomethingElse4);

