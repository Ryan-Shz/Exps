let a = {
    user: "Ryan",
    fn: function(params) {
        console.log(`${params} ${this.user}`);
    }
}

let fn = a.fn;
fn("Hello") // undefined

// bind 会返回一个新的函数对象
fn = fn.bind(a);
fn("Hello");
