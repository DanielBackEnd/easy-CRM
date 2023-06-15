const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const {db} = require("./utils/db");
const {homeRouter} = require("./routers/home");
const {customersRouter} = require("./routers/customers");

const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/customers', customersRouter);


app.listen(3000, 'localhost', () => {
    console.log('Server is running on port: http://localhost:3000');
});