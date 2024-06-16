const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { jwAuth } = require('../middleware/authenticator');

router.post('/', jwAuth, categoryController.create);

router.get('/', categoryController.readAll);



module.exports = router;