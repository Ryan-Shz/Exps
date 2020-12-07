// 定义一个普通函数
function Parent() { }

// 使用new关键字，让函数成为一个构造函数
let parent = new Parent()

// prototype指向函数的原型对象
// 只有函数拥有这个属性
console.log("prototype: " + parent.prototype) // parent是对象，没有这个属性，所以这里是undefined
// 对象的公共属性
// __proto__指向此对象的原型对象，和构造函数的prototype是同一个对象
console.log("__proto_: " + parent.__proto__)
// 
console.log("constructor: " + parent.constructor)

// 函数拥有 prototype
// prototype让由特定函数创建的所有实例可以共享属性和方法
// 也可以说是让某一个构造函数实例化的所有对象可以找到公共的方法和属性
console.log(Parent.prototype)
// 在原型上添加一个属性
Parent.prototype.nickname = "我是原型上的名称: Ryan"
console.log(parent.nickname)
// 对象是否自身包含 z 这个属性
console.log(parent.hasOwnProperty('nickname'))
console.log(parent.__proto__.nickname)

// 一个对象的__proto__指向构造它的那个构造函数的prototype
console.log(parent.__proto__ === Parent.prototype)
// 万物继承于 Object.prototype
console.log(Parent.prototype.__proto__ === Object.prototype)
// 任意一个对象都可以调用Object原型对象上提供的属性和方法，比如toString
console.log(parent.toString())