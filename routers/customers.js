const express = require('express');
const {db} = require("../utils/db");

const customersRouter = express.Router();

customersRouter
    .get('/', (req, res) => {
        res.render('customers/get-all', {
            customers: db.getAll(),
        });
    })
    .get('/:id', (req, res) => {
        const customer = db.getOne(req.params.id);
        res.render('customers/get-one', {
            customer,
        });
    })
    .post('/', (req, res) => {
        res.send('adding new customer.');
    })
    .put('/:id', (req, res) => {
        res.send('customer has been edited.');
    })
    .delete('/:id', (req, res) => {
        res.send('customer has been deleted');
    })
;
module.exports = {
    customersRouter,
}