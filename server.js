const express = require('express');
const app = express();
const db = require('./models')
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const  conn  = require('./database/db');
const port = process.env.PORT || 5000;
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const filterRoutes = require('./routes/filter');
const paymentRoutes = require('./routes/payment');
const bodyParser = require('body-parser');

//middleware 
app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/filter', filterRoutes);
app.use('/api/payment', paymentRoutes);


db.sequelize.sync().then(() => {
    app.listen(port, ()=> {
        console.log(`Listening on http://localhost:${port} `);
    });
});
















