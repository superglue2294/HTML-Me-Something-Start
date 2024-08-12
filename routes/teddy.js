const express = require('express');
const router = express.Router();

router.get('/Teddy', (req, res) => {
    const heading = 'Teddy';
    const imageName = 'teddy';
    res.render('teddy', {
        heading: heading,
        imageName: imageName
    });
})

module.exports = router;