
const express = require('express');
const fs = require('fs');
const connection = require('./database/Connection').connection;
var cards;
const cors = require("cors");
const app = express();
app.use(cors())
app.use('/', require('./middleware/router.js'));

fs.readFile('./card.config.json','utf-8',(err,data)=>{
    if(err) throw err;
    cards = JSON.parse(data);
    cards.map((data) => {
        saveRecord(data) 
    })
    console.log("Data Added");
})

function saveRecord(data) {

      var record = [data.id, data.title, data.price, data.description]
      console.log(data.image);
      const load = LOAD_FILE(data.image)
      var sql = `INSERT INTO cards (id, title, price, description,image) VALUES (? ${load})`;
    
      connection.query(sql, [record], (err, result) => {
        if(err) throw err;
       
     });
}

console.log("Program Ended");

app.listen(8000, () => {
    console.log("Server started");
})