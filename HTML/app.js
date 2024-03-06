const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('Test');
    next();
})

app.use('/user/login', (request, response, next) => {
    response.send('Respuesta de la ruta "/user/login"'); 
  });

app.listen(3050);