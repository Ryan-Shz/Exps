class Person {
    constructor() {
        
    }
}

console.log(Person.prototype)

Person.prototype.nickname = "Ryan";
Person.prototype.age = 22;
Person.prototype.say = function() {
    console.log("Hello World");
}

let person = new Person();
console.log(`nickname: ${person.nickname}, age: ${person.nickname}`);
person.say();
 
// 当前对象中是否拥有自己的age属性，不能是原型对象中的
console.log(person.hasOwnProperty('age')); // false
// 会在person对象中新增age属性，不会去修改原型对象中的属性
person.age = 23;
console.log(person.age);
console.log(person.__proto__.age);
console.log(person.hasOwnProperty('age')); // true
// 如果还想访问原型对象中的属性，可以删掉当前对象中的属性
delete person.age
console.log(person.age);
console.log(person.hasOwnProperty('age')); // false
// 