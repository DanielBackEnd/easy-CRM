const express = require('express');
const hbs = require('express-handlebars');
const {db} = require("./utils/db");

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

// testing route
app.get('/', (req, res) => {
    console.log(db.getOne('db18e7d9-0e79-4382-ae03-9a58d8e4d27f'));
    res.send('ok');
});


app.listen(3000, 'localhost', () => {
    console.log('Server is running on port: http://localhost:3000');
});