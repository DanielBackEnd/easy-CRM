const express = require('express');

const customersRouter = express.Router();

customersRouter
    .get('/', (req, res) => {
        res.send('working...');
    })
;
module.exports = {
    customersRouter,
}