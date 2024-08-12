const express = require('express');
const router = express.Router();

router.get('/MrMeeseeks', (req, res) => {
    const heading = 'Mr. Meeseeks';
    const imageName = 'mrmeeseeks';
    res.render('mrMeeseeks', {
        heading: heading,
        imageName: imageName
    });
})

module.exports = router;