const express = require('express');
const app = express();
app.use('/', (req, res) => {
    res.send('Hello world');
});

// PORT

app.listen(300);
console.log('App running in http://localhost:300');