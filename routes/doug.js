const express = require('express');
const router = express.Router();

router.get('/Doug', (req, res) => {
    const heading = 'Doug';
    const imageName = 'doug';
    res.render('doug', {
        heading: heading,
        imageName: imageName
    });
})

module.exports = router;