const express = require('express');
const router = express.Router();
const { jwAuth } = require('../middleware/authenticator');
const upload = require('../middleware/multer');
const productController = require('../controllers/product');



router.post('/', jwAuth,  upload.single('productImage'), productController.create);
router.get('/', productController.readAll);
router.delete('/:productId', jwAuth, productController.delete);
router.get('/:productId', productController.read);
router.put('/:productId', jwAuth, upload.single('productImage'),productController.update);

module.exports = router;

 