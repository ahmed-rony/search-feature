const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Users } = require('./users');

const port = 30000;
const app = express(); 3

app.use(cors());
app.use(bodyParser.json());

// ============================
app.get('/users', (req, res) => {
    const { q } = req.query;
    
    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some(key => item[key].toLowerCase().includes(q))
        );
    };

    // const Users = User.find({$regex: q});  MongoDB searching method;

    res.send(search(Users).splice(0, 10))
})


app.listen(port, () => {
    console.log();
});