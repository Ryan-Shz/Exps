let promise = Promise.reject('Somthing wrong');

promise.then(() => {
    console.log('step1');
}).catch(() => {
    console.log('step2');
    // 这里执行时会出现警告UnhandledPromiseRejectionWarning
    // 因为这个reject状态的promise没有被处理
    return Promise.reject({
        // 不会执行
        then() {
            console.log('thenable execute');
        },
        // 不会执行
        catch() {
            console.log('catchable execute');
        }
    });
}) 