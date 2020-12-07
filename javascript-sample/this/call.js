let a = {
    user: "Ryan",
    fn: function(params) {
        console.log(`${params} ${this.user}`);
    }
}

let fn = a.fn;
fn("Hello") // undefined

// 使用 call 函数，在调用 fn 函数时，指定它的 this
// 可以添加多个参数
// 如果第一个参数是 null，指向的是 window对象
fn.call(a, "Hello");