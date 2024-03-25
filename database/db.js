const mysql = require('mysql');


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysqlpassword'
});


/*
connectDB.connect(function(err){
    if(err)
    throw err;

    console.log('Connection successful!')
});


module.exports = connectDB;
*/

const connectDB = async () => {

    try {
        await conn.connect();
        console.log("Database connection successful!");
    } catch(err) {
        console.log(err);
    }


};


module.exports = connectDB;