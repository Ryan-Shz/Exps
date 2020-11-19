function* add(x) {
    console.log('x: ' + x);
    let y = yield x + 2;
    return y;
}

let generator = add(1);
let y1 = generator.next();
console.log(y1);

let y2 = generator.next(2);
console.log(y2);


function* gen(x) {
    try {
        var y = yield x + 2;
    } catch (error) {
        console.log(error);
    }
    return y;
}

var g = gen(1);
g.next();
g.throw('出错了');


let nodeFetch = require('node-fetch');

function* fetch(){
    var url = 'https://api.github.com/users/github';
    var result = yield nodeFetch(url);
    console.log(result.bio);
  }

var fetch = fetch();
var result = fetch.next();
console.log(`result: ${result}`);
result.value.then(function(data){
  return data.json();
}).then(function(data){
  fetch.next(data);
});