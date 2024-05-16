const mysql = require('mysql');





const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysqlpassword',
    database: 'restaurantdb'
});



conn.connect(function(err){
    if(err)
    throw err;

    console.log('SQL connected')
});


module.exports = conn;









