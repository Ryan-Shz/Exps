const express = require('express');
// 创建一个express实例
const app = express();

// 中间件完整的结构
// 1. 是一个函数
// 2. err, req, res, next
function demo_middleware(err, req, res, next) {
    // 1. 处理异常
    // 2. 处理业务功能，然后转交控制权给next
    // 3. 响应请求，结束响应，当做路由的处理函数
}

// 内置的顶级中间件
// 1. 处理静态资源文件 express.static
// 2. 处理json       express.json
// 3. 处理urlencode  express.urlencoded
app.use(express.static('./static/', {
    extensions: ['html', 'htm']
}));

// 自定义中间件1：打印日志的中间件
function log_middleware(req, res, next) {
    console.log("receive request!");
    next();
}
app.use(log_middleware);

// 自定义中间件2：验证请求参数是否合法的中间件
function valid_name_middleware(req, res, next) {
    let {name} = req.query;
    if (!name) {
        res.json({
            message: 'invalid params! need name.'
        });
    } else {
        next();
    }
}
app.all('/name', valid_name_middleware);

// 自定义中间3：在路由中使用
const userRouter = require('./user.router');
app.use(userRouter);

// 通过请求的方法类型定义路由
app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        name: 'Ryan',
        age
    });
});
app.post('/name', (req, res) => {
    res.send('Ryan post');
});

// 通过uri定义路由
app.get('/user/byname', (req, res) => {
    let {name} = req.query;
    res.json({
        name
    });
})
app.get('/user/byid', (req, res) => {
    let {id} = req.query;
    res.json({
        id
    });
})

// 切割路由，注册不同path的路由，将工程细化
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
// http://127.0.0.1:3000/member/list
app.use('/member',memberRouter); 
// http://127.0.0.1:3000/sku/list
app.use('/sku', skuRouter);

// 使用sequlize处理数据库示例
const sequlizeRouter = require('./sequlize/sequlize.router');
app.use('/user', sequlizeRouter);

// 自定义中间件4：异常处理
// 异常处理中间件应该放在最后一个路由
app.get('/error', (res, req) => {
    throw new Error('test error');
});
function passerror_middleware(req, res, next) {
    try {
        // 可能引发异常的操作
    } catch (error) {
        // 可以通过next向下一个中间件传递
        next(error);
    }
    // Promise可以这样用
    // Promise.then().catch(next);
}
function error_handler_middleware(err, req, res, next) {
    if (err) {
        let {message} = err;
        res.status(500)
        .json({
            message: 'server error! message: ' + message
        });
    } 
}
// 处理404异常
function not_found_handler(req, res, next) {
    res.json({
        code: 404, 
        message: 'api not found'
    });
}
app.use(not_found_handler);
app.use(error_handler_middleware);

app.listen(3000, () => {
    console.log('express server start sucess!')
});