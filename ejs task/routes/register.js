const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register');
})

router.post('/register-data', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let age = req.body.age;
    let city = req.body.city;

    res.send(name + "'s form " + city)
})

module.exports = router;