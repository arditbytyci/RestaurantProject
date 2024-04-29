
const conn = require('../database/db');




const user = `CREATE TABLE IF NOT EXISTS user 
(
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  role TINYINT(2),
  date_created TIMESTAMP



)`;
conn.query(user, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});
 


module.exports = user;


