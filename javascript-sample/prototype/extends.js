const { Interface } = require("readline");

class Person {
    constructor() {

    }
}

Person.prototype.nickname = "Ryan";

let person = new Person();

console.log(person.__proto__);
console.log(person.__proto__.__proto__)
console.log(person.__proto__.__proto__ === Object.prototype)

console.log(Object.prototype); // {}
console.log(Object.__proto__); // Function
