const mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "archiejain",
    database:"nodedb"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected");

    let sql = "SHOW TABLES FROM nodedb";
    let sql1 = "CREATE TABLE cards (id int, title varchar(255), image BLOB, price varchar(255), description varchar(255))"
    connection.query(sql, (err, result) => {
        if(err) throw err;
        result[0].Tables_in_nodedb.indexOf('cards') > -1 ? console.log(result) : (connection.query(sql1,(err, result) => {
            if(err) throw err; 
        }))
        
    })
})

module.exports = {connection};