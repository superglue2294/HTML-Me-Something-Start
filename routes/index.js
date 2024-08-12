const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const heading = 'Home';
    const imageName = 'TRI_0765'
    res.render('index', {
        heading: heading,
        imageName: imageName
    });
})

module.exports = router;