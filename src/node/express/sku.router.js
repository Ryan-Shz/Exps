const express = require('express');

const router = express.Router();

router.get('/list', [/* middleware */], (req, res) => {
    res.json({
        list: [
            {
                name: 'Sku',
                id: 1
            }
        ]
    });
})

module.exports = router;