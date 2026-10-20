// index.js
const express = require('express');
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});   

app.get('/contact', (req, res) => {
    res.send('The Contact Page');
});
app.get('/about', (req, res) => {
    res.send('The About Page');
});
app.get('*any', (req, res) => {
    res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});