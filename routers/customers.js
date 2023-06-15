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
    .post('/', async (req, res) => {
        const {name, company, phone, mail, country} = req.body;
        await db.create({
            name,
            company,
            phone,
            mail,
            country,
        });
        res.render('customers/added-customer', {
           name,
        });
    })
    .put('/:id', (req, res) => {
        res.send('customer has been edited.');
    })
    .delete('/:id', (req, res) => {
        res.send('customer has been deleted');
    })
    .get('/forms/add-form', (req, res) => {
        res.render('customers/forms/add-form');
    })
;
module.exports = {
    customersRouter,
}