const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use((request, response, next) => {
    console.log('Test');
    next();
})

app.use('/user/login', (request, response, next) => {
    response.send('Respuesta de la ruta "/user/login"'); 
  });

app.listen(3050);