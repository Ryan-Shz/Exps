// Promise.all将多个promise实例包装成一个promise
// 1. 当所有子promise都完成，该promise才算完成，返回值是包含全部子promise值的数组
// 2. 任何一个子promise失败，该promise都会失败，返回值是第一个失败的子promise结果
// 3. 可以传入任意的对象，如果不是promise对象则可以直接作为结果，是promise对象则会执行它获取结果
let newPromise = Promise.all([1, 2, 3]);

newPromise.then(all => {
    console.log(all);
    return Promise.all([
        function() {
            console.log('d1');
        }
    ], 'd2', false);
});

// 和map配合使用
const FileSystem = require('./FileSystem');
function readLargest(dir) {
    return FileSystem.readDir(dir, 'utf-8')
        .then(files => {
            return Promise.all(files.map(file => {
                return new Promise(resolve => {
                    // ...
                })
            }));
        })
}