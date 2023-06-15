const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.listen(3000, 'localhost', () => {
    console.log('Server is running on port: http://localhost:3000');
});