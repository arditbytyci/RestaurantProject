const express = require('express');
const router = express.Router();
const { jwAuth } = require('../middleware/authenticator');
const upload = require('../middleware/multer');
const productController = require('../controllers/product');


router.post('/', jwAuth,  upload.single('productImage'), productController.create);



module.exports = router;

