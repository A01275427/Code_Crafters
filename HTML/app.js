const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('Test');
    next();
})

app.listen(3050);