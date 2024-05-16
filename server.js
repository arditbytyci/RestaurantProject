const express = require('express');
const app = express();
const db = require('./models')
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const  conn  = require('./database/db');
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);

db.sequelize.sync().then(() => {
    app.listen(port, ()=> {
        console.log(`Listening on http://localhost:${port} `);
    });
});
















