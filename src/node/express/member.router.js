const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
    res.json({
        list: [
            {
                name: 'Ryan',
                id: 1
            }
        ]
    });
})

module.exports = router;