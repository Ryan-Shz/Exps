const express = require('express');

const router = express.Router();

// 路由级别的中间件
function valid_login_params(req, res, next) {
    let {name, password} = req.query;
    if (!name || !password) {
        res.json({
            message: 'invalid login params! need name and password.'
        });
    } else {
        // 通过req或res可以直接把处理好的数据传给下一个中间件
        req.formdata = {
            name, password
        }
        next();
    }
}

// 在路由中直接使用中间件
router.get('/login', [valid_login_params], (req, res) => {
    let {formdata} = req;
    res.json({
        formdata,
        message: 'login success!'
    });
});

module.exports = router;