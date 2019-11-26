const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(require('./router/routes'));

app.get('/test', (req, res) => {
    res.send(`Server is running on port ${PORT}.`);
})

app.all('*', (req, res) => {
    res.send(`Access denied`);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));