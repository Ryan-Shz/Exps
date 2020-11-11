const express = require('express');

const router = express.Router();

const models = require('../../../../models');
// models.User
// models.Sequlize
// models.sequlize
router.get('/create', async (req, res) => {
    let {firstName, lastName, email} = req.query;
    // create方法返回的是一个Promise对象
    let user = await models.User.create({
        firstName,
        lastName,
        email
    });
    console.log(user);
    res.json({
        message: 'create success!',
        user
    });
})

router.get('/list', async (req, res) => {
    let list = await models.User.findAll();
    res.json({
        list
    });
})

router.get('/detail/:id', async (req, res) => {
    let {id} = req.params;
    let user = await models.User.findOne({
        where: { id }
    })
    res.json({
        user
    });
})

module.exports = router;



