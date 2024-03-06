const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use((request, response, next) => {
    console.log('Test');
    next();
})


const rutasLogin = require('./routes/login.routes');
app.use('/user', rutasLogin);



app.listen(3050);