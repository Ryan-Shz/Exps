const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const models = require('../../../../models');

// 1. 所有错误 http status = 500

// 查询任务列表
app.get('/todo/list/:status/:page', async (req, res, next) => {
    // 1. 状态： 1待办 2未完成 3删除
    // 2. 分页处理
    let {status, page} = req.params;
    let limit = 10;
    let offset = (page - 1) * limit;
    // status为-1时表示查询所有
    let where = {};
    if (status != -1) {
        where.status = status;
    }
    try {
        let list = await models.Todo.findAndCountAll({
            where,
            offset,
            limit
        });
        res.json({
            list
        });
    } catch (error) {
        next(error)
    }
})

// 新增任务
app.post('/todo/create', async (req, res, next) => {
    try {
        let { name, deadline, content } = req.body;
        let todo = await models.Todo.create({
            name, deadline, content
        });
        res.json({
            todo,
            name, deadline, content
        });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
})

// 编辑任务
app.post('/todo/update', async (req, res, next) => {
    try {
        let { name, deadline, content, id } = req.body;
        let todo = await models.Todo.findOne({
            where: { id }
        });
        if (todo) {
            todo = todo.update({
                name, deadline, content
            })
        }
        res.json({
            todo,
            name, deadline, content, id
        })
    } catch (error) {
        next(error)
    }
})

// 更新任务状态（包含删除）
app.post('/todo/status', async (req, res, next) => {
    try {
        let { id, status } = req.body;
        let todo = await models.Todo.findOne({
            where: { id }
        });
        if (todo && status != todo.status) {
            todo = await todo.update({
                status
            });
        }
        res.json({
            todo,
            id, status
        });
    } catch (error) {
        next(error)
    }
})

// 统一异常处理
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            code: 500,
            message: err.message
        })
    }
})

app.listen(3000, () => {
    console.log('server start success!');
});