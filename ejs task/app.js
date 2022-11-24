const express = require('express');
const port = 5555;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

const loginPage = require('./routes/login');
const registerPage = require('./routes/register');

app.use('/login', loginPage);
app.use('/register', registerPage);

app.listen(port, () => {
    console.log(`Server :- ${port}`);
})