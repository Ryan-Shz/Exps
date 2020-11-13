// 启动一个服务
const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('Hello Node.js!');
})
server.listen(3001, '127.0.0.1', ()=> {
    console.log('server start success!')
});

// 配置Nodemon, 修改代码后会自动重启服务
// 1. npm install nodemon -D
// 2. 修改 package.json 中的启动命令为 nodemon xxx.js
// 3. 在根目录下增加 nodemon.json 指定 特殊watch 的文件，避免改动无关文件也自动重启
// 4. 在命令前加上 DEBUG=* 可以捕获更多日志