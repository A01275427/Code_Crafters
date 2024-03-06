const express = require('express');
const router = express.Router();

router.get('/users/login', (request, response, next) => {
    response.render('login');
})

module.exports = router;