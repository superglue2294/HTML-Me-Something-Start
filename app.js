const express = require('express');
const app = express();
let PORT = process.env.PORT || 8888;

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/teddy'));
app.use(require('./routes/doug'));
app.use(require('./routes/mrMeeseeks'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}. Please go to localhost:${PORT}`);
})