const express= require('express');

const router = express.Router()
const connection = require('../database/Connection').connection;

router.get('/', (req,res) => {
    
    const SQL = 'SELECT * FROM cards';

    connection.query(SQL, (err,result) => {
        if(err) throw err;

        res.status(200).send(result)
    })
})

router.get('/card/:id', (req,res) => {
    console.log(req.params);
    res.send("Hellow 1 GET")
})


module.exports = router