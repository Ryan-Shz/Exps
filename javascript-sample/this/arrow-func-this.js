let p = {
  a: () => {
    console.log(this);
  },
  b: {
    c: {
      d: () => {
        console.log(this);
      },
    },
  },
};
// 箭头函数的this是继承父执行上下文里面的this
// 对象不能产生作用域
p.a();
p.b.c.d();

// 和普通函数的区别
var x = 11;
var obj = {
  x: 22,
  methods: {
    x: 33,
    say: function () {
      console.log(this.x);
    },
    say2: () => {
      console.log(this.x);
    },
  },
};
obj.methods.say(); //33
obj.methods.say2(); //11
